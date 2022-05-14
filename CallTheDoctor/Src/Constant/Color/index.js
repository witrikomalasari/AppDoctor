const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#000000',
  dark3: '#495A75',
  dark4: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EEEEEE',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  white: '#ffffff',
  blue: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: mainColors.white,
  black: mainColors.dark2,
  blue: mainColors.blue,

  disable: mainColors.grey4,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    white: mainColors.white,
    menuInactive: mainColors.dark3,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark4,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark2,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.grey5,
    },
  },
  border: {
    primary: mainColors.grey3,
    secondary: mainColors.blue,
  },
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
