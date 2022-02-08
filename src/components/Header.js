import React from 'react';
import trollFace from '../images/trollface.svg';

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="img-link">
        <img src={trollFace} alt="trollface"></img>
      </a>
      <a href="#" className="h1-link"><h1>Meme Generator</h1></a>
      <h3>React Course - Project 3</h3>
    </nav>
  );
};