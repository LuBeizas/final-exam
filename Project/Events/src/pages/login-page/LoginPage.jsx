import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainContainer, LoginCard, Title, Form } from './LoginPage.styled';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/events');
      } else {
        console.log('Login failed:', data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <LoginCard>
        <Title>Login</Title>

        <Form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
            <Link to="/register">Don't have an account? Register here</Link>
          </div>
          <div className="button-container">
            <button type="submit">LOGIN</button>
          </div>
        </Form>
      </LoginCard>
    </MainContainer>
  );
}

export default LoginPage;
