import React from 'react'
import styled from 'styled-components'
import Header from './Header';

const MyHeader = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`





function LeftHeader(props) {
    return (
      <MyHeader>
        <h1> {props.name} </h1>
        <h2> {props.job} </h2>
      </MyHeader>
    );
}

export default LeftHeader
