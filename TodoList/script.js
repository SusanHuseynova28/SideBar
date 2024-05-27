const Input = document.querySelector("#sss1");
const btn = document.querySelector("#btn1");
const List = document.querySelector("#sss2");

btn.addEventListener("click", append);

function append(e) {
  e.preventDefault();
  const inputValue = Input.value.trim();

  if (inputValue) {
    List.innerHTML += `<li class="list-item1 mt-2 flex justify-between items-center">
            <span>${inputValue}</span>
            <div>
              <button class="edit btn mx-1">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="delete btn mx-1">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </li>`;
    Input.value = "";
    alert("enter e word");
  } 
}

List.addEventListener("click", handleList);

function handleList(e) {
  if (e.target.closest(".delete")) {
    handleDelete(e);
  }
}

function handleDelete(e) {
  let listItem = e.target.closest(".list-item1");
  listItem.remove();
  alert("Deleted?");
}
