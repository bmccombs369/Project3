import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  text-align: center;
  font-size: 12vw;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  /* color: white; */
`

const Body = styled.div`
  /* background-image: url('http://yesofcorsa.com/wp-content/uploads/2017/01/Vape-Wallpaper-Free-Download.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 0;
  margin: 0;
`

class LandingPage extends Component {
  render() {
    return (
      <Body>
        <Title>
          <StyledLink to='/users'>Atlanta E-Juice Swap Meet</StyledLink>
        </Title>
      </Body>
    );
  }
}

export default LandingPage;