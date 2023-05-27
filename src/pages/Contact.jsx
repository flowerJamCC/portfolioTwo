import React from 'react';
import { useState } from 'react';
import '../CSS/contact.css';
import linkedin from '../contacticons/linkedin.jpg';
import gmail from '../contacticons/gmail.jpeg';
import phone from '../contacticons/phone.jpg';

const Contact = () => {
  const [link, setLink] = useState(false);
  const [mail, setMail] = useState(false);
  const [fone, setFone] = useState(false);

  const dispFone = () => {
    setFone(fone === false ? true : false)
  }

  const dispMail = () => {
    setMail(mail === false ? true: false);
  }

  const dispLink = () => {
    setLink(link === false ? true : false);
  }
  return (
    <div className='contact-container'>
      <h2 className='contact-title'>Contact Me !</h2>
      <div className='socials-container'>
        <div className="display-socials">
      <button className='cont-icon' onClick={dispLink}><img className='hide' src={linkedin}/></button>
      <p>{link === true ? 'linkedin.com/in/ghassan-hasan-3a1731275/' : null}</p>
        </div>
        <div className="display-socials">
      <button className='cont-icon' onClick={dispMail}><img className='hide' src={gmail}/></button>
      <p>{mail === true ? 'Ghassaan31@gmail.com' : null}</p>
        </div>
        <div className="display-socials">
      <button className='cont-icon' onClick={dispFone}><img className='hide' src={phone}/></button>
      <p>{fone === true ? '0593637780' : null}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact