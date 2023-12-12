import { DISCOUNT, EVENT_DATE } from '../constants';

class Discount {
  #date;
  #orderList;

  constructor(date, orderList) {
    this.#date = date;
    this.#orderList = orderList;
  }

  getDiscountList() {
    return [
      { event: 'christmas', amount: this.#discountChristmas() },
      { event: 'weekday', amount: this.#discountWeekday() },
      { event: 'weekend', amount: this.#discountWeekend() },
      { event: 'special', amount: this.#discountSpecial() },
    ];
  }

  #discountChristmas() {
    if (!EVENT_DATE.christmas(this.#date)) {
      return 0;
    }

    return (
      DISCOUNT.christmasInitialDiscount +
      DISCOUNT.christmasDiscount * (this.#date - 1)
    );
  }

  #discountWeekday() {
    if (EVENT_DATE.weekend(this.#date)) {
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

  #discountWeekend() {
    if (EVENT_DATE.weekday(this.#date)) {
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

  #discountSpecial() {
    if (!EVENT_DATE.special(this.#date)) {
      return 0;
    }

    return DISCOUNT.specialDiscount;
  }
}

export default Discount;
