import React from 'react';

export default function Meme() {
  function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  const [allMemes, setAllMemes] = React.useState(
    [{url: 'https://i.imgflip.com/1bhm.jpg'}]
  );

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    memeImage: getRandomElem(allMemes).url
  });
  
  function getMemeImg() {
    setMeme(prevMeme => (
      {...prevMeme, memeImage: getRandomElem(allMemes).url}
    ));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({...prevMeme, [name]: value}));
  }

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(memeData => setAllMemes(memeData.data.memes));
  }, []);
  
  return (
    <main className="meme-content">
      <div className="meme-form">
        <input 
          className="input-box input-1"
          name="topText"
          type="text"
          placeholder="top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          className="input-box input-2"
          name="bottomText"
          type="text"
          placeholder="bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="new-button" onClick={getMemeImg}>
          <div className="new-button--label">Get a new meme image 🖼</div>
        </button>
      </div>
      <div className="meme-container">
        <img src={meme.memeImage} className="meme-image" alt="meme" />
        <p className="meme-text top-text">{meme.topText}</p>
        <p className="meme-text bottom-text">{meme.bottomText}</p>
      </div>
    </main>
  );
};