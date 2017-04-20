System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo() {
                    this.newTodo = '';
                    this.todos = [];
                    this.count = 0;
                    this.incomplete = 0;
                }
                Todo.prototype.addTodo = function (event) {
                    this.todoObj = {
                        newTodo: this.newTodo,
                        completed: false
                    };
                    this.todos.push(this.todoObj);
                    this.count++;
                    this.incomplete++;
                    this.newTodo = '';
                    event.preventDefault();
                };
                Todo.prototype.selectedTodo = function (index) {
                    if (this.todos[index].completed) {
                        this.incomplete++;
                    }
                    else {
                        this.incomplete--;
                    }
                };
                Todo.prototype.deleteTodo = function (index) {
                    if (!this.todos[index].completed) {
                        this.incomplete--;
                    }
                    this.todos.splice(index, 1);
                    this.count--;
                };
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map