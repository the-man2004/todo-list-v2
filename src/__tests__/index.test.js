import {
    addTodo,
    editTodo,
    clearAllCompleted,
    deleteTodo,
    toggleTodo,
    todos
} from '../index.js';

describe("Todo manipulation", () => {
    beforeEach(() => {
        // This will be the innerHTML that gets rendered dynamically before each test gets run
        document.body.innerHTML = 
        `
        <form class="add-text">
        <input placeholder="Add item" class="add-input" type="text" />
        <button>Enter</button>
      </form>
      <div class="item-list">
        <ul class="todos"></ul>
      </div>
      <button class="clear-button">Clear completed</button>
    </div>
    `
    });

    it('Updates the text box', () => {
        // Edit function
    });
    
    it('Adds the html dynamically', () => {
        // Add function
        addTodo({
                id: 1,
                title: 'Message',
                checked: false
           });

           expect(todos).toHaveLength(1);
    });

    it('Updates the text box', () => {
        // Remove function
    });

    it('Updates the text box', () => {
        
    });

})