import {Component} from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title: string = 'fake store';

  constructor(/*public auth: AuthService*/) {
  }
}



