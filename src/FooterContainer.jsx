
import {contact} from './assets/data/contact'
import Footer from './Components/footer'
import img1 from './Components/images/user.png'
import styled from 'styled-components'
import Icon from './Components/icons'


const Myfooter = styled.div`
display:flex;
align-items:center;
justify-content: space-evenly;
padding: 15px;
background-color: pink;`

function FooterContainer() {
  

  return (
    <Myfooter>
      <Footer contact="Call" details={contact.phone}>
        <img src={img1} />
      </Footer>

      <Footer contact="Email" details={contact.email}>
        <img src={img1} />
      </Footer>

      <Footer
        contact="Follow Me on"
        details={
          <Icon
            linkedin={contact.linkedin}
            skype={contact.skype}
            codepen={contact.codepen}
            github={contact.github}
          />
        }
      >
        <img src={img1} />
      </Footer>

      <Footer contact="Go My Code dec-21" details="Recreated by Deadpixel62">
        <img src={img1} />
      </Footer>
    </Myfooter>
  );
}

export default FooterContainer

// <Header name={contact.name} job={contact.job}/>
