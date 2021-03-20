(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chan\Desktop\SGUNITED FULL STACK DEV\MVCcore\CustomerApp\AngularClientCode\CustomerClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserComponent {
    constructor(routeObj) {
        this.routeObj = routeObj;
    }
    ngOnInit() {
        //if user is login, redirect him to home page instead of login page again
        if (localStorage.getItem('token') != null) {
            this.routeObj.navigateByUrl('/home');
        }
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 8, vars: 0, consts: [[1, "center"], ["role", "button", "routerLink", "/user/login", "routerLinkActive", "active", 1, "btn", "btn-dark"], ["role", "button", "routerLink", "/user/registration", "routerLinkActive", "active", 1, "btn", "btn-dark"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  width: 10em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgd2lkdGg6IDEwZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.model */ "KCEv");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Common/Common.Global */ "jlRj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");

 //* means import all, it is old js framework





function RegistrationComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r0.userObj.formGroup.controls["firstNameControl"].hasError("required"));
} }
function RegistrationComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name should be of length 3 to 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r1.userObj.formGroup.controls["firstNameControl"].hasError("pattern"));
} }
function RegistrationComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r2.userObj.formGroup.controls["lastNameControl"].hasError("required"));
} }
function RegistrationComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Last Name should be of length 3 to 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r3.userObj.formGroup.controls["lastNameControl"].hasError("pattern"));
} }
function RegistrationComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r4.userObj.formGroup.controls["userNameControl"].hasError("required"));
} }
function RegistrationComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User Name should be of length 3 to 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r5.userObj.formGroup.controls["userNameControl"].hasError("pattern"));
} }
function RegistrationComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r6.userObj.formGroup.controls["passwordControl"].hasError("required"));
} }
function RegistrationComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r7.userObj.formGroup.controls["emailControl"].hasError("required"));
} }
class RegistrationComponent {
    constructor(httpObj, globalObj) {
        this.httpObj = httpObj;
        this.globalObj = globalObj;
        this.userObj = new _app_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.errorList = new Array(); //collection
        this.succeeded = "";
    }
    ngOnInit() {
    }
    RegistertoServer() {
        var userDto = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](this.userObj, ['formGroup']);
        var observable = this.httpObj
            .post(this.globalObj.registerUrl, userDto);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    SuccessObserver(res) {
        if (res.Succeeded) {
            this.userObj.formGroup.reset();
        }
        // this.userObj = new User();
    }
    ErrorObserver(res) {
        // for (let i = 0; i < res.errors.length; i++) {
        //   this.errorList.push(res.errors[i])
        //}
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_4__["Global"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 36, vars: 15, consts: [[1, "center"], [3, "formGroup"], [1, "wrapper"], ["formControlName", "firstNameControl", "type", "text", 3, "ngModel", "ngModelChange"], ["class", "errorMessage", 3, "hidden", 4, "ngIf"], ["formControlName", "lastNameControl", "type", "text", 3, "ngModel", "ngModelChange"], ["formControlName", "userNameControl", "type", "text", 3, "ngModel", "ngModelChange"], ["formControlName", "passwordControl", "type", "text", 3, "ngModel", "ngModelChange"], ["formControlName", "emailControl", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Register", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "errorMessage", 3, "hidden"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "First Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userObj.FirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegistrationComponent_p_9_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RegistrationComponent_p_10_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Last Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.userObj.LastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegistrationComponent_p_15_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegistrationComponent_p_16_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "User Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_20_listener($event) { return ctx.userObj.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RegistrationComponent_p_21_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RegistrationComponent_p_22_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_26_listener($event) { return ctx.userObj.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegistrationComponent_p_27_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_31_listener($event) { return ctx.userObj.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegistrationComponent_p_32_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistrationComponent_Template_input_click_35_listener() { return ctx.RegistertoServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userObj.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userObj.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["firstNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["firstNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userObj.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["lastNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["lastNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userObj.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["userNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["userNameControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userObj.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["passwordControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userObj.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userObj.formGroup.controls["emailControl"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.userObj.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\r\n   background: rgba(255, 238, 238, 0.7);\r\n   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);\r\n   padding: 20px;\r\n }\r\n\r\n div.wrapper[_ngcontent-%COMP%] {\r\n   display: grid;\r\n   grid-template-columns: 1fr 4fr;\r\n   grid-gap: 10px;\r\n }\r\n\r\n div.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n   text-align: center;\r\n   color: black;\r\n   \r\n }\r\n\r\n div.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n   width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0dBQ0Usb0NBQW9DO0dBQ3BDLHlDQUF5QztHQUN6QyxhQUFhO0NBQ2Y7O0NBRUE7R0FDRSxhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLGNBQWM7Q0FDaEI7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaOztrQkFFZTtDQUNqQjs7Q0FFQTtHQUNFLFdBQVc7Q0FDYjs7Q0FFQTs7S0FFSTs7Q0FFSjs7Ozs7R0FLRSIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBmb3JtIHtcclxuICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzOCwgMjM4LCAwLjcpO1xyXG4gICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgcGFkZGluZzogMjBweDtcclxuIH1cclxuXHJcbiBkaXYud3JhcHBlciB7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiB9XHJcblxyXG4gZGl2LndyYXBwZXIgbGFiZWwge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcclxuICAgICAgICNmZjUxMmYsXHJcbiAgICAgICAjZGQyNDc2KTsgKi9cclxuIH1cclxuXHJcbiBkaXYud3JhcHBlciBpbnB1dCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuIC8qIC5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9DdXN0b21lckNsaWVudEFwcC9hc3NldHMvY3AxLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcjtcclxuICB9ICovXHJcblxyXG4gLyogdGFibGUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogLS1Mb2JzdGVyO1xyXG59ICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "9FAt":
/*!************************************!*\
  !*** ./src/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 0, consts: [[1, "bg"], [1, "container", "text-center"], [1, "row"], [1, "col-md-7", "col-sm-12"], [1, "col-md-5", "col-sm-12"], ["src", "CustomerClientApp/assets/cp1.jpg", "alt", "cp1"], [1, "center"], ["src", "CustomerClientApp/assets/cp3.jpg", "alt", "cp3"], [1, "container", "mt-4"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide", "shadow"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, ""], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2", 1, ""], [1, "carousel-inner"], [1, "carousel-item"], ["src", "CustomerClientApp/assets/cp3.jpg", "alt", "cp3", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "CustomerClientApp/assets/cp5.jpg", "alt", "cp5", 1, "d-block", "w-100"], [1, "carousel-item", "active"], ["src", "CustomerClientApp/assets/cp7.jpg", "alt", "cp7", 1, "d-block", "w-100"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contonso University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Student Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sea otters hold hands when they sleep so they don't drift away from each other.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ol", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Welcome to Contoso University!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Staying safe and well in the Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mesage from the University Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n    border: 3px solid whitesmoke;\n    width: 120%;\n    margin-left: -10em;\n    margin-top: 3em;\n}\n\n  .row[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%] {\n    padding: 22vmin 1vmin;\n    padding-bottom: 15vmin;\n    font-family: var(--Rubik);\n    color: white;\n    \n}\n\n.container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    padding: 1vmin;\n    letter-spacing: 4px;\n    background-color:black;\n    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);\n}\n\n.container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 5vmin;\n    font-weight: bold;\n    padding: 2vmin 2vmin;\n    background-color:black;\n    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);\n}\n\n.container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 1vmin 5vmin;\n    background-color:black;\n    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);\n}\n.bg[_ngcontent-%COMP%] {\n  background: url('CustomerClientApp/assets/cp9.jpg') no-repeat center / cover;\n\n}\n\nfigure[_ngcontent-%COMP%]{\n  width:50%;\n  justify-self:center;\n}"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DATN":
/*!**********************************************************!*\
  !*** ./src/instructor-list/instructor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: InstructorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorListComponent", function() { return InstructorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InstructorListComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructorListComponent.ɵfac = function InstructorListComponent_Factory(t) { return new (t || InstructorListComponent)(); };
InstructorListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorListComponent, selectors: [["app-instructor-list"]], decls: 28, vars: 0, consts: [[1, "bg"], ["id", "content"], [2, "background-image", "url('/CustomerClientApp/assets/avatar1.jfif')"], [2, "background-image", "url('/CustomerClientApp/assets/avatar2.jfif')"], [2, "background-image", "url('/CustomerClientApp/assets/avatar3.jfif')"], [2, "background-image", "url('/CustomerClientApp/assets/avatar4.jfif')"]], template: function InstructorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Philosophy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skydiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod illum unde officiis consectetur consequatur nihil quae sed accusantium minima corrupti amet, reprehenderit repellat. Ducimus unde quidem accusantium odio doloribus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod illum unde officiis consectetur consequatur nihil quae sed accusantium minima corrupti amet, reprehenderit repellat. Ducimus unde quidem accusantium odio doloribus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod illum unde officiis consectetur consequatur nihil quae sed accusantium minima corrupti amet, reprehenderit repellat. Ducimus unde quidem accusantium odio doloribus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod illum unde officiis consectetur consequatur nihil quae sed accusantium minima corrupti amet, reprehenderit repellat. Ducimus unde quidem accusantium odio doloribus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  \r\n  \r\n  \r\n\r\n  \r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-auto-rows: minmax(200px, auto);\r\n  grid-gap: 10px;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  \r\n  \r\n\r\n  grid-template-areas:\r\n    \"main main main main\"\r\n    \"section section section section\"\r\n    \"section section section section\"\r\n    \"section section section section\"\r\n\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  #content[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    \r\n    \r\n    \r\n\r\n    \r\n    grid-template-columns: repeat(4, 1fr);\r\n    \r\n    grid-gap: 10px;\r\n    max-width: 960px;\r\n    margin: 0 auto;\r\n    \r\n    \r\n\r\n    \r\n\r\n    grid-template-areas:\r\n      \"main main main main\"\r\n      \"section section section section\"\r\n      \"section section section section\"\r\n      \"section section section section\"\r\n  }\r\n}\r\n\r\n\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  grid-area: main;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n\r\n  grid-gap: 20px;\r\n  align-self: center;\r\n\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  main[_ngcontent-%COMP%] {\r\n    grid-area: main;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n\r\n    grid-gap: 20px;\r\n    align-self: center;\r\n\r\n  }\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border: 1px solid #2e2c2caf;\r\n  padding: 20px;\r\n  margin: 0px;\r\n  \r\n  background: rgba(255, 238, 238, 0.7);\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);\r\n  align-self: center;\r\n  text-align: center;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  grid-area: section;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  grid-gap: 20px;\r\n\r\n}\r\n\r\n@media screen and (min-width: 760px) {\r\n  section[_ngcontent-%COMP%] {\r\n    grid-area: section;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  section[_ngcontent-%COMP%] {\r\n    grid-area: section;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n\r\n    grid-gap: 20px;\r\n  }\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  \r\n  padding: 20px;\r\n  margin: 0px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 8fr 2fr;\r\n  grid-gap: 10px;\r\n  \r\n  \r\n  background: rgba(255, 238, 238, 0.7);\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);\r\n\r\n}\r\n\r\n@media screen and (min-width: 960px) {\r\n  section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    \r\n    padding: 20px;\r\n    margin: 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr;\r\n    grid-gap: 10px;\r\n    \r\n    \r\n\r\n  }\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border: 1px solid #2e2c2caf;\r\n  background-size: cover;\r\n  background-position: center;\r\n  \r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  grid-area: aside;\r\n}\r\n\r\narticle[_ngcontent-%COMP%] {\r\n  grid-area: article;\r\n}\r\n\r\nsummary[_ngcontent-%COMP%] {\r\n  grid-area: summary;\r\n}\r\n\r\n\r\n\r\n#content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n  \r\n  color: black;\r\n  font: --Lobster;\r\n  padding: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bg[_ngcontent-%COMP%] {\r\n  background: url('/CustomerClientApp/assets/cp8.jpg') no-repeat center / cover;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0b3ItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyx3Q0FBd0M7RUFDeEM7MkNBQ3lDOztFQUV6QywyRkFBMkY7RUFDM0YscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDtvQkFDa0I7RUFDbEIsOEJBQThCOztFQUU5Qjs7Ozs7O0FBTUY7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDOzJDQUN1Qzs7SUFFdkMsMkZBQTJGO0lBQzNGLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Q7b0JBQ2dCO0lBQ2hCLDhCQUE4Qjs7SUFFOUI7Ozs7eUNBSXFDOztJQUVyQzs7Ozs7RUFLRjtBQUNGOztBQUdBLFlBQVk7O0FBQ1o7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFDQUFxQzs7RUFFckMsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IscUNBQXFDOztJQUVyQyxjQUFjO0lBQ2Qsa0JBQWtCOztFQUVwQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFDQUFxQzs7SUFFckMsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFDQUFxQzs7SUFFckMsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLHlDQUF5Qzs7QUFFM0M7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsMEJBQTBCOztFQUU1QjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0I7eUJBQ3VCO0FBQ3pCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBLG1EQUFtRDs7QUFDbkQ7RUFDRTs7MEJBRXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBOztHQUVHOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHOztBQUVIO0VBQ0UsNkVBQTZFOztBQUUvRSIsImZpbGUiOiJpbnN0cnVjdG9yLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMjAlIDUwJTsgKi9cclxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyOyAqL1xyXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyMDBweCk7ICovXHJcblxyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDIwMHB4LCBhdXRvKSk7IHRoaXMgbWVhbnMgMjAwcHggaXMgbWluLCBhdXRvIGlzIG1heCovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDIwMHB4LCBhdXRvKTtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7ICovXHJcbiAgLyogdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSAqL1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJtYWluIG1haW4gbWFpbiBtYWluXCJcclxuICAgIFwic2VjdGlvbiBzZWN0aW9uIHNlY3Rpb24gc2VjdGlvblwiXHJcbiAgICBcInNlY3Rpb24gc2VjdGlvbiBzZWN0aW9uIHNlY3Rpb25cIlxyXG4gICAgXCJzZWN0aW9uIHNlY3Rpb24gc2VjdGlvbiBzZWN0aW9uXCJcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDIwJSA1MCU7ICovXHJcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyOyAqL1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDIwMHB4KTsgKi9cclxuXHJcbiAgICAvKmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgyMDBweCwgYXV0bykpOyB0aGlzIG1lYW5zIDIwMHB4IGlzIG1pbiwgYXV0byBpcyBtYXgqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIC8qIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjAwcHgsIGF1dG8pOyAqL1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSAqL1xyXG5cclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwibWFpbiBtYWluIG1haW4gbWFpblwiXHJcbiAgICAgIFwiYXNpZGUgc2VjdGlvbiBzZWN0aW9uIHNlY3Rpb25cIlxyXG4gICAgICBcImFzaWRlIGFydGljbGUgYXJ0aWNsZSBhcnRpY2xlXCJcclxuICAgICAgXCJzdW1tYXJ5IHN1bW1hcnkgc3VtbWFyeSBzdW1tYXJ5XCIgKi9cclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcIm1haW4gbWFpbiBtYWluIG1haW5cIlxyXG4gICAgICBcInNlY3Rpb24gc2VjdGlvbiBzZWN0aW9uIHNlY3Rpb25cIlxyXG4gICAgICBcInNlY3Rpb24gc2VjdGlvbiBzZWN0aW9uIHNlY3Rpb25cIlxyXG4gICAgICBcInNlY3Rpb24gc2VjdGlvbiBzZWN0aW9uIHNlY3Rpb25cIlxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qZ3JpZCBhcmVhKi9cclxubWFpbiB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbm1haW4gaDIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZTJjMmNhZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC8qIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzgsIDIzOCwgMC43KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBncmlkLWFyZWE6IHNlY3Rpb247XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGdyaWQtYXJlYTogc2VjdGlvbjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGdyaWQtYXJlYTogc2VjdGlvbjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbiBkaXYge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cclxuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM4LCAyMzgsIDAuNyk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gIHNlY3Rpb24gZGl2IHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xyXG4gICAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7ICovXHJcblxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbiBkaXYgZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmUyYzJjYWY7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLyogYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xyXG59XHJcblxyXG5cclxuYXNpZGUge1xyXG4gIGdyaWQtYXJlYTogYXNpZGU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGdyaWQtYXJlYTogYXJ0aWNsZTtcclxufVxyXG5cclxuc3VtbWFyeSB7XHJcbiAgZ3JpZC1hcmVhOiBzdW1tYXJ5O1xyXG59XHJcblxyXG5cclxuLyogPiogaXMgc2VsZWN0IGFsbCBjaGlsZD8gaW5zdGVhZCBvZiAjY29udGVudCBkaXYqL1xyXG4jY29udGVudD4qIHtcclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250OiAtLUxvYnN0ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLyogI2NvbnRlbnQgZGl2Om50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufSAqL1xyXG5cclxuLyogLm9uZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxufVxyXG5cclxuLnR3byB7XHJcbiAgZ3JpZC1jb2x1bW46IDMvNTtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBncmlkLWNvbHVtbjogMS80O1xyXG4gIGdyaWQtcm93OiAyLzQ7XHJcbn1cclxuXHJcbi5mb3VyIHtcclxuICBncmlkLWNvbHVtbjogNC83O1xyXG4gIGdyaWQtcm93OiAyLzQ7XHJcbn1cclxuXHJcbi5uZXN0ZWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubmVzdGVkIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDBweDtcclxufSAqL1xyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9DdXN0b21lckNsaWVudEFwcC9hc3NldHMvY3A4LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "KCEv":
/*!******************************!*\
  !*** ./src/app/app.model.ts ***!
  \******************************/
/*! exports provided: Customer, Product, Course, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

class Customer {
    constructor() {
        this.id = 0;
        this.customerName = "";
        this.address = "";
        //1 to many relationship
        this.products = new Array();
        //many to many relationship
        this.courses = new Array();
        //step 3 use builder to create empty hierachy
        var _builder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.formGroup = _builder.group({});
        //step 4 add required validation on customer name
        this.formGroup.addControl("addressControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
        var validationcollection = [];
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z]{3,10}$"));
        this.formGroup.addControl("customerNameControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validationcollection)));
    }
}
class Product {
    constructor() {
        this.id = 0;
        this.name = "";
    }
}
class Course {
    constructor() {
        this.id = 0;
        this.courseName = "";
        //many to many relationship
        this.customers = new Array();
        //step 3 use builder to create empty hierachy
        var _builder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.formGroup = _builder.group({});
        //step 4 add required validation on customer name
        // this.formGroup.addControl("addressControl", new FormControl('', Validators.required));
        var validationcollection = [];
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z]{3,10}$"));
        this.formGroup.addControl("courseNameControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validationcollection)));
    }
}
class User {
    constructor() {
        //id: number = 0;
        this.FirstName = "";
        this.LastName = "";
        this.UserName = "";
        this.Email = "";
        this.Password = "";
        //step 3 use builder to create empty hierachy
        var _builder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.formGroup = _builder.group({});
        //step 4 add required validation on customer name
        // this.formGroup.addControl("addressControl", new FormControl('', Validators.required));
        var validationcollection = [];
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        validationcollection.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z]{3,10}$"));
        this.formGroup.addControl("firstNameControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validationcollection)));
        this.formGroup.addControl("lastNameControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validationcollection)));
        this.formGroup.addControl("userNameControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validationcollection)));
        this.formGroup.addControl("emailControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.formGroup.addControl("passwordControl", new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
    }
}


/***/ }),

/***/ "Nzz7":
/*!****************************************!*\
  !*** ./src/header/header.component.ts ***!
  \****************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.model */ "KCEv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Common/Common.Global */ "jlRj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor(routerObj, global, http) {
        this.routerObj = routerObj;
        this.global = global;
        this.http = http;
        // Define a variable to use for showing/hiding the Login button
        this.isUserLoggedIn = false;
        this.user = new src_app_app_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.navbarCollapsed = true;
        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.global.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
        this.global.userActive.subscribe(value => {
            this.user = value;
        });
    }
    ngOnInit() {
        if (this.global.CheckToken()) {
            var userActive = localStorage.getItem('userActive');
            this.user = JSON.parse(userActive);
        }
        else {
        }
    }
    toggleNavbarCollapsing() {
        this.navbarCollapsed = !this.navbarCollapsed;
    }
    LogOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('userActive');
        this.global.isUserLoggedIn.next(false);
        this.global.userActive.next({});
        this.routerObj.navigateByUrl('user/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_3__["Global"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 40, vars: 9, consts: [[1, "container-fluid", "p-0"], ["id", "nav-placeholder"], [1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-book-reader", "fa-3x", "mx-3"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-align-right", "text-light"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "mr-auto"], [1, "navbar-nav"], [1, "nav-item"], ["id", "adminPage", "aria-current", "page", "routerLink", "/adminpanel", "routerLinkActive", "active", 1, "nav-link"], ["id", "homePage", "aria-current", "page", "routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["id", "studentsPage", "routerLink", "/students", "routerLinkActive", "active", 1, "nav-link"], ["id", "coursesPage", "routerLink", "/courses/add", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/instructors", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/user", "routerLinkActive", "active", 1, "nav-link", 3, "hidden"], [1, "btn", "btn-warning", 3, "hidden", "click"], [1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Contonso University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.toggleNavbarCollapsing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Instructors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Login/Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_32_listener() { return ctx.LogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.navbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.global.CheckToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.global.CheckToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.user.UserName, " ", ctx.user.Email, "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n          clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n}\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: var(--Snigle-font);\r\n  font-size: 0.9em;\r\n  color: whitesmoke;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  background: #dd2476;\r\n  background: linear-gradient(to bottom,\r\n      #dd2476,\r\n      #ff512f);\r\n  \r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\r\n  padding-right: 10.5em;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  padding: 0.9em;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  padding-left: 8rem;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%] {\r\n  padding: 4.2vmin 1vmin;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%] {\r\n  padding: 22vmin 1vmin;\r\n  padding-bottom: 35vmin;\r\n  font-family: var(--Rubik);\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  padding: 1vmin;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 8vmin;\r\n  font-weight: bold;\r\n  padding: 0.1em 0em;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 1vmin 5vmin;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsc0VBQThEO1VBQTlELDhEQUE4RDtBQUNoRTs7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7O2NBRVk7RUFDWixtREFBbUQ7QUFDckQ7OztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOzs7QUFFQTs7Ozs7SUFLSTs7O0FBQ0o7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImhlYWRlci5zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcclxufVxyXG5cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmhlYWRlcixcclxuc2VjdGlvbiB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5oZWFkZXIgYSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLVNuaWdsZS1mb250KTtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZDI0NzY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcclxuICAgICAgI2RkMjQ3NixcclxuICAgICAgI2ZmNTEyZik7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZWQsIGJsdWUpOyAqL1xyXG59XHJcblxyXG5oZWFkZXIgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwLjVlbTtcclxufVxyXG5cclxuaGVhZGVyIC5uYXYtaXRlbSB7XHJcbiAgcGFkZGluZzogMC45ZW07XHJcbn1cclxuXHJcbmhlYWRlciAubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhyZW07XHJcbn1cclxuXHJcblxyXG5oZWFkZXIgLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5oZWFkZXIgLnJvdyAuY29sLW1kLTUge1xyXG4gIHBhZGRpbmc6IDQuMnZtaW4gMXZtaW47XHJcbn1cclxuXHJcbmhlYWRlciAucm93IC5jb2wtbWQtNyB7XHJcbiAgcGFkZGluZzogMjJ2bWluIDF2bWluO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXZtaW47XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLVJ1YmlrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qaGVhZGVyIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldC9jcDEuanBnJyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9Ki9cclxuaGVhZGVyIC5jb250YWluZXIgLmNvbC1tZC03IGg2IHtcclxuICBwYWRkaW5nOiAxdm1pbjtcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG59XHJcblxyXG5oZWFkZXIgLmNvbnRhaW5lciAuY29sLW1kLTcgaDEge1xyXG4gIGZvbnQtc2l6ZTogOHZtaW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMC4xZW0gMGVtO1xyXG59XHJcblxyXG5oZWFkZXIgLmNvbnRhaW5lciAuY29sLW1kLTcgcCB7XHJcbiAgcGFkZGluZzogMXZtaW4gNXZtaW47XHJcbn1cclxuXHJcbmhlYWRlciAuY29udGFpbmVyIC5jb2wtbWQtNyBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Svia":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(); };
AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPanelComponent, selectors: [["app-admin-panel"]], decls: 2, vars: 0, template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-panel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "Nzz7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "xfZn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppComponent {
    constructor() {
        this.date = new Date();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 4, consts: [[1, "center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.date, "long"));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuc3R5bGUuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "Nzz7");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "xfZn");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/Common/Common.Global */ "jlRj");
/* harmony import */ var src_Common_Common_Interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/Common/Common.Interceptor */ "y24F");
/* harmony import */ var src_Common_Common_AuthGuard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/Common/Common.AuthGuard */ "m66t");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "Svia");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "mkyV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../student-list/student-list.component */ "mEhE");
/* harmony import */ var _instructor_list_instructor_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../instructor-list/instructor-list.component */ "DATN");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../home/home.component */ "9FAt");
/* harmony import */ var src_SecurityApp_SecurityApp_LoginComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/SecurityApp/SecurityApp.LoginComponent */ "v6dd");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");



























// import { RouterModule, RoutesRecognized } from '@angular/router';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_14__["Global"], src_Common_Common_AuthGuard__WEBPACK_IMPORTED_MODULE_16__["MyAuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: src_Common_Common_Interceptor__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"], multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            // RouterModule.forRoot(CustomerRoutes) //to apply to all
            //RouterModule.forChild(routes),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_21__["StudentListComponent"], _instructor_list_instructor_list_component__WEBPACK_IMPORTED_MODULE_22__["InstructorListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], src_SecurityApp_SecurityApp_LoginComponent__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_25__["RegistrationComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
        _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_18__["AdminPanelComponent"],
        _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_19__["ForbiddenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        // RouterModule.forRoot(CustomerRoutes) //to apply to all
        //RouterModule.forChild(routes),
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "jlRj":
/*!*************************************!*\
  !*** ./src/Common/Common.Global.ts ***!
  \*************************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


// global var injected in modules providers as service
class Global {
    constructor() {
        this.customerUrl = "https://localhost:44301/api/CustomerAPI/";
        this.securityUrl = "https://localhost:44301/api/Account/Login";
        this.courseUrl = "https://localhost:44301/api/CourseAPI/";
        this.registerUrl = "https://localhost:44301/api/Account/Register";
        this.userProfileUrl = "https://localhost:44301/api/userprofile";
        // customerUrl: string = "https://jackchangf.azurewebsites.net/api/CustomerAPI/";
        // securityUrl: string = "https://jackchangf.azurewebsites.net/api/Security";
        // courseUrl: string = "https://jackchangf.azurewebsites.net/api/CourseAPI";
        //token: string = ""; //used localStorage instead
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.userActive = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
    }
    CheckToken() {
        if ((localStorage.getItem('token') != null)) {
            return true;
        }
        else {
            return false;
        }
    }
    roleMatch(allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach((element) => {
            if (userRole == element) {
                isMatch = true;
                //return false;
            }
        });
        return isMatch;
    }
}
Global.ɵfac = function Global_Factory(t) { return new (t || Global)(); };
Global.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Global, factory: Global.ɵfac });


/***/ }),

/***/ "m66t":
/*!****************************************!*\
  !*** ./src/Common/Common.AuthGuard.ts ***!
  \****************************************/
/*! exports provided: MyAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAuthGuard", function() { return MyAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Common_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common.Global */ "jlRj");



class MyAuthGuard {
    constructor(_router, _global) {
        this._router = _router;
        this._global = _global;
    }
    canActivate(next, state) {
        // if (this._global.token.length != 0) {
        //     return true;
        // }
        if (localStorage.getItem('token') != null) {
            //role admin or member
            let roles = next.data['permittedRoles'];
            if (roles) {
                if (this._global.roleMatch(roles))
                    return true;
                else {
                    this._router.navigate(['forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            // navigate to login page
            this._router.navigate(['/user/Login']);
            // you can save redirect url so after authing we can move them back to the page they requested
            return false;
        }
    }
}
MyAuthGuard.ɵfac = function MyAuthGuard_Factory(t) { return new (t || MyAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Common_Global__WEBPACK_IMPORTED_MODULE_2__["Global"])); };
MyAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyAuthGuard, factory: MyAuthGuard.ɵfac });


/***/ }),

