import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModuleConfig} from '@ngx-translate/core';


export const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => (
  new TranslateHttpLoader(http, './assets/i18n/', '.json')
);

export class I18n {
  static config: TranslateModuleConfig = {
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    },
    defaultLanguage: 'en'
  };
}
