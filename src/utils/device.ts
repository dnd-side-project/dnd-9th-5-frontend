export const getOSByUserAgent = () => {
  if (isServer()) {
    return false;
  }

  if (isIOS()) {
    return 'ios';
  }

  if (isAndroid()) {
    return 'android';
  }

  return 'web';
};

export const isMobileWeb = () => {
  const userAgent = getOSByUserAgent();

  if (userAgent === 'ios' || userAgent === 'android') {
    return true;
  }
  return false;
};

export const isServer = () => {
  return typeof window === 'undefined' || 'Deno' in globalThis;
};

export const isIOS = () => {
  if (isServer()) {
    return false;
  }

  return navigator.userAgent.match(/ipad|iphone/i) !== null;
};

export const isAndroid = () => {
  if (isServer()) {
    return false;
  }

  return navigator.userAgent.match(/Android/i) !== null;
};
