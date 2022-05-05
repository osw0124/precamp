let persons = [
  { name: "철수", age: 18 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "말포이", age: 14 },
  { name: "도비", age: 3 },
];

// function greetingStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i].name}님 안녕하세요`);
//   }
// }

// function greetingStudents(persons) {
//   for (let person of persons) {
//     console.log(`${person.name}님 안녕하세요`);
//   }
// }

// greetingStudents(persons);

// const greetingStudents = function (persons) {
//   for (let person of persons) {
//     console.log(`${person.name}님 안녕하세요`);
//   }
// };

const greetingStudents = (persons) => {
  for (let person of persons) {
    console.log(`${person.name}님 안녕하세요`);
  }
};

greetingStudents(persons);
