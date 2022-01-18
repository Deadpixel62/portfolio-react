import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Mycircle = styled.button`
border-radius: 50%;
height: 110px;
width: 110px;
font-size:14px;
:hover {
    cursor: pointer;
}
`

function Circle({content, colorClass}) {
    return (
        <div>
            <Mycircle className={colorClass}>{content}</Mycircle>
        </div>
    )
}

export default Circle
