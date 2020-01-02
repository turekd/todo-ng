import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {EventEmitterService} from '../event-emitter.service';

const SORT_OPTIONS = [
  'date_asc',
  'date_desc',
  'priority_desc',
  'priority_asc'
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  filteredTodos: Todo[];
  todos: Todo[];
  sortOptions = SORT_OPTIONS;
  selectedSortOption: string;
  showSolvedFilter: boolean;

  constructor(
    private todoService: TodoService,
    private eventEmitterService: EventEmitterService
  ) {
  }

  ngOnInit() {
    this.getTodos();
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeTodosRefresh.subscribe((name: string) => {
        this.getTodos();
      });
    }
    this.selectedSortOption = 'priority_desc';
    this.showSolvedFilter = true;
  }

  runFilters() {
    this.doSort();
    this.toggleSolvedFilter();
  }

  private getTodos(): void {
    this.todoService.findAll()
      .subscribe(todos => {
          this.todos = todos;
          this.filteredTodos = todos;
          this.runFilters();
        }
      );
  }

  private doSort() {
    this.filteredTodos = [];
    switch (this.selectedSortOption) {
      case 'date_asc':
        this.sortByDateAsc();
        break;
      case 'date_desc':
        this.sortByDateDesc();
        break;
      case 'priority_desc':
        this.sortByPriorityDesc();
        break;
      case 'priority_asc':
        this.sortByPriorityAsc();
        break;
    }
  }

  private toggleSolvedFilter() {
    this.filteredTodos = [...this.todos];
    this.doSort();
    if (!this.showSolvedFilter) {
      this.filteredTodos = this.filteredTodos
        .filter(todo => !todo.done);
    }
  }

  private sortByDateAsc(): void {
    this.filteredTodos = [...this.todos];
  }

  private sortByDateDesc(): void {
    this.filteredTodos = [...this.todos].reverse();
  }

  private sortByPriorities(priorities: string[]): void {
    const tempTodos = [...this.todos];
    priorities.forEach(priority => {
      tempTodos
        .filter(todo => todo.priority === priority)
        .forEach(todo => this.filteredTodos.push(todo));
    });
  }

  private sortByPriorityDesc(): void {
    this.sortByPriorities(['HIGH', 'NORMAL', 'LOW']);
  }

  private sortByPriorityAsc(): void {
    this.sortByPriorities(['LOW', 'NORMAL', 'HIGH']);
  }

}
