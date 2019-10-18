(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/side-nav/side-nav.component.ngfactory */ "./src/app/components/side-nav/side-nav.component.ngfactory.js");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component.ngfactory */ "./src/app/components/footer/footer.component.ngfactory.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _components_alert_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alert/alert.component.ngfactory */ "./src/app/components/alert/alert.component.ngfactory.js");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _components_alert_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/services/alert/alert.service */ "./src/app/components/alert/services/alert/alert.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_title_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/title/title.service */ "./src/app/services/title/title.service.ts");
/* harmony import */ var _services_offline_online_offline_online_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/offline-online/offline-online.service */ "./src/app/services/offline-online/offline-online.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["id", "site-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-side-nav", [], null, null, null, _components_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_sideNavComponent_0"], _components_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_sideNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["sideNavComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-footer", [], null, null, null, _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_FooterComponent_0"], _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_7__["WINDOW"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-alert", [], null, null, null, _components_alert_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AlertComponent_0"], _components_alert_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AlertComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], [_components_alert_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_7__["LOCAL_STORAGE"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\"\n"]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 9, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], [_services_title_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], _services_offline_online_offline_online_service__WEBPACK_IMPORTED_MODULE_13__["OfflineOnlineService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
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
var styles = ["#site-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"side-nav main\";\n  justify-items: center;\n}\n#site-container[_ngcontent-%COMP%]   app-side-nav[_ngcontent-%COMP%] {\n  grid-area: side-nav;\n  height: 100vh;\n}\n#site-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  grid-area: main;\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  max-width: 1200px;\n  margin-left: 50px;\n  width: 100%;\n}\n#site-container[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  justify-self: stretch;\n}\n@media screen and (max-width: 768px) {\n  #site-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  #site-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RKO0FES0E7RUFDRTtJQUNFLGNBQUE7RUNGRjtFRElFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpdGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLW5hdiBtYWluXCI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICBhcHAtc2lkZS1uYXYge1xyXG4gICAgZ3JpZC1hcmVhOiBzaWRlLW5hdjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGFwcC1mb290ZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpdGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjc2l0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGUtbmF2IG1haW5cIjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuI3NpdGUtY29udGFpbmVyIGFwcC1zaWRlLW5hdiB7XG4gIGdyaWQtYXJlYTogc2lkZS1uYXY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4jc2l0ZS1jb250YWluZXIgbWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jc2l0ZS1jb250YWluZXIgYXBwLWZvb3RlciB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpdGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAjc2l0ZS1jb250YWluZXIgbWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, offlineOnlineService) {
        this.titleService = titleService;
        this.offlineOnlineService = offlineOnlineService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.init();
        this.offlineOnlineService.init();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _views_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component.ngfactory */ "./src/app/views/home/home.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_alert_services_local_storage_alocal_storage_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alert/services/local-storage/alocal-storage.model */ "./src/app/components/alert/services/local-storage/alocal-storage.model.ts");
/* harmony import */ var _components_alert_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/services/local-storage/local-storage.service */ "./src/app/components/alert/services/local-storage/local-storage.service.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/* harmony import */ var _shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/seo/seo.service */ "./src/app/shared/seo/seo.service.ts");
/* harmony import */ var _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/icon/aicon.service */ "./src/app/shared/services/icon/aicon.service.ts");
/* harmony import */ var _shared_services_icon_icon_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/icon/icon.service */ "./src/app/shared/services/icon/icon.service.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_alert_services_alert_aalert_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/alert/services/alert/aalert.service */ "./src/app/components/alert/services/alert/aalert.service.ts");
/* harmony import */ var _components_alert_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/alert/services/alert/alert.service */ "./src/app/components/alert/services/alert/alert.service.ts");
/* harmony import */ var _services_title_title_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/title/title.service */ "./src/app/services/title/title.service.ts");
/* harmony import */ var _services_offline_online_offline_online_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/offline-online/offline-online.service */ "./src/app/services/offline-online/offline-online.service.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_home_home_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/home/home.module */ "./src/app/views/home/home.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _views_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_alert_services_local_storage_alocal_storage_model__WEBPACK_IMPORTED_MODULE_9__["ALocalStorage"], _components_alert_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorage"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_11__["ASeoService"], _shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_12__["SeoService"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_13__["AIconService"], _shared_services_icon_icon_service__WEBPACK_IMPORTED_MODULE_14__["IconService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["WINDOW"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["windowFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["DocumentService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["DocumentService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["NGT_DOCUMENT"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["documentFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["DocumentService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["LOCAL_STORAGE"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["localStorageFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_alert_services_alert_aalert_service__WEBPACK_IMPORTED_MODULE_18__["AAlertService"], _components_alert_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_title_title_service__WEBPACK_IMPORTED_MODULE_20__["TitleService"], _services_title_title_service__WEBPACK_IMPORTED_MODULE_20__["TitleService"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_offline_online_offline_online_service__WEBPACK_IMPORTED_MODULE_21__["OfflineOnlineService"], _services_offline_online_offline_online_service__WEBPACK_IMPORTED_MODULE_21__["OfflineOnlineService"], [_components_alert_services_alert_aalert_service__WEBPACK_IMPORTED_MODULE_18__["AAlertService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["WINDOW"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwRegistrationOptions"], { enabled: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0, p3_1, p3_2, p3_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_h"](p1_0, p1_1, p1_2), _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_i"](p2_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_c"](p3_0, p3_1, p3_2, p3_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], { scrollPositionRestoration: "enabled", anchorScrolling: "enabled", initialNavigation: "enabled", onSameUrlNavigation: "reload", preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] }], [{ path: "", loadChildren: _app_routes__WEBPACK_IMPORTED_MODULE_23__["ɵ0"] }, { path: "category", loadChildren: _app_routes__WEBPACK_IMPORTED_MODULE_23__["ɵ1"] }, { path: "about", loadChildren: _app_routes__WEBPACK_IMPORTED_MODULE_23__["ɵ2"] }, { path: "contact", loadChildren: _app_routes__WEBPACK_IMPORTED_MODULE_23__["ɵ3"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _views_home_home_module__WEBPACK_IMPORTED_MODULE_25__["HomeModule"], _views_home_home_module__WEBPACK_IMPORTED_MODULE_25__["HomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["NgtUniversalModule"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_15__["NgtUniversalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES, ɵ0, ɵ1, ɵ2, ɵ3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
var ɵ0 = function () {
    return __webpack_require__.e(/*! import() | views-home-home-module-ngfactory */ "views-home-home-module-ngfactory").then(__webpack_require__.bind(null, /*! ./views/home/home.module.ngfactory */ "./src/app/views/home/home.module.ngfactory.js")).then(function (module) { return module.HomeModuleNgFactory; });
}, ɵ1 = function () {
    return __webpack_require__.e(/*! import() | views-category-category-module-ngfactory */ "views-category-category-module-ngfactory").then(__webpack_require__.bind(null, /*! ./views/category/category.module.ngfactory */ "./src/app/views/category/category.module.ngfactory.js")).then(function (module) { return module.CategoryModuleNgFactory; });
}, ɵ2 = function () {
    return __webpack_require__.e(/*! import() | views-about-about-module-ngfactory */ "views-about-about-module-ngfactory").then(__webpack_require__.bind(null, /*! ./views/about/about.module.ngfactory */ "./src/app/views/about/about.module.ngfactory.js")).then(function (module) { return module.AboutModuleNgFactory; });
}, ɵ3 = function () {
    return __webpack_require__.e(/*! import() | views-contact-contact-module-ngfactory */ "views-contact-contact-module-ngfactory").then(__webpack_require__.bind(null, /*! ./views/contact/contact.module.ngfactory */ "./src/app/views/contact/contact.module.ngfactory.js")).then(function (module) { return module.ContactModuleNgFactory; });
};
/**
 * TODO: watch Ep41-2:05
 */
var APP_ROUTES = [
    {
        path: "",
        loadChildren: ɵ0
    },
    {
        path: "category",
        loadChildren: ɵ1
    },
    {
        path: "about",
        loadChildren: ɵ2
    },
    {
        path: "contact",
        loadChildren: ɵ3
    }
];



/***/ }),

/***/ "./src/app/components/alert/alert.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/alert/alert.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AlertComponent, View_AlertComponent_0, View_AlertComponent_Host_0, AlertComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AlertComponent", function() { return RenderType_AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlertComponent_0", function() { return View_AlertComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlertComponent_Host_0", function() { return View_AlertComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponentNgFactory", function() { return AlertComponentNgFactory; });
/* harmony import */ var _alert_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component.scss.shim.ngstyle */ "./src/app/components/alert/alert.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/alert/alert.service */ "./src/app/components/alert/services/alert/alert.service.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AlertComponent = [_alert_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AlertComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AlertComponent, data: {} });

function View_AlertComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fas fa-info-circle"]], null, null, null, null, null))], null, null); }
function View_AlertComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["id", "alert"]], [[8, "className", 0], [2, "is-Shown", null], [2, "is-Close", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["id", "icon-type"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AlertComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["id", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["id", "close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "fas fa-times"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.alert.type; _ck(_v, 2, 0, currVal_3); var currVal_4 = _co.alertTypes.Info; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.alert.type; var currVal_1 = (_co.isShown && _co.isNeeded); var currVal_2 = !_co.isShown; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _co.alert.title; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.alert.content; _ck(_v, 9, 0, currVal_6); }); }
function View_AlertComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-alert", [], null, null, null, View_AlertComponent_0, RenderType_AlertComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], [_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AlertComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-alert", _alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], View_AlertComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/alert/alert.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
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
var styles = ["@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(200px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(200px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slide-down {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(200px);\n  }\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(200px);\n  }\n}\n#alert[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  transform: translateY(200px);\n  padding: 15px;\n  display: grid;\n  grid-template-columns: auto 500px 1fr;\n  grid-gap: 40px;\n  align-items: center;\n}\n#alert.is-Shown[_ngcontent-%COMP%] {\n  -webkit-animation: slide-up 1.5s linear;\n          animation: slide-up 1.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n#alert.is-Close[_ngcontent-%COMP%] {\n  -webkit-animation: slide-down 1.5s linear;\n          animation: slide-down 1.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n#alert[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  font-size: 20px;\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  justify-self: end;\n  margin: 20px;\n}\n#alert[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n#alert[_ngcontent-%COMP%]   #icon-type[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n#alert.info[_ngcontent-%COMP%] {\n  background-color: #2b2b2b;\n  border-left: 10px solid red;\n}\n#alert[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #c97e5a;\n}\n#alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n#alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007acc;\n}\n#alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #ff6058;\n}\n#alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #007acc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSw0QkFBQTtFQ0RGO0VESUE7SUFDRSx3QkFBQTtFQ0ZGO0FBQ0Y7QURMQTtFQUNFO0lBQ0UsNEJBQUE7RUNERjtFRElBO0lBQ0Usd0JBQUE7RUNGRjtBQUNGO0FES0E7RUFDRTtJQUNFLHdCQUFBO0VDSEY7RURNQTtJQUNFLDRCQUFBO0VDSkY7QUFDRjtBREhBO0VBQ0U7SUFDRSx3QkFBQTtFQ0hGO0VETUE7SUFDRSw0QkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0U7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ0xKO0FEUUU7RUFDRSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ05KO0FEU0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNQSjtBRFNJO0VBQ0UsWUFBQTtBQ1BOO0FEV0U7RUFDRSxlQUFBO0FDVEo7QURZRTtFQUNFLHlCRWxFZTtFRm1FZiwyQkFBQTtBQ1ZKO0FEYUU7RUFDRSxjRS9DSztBRG9DVDtBRGNFO0VBQ0UsWUFBQTtBQ1pKO0FEZUU7RUFDRSxjRWxFRztBRHFEUDtBRGdCRTtFQUNFLHlCRTVERTtBRDhDTjtBRGlCRTtFQUNFLHlCRTFFRztBRDJEUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiNhbGVydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTAwcHggMWZyO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICYuaXMtU2hvd24ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgJi5pcy1DbG9zZSB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWRvd24gMS41cyBsaW5lYXI7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gICNjbG9zZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaWNvbi10eXBlIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcblxyXG4gICYuaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIH1cclxufVxyXG4iLCJAa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gIH1cbn1cbiNhbGVydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDUwMHB4IDFmcjtcbiAgZ3JpZC1nYXA6IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jYWxlcnQuaXMtU2hvd24ge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbiNhbGVydC5pcy1DbG9zZSB7XG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAxLjVzIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4jYWxlcnQgI2Nsb3NlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuI2FsZXJ0ICNjbG9zZSBpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2FsZXJ0ICNpY29uLXR5cGUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4jYWxlcnQuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcbn1cbiNhbGVydCBoMyB7XG4gIGNvbG9yOiAjYzk3ZTVhO1xufVxuI2FsZXJ0IHAge1xuICBjb2xvcjogd2hpdGU7XG59XG4jYWxlcnQgaSB7XG4gIGNvbG9yOiAjMDA3YWNjO1xufVxuI2FsZXJ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwNTg7XG59XG4jYWxlcnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjYztcbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuJHF1YXRlcm5hcnktYmFja2dyb3VuZDogIzIzMjMyMztcclxuJGJhY2tncm91bmQtY29sb3ItbmF2OiAjMjUyNTI1O1xyXG4kdGVydGlhcnktYmFja2dyb3VuZDogIzM5MzkzOTtcclxuJGJsYWNrOiAjMWUxZTFlO1xyXG5cclxuJGNvbG9yOiAjOTI5MjkzO1xyXG4kbGlnaHQtZ3JleTogIzkyOTI5MztcclxuXHJcbiRjb2xvci1saTogIzQwYzk4MDtcclxuJGdyZWVuOiAjNDBjOTgwO1xyXG5cclxuJGNzczogIzAwMDRmZjtcclxuJGJsdWU6ICMwMDdhY2M7XHJcbiRmYi1ibHVlOiAjMmI1NjhlO1xyXG4kbGlua2VkaW4tYmx1ZTogIzAwNGY2MztcclxuJHR3aXR0ZXItYmx1ZTogIzExYThjZDtcclxuXHJcbiRodG1sOiAjZmYwNzNhO1xyXG5cclxuJGphdmFzY3JpcHQ6ICNmN2ZmMDA7XHJcbiR5ZWxsb3c6ICNlNWU1MTA7XHJcblxyXG4kcmVkOiAjZmY2MDU4O1xyXG4kb3JhbmdlOiAjYzk3ZTVhO1xyXG5cclxuJHRhYmxldDogMTAyNHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/enums/alert-types.enum */ "./src/app/components/alert/models/enums/alert-types.enum.ts");
/* harmony import */ var _models_alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/alert.model */ "./src/app/components/alert/models/alert.model.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService, localStorage) {
        this.alertService = alertService;
        this.localStorage = localStorage;
        this.alert = new _models_alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"]();
        this.alertTypes = _models_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_1__["AlertTypes"];
        this.isShown = true;
        this.isNeeded = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.alertSubject.asObservable().subscribe(function (data) {
            _this.alert = new _models_alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"](data);
            _this.isNeeded = true;
        });
    };
    AlertComponent.prototype.close = function () {
        this.isShown = false;
        if (this.alert.key) {
            this.localStorage.setItem(this.alert.key, 'true');
        }
    };
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/alert/models/alert.model.ts":
/*!********************************************************!*\
  !*** ./src/app/components/alert/models/alert.model.ts ***!
  \********************************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Alert = /** @class */ (function () {
    function Alert(data) {
        var defaults = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ title: '', content: '' }, data);
        this.type = defaults.type;
        this.title = defaults.title;
        this.content = defaults.content;
        this.key = defaults.key;
    }
    return Alert;
}());



/***/ }),

/***/ "./src/app/components/alert/models/enums/alert-types.enum.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/alert/models/enums/alert-types.enum.ts ***!
  \*******************************************************************/
/*! exports provided: AlertTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTypes", function() { return AlertTypes; });
var AlertTypes;
(function (AlertTypes) {
    AlertTypes["Info"] = "info";
    AlertTypes["Success"] = "success";
    AlertTypes["Warning"] = "warning";
    AlertTypes["Error"] = "error";
})(AlertTypes || (AlertTypes = {}));


/***/ }),

/***/ "./src/app/components/alert/services/alert/aalert.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/alert/services/alert/aalert.service.ts ***!
  \*******************************************************************/
/*! exports provided: AAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AAlertService", function() { return AAlertService; });
var AAlertService = /** @class */ (function () {
    function AAlertService() {
    }
    return AAlertService;
}());



/***/ }),

/***/ "./src/app/components/alert/services/alert/alert.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/alert/services/alert/alert.service.ts ***!
  \******************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    AlertService.prototype.callAlert = function (alert) {
        this.alertSubject.next(alert);
    };
    AlertService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function AlertService_Factory() { return new AlertService(); }, token: AlertService, providedIn: "root" });
    return AlertService;
}());



