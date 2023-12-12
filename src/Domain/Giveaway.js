import { GIVEAWAY_THRESHOLD } from '../constants';

function isGiveaway(orderAmount) {
  return orderAmount >= GIVEAWAY_THRESHOLD;
}

export default isGiveaway;
