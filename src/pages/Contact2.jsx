import React from 'react';
import { useState } from 'react';
import '../CSS/contact2.css';


const Contact2 = () => {
  const [link, setLink] = useState(false);
  const [mail, setMail] = useState(false);
  const [fone, setFone] = useState(false);

  const dispFone = () => {
    setFone(fone === false ? true : false);
    setLink(false);
    setMail(false);
  }

  const dispMail = () => {
    setMail(mail === false ? true: false);
    setLink(false);
    setFone(false);
  }

  const dispLink = () => {
    setLink(link === false ? true : false);
    setFone(false);
    setMail(false);
  }
  return (
    <div className='contact-container'>
      <h2 className='contact-title'>Contact Me !</h2>
      <div className='socials-container'>
        <div className="display-socials">
      <button className='contact-button' onClick={dispLink}>Linked In</button>
        </div>

        <div className="display-socials">
      <button className='contact-button' onClick={dispMail}>Gmail</button>
        </div>

        <div className="display-socials">
      <button className='contact-button' onClick={dispFone}>Phone</button>
        </div>

      </div>
      <div className="display-ans">
        <p>{ link === true ? 'http://www.linkedin.com/in/ghassan-hasan-3a1731275/' : mail === true ? 'Ghassaan31@Gmail.com' : fone === true ? '0593637780' : null      }</p>
      </div>
    </div>
  )
}

export default Contact2;