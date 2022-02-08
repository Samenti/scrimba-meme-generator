import React from 'react';

export default function Meme() {
  return (
    <div className="meme-form">
      <input 
        className="input-box input-1"
        type="text"
        placeholder="Shut up"
      />
      <input 
        className="input-box input-2"
        type="text"
        placeholder="and take my money"
      />
      <button className="new-button">
        <div className="new-button--label">Get a new meme image 🖼</div>
      </button>
    </div>
  );
};