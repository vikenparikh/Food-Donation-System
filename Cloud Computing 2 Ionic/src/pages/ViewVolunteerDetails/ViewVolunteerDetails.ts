import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';
import { LoginPage } from '../login/login';

/*
  Generated class for the ViewVolunteerDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'ViewVolunteerDetails.html',
})
export class ViewVolunteerDetailsPage {
	message: any;
	userData: any;
	loaded: any;
	requestItem: any;
	data: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private globalVars: GlobalVars,
		private connectServer: ConnectServer,
		private loaderView: LoaderView) {
		this.userData = { Username: "", sessionkey: "" };
		this.message = "";
		this.loaded = 0;
		this.requestItem = navParams.get('item');

	};

	ionViewDidLoad() {
		console.log(this.requestItem)
		// return this.requestItem;
		// this.getRequestDetails(this.requestItem);
	}

	logout() {
		this.globalVars.get_usersession().then(
			value => {
				if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
					var objdataSession = [];
					objdataSession['Username'] = value.USER_NAME;
					objdataSession['sessionkey'] = value.SESSION_KEY;

					this.connectServer.logout(objdataSession).then(
						response => {
							if (response != null) {
								console.log(response);
								if (response['response'][0]['success'] == "1") {
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
}
