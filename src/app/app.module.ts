import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './home/components/project-detail/project-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '*',  redirectTo: '/inicio' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
