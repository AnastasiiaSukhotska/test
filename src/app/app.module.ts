import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
