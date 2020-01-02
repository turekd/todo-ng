import {Component, Inject, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TodoService} from '../todo.service';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(
    private todoService: TodoService,
    private dialogRef: MatDialogRef<TodoEditComponent>,
    private eventEmitterService: EventEmitterService,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {
  }

  ngOnInit() {
  }

  update() {
    this.todoService.update(this.todo).subscribe(() => {
      this.eventEmitterService.todoUpdated();
      this.dialogRef.close();
    });
  }

  validate() {
    return this.todo.text.length === 0;
  }
}