/***/ }),

/***/ "./src/app/components/alert/services/local-storage/alocal-storage.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/alert/services/local-storage/alocal-storage.model.ts ***!
  \*********************************************************************************/
/*! exports provided: ALocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALocalStorage", function() { return ALocalStorage; });
var ALocalStorage = /** @class */ (function () {
    function ALocalStorage() {
    }
    return ALocalStorage;
}());



/***/ }),

/***/ "./src/app/components/alert/services/local-storage/local-storage.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/alert/services/local-storage/local-storage.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alocal_storage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alocal-storage.model */ "./src/app/components/alert/services/local-storage/alocal-storage.model.ts");


var LocalStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalStorage, _super);
    function LocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorage.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    return LocalStorage;
}(_alocal_storage_model__WEBPACK_IMPORTED_MODULE_1__["ALocalStorage"]));



/***/ }),

/***/ "./src/app/components/footer/footer.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/footer/footer.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/components/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "footer", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["id", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["src", "../../../assets/image/filmhunterlogo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Video Docs Inc."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["id", "top-of-page"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoTopOfPage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "fas fa-caret-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["id", "social-media"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "fab fa-youtube"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "fab fa-github"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "fab fa-linkedin-in"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 16, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Support"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["Copyright \u00A9 ", " - Video Docs Inc."]))], function (_ck, _v) { var currVal_2 = _ck(_v, 19, 0, "/about"); _ck(_v, 18, 0, currVal_2); var currVal_5 = _ck(_v, 24, 0, "/support"); _ck(_v, 23, 0, currVal_5); var currVal_8 = _ck(_v, 29, 0, "/contact"); _ck(_v, 28, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).href; _ck(_v, 27, 0, currVal_6, currVal_7); var currVal_9 = _co.currentYear; _ck(_v, 32, 0, currVal_9); }); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_5__["WINDOW"]], null, null)], null, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
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
var styles = ["footer[_ngcontent-%COMP%] {\n  display: grid;\n  z-index: 1;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 20px;\n  align-items: center;\n  justify-content: end;\n  padding: 0 20px 0 70px;\n  right: 0;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n  margin-bottom: 0;\n  top: 20px;\n  margin-right: 0;\n  overflow: hidden;\n  color: #929293;\n  background-color: #232323;\n}\nfooter[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: 30px auto;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   #top-of-page[_ngcontent-%COMP%] {\n  background-color: #252525;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  text-align: center;\n  border-radius: 50%;\n  right: 50%;\n  left: 50%;\n  top: -12%;\n}\nfooter[_ngcontent-%COMP%]   #top-of-page[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  padding-top: 20px;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #40c980;\n  font-weight: bold;\n  margin-left: 15px;\n  border-right: 2px solid #929293;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 0;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\nfooter[_ngcontent-%COMP%]   #social-media[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: auto auto auto;\n  justify-content: end;\n}\nfooter[_ngcontent-%COMP%]   #social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 25px;\n  display: inline-block;\n  border-bottom: 3px solid transparent;\n}\nfooter[_ngcontent-%COMP%]   #social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid white;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n@media screen and (max-width: 768px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n\n  footer[_ngcontent-%COMP%]   #top-of-page[_ngcontent-%COMP%] {\n    left: 44.5%;\n    right: 44.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2JNO0VEY04seUJDbkJzQjtBQ2lCeEI7QUZJRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBRUZKO0FGSUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRUZOO0FGTUk7RUFDRSxZQUFBO0FFSk47QUZRRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUVOSjtBRlFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRU5KO0FGU0U7RUFDRSxnQkFBQTtBRVBKO0FGU0k7RUFDRSxxQkFBQTtFQUNBLGNDbkRFO0VEb0RGLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBRVBOO0FGU007RUFDRSxjQUFBO0FFUFI7QUZVTTtFQUNFLGtCQUFBO0FFUlI7QUZXTTtFQUNFLGlCQUFBO0FFVFI7QUZXUTtFQUNFLGVBQUE7QUVUVjtBRmVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0FFYko7QUZlSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FFYk47QUZlTTtFRzlGSiw4QkFBQTtBRGtGRjtBRmtCRTtFQUNFLGFBQUE7QUVoQko7QUZvQkE7RUFDRTtJQUNFLGtCQUFBO0VFakJGOztFRm1CQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VFaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBwYWRkaW5nOiAwIDIwcHggMCA3MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0b3A6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhdGVybmFyeS1iYWNrZ3JvdW5kO1xyXG5cclxuICAjbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjdG9wLW9mLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogLTEyJTtcclxuICB9XHJcbiAgI3RvcC1vZi1wYWdlIGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3NvY2lhbC1tZWRpYSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBob3Zlci1ib3JkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcbiAgZm9vdGVyICN0b3Atb2YtcGFnZSB7XHJcbiAgICBsZWZ0OiA0NC41JTtcclxuICAgIHJpZ2h0OiA0NC41JTtcclxuICB9XHJcbn1cclxuIiwiJGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiRxdWF0ZXJuYXJ5LWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW5hdjogIzI1MjUyNTtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiRibGFjazogIzFlMWUxZTtcclxuXHJcbiRjb2xvcjogIzkyOTI5MztcclxuJGxpZ2h0LWdyZXk6ICM5MjkyOTM7XHJcblxyXG4kY29sb3ItbGk6ICM0MGM5ODA7XHJcbiRncmVlbjogIzQwYzk4MDtcclxuXHJcbiRjc3M6ICMwMDA0ZmY7XHJcbiRibHVlOiAjMDA3YWNjO1xyXG4kZmItYmx1ZTogIzJiNTY4ZTtcclxuJGxpbmtlZGluLWJsdWU6ICMwMDRmNjM7XHJcbiR0d2l0dGVyLWJsdWU6ICMxMWE4Y2Q7XHJcblxyXG4kaHRtbDogI2ZmMDczYTtcclxuXHJcbiRqYXZhc2NyaXB0OiAjZjdmZjAwO1xyXG4keWVsbG93OiAjZTVlNTEwO1xyXG5cclxuJHJlZDogI2ZmNjA1ODtcclxuJG9yYW5nZTogI2M5N2U1YTtcclxuXHJcbiR0YWJsZXQ6IDEwMjRweDtcclxuIiwiZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgei1pbmRleDogMTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBwYWRkaW5nOiAwIDIwcHggMCA3MHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICM5MjkyOTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG59XG5mb290ZXIgI2xvZ28ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb290ZXIgI2xvZ28gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyICNsb2dvIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyICN0b3Atb2YtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtMTIlO1xufVxuZm9vdGVyICN0b3Atb2YtcGFnZSBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5mb290ZXIgbmF2IHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cbmZvb3RlciBuYXYgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNDBjOTgwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM5MjkyOTM7XG59XG5mb290ZXIgbmF2IGxpOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbmZvb3RlciBuYXYgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbmZvb3RlciBuYXYgbGkgYSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuZm9vdGVyIG5hdiBsaSBhOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5mb290ZXIgI3NvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbmZvb3RlciAjc29jaWFsLW1lZGlhIGEge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuZm9vdGVyICNzb2NpYWwtbWVkaWEgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbn1cbmZvb3RlciBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cblxuICBmb290ZXIgI3RvcC1vZi1wYWdlIHtcbiAgICBsZWZ0OiA0NC41JTtcbiAgICByaWdodDogNDQuNSU7XG4gIH1cbn0iLCJAbWl4aW4gaG92ZXItYm9yZGVye1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
var FooterComponent = /** @class */ (function () {
    function FooterComponent(window) {
        this.window = window;
    }
    Object.defineProperty(FooterComponent.prototype, "currentYear", {
        get: function () {
            var year = new Date().getFullYear();
            return year;
        },
        enumerable: true,
        configurable: true
    });
    FooterComponent.prototype.gotoTopOfPage = function () {
        this.window.scroll(0, 0);
    };
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_sideNavComponent, View_sideNavComponent_0, View_sideNavComponent_Host_0, sideNavComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_sideNavComponent", function() { return RenderType_sideNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_sideNavComponent_0", function() { return View_sideNavComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_sideNavComponent_Host_0", function() { return View_sideNavComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavComponentNgFactory", function() { return sideNavComponentNgFactory; });
/* harmony import */ var _side_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav.component.scss.shim.ngstyle */ "./src/app/components/side-nav/side-nav.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_sideNavComponent = [_side_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_sideNavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_sideNavComponent, data: {} });

function View_sideNavComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fas fa-bars"]], [[2, "is-open", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isClosed; _ck(_v, 0, 0, currVal_0); }); }
function View_sideNavComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "img", [["alt", "Error"], ["id", "logo-img"], ["src", "../../../assets/image/filmhunterlogo.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeMenu() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 1)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, ""); _ck(_v, 1, 0, currVal_0); }, null); }
function View_sideNavComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fas fa-chevron-left"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_sideNavComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "nav", [], [[2, "is-closed", null], [2, "is-open", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "li", [["id", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_sideNavComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_sideNavComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_sideNavComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "i", [["class", "fab fa-js"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\"\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isClosed; _ck(_v, 4, 0, currVal_2); var currVal_3 = !_co.isClosed; _ck(_v, 6, 0, currVal_3); var currVal_4 = !_co.isClosed; _ck(_v, 8, 0, currVal_4); var currVal_5 = _ck(_v, 12, 0, "category/javascript"); _ck(_v, 11, 0, currVal_5); var currVal_6 = "active-route"; _ck(_v, 14, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isClosed; var currVal_1 = !_co.isClosed; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_sideNavComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-side-nav", [], null, null, null, View_sideNavComponent_0, RenderType_sideNavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _side_nav_component__WEBPACK_IMPORTED_MODULE_4__["sideNavComponent"], [], null, null)], null, null); }
var sideNavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-side-nav", _side_nav_component__WEBPACK_IMPORTED_MODULE_4__["sideNavComponent"], View_sideNavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
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
var styles = ["nav[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 300px;\n  align-content: baseline;\n  transition: all 0.3s;\n  background-color: #2b2b2b;\n  position: fixed;\n  z-index: 2;\n}\nnav.is-closed[_ngcontent-%COMP%] {\n  width: 55px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  padding-left: 12px;\n  align-items: center;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(#logo, #search)[_ngcontent-%COMP%]:hover {\n  background-color: #007acc;\n  transition: background-color 0.3s;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active-route[_ngcontent-%COMP%] {\n  background-color: #007acc;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#logo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: auto auto;\n  align-content: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: 12px;\n  color: #929293;\n  justify-self: end;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 25px;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-html5[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-css3-alt[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js[_ngcontent-%COMP%]:hover {\n  color: white;\n  transition: color 0.3s;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-html5[_ngcontent-%COMP%] {\n  color: #ff073a;\n  padding-left: 2.5px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-html5.active-route[_ngcontent-%COMP%] {\n  color: white;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-css3-alt[_ngcontent-%COMP%] {\n  color: #0004ff;\n  padding-left: 2.5px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-css3-alt.active-route[_ngcontent-%COMP%] {\n  color: white;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js[_ngcontent-%COMP%] {\n  color: #f7ff00;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js.active-route[_ngcontent-%COMP%] {\n  color: white;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js[_ngcontent-%COMP%]:hover {\n  color: #40c980;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-chevron-left[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 1024px) {\n  nav[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  nav[_ngcontent-%COMP%]   i.fas.fa-bars[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  nav[_ngcontent-%COMP%]:not(.is-open)   ul[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  nav[_ngcontent-%COMP%]:not(.is-open)   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]:not(.is-open)   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #logo-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav.is-open[_ngcontent-%COMP%] {\n    background-color: #2b2b2b;\n    height: -webkit-fill-available;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdi9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdi9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQ1JpQjtFRFNqQixlQUFBO0VBQ0EsVUFBQTtBRURGO0FGR0U7RUFDRSxXQUFBO0FFREo7QUZJRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FFRko7QUZJSTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FFRk47QUZLUTtFQUNFLHlCQ2pCSDtFRGtCRyxpQ0FBQTtBRUhWO0FGT007RUFDRSx5QkN2QkQ7QUNrQlA7QUZRTTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBRU5SO0FGUVE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQzFDRjtFRDJDRSxpQkFBQTtBRU5WO0FGU1E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUVQVjtBRldNO0VBQ0UsZUFBQTtBRVRSO0FGY1U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUVaWjtBRmdCUTtFQUNFLGNDdERIO0VEdURHLG1CQUFBO0FFZFY7QUZnQlU7RUFDRSxZQUFBO0FFZFo7QUZrQlE7RUFDRSxjQ3JFSjtFRHNFSSxtQkFBQTtBRWhCVjtBRmtCVTtFQUNFLFlBQUE7QUVoQlo7QUZvQlE7RUFDRSxjQ3RFRztBQ29EYjtBRm9CVTtFQUNFLFlBQUE7QUVsQlo7QUZxQlU7RUFDRSxjQ3ZGSjtBQ29FUjtBRnVCUTtFQUNFLGVBQUE7QUVyQlY7QUY0QkE7RUFDRTtJQUNFLDZCQUFBO0VFekJGO0VGMkJFO0lBQ0UsZUFBQTtFRXpCSjtFRjZCSTtJQUNFLGFBQUE7RUUzQk47RUY2Qk07SUFDRSxhQUFBO0VFM0JSO0VGNkJRO0lBQ0UsYUFBQTtFRTNCVjtFRmlDRTtJQUNFLHlCQ3BJYTtJRHFJYiw4QkFBQTtFRS9CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAmLmlzLWNsb3NlZCB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICAgICY6bm90KCNsb2dvLCAjc2VhcmNoKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlLXJvdXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiNsb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgICAmLmZhLWh0bWw1LFxyXG4gICAgICAgICYuZmEtY3NzMy1hbHQsXHJcbiAgICAgICAgJi5mYS1qcyB7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mYS1odG1sNSB7XHJcbiAgICAgICAgICBjb2xvcjogJGh0bWw7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNXB4O1xyXG5cclxuICAgICAgICAgICYuYWN0aXZlLXJvdXRlIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mYS1jc3MzLWFsdCB7XHJcbiAgICAgICAgICBjb2xvcjogJGNzcztcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMi41cHg7XHJcblxyXG4gICAgICAgICAgJi5hY3RpdmUtcm91dGUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZhLWpzIHtcclxuICAgICAgICAgIGNvbG9yOiAkamF2YXNjcmlwdDtcclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZS1yb3V0ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmEtY2hldnJvbi1sZWZ0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICBuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaS5mYXMuZmEtYmFycyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCguaXMtb3Blbikge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAjbG9nby1pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuaXMtb3BlbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiIsIm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5uYXYuaXMtY2xvc2VkIHtcbiAgd2lkdGg6IDU1cHg7XG59XG5uYXYgdWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbn1cbm5hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbm5hdiB1bCBsaTpub3QoI2xvZ28sICNzZWFyY2gpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjYztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxubmF2IHVsIGxpLmFjdGl2ZS1yb3V0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhY2M7XG59XG5uYXYgdWwgbGkjbG9nbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5uYXYgdWwgbGkjbG9nbyBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjOTI5MjkzO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cbm5hdiB1bCBsaSNsb2dvIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IHVsIGxpIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5uYXYgdWwgbGkgaS5mYS1odG1sNTpob3ZlciwgbmF2IHVsIGxpIGkuZmEtY3NzMy1hbHQ6aG92ZXIsIG5hdiB1bCBsaSBpLmZhLWpzOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxubmF2IHVsIGxpIGkuZmEtaHRtbDUge1xuICBjb2xvcjogI2ZmMDczYTtcbiAgcGFkZGluZy1sZWZ0OiAyLjVweDtcbn1cbm5hdiB1bCBsaSBpLmZhLWh0bWw1LmFjdGl2ZS1yb3V0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm5hdiB1bCBsaSBpLmZhLWNzczMtYWx0IHtcbiAgY29sb3I6ICMwMDA0ZmY7XG4gIHBhZGRpbmctbGVmdDogMi41cHg7XG59XG5uYXYgdWwgbGkgaS5mYS1jc3MzLWFsdC5hY3RpdmUtcm91dGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5uYXYgdWwgbGkgaS5mYS1qcyB7XG4gIGNvbG9yOiAjZjdmZjAwO1xufVxubmF2IHVsIGxpIGkuZmEtanMuYWN0aXZlLXJvdXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxubmF2IHVsIGxpIGkuZmEtanM6aG92ZXIge1xuICBjb2xvcjogIzQwYzk4MDtcbn1cbm5hdiB1bCBsaSBpLmZhLWNoZXZyb24tbGVmdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIG5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgbmF2IGkuZmFzLmZhLWJhcnMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBuYXY6bm90KC5pcy1vcGVuKSB1bCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBuYXY6bm90KC5pcy1vcGVuKSB1bCBsaSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBuYXY6bm90KC5pcy1vcGVuKSB1bCBsaSAjbG9nby1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgbmF2LmlzLW9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: sideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideNavComponent", function() { return sideNavComponent; });
var sideNavComponent = /** @class */ (function () {
    function sideNavComponent() {
        this.isClosed = true;
    }
    sideNavComponent.prototype.openMenu = function () {
        this.isClosed = false;
    };
    sideNavComponent.prototype.closeMenu = function () {
        this.isClosed = true;
    };
    return sideNavComponent;
}());



/***/ }),

