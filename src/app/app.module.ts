import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'persons',
    component: PersonComponent,
    data: { title: 'Person List' }
  },
  {
    path: 'person-details/:id',
    component: PersonDetailComponent,
    data: { title: 'Person Details' }
  },
  {
    path: 'person-create',
    component: PersonCreateComponent,
    data: { title: 'Create Person' }
  },
  {
    path: 'person-edit/:id',
    component: PersonEditComponent,
    data: { title: 'Edit Person' }
  },
  { path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonCreateComponent,
    PersonEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }