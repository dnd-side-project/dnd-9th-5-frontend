import { isServer } from './isServer';

export const isIOS = () => {
  if (isServer()) {
    return false;
  }

  return navigator.userAgent.match(/ipad|iphone/i) !== null;
};
