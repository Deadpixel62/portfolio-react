import React from 'react'
import Circle from './Circle';
import '../index.css';
import styled from 'styled-components'

const Myhero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72.7vh;
  gap: 50px;
  
  & img {
    width: 360px;
    height: 360px;
    border-radius: 50%;
  }

  & h1{
    font-size: 35px;
    padding: 0;
    margin: 0;
  }
`;

const Myflex = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width: 30vw;
`


function Main(props) {
    return (
      <Myhero>
        <img src={props.image} alt={props.alt} />

        <div>
          <div>
            <h1>Hello,</h1>
            <p>a bit about me:</p>
          </div>
          <Myflex>
            <Circle colorClass="pinkButton" content="MY RESUME" />
            <Circle colorClass="blueButton" content="MY WORK" />
            <Circle colorClass="greenButton" content="MY SKILLS" />
          </Myflex>
        </div>
      </Myhero>
    );
}

export default Main
