const addDays = require('date-fns/addDays');


const getDateAfterXDays = (days) => {
   const requiredDate = addDays(new Date(2020, 7, 22), days);
   return `${requiredDate.getDate()}-${requiredDate.getMonth()+1}-${requiredDate.getFullYear()}`;
   
};

module.exports = getDateAfterXDays;