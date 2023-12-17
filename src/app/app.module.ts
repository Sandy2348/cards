import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';

import { RouterModule, Routes } from '@angular/router';
import { ServicesService } from './services.service';
import {HttpClientModule} from '@angular/common/http';
import { CustomDirective } from './custom.directive';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    CustomDirective,
    CardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
