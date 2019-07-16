# React Social Media Follow

a list of different social media.

## Demo

[<img src="https://ibb.co/FqNX6PR" width="100%" />]

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

## Thanks

Thanks to everyone who would use it.
Made with ❤️ by Ahmd.