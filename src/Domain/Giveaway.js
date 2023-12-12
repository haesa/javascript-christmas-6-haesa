import { GIVEAWAY_THRESHOLD } from '../constants/index.js';

function isGiveaway(orderAmount) {
  return orderAmount >= GIVEAWAY_THRESHOLD;
}

export default isGiveaway;
