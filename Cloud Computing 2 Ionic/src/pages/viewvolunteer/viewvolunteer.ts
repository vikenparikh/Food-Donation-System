import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';

import { ViewVolunteerDetailsPage } from '../ViewVolunteerDetails/ViewVolunteerDetails';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

/*
  Generated class for the ViewdonationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'viewvolunteer.html',
})
export class ViewvolunteerPage {
	message : any;
	userData :any;
	volunteer_array:any;
	loaded:any;
	allData: any;
	filterData: any;
  constructor (
        public navCtrl: NavController, 
  		public navParams: NavParams,
		private globalVars: GlobalVars,
        private connectServer: ConnectServer,
		private loaderView : LoaderView) {
		this.loaded = 0 ;
		this.userData = {Username : "", sessionkey:"" ,usertype:""};
		this.message = "";
		this.volunteer_array=[];
		this.allData=[];
		this.filterData = [];
		};
		
  ionViewDidLoad() {
      this.getvolunteers();
	  }
	  
	  
	  logout()
	  {
		  this.globalVars.get_usersession().then(
          value => {
                        if(value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')&& value.hasOwnProperty('USER_TYPE'))
                        {
                            console.log(value);
                            //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
							
							var objdataSession = [];
                            objdataSession['Username'] =  value.USER_NAME;
                            objdataSession['sessionkey'] = value.SESSION_KEY;
							objdataSession['usertype'] = value.USER_TYPE;
                            
							this.connectServer.logout(objdataSession).then(
							response => { 
									   if(response!=null)
											{	
											console.log(response);
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
	  
	  
	getvolunteers()
		 {
		  this.globalVars.get_usersession().then(
          value => {
                        if(value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE'))
                        {
							var objdataSession = [];
                            objdataSession['Username'] =  value.USER_NAME;
                            objdataSession['sessionkey'] = value.SESSION_KEY;
                            objdataSession['usertype'] = value.USER_TYPE;
							if(this.loaded==0){
								this.connectServer.getData("viewvolunteer",objdataSession).then(
								response => { 
										   if(response!=null)
												{	
												console.log(response);
												if(response['response'][0]['success'] == "1")
													{
														this.message = response['response'][1]['message'];
														this.volunteer_array = response['response'][5]['volunteers'];
														this.loaded = 1;
														this.filterData = response['response'][5]['volunteers'];
													}
												}
											}
									);
								}
						}
					}
					);
	  }
	  
	 showRequestDetails(item) {
		console.log("inside showRequestDetails");
		console.log(item);
		this.navCtrl.push(ViewVolunteerDetailsPage, {item: item});
	}

	getItems(ev: any) {
		this.allData = this.volunteer_array;
		this.filterData = this.allData;
		let val = ev.target.value;
		if (val && val.trim() != '') {
			this.filterData = this.allData.filter((p) => {
				let row: any = p;
				if (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
					return (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
			});
		}
	}

	  
	  
	  
	  
}
