// document.querySelector()
// document.getElementById()

// function change() {
//   // input 태그에 담기 값을 가져와서 변수에 할당
//   // 변수에 담긴 내용을 greeting에 재할당
//   let text = document.getElementById("text").value;
//   console.log(text);
//   document.getElementById("greeting").innerText = text;
//   document.getElementById("text").value = "";
// }

function change() {
  let text = document.getElementById("greeting").innerText;
  console.log(text);
  if (text === "Hello") {
    document.getElementById("greeting").innerText = "World";
  } else {
    document.getElementById("greeting").innerText = "Hello";
  }
}
