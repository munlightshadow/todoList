import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';


@Component({
    styles:[`
      .delete-list {
        border: solid 1px black;
        cursor: pointer;
      }    
      .list {
        border: solid 1px black;
        cursor: pointer;      
      }
    `],
    selector: 'list',
	  template:`
      <div>
        <form name="addlist" (submit)="addList($event)">
          <input [(ngModel)]="newList" (keyup.enter)="newList=''" name="newList" />
          <button  type="submit" [disabled]="newList===''">Add List</button>
        </form>     
      </div>
      <table>
        <tr *ngFor="#list of lists; #i=index">
          <td><span class="list" (click)="selectedList(i)">{{ list.newList }}</span></td>
          <td><span class="delete-list" (click)="deleteList(i)">X</span></td>
        </tr>
      </table>     
	  `
})

export class ListComponent {

  newList: string;
  lists: any;
  listObj: any;

  @Output() selectedTodo: EventEmitter<Todo>;
  
  constructor() {
    this.newList = '';
    this.lists = [];
    this.selectedTodo = new EventEmitter<string>();
  }

  addList(event) {
    this.listObj = {
      newList: this.newList, 
      todo: new Todo()
    }
    this.lists.push(this.listObj);
    this.newList = '';    
    this.listObj = '';
    event.preventDefault(); 
  }

  selectedList(index) {
    this.selectedTodo.emit(this.lists[index].todo);
  }  

  deleteList(index) {
    this.lists.splice(index, 1);
  }  
}