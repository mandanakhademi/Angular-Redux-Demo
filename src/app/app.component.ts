import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Redux-Demo';
  counter = 0;

  constructor( private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      this.counter = store.counter;
    });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
