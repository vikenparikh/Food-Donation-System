import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import { Platform } from 'ionic-angular';
//import { InAppBrowser, SpinnerDialog } from 'ionic-native';
import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';

import { GlobalVars } from '../../providers/globalvars';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'login.html',
})
export class LoginPage {

	userData: any;
    showLogin : any;
    message : any;

  	constructor(
        private navCtrl: NavController,
        private globalVars: GlobalVars,
        private connectServer: ConnectServer,
        //private platform : Platform,
        private loaderView : LoaderView) {
 
        this.userData = {Username : "", Password : "",usertype: ""};
		this.showLogin = false;   
        this.message = "";
  	}

    ionViewDidLoad() {
    this.showLoginpage();
    }

	showLoginpage(){
		this.session_signin();
		this.showLogin=true;
	}
	
	session_signin() 
		{
		  this.globalVars.get_usersession().then(
          value => {
                        if(value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE'))
                        {
                            //console.log(value);
                            //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
							
							var objdataSession = [];
                            objdataSession['Username'] =  value.USER_NAME;
                            objdataSession['sessionkey'] = value.SESSION_KEY;
                            objdataSession['usertype'] = value.USER_TYPE;
							
							this.connectServer.session(objdataSession).then(
							response => { 
									   if(response!=null)
											{	
											//console.log(response);
											if(response['response'][0]['success'] == "1")
												{
													this.navCtrl.setRoot(DashboardPage, {userData : response});
													this.message = response['response'][1]['message'];
												}
											}
										}
								);
						}
					}
					);
		}
		
	signin()
		{
		this.message = "";
        if(this.userData.Username.length == 0 || this.userData.Password.length == 0)
			{
            this.message = "Please enter Both Username and Password";
			}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.Username))){
			this.message = "Please enter a proper email";
		}
        else
			{
            this.loaderView.showLoader('Verifying Details ...');
            this.message = "Verifying Details. Please Wait ...";  
            this.connectServer.login(this.userData).then(
            response => { 
                       this.message = "";
                       this.loaderView.dismissLoader();
					   //console.log(response);
					   if(response!=null)
							{	
							if(response['response'][0]['success'] == "0")
								{
									this.message = response['response'][1]['message'];          
								}
							else if(response['response'][0]['success'] == "1")
								{
									this.globalVars.set_session(response['response'][2]['username'],response['response'][3]['sessionkey'],response['response'][4]['usertype']);
									this.navCtrl.setRoot(DashboardPage, {userData : response});
									this.message = response['response'][1]['message'];
								}
							else
								{
								this.message = "Couldnt Connect to the server";
								}
							}
						else
							{
								this.message = "Couldnt Connect to the server";
							}
						}
				);
			}
		}
		
	register()
		{
			this.navCtrl.push(RegisterPage, {});
		}
		
}