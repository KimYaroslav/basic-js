const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {  
  
  turnsSpeedinSec = Math.floor(turnsSpeed / 3600);
  
  let turnsCount = 2**disks - 1;
  let secondsCount = Math.floor(turnsCount / (turnsSpeed / 3600));
  const resultObj = {turns: turnsCount, seconds: secondsCount};

  return resultObj;
  
}

module.exports = {
  calculateHanoi
};
