webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the DonationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DonationPage = (function () {
    function DonationPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
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
    }
    ;
    DonationPage.prototype.ionViewDidLoad = function () {
    };
    DonationPage.prototype.donate = function () {
        var _this = this;
        this.message = "";
        if (this.userData.name_of_organization.length == 0) {
            this.message = "Name of Organisation cannot be empty!";
            return;
        }
        else if (this.userData.onsite_contact_first_name.length == 0) {
            this.message = "First Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_first_name))) {
            this.message = "Please enter a valid First Name";
            return;
        }
        else if (this.userData.onsite_contact_last_name.length == 0) {
            this.message = "Last Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_last_name))) {
            this.message = "Please enter a valid Last Name";
            return;
        }
        else if (this.userData.contact_email.length == 0) {
            this.message = "Email Address cannot be empty!";
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.contact_email))) {
            this.message = "Please enter a valid Email Address!";
            return;
        }
        else if (this.userData.contact_phone.length == 0) {
            this.message = "Phone Number cannot be empty!";
            return;
        }
        else if (!/^[0-9]{10}$/.test(this.userData.contact_phone)) {
            this.message = "Please enter a valid 10 digit Phone Number!";
            return;
        }
        else if (this.userData.type_of_food.length == 0) {
            this.message = "Food Items List cannot be empty!";
            return;
        }
        else if (this.userData.pickup_address.length == 0) {
            this.message = "Pickup Address cannot be empty!";
            return;
        }
        else if (this.userData.city.length == 0) {
            this.message = "City cannot be empty!";
            return;
        }
        else if (this.userData.zip_code.length == 0) {
            this.message = "Zip Code cannot be empty!";
            return;
        }
        else if (!(/^[0-9]*$/.test(this.userData.zip_code))) {
            this.message = "Please enter a valid Zip Code!";
            return;
        }
        else if (this.userData.pickup_date.length == 0) {
            this.message = "Pickup Date cannot be empty!";
            return;
        }
        else if (this.userData.pickup_time.length == 0) {
            this.message = "Pickup Time cannot be empty!";
            return;
        }
        else {
            this.globalVars.get_usersession().then(function (value) {
                if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                    //console.log(value);
                    //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                    var objdataSession = [];
                    objdataSession['Username'] = value.USER_NAME;
                    objdataSession['sessionkey'] = value.SESSION_KEY;
                    objdataSession['usertype'] = value.USER_TYPE;
                    objdataSession['name_of_organization'] = _this.userData.name_of_organization;
                    objdataSession['pickup_address'] = _this.userData.pickup_address;
                    objdataSession['city'] = _this.userData.city;
                    objdataSession['zip_code'] = _this.userData.zip_code;
                    objdataSession['pickup_date'] = _this.userData.pickup_date;
                    objdataSession['pickup_time'] = _this.userData.pickup_time;
                    objdataSession['onsite_contact_first_name'] = _this.userData.onsite_contact_first_name;
                    objdataSession['onsite_contact_last_name'] = _this.userData.onsite_contact_last_name;
                    objdataSession['contact_email'] = _this.userData.contact_email;
                    objdataSession['contact_phone'] = _this.userData.contact_phone;
                    objdataSession['type_of_food'] = _this.userData.type_of_food;
                    objdataSession['is_any_of_it_frozen'] = _this.userData.is_any_of_it_frozen;
                    objdataSession['any_additional_pickup_instructions'] = _this.userData.any_additional_pickup_instructions;
                    objdataSession['may_we_publicize_your_donation'] = _this.userData.may_we_publicize_your_donation;
                    _this.connectServer.getData("donate", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */], { userData: response });
                                _this.message = response['response'][1]['message'];
                            }
                            else {
                                _this.message = "Couldnt Connect to the server";
                            }
                        }
                        else {
                            _this.message = "Couldnt Connect to the server";
                        }
                    });
                }
            });
        }
    };
    DonationPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
                //console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        //console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                        else {
                            _this.message = "Couldnt Connect to the server";
                        }
                    }
                    else {
                        _this.message = "Couldnt Connect to the server";
                    }
                });
            }
        });
    };
    return DonationPage;
}());
DonationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\donation\donation.html"*/'<!--\n  Generated template for the DonationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n    <ion-buttons end><button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button></ion-buttons>\n\n    <ion-title>Donation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-title>Personal Details</ion-title>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Name of Organizations</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.name_of_organization"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_first_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_last_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.contact_email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.contact_phone"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-title>Item Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Food Items</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.type_of_food"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Special Instructions for Handling Food</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.is_any_of_it_frozen"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-title>Pickup Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Pickup Address</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.pickup_address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>City</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zip Code</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.zip_code"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pickup Date</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY" min="2019" max="2020" [(ngModel)]="userData.pickup_date">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pickup Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" minuteValues="0,15,30,45" [(ngModel)]="userData.pickup_time"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <ion-title>Additional Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Additional Pickup Instructions</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.any_additional_pickup_instructions"></ion-input>\n    </ion-item>\n\n    <ion-item text-center *ngIf=message>\n      <p style="color:#FF0000;"><strong>{{message}}</strong></p>\n    </ion-item>\n    \n    <ion-item>\n      <button ion-button color="primary" block (click)="donate()">Post Donation</button>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\donation\donation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], DonationPage);

