const input = document.querySelector(".form");

input.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  if (e.target.value !== "") {
    e.target.nextElementSibling.classList.add("remain");
  } else if (e.target.value === "") {
    e.target.nextElementSibling.classList.remove("remain");
  }
});
