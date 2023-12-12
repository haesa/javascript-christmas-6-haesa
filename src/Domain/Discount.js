import { DISCOUNT } from '../constants';

class Discount {
  #date;
  #orderList;

  constructor(date, orderList) {
    this.#date = date;
    this.#orderList = orderList;
  }

  discountChristmas() {
    if (this.#date > 25) {
      return 0;
    }

    return (
      DISCOUNT.christmasInitialDiscount +
      DISCOUNT.christmasDiscount * (this.#date - 1)
    );
  }

  discountWeekday() {
    if (DISCOUNT.weekend.has(this.#date % 7)) {
      return 0;
    }

    const dessertList = this.#orderList.filter(
      (order) => order.category === 'dessert'
    );
    const totalAmount = dessertList.reduce(
      (total, menu) => total + menu.amount,
      0
    );
    return totalAmount * DISCOUNT.weekDiscount;
  }

  discountWeekend() {
    if (DISCOUNT.weekday.has(this.#date % 7)) {
      return 0;
    }

    const maintList = this.#orderList.filter(
      (order) => order.category === 'main'
    );
    const totalAmount = maintList.reduce(
      (total, menu) => total + menu.amount,
      0
    );
    return totalAmount * DISCOUNT.weekDiscount;
  }

  discountSpecial() {
    if (!DISCOUNT.specialDay.has(this.#date)) {
      return 0;
    }

    return DISCOUNT.specialDiscount;
  }
}

export default Discount;
