const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 'empty') {
  // Wed Oct 21 2150 18:36:41 GMT+0600 (Восточный Казахстан)
  // День недели Месяц Число Год Время Часовой пояс Регион
  // new Date(year, month, date, hours, minutes, seconds, ms)
  const seasonName = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
  }

  if (date === 'empty') return 'Unable to determine the time of year!';
  
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!');
    
  if (date instanceof Date) {
    
    month = date.getMonth();

    if (seasonName.spring.includes(month)) {
      return 'spring';
    }
    if (seasonName.summer.includes(month)) {
      return 'summer';
    }
    if (seasonName.autumn.includes(month)) {
      return 'autumn';
    }
    if (seasonName.winter.includes(month)) {
      return 'winter';
    }

  }    

  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
