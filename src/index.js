const form = document.querySelector(".add-text");
const addInput = document.querySelector(".add-input");
const todoContainer = document.querySelector(".todos");

// Helper functions
const addTodo = (e) => {
  todoContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <li>
        <input type="checkbox" />
        <p>${e}</p>
        <p>edit</p>
        <p>delete</p>
    </li>
    `
  );
};

// EventListeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTodo(addInput.value);
  console.log(addInput.value);
});
