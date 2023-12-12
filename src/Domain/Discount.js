class Discount {
  static #christmasInitialDiscount = 1_000;
  static #christmasDiscount = 100;
  static #weekDiscount = 2_023;
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
      Discount.#christmasInitialDiscount +
      Discount.#christmasDiscount * (this.#date - 1)
    );
  }

  discountWeekday() {
    if (this.#date % 7 < 3) {
      return 0;
    }

    const dessertList = this.#orderList.filter(
      (order) => order.category === 'dessert'
    );
    const totalAmount = dessertList.reduce(
      (total, menu) => total + menu.amount,
      0
    );
    return totalAmount * Discount.#weekDiscount;
  }
}

export default Discount;
