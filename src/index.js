const form = document.querySelector(".add-text");
const addInput = document.querySelector(".add-input");
const todoContainer = document.querySelector(".todos");
const clearButton = document.querySelector(".clear-button");

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

const editTodo = (id) => {
  const parent = document.getElementById(id);
  const title = parent.querySelector("p").textContent;

  addInput.value = title;

  console.log(title);

  deleteTodo(id);

  parent.remove();
};

const clearAllCompleted = () => {
  const filtered = todos.filter((item) => {
    return !item.checked === true;
  });
  localStorage.setItem('todos', JSON.stringify(filtered));
  todos = filtered;
  renderTodo();
}

const deleteTodo = (id) => {
  //   const newTodos = todos.splice(id, 1);
  const newTodos = todos.filter((todo) => todo.id !== +id);
  console.log(newTodos);

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
  addInput.value = "";

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
});

todoContainer.addEventListener("click", function (e) {
  const target = e.target.classList;
  const parent = e.target.parentNode.id;

  if (target.contains("edit-button")) {
    editTodo(parent);
  }

  if (target.contains("delete-btn")) {
    deleteTodo(parent);

    renderTodo();
  }

  if (target.contains("checked")) {
    toggleTodo(Number(parent));
  }
});

clearButton.addEventListener('click', clearAllCompleted);

window.addEventListener("load", function() {
  renderTodo(todos);
});
