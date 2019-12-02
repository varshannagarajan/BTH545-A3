import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RemoveNumwordsComponent } from './remove-numwords/remove-numwords.component';
import { RemoveBeginendComponent } from './remove-beginend/remove-beginend.component';
import { RemovePositionComponent } from './remove-position/remove-position.component';
import { RegexComponent } from './regex/regex.component';
import { ModifyFindreplaceComponent } from './modify-findreplace/modify-findreplace.component';
import { ModifyReplacenumComponent } from './modify-replacenum/modify-replacenum.component';
import { ModifySplitmoveComponent } from './modify-splitmove/modify-splitmove.component';
import { ModifySelectmoveComponent } from './modify-selectmove/modify-selectmove.component';
import { ModifySwapComponent } from './modify-swap/modify-swap.component';
import { AddBeginendComponent } from './add-beginend/add-beginend.component';
import { AddPositionComponent } from './add-position/add-position.component';
import { AddBeforeafterComponent } from './add-beforeafter/add-beforeafter.component';
import { AddCounterComponent } from './add-counter/add-counter.component';
import { MetaLocationComponent } from './meta-location/meta-location.component';
import { MetaTimeComponent } from './meta-time/meta-time.component';
import { MetaDateComponent } from './meta-date/meta-date.component';
import { MetaResolutionComponent } from './meta-resolution/meta-resolution.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule
} from '@angular/material';
import { DisplayOriginalComponent } from './display-original/display-original.component';
import { DisplayModifiedComponent } from './display-modified/display-modified.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoveNumwordsComponent,
    RemoveBeginendComponent,
    RemovePositionComponent,
    RegexComponent,
    ModifyFindreplaceComponent,
    ModifyReplacenumComponent,
    ModifySplitmoveComponent,
    ModifySelectmoveComponent,
    ModifySwapComponent,
    AddBeginendComponent,
    AddPositionComponent,
    AddBeforeafterComponent,
    AddCounterComponent,
    MetaLocationComponent,
    MetaTimeComponent,
    MetaDateComponent,
    MetaResolutionComponent,
    DisplayOriginalComponent,
    DisplayModifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
