import React from 'react'
import styled from 'styled-components'

const Myheader = styled.div`
display:flex;
justify-content: space-around;
padding: 0;
align-items:center;
& ul {
  list-style:none;
  display:flex;
  align-items:center; 
  gap: 2vw;
}
& a {
  text-decoration: none;
  color: black;
}
background-color: white;`

function Header(props) {
    return (
      <Myheader>
        <div>
          <h2>{props.name}</h2>
          <p>{props.job}</p>
        </div>

        <div>
          <ul>
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">Resume</a>
            </li>
            <li>
              {" "}
              <a href="#">Product</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </Myheader>
    );
}

export default Header
