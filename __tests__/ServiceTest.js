import Service from '../src/Service';

describe('Service 테스트', () => {
  test('총주문 금액을 반환한다.', () => {
    const orderDetails = {
      appetizer: [{ menu: '양송이수프', quantity: 2 }],
      main: [
        { menu: '티본스테이크', quantity: 1 },
        { menu: '크리스마스파스타', quantity: 2 },
        { menu: '바비큐립', quantity: 1 },
      ],
      dessert: [{ menu: '아이스크림', quantity: 2 }],
      drink: [
        { menu: '샴페인', quantity: 2 },
        { menu: '제로콜라', quantity: 1 },
      ],
    };

    const service = new Service(orderDetails);
    const orderAmount = service.calculateOrderAmount();

    expect(orderAmount).toBe(234000);
  });
});
