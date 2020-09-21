var db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject)=>{
  db.query('INSERT INTO lottery_information SET?', data, function(err,results, fields){
  if(err){
    reject('could not insert into lottery information')
  }
   resolve('Successful');
  });
});


module.exports = {
  save_user_information
}
