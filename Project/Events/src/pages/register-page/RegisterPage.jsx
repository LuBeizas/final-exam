import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, LoginCard, Title, Form } from './RegisterPage.styled';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <MainContainer>
      <LoginCard>
        <Title>Register</Title>

        <Form onSubmit={handleRegister}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="link-container">
            <Link to="/">Already have an account? Log in here</Link>
          </div>
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
        </Form>
      </LoginCard>
    </MainContainer>
  );
}

export default RegisterPage;