/***/ "mEhE":
/*!****************************************************!*\
  !*** ./src/student-list/student-list.component.ts ***!
  \****************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _app_app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/app.model */ "KCEv");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Common/Common.Global */ "jlRj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

 //* means import all, it is old js framework








function StudentListComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", temp_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", temp_r5.courseName, " ");
} }
function StudentListComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r6.courseName);
} }
function StudentListComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r7.name);
} }
function StudentListComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp2_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp2_r8);
} }
function StudentListComponent_tr_69_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp2_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp2_r12.name);
} }
function StudentListComponent_tr_69_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp3_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp3_r13.courseName);
} }
function StudentListComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StudentListComponent_tr_69_tr_10_Template, 3, 1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, StudentListComponent_tr_69_tr_13_Template, 3, 1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_tr_69_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const temp_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.Select(temp_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_tr_69_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const temp_r9 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.DeleteInServer(temp_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/510px-Flag_of_Singapore.svg.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", temp_r9.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r9.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", temp_r9.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", temp_r9.courses);
} }
const _c0 = function () { return { standalone: true }; };
class StudentListComponent {
    //dependancy injection instead of using httpObj:HttpClient = new HttpClient()
    constructor(httpObj, globalObj) {
        this.httpObj = httpObj;
        this.globalObj = globalObj;
        this.title = 'CustomerClientApp';
        this.productObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Product"](); //bind with ui
        this.customerObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Customer"](); //binded with UI
        this.customerList = new Array(); //collection
        this.courseList = new Array(); //collection
        this.courseObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Course"](); //binded with UI
        //errorM: string = '';
        this.errorList = new Array(); //collection
        this.selectedCourseId = 0;
        this.date = new Date();
    }
    ngOnInit() {
        //  this event is ready made and occurs first time when component is loaded
        this.GetfromServer();
        this.GetCoursesfromServer();
    }
    //take current product and add to customerobj products collection
    AddProduct() {
        this.customerObj.products.push(this.productObj);
        this.productObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Product"]();
    }
    AddCourse() {
        for (let i = 0; i < this.courseList.length; i++) {
            if (this.courseList[i].id == this.selectedCourseId) {
                this.customerObj.courses.push(this.courseList[i]);
            }
        }
    }
    //add in memory
    Add() {
        this.customerList.push(this.customerObj); //adds the current customer obj
        this.customerObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Customer"](); //reset the customer obj
        //alert("add is called");
    }
    AddtoServer() {
        //=====to solve circular json error======
        //need to use dto data transfer object, basically we passing formgroup in addition to the id,name,address to mvc and mvc doesn't know what is formgroup. so we create a new dto object that copies the id,name and address only,then in the observable post, we pass this custdto instead of this.customerObj
        // var custdto: any = {};
        // custdto.address = this.customerObj.address;
        // custdto.customerName = this.customerObj.customerName;
        // custdto.id = this.customerObj.id;
        // custdto.products = this.customerObj.products; //pass the products list from customerobj to custdto to send to server
        var custdto = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](this.customerObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup
        // var custdto:any = {
        //   Id : this.customerObj.Id,
        //   customerName : this.customerObj.customerName,
        //   address : this.customerObj.address
        // };
        //we need to make call to mvc domain https://localhost:44301/
        // var observable = this.httpObj
        //   .post("https://localhost:44301/Customer/Add", custdto); //custdto instead of this.customerObj to not include formgroup to mvc as mvc doesn't know what is formgroup
        //webapi changes the url, it will figure out the add/post by itself
        var observable = this.httpObj
            .post(this.globalObj.customerUrl, custdto);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    SuccessObserver(res) {
        // for (let element of res) {
        //   var cust: Customer = new Customer();
        //   cust.id = element.id;
        //   cust.address = element.address;
        //   cust.customerName = element.customerName;
        //   cust.products = element.products
        //   this.customerList.push(cust);
        // };
        this.customerList = res; //moved on top
        this.customerObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
    }
    SuccessObserver1(res) {
        this.courseList = res; //moved on top
        this.courseObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Course"]();
    }
    ErrorObserver(res) {
        for (let i = 0; i < res.error.length; i++) {
            this.errorList.push(res.error[i].errorMessage);
        }
        //this.errorM = JSON.stringify(res.message);
        // this.errorList.push(res.error[0].errorMessage);
        // this.errorList.push(res.error[1].errorMessage);
    }
    jsonObserver(res) {
        this.jsontest = res;
    }
    GetfromServer() {
        //webapi changes the url, it will figure out the add/post by itself
        var observable = this.httpObj
            .get(this.globalObj.customerUrl);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    GetCoursesfromServer() {
        //webapi changes the url, it will figure out the add/post by itself
        var observable = this.httpObj
            .get(this.globalObj.courseUrl);
        observable.subscribe(res => this.SuccessObserver1(res), res => this.ErrorObserver(res));
    }
    getjsontest() {
        var observable = this.httpObj
            .get(this.globalObj.customerUrl);
        observable.subscribe(res => this.jsonObserver(res));
    }
    SearchfromServer(customerName) {
        //webapi changes the url, it will figure out the add/post by itself
        var observable = this.httpObj
            .get(this.globalObj.customerUrl + customerName);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    EditInServer() {
        // var custdto: any = {};
        // custdto.address = this.customerObj.address;
        // custdto.customerName = this.customerObj.customerName;
        // custdto.id = this.customerObj.id;
        var custdto = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](this.customerObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup
        var observable = this.httpObj
            .put(this.globalObj.customerUrl + custdto.id, custdto);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    DeleteInServer(id) {
        var observable = this.httpObj
            .delete(this.globalObj.customerUrl + id);
        observable.subscribe(res => this.SuccessObserver(res), res => this.ErrorObserver(res));
    }
    //used for edit to display the customer obj response we get from server, create a new customer obj with a formgroup, then display to the angular UI
    Select(selected) {
        this.customerObj = new _app_app_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
        this.customerObj.id = selected.id;
        this.customerObj.customerName = selected.customerName;
        this.customerObj.address = selected.address;
        this.customerObj.products = selected.products;
        this.customerObj.courses = selected.courses;
    }
}
StudentListComponent.ɵfac = function StudentListComponent_Factory(t) { return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_4__["Global"])); };
StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudentListComponent, selectors: [["app-student-list"]], decls: 70, vars: 19, consts: [[1, "bg"], [1, "center"], [3, "formGroup"], [1, "wrapper"], ["type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["formControlName", "customerNameControl", "type", "text", 3, "ngModel", "ngModelChange"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "value", "Add course", 1, "btn", "btn-success", 3, "click"], [4, "ngFor", "ngForOf"], ["formControlName", "addressControl", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Add products", 1, "btn", "btn-success", 3, "click"], ["type", "button", "value", "Add", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "value", "Add Server", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "value", "GetList", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "value", "SearchList", 1, "btn", "btn-info", 3, "click"], ["type", "button", "value", "EditList", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "value", "DeleteRecord", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "value", "GetJson", 1, "btn", "btn-dark", 3, "click"], [1, "table", "table-striped"], [1, "table"], [1, "thead-dark"], ["class", "table-primary", 4, "ngFor", "ngForOf"], [3, "value"], [1, "table-primary"], [1, "mr-2", 2, "width", "20px", 3, "src"], ["type", "button", "value", "edit", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "value", "delete", 1, "btn", "btn-danger", 3, "click"]], template: function StudentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Id :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.customerObj.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_10_listener($event) { return ctx.customerObj.customerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Courses :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function StudentListComponent_Template_mat_select_valueChange_16_listener($event) { return ctx.selectedCourseId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StudentListComponent_mat_option_17_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "AddCourses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_20_listener() { return ctx.AddCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "CourseAdded: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, StudentListComponent_li_24_Template, 7, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Address :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_27_listener($event) { return ctx.customerObj.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Product :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_30_listener($event) { return ctx.productObj.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_31_listener() { return ctx.AddProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, StudentListComponent_li_33_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_36_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_37_listener() { return ctx.AddtoServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_38_listener() { return ctx.GetfromServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_39_listener() { return ctx.SearchfromServer(ctx.customerObj.customerName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_40_listener() { return ctx.EditInServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_41_listener() { return ctx.DeleteInServer(ctx.customerObj.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentListComponent_Template_input_click_42_listener() { return ctx.getjsontest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, StudentListComponent_tr_50_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "thead", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, StudentListComponent_tr_69_Template, 18, 6, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customerObj.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.customerObj.id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.customerObj.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedCourseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customerObj.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.customerObj.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productObj.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customerObj.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.customerObj.formGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("You selected: ", ctx.selectedCourseId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerObj.customerName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerObj.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.errorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customerList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["form[_ngcontent-%COMP%] {\r\n  background: rgba(255, 238, 238, 0.7);\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);\r\n  padding: 20px;\r\n}\r\n\r\ndiv.wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  grid-gap: 10px;\r\n}\r\n\r\ndiv.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n  background: linear-gradient(to bottom,\r\n      #ff512f,\r\n      #dd2476);\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 75%;\r\n  text-align: center;\r\n  font-family: --Lobster;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCOztjQUVZO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRzs7QUFFSDs7R0FFRyIsImZpbGUiOiJzdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzgsIDIzOCwgMC43KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5kaXYud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbmRpdi53cmFwcGVyIGxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcclxuICAgICAgI2ZmNTEyZixcclxuICAgICAgI2RkMjQ3Nik7XHJcbn1cclxuXHJcbi8qIC5iZyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvQ3VzdG9tZXJDbGllbnRBcHAvYXNzZXRzL2NwMS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIC8gY292ZXI7XHJcbn0gKi9cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IC0tTG9ic3RlcjtcclxufVxyXG5cclxuLyogL2RlZXAvIG1hdC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vZGVlcC8gbWF0LW9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi9kZWVwLyBtYXQtc2VsZWN0LFxyXG5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG4vZGVlcC8gLm1hdC1zZWxlY3QtcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0gKi9cclxuXHJcbi8qIC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufSAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ "mkyV":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "col", "s6", "offset-s3"], [1, "card"], [1, "card-image"], [1, "card-content"], [1, "card-title", 2, "color", "#039be5"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "403 - ACCESS DENIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You don't have the permission to access this resource.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qZmi":
/*!***************************************************!*\
  !*** ./src/SecurityApp/SecurityApp.LoginModel.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.userName = "";
        this.password = "";
    }
}


/***/ }),

/***/ "v6dd":
/*!*******************************************************!*\
  !*** ./src/SecurityApp/SecurityApp.LoginComponent.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _SecurityApp_LoginModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityApp.LoginModel */ "qZmi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Common/Common.Global */ "jlRj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(httpObj, globalObj, routeObj) {
        this.httpObj = httpObj;
        this.globalObj = globalObj;
        this.routeObj = routeObj;
        this.userObj = new _SecurityApp_LoginModel__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    ngOnInit() {
    }
    Login() {
        // we will make a call to mvc to get token
        // alert(this.userObj.userName + " " + this.userObj.password);
        var observable = this.httpObj.post(this.globalObj.securityUrl, this.userObj);
        //var observable = this.httpObj.post("https://jackchangf.azurewebsites.net/api/Security", this.userObj);
        observable.subscribe(res => this.success(res), res => this.error(res));
    }
    success(res) {
        //this.globalObj.token = res.token;
        localStorage.setItem('token', res.token);
        this.GetUserProfile();
        this.globalObj.isUserLoggedIn.next(true);
        //nav to student screen after login token
        this.routeObj.navigateByUrl('students');
    }
    error(res) {
        console.log(res);
    }
    GetUserProfile() {
        var observable = this.httpObj.get(this.globalObj.userProfileUrl);
        observable.subscribe(res => this.SuccessObserver(res), res => this.error(res));
    }
    SuccessObserver(res) {
        // Put the object into storage
        localStorage.setItem('userActive', JSON.stringify(res));
        // Retrieve the object from storage
        //var retrievedObject: any = localStorage.getItem('userActive');
        this.globalObj.userActive.next(res);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_Common_Common_Global__WEBPACK_IMPORTED_MODULE_3__["Global"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["security-login"]], decls: 12, vars: 2, consts: [[1, "center"], ["action", ""], [1, "wrapper"], ["type", "text", "name", "userName", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Login", 1, "btn", "btn-success", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userObj.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_11_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userObj.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userObj.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\r\n  background: rgba(255, 238, 238, 0.7);\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);\r\n  padding: 20px;\r\n}\r\n\r\ndiv.wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  grid-gap: 10px;\r\n}\r\n\r\ndiv.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n  background: linear-gradient(to bottom,\r\n      #ff512f,\r\n      #dd2476);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5QXBwLkxvZ2luU3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCOztjQUVZO0FBQ2QiLCJmaWxlIjoiU2VjdXJpdHlBcHAuTG9naW5TdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM4LCAyMzgsIDAuNyk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZGl2LndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5kaXYud3JhcHBlciBsYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXHJcbiAgICAgICNmZjUxMmYsXHJcbiAgICAgICNkZDI0NzYpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "9FAt");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student-list/student-list.component */ "mEhE");
/* harmony import */ var _instructor_list_instructor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instructor-list/instructor-list.component */ "DATN");
/* harmony import */ var src_SecurityApp_SecurityApp_LoginComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/SecurityApp/SecurityApp.LoginComponent */ "v6dd");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var src_Common_Common_AuthGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Common/Common.AuthGuard */ "m66t");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "mkyV");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "Svia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { CourseListComponent } from '../course-list/course-list.component';










//sequence important
const routes = [
    { path: '', redirectTo: '/user/registration', pathMatch: 'full' },
    { path: 'user', redirectTo: '/user/registration', pathMatch: 'full' },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], children: [{ path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] }, { path: 'login', component: src_SecurityApp_SecurityApp_LoginComponent__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }] },
    // { path: 'login', component: LoginComponent },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'courses', loadChildren: () => __webpack_require__.e(/*! import() | course-list-course-list-module */ "course-list-course-list-module").then(__webpack_require__.bind(null, /*! ../course-list/course-list.module */ "Hd7i")).then(m => m.CourseListModule) },
    // { path: 'courses', component: CourseListComponent },
    { path: 'students', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"], canActivate: [src_Common_Common_AuthGuard__WEBPACK_IMPORTED_MODULE_6__["MyAuthGuard"]] },
    //{ path: 'students', component: StudentListComponent },
    { path: 'instructors', component: _instructor_list_instructor_list_component__WEBPACK_IMPORTED_MODULE_3__["InstructorListComponent"] },
    // { path: 'registration', component: RegistrationComponent },
    // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__["ForbiddenComponent"] },
    { path: 'adminpanel', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_9__["AdminPanelComponent"], canActivate: [src_Common_Common_AuthGuard__WEBPACK_IMPORTED_MODULE_6__["MyAuthGuard"]], data: { permittedRoles: ['Administrator'] } },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
//export const routingComponents = [CourseListComponent, StudentListComponent, InstructorListComponent, HomeComponent, LoginComponent]
const routingComponents = [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"], _instructor_list_instructor_list_component__WEBPACK_IMPORTED_MODULE_3__["InstructorListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], src_SecurityApp_SecurityApp_LoginComponent__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]];


/***/ }),

/***/ "xfZn":
/*!****************************************!*\
  !*** ./src/footer/footer.component.ts ***!
  \****************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 0, consts: [[1, "container-fluid", "p-0"], ["id", "footer-placeholder"], [1, "row", "text-left"], [1, "col-md-5"], [1, "text-light"], [1, "text-muted"], [1, "pt-1", "text-muted"], [1, "form-inline"], [1, "col", "pl-0"], [1, "input-group", "pr-5"], ["type", "text", "placeholder", "Email", 1, "form-control", "bg-dark", "text-white"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-arrow-right"], [1, "col-md-2", "col-sm-12"], [1, "column", "text-light"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-twitter"], [1, "fab", "fa-youtube"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam laudantium asp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SGUNITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stay Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Let us be social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["footer[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.8);\n  overflow-x: hidden;\n  padding: 3vmin 18vmin;\n  padding-bottom: 10vmin;\n\n  \n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff512f;\n}\n\nfooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\nfooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder {\n  color: white !important;\n}\n\nfooter[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: var(--bggradient);\n  border: none;\n}\n\nfooter[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dd2476;\n  padding: 0 0.5em;\n}"] });


/***/ }),

/***/ "y24F":
/*!******************************************!*\
  !*** ./src/Common/Common.Interceptor.ts ***!
  \******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Common_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common.Global */ "jlRj");


class JwtInterceptor {
    constructor(global) {
        this.global = global;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available, intercepts all http request before sent to server
        request = request.clone({
            setHeaders: {
                //Authorization: `Bearer ${this.global.token}`
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Common_Global__WEBPACK_IMPORTED_MODULE_1__["Global"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




// import { HomeModule } from './HomeModule';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map