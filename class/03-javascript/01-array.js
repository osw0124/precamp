const classmate = ["오세웅", "배건희", "회민"];
console.log(classmate[0]);
classmate.push("코드캠프");
classmate.pop();
console.log(classmate);
console.log(classmate.length);
console.log(classmate.includes("코드캠프"));

// const developer = ['성공01', '성공02', '성공03', '성공04', '성공05']
// undefined
// developer[0]
// '성공01'
// const realTarget = ['goodLocatoin', 'goodpartner', 'sameMoney', 'anytingelse']
// undefined
// console.log(realTarget)
// VM695:1 (4) ['goodLocatoin', 'goodpartner', 'sameMoney', 'anytingelse']
// undefined
// realTarget[0]
// 'goodLocatoin'
// realTarget[1]
// 'goodpartner'
// realTarget[3]
// 'anytingelse'
// const dream = ['커리어점프', '성공', '할 수 있다.']
// undefined
// dream
// (3) ['커리어점프', '성공', '할 수 있다.']
// let developerDream = []
// undefined
// developer = map(push(developer, dream))
// VM1125:1 Uncaught ReferenceError: map is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1125:1
// developerDream = developer.concat([dream)
// VM1314:1 Uncaught SyntaxError: Unexpected token ')'
// developerDream = developer.concat([dream])
// (6) ['성공01', '성공02', '성공03', '성공04', '성공05', Array(3)]
// developerDream = developer.concat(dream)
// (8) ['성공01', '성공02', '성공03', '성공04', '성공05', '커리어점프', '성공', '할 수 있다.']
