import React from 'react';
import memesData from '../data.json';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    getRandomElem(memesData.data.memes).url
  );
  
  function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getMemeImg() {
    const randomMeme = getRandomElem(memesData.data.memes);
    setMemeImage(randomMeme.url);
  }
  
  return (
    <main className="meme-content">
      <div className="meme-form">
        <input 
          className="input-box input-1"
          type="text"
          placeholder="top text"
        />
        <input 
          className="input-box input-2"
          type="text"
          placeholder="bottom text"
        />
        <button className="new-button" onClick={getMemeImg}>
          <div className="new-button--label">Get a new meme image 🖼</div>
        </button>
      </div>
      <img src={memeImage} className="meme-image" alt="meme image"/>
    </main>
  );
};