import { PRICE } from './constants/index.js';
import Discount from './Discount.js';
import InputView from './View/InputView.js';
import Service from './Service.js';

class App {
  async run() {
    const date = await InputView.readDate();
    const orderDetails = await InputView.readOrder();

    const service = new Service(orderDetails);
    const totalOrderAmount = service.calculateOrderAmount();
    const isGiveawayRecipient = service.isGiveawayRecipient(totalOrderAmount);

    const discount = new Discount(date, orderDetails);
    const discountAmount = discount.calculateDiscountAmount();
    const totalBenefitAmount = isGiveawayRecipient
      ? discountAmount + PRICE.giveaway
      : discountAmount;

    const badge = service.grantBadge(totalBenefitAmount);
  }
}

export default App;
