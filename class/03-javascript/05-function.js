// function sendNumber() {
//   let confirmNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   printBox = document.getElementById("printNumber");

//   printBox.innerText = confirmNumber;
// }

const sendNumber = () => {
  let confirmNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  printBox = document.getElementById("printNumber");

  printBox.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  printBox.innerText = confirmNumber;
};
