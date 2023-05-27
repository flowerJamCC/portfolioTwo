import React from 'react';
import '../CSS/home.css';
import Title from '../components/Title';
import Button from '../components/Button';
import ResumeCSG from '../cv/ResumeCSG.docx';

const Home = () => {
  return (
    <div className='home-container'>
      <Title mainTitle='Ghassan Hasan' />
      <p className='home-paragraph'>I am a front-end software engineer specializing in React.js, 
      HTML, CSS and Javascript.<br/><br/> My aim is to build exceptional digital experiences ! </p>
      <div className="button-container">
        <a download={ResumeCSG}>
      <Button buttontext='Resume'>Resume</Button>
        </a>
      </div>
    </div>
  )
}

export default Home