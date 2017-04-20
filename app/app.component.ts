import {Component, Input} from 'angular2/core';
import {TodoComponent} from './todo.component';
import {ListComponent} from './list.component';
import {Todo} from './todo';



@Component({
    selector: 'my-app',
    directives: [TodoComponent, ListComponent],
    template:`
    <list (selectedTodo)="onSelectedList($event)"></list>
    <hr>
    <todo [currentTodo]="currentTodo"></todo>
    `
})
 
export class AppComponent {
  currentTodo: Todo; 

  onSelectedList(model) {
      this.currentTodo = model;
  }  
} 
