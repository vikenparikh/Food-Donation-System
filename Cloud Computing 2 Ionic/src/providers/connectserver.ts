import { Injectable } from '@angular/core';
//import { Http, RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { GlobalVars } from '../providers/globalvars';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectServer {
  
  serverURL: string;
  sessionData: any;

  constructor(
    public http: Http,
    private globalVars : GlobalVars
	) {
	this.sessionData = {Username : "", sessionkey : "", usertype: ""};
	//this.serverURL = "http://127.0.0.1:9000/";
	this.serverURL = "https://app-dot-cloud-computing-2-dsv.appspot.com/";
	}

  login(objData) {
      return new Promise(resolve => {
		if(objData == null)
        {
          objData = [];
        }
        //objData['device'] = this.globalVars.DEVICE_ID;
        var sURL = this.serverURL + "Login" + this.generateQueryString(objData);
        //var sURL="http://127.0.0.1:9000/Login?Username=viken&Password=parikh";
        this.http.get(sURL)
          .map(res => res.json())
          .subscribe(data => {
				resolve(data);
				}, error => {
				alert("We are unable to connect to our servers. Please try after some time.");
				//var objResponse = [];
				//objResponse['success'] = -1;
				resolve(null);
				//console.log(JSON.stringify(error.json()));
			});
		});
	}
	
	session(objdataSession) {
      return new Promise(resolve => {
		if(objdataSession == null)
        {
          objdataSession = [];
        }
        var sURL = this.serverURL + "Session" + this.generateQueryString(objdataSession);
        this.http.get(sURL)
          .map(res => res.json())
          .subscribe(data => {
				resolve(data);
				}, error => {
				alert("We are unable to connect to our servers. Please try after some time.");
				//var objResponse = [];
				//objResponse['success'] = -1;
				resolve(null);
				//console.log(JSON.stringify(error.json()));
			});
		});
	}
	
	logout(objdataSession) {
      return new Promise(resolve => {
		if(objdataSession == null)
        {
          objdataSession = [];
        }
        var sURL = this.serverURL + "Logout" + this.generateQueryString(objdataSession);
        this.http.get(sURL)
          .map(res => res.json())
          .subscribe(data => {
				resolve(data);
				this.globalVars.USER_NAME="";
				this.globalVars.SESSION_KEY="";
				this.globalVars.USER_TYPE="";
				this.globalVars.clear_session();
				}, error => {
				alert("We are unable to connect to our servers. Please try after some time.");
				//var objResponse = [];
				//objResponse['success'] = -1;
				resolve(null);
				//console.log(JSON.stringify(error.json()));
			});
		});
	}
	
	getData(fileURL, objData) {
      return new Promise(resolve => {
		if(objData == null)
        {
          objData = [];
        }
        var sURL = this.serverURL + fileURL + this.generateQueryString(objData);
        this.http.get(sURL)
          .map(res => res.json())
          .subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            alert("We are unable to connect to our servers. Please try after some time.");
            //var objResponse = [];
            //objResponse['success'] = -1;
            resolve(null);
            //console.log(JSON.stringify(error.json()));
          });
    });
  }

	
    
  generateQueryString(objData) {

    var sQueryString = "";
    if(Object.keys(objData).length > 0)
    {
      for(var i = 0; i < Object.keys(objData).length; i++)
      {
        var sData = (Object.keys(objData)[i] + '=' + objData[Object.keys(objData)[i]]);
        sQueryString += sData + '&';
      }
      sQueryString += "v=0.9.170504";

      if(sQueryString.length > 0)
      {
        sQueryString = "?" + sQueryString;
      }
    }

    return sQueryString;
  }

}
 