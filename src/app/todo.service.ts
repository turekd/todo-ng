import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Todo} from './todo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoApiUrl = 'http://localhost:8090/todo';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoApiUrl)
      .pipe(
        catchError(this.handleError<Todo[]>('findAll', []))
      );
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoApiUrl, todo, this.httpOptions)
      .pipe(
        catchError(this.handleError<Todo>('create'))
      );
  }

  update(todo: Todo): Observable<Todo> {
    const url = `${this.todoApiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, this.httpOptions)
      .pipe(
        catchError(this.handleError<Todo>(`update of ${todo}`))
      );
  }

  delete(id: number): Observable<any> {
    const url = `${this.todoApiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Todo>(`delete of ${id}`))
      );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
