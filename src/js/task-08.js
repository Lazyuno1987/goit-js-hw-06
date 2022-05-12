const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onDataForm);
function onDataForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail === "" || password === "") {
    alert("Plese enter your date");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
