import React from "react";
import FollowAt from "react-social-media-follow";

import "./App.css";

const links = [
  "https://twitter.com/magicahmd",
  "https://www.facebook.com/ahmdsalhi",
  "https://www.youtube.com/magicahmd",
  "https://www.instagram.com/ahmdsalhi",
  "http://magicahmd.tumblr.com",
  "https://github.com/magicahmd"
];

function App() {
  return (
    <div className="container">
      <div className="square">
        <div className="square-inn">
          FOLLOW ME AT:
          <div className="follow-container">
            <p className="example-text">default:</p>
            <FollowAt links={links} />
          </div>
          <div>
            <p className="example-text">with color:</p>
            <FollowAt links={links} color="black" />
          </div>
          <div>
            <p className="example-text">with color & hoverColor:</p>
            <FollowAt links={links} color="white" hoverColor="black" />
          </div>
          <div>
            <p className="example-text">with hoverMove=false:</p>
            <FollowAt links={links} hoverMove={false} />
          </div>
          <div>
            <p className="example-text">with spacing="30px":</p>
            <FollowAt links={links} spacing="30px" />
          </div>
          <div>
            <p className="example-text">with iconSize=1:</p>
            <FollowAt links={links} iconSize={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
