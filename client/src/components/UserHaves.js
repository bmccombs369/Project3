import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`

const Container = styled.div`
  padding: 5px 16px;
  text-align: center;
  background-color: #ebecdb;
  border-radius: 0 0 5px 5px;
`

const CardContainer = styled.div`
  padding: 5px 16px;
  height: 33%;
  width: 40%;
  color: #5f6144;
  font-size: 2vw;
`

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;

`

const Page = styled.div`
  display: flex;
  justify-content: space-around;
`

class UserHaves extends Component {
  render() {
    return (
      <div>
        <Page>
          {this.props.haves.map((have, index) => {
            return (
              <CardContainer key={index}>
                <Card>
                  <StyledImg src={have.imgUrl} />
                  <Container>
                    <h4><b>{have.flavor}</b></h4>
                    <p>Made By {have.maker}</p>
                    <p>Nicotine: {have.nicotine} mg/ml</p>
                    <p>Estimated Amount Used: {have.estUsed} ml</p>
                  </Container>
                </Card>
              </CardContainer>
            )
          })}
        </Page>
      </div>
    );
  }
}

export default UserHaves;