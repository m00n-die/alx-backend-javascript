const { fs } = require('fs');

function readDatabase(filePath) {
  const allStudents = {};
  return new Promise((resolve, reject) => {
    
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');
        
        const place_holder = lines.slice(1);
        for (let i = 0; i < place_holder.length; i += 1) {
          if (place_holder[i]) {
            const field = place_holder[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(allStudents, field[3])) {
              allStudents[field[3]].push(field[0]);
            } else {
              allStudents[field[3]] = [field[0]];
            }
          }
        }
        resolve(allStudents);
      }
    });
  });
};

module.exports = readDatabase;
