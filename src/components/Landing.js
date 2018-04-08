import React from 'react';
import './../App.css';


const Landing = () => (

  <section className="landing">

    <h1 className="music-up">Turn the music up</h1>
    <img className="img" src="https://images.unsplash.com/photo-1499346146792-b008e446261f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbbe32bf125a5a776112e70fd09fd84b&auto=format&fit=crop&w=1650&q=80" alt="background" />

  <section className="selling-points">

    <div className="point1">

      <h2 className="point1-title">Choose your music</h2>
      <p className="point1-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
    </div>

    <div className="point2">
      <h2 className="point2-title">Unlimited, streaming, ad-free</h2>
      <p className="point2-description">No arbitrary limits. No distractions.</p>
    </div>

    <div className="point3">
        <h2 className="point3-title">Mobile enabled</h2>
        <p className="point3-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    </div>

    </section>
  </section>
);

export default Landing;
