export const ICON = {
  arrow: {
    back: 'arrow_back',
  },
  bookmark: {
    white: { fill: 'bookmark_fill', empty: 'bookmark' },
    black: { fill: 'bookmark_black_fill', empty: 'bookmark_black_empty' },
  },
  carat: {
    down: {
      gray: 'carat_down_gray',
      black: 'carat_down',
    },
    up: {
      black: 'carat_up',
    },
  },
  close: {
    gray: 'close_gray',
    black: 'close',
    white: 'close_white',
  },
  social: {
    github: 'github',
    instagram: 'instagram',
    kakao: 'kakao',
    apple: 'apple',
  },
  help: 'help',
  info: 'info',
  menu: 'menu',
  profile: 'profile_default',
  restart: 'restart',
  share: 'share',
} as const;
