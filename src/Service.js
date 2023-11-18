import { BADGE, PRICE, THRESHOLD } from './constants/index.js';
import Benefit from './Benefit.js';
import OutputView from './View/OutputView.js';

class Service {
  #date;
  #orders;

  constructor(date, orders) {
    this.#date = date;
    this.#orders = orders;
  }

  printResult() {
    const orderAmount = this.#calculateOrderAmount();
    const benefitAmount = this.#getBenefitAmount();
    const isGiveawayTarget = this.#isGiveawayTarget();
    const discountAmount = isGiveawayTarget
      ? benefitAmount - PRICE.giveaway
      : benefitAmount;

    OutputView.printMenu(this.#orders);
    OutputView.printOrderAmount(orderAmount);
    OutputView.printGiveaway(isGiveawayTarget);
    OutputView.printBenefitDetails(this.#getBenefitDetails());
    OutputView.printBenefitAmount(benefitAmount);
    OutputView.printPaymentAmount(orderAmount - discountAmount);
    OutputView.printBadge(this.#grantBadge());
  }

  #calculateOrderAmount() {
    return this.#orders.reduce(
      (total, { menu, quantity }) => total + PRICE[menu] * quantity,
      0
    );
  }

  #isGiveawayTarget() {
    return this.#calculateOrderAmount() >= THRESHOLD.giveaway;
  }

  #getBenefitDetails() {
    if (this.#calculateOrderAmount() < 10000) {
      return {};
    }

    const benefit = new Benefit(this.#date, this.#orders);
    return benefit.checkBenefitDetails(this.#isGiveawayTarget());
  }

  #getBenefitAmount() {
    const benefitDetails = this.#getBenefitDetails();
    return Object.values(benefitDetails).reduce(
      (total, amount) => total + amount,
      0
    );
  }

  #grantBadge() {
    const benefitAmount = this.#getBenefitAmount();

    if (benefitAmount >= THRESHOLD.benefit.santa) {
      return BADGE.santa;
    }

    if (benefitAmount >= THRESHOLD.benefit.tree) {
      return BADGE.tree;
    }

    if (benefitAmount >= THRESHOLD.benefit.star) {
      return BADGE.star;
    }

    return;
  }
}

export default Service;
