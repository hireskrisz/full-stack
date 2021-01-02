(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/xLE":
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class CartPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(); };
CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["app-cart-page"]], decls: 7, vars: 0, consts: [[1, "cart-page"], [1, "cart-page__title"], [1, "cart-page__content"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " content will be here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.cart-page[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.cart-page__title[_ngcontent-%COMP%], .cart-page__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cart-page__content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURHRTtFQUVFLGFBQUE7QUNESjs7QURNRTtFQUVFLGFBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0FDTEY7O0FDNUNBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FEK0NGOztBQXREQTtFQUNFLGFBQUE7QUF5REY7O0FBdkRFO0VBRUUsV0FBQTtBQXdESjs7QUFyREU7RUFDRSxnQkFBQTtBQXVESiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnEge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhcnQtcGFnZSB7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG4uY2FydC1wYWdlX190aXRsZSwgLmNhcnQtcGFnZV9fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcnQtcGFnZV9fY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59IiwiQGltcG9ydCAnc3R5bGVzL3Jlc2V0JztcblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-page',
                templateUrl: './cart-page.component.html',
                styleUrls: ['./cart-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hires Krisztián\Desktop\tick-it-easy\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "5uFq":
/*!******************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function RegistrationPageComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your data");
} }
function RegistrationPageComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
} }
function RegistrationPageComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
} }
class RegistrationPageComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordAgain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
}
RegistrationPageComponent.ɵfac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegistrationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
            }])], decls: 57, vars: 4, consts: [[1, "registration-page"], [1, "registration-page__title"], ["fxLayout", "column", "fxLayoutGap", "15px", 1, "registration-page__content"], ["stepper", ""], ["errorMessage", "Data is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["fxLayout", "row", "fxLayoutGap", "20px"], ["appearance", "outline"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "Ex.: id@domain.code", "formControlName", "email", "required", ""], ["fxLayout", "column", "fxLayoutGap", "15px"], ["mat-button", "", "color", "accent", "matStepperNext", ""], ["errorMessage", "Password is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", ""], ["matInput", "", "placeholder", "Password again", "formControlName", "passwordAgain", "required", ""], ["fxLayout", "row", "fxLayoutGap", "15px"], ["mat-button", "", "color", "accent", "matStepperPrevious", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nulla, venenatis id mollis eget, dapibus eget dui. Proin tempor cursus nulla et porttitor. Phasellus et ultrices mauris, sit amet tristique nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-horizontal-stepper", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationPageComponent_ng_template_12_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fill out your name and email address!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-step", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationPageComponent_ng_template_29_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Password again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fill out your password inputs!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RegistrationPageComponent_ng_template_48_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nulla, venenatis id mollis eget, dapibus eget dui. Proin tempor cursus nulla et porttitor. Phasellus et ultrices mauris, sit amet tristique nunc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.registration-page[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.registration-page__title[_ngcontent-%COMP%], .registration-page__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.registration-page__content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.registration-page__content[_ngcontent-%COMP%]     .mat-button {\n  border: 1px solid aquamarine;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FER0U7RUFFRSxhQUFBO0FDREo7O0FETUU7RUFFRSxhQUFBO0FDSko7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBQzVDQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBRCtDRjs7QUF0REE7RUFDRSxhQUFBO0FBeURGOztBQXZERTtFQUVFLFdBQUE7QUF3REo7O0FBckRFO0VBQ0UsZ0JBQUE7QUF1REo7O0FBdERJO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBd0ROIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnEge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJlZ2lzdHJhdGlvbi1wYWdlIHtcbiAgd2lkdGg6IDEwMDBweDtcbn1cbi5yZWdpc3RyYXRpb24tcGFnZV9fdGl0bGUsIC5yZWdpc3RyYXRpb24tcGFnZV9fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbi1wYWdlX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZWdpc3RyYXRpb24tcGFnZV9fY29udGVudCA6Om5nLWRlZXAgLm1hdC1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xuICB3aWR0aDogMTAwcHg7XG59IiwiQGltcG9ydCAnc3R5bGVzL3Jlc2V0JztcblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-page',
                templateUrl: './registration-page.component.html',
                styleUrls: ['./registration-page.component.scss'],
                providers: [{
                        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
                    }]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "69Mw":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class AdminPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminPageComponent.ɵfac = function AdminPageComponent_Factory(t) { return new (t || AdminPageComponent)(); };
AdminPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPageComponent, selectors: [["app-admin-page"]], decls: 7, vars: 0, consts: [[1, "admin-page"], [1, "admin-page__title"], [1, "admin-page__content"]], template: function AdminPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hello Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " content will be here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.admin-page[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.admin-page__title[_ngcontent-%COMP%], .admin-page__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.admin-page__content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtBQ0NGOztBREdFO0VBRUUsYUFBQTtBQ0RKOztBRE1FO0VBRUUsYUFBQTtBQ0pKOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7QUNMRjs7QUM1Q0E7O0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7QUQrQ0Y7O0FBdERBO0VBQ0UsYUFBQTtBQXlERjs7QUF2REU7RUFFRSxXQUFBO0FBd0RKOztBQXJERTtFQUNFLGdCQUFBO0FBdURKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5xIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuKiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hZG1pbi1wYWdlIHtcbiAgd2lkdGg6IDEwMDBweDtcbn1cbi5hZG1pbi1wYWdlX190aXRsZSwgLmFkbWluLXBhZ2VfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZG1pbi1wYWdlX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvcmVzZXQnO1xuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-page',
                templateUrl: './admin-page.component.html',
                styleUrls: ['./admin-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "ODM+":
/*!********************************************!*\
  !*** ./src/app/ticket/ticket.component.ts ***!
  \********************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class TicketComponent {
    constructor() { }
    ngOnInit() {
    }
}
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], decls: 16, vars: 0, consts: [[1, "ticket"], ["fxLayout", "column", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "end end"], ["mat-button", "", "color", "accent"]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " From BUD to UK by Bus - Available quantity: 15 (seat) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Valid: 2020.11.18 - 2021.01.30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nulla, venenatis id mollis eget, dapibus eget dui. Proin tempor cursus nulla et porttitor. Phasellus et ultrices mauris, sit amet tristique nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.ticket[_ngcontent-%COMP%]     .mat-button {\n  border: 1px solid aquamarine;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvdGlja2V0L3RpY2tldC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURHRTtFQUVFLGFBQUE7QUNESjs7QURNRTtFQUVFLGFBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0FDTEY7O0FDNUNBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FEK0NGOztBQXJERTtFQUNFLDRCQUFBO0FBd0RKIiwiZmlsZSI6InNyYy9hcHAvdGlja2V0L3RpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGlja2V0IDo6bmctZGVlcCAubWF0LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XG59IiwiQGltcG9ydCAnc3R5bGVzL3Jlc2V0JztcblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ticket',
                templateUrl: './ticket.component.html',
                styleUrls: ['./ticket.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MyErrorStateMatcher, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");








class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "center space-between", 1, "home-page"], ["fxLayoutAlign", "center center", 1, "home-page__container"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.home-page[_ngcontent-%COMP%] {\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.home-page[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  width: 100%;\n}\n\n.home-page[_ngcontent-%COMP%]     .home-page__container {\n  padding-top: 25px;\n  height: -webkit-fill-available;\n}\n\n.home-page[_ngcontent-%COMP%]     .home-page__container h1 {\n  font-size: 60px;\n  color: aquamarine;\n  line-height: normal;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-transform: uppercase;\n}\n\n.home-page[_ngcontent-%COMP%]     .home-page__container h2 {\n  font-size: 40px;\n  color: aquamarine;\n  line-height: normal;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtBQ0NGOztBREdFO0VBRUUsYUFBQTtBQ0RKOztBRE1FO0VBRUUsYUFBQTtBQ0pKOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7QUNMRjs7QUM1Q0E7O0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7QUQrQ0Y7O0FBdERBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF5REY7O0FBdkRFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBeURKOztBQXRERTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUF3REo7O0FBdkRJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtBQXlETjs7QUF2REk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBeUROIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5xIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuKiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmhvbWUtcGFnZSBhcHAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIDo6bmctZGVlcCAuaG9tZS1wYWdlX19jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuLmhvbWUtcGFnZSA6Om5nLWRlZXAgLmhvbWUtcGFnZV9fY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogYXF1YW1hcmluZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhvbWUtcGFnZSA6Om5nLWRlZXAgLmhvbWUtcGFnZV9fY29udGFpbmVyIGgyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogYXF1YW1hcmluZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvcmVzZXQnO1xuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profil_page_profil_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profil-page/profil-page.component */ "n/bI");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "69Mw");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "/xLE");
/* harmony import */ var _tickets_page_tickets_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tickets-page/tickets-page.component */ "jEbv");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "j92K");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ticket/ticket.component */ "ODM+");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "5uFq");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _profil_page_profil_page_component__WEBPACK_IMPORTED_MODULE_17__["ProfilPageComponent"],
        _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_18__["AdminPageComponent"],
        _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_19__["CartPageComponent"],
        _tickets_page_tickets_page_component__WEBPACK_IMPORTED_MODULE_20__["TicketsPageComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__["SearchBarComponent"],
        _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_22__["TicketComponent"],
        _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _profil_page_profil_page_component__WEBPACK_IMPORTED_MODULE_17__["ProfilPageComponent"],
                    _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_18__["AdminPageComponent"],
                    _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_19__["CartPageComponent"],
                    _tickets_page_tickets_page_component__WEBPACK_IMPORTED_MODULE_20__["TicketsPageComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__["SearchBarComponent"],
                    _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_22__["TicketComponent"],
                    _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [["color", "primary", "fxLayoutAlign", "center center", 1, "home-page__header"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "home-page__header-content"], ["routerLink", "/"], ["fxLayout", "row"], ["mat-button", "", "fxLayout", "row", "fxLayoutGap", "15px", "routerLink", "/tickets"], ["mat-button", "", "fxLayout", "row", "fxLayoutGap", "15px", "routerLink", "/admin"], ["mat-button", "", "fxLayout", "row", "fxLayoutGap", "15px", "routerLink", "/profile"], ["mat-button", "", "fxLayout", "row", "fxLayoutGap", "15px", "routerLink", "/cart"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TickItEasy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "admin_panel_settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "shopping_basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.home-page__header[_ngcontent-%COMP%] {\n  box-shadow: 0px -15px 25px 15px white;\n  z-index: 2;\n  height: auto;\n  padding: 10px;\n}\n\n.home-page__header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.home-page__header-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  width: 100%;\n}\n\n.home-page__header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: aquamarine;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURHRTtFQUVFLGFBQUE7QUNESjs7QURNRTtFQUVFLGFBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0FDTEY7O0FDNUNBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FEK0NGOztBQXREQTtFQUNFLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBeURGOztBQXhERTtFQUNFLGtCQUFBO0FBMERKOztBQXhERTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQTBESjs7QUF6REk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBMkROIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaG9tZS1wYWdlX19oZWFkZXIge1xuICBib3gtc2hhZG93OiAwcHggLTE1cHggMjVweCAxNXB4IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaG9tZS1wYWdlX19oZWFkZXIgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9tZS1wYWdlX19oZWFkZXItY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2VfX2hlYWRlci1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYXF1YW1hcmluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9yZXNldCc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");





class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [["color", "primary", "fxLayoutAlign", "center center", 1, "home-page__footer"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "home-page__footer-content"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tick it easy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "@copyright 2020 via Erd\u0151si & Hires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.home-page__footer[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: auto;\n  box-shadow: 0px 0px 25px 5px white;\n  z-index: 2;\n}\n\n.home-page__footer-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.home-page__footer-content[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURHRTtFQUVFLGFBQUE7QUNESjs7QURNRTtFQUVFLGFBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0FDTEY7O0FDNUNBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FEK0NGOztBQXREQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBeURGOztBQXhERTtFQUVFLFdBQUE7QUF5REo7O0FBeERJO0VBQ0UsV0FBQTtBQTBETiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnEge1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhvbWUtcGFnZV9fZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggNXB4IHdoaXRlO1xuICB6LWluZGV4OiAyO1xufVxuLmhvbWUtcGFnZV9fZm9vdGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2VfX2Zvb3Rlci1jb250ZW50IG1hdC1kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCAnc3R5bGVzL3Jlc2V0JztcblxuaHRtbCxcbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j92K":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 2, vars: 0, template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search-bar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jEbv":
/*!********************************************************!*\
  !*** ./src/app/tickets-page/tickets-page.component.ts ***!
  \********************************************************/
/*! exports provided: TicketsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageComponent", function() { return TicketsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "j92K");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ticket/ticket.component */ "ODM+");





class TicketsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TicketsPageComponent.ɵfac = function TicketsPageComponent_Factory(t) { return new (t || TicketsPageComponent)(); };
TicketsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketsPageComponent, selectors: [["app-tickets-page"]], decls: 9, vars: 0, consts: [[1, "tickets-page"], [1, "tickets-page__title"], [1, "tickets-page__content"]], template: function TicketsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_3__["TicketComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.tickets-page[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.tickets-page__title[_ngcontent-%COMP%], .tickets-page__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tickets-page__content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.tickets-page__content[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvdGlja2V0cy1wYWdlL3RpY2tldHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURHRTtFQUVFLGFBQUE7QUNESjs7QURNRTtFQUVFLGFBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0FDTEY7O0FDNUNBOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FEK0NGOztBQXREQTtFQUNFLGFBQUE7QUF5REY7O0FBdkRFO0VBRUUsV0FBQTtBQXdESjs7QUFyREU7RUFDRSxnQkFBQTtBQXVESjs7QUFyREk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBdUROIiwiZmlsZSI6InNyYy9hcHAvdGlja2V0cy1wYWdlL3RpY2tldHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGlja2V0cy1wYWdlIHtcbiAgd2lkdGg6IDEwMDBweDtcbn1cbi50aWNrZXRzLXBhZ2VfX3RpdGxlLCAudGlja2V0cy1wYWdlX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGlja2V0cy1wYWdlX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi50aWNrZXRzLXBhZ2VfX2NvbnRlbnQgbWF0LWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9yZXNldCc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tickets-page',
                templateUrl: './tickets-page.component.html',
                styleUrls: ['./tickets-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "n/bI":
/*!******************************************************!*\
  !*** ./src/app/profil-page/profil-page.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageComponent", function() { return ProfilPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class ProfilPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfilPageComponent.ɵfac = function ProfilPageComponent_Factory(t) { return new (t || ProfilPageComponent)(); };
ProfilPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilPageComponent, selectors: [["app-profil-page"]], decls: 7, vars: 0, consts: [[1, "profile-page"], [1, "profile-page__title"], [1, "profile-page__content"]], template: function ProfilPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " content will be here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.profile-page[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.profile-page__title[_ngcontent-%COMP%], .profile-page__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.profile-page__content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvcHJvZmlsLXBhZ2UvcHJvZmlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FER0U7RUFFRSxhQUFBO0FDREo7O0FETUU7RUFFRSxhQUFBO0FDSko7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBQzVDQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBRCtDRjs7QUF0REE7RUFDRSxhQUFBO0FBeURGOztBQXZERTtFQUVFLFdBQUE7QUF3REo7O0FBckRFO0VBQ0UsZ0JBQUE7QUF1REoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWwtcGFnZS9wcm9maWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucHJvZmlsZS1wYWdlIHtcbiAgd2lkdGg6IDEwMDBweDtcbn1cbi5wcm9maWxlLXBhZ2VfX3RpdGxlLCAucHJvZmlsZS1wYWdlX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZS1wYWdlX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvcmVzZXQnO1xuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profil-page',
                templateUrl: './profil-page.component.html',
                styleUrls: ['./profil-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _tickets_page_tickets_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets-page/tickets-page.component */ "jEbv");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "69Mw");
/* harmony import */ var _profil_page_profil_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil-page/profil-page.component */ "n/bI");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "/xLE");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "5uFq");










const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'tickets', component: _tickets_page_tickets_page_component__WEBPACK_IMPORTED_MODULE_3__["TicketsPageComponent"] },
    { path: 'admin', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__["AdminPageComponent"] },
    { path: 'profile', component: _profil_page_profil_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilPageComponent"] },
    { path: 'cart', component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_6__["CartPageComponent"] },
    { path: 'registration', component: _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "home-page__container-content"], [1, "home-page__container-content-text"], ["fxLayout", "column", 1, "home-page__container-content-form"], ["appearance", "outline", 1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com"], ["type", "password", "matInput", "", "placeholder", "Password"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["mat-button", "", "color", "accent", "routerLink", "/tickets"], ["mat-button", "", "color", "accent", "routerLink", "/registration"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tick it easy, around the world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nulla, venenatis id mollis eget, dapibus eget dui. Proin tempor cursus nulla et porttitor. Phasellus et ultrices mauris, sit amet tristique nunc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bel\u00E9p\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Regisztr\u00E1ci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n}\n\n.home-page__container-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  width: 100%;\n  height: auto;\n}\n\n.home-page__container-content-text[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n  margin-top: 50px;\n}\n\n.home-page__container-content-form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid aquamarine;\n  padding: 25px;\n  max-width: 450px;\n  width: 100%;\n  margin-top: 150px;\n}\n\n.home-page__container-content-form[_ngcontent-%COMP%]     .mat-button {\n  border: 1px solid aquamarine;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvcmVzZXQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FER0U7RUFFRSxhQUFBO0FDREo7O0FETUU7RUFFRSxhQUFBO0FDSko7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBQzVDQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBRCtDRjs7QUF0REE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeURGOztBQXhERTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUEwREo7O0FBeERFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTBESjs7QUF4REk7RUFDRSw0QkFBQTtFQUNBLFdBQUE7QUEwRE4iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaG9tZS1wYWdlX19jb250YWluZXItY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmhvbWUtcGFnZV9fY29udGFpbmVyLWNvbnRlbnQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uaG9tZS1wYWdlX19jb250YWluZXItY29udGVudC1mb3JtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG4uaG9tZS1wYWdlX19jb250YWluZXItY29udGVudC1mb3JtIDo6bmctZGVlcCAubWF0LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIHdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9yZXNldCc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
