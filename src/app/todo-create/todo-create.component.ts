import {Component, Inject, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {MatDialogRef} from '@angular/material/dialog';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todo: Todo;

  constructor(
    private dialogRef: MatDialogRef<TodoCreateComponent>,
    private todoService: TodoService,
    private eventEmitterService: EventEmitterService
  ) {
  }

  ngOnInit() {
    this.todo = new Todo();
    this.todo.priority = 'NORMAL';
  }

  create() {
    this.todoService.create(this.todo)
      .subscribe(() => {
        this.eventEmitterService.todoCreated();
        this.dialogRef.close();
      });
  }

  validate() {
    const text = this.todo.text;
    return text === undefined || text.length === 0;
  }
}
