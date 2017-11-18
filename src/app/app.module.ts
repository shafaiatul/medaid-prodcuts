import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Route
import { RouterModule, Router } from '@angular/router';

// Auth Guard
import { AuthGuard } from './auth.guard';


// Angular Fire 2
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Services
import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';

// Components
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ContainerComponent } from './container/container.component';
import { Routes } from '@angular/router/src/config';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ContainerComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    ItemDetailComponent,
    FilterPipe,
    LoginFormComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'medaid-products'),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
