import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './feature/user/user.component';
import { HomeComponent } from './feature/home/home.component';
import { AdminComponent } from './feature/admin/admin.component';
import { NotFoundComponentComponent } from './feature/not-found-component/not-found-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material 
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AdminComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    {provide: LocationStrategy, useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
