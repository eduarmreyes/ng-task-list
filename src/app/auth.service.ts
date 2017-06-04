import { Injectable } from '@angular/core';
import Auth0Lock from "auth0-lock";
import { tokenNotExpired } from "angular2-jwt";

const AUTH0_CLIENT_ID = "zT49zBcucGXomCcQmf-SrSk2FCN5v1pk";
const AUTH0_DOMAIN = "eduarmreyes.auth0.com";

const ID_TOKEN = "ng-task-list-auth-id-token";
const ACCESS_TOKEN = "ng-task-list-auth-access-token";
const PROF_TOKEN = "ng-task-list-auth-profile";

@Injectable()
export class AuthService {
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});

  constructor() {
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem(ACCESS_TOKEN, authResult.accessToken);
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          console.error("Error in lock@authenticated", error);
          return;
        }
        localStorage.setItem(ID_TOKEN, authResult.idToken);
        localStorage.setItem(PROF_TOKEN, JSON.stringify(profile));
      });
    });
  }

  signIn() { this.lock.show(); }

  signOut() { localStorage.removeItem(ID_TOKEN); }

  authenticated() { return tokenNotExpired(ID_TOKEN); }

}
