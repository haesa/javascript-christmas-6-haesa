import Discount from './Domain/Discount';
import InputView from './View/InputView';
import OutputView from './View/OutputView';
import isGiveaway from './Domain/isGiveaway';
import { GIVEAWAY_EVENT } from './constants';

class App {
  #date;
  #orderList = [];
  #benefitList = [];

  async run() {
    OutputView.printHello();
    this.#date = await this.#readDate();
    this.#orderList = await this.#readOrders();

    const orderAmount = this.#calculateOrderAmount();
    this.#benefitList =
      orderAmount > 10_000 ? this.#getBenefitList(orderAmount) : [];
    this.#printEventPlan(orderAmount);
  }

  async #readDate() {
    try {
      return await InputView.readDate();
    } catch (error) {
      OutputView.printError(error);
      return await this.#readDate();
    }
  }

  async #readOrders() {
    try {
      return await InputView.readOrders();
    } catch (error) {
      OutputView.printError(error);
      return await this.#readOrders();
    }
  }

  #calculateOrderAmount() {
    return this.#orderList.reduce((total, order) => total + order.amount, 0);
  }

  #getBenefitList(orderAmount) {
    const discount = new Discount(this.#date, this.#orderList);
    const discountList = discount.getDiscountList();
    return isGiveaway(orderAmount)
      ? [...discountList, { event: GIVEAWAY_EVENT, amount: 25_000 }]
      : discountList;
  }

  #printEventPlan(orderAmount) {
    const benefitAmount = this.#benefitList.reduce(
      (total, benefit) => total + benefit.amount,
      0
    );
    OutputView.printPreviewMessage(this.#date);
    OutputView.printMenu(this.#orderList);
    OutputView.printOrderAmount(orderAmount);
    OutputView.printGiveaway(isGiveaway(orderAmount));
    OutputView.printBenefitList(this.#benefitList);
    OutputView.printBenefitAmount(benefitAmount);
    OutputView.printPayAmount(orderAmount, this.#benefitList);
    OutputView.printBadge(grantBadge(benefitAmount));
  }
}

export default App;
