import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: 100vh;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  width: 500px;
  background-color: #ffc0cb;
  border-radius: 16px;
  padding: 64px 32px 48px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 64px;
  font-weight: bold;
`;

export const Form = styled.form`
  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid lightgray;
    padding: 16px;
    font-size: 16px;
    margin-bottom: 16px;

    &:first-of-type {
      margin-top: 24px;
    }

    margin-right: -16px;
    margin-left: -16px;
  }

  label {
    font-size: 14px;
    margin-left: 4px;
  }

  .link-container {
    margin-top: 16px;
    text-align: center;
    margin-bottom: 32px;

    a {
      text-decoration: none;
      color: black;
      font-size: 14px;

      &:hover {
        color: purple;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    background-color: #add8e6;
    width: 100px;
    margin-top: 10px;
    padding: 10px 0;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    border: 1px solid black;
    color: rgb(100, 99, 99);
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  padding: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
`;
