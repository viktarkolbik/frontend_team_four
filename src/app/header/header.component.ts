import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public selected = 'ru';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');
  }

  ngOnInit(): void {
  }

}
