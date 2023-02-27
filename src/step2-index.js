/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/**
 * step 2의 시작점이 되는 파일입니다.
 * 노드 환경에서 사용하는 readline 등을 불러올 경우 정상적으로 빌드할 수 없습니다.
 */
import './static/css/style.css';
import LottoWebController from './controller/LottoWebController';
import {
  MINIMUM_LOTTO_UNIT,
  WINNING_ORDER,
  CONVERT_RANK_TO_STRING,
  MATCH_RANK,
  LOTTO_EMOJI,
} from './data/Constants';
import { createTextElementAndAppend } from './utils/Utils';

const inputPurchaseButton = document.getElementById('input-purchase-btn');
const checkResultButton = document.getElementById('check-result-btn');
const modalCloseButton = document.getElementById('modal-close-btn');
const restartButton = document.getElementById('restart-btn');

const afterPurchaseShowElement = document.querySelector('.after-purchase');
const lottoListWrap = document.querySelector('.lotto-list');
const purchaseLottoCount = document.getElementById('lotto-purchase-count');
const winNumberElement = [...document.getElementsByClassName('win-number')];
const bonusNumberElement = document.getElementById('bonus-number');
const modal = document.querySelector('.result-modal-background');
const ranks = document.getElementsByClassName('rank');
const earnRateElement = document.getElementById('earnRate');
const inputAmountElement = document.getElementById('input-purchase-amount');

const controller = new LottoWebController();

// 구매 버튼 클릭시
inputPurchaseButton.addEventListener('click', () => setLottos());
inputAmountElement.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.key === 'Enter') setLottos();
});

const setLottos = () => {
  resetLottoList();

  const inputAmount = inputAmountElement.value;
  const isLottoNotThrow = controller.setLottos(inputAmount);

  if (isLottoNotThrow) {
    afterPurchaseShowElement.style.display = 'block';
    purchaseLottoCount.innerText = inputAmount / MINIMUM_LOTTO_UNIT;

    const lottoList = controller.printLottoInfo();
    renderLottoList(lottoList);
  }
};

const resetLottoList = () => {
  lottoListWrap.innerHTML = '';
};

const renderLottoList = (lottoList) => {
  lottoListWrap.append(
    ...lottoList.map((lottoInfo) => {
      const lottoElement = document.createElement('li');

      createTextElementAndAppend(LOTTO_EMOJI, lottoElement);
      createTextElementAndAppend(lottoInfo, lottoElement);

      return lottoElement;
    })
  );
};

// 결과 버튼 클릭시
checkResultButton.addEventListener('click', () => result());

const result = () => {
  const winNumber = winNumberElement.map((element) => element.value);
  const bonusNumber = bonusNumberElement.value;
  const isWinningNotThrow = controller.setWinNumber(winNumber, bonusNumber);

  if (isWinningNotThrow) {
    modal.style.display = 'block';

    matchWinRank();
    earnRateElement.innerText = controller.printEarningRate();
  }
};

const matchWinRank = () => {
  const rank = controller.printWinningResult();

  WINNING_ORDER.forEach((order, index) => {
    if (order !== 'NONE')
      ranks[MATCH_RANK[order] - 1].innerText =
        rank[CONVERT_RANK_TO_STRING[index + 1]];
  });
};

// 모달 닫기 버튼 클릭시
modalCloseButton.addEventListener(
  'click',
  () => (modal.style.display = 'none'),
  false
);

// 재시작 버튼 클릭시
restartButton.addEventListener('click', () => location.reload());
