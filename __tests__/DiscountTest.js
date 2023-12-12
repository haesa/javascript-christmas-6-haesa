import Discount from '../src/Domain/Discount';

describe('Discount 클래스 테스트', () => {
  test('크리스마스 할인 테스트', () => {
    const orderList = [{ menu: '아이스크림', amount: 2, category: '디저트' }];

    let discount = new Discount(23, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: '크리스마스 디데이 할인', amount: 3200 },
    ]);

    discount = new Discount(30, orderList);
    expect(discount.getDiscountList()).toEqual([]);
  });

  test('평일 할인 테스트', () => {
    const orderList = [{ menu: '아이스크림', amount: 2, category: '디저트' }];

    let discount = new Discount(26, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: '평일 할인', amount: 4046 },
    ]);
  });

  test('주말 할인 테스트', () => {
    const orderList = [
      { menu: '크리스마스파스타', amount: 1, category: '메인' },
    ];

    const discount = new Discount(30, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: '주말 할인', amount: 2023 },
    ]);
  });

  test('특별 할인 테스트', () => {
    const orderList = [
      { menu: '크리스마스파스타', amount: 1, category: '메인' },
    ];

    const discount = new Discount(31, orderList);
    expect(discount.getDiscountList()).toEqual([
      { event: '특별 할인', amount: 1000 },
    ]);
  });
});
