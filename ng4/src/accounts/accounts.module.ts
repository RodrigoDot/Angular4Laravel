import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppPaginateComponent } from '../app/app-paginate.component';
import { AppHttpService } from '../app/app-http.service';
import { FormsModule } from '@angular/forms'; //para utilizar o bind [()]

import { AccountsComponent } from './accounts.component';
import { AccountsViewComponent } from './accounts-view.component';
import { AccountsEditComponent } from './accounts-edit.component';
import { AccountsAddComponent } from './accounts-add.component';
import { AccountsDeleteComponent } from './accounts-delete.component';

const appRoutes: Routes = [
  {
    path : 'accounts',
    component : AccountsComponent,
  },
  {
    path : 'accounts/add',
    component : AccountsAddComponent,
  },
  {
    path : 'accounts/:id',
    component : AccountsViewComponent,
  },
  {
    path : 'accounts/:id/edit',
    component : AccountsEditComponent,
  },
  {
    path : 'accounts/:id/delete',
    component : AccountsDeleteComponent,
  },
];

@NgModule ({
  imports : [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations : [
    AccountsComponent,
    AccountsViewComponent,
    AccountsAddComponent,
    AccountsEditComponent,
    AccountsDeleteComponent,
    AppPaginateComponent
  ],
  providers: [
    AppHttpService
  ]
})

export class AccountsModule {}
