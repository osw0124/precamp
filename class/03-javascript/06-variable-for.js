// let children = ["철수", "영희", "훈이"];

// for (i = 0; i < children.length; i++) {
//   console.log(children[i]);
// }

// for (let i in children) {
//   console.log(i);
// }

let persons = [
  { name: "철수", age: 18 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "말포이", age: 14 },
  { name: "도비", age: 3 },
];

// fot in은 key:value 구조의 객체에서만 사용한다.
for (let i in persons) {
  console.log(`${persons[i].name}:`, persons[i].age);
}

for (let person of persons) {
  console.log(`${person.name}:`, `${person.age}세`);
}

for (let count = 0; count < persons.length; count++) {
  if (persons[count].age > 18 + "님은 성인입니다") {
    console.log(persons[count].name + "님은 성인입니다");
  } else {
    console.log(persons[count].name + "님은 미성년자입니다");
  }
}

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

for (let fruit of fruits) {
  console.log(fruit.number + " " + fruit.title);
}
