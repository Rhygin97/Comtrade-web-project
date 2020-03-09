import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { MainComponent } from './home/main/main.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './home/about/about.component';
import { NewsComponent } from './home/news/news.component';
import { ReclamationComponent } from './home/reclamation/reclamation.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProfileComponent } from './home/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutComponent,
    NewsComponent,
    ReclamationComponent,
    FooterComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
