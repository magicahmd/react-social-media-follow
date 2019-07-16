import React from 'react';
import FollowAt from "react-social-media-follow";

import './App.css';

function App() {
  return (
    <div>
      <p>Follow me at:</p>
      <FollowAt links = {[
      'https://twitter.com/magicahmd',
      'https://www.facebook.com/ahmdsalhi',
      'https://www.youtube.com/magicahmd',
      'https://www.instagram.com/ahmdsalhi',
    ]}/>
    </div>
  );
}

export default App;
