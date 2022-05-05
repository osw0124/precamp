// 지연
// setTimeout(function () {
//   console.log("3초가 지났습니다.");
// }, 3000);

// 반복
// setInterval(function () {
//   console.log("1초가 지났습니다.");
// }, 1000);

let time = 10;

setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);