/***/ "./src/app/services/offline-online/offline-online.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/offline-online/offline-online.service.ts ***!
  \*******************************************************************/
/*! exports provided: OfflineOnlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineOnlineService", function() { return OfflineOnlineService; });
/* harmony import */ var src_app_components_alert_models_alert_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/alert/models/alert.model */ "./src/app/components/alert/models/alert.model.ts");
/* harmony import */ var _components_alert_models_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/alert/models/enums/alert-types.enum */ "./src/app/components/alert/models/enums/alert-types.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var OfflineOnlineService = /** @class */ (function () {
    function OfflineOnlineService(alertService, window, platformId) {
        this.alertService = alertService;
        this.window = window;
        this.platformId = platformId;
    }
    OfflineOnlineService.prototype.init = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.onlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.window, 'online');
            this.offlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.window, 'offline');
            this.onlineSubscription();
            this.offlineSubscription();
        }
    };
    OfflineOnlineService.prototype.onlineSubscription = function () {
        var _this = this;
        this.onlineEvent.subscribe(function (e) {
            var onlineAlert = new src_app_components_alert_models_alert_model__WEBPACK_IMPORTED_MODULE_0__["Alert"]({ type: _components_alert_models_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_1__["AlertTypes"].Success, title: 'Online', content: 'Application back online', key: null });
            _this.alertService.callAlert(onlineAlert);
        });
    };
    OfflineOnlineService.prototype.offlineSubscription = function () {
        var _this = this;
        this.offlineEvent.subscribe(function (e) {
            var onlineAlert = new src_app_components_alert_models_alert_model__WEBPACK_IMPORTED_MODULE_0__["Alert"]({ type: _components_alert_models_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_1__["AlertTypes"].Error, title: 'Offline', content: 'Application went offline', key: null });
            _this.alertService.callAlert(onlineAlert);
        });
    };
    return OfflineOnlineService;
}());



