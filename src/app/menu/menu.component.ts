import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TodoCreateComponent} from '../todo-create/todo-create.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openCreateDialog(): void {
    this.dialog.open(TodoCreateComponent, {
      width: '500px'
    });
  }

}
