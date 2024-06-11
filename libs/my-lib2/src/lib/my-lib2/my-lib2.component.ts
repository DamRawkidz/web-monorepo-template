import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib2.component.html',
  styleUrl: './my-lib2.component.css',
})
export class MyLib2Component {}
