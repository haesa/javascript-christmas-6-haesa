import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import Service from './Service.js';

class App {
  async run() {
    OutputView.printHello();
    const date = await this.#readDate();
    const orders = await this.#readOrder();
    OutputView.printPreviewEvent();

    const service = new Service(date, orders);
    service.printResult();
  }

  async #readDate() {
    try {
      return await InputView.readDate();
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return await this.#readDate();
    }
  }

  async #readOrder() {
    try {
      return await InputView.readOrder();
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return await this.#readOrder();
    }
  }
}

export default App;
