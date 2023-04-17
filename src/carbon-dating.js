const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  /* 
  t = (ln(MODERN_ACTIVITY/A) * HALF_LIFE_PERIOD) / Ln(2);
  A нам дают по заданию
  ln - натуральный логарифм
   */
  const s = sampleActivity;
  const m = MODERN_ACTIVITY;
  const h = HALF_LIFE_PERIOD;
  const num = Number(s);

  if (typeof (s) !== 'string') {
    return false;
  }

  if (!isNaN(num) && num > 0 && num <= 15) {
    let result = Math.ceil(Math.abs((Math.log(m / s) * h) / Math.log(2)));
    return result;
  } else {
    return false;
  }

}

module.exports = {
  dateSample
};
