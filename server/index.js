const express = require('express');
const mysql = require('mysql2');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { authenticate } = require('./middleware');
require('dotenv').config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(cookieParser());

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Lukas123',
  database: 'final_exam',
};

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

const groupSchema = Joi.object({
  name: Joi.string().trim().required(),
});

const dbPool = mysql.createPool(mysqlConfig).promise();

let authToken;

server.get('/', authenticate, (req, res) => {
  console.log(req.user);
  res.status(200).send({ message: 'Authorized' });
});

server.post('/login', async (req, res) => {
  let payload = req.body;

  try {
    payload = await userSchema.validateAsync(payload);
  } catch (error) {
    console.error(error);

    return res.status(400).send({ error: 'All fields are required' });
  }

  try {
    const [data] = await dbPool.execute(
      `
          SELECT * FROM organisers
          WHERE email = ?
      `,
      [payload.email]
    );

    if (!data.length) {
      return res.status(400).send({ error: 'Email or password did not match' });
    }

    const isPasswordMatching = await bcrypt.compare(
      payload.password,
      data[0].password
    );

    if (isPasswordMatching) {
      const token = jwt.sign(
        {
          email: data[0].email,
          id: data[0].id,
        },
        process.env.JWT_SECRET
      );
      authToken = token;
      return res.status(200).send({ token: authToken, id: data[0].id });
    }

    return res.status(400).send({ error: 'Email or password did not match' });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.post('/register', async (req, res) => {
  let payload = req.body;

  try {
    payload = await userSchema.validateAsync(payload);
  } catch (error) {
    console.error(error);

    return res.status(400).send({ error: 'All fields are required' }).end();
  }

  try {
    const encryptedPassword = await bcrypt.hash(payload.password, 10);
    console.log('Hashed password length:', encryptedPassword.length);
    const [response] = await dbPool.execute(
      `
                INSERT INTO organisers ( email, password)
                VALUES (?, ?)
            `,
      [payload.email, encryptedPassword]
    );
    const token = jwt.sign(
      {
        email: payload.email,
        id: response.insertId,
      },
      process.env.JWT_SECRET
    );
    authToken = token;
    return res.status(201).json({ token: authToken }).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.post('/events', async (req, res) => {
  const { name, date } = req.body;

  try {
    const [result] = await dbPool.execute(
      'INSERT INTO events (name, date) VALUES (?, ?)',
      [name, date]
    );

    const eventId = result.insertId;
    return res
      .status(201)
      .json({ eventId, message: 'Event created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.get('/events', async (req, res) => {
  try {
    const [events] = await dbPool.query('SELECT * FROM events');
    return res.status(200).json(events);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.get('/events/:id/members', async (req, res) => {
  const id = req.params.id;
  try {
    const [members] = await dbPool.query(
      'SELECT * FROM members WHERE Events_id = ?',
      [id]
    );
    return res.status(200).json(members);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.delete('/members/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await dbPool.query('DELETE FROM members WHERE id = ?', [id]);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.post('/events/:id/members', async (req, res) => {
  const eventId = req.params.id;
  const member = req.body;

  try {
    await dbPool.execute(
      'INSERT INTO members (Events_id, firstName, lastName, email, birthDate) VALUES (?, ?, ?, ?, ?)',
      [
        eventId,
        member.firstName,
        member.lastName,
        member.email,
        member.birthDate,
      ]
    );

    return res.status(201).json({ message: 'Member added successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
