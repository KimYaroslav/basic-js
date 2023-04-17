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
  console.log(arr);
  if (!Array.isArray(arr)) {
    console.log(0);
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.includes('--discard-next') &&
    !arr.includes('--discard-prev') &&
    !arr.includes('--double-next') &&
    !arr.includes('--double-prev')) {
    console.log(1);
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (typeof (arr[i]) === 'number') {
      newArr.push(arr[i]);
      console.log(2);
      continue;
    }

    if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
      i = i + 2;
      console.log(3);
      continue;
    }

    if (arr[i] === '--double-next' && arr[i + 2] === '--double-prev') {
      for (let j = 0; j < 3; j++) {
        newArr.push(arr[i + 1]);
        console.log(3);
      };

      i = i + 2;
      console.log(4);
      continue;
    }

    if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
      i = i + 2;
      console.log(5);
      continue;
    }

    if (arr[i] === '--double-next' && arr[i + 2] === '--discard-prev') {
      newArr.push(arr[i + 1]);
      i = i + 2;
      console.log(6);
      continue;
    }

    else if (arr[i] === '--discard-prev') {
      if (i === 0) {
        console.log(7);
        continue;
      } else {
        newArr.slice(i - 1, 1);
        console.log(8);
        continue;
      }
    }

    else if (arr[i] === '--double-prev') {
      if (i === 0) {
        console.log(9);
        continue;
      } else {
        newArr.push(arr[i - 1]);
        console.log(10);
        continue;
      }
    }

    else if (arr[i] === '--double-next') {
      if (i === (arr.length - 1)) {
        console.log(11);
        continue;
      } else {
        newArr.push(arr[i + 1]);
        console.log(12);
        continue;
      }
    }

    else if (arr[i] === '--discard-next') {
      if (arr[i] === (arr.length - 1)) {
        console.log(13);
        continue;
      } else {
        i = i + 1;
        console.log(14);
        continue;
      }
    }
  }
    return newArr;
}

module.exports = {
  transform
};