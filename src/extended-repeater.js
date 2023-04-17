const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // str = str.toString();
  // keys = Object.keys(options);
  // res = [];

  // //СТРОКА addition (additionRepeatTimes раз) additionSeparator(между addition) separator 

  // // if (!Object.keys(options).includes('additionRepeatTimes')) {
  // for (let i = 0; i < options.repeatTimes; i++) {
  //   res.push(str);
  //   if (keys.includes('addition')) {
  //     if (keys.includes('additionRepeatTimes')) {
  //       res.push(addtition.toString())
  //       for (let a = 0; a < options.additionRepeatTimes; a++) {

  //       }
        
  //     } else { res.push(addition.toString()) };
  //      // * additionRepeatTimes
  //   }
    
  //   res.push(separator);
  //   res.push(additionSeparator);
  //   res.push('+');
  // }
  // // }
  // res = res.join('');
  // return res;
}

module.exports = {
  repeater
};
