'use strict';

const dayjs = require('dayjs');
const sqlite = require('sqlite3');

function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;

  this.toString = () => `${this.code} - ${this.name}: ${this.score}`;
}

function ExamList() {
  const db = new sqlite.Database('exams.sqlite', (err) => { if(err) throw err; });

  // add
  this.add = (exam) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO score(coursecode, score, laude, datepassed) VALUES (?, ?, ?, DATE(?))';
      db.run(sql, [exam.code, exam.score, exam.laude, exam.date.format('YYYY-MM-DD')], function (err) {
        if(err)
          reject(err);
        else
          resolve(this.lastID);
      });
    });
  };

  // getAll
  this.getAll = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM course JOIN score ON course.code=score.coursecode';
      db.all(sql, [], (err, rows) => {
        if(err)
          reject(err);
        else {
          const examList = rows.map(row => new Exam(row.code, row.name, row.CFU, row.datepassed, row.score, row.laude==1));
          resolve(examList);
        }
      });
    });
  };

  // find
  this.find = (code) => {
    // scrivere qualcosa
  };

  // afterDate
  this.afterDate = (date) => {
    // scrivere qualcosa
  };

  // getWorst
  this.getWorst = (num) => {
    // scrivere qualcosa
  };

}

/* TESTING */
const main = async () => {
  const aw1 = new Exam('01TXYOV', 'Web Applications I', 6, '2021-07-01', 30, true);
  const ds = new Exam('01QJOV', 'Data Science and Database Technology', 8, '2021-06-15', 28);

  const exams = new ExamList();

  try {
    const id = await exams.add(aw1);
    // console.log(id);
    const myExams = await exams.getAll();
    console.log(`${myExams}`);
  } catch(error) {
    console.log(error);
  }
  
}

main();


