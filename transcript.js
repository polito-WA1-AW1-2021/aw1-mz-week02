'use strict';

const dayjs = require("dayjs");

function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = date;
  this.score = score;
  this.laude = laude;
}

function ExamList() {
  this.list = [];

  // add
  this.add = (exam) => {
    this.list.push(exam);
  };

  // find
  this.find = (code) => {
    /*for (const c of this.list) {
      if(c.code===code)
        return c;
    }
    return undefined;*/
    return this.list.filter(course => course.code === code)[0];
  };

  // afterDate
  this.afterDate = (date) => {
    return this.list.filter(course => course.date.isAfter(date));
  };

  // listByDate
  this.listByDate = () => {
    return [...this.list].sort((a,b) => (a.date.isAfter(b.date) ? 1 : -1));
  };

  // listByScore
  this.listByScore = () => {
    return [...this.list].sort((a,b) => (b.score - a.score));
  };

  // media non pesata, contando i 30L come 30
  this.average = () => {
    return this.list.reduce((avg, course) => avg + course.score, 0)/this.list.length;
  };
  

}

const aw1 = new Exam('01abc', 'Applicazioni Web I', 6, dayjs('2021-07-01'), 30, true);
const sw = new Exam('02aaa', 'Ingegneria del software', 6, dayjs('2021-06-15'), 28);

const exams = new ExamList();
exams.add(aw1);
exams.add(sw);
//console.log(exams.find('01abc'));
//console.log(exams.find('03xxx'));

const afterList = exams.afterDate(dayjs('2021-06-16'));
console.log(afterList);

//const orderedList = exams.listByDate();
//console.log(exams.average());
