import React from 'react'
import styled from 'styled-components'

const Myfooter = styled.div`
display:flex;
 & img {
     width:56px;
     height:56px;
 }
 align-items: center;
 gap: 2px;
 & p {
     margin: 0;
     
 }
`

function Footer(props) {
    return (
      <Myfooter>
        {props.children}
        <div>
          <p>{props.contact}</p>
          <p> {props.details}</p>
        </div>
      </Myfooter>
    );
}

export default Footer
