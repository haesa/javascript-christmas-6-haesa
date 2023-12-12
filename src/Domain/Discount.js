class Discount {
  static #christmasInitialDiscount = 1_000;
  static #christmasDiscount = 100;
  #date;
  #orderList;

  constructor(date, orderList) {
    this.#date = date;
    this.#orderList = orderList;
  }

  discountChristmas() {
    if (this.#date > 25) return 0;
    return (
      Discount.#christmasInitialDiscount +
      Discount.#christmasDiscount * (this.#date - 1)
    );
  }
}

export default Discount;
