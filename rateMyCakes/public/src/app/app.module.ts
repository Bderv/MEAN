import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitCakeComponent } from './submit-cake/submit-cake.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowCakeComponent } from './show-cake/show-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitCakeComponent,
    ReviewsComponent,
    ShowCakeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
