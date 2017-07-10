import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 

  // [] means property binding - C to D
  // () means event binding - D to C

  title = "Welcome to Dean's World of Angular..."; 
  heading = 'Enjoy your stay!'
  deansColor = 'red';
  
  changeHeadingColor() {
    this.deansColor = this.deansColor === 'blue' ? 'red' : 'blue';
  }
}
