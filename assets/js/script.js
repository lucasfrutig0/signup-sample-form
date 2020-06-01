document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.querySelector("form");
  const inputFirstNameEl = document.querySelector('input[name="first-name"]');
  const inputLastNameEl = document.querySelector('input[name="last-name"]');
  const inputEmailNameEl = document.querySelector('input[name="email"]');
  const inputPassNameEl = document.querySelector('input[name="password"]');

  const smallFirstEl = document.querySelector(".first-warning");
  const smallLastEl = document.querySelector(".last-warning");
  const smallEmailEl = document.querySelector(".email-warning");
  const smallPassEl = document.querySelector(".password-warning");

  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = inputFirstNameEl.value;
    let lastName = inputLastNameEl.value;
    let email = inputEmailNameEl.value;
    let password = inputPassNameEl.value;

    !firstName
      ? ((smallFirstEl.textContent = `First Name cannot be empty`),
        inputFirstNameEl.classList.add("warning"))
      : ((smallFirstEl.textContent = ``),
        inputFirstNameEl.classList.remove("warning"));
    !lastName
      ? ((smallLastEl.textContent = `Last Name cannot be empty`),
        inputLastNameEl.classList.add("warning"))
      : ((smallLastEl.textContent = ``),
        inputLastNameEl.classList.remove("warning"));
    !email || !email.match(pattern)
      ? ((smallEmailEl.textContent = `Looks like it is not an email address`),
        inputEmailNameEl.classList.add("warning"))
      : ((smallLastEl.textContent = ``),
        inputLastNameEl.classList.remove("warning"));
    !password
      ? ((smallPassEl.textContent = `Password cannot be empty`),
        inputPassNameEl.classList.add("warning"))
      : ((smallLastEl.textContent = ``),
        inputLastNameEl.classList.remove("warning"));
  });
});
