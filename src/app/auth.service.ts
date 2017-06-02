import { Injectable } from '@angular/core';
import Auth0Lock from "auth0-lock";
import { tokenNotExpired } from "angular2-jwt";

const AUTH0_CLIENT_ID = "zT49zBcucGXomCcQmf-SrSk2FCN5v1pk";
const AUTH0_DOMAIN = "eduarmreyes.auth0.com";

const ID_TOKEN = "ng-task-list-auth-id-token";

@Injectable()
export class AuthService {
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});

  constructor() {
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem(ID_TOKEN, authResult.idToken);
    });
  }

  signIn() { this.lock.show(); }

  signOut() { localStorage.removeItem(ID_TOKEN); }

  authenticated() { return tokenNotExpired(); }

}
