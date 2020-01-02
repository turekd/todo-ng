import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {MatDialog} from '@angular/material';
import {TodoEditComponent} from '../todo-edit/todo-edit.component';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private eventEmitterService: EventEmitterService
  ) {
  }

  ngOnInit() {
  }

  setDone(flag: boolean) {
    this.todo.done = flag;
    this.todoService.update(this.todo);
  }

  edit(): void {
    this.dialog.open(TodoEditComponent, {
      width: '500px',
      data: {...this.todo}
    });
  }

  isEditDisabled(): boolean {
    return this.todo.done;
  }

  getPriorityLabel() {
    return this.todo.priority.charAt(0);
  }

  delete() {
    this.todoService.delete(this.todo.id)
      .subscribe(() => this.eventEmitterService.todoDeleted());
  }
}
