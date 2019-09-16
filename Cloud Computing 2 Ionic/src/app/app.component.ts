import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { Push, PushObject, PushOptions} from "@ionic-native/push";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DonationPage } from '../pages/donation/donation';
import { ViewdonationPage } from '../pages/viewdonation/viewdonation';
import { DonationrequestPage } from '../pages/donationrequest/donationrequest';
import { ViewdonationrequestPage } from '../pages/viewdonationrequest/viewdonationrequest';
import { ViewvolunteerPage } from '../pages/viewvolunteer/viewvolunteer';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { ViewDonationDetailsPage } from '../pages/ViewDonationDetails/ViewDonationDetails';
import { ViewDonationRequestDetailsPage } from '../pages/ViewDonationRequestDetails/ViewDonationRequestDetails';
import { ViewVolunteerDetailsPage } from '../pages/ViewVolunteerDetails/ViewVolunteerDetails';


import { ConnectServer } from '../providers/connectserver';
import { GlobalVars } from '../providers/globalvars';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
	public platform: Platform,
    public menu: MenuController,
    public globalVars: GlobalVars,
    public statusBar: StatusBar,
    public push: Push,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
	private connectServer: ConnectServer
	)  {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Donation', component: DonationPage },
      { title: 'Viewdonation', component: ViewdonationPage },
      { title: 'Donationrequest', component: DonationrequestPage },
      { title: 'Viewdonationrequest', component: ViewdonationrequestPage },
      { title: 'Volunteer', component: VolunteerPage },
      { title: 'Viewvolunteer', component: ViewvolunteerPage },
	  { title: 'ViewDonationDetails', component: ViewDonationDetailsPage },
	  { title: 'ViewDonationRequestDetails', component: ViewDonationRequestDetailsPage },
      { title: 'ViewVolunteerDetailsPage', component: ViewVolunteerDetailsPage }

     /*,
      { title: 'Settings', component: SettingsPage },
      { title: 'About', component: AboutPage}*/
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.initPushNotification();
    });
  }
  
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout() {
      this.nav.setRoot(LoginPage);
  }
  
}