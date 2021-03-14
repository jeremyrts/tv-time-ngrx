import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Serie } from '../serie';
import { addSerie, deleteSerie, toggleSeen } from '../series.actions';
import {getRandomArbitrary} from '../../utils' 

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series$: Observable<Serie[]>
  inputTitle: string

  constructor(private store: Store<{ series: Serie[] }>) {
    // store.select(state => state).subscribe(val => console.log(val));
    this.series$ = store.select('series')

  }

  ngOnInit(): void {
    this.setInputTitle("")
  }

  handleChange(title: string): void {
    this.setInputTitle(title)
  }

  handleAdd(title): void {
    let checkedValue = title.trim()
    if(checkedValue && checkedValue !== "") {
      const temp = this.createSerie(checkedValue)
      this.store.dispatch(addSerie({ serie: temp }))
      this.setInputTitle("")
    }
    else {
      this.setInputTitle("")
    }
  }

  handleDelete(id): void {
    if(id) {
      this.store.dispatch(deleteSerie({id: id}))
    }
  }

  handleSeen(id: number): void {
    if(id) {
      this.store.dispatch(toggleSeen({id: id}))
    }
  }

  private createSerie(title: string): Serie {
    return { id: getRandomArbitrary(0, 1000), title: title, seen: false }
  }

  private setInputTitle(title: string): void {
    this.inputTitle = title
  }
}
