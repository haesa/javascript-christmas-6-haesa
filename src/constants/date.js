const DATE = Object({
  isNotChristmas: date => date > 25,
  isWeekend: date => date % 7 === 1 || date % 7 === 2,
  isSpecialDay: date => date % 7 === 3 || date === 25,
});

export default DATE;
