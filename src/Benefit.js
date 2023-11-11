import { CATEGORY, PRICE } from './constants/index.js';
import DATE from './utils/date.js';

class Benefit {
  static #DEFAULT_DISCOUNT = 1000;
  static #SPECIAL_DISCOUNT = 1000;
  static #WEEK_DISCOUNT = 2023;

  #date;
  #orderDetails;

  constructor(date, orderDetails) {
    this.#date = date;
    this.#orderDetails = orderDetails;
  }

  checkBenefitDetails(isEventTarget) {
    const discountDetails = this.#checkDiscountDetails();
    const benefitDetails = isEventTarget
      ? { ...discountDetails, giveaway: PRICE.giveaway }
      : discountDetails;

    return benefitDetails;
  }

  #checkDiscountDetails() {
    const details = {
      christmas: this.#calculateChristmasDiscount(),
      weekday: this.#calculateWeekdayDiscount(),
      weekend: this.#calculateWeekendDiscount(),
      special: this.#calculateSpecialDiscount(),
    };

    return Object.keys(details) //
      .reduce(
        (result, key) =>
          details[key] === 0 ? result : { ...result, [key]: details[key] },
        {}
      );
  }

  #calculateChristmasDiscount() {
    if (this.#date > 25) {
      return 0;
    }

    return Benefit.#DEFAULT_DISCOUNT + (this.#date - 1) * 100;
  }

  #calculateWeekdayDiscount() {
    if (DATE.isWeekend(this.#date)) {
      return 0;
    }

    const dessert = this.#orderDetails.filter(
      order => order.category === CATEGORY.dessert
    );

    const dessertQuantity = dessert.reduce(
      (totalQuantity, { quantity }) => totalQuantity + quantity,
      0
    );

    return dessertQuantity * Benefit.#WEEK_DISCOUNT;
  }

  #calculateWeekendDiscount() {
    if (!DATE.isWeekend(this.#date)) {
      return 0;
    }

    const main = this.#orderDetails.filter(
      order => order.category === CATEGORY.main
    );

    const mainQuantity = main.reduce(
      (totalQuantity, { quantity }) => totalQuantity + quantity,
      0
    );

    return mainQuantity * Benefit.#WEEK_DISCOUNT;
  }

  #calculateSpecialDiscount() {
    return DATE.isSpecialDay(this.#date) ? Benefit.#SPECIAL_DISCOUNT : 0;
  }
}

export default Benefit;
