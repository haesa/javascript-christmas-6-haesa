const EVENT = {
  christmas: '크리스마스 디데이 할인',
  weekday: '평일 할인',
  weekend: '주말 할인',
  special: '특별 할인',
  giveaway: '증정 이벤트',
};

const OUTPUT_MESSAGE = Object.freeze({
  hello: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview: '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  orderMenuTitle: '<주문 메뉴>',
  orderMenu: (menu, quantity) => `${menu} ${quantity}개`,
  orderAmountTitle: '<할인 전 총주문 금액>',
  orderAmount: orderAmount => `${orderAmount.toLocaleString('ko-KR')}원`,
  giveawayMenuTitle: '<증정 메뉴>',
  benefitDetailsTitle: '<혜택 내역>',
  benefitDetails: ([event, amount]) =>
    `${EVENT[event]}: -${amount.toLocaleString('ko-KR')}원`,
  benefitAmountTitle: '<총혜택 금액>',
  benefitAmount: benefit =>
    `${benefit > 0 ? '-' : ''}${benefit.toLocaleString('ko-KR')}원`,
  paymentAmountTitle: '<할인 후 예상 결제 금액>',
  paymentAmount: payment => `${payment.toLocaleString('ko-KR')}원`,
  badgeTitle: '<12월 이벤트 배지>',
  newLine: '',
});

export default OUTPUT_MESSAGE;
