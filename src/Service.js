import { PRICE } from './constants/index.js';

class Service {
  #orderDetails;

  constructor(orderDetails) {
    this.#orderDetails = orderDetails;
  }

  calculateOrderAmount() {
    const menus = Object.values(this.#orderDetails);
    return menus.reduce(
      (total, category) => total + this.#calculateByCategory(category),
      0
    );
  }

  #calculateByCategory(category) {
    return category.reduce(
      (total, { menu, quantity }) => total + PRICE[menu] * quantity,
      0
    );
  }
}

export default Service;
