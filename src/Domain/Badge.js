import { BADGE, BADGE_THRESHOLD, NOTHING } from '../constants';

function grantBadge(benefitAmount) {
  if (benefitAmount >= BADGE_THRESHOLD.santa) {
    return BADGE.santa;
  }

  if (benefitAmount >= BADGE_THRESHOLD.tree) {
    return BADGE.tree;
  }

  if (benefitAmount >= BADGE_THRESHOLD.star) {
    return BADGE.star;
  }

  return NOTHING;
}

export default grantBadge;
