# React Social Media Follow

To make all your social media links accessable just in one component.

## Demo

<img src="https://i.imgur.com/ZwZq2Ip.png" />

Checkout the demo:
https://magicahmd.github.io/react-social-media-follow/

## Installation

```
npm install react-social-media-follow
```

## Usage

```
import FollowAt from "react-social-media-follow";

const links = [
      'https://twitter.com/magicahmd',
      'https://www.facebook.com/ahmdsalhi',
      'https://www.youtube.com/magicahmd',
      'https://www.instagram.com/ahmdsalhi',
    ];

const App = () => {
  return (
    <FollowAt links = {links}/>
  );
}
```

## Props

Common props you may want to specify include:

- `links` - array of socail media links.
- `color` - the color of social media icons.
- `hoverColor` - the color of social media icons at hover.
- `iconSize` - the size of social media icons. (1-10)
- `spacing` - the space between of social media icons.

## Thanks

- Thanks to everyone who would use it.
- Made with ❤️ by Ahmd.