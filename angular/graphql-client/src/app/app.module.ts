import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const config = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientID}',
  redirectUri: window.location.origin + '/login/callback'
}
const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: { oktaAuth }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
