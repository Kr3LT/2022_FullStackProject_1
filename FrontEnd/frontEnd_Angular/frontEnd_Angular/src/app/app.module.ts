import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StudentListsComponent } from './students/student-lists/student-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    StudentsComponent,
    StudentListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
