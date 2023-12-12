const REGEX = Object.freeze({
  number: (value) => /^[0-9]+$/.test(value),
  orderFormat: (value) =>
    /^([ㄱ-ㅎ|가-힣]+-\d+,)*[ㄱ-ㅎ|가-힣]+-\d+$/.test(value),
});

export default REGEX;
