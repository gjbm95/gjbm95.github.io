import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './home/components/project-detail/project-detail.component';
import { MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

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
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    {
      provide: MAT_DIALOG_SCROLL_STRATEGY,
        useFactory: (scrollStrategyOptions: ScrollStrategyOptions) => scrollStrategyOptions.noop,
        deps: [ScrollStrategyOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
