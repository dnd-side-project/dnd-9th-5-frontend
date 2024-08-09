import { isServer } from './isServer';

export const isAndroid = () => {
  if (isServer()) {
    return false;
  }

  return navigator.userAgent.match(/Android/i) !== null;
};
