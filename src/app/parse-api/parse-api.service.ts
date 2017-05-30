import { Injectable } from '@angular/core';
import { DomInjectableService } from '../dom-injectables.service';
import * as ParseConfig from '../../../server/routes/parse/parse.config.js';

// Global Constants
var Parse: any = require('parse');

// Initialize Parse
Parse.initialize('wyf-app', 'key');
Parse.serverURL = ParseConfig.serverURL;


@Injectable()
export class ParseApiService {
  Api: any = Parse;

  constructor(dom: DomInjectableService) {
    // Respond to live query socket events
    Parse.LiveQuery.on('open', ()=>{
      let loggedIn = Parse.User.current() ? true : false;
      console.log("Opened Socket - Logged in: " + loggedIn);
    });

    Parse.LiveQuery.on('close', ()=>{
      let loggedIn = Parse.User.current() ? true : false;
      console.log("Opened Socket - Logged in: " + loggedIn);
    });

    Parse.LiveQuery.on('error', (error)=>{
      console.warn("Socket Experienced an Error", error);
    });

    // dom.window.link('ParseApiService', this);
  }

  logIn(username: String, password: String, success: (res) => void, error: (err) => void) {
    Parse.User.logIn(username, password).then((res)=> {
      success(res);
    }, (e)=> {
      error(e);

    });
  }

  logInFacebook(success: (user: Parse.User) => void, error: (user: Parse.User, error: any) => void) {

    Parse.FacebookUtils.logIn(null, {
      success: (user: Parse.User) => {
        // Call success funciton
        success(user);
      },
      error: (user: Parse.User, error: any) => {
        error(user, error);
      }
    });
  }

  signup(username: String, password: String, success: () => void) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    user.signUp().then(()=> {
      // Call success function
      success();
    }, function(e) {
      console.log("Signin failed through email");
    });
  }

  
  // Get all posts from the API
  test(success:(obj)=>string) {
    var Test = this.Api.Object.extend("Test");
    var query = new this.Api.Query(Test);
    query.find({
      success: function(obj) {
          success(obj);
      }
    });

    return "Parse Save Succeeded!";
  }
}
