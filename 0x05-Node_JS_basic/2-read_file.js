const fs = require('fs');
const { csv } = require('csv-parser')

function countStudents (filePath) {
  if (!filePath) {
    throw new Error('Cannot load the database');
    return;
  }

  let studentsNumber = 0;
  let sweNumber = 0;
  let csNumber = 0;

  const csStudents = [];
  const sweStudents = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      const allData = data.split('\n');
      allData.forEach(function (line) {
        studentsNumber++;
	if (line.toLowerCase().includes("swe")) {
	  sweNumber++;
	  const arr = line.split(',');
	  sweStudents.push(arr[0]);
	}
	
	if (line.toLowerCase().includes("cs")) {
	  csNumber++;
	  const csArr = line.split(',');
	  csStudents.push(csArr[0]);
	}
      })
    })

    .on('end', () => {
      console.log(`Number of students: "${studentsNumber}"`);
      console.log(`Number of students in CS: "${csNumber}". "${csStudents.values()}"`);
      console.log(`Number of students in SWE: "${sweNumber}". "${sweStudents.values()}"`);
    })
}

module.exports = countStudents;