//# sourceMappingURL=donation.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewdonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ViewDonationDetails_ViewDonationDetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the ViewdonationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewdonationPage = (function () {
    function ViewdonationPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.loaded = 0;
        this.userData = { Username: "", sessionkey: "", usertype: "" };
        this.message = "";
        this.donation_array = [];
        this.loaded = 0;
        this.allData = [];
        this.filterData = [];
    }
    ;
    ViewdonationPage.prototype.ionViewDidLoad = function () {
        this.getdonations();
    };
    ViewdonationPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    ViewdonationPage.prototype.getdonations = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                if (_this.loaded == 0) {
                    _this.connectServer.getData("viewdonate", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.message = response['response'][1]['message'];
                                _this.donation_array = response['response'][5]['viewdonate'];
                                _this.loaded = 1;
                                _this.filterData = response['response'][5]['viewdonate'];
                            }
                        }
                    });
                }
            }
        });
    };
    ViewdonationPage.prototype.showRequestDetails = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ViewDonationDetails_ViewDonationDetails__["a" /* ViewDonationDetailsPage */], { item: item });
    };
    ViewdonationPage.prototype.getItems = function (ev) {
        this.allData = this.donation_array;
        this.filterData = this.allData;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.filterData = this.allData.filter(function (p) {
                var row = p;
                if (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return ViewdonationPage;
}());
ViewdonationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewdonation\viewdonation.html"*/'<!--\n  Generated template for the ViewdonationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n	<ion-buttons end><button (click)="logout()"><ion-icon name="log-out"></ion-icon></button></ion-buttons>\n	\n    <ion-title>View Donations</ion-title>\n    </ion-navbar>\n	\n</ion-header>\n\n \n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Filter By City"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of filterData">\n      <h2>{{item.type_of_food}}</h2>\n      <h5>{{item.city}}</h5>\n      <button ion-button clear item-end (click)="showRequestDetails(item)">View</button>\n    </ion-item>\n  </ion-list>\n		\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewdonation\viewdonation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewdonationPage);

//# sourceMappingURL=viewdonation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDonationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';





/*
  Generated class for the ViewdonationrequestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewDonationDetailsPage = (function () {
    function ViewDonationDetailsPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", sessionkey: "" };
        this.message = "";
        this.loaded = 0;
        this.requestItem = navParams.get('item');
    }
    ;
    ViewDonationDetailsPage.prototype.ionViewDidLoad = function () {
        console.log(this.requestItem);
        // return this.requestItem;
        // this.getRequestDetails(this.requestItem);
    };
    ViewDonationDetailsPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    return ViewDonationDetailsPage;
}());
ViewDonationDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewDonationDetails\ViewDonationDetails.html"*/'<!--\n  Generated template for the ViewDonationDetailsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons end><button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button></ion-buttons>\n\n    <ion-title>Requests Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Organization</ion-label>\n      <ion-input disabled="true" value={{requestItem.name_of_organization}}></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>City</ion-label>\n      <ion-input disabled="true" color="#FFFFF" value={{requestItem.city}}></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Date Required</ion-label>\n      <ion-input value={{requestItem.pickup_date}}></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Items Required</ion-label>\n      <ion-input value={{requestItem.type_of_food}}></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-title>Contact Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-input value="{{requestItem.onsite_contact_first_name}}  {{requestItem.onsite_contact_last_name}}">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input value={{requestItem.contact_email}}>]</ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Phone Number</ion-label>\n      <ion-input value={{requestItem.contact_phone}}>]</ion-input>\n    </ion-item>\n  </ion-list>\n  <a href="tel:{{requestItem.contact_phone}}" class="button button-positive">Call</a>\n  <!-- <ion-icon ios="ios-call" md="md-call"><a href="tel:{{requestItem.contact_phone}}" class="button button-positive"></a></ion-icon> -->\n\n    <!-- <ion-item>\n        <button item-right clear (click)=\'tel:{{requestItem.contact_phone}}\'>\n            <ion-icon ios="ios-call" md="md-call"></ion-icon>\n        </button>\n    </ion-item> -->\n\n\n\n  <!-- UniqueDonateId: 1, username: "ddagly@asu.edu", name_of_organization: "Food4US", pickup_address: "E Tyler Street",\n  city: "Phoenix", …}\n  UniqueDonateId: 1\n  any_additional_pickup_instructions: ""\n  city: "Phoenix"\n  contact_email: "dd"\n  contact_phone: "12345"\n  is_any_of_it_frozen: ""\n  may_we_publicize_your_donation: ""\n  name_of_organization: "Food4US"\n  onsite_contact_first_name: "DD"\n  onsite_contact_last_name: "DD"\n  pickup_address: "E Tyler Street"\n  pickup_date: "10th May"\n  pickup_time: "10PM"\n  type_of_food: "Utensils, Spices"\n  username: "ddagly@asu.edu"\n  zip_code: "85281" -->\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewDonationDetails\ViewDonationDetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewDonationDetailsPage);

//# sourceMappingURL=ViewDonationDetails.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the DonationrequestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DonationrequestPage = (function () {
    function DonationrequestPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = {
            Username: "", sessionkey: "", usertype: "",
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
    }
    ;
    DonationrequestPage.prototype.ionViewDidLoad = function () {
    };
    DonationrequestPage.prototype.donaterequest = function () {
        var _this = this;
        this.message = "";
        if (this.userData.name_of_organization.length == 0) {
            this.message = "Name of Organisation cannot be empty!";
            return;
        }
        else if (this.userData.onsite_contact_first_name.length == 0) {
            this.message = "First Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_first_name))) {
            this.message = "Please enter a valid First Name";
            return;
        }
        else if (this.userData.onsite_contact_last_name.length == 0) {
            this.message = "Last Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_last_name))) {
            this.message = "Please enter a valid Last Name";
            return;
        }
        else if (this.userData.contact_email.length == 0) {
            this.message = "Email Address cannot be empty!";
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.contact_email))) {
            this.message = "Please enter a valid Email Address!";
            return;
        }
        else if (this.userData.contact_phone.length == 0) {
            this.message = "Phone Number cannot be empty!";
            return;
        }
        else if (!/^[0-9]{10}$/.test(this.userData.contact_phone)) {
            this.message = "Please enter a valid 10 digit Phone Number!";
            return;
        }
        else if (this.userData.type_of_food.length == 0) {
            this.message = "Food Items List cannot be empty!";
            return;
        }
        else if (this.userData.pickup_address.length == 0) {
            this.message = "Pickup Address cannot be empty!";
            return;
        }
        else if (this.userData.city.length == 0) {
            this.message = "City cannot be empty!";
            return;
        }
        else if (this.userData.zip_code.length == 0) {
            this.message = "Zip Code cannot be empty!";
            return;
        }
        else if (!(/^[0-9]*$/.test(this.userData.zip_code))) {
            this.message = "Please enter a valid Zip Code!";
            return;
        }
        else if (this.userData.pickup_date.length == 0) {
            this.message = "Pickup Date cannot be empty!";
            return;
        }
        else if (this.userData.pickup_time.length == 0) {
            this.message = "Pickup Time cannot be empty!";
            return;
        }
        else {
            this.globalVars.get_usersession().then(function (value) {
                if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                    //console.log(value);
                    //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                    var objdataSession = [];
                    objdataSession['Username'] = value.USER_NAME;
                    objdataSession['sessionkey'] = value.SESSION_KEY;
                    objdataSession['usertype'] = value.USER_TYPE;
                    objdataSession['name_of_organization'] = _this.userData.name_of_organization;
                    objdataSession['pickup_address'] = _this.userData.pickup_address;
                    objdataSession['city'] = _this.userData.city;
                    objdataSession['zip_code'] = _this.userData.zip_code;
                    objdataSession['pickup_date'] = _this.userData.pickup_date;
                    objdataSession['pickup_time'] = _this.userData.pickup_time;
                    objdataSession['onsite_contact_first_name'] = _this.userData.onsite_contact_first_name;
                    objdataSession['onsite_contact_last_name'] = _this.userData.onsite_contact_last_name;
                    objdataSession['contact_email'] = _this.userData.contact_email;
                    objdataSession['contact_phone'] = _this.userData.contact_phone;
                    objdataSession['type_of_food'] = _this.userData.type_of_food;
                    objdataSession['is_any_of_it_frozen'] = _this.userData.is_any_of_it_frozen;
                    objdataSession['any_additional_pickup_instructions'] = _this.userData.any_additional_pickup_instructions;
                    objdataSession['may_we_publicize_your_donation'] = _this.userData.may_we_publicize_your_donation;
                    _this.connectServer.getData("receivefood", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */], { userData: response });
                                _this.message = response['response'][1]['message'];
                            }
                            else {
                                _this.message = "Couldnt Connect to the server";
                            }
                        }
                        else {
                            _this.message = "Couldnt Connect to the server";
                        }
                    });
                }
            });
        }
    };
    DonationrequestPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    return DonationrequestPage;
}());
DonationrequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\donationrequest\donationrequest.html"*/'<!--\n  Generated template for the DonationrequestPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n	<ion-buttons end><button (click)="logout()"><ion-icon name="log-out"></ion-icon></button></ion-buttons>\n	\n    <ion-title>Donation Request</ion-title>\n    </ion-navbar>\n	\n</ion-header>\n\n \n<ion-content padding>\n  <ion-list>\n  \n	   <ion-item>\n        <ion-label floating>Name of Organizations</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.name_of_organization"></ion-input>\n      </ion-item>\n		\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_first_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_last_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.contact_email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.contact_phone"></ion-input>\n      </ion-item>\n  </ion-list>\n\n  <ion-title>Requirement Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Food Items</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.type_of_food"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Special Instructions for Handling Food</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.is_any_of_it_frozen"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-title>Dropoff Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Dropoff Address</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.pickup_address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>City</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zip Code</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.zip_code"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dropoff Date</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY" min="2019" max="2020" [(ngModel)]="userData.pickup_date">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dropoff Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" minuteValues="0,15,30,45" [(ngModel)]="userData.pickup_time"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <ion-title>Additional Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Additional Dropoff Instructions</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.any_additional_pickup_instructions"></ion-input>\n    </ion-item>\n\n    <ion-item text-center *ngIf=message>\n        <p style="color:#FF0000;" ><strong>{{message}}</strong></p>\n      </ion-item>  \n	  <ion-item>\n		<button ion-button color="primary" block (click)="donaterequest()">Post Food Request</button>\n    </ion-item>\n  </ion-list>\n	  \n	\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\donationrequest\donationrequest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], DonationrequestPage);

