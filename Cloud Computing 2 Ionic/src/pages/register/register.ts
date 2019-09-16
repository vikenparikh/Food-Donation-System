import { Component } from '@angular/core';
//import { NavController, Platform, LoadingController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ConnectServer } from '../../providers/connectserver';
import { LoaderView } from '../../providers/loaderview';
import { GlobalVars } from '../../providers/globalvars';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
	templateUrl: 'register.html',
})
export class RegisterPage {

	userData: any;
	showRegister: any;
	message: any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private connectServer: ConnectServer,
		private loaderView: LoaderView,
		public toastCtrl: ToastController) {

		this.userData = { Username: "", Password: "", usertype: "0", name: "" , phone_num: ""};
		this.message = "";
		this.showRegister = false;
	}

	ionViewDidLoad() {
		this.showRegisterpage();
	}

	showRegisterpage() {
		this.showRegister = true;
	}

	signin() {
		this.navCtrl.push(LoginPage, {});
	}

	register() {
		this.message = "";
		if (this.userData.name.length == 0) {
			this.message = "Name cannot be empty!";
			return
		}
		else if(!(/^[a-zA-Z\s]*$/.test(this.userData.name))){
			this.message = "Please enter a valid Name"
			return
		}
		else if (this.userData.Username.length == 0) {
			this.message = "Email Address cannot be empty!";
			return
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.Username))){
			this.message = "Please enter a valid Email Address!";
			return
		}
		else if(this.userData.phone_num.length == 0){
			this.message = "Phone Number cannot be empty!";
			return
		}
		else if(!/^[0-9]{10}$/.test(this.userData.phone_num)){
			this.message = "Please enter a valid 10 digit Phone Number!";
			return
		}
		else if (this.userData.Password.length == 0) {
			this.message = "Password cannot be empty!";
			return
		}
		else if(this.userData.Password.length < 8){
			this.message = "Password should be atleast 8 characters long!";
			return
		}
		else if(this.userData.ReEnterPassword != this.userData.Password){
			this.message = "Passwords do not match. Please enter password again.";
			this.userData.Password = "";
			this.userData.ReEnterPassword = "";
			return
		}
		else {
			this.loaderView.showLoader('Verifying Details ...');
			this.message = "Verifying Details. Please Wait ...";
			this.connectServer.getData("Register", this.userData).then(
				response => {
					this.message = "";
					this.loaderView.dismissLoader();
					console.log(response);
					if (response != null) {
						if (response['response'][0]['success'] == "0") {
							this.message = response['response'][1]['message'];
						}
						else if (response['response'][0]['success'] == "1") {
							const toast = this.toastCtrl.create({
								message: response['response'][1]['message'],
								duration: 3000
							});
							toast.present();
							this.navCtrl.push(LoginPage, { userData: response });
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
}
