import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommitMasterComponent } from './commit-master/commit-master.component';
import { CommitDetailComponent } from './commit-detail/commit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommitMasterComponent,
    CommitDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