//# sourceMappingURL=donationrequest.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewdonationrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ViewDonationRequestDetails_ViewDonationRequestDetails__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the ViewdonationrequestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewdonationrequestPage = (function () {
    function ViewdonationrequestPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", sessionkey: "" };
        this.message = "";
        this.donationRequests = [];
        this.loaded = 0;
        this.allData = [];
        this.filterData = [];
    }
    ;
    ViewdonationrequestPage.prototype.ionViewDidLoad = function () {
        this.getdonationrequests();
    };
    ViewdonationrequestPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    ViewdonationrequestPage.prototype.getdonationrequests = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                if (_this.loaded == 0) {
                    _this.connectServer.getData("viewdonationrequests", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.message = response['response'][1]['message'];
                                _this.donationRequests = response['response'][5]['donationRequests'];
                                _this.loaded = 1;
                                _this.filterData = response['response'][5]['donationRequests'];
                            }
                        }
                    });
                }
            }
        });
    };
    ViewdonationrequestPage.prototype.showRequestDetails = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ViewDonationRequestDetails_ViewDonationRequestDetails__["a" /* ViewDonationRequestDetailsPage */], { item: item });
    };
    ViewdonationrequestPage.prototype.getItems = function (ev) {
        this.allData = this.donationRequests;
        this.filterData = this.allData;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.filterData = this.allData.filter(function (p) {
                var row = p;
                if (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return ViewdonationrequestPage;
}());
ViewdonationrequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewdonationrequest\viewdonationrequest.html"*/'<!--\n  Generated template for the ViewdonationrequestPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n	<ion-buttons end><button (click)="logout()"><ion-icon name="log-out"></ion-icon></button></ion-buttons>\n	\n    <ion-title>View Donation Requests</ion-title>\n    </ion-navbar>\n	\n</ion-header>\n\n \n<ion-content padding>\n	\n  <!-- <ion-item text-center *ngIf=message>\n    <p style="color:#FF0000;"><strong>{{message}}</strong></p>\n  </ion-item> -->\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Filter By City"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of filterData">\n      <h2>{{item.type_of_food}}</h2>\n      <h5>{{item.city}}</h5>\n      <button ion-button clear item-end (click)="showRequestDetails(item)">View</button>\n    </ion-item>\n  </ion-list>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewdonationrequest\viewdonationrequest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewdonationrequestPage);

//# sourceMappingURL=viewdonationrequest.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDonationRequestDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';





/*
  Generated class for the ViewdonationrequestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewDonationRequestDetailsPage = (function () {
    function ViewDonationRequestDetailsPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", sessionkey: "" };
        this.message = "";
        this.loaded = 0;
        this.requestItem = navParams.get('item');
    }
    ;
    ViewDonationRequestDetailsPage.prototype.ionViewDidLoad = function () {
        console.log(this.requestItem);
        // return this.requestItem;
        // this.getRequestDetails(this.requestItem);
    };
    ViewDonationRequestDetailsPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    return ViewDonationRequestDetailsPage;
}());
ViewDonationRequestDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewDonationRequestDetails\ViewDonationRequestDetails.html"*/'<!--\n  Generated template for the ViewdonationrequestPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons end><button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button></ion-buttons>\n\n    <ion-title>Requests Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Organization</ion-label>\n      <ion-textarea value={{requestItem.name_of_organization}}></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>City</ion-label>\n      <ion-textarea value={{requestItem.city}}></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Date Required</ion-label>\n      <ion-textarea value={{requestItem.pickup_date}}></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Items Required</ion-label>\n      <ion-textarea value={{requestItem.type_of_food}}></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-title>Contact Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-textarea value="{{requestItem.onsite_contact_first_name}}  {{requestItem.onsite_contact_last_name}}">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-textarea value={{requestItem.contact_email}}>]</ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Phone Number</ion-label>\n      <ion-textarea value={{requestItem.contact_phone}}>]</ion-textarea>\n    </ion-item>\n  </ion-list>\n  <a href="tel:{{requestItem.contact_phone}}" class="button button-positive">Call</a>\n  <!-- <ion-icon ios="ios-call" md="md-call"><a href="tel:{{requestItem.contact_phone}}" class="button button-positive"></a></ion-icon> -->\n\n    <!-- <ion-item>\n        <button item-right clear (click)=\'tel:{{requestItem.contact_phone}}\'>\n            <ion-icon ios="ios-call" md="md-call"></ion-icon>\n        </button>\n    </ion-item> -->\n\n\n\n  <!-- UniqueDonateId: 1, username: "ddagly@asu.edu", name_of_organization: "Food4US", pickup_address: "E Tyler Street",\n  city: "Phoenix", …}\n  UniqueDonateId: 1\n  any_additional_pickup_instructions: ""\n  city: "Phoenix"\n  contact_email: "dd"\n  contact_phone: "12345"\n  is_any_of_it_frozen: ""\n  may_we_publicize_your_donation: ""\n  name_of_organization: "Food4US"\n  onsite_contact_first_name: "DD"\n  onsite_contact_last_name: "DD"\n  pickup_address: "E Tyler Street"\n  pickup_date: "10th May"\n  pickup_time: "10PM"\n  type_of_food: "Utensils, Spices"\n  username: "ddagly@asu.edu"\n  zip_code: "85281" -->\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewDonationRequestDetails\ViewDonationRequestDetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewDonationRequestDetailsPage);

//# sourceMappingURL=ViewDonationRequestDetails.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the VolunteerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var VolunteerPage = (function () {
    function VolunteerPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
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
    }
    ;
    VolunteerPage.prototype.ionViewDidLoad = function () {
    };
    VolunteerPage.prototype.volunteer = function () {
        var _this = this;
        this.message = "";
        if (this.userData.onsite_contact_first_name.length == 0) {
            this.message = "First Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_first_name))) {
            this.message = "Please enter a valid First Name";
            return;
        }
        else if (this.userData.onsite_contact_last_name.length == 0) {
            this.message = "Last Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.onsite_contact_last_name))) {
            this.message = "Please enter a valid Last Name";
            return;
        }
        else if (this.userData.contact_email.length == 0) {
            this.message = "Email Address cannot be empty!";
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.contact_email))) {
            this.message = "Please enter a valid Email Address!";
            return;
        }
        else if (this.userData.contact_phone.length == 0) {
            this.message = "Phone Number cannot be empty!";
            return;
        }
        else if (!/^[0-9]{10}$/.test(this.userData.contact_phone)) {
            this.message = "Please enter a valid 10 digit Phone Number!";
            return;
        }
        else if (this.userData.address.length == 0) {
            this.message = "Address cannot be empty!";
            return;
        }
        else if (this.userData.city.length == 0) {
            this.message = "City cannot be empty!";
            return;
        }
        else if (this.userData.zip_code.length == 0) {
            this.message = "Zip Code cannot be empty!";
            return;
        }
        else if (!(/^[0-9]*$/.test(this.userData.zip_code))) {
            this.message = "Please enter a valid Zip Code!";
            return;
        }
        else if (this.userData.volunteer_date.length == 0) {
            this.message = "Volunteer Date cannot be empty!";
            return;
        }
        else if (this.userData.volunteer_time.length == 0) {
            this.message = "Volunteer Time cannot be empty!";
            return;
        }
        else {
            this.globalVars.get_usersession().then(function (value) {
                if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                    //console.log(value);
                    //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                    var objdataSession = [];
                    objdataSession['Username'] = value.USER_NAME;
                    objdataSession['sessionkey'] = value.SESSION_KEY;
                    objdataSession['usertype'] = value.USER_TYPE;
                    objdataSession['address'] = _this.userData.address;
                    objdataSession['city'] = _this.userData.city;
                    objdataSession['zip_code'] = _this.userData.zip_code;
                    objdataSession['volunteer_date'] = _this.userData.volunteer_date;
                    objdataSession['volunteer_time'] = _this.userData.volunteer_time;
                    objdataSession['onsite_contact_first_name'] = _this.userData.onsite_contact_first_name;
                    objdataSession['onsite_contact_last_name'] = _this.userData.onsite_contact_last_name;
                    objdataSession['contact_email'] = _this.userData.contact_email;
                    objdataSession['contact_phone'] = _this.userData.contact_phone;
                    _this.connectServer.getData("volunteer", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */], { userData: response });
                                _this.message = response['response'][1]['message'];
                            }
                            else {
                                _this.message = "Couldnt Connect to the server";
                            }
                        }
                        else {
                            _this.message = "Couldnt Connect to the server";
                        }
                    });
                }
            });
        }
    };
    VolunteerPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                //console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        //console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                        else {
                            _this.message = "Couldnt Connect to the server";
                        }
                    }
                    else {
                        _this.message = "Couldnt Connect to the server";
                    }
                });
            }
        });
    };
    return VolunteerPage;
}());
VolunteerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\volunteer\volunteer.html"*/'<!--\n  Generated template for the DonationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n    <ion-buttons end><button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button></ion-buttons>\n\n    <ion-title>Volunteer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-title>Personal Details</ion-title>\n  <ion-list>\n\n\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_first_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.onsite_contact_last_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.contact_email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.contact_phone"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-title>Other Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>City</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zip Code</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.zip_code"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Volunteer Date</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY" min="2019" max="2020" [(ngModel)]="userData.volunteer_date">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Volunteer Time</ion-label>\n      <ion-datetime displayFormat="hh:mm A" minuteValues="0,15,30,45" [(ngModel)]="userData.volunteer_time">\n      </ion-datetime>\n    </ion-item>\n    <ion-item text-center *ngIf=message>\n        <p style="color:#FF0000;"><strong>{{message}}</strong></p>\n      </ion-item>\n    <ion-item>\n      <button ion-button color="primary" block (click)="volunteer()">Become a Volunteer</button>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\volunteer\volunteer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], VolunteerPage);

