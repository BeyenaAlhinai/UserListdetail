import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MegaMenuModule } from 'primeng/megamenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    PanelMenuModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
