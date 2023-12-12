const THRESHOLD_AMOUNT = 120_000;

function isGiveaway(orderAmount) {
  return orderAmount >= THRESHOLD_AMOUNT;
}

export default isGiveaway;
