const fs = require('fs');

function countStudents(path) {
  try {
    // read file data and separate by new lines
    let fileData = fs.readFileSync(path, 'utf8').toString().split('\n');
    fileData = fileData.slice(1, fileData.length - 1);
    console.log(`Number of students: ${fileData.length}`);

    const obj = {};
    fileData.forEach((element) => {
      const student = element.split(',');

      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });

    for (const i in obj) {
      if (i) console.log(`Number of students in ${i}: ${obj[i].length}. List: ${obj[i].join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the fileDatabase');
  }
}

module.exports = countStudents;
