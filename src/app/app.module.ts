import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { HomeComponent } from './home/home.component';
import { ConsumerService } from './consumer-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponentComponent,
    NotFoundComponentComponent,
    MenuComponentComponent,
    MenuDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ConsumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// OZEIHAOIZEAH
