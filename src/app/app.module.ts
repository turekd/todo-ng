import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatCardModule, MatDividerModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuComponent} from './menu/menu.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoListComponent} from './todo-list/todo-list.component';
import {MatDialogModule} from '@angular/material';
import {EventEmitterService} from './event-emitter.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule,
    MatDividerModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TodoCreateComponent,
    TodoEditComponent
  ]
})
export class AppModule {
}
