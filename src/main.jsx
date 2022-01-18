import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import FooterContainer from './FooterContainer'
import Header from './Components/Header'
import Main from './Components/Main'
import { contact } from './assets/data/contact'
import img2 from './assets/data/avatar.jpg'

ReactDOM.render(
  <React.StrictMode>
  <Header name={contact.name} job={contact.job}/>
  <Main image={img2} />
    <FooterContainer/>
  </React.StrictMode>,
  document.getElementById('root')
)
