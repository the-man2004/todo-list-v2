const form = document.querySelector(".add-text");
const addInput = document.querySelector(".add-input");
const todoContainer = document.querySelector(".todos");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Helper functions
const renderTodo = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => addTodo(todo));
};

const addTodo = (todo) => {
  todoContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <li id="${todo.id}">
          ${
            !todo.checked
              ? '<input class="checked" type="checkbox" />'
              : '<input class="checked" checked type="checkbox" />'
          }
          <p style="${todo.checked ? "text-decoration: line-through" : ""}" >${
      todo.title
    }</p>
          <button class="edit-button">edit</button>
          <button class="delete-btn" >delete</button>
      </li>
    `
  );
};

const editTodo = (id, p) => {
  const el = document.getElementById(id);
  console.log(el);

  console.log(id);
};

const deleteTodo = (id) => {
  const newTodos = todos.splice(id, 1);

  todos = newTodos;

  localStorage.setItem("todos", JSON.stringify(newTodos));
};

const toggleTodo = (id) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].checked = !todos[i].checked;

      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodo();
    }
  }
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
  const target = e.target.classList;
  const parent = e.target.parentNode.id;

  if (target.contains("edit-button")) {
    editTodo(parent);

    console.log("edit");
  }

  if (target.contains("delete-btn")) {
    deleteTodo(parent);

    renderTodo();
  }

  if (target.contains("checked")) {
    toggleTodo(Number(parent));
  }
});

window.addEventListener("load", function () {
  renderTodo(todos);
});
