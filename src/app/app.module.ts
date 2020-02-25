import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChosenColorSummaryComponent } from './chosen-color-summary/chosen-color-summary.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorPreviewComponent } from './color-preview/color-preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChosenColorSummaryComponent,
    ColorListComponent,
    ColorPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
