const form = document.querySelector(".add-text");
const addInput = document.querySelector(".add-input");
const todoContainer = document.querySelector(".todos");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Global variables
// const obj = [
//   {
//     title: "yes sir",
//     id: 1,
//     checked: true,
//   },
//   {
//     title: "Good day to you",
//     id: 2,
//     checked: true,
//   },
//   {
//     title: "NOOOOOOOOOOO",
//     id: 3,
//     checked: false,
//   },
// ];

// Helper functions
const renderTodo = () => {
  todos.forEach((todo) => addTodo(todo));
};

const addTodo = (todo) => {
  todoContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <li id="${todo.id}">
          ${
            !todo.checked
              ? '<input type="checkbox" />'
              : '<input checked type="checkbox" />'
          }
          <p>${todo.title}</p>
          <button class="edit-button">edit</button>
          <button>delete</button>
      </li>
    `
  );
};

const editTodo = (id, p) => {
  const el = document.getElementById(id);
  console.log(el);

  console.log(id);
};

// EventListeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // creating newTodo
  const newTodo = {
    id: Math.random(),
    title: addInput.value,
    checked: false,
  };

  addTodo(newTodo);

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
});

todoContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-button")) {
    editTodo(e.target.parentNode.id);

    console.log("edit");
  }
});

window.addEventListener("load", function () {
  renderTodo(todos);
});
