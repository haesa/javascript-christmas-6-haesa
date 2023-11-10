import { BADGE, NOTHING, PRICE, THRESHOLD } from './constants/index.js';

class Service {
  #orderDetails;

  constructor(orderDetails) {
    this.#orderDetails = orderDetails;
  }

  calculateOrderAmount() {
    const menus = Object.values(this.#orderDetails);
    return menus.reduce(
      (total, category) => total + this.#calculateByCategory(category),
      0
    );
  }

  #calculateByCategory(category) {
    return category.reduce(
      (total, { menu, quantity }) => total + PRICE[menu] * quantity,
      0
    );
  }

  isGiveawayRecipient(totalAmount) {
    return totalAmount >= THRESHOLD.giveaway;
  }

  grantBadge(totalBenefitAmount) {
    if (totalBenefitAmount >= THRESHOLD.benefit.santa) {
      return BADGE.santa;
    }

    if (totalBenefitAmount >= THRESHOLD.benefit.tree) {
      return BADGE.tree;
    }

    if (totalBenefitAmount >= THRESHOLD.benefit.star) {
      return BADGE.star;
    }

    return NOTHING;
  }
}

export default Service;
