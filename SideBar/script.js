const openbar = document.querySelector(".showbar1");
const closebar = document.querySelector(".hidebar1");
const sidebar = document.querySelector(".sidebar1");

openbar.addEventListener("click", showsbar);
closebar.addEventListener("click", closesbar);

function showsbar() {
  openbar.classList.add("hidden");
  closebar.classList.remove("hidden");
  sidebar.classList.remove("hide");
}

function closesbar() {
  openbar.classList.remove("hidden");
  closebar.classList.add("hidden");
  sidebar.classList.add("hide");
}