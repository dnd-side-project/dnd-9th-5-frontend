/** @tossdocs-ignore */
import { getOSByUserAgent } from './getOSByUserAgent';

export const isMobileWeb = () => {
  const userAgent = getOSByUserAgent();

  if (userAgent === 'ios' || userAgent === 'android') {
    return true;
  }
  return false;
};
