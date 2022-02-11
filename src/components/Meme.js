import React from 'react';
import memesData from '../data.json';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: 'top text',
    bottomText: 'bottom text',
    memeImage: getRandomElem(memesData.data.memes).url
  });
  
  function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getMemeImg() {
    setMeme(prevMeme => ({
      ...prevMeme,
      memeImage: getRandomElem(memesData.data.memes).url
    }));
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
      <div className="meme-container">
        <img src={meme.memeImage} className="meme-image" alt="meme image" />
        <p className="meme-text top-text">{meme.topText}</p>
        <p className="meme-text bottom-text">{meme.bottomText}</p>
      </div>
    </main>
  );
};