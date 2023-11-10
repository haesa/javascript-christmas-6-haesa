import { PRICE } from './constants/index.js';
import Discount from './Discount.js';
import Service from './Service.js';

class App {
  #totalOrderAmount;
  #totalBenefitAmount;
  #isGiveawayRecipient;

  async run() {
    const orderDetails = {
      appetizer: [{ menu: '양송이수프', quantity: 2 }],
      main: [
        { menu: '크리스마스파스타', quantity: 2 },
        { menu: '바비큐립', quantity: 1 },
      ],
      dessert: [{ menu: '아이스크림', quantity: 2 }],
      drink: [{ menu: '제로콜라', quantity: 1 }],
    };
    const service = new Service(orderDetails);
    this.#totalOrderAmount = service.calculateOrderAmount();
    this.#isGiveawayRecipient = service.isGiveawayRecipient(this.#totalAmount);

    const discount = new Discount(24, orderDetails);
    const discountAmount = discount.calculateDiscountAmount();
    this.#totalBenefitAmount = this.#isGiveawayRecipient
      ? discountAmount + PRICE['샴폐인']
      : discountAmount;

    service.grantBadge(this.#totalBenefitAmount);
  }
}

export default App;
