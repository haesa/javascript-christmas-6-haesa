import { DISCOUNT, EVENT_DATE } from '../constants/index.js';

class Discount {
  #date;
  #orderList;

  constructor(date, orderList) {
    this.#date = date;
    this.#orderList = orderList;
  }

  getDiscountList() {
    return [
      { event: '크리스마스 디데이 할인', amount: this.#discountChristmas() },
      { event: '평일 할인', amount: this.#discountWeekday() },
      { event: '주말 할인', amount: this.#discountWeekend() },
      { event: '특별 할인', amount: this.#discountSpecial() },
    ].filter((event) => event.amount !== 0);
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
      (order) => order.category === '디저트'
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
      (order) => order.category === '메인'
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
