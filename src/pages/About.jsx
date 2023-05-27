import React from 'react';
import '../CSS/about.css';
import pic from '../media/pic.jpg';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <img className='about-pic' alt='pic' src={pic}/>
      </div>
      <div className='about-right'>
        <h2>Hi, my name is Ghassan..</h2>
        <p>When i was introduced to Software Engineering, at the late age of 31, I quickly became passionate
          about all the aspects which encompass this profession. I enrolled into several online bootcamps, and used
          my own free time to study and further my understanding of the skills required to craft software of the highest excellence !
          My mission, to put it simply, is to continue learning through the experiences that a professional software engineering career 
          can provide. My main skills up to this point include: Javascript, HTML, CSS, and the popular Javascript framework/ library 
          React.js. I beleive that it is my hunger for knowledge in the feild, fuled through the passion i have for programming, that
          might make me stand out from other programmers that simply view their profession as a job and nothing more. I hope you enjoy
          browsing through the rest of my Portfolio where you will see some of the many projects which i have built in my time up to this 
          point. Hope to hear from you soon ! <br />
          Best regards.. 
          
        </p>
      </div>
    </div>
  )
}

export default About;