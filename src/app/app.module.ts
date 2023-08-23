import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { FormPMComponent } from './form-pm/form-pm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';        
import { NativeDateModule} from '@angular/material/core';        
  
import {
  MatFormFieldModule,
  } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    FormPMComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule,MatFormFieldModule,MatDatepickerModule,        
    NativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
