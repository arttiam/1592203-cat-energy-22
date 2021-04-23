const btnSubmit = document.querySelector(".form__button");
const inputTexts = document.querySelectorAll(".form__input");
let iconEmail = document.querySelector(".form__icon-email");
let iconPhone = document.querySelector(".form__icon-phone");


btnSubmit.addEventListener("click", function(evt) {

  inputTexts.forEach(function(inputText, i, inputTexts) {

    if (inputText.value === "") {
      evt.preventDefault();
      inputText.classList.add("form__input--error");
      if (inputText.classList.contains("form__input--email")) {
        iconEmail.classList.add("form__icon--error");
      }
      if (inputText.classList.contains("form__input--tel")) {
        iconPhone.classList.add("form__icon--error");
      }
    };

  });
});

inputTexts.forEach(function(inputText, i, inputTexts) {
  inputText.addEventListener("focus", function() {
    inputText.classList.remove("form__input--error");
    if (inputText.classList.contains("form__input--email")) {
      iconEmail.classList.remove("form__icon--error");
    }
    if (inputText.classList.contains("form__input--tel")) {
      iconPhone.classList.remove("form__icon--error");
    }
  })
});
