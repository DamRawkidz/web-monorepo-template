import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFeatureoneComponent } from '../presenter/list/list-featureone.component';
import { SearchFeatureoneComponent } from '../presenter/search/search-featureone.component';

@Component({
  selector: 'lib-feature-one-feature',
  standalone: true,
  imports: [
    CommonModule,
    ListFeatureoneComponent,
    SearchFeatureoneComponent
  ],
  templateUrl: './feature-one-feature.component.html',
  styleUrl: './feature-one-feature.component.scss',
})
export class FeatureOneFeatureComponent { }
