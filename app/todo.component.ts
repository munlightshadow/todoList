import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
    styles:[`
      .delete {
        border: solid 1px black;
        cursor: pointer;
      }
    `],
    selector: 'todo',
    template:`
      <div *ngIf="currentTodo">
        <div>
          <form name="addTodo" (submit)="currentTodo.addTodo($event)">
            <input [(ngModel)]="currentTodo.newTodo" (keyup.enter)="currentTodo.newTodo=''" name="newTodo">
            <button  type="submit" [disabled]="currentTodo.newTodo===''">Add Todo</button>
          </form>     
        </div>
        <div>
        In list {{currentTodo.count}} items. Incomplete {{currentTodo.incomplete}}
        <div>
        <table> 
          <tr *ngFor="#todo of currentTodo.todos; #i=index">
            <td><input type="checkbox" [(ngModel)]="todo.completed" (click)="currentTodo.selectedTodo(i)" /></td>
            <td><span>{{todo.newTodo}}</span></td>
            <td><span class="delete" (click)="currentTodo.deleteTodo(i)">X</span></td>
          </tr>
        </table>      
      </div>
    `
})

export class TodoComponent {
  @Input()
  currentTodo: Todo;
}
 