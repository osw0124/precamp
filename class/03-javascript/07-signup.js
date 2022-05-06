const checkValidation = () => {
  const submit = document.getElementById("submit");
  const email = document.getElementById("email").value;
  const pw = document.getElementsByName("password").value;
  const confrimPw = document.getElementById("confirmPassword").value;

  if (email !== "" && pw !== "" && confrimPw !== "") {
    submit.disabled = false;
    //setAttribute(변경해줄 속성, 속성 값)
    submit.setAttribute("style", "background-color: yellow");
  } else {
    submit.disabled = true;
    submit.setAttribute("style", "background-color: none");
  }
};
