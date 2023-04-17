const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  res = 0;

  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }

  if (s1.length > s2.length) {

    for (let i = 0; i < s1.length; i++) {
      if (s2.includes(s1[i])) {
        s2.splice(s2.indexOf(s1[i]), 1);
        res = res + 1;
      };
    }
  }

  else {
    for (let i = 0; i < s2.length; i++) {
      if (s1.includes(s2[i])) {
        s1.splice(s1.indexOf(s2[i]), 1);
        res = res + 1;
      };
    }
  }


  return res;
}

module.exports = {
  getCommonCharacterCount
};
