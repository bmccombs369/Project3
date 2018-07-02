import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`

const Container = styled.div`
  padding: 2px 16px;
`

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`

class UserWants extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.wants.map((want, index) => {
            return (
              <Container>
                <Card key={index}>
                  <StyledImg src={want.imgUrl} />
                  <Container>
                    <h4><b>{want.flavor}</b></h4>
                    <p>Made By {want.maker}</p>
                    <p>Nicotine: {want.nicotine} ml</p>
                  </Container>
                </Card>
              </Container>
            )
          })}
        </div>
      </div>
    );
  }
}

export default UserWants;