# cron-editor-ngx

`cron-editor-ngx` is library that helps the user graphically build a CRON expression (quartz format only) in an Angular application.
It is a fork of [cron-editor](https://github.com/claudiuconstantin/cron-editor).

This library uses the Bootstrap 3 CSS classes, but does not include them. You can style the component yourself.

**The purpose of this fork is ability to use `cron-editor` with `ngx-translate`.**

## Demo

A demo of this library can be found [here](https://matvejril.github.io/cron-editor-ngx/).

## Installation

This library is published as a [npm package](https://www.npmjs.com/package/cron-editor-ngx).

```
npm install cron-editor-ngx --save
```

## Usage

#### 1. Import the `CronEditorModule`:

For example, in `AppModule`:

```ts
import {CronEditorModule} from 'cron-editor-ngx';
 
@NgModule({
    imports: [..., CronEditorModule],
    ...
})
export class AppModule {
}
```

#### 2. Initialize translations

For example, in `AppComponent`.

This library has support for two languages out of the box: English & Russian.
Example:

```ts
import {Component} from '@angular/core';
import {CronEditorTranslateService} from 'cron-editor-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(private cronEditorTranslateService: CronEditorTranslateService) {
    cronEditorTranslateService.init({
      existent: [
        {
          lang: 'en', // name of language used in your project
          useExistent: 'en' // code of library language; Possible values: 'en' | 'ru'
        },
        {lang: 'ru', useExistent: 'ru'}
      ]
    });
  }

}
```

You can partially modify existing translations:

```ts
{
  lang: 'en',
  useExistent: 'en',
  patch: {
    TABS: {
      ADVANCED: 'Pro',
      ...
    },
    ...
  }
}
```

You can add your languages:

```ts
cronEditorTranslateService.init({
  existent: [{lang: 'en', useExistent: 'en'}],
  custom: [
    {
      lang: 'es',
      translations: {
        TABS: {
          ADVANCED: 'Avanzado',
          ...
        },
        ...
      }
    }
  ]
});
```

#### 3. Add `extend: true` in `TranslateModule.forRoot()`:

```ts
TranslateModule.forRoot({
  loader: { ... },
  extend: true
})
```

This is necessary in order to extend your translations with the translations of this library.

#### 4. Use component

Template:
```angular2html
<cron-editor
  [(cron)]="cronExpression"
  [disabled]="isCronDisabled"
  [options]="cronOptions"
></cron-editor>
```
Component:
```ts
import {Component} from '@angular/core';
import {CronOptions} from 'cron-editor-ngx';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {
  // Hangfire 1.7+ compatible expression: '3 2 12 1/1 ?'
  // Quartz compatible expression: '4 3 2 12 1/1 ? *'
  public cronExpression = '0 12 1W 1/1 ?';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '10:00:00',
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true
  };
}
```

## Development

#### 1. Install dependencies

```
npm install
```

#### 2. Build the library

```
npm run package
```

#### 3. Run sample application

```
ng serve -o
```

## License
Licensed under the MIT license.
