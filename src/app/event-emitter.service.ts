import {Injectable, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeTodosRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() {
  }

  todoCreated() {
    this.invokeTodosRefresh.emit();
  }

  todoUpdated() {
    this.invokeTodosRefresh.emit();
  }

  todoDeleted() {
    this.invokeTodosRefresh.emit();
  }
}
