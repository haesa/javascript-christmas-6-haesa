import Service from '../src/Service';

describe('Service 테스트', () => {
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
  let service;

  beforeEach(() => {
    service = new Service(orderDetails);
  });

  test('총주문 금액을 반환한다.', () => {
    const orderAmount = service.calculateOrderAmount();
    expect(orderAmount).toBe(234000);
  });

  test('증정 이벤트 대상자를 판별한다.', () => {
    const isGiveawayRecipient = service.isGiveawayRecipient(120000);
    expect(isGiveawayRecipient).toBe(true);
  });

  test('산타 배지를 부여한다.', () => {
    const badge = service.grantBadge(20000);
    expect(badge).toBe('산타');
  });

  test('트리 배지를 부여한다.', () => {
    const badge = service.grantBadge(10000);
    expect(badge).toBe('트리');
  });

  test('별 배지를 부여한다.', () => {
    const badge = service.grantBadge(5000);
    expect(badge).toBe('별');
  });
});
