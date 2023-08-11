import React, { Component } from 'react';

import styled from 'styled-components';

import { Typography } from '@mui/material';

const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25px;
  background: #6cf;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography paragraph align="center">
          Copyright © Events. All rights reserved.
        </Typography>
      </FooterContainer>
    );
  }
}
export default Footer;