/***/ }),

/***/ "./src/app/services/title/title.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/title/title.service.ts ***!
  \*************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/data/display-meta-data.data */ "./src/app/shared/models/data/display-meta-data.data.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var TitleService = /** @class */ (function () {
    function TitleService(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    TitleService.prototype.init = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; }))
            .subscribe(function (navigationEnd) {
            _this.updateTitle(navigationEnd);
        });
    };
    TitleService.prototype.updateTitle = function (navigation) {
        var urlPieces = navigation.url
            .split("/")
            .filter(function (piece) { return piece.length > 0; });
        urlPieces[urlPieces.length - 1] = this.removeHash(urlPieces);
        switch (urlPieces.length) {
            case 1:
                this.setTitlePage(urlPieces);
                break;
            case 2:
                this.setSubCategoryTitle(urlPieces);
                break;
            default:
                this.titleService.setTitle("Video Dev Docs | VDD");
        }
    };
    /**
     * slice the first character of the title to uppercase
     */
    TitleService.prototype.setTitlePage = function (urlPiece) {
        var capitalizeTitlePage = "" + urlPiece[0][0].toUpperCase() + urlPiece[0].slice(1) + " - Video Dev Docs | VDD";
        this.titleService.setTitle(capitalizeTitlePage);
    };
    /**
     * set title for only category page
     * the current scrumb or topic has choosen to representation
     */
    TitleService.prototype.setSubCategoryTitle = function (urlPieces) {
        var crrSubCategory = urlPieces[1];
        var title = crrSubCategory.toUpperCase() + " | VDD";
        // ! fixed crrSubCategory to be dynamic with route URL or scrumb ro topic
        if (crrSubCategory === "javascript") {
            this.titleService.setTitle(src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_2__["DISPLAY_META_DATA"][crrSubCategory] + " |  VDD");
        }
        this.titleService.setTitle(title);
    };
    TitleService.prototype.removeHash = function (urlPieces) {
        return urlPieces.length
            ? urlPieces[urlPieces.length - 1].split("#")[0]
            : "";
    };
    TitleService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function TitleService_Factory() { return new TitleService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); }, token: TitleService, providedIn: "root" });
    return TitleService;
}());



