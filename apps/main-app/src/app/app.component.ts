import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyLibComponent } from '@poc-monorepo/my-lib';
import { MyLib2Component } from '@poc-monorepo/my-lib2';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [
    // NxWelcomeComponent,
    RouterModule,
    MyLibComponent,
    MyLib2Component
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'main-app';
  sv = inject(HttpClient)
  constructor() {
    this.sv.get(environment.baseapi).subscribe()
  }

}
