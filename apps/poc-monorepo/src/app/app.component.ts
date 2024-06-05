import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyLibComponent } from '@poc-monorepo/my-lib';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MyLibComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'poc-monorepo';
}