//# sourceMappingURL=volunteer.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewvolunteerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ViewVolunteerDetails_ViewVolunteerDetails__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';






/*
  Generated class for the ViewdonationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewvolunteerPage = (function () {
    function ViewvolunteerPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.loaded = 0;
        this.userData = { Username: "", sessionkey: "", usertype: "" };
        this.message = "";
        this.volunteer_array = [];
        this.allData = [];
        this.filterData = [];
    }
    ;
    ViewvolunteerPage.prototype.ionViewDidLoad = function () {
        this.getvolunteers();
    };
    ViewvolunteerPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    ViewvolunteerPage.prototype.getvolunteers = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                if (_this.loaded == 0) {
                    _this.connectServer.getData("viewvolunteer", objdataSession).then(function (response) {
                        if (response != null) {
                            console.log(response);
                            if (response['response'][0]['success'] == "1") {
                                _this.message = response['response'][1]['message'];
                                _this.volunteer_array = response['response'][5]['volunteers'];
                                _this.loaded = 1;
                                _this.filterData = response['response'][5]['volunteers'];
                            }
                        }
                    });
                }
            }
        });
    };
    ViewvolunteerPage.prototype.showRequestDetails = function (item) {
        console.log("inside showRequestDetails");
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ViewVolunteerDetails_ViewVolunteerDetails__["a" /* ViewVolunteerDetailsPage */], { item: item });
    };
    ViewvolunteerPage.prototype.getItems = function (ev) {
        this.allData = this.volunteer_array;
        this.filterData = this.allData;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.filterData = this.allData.filter(function (p) {
                var row = p;
                if (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return (row.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return ViewvolunteerPage;
}());
ViewvolunteerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewvolunteer\viewvolunteer.html"*/'<!--\n  Generated template for the ViewvolunteerPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n	<ion-buttons end><button (click)="logout()"><ion-icon name="log-out"></ion-icon></button></ion-buttons>\n	\n    <ion-title>View Volunteer</ion-title>\n    </ion-navbar>\n	\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Filter By City"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of filterData">\n      <h2>{{item.onsite_contact_first_name}}</h2>\n      <h5>{{item.city}}</h5>\n      <button ion-button clear item-end (click)="showRequestDetails(item)">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\viewvolunteer\viewvolunteer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewvolunteerPage);

//# sourceMappingURL=viewvolunteer.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewVolunteerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';





/*
  Generated class for the ViewVolunteerDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewVolunteerDetailsPage = (function () {
    function ViewVolunteerDetailsPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", sessionkey: "" };
        this.message = "";
        this.loaded = 0;
        this.requestItem = navParams.get('item');
    }
    ;
    ViewVolunteerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log(this.requestItem);
        // return this.requestItem;
        // this.getRequestDetails(this.requestItem);
    };
    ViewVolunteerDetailsPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY')) {
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    return ViewVolunteerDetailsPage;
}());
ViewVolunteerDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewVolunteerDetails\ViewVolunteerDetails.html"*/'<!--\n  Generated template for the ViewVolunteerDetailsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons end><button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button></ion-buttons>\n\n    <ion-title>Volunter Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>City</ion-label>\n      <ion-textarea value={{requestItem.city}}></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Date Required</ion-label>\n      <ion-textarea value={{requestItem.volunteer_date}}></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-title>Contact Details</ion-title>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-textarea value="{{requestItem.onsite_contact_first_name}}  {{requestItem.onsite_contact_last_name}}">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-textarea value={{requestItem.contact_email}}>]</ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Phone Number</ion-label>\n      <ion-textarea value={{requestItem.contact_phone}}>]</ion-textarea>\n    </ion-item>\n  </ion-list>\n  <a href="tel:{{requestItem.contact_phone}}" class="button button-positive">Call</a>\n  <!-- <ion-icon ios="ios-call" md="md-call"><a href="tel:{{requestItem.contact_phone}}" class="button button-positive"></a></ion-icon> -->\n\n    <!-- <ion-item>\n        <button item-right clear (click)=\'tel:{{requestItem.contact_phone}}\'>\n            <ion-icon ios="ios-call" md="md-call"></ion-icon>\n        </button>\n    </ion-item> -->\n\n\n\n  <!-- UniqueDonateId: 1, username: "ddagly@asu.edu", name_of_organization: "Food4US", pickup_address: "E Tyler Street",\n  city: "Phoenix", …}\n  UniqueDonateId: 1\n  any_additional_pickup_instructions: ""\n  city: "Phoenix"\n  contact_email: "dd"\n  contact_phone: "12345"\n  is_any_of_it_frozen: ""\n  may_we_publicize_your_donation: ""\n  name_of_organization: "Food4US"\n  onsite_contact_first_name: "DD"\n  onsite_contact_last_name: "DD"\n  pickup_address: "E Tyler Street"\n  pickup_date: "10th May"\n  pickup_time: "10PM"\n  type_of_food: "Utensils, Spices"\n  username: "ddagly@asu.edu"\n  zip_code: "85281" -->\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\ViewVolunteerDetails\ViewVolunteerDetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], ViewVolunteerDetailsPage);

//# sourceMappingURL=ViewVolunteerDetails.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http, RequestOptions, Headers } from '@angular/http';



var ConnectServer = (function () {
    function ConnectServer(http, globalVars) {
        this.http = http;
        this.globalVars = globalVars;
        this.sessionData = { Username: "", sessionkey: "", usertype: "" };
        //this.serverURL = "http://127.0.0.1:9000/";
        this.serverURL = "https://app-dot-cloud-computing-2-dsv.appspot.com/";
    }
    ConnectServer.prototype.login = function (objData) {
        var _this = this;
        return new Promise(function (resolve) {
            if (objData == null) {
                objData = [];
            }
            //objData['device'] = this.globalVars.DEVICE_ID;
            var sURL = _this.serverURL + "Login" + _this.generateQueryString(objData);
            //var sURL="http://127.0.0.1:9000/Login?Username=viken&Password=parikh";
            _this.http.get(sURL)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                alert("We are unable to connect to our servers. Please try after some time.");
                //var objResponse = [];
                //objResponse['success'] = -1;
                resolve(null);
                //console.log(JSON.stringify(error.json()));
            });
        });
    };
    ConnectServer.prototype.session = function (objdataSession) {
        var _this = this;
        return new Promise(function (resolve) {
            if (objdataSession == null) {
                objdataSession = [];
            }
            var sURL = _this.serverURL + "Session" + _this.generateQueryString(objdataSession);
            _this.http.get(sURL)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                alert("We are unable to connect to our servers. Please try after some time.");
                //var objResponse = [];
                //objResponse['success'] = -1;
                resolve(null);
                //console.log(JSON.stringify(error.json()));
            });
        });
    };
    ConnectServer.prototype.logout = function (objdataSession) {
        var _this = this;
        return new Promise(function (resolve) {
            if (objdataSession == null) {
                objdataSession = [];
            }
            var sURL = _this.serverURL + "Logout" + _this.generateQueryString(objdataSession);
            _this.http.get(sURL)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                _this.globalVars.USER_NAME = "";
                _this.globalVars.SESSION_KEY = "";
                _this.globalVars.USER_TYPE = "";
                _this.globalVars.clear_session();
            }, function (error) {
                alert("We are unable to connect to our servers. Please try after some time.");
                //var objResponse = [];
                //objResponse['success'] = -1;
                resolve(null);
                //console.log(JSON.stringify(error.json()));
            });
        });
    };
    ConnectServer.prototype.getData = function (fileURL, objData) {
        var _this = this;
        return new Promise(function (resolve) {
            if (objData == null) {
                objData = [];
            }
            var sURL = _this.serverURL + fileURL + _this.generateQueryString(objData);
            _this.http.get(sURL)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                alert("We are unable to connect to our servers. Please try after some time.");
                //var objResponse = [];
                //objResponse['success'] = -1;
                resolve(null);
                //console.log(JSON.stringify(error.json()));
            });
        });
    };
    ConnectServer.prototype.generateQueryString = function (objData) {
        var sQueryString = "";
        if (Object.keys(objData).length > 0) {
            for (var i = 0; i < Object.keys(objData).length; i++) {
                var sData = (Object.keys(objData)[i] + '=' + objData[Object.keys(objData)[i]]);
                sQueryString += sData + '&';
            }
            sQueryString += "v=0.9.170504";
            if (sQueryString.length > 0) {
                sQueryString = "?" + sQueryString;
            }
        }
        return sQueryString;
    };
    return ConnectServer;
}());
ConnectServer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_globalvars__["a" /* GlobalVars */]])
], ConnectServer);

