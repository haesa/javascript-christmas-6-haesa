const DATE = Object({
  isWeekend: date => date % 7 === 1 || date % 7 === 2,
  isSpecialDay: date => date % 7 === 3,
});

export default DATE;
