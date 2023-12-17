const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const elems = e.target.elements;
  if (elems.email.value === "" || elems.password.value === "") {
    return alert("All form fields must be filled in");
  } else {
    const data = {
      email: elems.email.value.trim(),
      password: elems.password.value.trim(),
    };

    formLogin.reset();
    console.log(data);
  }
});
