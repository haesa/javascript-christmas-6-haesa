const DISCOUNT = Object.freeze({
  christmasInitialDiscount: 1_000,
  christmasDiscount: 100,
  weekDiscount: 2_023,
  specialDiscount: 1_000,
  weekend: new Set([1, 2]),
  weekday: new Set([3, 4, 5, 6, 0]),
  specialDay: new Set([3, 10, 17, 24, 25, 31]),
});

export default DISCOUNT;
