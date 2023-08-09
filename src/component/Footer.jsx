import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div  style={{backgroundColor:"black",borderColor:"black"}}><div className="card text-center">
    <div className="card-header " style={{backgroundColor:"black"}}>
      <h4 style={{backgroundColor:"black",color:"white"}}>Contact</h4> 
    </div>
    <div className="card-body "style={{backgroundColor:"black",color:"white",borderColor:"black"}}  >
      <a href="https://www.linkedin.com/in/suryansh-pandey-031223252/" className="btn mt-2" style={{ color: 'white' }} ><FontAwesomeIcon icon={faLinkedin} beatFade /> Linkedin </a>
      <span style={{ color: 'white' }} >|</span>
      <a href="https://github.com/suryansh6393" className="btn mt-2" style={{ color: 'white' }} ><FontAwesomeIcon icon={faGithub} beatFade /> Github </a>
    </div>
  </div></div>
  )
}
