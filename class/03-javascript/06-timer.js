// const sendNumber = () => {
//   let confirmNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   printBox = document.getElementById("printNumber");

//   //   printBox.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   printBox.style.color = "#" + confirmNumber;
//   printBox.innerText = confirmNumber;
// };

// const timer = () => {
//   let time = 180;
//   setInterval(function () {
//     if (time >= 0) {
//       const min = String(Math.floor(time / 60)).padStart(2, "0");
//       const sec = String(time % 60).padStart(2, "0");

//       timerBox = document.getElementById("printTimer");

//       timerBox.innerText = min + ":" + sec;
//       time = time - 1;
//     }
//   }, 1000);
// };

let isStarted = false;

const sendNumber = () => {
  if (isStarted === false) {
    isStarted = true;
    const printBox = document.getElementById("printNumber");

    let confirmNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    //   printBox.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    printBox.style.color = "#" + confirmNumber;
    printBox.innerText = confirmNumber;

    let time = 5;
    let timer = null; //clearInterval 사용 시 발생할 수 있는 실행 오류 방지를 위해서 null을 먼저 할당한다.
    let timerBox = document.getElementById("printTimer");
    let confirmButton = document.getElementById("confirmButton");

    timer = setInterval(function () {
      console.log("작동중");
      if (time >= 0) {
        const min = String(Math.floor(time / 60)).padStart(2, "0");
        const sec = String(time % 60).padStart(2, "0");

        console.log(min + ":" + sec);
        timerBox.innerText = min + ":" + sec;

        time = time - 1;
      } else {
        confirmButton.disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  }
};