/***/ }),

/***/ "./src/app/shared/models/data/display-meta-data.data.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/data/display-meta-data.data.ts ***!
  \**************************************************************/
/*! exports provided: DISPLAY_META_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_META_DATA", function() { return DISPLAY_META_DATA; });
var DISPLAY_META_DATA = {
    javascript: {
        label: "JavaScript",
        iconClasses: "fab fa-js javascript"
    }
};


/***/ }),

/***/ "./src/app/shared/models/enums/meta-tag.enum.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/enums/meta-tag.enum.ts ***!
  \******************************************************/
/*! exports provided: MetaTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTag", function() { return MetaTag; });
var MetaTag;
(function (MetaTag) {
    MetaTag["Description"] = "description";
    MetaTag["TwitterCard"] = "twitter:card";
    MetaTag["TwitterSite"] = "twitter:site";
    MetaTag["TwitterTitle"] = "twitter:title";
    MetaTag["TwitterDescription"] = "twitter:description";
    MetaTag["TwitterCreator"] = "twitter:creator";
    MetaTag["TwitterImage"] = "twitter:image";
})(MetaTag || (MetaTag = {}));


/***/ }),

/***/ "./src/app/shared/seo/aseo.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/seo/aseo.service.ts ***!
  \********************************************/
/*! exports provided: ASeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASeoService", function() { return ASeoService; });
var ASeoService = /** @class */ (function () {
    function ASeoService() {
    }
    return ASeoService;
}());



