const OUTPUT_MESSAGE = Object.freeze({
  hello: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  previewMessage: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  order: (order) => `${order.menu} ${order.amount}개`,
  orderAmount: (orderAmount) => `${orderAmount}원`,
  giveaway: '샴페인 1개',
  benefit: (benefit) => `${benefit.event}: ${benefit.amount}`,
  benefitAmount: (benefitAmount) => `-${benefitAmount}원`,
  payAmount: (payAmount) => `${payAmount}원`,
});

export default OUTPUT_MESSAGE;