System.register(['angular2/core', './todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', todo_1.Todo)
                ], TodoComponent.prototype, "currentTodo", void 0);
                TodoComponent = __decorate([
                    core_1.Component({
                        styles: ["\n      .delete {\n        border: solid 1px black;\n        cursor: pointer;\n      }\n    "],
                        selector: 'todo',
                        template: "\n      <div *ngIf=\"currentTodo\">\n        <div>\n          <form name=\"addTodo\" (submit)=\"currentTodo.addTodo($event)\">\n            <input [(ngModel)]=\"currentTodo.newTodo\" (keyup.enter)=\"currentTodo.newTodo=''\" name=\"newTodo\">\n            <button  type=\"submit\" [disabled]=\"currentTodo.newTodo===''\">Add Todo</button>\n          </form>     \n        </div>\n        <div>\n        In list {{currentTodo.count}} items. Incomplete {{currentTodo.incomplete}}\n        <div>\n        <table> \n          <tr *ngFor=\"#todo of currentTodo.todos; #i=index\">\n            <td><input type=\"checkbox\" [(ngModel)]=\"todo.completed\" (click)=\"currentTodo.selectedTodo(i)\" /></td>\n            <td><span>{{todo.newTodo}}</span></td>\n            <td><span class=\"delete\" (click)=\"currentTodo.deleteTodo(i)\">X</span></td>\n          </tr>\n        </table>      \n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map