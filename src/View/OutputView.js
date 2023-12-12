import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, GIVEAWAY_EVENT, NOTHING } from '../constants';

const OutputView = {
  printHello() {
    Console.print(OUTPUT_MESSAGE.hello);
  },

  printPreviewMessage(date) {
    Console.print(OUTPUT_MESSAGE.previewMessage(date));
    OutputView.printNewLine();
  },

  printMenu(orderList) {
    Console.print('<주문 메뉴>');
    orderList.forEach((order) => Console.print(OUTPUT_MESSAGE.order(order)));
    OutputView.printNewLine();
  },

  printOrderAmount(orderAmount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(OUTPUT_MESSAGE.orderAmount(orderAmount));
    OutputView.printNewLine();
  },

  printGiveaway(giveaway) {
    Console.print('<증정 메뉴>');

    if (giveaway) {
      Console.print(OUTPUT_MESSAGE.giveaway);
      OutputView.printNewLine();
      return;
    }

    Console.print(NOTHING);
    OutputView.printNewLine();
  },

  printBenefitList(benefitList) {
    Console.print('<혜택 내역>');

    if (benefitList.length === 0) {
      Console.print(NOTHING);
      OutputView.printNewLine();
    }

    benefitList.forEach((benefit) =>
      Console.print(OUTPUT_MESSAGE.benefit(benefit))
    );
    OutputView.printNewLine();
  },

  printBenefitAmount(benefitAmount) {
    Console.print('<총혜택 금액>');
    Console.print(OUTPUT_MESSAGE.benefitAmount(benefitAmount));
    OutputView.printNewLine();
  },

  printPayAmount(orderAmount, benefitList) {
    Console.print('<할인 후 예상 결제 금액>');
    const discountList = benefitList.filter(
      (benefit) => benefit.event !== GIVEAWAY_EVENT
    );
    const discountAmount = discountList.reduce(
      (total, discount) => total + discount.amount,
      0
    );
    Console.print(OUTPUT_MESSAGE.payAmount(orderAmount - discountAmount));
    OutputView.printNewLine();
  },

  printBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(badge);
  },

  printError(error) {
    Console.print(error.message);
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
