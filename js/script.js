const inputValue = document.querySelector(".input__box");
const addBtn = document.querySelector(".btn__add");
const todoList = document.querySelector(".todo__list");

// input value target and addBtn length show | hide
inputValue.addEventListener("input", (e) => {
  let value = inputValue.value.trim();
  if (value.length !== 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// todoList adding input value
function addValue(text) {
  let newLiTag = "";
  newLiTag += `<li>${text}<span class="remove" onclick="removeList(this)">delete</span></li>`;
  todoList.innerHTML += newLiTag;
}

// remove li tag item
function removeList(index) {
  index.parentElement.remove();
}

// document key click Enter adding value
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let value = inputValue.value;
    if (value.trim().length !== 0) {
      addItems();
    }
  }
});

// list add function
function addItems() {
  let value = inputValue.value;
  addValue(value);
  inputValue.value = "";
  addBtn.classList.remove("active");
  inputValue.focus();
}

// adding input value List
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addItems();
});
