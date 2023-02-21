/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/**
 * step 2의 시작점이 되는 파일입니다.
 * 노드 환경에서 사용하는 readline 등을 불러올 경우 정상적으로 빌드할 수 없습니다.
 */
import './static/css/style.css';
import LottoWebController from './controller/LottoWebController';
import { MINIMUM_LOTTO_UNIT } from './data/Constants';

const afterPurchaseShow = document.getElementsByClassName('after-purchase')[0];
const lottoListWrap = document.getElementsByClassName('lotto-list')[0];
const purchaseLottoCount = document.getElementById('lotto-purchase-count');
const controller = new LottoWebController();

const setLottos = (lottoList) => {
  while (lottoListWrap.firstChild) {
    lottoListWrap.removeChild(lottoListWrap.firstChild);
  }
  lottoList.map((lottoInfo) => {
    const lottoElement = document.createElement('li');
    const lottoEmoji = document.createElement('div');
    lottoEmoji.innerHTML = '🎟️';
    const lottoText = document.createElement('p');
    lottoText.innerHTML = lottoInfo;
    lottoElement.appendChild(lottoEmoji);
    lottoElement.appendChild(lottoText);
    lottoListWrap.append(lottoElement);
  });
};

document.getElementById('input-purchase-btn').addEventListener(
  'click',
  () => {
    const inputAmount = document.getElementById('input-purchase-amount').value;
    afterPurchaseShow.style.display = 'block';
    controller.setLottos(inputAmount);
    purchaseLottoCount.innerText = inputAmount / MINIMUM_LOTTO_UNIT;
    setLottos(controller.printLottoInfo());
  },
  false
);

export const inputPurchaseAmount = () => {};
