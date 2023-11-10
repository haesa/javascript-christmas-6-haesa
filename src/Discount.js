import { CATEGORY } from './constants/index.js';
import DATE from './utils/date.js';

class Discount {
  static #DEFAULT_DISCOUNT = 1000;
  static #SPECIAL_DISCOUNT = 1000;
  static #WEEK_DISCOUNT = 2023;

  #date;
  #orderDetails;

  constructor(date, orderDetails) {
    this.#date = date;
    this.#orderDetails = orderDetails;
  }

  calculateDiscountAmount() {
    const discountDetails = this.checkDiscountDetails();
    return Object.values(discountDetails).reduce(
      (total, amount) => total + amount,
      0
    );
  }

  checkDiscountDetails() {
    return {
      christmas: this.#calculateChristmasDiscount(),
      weekday: this.#calculateWeekdayDiscount(),
      weekend: this.#calculateWeekendDiscount(),
      special: this.#calculateSpecialDiscount(),
    };
  }

  #calculateChristmasDiscount() {
    if (this.#date > 25) {
      return 0;
    }

    return Discount.#DEFAULT_DISCOUNT + (this.#date - 1) * 100;
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

    return dessertQuantity * Discount.#WEEK_DISCOUNT;
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

    return mainQuantity * Discount.#WEEK_DISCOUNT;
  }

  #calculateSpecialDiscount() {
    return DATE.isSpecialDay(this.#date) ? Discount.#SPECIAL_DISCOUNT : 0;
  }
}

export default Discount;
