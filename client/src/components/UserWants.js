import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`

const Container = styled.div`
  padding: 5px 16px;
`

const CardContainer = styled.div`
  padding: 5px 16px;
  height: 33%;
  width: 25%;
`

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`

const Page = styled.div`
display: flex;
`

class UserWants extends Component {
  render() {
    return (
      <div>
        <Page>
          {this.props.wants.map((want, index) => {
            return (
              <CardContainer>
                <Card key={index}>
                  <StyledImg src={want.imgUrl} />
                  <Container>
                    <h4><b>{want.flavor}</b></h4>
                    <p>Made By {want.maker}</p>
                    <p>Nicotine: {want.nicotine} ml</p>
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

export default UserWants;