/***/ }),

/***/ "./src/app/shared/seo/seo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/seo/seo.service.ts ***!
  \*******************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");

var SeoService = /** @class */ (function () {
    // description
    function SeoService(meta, titleSerive) {
        this.meta = meta;
        this.titleSerive = titleSerive;
    }
    SeoService.prototype.addMetaTag = function (name, content) {
        this.handleMetaUpdate(name, content);
    };
    SeoService.prototype.addTwitterMeta = function (content, imageUrl) {
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterCard, "summary");
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterSite, "@Sherk");
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterTitle, this.titleSerive.getTitle());
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterDescription, content);
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterCreator, "@Sherk");
        this.handleMetaUpdate(_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].TwitterDescription, imageUrl);
    };
    SeoService.prototype.handleMetaUpdate = function (name, content) {
        var metaTag = this.meta.updateTag({ name: name, content: content });
        if (!metaTag) {
            this.meta.addTag({ name: name, content: content });
        }
    };
    return SeoService;
}());



/***/ }),

/***/ "./src/app/shared/services/icon/aicon.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/icon/aicon.service.ts ***!
  \*******************************************************/
/*! exports provided: AIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIconService", function() { return AIconService; });
var AIconService = /** @class */ (function () {
    function AIconService() {
    }
    return AIconService;
}());



