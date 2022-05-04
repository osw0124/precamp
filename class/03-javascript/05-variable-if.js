if (2 + 4 === 6) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}

if (false) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}

if (0) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}

if (1) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐 초등학교",
};

if (profile.age >= 20) {
  console.log("성인입니다");
} else if (profile.age <= 19 && profile.age >= 8) {
  console.log("학생입니다");
} else {
  console.log("어린이입니다");
}
