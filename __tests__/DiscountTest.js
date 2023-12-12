import Discount from '../src/Domain/Discount';

const orderList = [
  { menu: '크리스마스파스타', amount: 1, category: 'main' },
  { menu: '아이스크림', amount: 2, category: 'dessert' },
];

describe('Discount 클래스 테스트', () => {
  test('크리스마스 할인 테스트', () => {
    let discount = new Discount(23, orderList);
    let result = discount.discountChristmas();
    expect(result).toBe(3200);

    discount = new Discount(31, orderList);
    result = discount.discountChristmas();
    expect(result).toBe(0);
  });

  test('평일 할인 테스트', () => {
    const discount = new Discount(4, orderList);
    const result = discount.discountWeekday();
    expect(result).toBe(4046);
  });

  test('주말 할인 테스트', () => {
    const discount = new Discount(30, orderList);
    const result = discount.discountWeekend();
    expect(result).toBe(2023);
  });
});