/***/ }),

/***/ "./src/app/shared/services/icon/icon.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/icon/icon.service.ts ***!
  \******************************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var src_app_views_category_models_enums_categories_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/views/category/models/enums/categories.enum */ "./src/app/views/category/models/enums/categories.enum.ts");

var IconService = /** @class */ (function () {
    function IconService() {
    }
    IconService.prototype.getIconByCategoryID = function (simpleId) {
        switch (simpleId) {
            case src_app_views_category_models_enums_categories_enum__WEBPACK_IMPORTED_MODULE_0__["Categories"].JavaScript:
                return 'fab fa-js';
            default:
                return '';
        }
    };
    return IconService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/category/models/enums/categories.enum.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/category/models/enums/categories.enum.ts ***!
  \****************************************************************/
/*! exports provided: Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
var Categories;
(function (Categories) {
    Categories["JavaScript"] = "javascript";
})(Categories || (Categories = {}));


/***/ }),

/***/ "./src/app/views/home/home.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/views/home/home.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/views/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["id", "home-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Video Dev Docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["id", "main-categories"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "i", [["class", "fab fa-js"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](8, 1)], function (_ck, _v) { var currVal_0 = _ck(_v, 8, 0, "category/javascript"); _ck(_v, 7, 0, currVal_0); }, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], [_shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_4__["ASeoService"]], null, null)], null, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/home/home.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/views/home/home.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
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
var styles = ["#home-container[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  height: 100%;\n  width: 100%;\n}\n#home-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  align-self: end;\n  margin-bottom: 0;\n}\n#home-container[_ngcontent-%COMP%]   #main-categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 30px;\n}\n#home-container[_ngcontent-%COMP%]   #main-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 100px;\n}\n#home-container[_ngcontent-%COMP%]   #main-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js[_ngcontent-%COMP%] {\n  color: #fffb07;\n}\n#home-container[_ngcontent-%COMP%]   #main-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-css3-alt[_ngcontent-%COMP%] {\n  color: #4666ff;\n}\n#home-container[_ngcontent-%COMP%]   #main-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-js[_ngcontent-%COMP%] {\n  color: #f7ff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FER0k7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDRE47QURJUTtFQUNFLGNBQUE7QUNGVjtBREtRO0VBQ0UsY0FBQTtBQ0hWO0FES1E7RUFDRSxjQUFBO0FDSFYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaDEge1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICNtYWluLWNhdGVnb3JpZXMge1xyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICAmLmZhLWpzIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmYjA3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mYS1jc3MzLWFsdCB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ2NjZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYS1qcyB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y3ZmYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2hvbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2hvbWUtY29udGFpbmVyIGgxIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI2hvbWUtY29udGFpbmVyICNtYWluLWNhdGVnb3JpZXMgdWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGdyaWQtZ2FwOiAzMHB4O1xufVxuI2hvbWUtY29udGFpbmVyICNtYWluLWNhdGVnb3JpZXMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4jaG9tZS1jb250YWluZXIgI21haW4tY2F0ZWdvcmllcyBsaSBpLmZhLWpzIHtcbiAgY29sb3I6ICNmZmZiMDc7XG59XG4jaG9tZS1jb250YWluZXIgI21haW4tY2F0ZWdvcmllcyBsaSBpLmZhLWNzczMtYWx0IHtcbiAgY29sb3I6ICM0NjY2ZmY7XG59XG4jaG9tZS1jb250YWluZXIgI21haW4tY2F0ZWdvcmllcyBsaSBpLmZhLWpzIHtcbiAgY29sb3I6ICNmN2ZmMDA7XG59Il19 */"];



/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");

var HomeComponent = /** @class */ (function () {
    function HomeComponent(seoService) {
        this.seoService = seoService;
        this.addMetaTags();
    }
    HomeComponent.prototype.addMetaTags = function () {
        var descriptionContent = "VideoDevDocs is video based documentation for learning, testing, training developers of all skill sets.";
        this.seoService.addMetaTag(src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_0__["MetaTag"].Description, descriptionContent);
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HTML\angular\video-dev-docs\video-docs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map