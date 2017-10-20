import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AccountsModule } from '../accounts/accounts.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    BrowserModule,
    AccountsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
