const PRIZE = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

const WINNING_RESULT = Object.freeze({
  5: (count) => `3개 일치 (5,000원) - ${count}개`,
  4: (count) => `4개 일치 (50,000원) - ${count}개`,
  3: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  2: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  1: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
});

const WINNING_ORDER = [5, 4, 3, 2, 1];
const MINIMUM_LOTTO_UNIT = 1000;

const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요. ',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요. ',
  INPUT_WHETHER_TO_RESTART: '> 다시 시작하시겠습니까? (y/n)',
  OUTPUT_LOTTO_COUNT: '개를 구매했습니다.',
  OUTPUT_WINNING_STATISTICS: '당첨 통계',
  OUTPUT_DIVIDE_LINE: '--------------------',
  OUTPUT_EARNING_RATE: (earningRate) => `총 수익률은 ${earningRate}%입니다.`,
});

export { PRIZE, MESSAGE, WINNING_RESULT, WINNING_ORDER, MINIMUM_LOTTO_UNIT };
