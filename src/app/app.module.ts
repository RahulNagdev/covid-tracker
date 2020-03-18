import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NglModule } from 'ng-lightning';
import { DemoPicklistBasic } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NglModule ],
  declarations: [ DemoPicklistBasic, TrackerComponent ],
  bootstrap:    [ DemoPicklistBasic ],
  providers   : [ ]
})
export class AppModule { }
