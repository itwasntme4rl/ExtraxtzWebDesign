const leadForm = document.querySelector("#leadForm");
const formStatus = document.querySelector("#formStatus");
const pageLoader = document.querySelector("#pageLoader");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    pageLoader?.classList.add("loader-hidden");
    document.body.classList.remove("loading");
  }, 5000);
});

leadForm.addEventListener("submit", () => {
  formStatus.textContent = "Sending your quote request...";
});
