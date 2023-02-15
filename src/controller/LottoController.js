import {
  inputPurchaseAmount,
  inputWinningNumber,
  inputBonusNumber,
  inputWhetherToRestart,
} from '../view/InputView';
import LottoGame from '../domain/LottoGame';
import IO from '../utils/IO';
import { outputLottoInfo } from '../view/OutputView';
class LottoController {
  #purchaseAmount;
  #game;

  constructor() {
    this.init();
  }

  init() {
    this.#game = new LottoGame();
    this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    const purchaseAmount = await inputPurchaseAmount();
    this.#purchaseAmount = purchaseAmount;
    this.printLottoInfo();
  }

  printLottoInfo() {
    outputLottoInfo([
      [1, 2, 3, 4, 5, 6],
      [50, 29, 19, 39, 50, 20],
    ]);
    this.readWinningNumber();
  }

  async readWinningNumber() {
    const winningNumber = await inputWinningNumber();

    this.#game.initializeWin(winningNumber.split(',').map(Number));
    this.readBonusNumber();
  }

  async readBonusNumber() {
    const bonusNumber = await inputBonusNumber();

    this.#game.setBonusNumber(Number(bonusNumber));

    this.readWhetherToRestart();
  }

  async readWhetherToRestart() {
    const isRestart = await inputWhetherToRestart();

    // validation
    if (isRestart === 'n') {
      IO.close();
      return;
    }

    this.init();
  }
}

export default LottoController;
