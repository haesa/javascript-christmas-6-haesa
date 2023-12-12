const DISCOUNT = Object.freeze({
  christmasInitialDiscount: 1_000,
  christmasDiscount: 100,
  weekDiscount: 2_023,
  specialDiscount: 1_000,
});

const EVENT_DATE = {
  christmas: (date) => date <= 25,
  weekend: (date) => new Set([1, 2]).has(date % 7),
  weekday: (date) => new Set([3, 4, 5, 6, 0]).has(date % 7),
  special: (date) => new Set([3, 10, 17, 24, 25, 31]).has(date),
};

export { DISCOUNT, EVENT_DATE };
