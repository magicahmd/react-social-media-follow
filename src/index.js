import React from 'react';
import { css } from 'emotion';
import withStyles from 'withstyles';
import PropTypes from 'prop-types';
import extractDomain from 'extract-domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Youtube from './icons/Youtube'
import Instagram from './icons/Instagram'
import Tumblr from './icons/Tumblr'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn';


const getIcon = domain => {
  switch (domain) {
    case 'linkedin.com':
      return LinkedIn
    case 'facebook.com':
      return Facebook;
    case 'twitter.com':
      return Twitter;
    case 'youtube.com':
      return Youtube;
    case 'instagram.com':
      return Instagram;
    case 'tumblr.com':
      return Tumblr;
    case 'github.com':
      return Github;
    default:
      return;
  }
};

const styles = ({ color, hoverColor, hoverMove, spacing }) => ({
  socialContainer: css`
  `,

  social: css`
    margin: ${spacing ? `0px ${spacing}` : '0 0.8rem'};
    transition: transform 250ms;
    display: inline-block;
    opacity: ${color && !hoverColor && '0.8'};
    &:hover {
      color: ${hoverColor};
      opacity: 1;
      transform: ${(hoverMove===undefined && 'translateY(-2px)') || (hoverMove ? 'translateY(-2px)' : '')};
    }
  `,
  'facebook.com': css`
    color: ${color || '#4968ad'};
  `,

  'youtube.com': css`
    color: ${color || '#eb3223'};
  `,

  'twitter.com': css`
    color: ${color || '#49a1eb'};
  `,

  'instagram.com': css`
    color: ${color || 'black'};
  `,

  'tumblr.com': css`
    color: ${color || '#35465c'};
  `,

  'github.com': css`
    color: ${color || 'black'};
  `,

  'linkedin.com': css`
    color: ${color || 'blue'};
  `,

});

const FollowAt = props => {
  const { computedStyles, links, iconSize } = props;
  return (
    <div className={computedStyles.socialContainer}>
      {links.map((link) => {
        let socialMedia = String(extractDomain(link)).toLowerCase();
        let icon = getIcon(socialMedia);
        return (
          <a
            key={socialMedia}
            href={link}
            className={`${computedStyles.social} ${
              computedStyles[socialMedia]
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
  hoverColor: PropTypes.string,
  hoverMove: PropTypes.bool,
  spacing: PropTypes.string,
};

FollowAt.defaultProps = {
  iconSize: 2,
  hoverMove: true,
};

export default withStyles(styles)(FollowAt);
