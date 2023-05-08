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
              ? '<input type="checkbox" />'
              : '<input checked type="checkbox" />'
          }
          <p>${todo.title}</p>
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

  if (e.target.classList.contains("delete-btn")) {
    deleteTodo(e.target.parentNode.id);

    renderTodo();
  }
});

window.addEventListener("load", function () {
  renderTodo(todos);
});
