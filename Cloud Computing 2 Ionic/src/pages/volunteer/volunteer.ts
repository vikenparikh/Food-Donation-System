import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

/*
  Generated class for the VolunteerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'volunteer.html',
})
export class VolunteerPage {
	message: any;
	userData: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private globalVars: GlobalVars,
		private connectServer: ConnectServer,
		private loaderView: LoaderView) {
		this.userData = {
			Username: "", sessionkey: "", usertype: "",
			address: "",
			city: "",
			zip_code: "",
			volunteer_date: "",
			volunteer_time: "",
			onsite_contact_first_name: "",
			onsite_contact_last_name: "",
			contact_email: "",
			contact_phone: ""
		};
		this.message = "";
	};

	ionViewDidLoad() {

	}

	volunteer() {
		this.message = ""
		if (this.userData.onsite_contact_first_name.length == 0) {
			this.message = "First Name cannot be empty!"
			return
		}
		else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_first_name))) {
			this.message = "Please enter a valid First Name"
			return
		}
		else if (this.userData.onsite_contact_last_name.length == 0) {
			this.message = "Last Name cannot be empty!"
			return
		}
		else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_last_name))) {
			this.message = "Please enter a valid Last Name"
			return
		} else if (this.userData.contact_email.length == 0) {
			this.message = "Email Address cannot be empty!";
			return
		}
		else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.contact_email))) {
			this.message = "Please enter a valid Email Address!";
			return
		}
		else if (this.userData.contact_phone.length == 0) {
			this.message = "Phone Number cannot be empty!";
			return
		}
		else if (!/^[0-9]{10}$/.test(this.userData.contact_phone)) {
			this.message = "Please enter a valid 10 digit Phone Number!";
			return
		}
		else if (this.userData.address.length == 0) {
			this.message = "Address cannot be empty!";
			return
		}
		else if (this.userData.city.length == 0) {
			this.message = "City cannot be empty!";
			return
		}
		else if (this.userData.zip_code.length == 0) {
			this.message = "Zip Code cannot be empty!";
			return
		}
		else if (!(/^[0-9]*$/.test(this.userData.zip_code))) {
			this.message = "Please enter a valid Zip Code!";
			return
		}
		else if (this.userData.volunteer_date.length == 0) {
			this.message = "Volunteer Date cannot be empty!";
			return
		}
		else if (this.userData.volunteer_time.length == 0) {
			this.message = "Volunteer Time cannot be empty!";
			return
		}
		else {
			this.globalVars.get_usersession().then(
				value => {
					if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
						//console.log(value);
						//this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);

						var objdataSession = [];
						objdataSession['Username'] = value.USER_NAME;
						objdataSession['sessionkey'] = value.SESSION_KEY;
						objdataSession['usertype'] = value.USER_TYPE;
						objdataSession['address'] = this.userData.address;
						objdataSession['city'] = this.userData.city;
						objdataSession['zip_code'] = this.userData.zip_code;
						objdataSession['volunteer_date'] = this.userData.volunteer_date;
						objdataSession['volunteer_time'] = this.userData.volunteer_time;
						objdataSession['onsite_contact_first_name'] = this.userData.onsite_contact_first_name;
						objdataSession['onsite_contact_last_name'] = this.userData.onsite_contact_last_name;
						objdataSession['contact_email'] = this.userData.contact_email;
						objdataSession['contact_phone'] = this.userData.contact_phone;

						this.connectServer.getData("volunteer", objdataSession).then(
							response => {
								if (response != null) {
									console.log(response);
									if (response['response'][0]['success'] == "1") {
										this.navCtrl.setRoot(DashboardPage, { userData: response });
										this.message = response['response'][1]['message'];
									}
									else {
										this.message = "Couldnt Connect to the server";
									}
								}
								else {
									this.message = "Couldnt Connect to the server";
								}

							}
						);
					}
				}
			);
		}

	}

	logout() {
		this.globalVars.get_usersession().then(
			value => {
				if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
					//console.log(value);
					//this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);

					var objdataSession = [];
					objdataSession['Username'] = value.USER_NAME;
					objdataSession['sessionkey'] = value.SESSION_KEY;

					this.connectServer.logout(objdataSession).then(
						response => {
							if (response != null) {
								//console.log(response);
								if (response['response'][0]['success'] == "1") {
									this.navCtrl.setRoot(LoginPage);
									this.message = response['response'][1]['message'];
								}
								else {
									this.message = "Couldnt Connect to the server";
								}
							}
							else {
								this.message = "Couldnt Connect to the server";
							}

						}
					);
				}
			}
		);
	}

}