//# sourceMappingURL=connectserver.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalVars = (function () {
    function GlobalVars(storage) {
        this.storage = storage;
        this.HAS_LOGGED_IN = "0";
        this.DEVICE_ID = "";
        this.USER_NAME = "";
        this.SESSION_KEY = "";
        this.USER_TYPE = "";
    }
    GlobalVars.prototype.set_session = function (Username, sessionkey, usertype) {
        this.HAS_LOGGED_IN = "1";
        var obj = { "USER_NAME": Username, "SESSION_KEY": sessionkey, "USER_TYPE": usertype };
        this.storage.set("USER_SESSION", obj);
        this.USER_NAME = Username;
        this.SESSION_KEY = sessionkey;
        this.USER_TYPE = usertype;
    };
    GlobalVars.prototype.get_usersession = function () {
        return this.storage.get("USER_SESSION").then(function (value) {
            return value;
        });
    };
    GlobalVars.prototype.clear_session = function () {
        this.storage.clear();
        this.HAS_LOGGED_IN = "0";
        this.USER_NAME = "";
        this.SESSION_KEY = "";
        this.USER_TYPE = "";
    };
    return GlobalVars;
}());
GlobalVars = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], GlobalVars);

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderView = (function () {
    function LoaderView(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoaderView.prototype.showLoader = function (content) {
        this.objLoader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: content
        });
        this.objLoader.present();
        /*setTimeout(() => {
          this.nav.push(Page2);
        }, 1000);*/
        /*setTimeout(() => {
          loading.dismiss();
        }, 50000);*/
    };
    LoaderView.prototype.dismissLoader = function () {
        this.objLoader.dismiss();
    };
    return LoaderView;
}());
LoaderView = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoaderView);

