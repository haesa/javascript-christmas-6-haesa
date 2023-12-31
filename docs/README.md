# 🚀 기능 목록

- [x] 총주문 금액 계산하기

  - `Service: this.#calculateOrderAmount()`

- [x] 증정 이벤트 대상인지 확인한다.

  - `Service: this.#isGiveawayTarget()`
    - 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정

- [x] 총혜택 금액에 따라 이벤트 배지 부여하기

  - `Service: this.#grantBadge()`
    - 5천 원 이상: 별
    - 1만 원 이상: 트리
    - 2만 원 이상: 산타

- [x] 혜택 내역 확인하기

  - `Benefit: this.checkBenefitDetails()`
    - 할인 내역에 증정 이벤트를 추가한다.

- [x] 할인 내역 확인하기

  - `Benefit: this.#checkDiscountDetails()`
    - 크리스마스 할인, 평일 할인, 주말 할인, 특별 할인을 계산한다.

- [x] 크리스마스 디데이 할인 금액 계산

  - `Benefit: this.#calculateChristmasDiscount()`
    - 1일부터 25일까지만 진행한다.
    - 할인 금액은 1,000원으로 시작해서 하루에 100원씩 증가한다.

- [x] 평일 할인 계산하기

  - `Benefit: this.#calculateWeekdayDiscount()`
    - 날짜를 7로 나눈 나머지가 1과 2가 아니면 평일이다.

- [x] 주말 할인 계산하기

  - `Benefit: this.#calculateWeekendDiscount()`
    - 날짜를 7로 나눈 나머지가 1과 2이면 주말이다.

- [x] 특별 할인 계산하기

  - `Benefit: this.#calculateSpecialDiscount()`
    - 일요일에 할인한다(날짜를 7로 나눈 나머지가 3이면 일요일이다).
    - 25일(크리스마스)에 할인한다.

## 주의 사항

- 총주문 금액 10,000원 이상부터 이벤트가 적용된다.
- 음료만 주문 시, 주문할 수 없다.
- 메뉴는 한 번에 최대 20개까지만 주문할 수 있다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)

<br />

# ⚠ 입력 예외 상황

- 12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)

  - 방문할 날짜는 1 이상 31 이하의 숫자여야 한다.

  - [x] 1 이상 31 이하의 숫자가 아닌 경우, `"[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."`라는 에러 메시지를 보여준다.

- 주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)

  - [x] 고객이 메뉴판에 없는 메뉴를 입력하는 경우, `"[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."`라는 에러 메시지를 보여 주세요.

  - [x] 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요. 이외의 입력값은 `"[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."`라는 에러 메시지를 보여 주세요.

  - [x] 메뉴 형식이 예시와 다른 경우, `"[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."`라는 에러 메시지를 보여 주세요.

  - [x] 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), `"[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."`라는 에러 메시지를 보여 주세요.

  - [x] 총주문 메뉴가 20개가 넘어가면 `"[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다."`라는 에러 메시지를 보여준다.

  - [x] 음료만 주문 시 `"[ERROR] 음료만 주문할 수 없습니다."`라는 에러 메시지를 보여준다.

# 메뉴

```
<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)
```
