const fs = require("fs");
const { parse } = require("csv-parse");

let studentCounter = 0;
let csStudents = 0;
let sweStudents = 0;

const csNames = [];
const sweNames = [];

fs.createReadStream("./database.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    studentCounter++;
    // console.log(studentCounter);
    const check = row[3];
    // console.log(csCheck);
    if (check.toLowerCase() == "cs") {
      // console.log("CS student!");
      csStudents++;
      csNames.push(row[0]);
    } else {
      // console.log("SWE Student!");
      sweStudents++;
      sweNames.push(row[0]);
    }
  })
  .on("end", function () {
    console.log("finished");
    console.log(`Number of Students: ${studentCounter}`);
    console.log(`Number of CS Students: ${csStudents}`);
    console.log(`Number of SWE Students: ${sweStudents}`);
    console.log(csNames.toLocaleString());
    console.log(sweNames.toLocaleString());
  })
  .on("error", function (error) {
    console.log(error.message);
  });

