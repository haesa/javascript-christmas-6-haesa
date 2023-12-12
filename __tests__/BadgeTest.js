import grantBadge from '../src/Domain/Badge';

describe('grantBadge 함수 테스트', () => {
  test('총혜택 금액이 2만원 이상이면 산타 배지를 부여한다.', () => {
    expect(grantBadge(20_000)).toBe('산타');
  });

  test('총혜택 금액이 1만원 이상이면 트리 배지를 부여한다.', () => {
    expect(grantBadge(10_000)).toBe('트리');
  });

  test('총혜택 금액이 5천원 이상이면 별 배지를 부여한다.', () => {
    expect(grantBadge(5_000)).toBe('별');
  });

  test('총혜택 금액이 5천원 아래면 배지를 부여하지 않는다.', () => {
    expect(grantBadge(4_999)).toBe('없음');
  });
});
