const { fs } = require('fs');

function readDatabase(filePath) {
  const allStudents = {};
  return new Promise((resolve, reject) => {
    fs(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');

        const placeHolder = lines.slice(1);
        for (let i = 0; i < placeHolder.length; i += 1) {
          if (placeHolder[i]) {
            const field = placeHolder[i].toString().split(',');
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
}

module.exports = readDatabase;
