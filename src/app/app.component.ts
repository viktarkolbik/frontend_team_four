import { Component } from '@angular/core';
import {LoadingService} from './core/services/loading.service';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InternApp';
  constructor(public loadingService: LoadingService) {
  }
}
