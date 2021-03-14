import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { SeriesComponent } from './series/series.component';
import { seriesReducer } from './series.reducers';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ series: seriesReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
