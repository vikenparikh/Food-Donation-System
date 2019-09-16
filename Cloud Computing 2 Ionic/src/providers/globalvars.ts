import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalVars{
	HAS_LOGGED_IN : any;
	USER_NAME : any;
	DEVICE_ID : any; 
	SESSION_KEY: any;
	USER_TYPE : any;
  constructor(public storage: Storage) {
	  this.HAS_LOGGED_IN="0";
	  this.DEVICE_ID = ""; 
	  this.USER_NAME="";
	  this.SESSION_KEY = "";
	  this.USER_TYPE = "";
  }
  
  set_session(Username,sessionkey,usertype){
	  this.HAS_LOGGED_IN="1";
	  var obj = {"USER_NAME" : Username, "SESSION_KEY" : sessionkey,"USER_TYPE" : usertype};
	  this.storage.set("USER_SESSION",obj);
	  this.USER_NAME=Username;
	  this.SESSION_KEY = sessionkey;
	  this.USER_TYPE=usertype;
  }
  
  get_usersession(){
	   return this.storage.get("USER_SESSION").then((value) => {
       return value;
    });
	}
	
  clear_session()
	{
	  this.storage.clear();
	  this.HAS_LOGGED_IN="0";
	  this.USER_NAME="";
	  this.SESSION_KEY = "";
	  this.USER_TYPE="";
	}
}