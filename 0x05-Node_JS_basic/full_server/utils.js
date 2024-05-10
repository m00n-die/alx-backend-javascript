const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const names = {};

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const chunks = data.toString().split('\n');
        const noHeader = chunks.slice(1);

        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].toString().split(',');

            if (Object.prototype.hasOwnProperty.call(names, field[3])) {
              names[field[3]].push(field[0]);
            } else {
              names[field[3]] = [field[0]];
            }
          }
        }

        resolve(names);
      }
    });
  });
};
