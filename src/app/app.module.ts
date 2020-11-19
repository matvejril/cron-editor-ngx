import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CronEditorModule} from 'cron-editor-ngx-translate';

import {AppComponent} from './app.component';
import {LangSwitcherComponent} from './lang-switcher/lang-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    LangSwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TranslateModule.forRoot({extend: true}),
    CronEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
