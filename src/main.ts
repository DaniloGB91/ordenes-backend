import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_M2vrPlITD',
      userPoolClientId: 'dga3ns8ds4n8s85cjn9h28vrq',
      loginWith: {
        oauth: {
          domain: 'us-east-1mznmpbftd.auth.us-east-1.amazoncognito.com', 
          scopes: ['openid', 'email', 'profile', 'Ordenes91-api/pedidos'],
          redirectSignIn: ['https://staging.d1xa67u187dkb7.amplifyapp.com'], 
          redirectSignOut: ['https://staging.d1xa67u187dkb7.amplifyapp.com'], 
          responseType: 'code'
        }
      }
    }
  }
});

bootstrapApplication(App, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));