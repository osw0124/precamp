// let student = {
//     name: '철수',
//     age: 13,
// }
// undefined
// let student = {
//     name: '철수',
//     age: 13,
//     camp: '코드캠프'
// }
// undefined
// student
// {name: '철수', age: 13, camp: '코드캠프'}age: 13camp: "코드캠프"name: "철수"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// student.name
// '철수'
// student.age
// 13
// studeng.camp
// VM3166:1 Uncaught ReferenceError: studeng is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM3166:1
// student.camp
// '코드캠프'
// student.any
// undefined
// student[0]
// undefined
// studeng.name[0]
// VM3364:1 Uncaught ReferenceError: studeng is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM3364:1
// student.name[0]
// '철'
// let students = [student]
// undefined
// students
// [{…}]0: {name: '철수', age: 13, camp: '코드캠프'}length: 1[[Prototype]]: Array(0)
// students.push(student)
// 2
// students.push(student)
// 3
// students.push(student)
// 4
// students
// (4) [{…}, {…}, {…}, {…}]0: {name: '철수', age: 13, camp: '코드캠프'}1: {name: '철수', age: 13, camp: '코드캠프'}2: {name: '철수', age: 13, camp: '코드캠프'}3: {name: '철수', age: 13, camp: '코드캠프'}length: 4[[Prototype]]: Array(0)
// students[0]
// {name: '철수', age: 13, camp: '코드캠프'}
// students[1]
// {name: '철수', age: 13, camp: '코드캠프'}
// students[2]
// {name: '철수', age: 13, camp: '코드캠프'}
// students[3]
// {name: '철수', age: 13, camp: '코드캠프'}
// students[4]
// undefined
// students[0].name
// '철수'

// let classmates = [
//     {name: '철수', age: 13, school: '다람쥐 초등학교'},
//     {name: '영희', age: 8, school: '공룡 초등학교'},
//     {name: '훈이', age: 11, school: '거북이 초등학교'},
// ]

// undefined
// classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐 초등학교'}1: {name: '영희', age: 8, school: '공룡 초등학교'}2: {name: '훈이', age: 11, school: '거북이 초등학교'}length: 3[[Prototype]]: Array(0)
// classmates.length
// 3
// classmates[0].age
// 13
// classmates[2].school
// '거북이 초등학교'
