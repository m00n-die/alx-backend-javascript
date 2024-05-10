const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const out = [];
      out.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();

      for (let i = 0; i < keys.length; i += 1) {
        out.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      res.status(200).send(out.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const param = req.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(param in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[param].join(', ')}`);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
