import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #46a2da;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  img {
    margin-left: 30px;
    padding: 0 10px;
  }
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    margin: 10px;
    padding-right: 15px;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
