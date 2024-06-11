import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyLibComponent } from '@poc-monorepo/my-lib';
import { MyLib2Component } from '@poc-monorepo/my-lib2';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MyLibComponent,
    MyLib2Component
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'poc-monorepo';
}
