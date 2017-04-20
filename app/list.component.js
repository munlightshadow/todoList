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
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.newList = '';
                    this.lists = [];
                    this.selectedTodo = new core_1.EventEmitter();
                }
                ListComponent.prototype.addList = function (event) {
                    this.listObj = {
                        newList: this.newList,
                        todo: new todo_1.Todo()
                    };
                    this.lists.push(this.listObj);
                    this.newList = '';
                    this.listObj = '';
                    event.preventDefault();
                };
                ListComponent.prototype.selectedList = function (index) {
                    this.selectedTodo.emit(this.lists[index].todo);
                };
                ListComponent.prototype.deleteList = function (index) {
                    this.lists.splice(index, 1);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ListComponent.prototype, "selectedTodo", void 0);
                ListComponent = __decorate([
                    core_1.Component({
                        styles: ["\n      .delete-list {\n        border: solid 1px black;\n        cursor: pointer;\n      }    \n      .list {\n        border: solid 1px black;\n        cursor: pointer;      \n      }\n    "],
                        selector: 'list',
                        template: "\n      <div>\n        <form name=\"addlist\" (submit)=\"addList($event)\">\n          <input [(ngModel)]=\"newList\" (keyup.enter)=\"newList=''\" name=\"newList\" />\n          <button  type=\"submit\" [disabled]=\"newList===''\">Add List</button>\n        </form>     \n      </div>\n      <table>\n        <tr *ngFor=\"#list of lists; #i=index\">\n          <td><span class=\"list\" (click)=\"selectedList(i)\">{{ list.newList }}</span></td>\n          <td><span class=\"delete-list\" (click)=\"deleteList(i)\">X</span></td>\n        </tr>\n      </table>     \n\t  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map