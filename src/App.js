import Service from './Service';

class App {
  #totalAmount;
  #isGiveawayRecipient;

  async run() {
    const orderDetails = {
      appetizer: [{ menu: '양송이수프', quantity: 2 }],
      main: [
        { menu: '크리스마스파스타', quantity: 2 },
        { menu: '바비큐립', quantity: 1 },
      ],
      dessert: [{ menu: '아이스크림', quantity: 2 }],
      drink: [{ menu: '제로콜라', quantity: 1 }],
    };
    const service = new Service(orderDetails);
    this.#totalAmount = service.calculateOrderAmount();
    this.#isGiveawayRecipient = service.isGiveawayRecipient(this.#totalAmount);
  }
}

export default App;
