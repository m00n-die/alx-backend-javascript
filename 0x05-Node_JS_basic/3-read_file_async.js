const fs = require('fs');
const { parse } = require('csv-parse');

let studentCounter = 0;
let csStudents = 0;
let sweStudents = 0;

const csNames = [];
const sweNames = [];

function countStudents(filePath) {
  if (!filePath) {
    throw new Error('Cannot load the database');
  }

  fs.createReadStream(filePath)
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('data', (row) => {
      studentCounter += 1;
      // console.log(studentCounter);
      const check = row[3];
      // console.log(csCheck);
      if (check.toLowerCase() === 'cs') {
        // console.log("CS student!");
        csStudents += 1;
        csNames.push(row[0]);
      } else {
        // console.log("SWE Student!");
        sweStudents += 1;
        sweNames.push(row[0]);
      }
    })
    .on('end', () => {
      const csNamesString = csNames.toLocaleString();
      const sweNamesString = sweNames.toLocaleString();
      // console.log('finished');
      console.log(`Number of Students: ${studentCounter}`);
      console.log(`Number of CS Students: ${csStudents}. List: ${csNamesString}`);
      console.log(`Number of SWE Students: ${sweStudents}. List: ${sweNamesString}`);
      // console.log(csNames.toLocaleString());
      // console.log(sweNames.toLocaleString());
    })
    .on('error', (error) => {
      console.log(error.message);
    });
}

module.exports = countStudents;
