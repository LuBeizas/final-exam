import { Link, Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/images/party-confetti-svgrepo-com.svg';
import {
  StyledLink,
  StyledNavigation,
  StyledTitle,
} from '../header/Header.styled';
import { Button, Typography } from '@mui/material';

const Header = () => {
  const routeData = () => {
    return {
      links: ['Events'],
      title: 'Events',
      buttons: [],
    };
  };
  return (
    <>
      <StyledNavigation>
        <Link component={RouterLink} to="/">
          <img src={logo} alt="events logo" />
        </Link>
        <StyledLink>
          {routeData().links.map((link) => (
            <Link
              key={link}
              underline="none"
              fontWeight={600}
              component={RouterLink}
              to="/events"
            >
              {link}
            </Link>
          ))}
        </StyledLink>
      </StyledNavigation>
      <StyledTitle>
        <Typography variant="h3">{routeData().title}</Typography>
        <StyledLink>
          {routeData().buttons.map((button) => (
            <Button key={button} variant="contained">
              {button}
            </Button>
          ))}
        </StyledLink>
      </StyledTitle>
    </>
  );
};

export default Header;
