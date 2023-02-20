import { MESSAGE, WINNING_RESULT, WINNING_ORDER } from '../data/Constants';
import IO from '../utils/IO';

const outputLottoInfo = (lottos) => {
  IO.output(lottos.length + MESSAGE.OUTPUT_LOTTO_COUNT);
  lottos.forEach((lotto) => {
    IO.output('[' + lotto.join(', ') + ']');
  });
};

const outputWinningResult = (winCount) => {
  IO.output(MESSAGE.OUTPUT_WINNING_STATISTICS);
  IO.output(MESSAGE.OUTPUT_DIVIDE_LINE);

  WINNING_ORDER.forEach((order) => {
    if (order === 'NONE') return;
    IO.output(WINNING_RESULT[order](winCount[order]));
  });
};

const outputWinningStatistics = (earningRate) => {
  return IO.output(MESSAGE.OUTPUT_EARNING_RATE(earningRate));
};

export { outputLottoInfo, outputWinningResult, outputWinningStatistics };
