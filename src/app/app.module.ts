import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { FormPMComponent } from './form-pm/form-pm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';     
import { MatStepperModule } from '@angular/material/stepper';
import { FormPpComponent } from './form-pp/form-pp.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { RouterModule, Routes } from '@angular/router';

import { DatePipe } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
const routes: Routes = [
  { path: 'home',component:FormSelectComponent },
  { path: 'pm',component:FormPMComponent },
  { path: 'pp',component:FormPpComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    FormPMComponent,
    NavbarComponent,
    FormPpComponent,
    FormSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     BrowserAnimationsModule,
     MatFormFieldModule,
     MatDatepickerModule,        
    MatNativeDateModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
