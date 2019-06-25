(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");

/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Anonymous Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    Welcome user\n    <p>Here are your profile details</p>\n\n    <ion-item *ngIf=\"user\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"user.photoURL\">\n      </ion-thumbnail>\n      <ion-label text-wrap>\n        <ion-text color=\"primary\">\n          <h3>{{user.displayName}}</h3>\n        </ion-text>\n        <p>{{user.email}}</p>\n      </ion-label>\n    </ion-item>\n  </div>\n  <ion-list-header color=\"medium\">\n    Update Profile\n  </ion-list-header>\n  <ion-item>\n    <ion-label position=\"fixed\">Username</ion-label>\n    <ion-input type=\"string\" placeholder=\"Enter new\" [(ngModel)]=\"username\"></ion-input>\n    <ion-button slot=\"end\" color=\"success\" expand=\"full\" (click)=\"updateUsername()\">Update</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"fixed\">Image</ion-label>\n    <ion-input type=\"number\" placeholder=\"A number 1-1000\" [(ngModel)]=\"image\"></ion-input>\n    <ion-button slot=\"end\" color=\"success\" expand=\"full\" (click)=\"updateImage()\">Update</ion-button>\n  </ion-item>\n  <ion-list-header color=\"medium\">\n    Sensitive Updates\n  </ion-list-header>\n  <ion-item>\n    <ion-label position=\"fixed\">Email</ion-label>\n    <ion-input type=\"string\" placeholder=\"Enter new\" [(ngModel)]=\"email\"></ion-input>\n    <ion-button slot=\"end\" color=\"success\" expand=\"full\" (click)=\"updateEmail()\">Update</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"fixed\">Password</ion-label>\n    <ion-input type=\"string\" placeholder=\"Enter new\" [(ngModel)]=\"password\"></ion-input>\n    <ion-button slot=\"end\" color=\"success\" expand=\"full\" (click)=\"updatePassword()\">Update</ion-button>\n  </ion-item>\n  <ion-row>\n    <ion-col>\n      <ion-text class=\"error\" text-center>{{error}}</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <!-- \n  <ion-row>\n    <ion-col>\n      <ion-button *ngIf=\"userWantsToSignup\" expand=\"block\" (click)=\"signup()\" color=\"undefined\" class=\"transition\">\n        <strong class=\"white\">\n          Sign Up</strong></ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button *ngIf=\"!userWantsToSignup\" expand=\"block\" (click)=\"wantsToSignup()\" color=\"undefined\"\n        class=\"transition\"><strong class=\"white\">I want to\n          Sign Up</strong></ion-button>\n    </ion-col>\n  </ion-row> -->\n  <ion-row>\n    <ion-col>\n      <ion-text class=\"error\" text-center>{{linkError}}</ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer class=\"transition\">\n  <ion-toolbar color=\"undefined\" (click)=\"logout()\">\n    <ion-title>\n      Logout\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transition {\n  background: -webkit-gradient(linear, left top, right top, color-stop(14%, #f57c00), color-stop(96%, #ffca00));\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n  color: \"white\"; }\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2FkZW15X2ludGVybi9EZXNrdG9wL2lvbmljLTQtZmlyZWJhc2UtYXV0aC1tYXN0ZXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkdBQStEO0VBQS9ELCtEQUErRDtFQUMvRCxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zaXRpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNTdjMDAgMTQlLCAjZmZjYTAwIDk2JSk7XG4gIGNvbG9yOiBcIndoaXRlXCI7XG59XG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/




var HomePage = /** @class */ (function () {
    function HomePage(toastController, loadingController, fireauth, router) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.fireauth = fireauth;
        this.router = router;
        this.email = '';
        this.password = '';
        this.username = '';
        this.userWantsToSignup = false;
        this.linkError = '';
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.fireauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.user = user;
                console.log(_this.user);
            }
        });
    };
    HomePage.prototype.updateEmail = function () {
        var _this = this;
        this.user.updateEmail(this.email)
            .then(function () {
            _this.email = '';
            _this.presentToast('Email updated', false, 'bottom', 1000);
            _this.error = '';
        })
            .catch(function (err) {
            console.log(" failed " + err);
            _this.error = err.message;
        });
    };
    HomePage.prototype.updateUsername = function () {
        var _this = this;
        this.user.updateProfile({
            displayName: this.username
        })
            .then(function (data) {
            console.log(data);
            _this.username = '';
            _this.presentToast('Username updated', false, 'bottom', 1000);
            _this.error = '';
        })
            .catch(function (err) {
            console.log(" failed " + err);
            _this.error = err.message;
        });
    };
    HomePage.prototype.updateImage = function () {
        var _this = this;
        this.user.updateProfile({
            photoURL: "https://picsum.photos/id/" + this.image + "/200/200"
        })
            .then(function (data) {
            console.log(data);
            _this.image = null;
            _this.presentToast('Image updated', false, 'bottom', 1000);
            _this.error = '';
        })
            .catch(function (err) {
            console.log(" failed " + err);
            _this.error = err.message;
        });
    };
    HomePage.prototype.updatePassword = function () {
        var _this = this;
        this.user.updatePassword(this.password)
            .then(function () {
            _this.password = '';
            _this.presentToast('Password updated', false, 'bottom', 1000);
            _this.error = '';
        })
            .catch(function (err) {
            console.log(" failed " + err);
            _this.error = err.message;
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.fireauth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    HomePage.prototype.presentToast = function (message, show_button, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            showCloseButton: show_button,
                            position: position,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map