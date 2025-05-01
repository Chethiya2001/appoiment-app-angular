import { Component } from '@angular/core';
import { AppoimentListComponent } from './appoiment-list/appoiment-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppoimentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appoiment-app';

}
