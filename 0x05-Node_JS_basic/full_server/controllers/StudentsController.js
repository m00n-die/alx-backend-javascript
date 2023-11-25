const { fs } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    fs(process.argv[2].toString()).then((allStudents) => {
    const result = [];
    result.push('This is the list of our students');
  
    const keys = Object.keys(allStudents);
    keys.sort();
    for (let i = 0; i < keys.length; i += 1) {
      result.push(`Number of students in ${keys[i]}: ${allStudents[keys[i]].length}. List: ${allStudents[keys[i]].join(', ')}`);
    }
    response.status(200).send(result.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const param = request.params.major;
    readDatabase(process.argv[2].tostring()).then(((allStudents) => {
    if (!param in allStudents) {
      response.status(500).send('Major parameter must be CS or SWE'));
    } else {
      response.status(200).send(`List: ${allStudents[fiels].join(', ')}`);
    }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
    }
}

module.exports = StudentsController;
