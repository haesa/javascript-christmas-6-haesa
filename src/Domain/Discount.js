class Discount {
  static #CHRISTMAS_INITIAL_DISCOUNT = 1_000;
  static #CHRISTMAS_DISCOUNT = 100;
  static #WEEK_DISCOUNT = 2_023;
  static #WEEKEND = new Set([1, 2]);
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
}

export default Discount;
