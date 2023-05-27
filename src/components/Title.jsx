import React from 'react';
import '../CSS/title.css';

const Title = ({ intro, mainTitle }) => {
  return (
    <div className='title-container'>
        <p className='intro'>{intro}</p>
        <h1 className='main-title'>{mainTitle}</h1>
    </div>
  )
}

export default Title;