import { ERROR_MESSAGE } from '../src/constants';
import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test.each([['abc'], ['0'], ['32']])(
    '식당 방문 날짜가 1 이상 31 이하의 숫자가 아니면 예외가 발생한다. (date: %s)',
    (date) => {
      expect(() => InputValidator.validateDate(date)).toThrow(
        ERROR_MESSAGE.date
      );
    }
  );

  test('메뉴 형식이 예시와 다른 경우 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.validateOrders('크리스마스파스타-ㅁ,아이스크림-2')
    ).toThrow(ERROR_MESSAGE.orders);
  });

  test('메뉴판에 없는 메뉴를 주문하면 예외가 발생한다.', () => {
    expect(() => InputValidator.validateOrders('토마토스프')).toThrow(
      ERROR_MESSAGE.orders
    );
  });

  test('음료만 주문하면 예외가 발생한다.', () => {
    expect(() => InputValidator.validateOrders('샴페인-1,제로콜라-1')).toThrow(
      ERROR_MESSAGE.orders
    );
  });

  test('중복 메뉴를 입력한 경우 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.validateOrders('시저샐러드-1,시저샐러드-1')
    ).toThrow(ERROR_MESSAGE.orders);
  });

  test('메뉴의 개수로 1 이상의 숫자가 아닌 값이 입력되면 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.validateOrders('크리스마스파스타-1,시저샐러드-0')
    ).toThrow(ERROR_MESSAGE.orders);
  });

  test('메뉴의 개수가 20개가 넘어가면 예외가 발생한다.', () => {
    expect(() =>
      InputValidator.validateOrders('크리스마스파스타-10,시저샐러드-11')
    ).toThrow(ERROR_MESSAGE.orders);
  });
});
