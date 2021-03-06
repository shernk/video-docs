(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-contact-contact-module-ngfactory"],{

/***/ "./src/app/views/contact/contact.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/views/contact/contact.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/views/contact/contact.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/views/contact/contact.component.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ContactComponent = [_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "contact"], ["src", "https://via.placeholder.com/1200x400"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 16, "div", [["id", "contact-form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get In Touch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tell Us How Sherk Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["id", "contact-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["id", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "input", [["placeholder", "Your Name"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["class", "fas fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["id", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "input", [["placeholder", "Your Email"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "fas fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["id", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "textarea", [["placeholder", "Your Message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fas fa-pen-fancy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], null, null); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], [_shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_3__["ASeoService"]], null, null)], null, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/contact/contact.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/views/contact/contact.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["header[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \"name email\" \"message message\" \". submit\";\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-left: 33px;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%], #contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  color: #40c980;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%] {\n  grid-area: name;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #email[_ngcontent-%COMP%] {\n  grid-area: email;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #message[_ngcontent-%COMP%] {\n  grid-area: message;\n  position: relative;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 18px;\n  transform: translate(-50%, -50%);\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%], #contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #email[_ngcontent-%COMP%] {\n  position: relative;\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], #contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   #email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 18px;\n  transform: translate(-50%, -50%);\n}\n#contact-form-container[_ngcontent-%COMP%]   #contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  grid-area: submit;\n  padding: 10px 30px;\n  justify-self: end;\n  min-width: 30%;\n  background-color: #2b2b2b;\n  color: white;\n  border: 1px solid #40c980;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29udGFjdC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NvbnRhY3QvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBRE9FO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDhEQUNFO0FDTE47QURTSTs7RUFFRSxrQkFBQTtBQ1BOO0FEYVE7O0VBQ0Usb0JBQUE7RUFDQSxjRTVCRjtBRGtCUjtBRGVJO0VBQ0UsZUFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0JBQUE7QUNkTjtBRGlCSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRGlCTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ2ZSO0FEbUJJOztFQUVFLGtCQUFBO0FDakJOO0FEa0JNOztFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ2ZSO0FEbUJJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRS9FYTtFRmdGYixZQUFBO0VBQ0EseUJBQUE7QUNqQk4iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4jY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgI2NvbnRhY3QtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcIm5hbWUgZW1haWxcIlxyXG4gICAgICBcIm1lc3NhZ2UgbWVzc2FnZVwiXHJcbiAgICAgIFwiLiBzdWJtaXRcIjtcclxuXHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICAmICsgaSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI25hbWUge1xyXG4gICAgICBncmlkLWFyZWE6IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgI2VtYWlsIHtcclxuICAgICAgZ3JpZC1hcmVhOiBlbWFpbDtcclxuICAgIH1cclxuXHJcbiAgICAjbWVzc2FnZSB7XHJcbiAgICAgIGdyaWQtYXJlYTogbWVzc2FnZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICBsZWZ0OiAxOHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI25hbWUsXHJcbiAgICAjZW1haWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAxOHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZ3JpZC1hcmVhOiBzdWJtaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbmhlYWRlciBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hbWUgZW1haWxcIiBcIm1lc3NhZ2UgbWVzc2FnZVwiIFwiLiBzdWJtaXRcIjtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDMzcHg7XG59XG4jY29udGFjdC1mb3JtLWNvbnRhaW5lciAjY29udGFjdC1mb3JtIGlucHV0OmZvY3VzICsgaSxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMgKyBpIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGNvbG9yOiAjNDBjOTgwO1xufVxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIgI2NvbnRhY3QtZm9ybSAjbmFtZSB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI2VtYWlsIHtcbiAgZ3JpZC1hcmVhOiBlbWFpbDtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI21lc3NhZ2Uge1xuICBncmlkLWFyZWE6IG1lc3NhZ2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI21lc3NhZ2UgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAxOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI25hbWUsXG4jY29udGFjdC1mb3JtLWNvbnRhaW5lciAjY29udGFjdC1mb3JtICNlbWFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI25hbWUgaSxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gI2VtYWlsIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiNjb250YWN0LWZvcm0tY29udGFpbmVyICNjb250YWN0LWZvcm0gYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1pbi13aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MGM5ODA7XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiRxdWF0ZXJuYXJ5LWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW5hdjogIzI1MjUyNTtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiRibGFjazogIzFlMWUxZTtcclxuXHJcbiRjb2xvcjogIzkyOTI5MztcclxuJGxpZ2h0LWdyZXk6ICM5MjkyOTM7XHJcblxyXG4kY29sb3ItbGk6ICM0MGM5ODA7XHJcbiRncmVlbjogIzQwYzk4MDtcclxuXHJcbiRjc3M6ICMwMDA0ZmY7XHJcbiRibHVlOiAjMDA3YWNjO1xyXG4kZmItYmx1ZTogIzJiNTY4ZTtcclxuJGxpbmtlZGluLWJsdWU6ICMwMDRmNjM7XHJcbiR0d2l0dGVyLWJsdWU6ICMxMWE4Y2Q7XHJcblxyXG4kaHRtbDogI2ZmMDczYTtcclxuXHJcbiRqYXZhc2NyaXB0OiAjZjdmZjAwO1xyXG4keWVsbG93OiAjZTVlNTEwO1xyXG5cclxuJHJlZDogI2ZmNjA1ODtcclxuJG9yYW5nZTogI2M5N2U1YTtcclxuXHJcbiR0YWJsZXQ6IDEwMjRweDtcclxuIl19 */"];



/***/ }),

/***/ "./src/app/views/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");

class ContactComponent {
    constructor(seoService) {
        this.seoService = seoService;
        this.updateMetaDescription();
    }
    updateMetaDescription() {
        this.seoService.addMetaTag(src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].Description, "Connect");
    }
}


/***/ }),

/***/ "./src/app/views/contact/contact.module.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/views/contact/contact.module.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: ContactModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModuleNgFactory", function() { return ContactModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.module */ "./src/app/views/contact/contact.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component.ngfactory */ "./src/app/views/contact/contact.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.component */ "./src/app/views/contact/contact.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var ContactModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_contact_module__WEBPACK_IMPORTED_MODULE_1__["ContactModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ContactComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _contact_module__WEBPACK_IMPORTED_MODULE_1__["ContactModule"], _contact_module__WEBPACK_IMPORTED_MODULE_1__["ContactModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], function () { return [[{ path: "", component: _contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
class ContactModule {
}


/***/ })

}]);
//# sourceMappingURL=views-contact-contact-module-ngfactory-es2015.js.map