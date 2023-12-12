import isGiveaway from '../src/Domain/Giveaway';

describe('isGiveaway 함수 테스트', () => {
  test('총주문 금액이 12만원 이상일 때 true를 반환한다.', () => {
    expect(isGiveaway(120_000)).toBe(true);
  });
});
