import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../core/storage.service';

@Component({
  selector: 'ia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public selectedLang: string;
  constructor(public translate: TranslateService, private storageService: StorageService) {
    translate.addLangs(['en', 'ru']);
    const lang = this.storageService.getLang();
    if (!lang) {
      const langs = this.translate.getLangs();
      const browserLang = this.translate.getBrowserLang();
      this.selectedLang = ((langs.indexOf(browserLang)) === -1) ? this.translate.getDefaultLang() : browserLang;
      this.storageService.setLang(this.selectedLang);
    }
    else {
      this.selectedLang = lang;
    }
    this.translate.use(this.selectedLang);
  }
  public changeLang(): void {
    this.storageService.setLang(this.selectedLang);
    this.translate.use(this.selectedLang);
  }

  ngOnInit(): void {
  }
}
