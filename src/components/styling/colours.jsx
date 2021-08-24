export const dark = {
  black: () => '#000',
  primary: () =>'#111',
  secondary: (isTransparent) => isTransparent ? 'rgba(17, 17, 17, 0.5)' : '#888',
  tertiary: (isTransparent) => isTransparent ? 'rgba(17, 17, 17, 0.2)' : '#CFCFCF',
  quaternary: (isTransparent) => isTransparent ? 'rgba(17, 17, 17, 0.1)' : '#E8E8E8',
  background: (isTransparent) => isTransparent ? 'rgba(17, 17, 17, 0.05)' : '#F3F3F3',
};

export const light = {
  white: () => '#FFF',
  secondary: (isTransparent) => isTransparent ? 'rgba(254, 254, 254, 0.5)' : '#909090',
  tertiary: (isTransparent) => isTransparent ? 'rgba(254, 254, 254, 0.2)' : '#4E4E4E',
  quaternary: (isTransparent) => isTransparent ? 'rgba(254, 254, 254, 0.1)' : '#383838',
  background: (isTransparent) => isTransparent ? 'rgba(254, 254, 254, 0.05)' : '#2D2D2D',
};

export const special = {
  negative: () => '#FD5C63',
  negative_background: () => '#FFE7E8',
  positive: () => '#04A77D',
  positive_background: () => '#D9F2EC',
  warning: () => '#FF4F00',
  warning_background: () => '#FFE5D9',
  neutral: () => '#002FA7',
  neutral_background: () => '#D9E0F2'
};