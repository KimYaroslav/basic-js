const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!(arr.includes('--discard-next') ||
    arr.includes('--discard-prev') ||
    arr.includes('--double-next') ||
    arr.includes('--double-prev'))) {
    return arr;
  }

  let newArr = [];

  if (arr.length !== 0) {

    for (let i = 0; i < arr.length; i++) {

      if (typeof (arr[i]) === 'number') {
        newArr.push(arr[i]);
        continue;
      }

      if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
        i = i + 2;
        continue;
      }

      if (arr[i] === '--double-next' && arr[i + 2] === '--double-prev') {
        for (let j = 0; j < 3; j++) {
          newArr.push(arr[i + 1]);
        };

        i = i + 2;
        continue;
      }

      if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
        i = i + 2;
        continue;
      }

      if (arr[i] === '--double-next' && arr[i + 2] === '--discard-prev') {
        newArr.push(arr[i + 1]);
        i = i + 2;
        continue;
      }

      else if (i !== 0) {
        if (arr[i] === '--discard-prev') {
          newArr.slice(i - 1, 1);
        }
        else if (arr[i] === '--double-prev') {
          newArr.push(arr[i - 1]);
        }
        continue;
      }

      else if (i !== (arr.lenght - 1)) {
        if (arr[i] === '--double-next') {
          newArr.push(arr[i + 1]);
        }
        else if (arr[i] === '--discard-next') {
          i = i + 1;          
        }
        continue;
      }
    }
    return newArr;
  }
}

module.exports = {
  transform
};