import { LOTTO_LENGTH, MINIMUM_LOTTO_UNIT } from '../src/data/Constants';
import Lotto from '../src/domain/Lotto';

test('중복 숫자가 없는 로또가 잘 생성되는지 테스트', () => {
  // given
  const price = 8000;

  // when
  const lottoCount = Math.floor(price / MINIMUM_LOTTO_UNIT);
  const lottos = Array.from({ length: lottoCount }, () => new Lotto());

  // then
  lottos.forEach((lotto) => {
    const mySet = new Set(lotto.lottoNumber);
    expect([...mySet]).toHaveLength(LOTTO_LENGTH);
  });
});
