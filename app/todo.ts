export class Todo {

  newTodo: string;
  todos: any;
  todoObj: any;
  count: number;
  incomplete: number;

  constructor() {
    this.newTodo = '';
    this.todos = [];
    this.count = 0;
    this.incomplete = 0;
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.count++;
    this.incomplete++;
    this.newTodo = '';
    event.preventDefault();
  }

  selectedTodo(index) {
    if (this.todos[index].completed) {
      this.incomplete++;
    } else {
      this.incomplete--;      
    }
  }  

  deleteTodo(index) {
    if (!this.todos[index].completed) {
      this.incomplete--;
    }
    this.todos.splice(index, 1);
    this.count--;
  }  

}
