import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-list-featureone',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './list-featureone.component.html',
  styleUrl: './list-featureone.component.scss',
})
export class ListFeatureoneComponent { }
