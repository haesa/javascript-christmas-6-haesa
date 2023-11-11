import { Console } from '@woowacourse/mission-utils';
import { NOTHING, OUTPUT_MESSAGE } from '../constants/index.js';

const OutputView = {
  printHello() {
    Console.print(OUTPUT_MESSAGE.hello);
  },

  printPreviewEvent() {
    Console.print(OUTPUT_MESSAGE.preview);
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printMenu(orders) {
    Console.print(OUTPUT_MESSAGE.orderMenuTitle);
    orders.forEach(({ menu, quantity }) =>
      Console.print(OUTPUT_MESSAGE.orderMenu(menu, quantity))
    );
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printOrderAmount(orderAmount) {
    Console.print(OUTPUT_MESSAGE.orderAmountTitle);
    Console.print(OUTPUT_MESSAGE.orderAmount(orderAmount));
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printGiveaway(isGiveawayTarget) {
    Console.print(OUTPUT_MESSAGE.giveawayMenuTitle);

    if (isGiveawayTarget) {
      Console.print('샴폐인 1개');
      Console.print(OUTPUT_MESSAGE.newLine);
      return;
    }

    Console.print(NOTHING);
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printBenefitDetails(benefitDetails) {
    Console.print(OUTPUT_MESSAGE.benefitDetailsTitle);

    const details = Object.entries(benefitDetails);
    if (details.length === 0) {
      Console.print(NOTHING);
      Console.print(OUTPUT_MESSAGE.newLine);
      return;
    }

    details.forEach(benefit =>
      Console.print(OUTPUT_MESSAGE.benefitDetails(benefit))
    );
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printBenefitAmount(benefitAmount) {
    Console.print(OUTPUT_MESSAGE.benefitAmountTitle);
    Console.print(OUTPUT_MESSAGE.benefitAmount(benefitAmount));
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printPaymentAmount(payment) {
    Console.print(OUTPUT_MESSAGE.paymentAmountTitle);
    Console.print(OUTPUT_MESSAGE.paymentAmount(payment));
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printBadge(badge) {
    Console.print(OUTPUT_MESSAGE.badgeTitle);

    if (badge) {
      Console.print(badge);
      return;
    }

    Console.print(NOTHING);
  },
};

export default OutputView;
