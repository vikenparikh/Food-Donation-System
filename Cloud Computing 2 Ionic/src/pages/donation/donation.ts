import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';


/*
  Generated class for the DonationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'donation.html',
})
export class DonationPage {
	message: any;
	userData: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private globalVars: GlobalVars,
		private connectServer: ConnectServer,
		private loaderView: LoaderView) {
		this.userData = {
			Username: "", sessionkey: "",
			name_of_organization: "",
			pickup_address: "",
			city: "",
			zip_code: "",
			pickup_date: "",
			pickup_time: "",
			onsite_contact_first_name: "",
			onsite_contact_last_name: "",
			contact_email: "",
			contact_phone: "",
			type_of_food: "",
			is_any_of_it_frozen: "",
			any_additional_pickup_instructions: "",
			may_we_publicize_your_donation: ""
		};
		this.message = "";
	};

	ionViewDidLoad() {
	}

	donate() {
		this.message = ""

		if (this.userData.name_of_organization.length == 0) {
			this.message = "Name of Organisation cannot be empty!"
			return
		}
		else if (this.userData.onsite_contact_first_name.length == 0) {
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
		else if (this.userData.type_of_food.length == 0) {
			this.message = "Food Items List cannot be empty!";
			return
		}
		else if (this.userData.pickup_address.length == 0) {
			this.message = "Pickup Address cannot be empty!";
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
		else if (this.userData.pickup_date.length == 0) {
			this.message = "Pickup Date cannot be empty!";
			return
		}
		else if (this.userData.pickup_time.length == 0) {
			this.message = "Pickup Time cannot be empty!";
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
						objdataSession['name_of_organization'] = this.userData.name_of_organization;
						objdataSession['pickup_address'] = this.userData.pickup_address;
						objdataSession['city'] = this.userData.city;
						objdataSession['zip_code'] = this.userData.zip_code;
						objdataSession['pickup_date'] = this.userData.pickup_date;
						objdataSession['pickup_time'] = this.userData.pickup_time;
						objdataSession['onsite_contact_first_name'] = this.userData.onsite_contact_first_name;
						objdataSession['onsite_contact_last_name'] = this.userData.onsite_contact_last_name;
						objdataSession['contact_email'] = this.userData.contact_email;
						objdataSession['contact_phone'] = this.userData.contact_phone;
						objdataSession['type_of_food'] = this.userData.type_of_food;
						objdataSession['is_any_of_it_frozen'] = this.userData.is_any_of_it_frozen;
						objdataSession['any_additional_pickup_instructions'] = this.userData.any_additional_pickup_instructions;
						objdataSession['may_we_publicize_your_donation'] = this.userData.may_we_publicize_your_donation;

						this.connectServer.getData("donate", objdataSession).then(
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
				if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
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
