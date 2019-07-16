import React from "react";
import { css } from "emotion";
import withStyles from "withstyles";
import PropTypes from 'prop-types'; // ES6
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTumblr
} from "@fortawesome/free-brands-svg-icons";

const domainName = url => {
  var urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[/\w\.-]*)*/;
  var domainPattern = url.match(urlPattern);
  var extractDomain = domainPattern[1];
  return extractDomain.charAt(0).toUpperCase() + extractDomain.slice(1);
};

const getIcon = domain => {
  switch (domain) {
    case "Facebook":
      return faFacebook;
    case "Twitter":
      return faTwitter;
    case "Youtube":
      return faYoutube;
    case "Instagram":
      return faInstagram;
    case "Tumblr":
      return faTumblr;
  }
};

const styles = ({ color, hoverColor, hoverMove }) => ({
  socialContainer: css`
    padding: 25px 50px;
  `,

  social: css`
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    &:hover {
      transform: ${hoverMove===undefined && 'translateY(-2px)' || hoverMove ? 'translateY(-2px)' : ''};
      color: ${hoverColor};
    }
  `,

  Facebook: css`
    color: ${color || "#4968ad"};
${console.log(hoverColor)}
  `,

  Youtube: css`
    color: ${color || "#eb3223"};
  `,

  Twitter: css`
    color: ${color || "#49a1eb"};
  `,

  Instagram: css`
    color: ${color || "black"};
  `,

  Tumblr: css`
    color: ${color || "#35465c"};
  `
});

const FollowAt = props => {
  const { computedStyles, links, iconSize } = props;
  console.log(props)
  return (
    <div className={computedStyles.socialContainer}>
      {links.map((link,index) => {
        let socailMedia = domainName(link);
        let icon = getIcon(socailMedia);
        return (
          <a
            key={index}
            href={link}
            className={`${computedStyles.social} ${
              computedStyles[socailMedia]
            }`}
          >
            <FontAwesomeIcon icon={icon} size={`${iconSize}x`} />
          </a>
        );
      })}
    </div>
  );
};

FollowAt.propTypes = {
  links: PropTypes.array.isRequired,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  hoverMove: PropTypes.bool,
};

FollowAt.defaultProps = {
  iconSize: 2,
  hoverMove: true,
};

export default withStyles(styles)(FollowAt);
