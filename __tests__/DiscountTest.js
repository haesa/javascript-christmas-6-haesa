import Discount from '../src/Domain/Discount';

describe('Discount 클래스 테스트', () => {
  test('크리스마스 할인 테스트', () => {
    const orderList = [{ menu: '아이스크림', amount: 2, category: 'dessert' }];

    let discount = new Discount(23, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: 'christmas', amount: 3200 },
      { event: 'weekday', amount: 0 },
      { event: 'weekend', amount: 0 },
      { event: 'special', amount: 0 },
    ]);

    discount = new Discount(30, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: 'christmas', amount: 0 },
      { event: 'weekday', amount: 0 },
      { event: 'weekend', amount: 0 },
      { event: 'special', amount: 0 },
    ]);
  });

  test('평일 할인 테스트', () => {
    const orderList = [{ menu: '아이스크림', amount: 2, category: 'dessert' }];

    let discount = new Discount(26, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: 'christmas', amount: 0 },
      { event: 'weekday', amount: 4046 },
      { event: 'weekend', amount: 0 },
      { event: 'special', amount: 0 },
    ]);
  });

  test('주말 할인 테스트', () => {
    const orderList = [
      { menu: '크리스마스파스타', amount: 1, category: 'main' },
    ];

    const discount = new Discount(30, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: 'christmas', amount: 0 },
      { event: 'weekday', amount: 0 },
      { event: 'weekend', amount: 2023 },
      { event: 'special', amount: 0 },
    ]);
  });

  test('특별 할인 테스트', () => {
    const orderList = [
      { menu: '크리스마스파스타', amount: 1, category: 'main' },
    ];

    const discount = new Discount(31, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: 'christmas', amount: 0 },
      { event: 'weekday', amount: 0 },
      { event: 'weekend', amount: 0 },
      { event: 'special', amount: 1000 },
    ]);
  });
});
