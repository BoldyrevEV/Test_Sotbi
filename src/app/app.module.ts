import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";

import { NgZorro } from "./zorro.component";
import { NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

registerLocaleData(ru);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule.withComponents([NgZorro]),  
    NgZorroAntdModule, 
    BrowserAnimationsModule, 
  ],
  declarations: [AppComponent, NgZorro],
  bootstrap: [AppComponent, NgZorro],
  providers: [ { provide: NZ_I18N, useValue: ru_RU }, { provide: NZ_ICONS, useValue: icons } ]
})

export class AppModule {}