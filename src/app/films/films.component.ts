import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Film } from '../film';
import { addFilm, deleteFilm, toggleSeen } from '../films.actions';
import { getRandomArbitrary } from '../../utils'
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films$: Observable<Film[]>;
  inputTitle: string;

  constructor(private store: Store<{ films: Film[] }>) {
    this.films$ = store.select('films').pipe(map(result => {
      return this.sort(result);
    }))
  }

  ngOnInit(): void {
    this.setInputTitle("")
  }

  handleChange(title: string): void {
    this.setInputTitle(title)
  }

  handleAdd(title): void {
    let checkedValue = title.trim()
    if (checkedValue && checkedValue !== "") {
      const newFilm = this.createFilm(checkedValue)
      this.store.dispatch(addFilm({ film: newFilm }))
      this.setInputTitle("")
      this.dynamicSorting()
    }
    else {
      this.setInputTitle("")
    }
  }

  handleDelete(id): void {
    this.store.dispatch(deleteFilm({ id: id }))
    this.dynamicSorting()
  }

  handleSeen(id: number): void {
    this.store.dispatch(toggleSeen({ id: id }))
    this.dynamicSorting()
  }

  private dynamicSorting(): void {
    this.films$ = this.films$.pipe(map(result => {
      return this.sort(result)
    }))
  }
 
  private sort(array: Film[]): Film[] {
    return array.slice().sort((a, b) => (a.seen === b.seen) ? 0 : a.seen ? 1 : -1)
  }

  private createFilm(title: string): Film {
    return { id: getRandomArbitrary(0, 1000), title: title, seen: false }
  }

  private setInputTitle(title: string): void {
    this.inputTitle = title
  }
}
