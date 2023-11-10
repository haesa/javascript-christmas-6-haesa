import Discount from '../src/Discount';

describe('Discount 클래스 테스트', () => {
  const orderDetails = [
    { menu: '양송이수프', quantity: 2, cetecory: 'appetizer' },
    { menu: '크리스마스파스타', quantity: 2, category: 'main' },
    { menu: '바비큐립', quantity: 1, category: 'main' },
    { menu: '아이스크림', quantity: 2, category: 'dessert' },
    { menu: '제로콜라', quantity: 1, category: 'drink' },
  ];

  test('할인 금액을 계산한다.', () => {
    const discount = new Discount(23, orderDetails);
    const discountAmount = discount.calculateDiscountAmount();

    expect(discountAmount).toBe(9269);
  });

  test('할인 내역을 반환한다. - 크리스마스, 주말', () => {
    const discount = new Discount(23, orderDetails);
    const discountDetails = discount.checkDiscountDetails();

    expect(discountDetails).toStrictEqual({
      christmas: 3200,
      weekday: 0,
      weekend: 6069,
      special: 0,
    });
  });

  test('할인 내역을 반환한다. - 평일, 특별', () => {
    const discount = new Discount(31, orderDetails);
    const discountDetails = discount.checkDiscountDetails();

    expect(discountDetails).toStrictEqual({
      christmas: 0,
      weekday: 4046,
      weekend: 0,
      special: 1000,
    });
  });
});
