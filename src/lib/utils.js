export const seasons = {
  0: 'winter',
  1: 'winter',
  2: 'winter',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'autumn',
  9: 'autumn',
  10: 'winter',
  11: 'winter'
};

export const types = {
  200: "P",
  201: "P",
  202: "0",
  210: "P",
  211: "P",
  212: "0",
  221: "0",
  230: "P",
  231: "P",
  232: "0",
  300: "Q",
  301: "Q",
  302: "Q",
  310: "Q",
  311: "Q",
  312: "Q",
  313: "Q",
  314: "Q",
  321: "Q",
  500: "R",
  501: "R",
  502: "R",
  503: "R",
  504: "R",
  511: "X",
  520: "R",
  521: "R",
  522: "R",
  531: "R",
  600: "U",
  601: "U",
  602: "W",
  611: "X",
  612: "X",
  615: "X",
  616: "X",
  620: "X",
  621: "X",
  622: "X",
  701: "M",
  711: "M",
  721: "L",
  731: "F",
  741: "M",
  751: "F",
  761: "E",
  762: "E",
  771: "F",
  781: "F",
  800: {"01d": "B", "01n": "C"},
  801: {"02d": "H", "02n": "I"},
  802: "N",
  803: "Y",
  804: "Y"
};

export const iDiv = (x, y) => (x-x%y)/y;

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};

export const leapYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
