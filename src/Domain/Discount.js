class Discount {
  static #CHRISTMAS_INITIAL_DISCOUNT = 1_000;
  static #CHRISTMAS_DISCOUNT = 100;
  static #WEEK_DISCOUNT = 2_023;
  static #SPECIAL_DISCOUNT = 1_000;
  static #WEEKEND = new Set([1, 2]);
  static #WEEKDAY = new Set([3, 4, 5, 6, 0]);
  static #SPECIAL_DAY = new Set([3, 10, 17, 24, 25, 31]);
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
      Discount.#CHRISTMAS_INITIAL_DISCOUNT +
      Discount.#CHRISTMAS_DISCOUNT * (this.#date - 1)
    );
  }

  discountWeekday() {
    if (Discount.#WEEKEND.has(this.#date % 7)) {
      return 0;
    }

    const dessertList = this.#orderList.filter(
      (order) => order.category === 'dessert'
    );
    const totalAmount = dessertList.reduce(
      (total, menu) => total + menu.amount,
      0
    );
    return totalAmount * Discount.#WEEK_DISCOUNT;
  }

  discountWeekend() {
    if (Discount.#WEEKDAY.has(this.#date % 7)) {
      return 0;
    }

    const maintList = this.#orderList.filter(
      (order) => order.category === 'main'
    );
    const totalAmount = maintList.reduce(
      (total, menu) => total + menu.amount,
      0
    );
    return totalAmount * Discount.#WEEK_DISCOUNT;
  }

  discountSpecial() {
    if (!Discount.#SPECIAL_DAY.has(this.#date)) {
      return 0;
    }

    return Discount.#SPECIAL_DISCOUNT;
  }
}

export default Discount;
