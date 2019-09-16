import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from "@ionic-native/push";
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
//import { Component } from '@angular/core';
//import { Camera } from '@ionic-native/camera';
//import { File } from '@ionic-native/file';
//import { Transfer } from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';
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


import { GlobalVars } from '../providers/globalvars';
import { ConnectServer } from '../providers/connectserver';
import { LoaderView } from '../providers/loaderview';

@NgModule({
  declarations: [
        MyApp,
		LoginPage,
		RegisterPage,
		DashboardPage,
		DonationPage,
		ViewdonationPage,
		DonationrequestPage,
		ViewdonationrequestPage,
		ViewvolunteerPage,
		VolunteerPage,
		ViewDonationDetailsPage,
		ViewDonationRequestDetailsPage,
		ViewVolunteerDetailsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
	RegisterPage,
	DashboardPage,
	DonationPage,
	ViewdonationPage,
	DonationrequestPage,
	ViewdonationrequestPage,
	ViewvolunteerPage,
	VolunteerPage,
	ViewDonationDetailsPage,
	ViewDonationRequestDetailsPage,
	ViewVolunteerDetailsPage],
  providers: [
    StatusBar,
    SplashScreen,
	Push,
    GlobalVars, 
    ConnectServer,
    LoaderView,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