//# sourceMappingURL=loaderview.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';

//import { Platform } from 'ionic-angular';
//import { InAppBrowser, SpinnerDialog } from 'ionic-native';





/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(navCtrl, globalVars, connectServer, 
        //private platform : Platform,
        loaderView) {
        this.navCtrl = navCtrl;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", Password: "", usertype: "" };
        this.showLogin = false;
        this.message = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.showLoginpage();
    };
    LoginPage.prototype.showLoginpage = function () {
        this.session_signin();
        this.showLogin = true;
    };
    LoginPage.prototype.session_signin = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                //console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                _this.connectServer.session(objdataSession).then(function (response) {
                    if (response != null) {
                        //console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { userData: response });
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.message = "";
        if (this.userData.Username.length == 0 || this.userData.Password.length == 0) {
            this.message = "Please enter Both Username and Password";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.Username))) {
            this.message = "Please enter a proper email";
        }
        else {
            this.loaderView.showLoader('Verifying Details ...');
            this.message = "Verifying Details. Please Wait ...";
            this.connectServer.login(this.userData).then(function (response) {
                _this.message = "";
                _this.loaderView.dismissLoader();
                //console.log(response);
                if (response != null) {
                    if (response['response'][0]['success'] == "0") {
                        _this.message = response['response'][1]['message'];
                    }
                    else if (response['response'][0]['success'] == "1") {
                        _this.globalVars.set_session(response['response'][2]['username'], response['response'][3]['sessionkey'], response['response'][4]['usertype']);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { userData: response });
                        _this.message = response['response'][1]['message'];
                    }
                    else {
                        _this.message = "Couldnt Connect to the server";
                    }
                }
                else {
                    _this.message = "Couldnt Connect to the server";
                }
            });
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */], {});
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar>\n    <ion-title>Food Donate</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n	<ion-list no-lines>\n      <ion-item text-center>\n        <ion-icon>\n          <img src="images/Food Donate.jpg"/>\n        </ion-icon>\n      </ion-item>\n	</ion-list>\n	<ion-list no-lines *ngIf=showLogin>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" value="" [(ngModel)]="userData.Username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" value="" [(ngModel)]="userData.Password"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <button ion-button color="primary" block (click)="signin()">Sign In</button>\n      </ion-item>\n      <ion-item text-center *ngIf=message>\n        <p style="color:#FF0000;" ><strong>{{message}}</strong></p>\n      </ion-item>\n	  \n		  <ion-item text-center>\n			<p style="color:black;" ><strong>Not a user?</strong></p>\n		  </ion-item>\n\n		  <ion-item>\n			<button ion-button color="primary" block (click)="register()">Register</button>\n		  </ion-item>\n	  \n	</ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loaderview__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, connectServer, loaderView, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.toastCtrl = toastCtrl;
        this.userData = { Username: "", Password: "", usertype: "0", name: "", phone_num: "" };
        this.message = "";
        this.showRegister = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.showRegisterpage();
    };
    RegisterPage.prototype.showRegisterpage = function () {
        this.showRegister = true;
    };
    RegisterPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.message = "";
        if (this.userData.name.length == 0) {
            this.message = "Name cannot be empty!";
            return;
        }
        else if (!(/^[a-zA-Z\s]*$/.test(this.userData.name))) {
            this.message = "Please enter a valid Name";
            return;
        }
        else if (this.userData.Username.length == 0) {
            this.message = "Email Address cannot be empty!";
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.Username))) {
            this.message = "Please enter a valid Email Address!";
            return;
        }
        else if (this.userData.phone_num.length == 0) {
            this.message = "Phone Number cannot be empty!";
            return;
        }
        else if (!/^[0-9]{10}$/.test(this.userData.phone_num)) {
            this.message = "Please enter a valid 10 digit Phone Number!";
            return;
        }
        else if (this.userData.Password.length == 0) {
            this.message = "Password cannot be empty!";
            return;
        }
        else if (this.userData.Password.length < 8) {
            this.message = "Password should be atleast 8 characters long!";
            return;
        }
        else if (this.userData.ReEnterPassword != this.userData.Password) {
            this.message = "Passwords do not match. Please enter password again.";
            this.userData.Password = "";
            this.userData.ReEnterPassword = "";
            return;
        }
        else {
            this.loaderView.showLoader('Verifying Details ...');
            this.message = "Verifying Details. Please Wait ...";
            this.connectServer.getData("Register", this.userData).then(function (response) {
                _this.message = "";
                _this.loaderView.dismissLoader();
                console.log(response);
                if (response != null) {
                    if (response['response'][0]['success'] == "0") {
                        _this.message = response['response'][1]['message'];
                    }
                    else if (response['response'][0]['success'] == "1") {
                        var toast = _this.toastCtrl.create({
                            message: response['response'][1]['message'],
                            duration: 3000
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { userData: response });
                    }
                    else {
                        _this.message = "Couldnt Connect to the server";
                    }
                }
                else {
                    _this.message = "Couldnt Connect to the server";
                }
            });
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\register\register.html"*/'<!--\n  Generated template for the TripsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar>\n    <ion-title>Food Donate</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n  <ion-title>New User Registeration</ion-title>\n  <ion-list no-lines *ngIf=showRegister>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.Username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input type="tel" value="" [(ngModel)]="userData.phone_num"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Type of User</ion-label>\n      <ion-select [(ngModel)]="userData.usertype">\n        <ion-option value="0">Donor</ion-option>\n        <ion-option value="1">Receiver</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" value="" [(ngModel)]="userData.Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Re-Enter Password</ion-label>\n      <ion-input type="password" value="" [(ngModel)]="userData.ReEnterPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button color="primary" block (click)="register()">Register</button>\n    </ion-item>\n\n    <ion-item text-center *ngIf=message>\n      <p style="color:#FF0000;"><strong>{{message}}</strong></p>\n    </ion-item>\n    \n    <ion-item text-center>\n      <p style="color:black;"><strong>Already a user?</strong></p>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button color="primary" block (click)="signin()">Signin</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loaderview__["a" /* LoaderView */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_donation_donation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viewdonation_viewdonation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_donationrequest_donationrequest__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_viewdonationrequest_viewdonationrequest__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_viewvolunteer_viewvolunteer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_volunteer_volunteer__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ViewDonationDetails_ViewDonationDetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ViewDonationRequestDetails_ViewDonationRequestDetails__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ViewVolunteerDetails_ViewVolunteerDetails__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_loaderview__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { Component } from '@angular/core';
//import { Camera } from '@ionic-native/camera';
//import { File } from '@ionic-native/file';
//import { Transfer } from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path';
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_donation_donation__["a" /* DonationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_viewdonation_viewdonation__["a" /* ViewdonationPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_donationrequest_donationrequest__["a" /* DonationrequestPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_viewdonationrequest_viewdonationrequest__["a" /* ViewdonationrequestPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_viewvolunteer_viewvolunteer__["a" /* ViewvolunteerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_volunteer_volunteer__["a" /* VolunteerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_ViewDonationDetails_ViewDonationDetails__["a" /* ViewDonationDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_ViewDonationRequestDetails_ViewDonationRequestDetails__["a" /* ViewDonationRequestDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ViewVolunteerDetails_ViewVolunteerDetails__["a" /* ViewVolunteerDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_donation_donation__["a" /* DonationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_viewdonation_viewdonation__["a" /* ViewdonationPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_donationrequest_donationrequest__["a" /* DonationrequestPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_viewdonationrequest_viewdonationrequest__["a" /* ViewdonationrequestPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_viewvolunteer_viewvolunteer__["a" /* ViewvolunteerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_volunteer_volunteer__["a" /* VolunteerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_ViewDonationDetails_ViewDonationDetails__["a" /* ViewDonationDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_ViewDonationRequestDetails_ViewDonationRequestDetails__["a" /* ViewDonationRequestDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ViewVolunteerDetails_ViewVolunteerDetails__["a" /* ViewVolunteerDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_21__providers_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_22__providers_connectserver__["a" /* ConnectServer */],
            __WEBPACK_IMPORTED_MODULE_23__providers_loaderview__["a" /* LoaderView */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_donation_donation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viewdonation_viewdonation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_donationrequest_donationrequest__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viewdonationrequest_viewdonationrequest__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_viewvolunteer_viewvolunteer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_volunteer_volunteer__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ViewDonationDetails_ViewDonationDetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ViewDonationRequestDetails_ViewDonationRequestDetails__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ViewVolunteerDetails_ViewVolunteerDetails__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_globalvars__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(platform, menu, globalVars, statusBar, push, splashScreen, alertCtrl, connectServer) {
        this.platform = platform;
        this.menu = menu;
        this.globalVars = globalVars;
        this.statusBar = statusBar;
        this.push = push;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.connectServer = connectServer;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Donation', component: __WEBPACK_IMPORTED_MODULE_7__pages_donation_donation__["a" /* DonationPage */] },
            { title: 'Viewdonation', component: __WEBPACK_IMPORTED_MODULE_8__pages_viewdonation_viewdonation__["a" /* ViewdonationPage */] },
            { title: 'Donationrequest', component: __WEBPACK_IMPORTED_MODULE_9__pages_donationrequest_donationrequest__["a" /* DonationrequestPage */] },
            { title: 'Viewdonationrequest', component: __WEBPACK_IMPORTED_MODULE_10__pages_viewdonationrequest_viewdonationrequest__["a" /* ViewdonationrequestPage */] },
            { title: 'Volunteer', component: __WEBPACK_IMPORTED_MODULE_12__pages_volunteer_volunteer__["a" /* VolunteerPage */] },
            { title: 'Viewvolunteer', component: __WEBPACK_IMPORTED_MODULE_11__pages_viewvolunteer_viewvolunteer__["a" /* ViewvolunteerPage */] },
            { title: 'ViewDonationDetails', component: __WEBPACK_IMPORTED_MODULE_13__pages_ViewDonationDetails_ViewDonationDetails__["a" /* ViewDonationDetailsPage */] },
            { title: 'ViewDonationRequestDetails', component: __WEBPACK_IMPORTED_MODULE_14__pages_ViewDonationRequestDetails_ViewDonationRequestDetails__["a" /* ViewDonationRequestDetailsPage */] },
            { title: 'ViewVolunteerDetailsPage', component: __WEBPACK_IMPORTED_MODULE_15__pages_ViewVolunteerDetails_ViewVolunteerDetails__["a" /* ViewVolunteerDetailsPage */] }
            /*,
             { title: 'Settings', component: SettingsPage },
             { title: 'About', component: AboutPage}*/
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //this.initPushNotification();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_17__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_16__providers_connectserver__["a" /* ConnectServer */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__donation_donation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewdonation_viewdonation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__donationrequest_donationrequest__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewdonationrequest_viewdonationrequest__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__volunteer_volunteer__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewvolunteer_viewvolunteer__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform, LoadingController } from 'ionic-angular';











/*
  Generated class for the DashboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, globalVars, connectServer, loaderView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.connectServer = connectServer;
        this.loaderView = loaderView;
        this.userData = { Username: "", sessionkey: "", usertype: "" };
        this.message = "";
    }
    ;
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.message = this.navParams.get("userData")['response'][1]['message'];
        this.userData.Username = this.navParams.get("userData")['response'][2]['username'];
        this.userData.sessionkey = this.navParams.get("userData")['response'][3]['sessionkey'];
        this.userData.usertype = this.navParams.get("userData")['response'][4]['usertype'];
    };
    DashboardPage.prototype.logout = function () {
        var _this = this;
        this.globalVars.get_usersession().then(function (value) {
            if (value != null && value.hasOwnProperty('USER_NAME') && value.hasOwnProperty('SESSION_KEY') && value.hasOwnProperty('USER_TYPE')) {
                //console.log(value);
                //this.globalVars.setUserDetails(value.USER_NAME, value.SESSION_KEY);
                var objdataSession = [];
                objdataSession['Username'] = value.USER_NAME;
                objdataSession['sessionkey'] = value.SESSION_KEY;
                objdataSession['usertype'] = value.USER_TYPE;
                _this.connectServer.logout(objdataSession).then(function (response) {
                    if (response != null) {
                        //console.log(response);
                        if (response['response'][0]['success'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            _this.message = response['response'][1]['message'];
                        }
                    }
                });
            }
        });
    };
    DashboardPage.prototype.donate = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__donation_donation__["a" /* DonationPage */]); };
    DashboardPage.prototype.viewdonations = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__viewdonation_viewdonation__["a" /* ViewdonationPage */]); };
    DashboardPage.prototype.donationrequest = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__donationrequest_donationrequest__["a" /* DonationrequestPage */]); };
    DashboardPage.prototype.viewdonationrequest = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewdonationrequest_viewdonationrequest__["a" /* ViewdonationrequestPage */]); };
    DashboardPage.prototype.volunteer = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__volunteer_volunteer__["a" /* VolunteerPage */]); };
    DashboardPage.prototype.viewvolunteers = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__viewvolunteer_viewvolunteer__["a" /* ViewvolunteerPage */]); };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n     <!--<ion-buttons start><button menuToggle><ion-icon name="menu"></ion-icon></button></ion-buttons>-->\n	<ion-buttons end><button (click)="logout()"><ion-icon name="log-out"></ion-icon></button></ion-buttons>\n	\n    <ion-title>Dashboard</ion-title>\n    </ion-navbar>\n	\n</ion-header>\n\n \n<ion-content padding>\n	  <ion-item *ngIf="userData.usertype ==\'0\' ">\n      <button ion-button color="primary" block (click)="donate()">Donate</button>\n      </ion-item>\n\n	  <ion-item *ngIf="userData.usertype ==\'0\' ">\n      <button ion-button color="primary" block (click)="viewdonationrequest()">View Donation Requests</button>\n      </ion-item>\n	  \n	  <ion-item *ngIf="userData.usertype ==\'0\' ">\n      <button ion-button color="primary" block (click)="volunteer()">Volunteer</button>\n      </ion-item>\n\n	  <ion-item *ngIf="userData.usertype ==\'1\' ">\n      <button ion-button color="primary" block (click)="donationrequest()">Donation Request</button>\n      </ion-item>\n	  \n	  <ion-item *ngIf="userData.usertype ==\'1\' ">\n      <button ion-button color="primary" block (click)="viewdonations()">View Donations</button>\n      </ion-item>\n	  \n	  	  <ion-item *ngIf="userData.usertype ==\'1\' ">\n      <button ion-button color="primary" block (click)="viewvolunteers()">View Volunteers</button>\n      </ion-item>\n\n      <ion-item text-center *ngIf=message>\n        <p style="color:#FF0000;" ><strong>{{message}}</strong></p>\n      </ion-item>  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viken\Desktop\Asu Sem 2\Cloud computing\Cloud Project2\Cloud Computing 2 Ionic\src\pages\dashboard\dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connectserver__["a" /* ConnectServer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loaderview__["a" /* LoaderView */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map