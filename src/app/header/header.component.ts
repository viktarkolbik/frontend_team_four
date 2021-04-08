import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalstorageService} from '../core/localstorage.service';

@Component({
  selector: 'ia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
  }
  public selectedLang: any;
  public changeLang(): void {
    LocalstorageService.setLang(this.selectedLang);
    this.translate.use(this.selectedLang);
}

  ngOnInit(): void {
    if (!LocalstorageService.getLang()) {
      const langs = this.translate.getLangs();
      const browserLang = this.translate.getBrowserLang();
      this.selectedLang = ((langs.indexOf(browserLang)) === -1) ? this.translate.getDefaultLang() : browserLang;
      LocalstorageService.setLang(this.selectedLang);
      this.translate.use(this.selectedLang);
    }
    else {
      this.selectedLang = LocalstorageService.getLang();
      this.translate.use(this.selectedLang);
    }
  }
}
