import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { DonationPage } from '../donation/donation';
import { ViewdonationPage } from '../viewdonation/viewdonation';
import { DonationrequestPage } from '../donationrequest/donationrequest';
import { ViewdonationrequestPage } from '../viewdonationrequest/viewdonationrequest';
import { VolunteerPage } from '../volunteer/volunteer';
import { ViewvolunteerPage } from '../viewvolunteer/viewvolunteer';

/*
  Generated class for the DashboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	message : any;
	userData :any;
  constructor (
        public navCtrl: NavController, 
  		public navParams: NavParams,
		private globalVars: GlobalVars,
        private connectServer: ConnectServer,
		private loaderView : LoaderView) {
		this.userData = {Username : "", sessionkey:"", usertype: "" };
		this.message = "";
		};
		
  ionViewDidLoad() {
      this.message = this.navParams.get("userData")['response'][1]['message'];
	  this.userData.Username = this.navParams.get("userData")['response'][2]['username'];
	  this.userData.sessionkey = this.navParams.get("userData")['response'][3]['sessionkey'];
	  this.userData.usertype = this.navParams.get("userData")['response'][4]['usertype'];
	  }
	  
	  logout()
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
                            
							this.connectServer.logout(objdataSession).then(
							response => { 
									   if(response!=null)
											{	
											//console.log(response);
											if(response['response'][0]['success'] == "1")
												{
													this.navCtrl.setRoot(LoginPage);
													this.message = response['response'][1]['message'];
												}
											}
										}
								);
						}
					}
					);
	  }
	  
	  donate(){this.navCtrl.push(DonationPage);}
	  viewdonations(){this.navCtrl.push(ViewdonationPage);}
	  donationrequest(){this.navCtrl.push(DonationrequestPage);}
	  viewdonationrequest(){this.navCtrl.push(ViewdonationrequestPage);}
	  volunteer(){this.navCtrl.push(VolunteerPage);}
	  viewvolunteers(){this.navCtrl.push(ViewvolunteerPage);}
}
