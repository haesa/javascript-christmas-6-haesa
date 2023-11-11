import Benefit from '../src/Benefit';

describe('Discount 클래스 테스트', () => {
  const orders = [
    { menu: '양송이수프', quantity: 2, cetecory: 'appetizer' },
    { menu: '크리스마스파스타', quantity: 2, category: 'main' },
    { menu: '바비큐립', quantity: 1, category: 'main' },
    { menu: '아이스크림', quantity: 2, category: 'dessert' },
    { menu: '제로콜라', quantity: 1, category: 'drink' },
  ];

  test('혜택 내역을 반환한다. - 크리스마스, 주말, 증정', () => {
    const benefit = new Benefit(23, orders);
    const benefitDetails = benefit.checkBenefitDetails(true);

    expect(benefitDetails).toStrictEqual({
      christmas: 3200,
      weekend: 6069,
      giveaway: 25000,
    });
  });

  test('혜택 내역을 반환한다. - 평일, 특별', () => {
    const benefit = new Benefit(31, orders);
    const benefitDetails = benefit.checkBenefitDetails(false);

    expect(benefitDetails).toStrictEqual({
      weekday: 4046,
      special: 1000,
    });
  });
});
