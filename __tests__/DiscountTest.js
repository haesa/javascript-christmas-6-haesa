import Discount from '../src/Discount';

describe('Discount 클래스 테스트', () => {
  test('할인 내역을 반환한다.', () => {
    const date = 24;
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

    const discount = new Discount(date, orderDetails);
    const discountDetails = discount.calculateTotalDiscount();

    expect(discountDetails).toStrictEqual({
      christmas: 3300,
      weekday: 4046,
      weekend: 0,
      special: 1000,
    });
  });
});
