import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { MainComponent } from './home/main/main.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { AboutComponent } from './home/about/about.component';
import { NewsComponent } from './home/news/news.component';
import { ReclamationComponent } from './home/reclamation/reclamation.component';


const routes: Routes = [
  {
    path: "authentication",
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "home",
    children: [
      {
        path: 'main',
        component: MainComponent,
        pathMatch: 'full'
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'news',
        component: NewsComponent,
        pathMatch: 'full'
      },
      {
        path: 'reclamation',
        component: ReclamationComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
