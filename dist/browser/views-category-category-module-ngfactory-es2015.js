(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-category-category-module-ngfactory"],{

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/shared/component/book/book.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/book/book.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_BooksComponent, View_BooksComponent_0, View_BooksComponent_Host_0, BooksComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BooksComponent", function() { return RenderType_BooksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BooksComponent_0", function() { return View_BooksComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BooksComponent_Host_0", function() { return View_BooksComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponentNgFactory", function() { return BooksComponentNgFactory; });
/* harmony import */ var _book_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.component.scss.shim.ngstyle */ "./src/app/shared/component/book/book.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _star_list_star_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../star-list/star-list.component.ngfactory */ "./src/app/shared/component/star-list/star-list.component.ngfactory.js");
/* harmony import */ var _star_list_star_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../star-list/star-list.component */ "./src/app/shared/component/star-list/star-list.component.ts");
/* harmony import */ var _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component.ngfactory */ "./src/app/shared/component/card/card.component.ngfactory.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "./src/app/shared/component/card/card.component.ts");
/* harmony import */ var _book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book.component */ "./src/app/shared/component/book/book.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_BooksComponent = [_book_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BooksComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BooksComponent, data: {} });

function View_BooksComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["id", "book"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["id", "book-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["id", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", "..."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["id", "book-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "div", [["id", "rating"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "a", [["id", "buy"], ["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-info-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Details "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "a", [["id", "stars"], ["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "app-star-list", [], null, null, null, _star_list_star_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_StarListComponent_0"], _star_list_star_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_StarListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _star_list_star_list_component__WEBPACK_IMPORTED_MODULE_4__["StarListComponent"], [], { rating: [0, "rating"] }, null)], function (_ck, _v) { var currVal_7 = _v.context.$implicit.rating; _ck(_v, 18, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.href; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.imageUrl; var currVal_2 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform(_v.context.$implicit.description, 0, 175)); _ck(_v, 8, 0, currVal_4); var currVal_5 = _v.context.$implicit.href; _ck(_v, 13, 0, currVal_5); var currVal_6 = _v.context.$implicit.href; _ck(_v, 16, 0, currVal_6); }); }
function View_BooksComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "app-card", [["id", "books"]], null, null, null, _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CardComponent_0"], _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], [], { title: [0, "title"], iconClasses: [1, "iconClasses"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "div", [["id", "books-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BooksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Recommended Books"; var currVal_1 = "fas fa-book"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.books; _ck(_v, 4, 0, currVal_2); }, null); }
function View_BooksComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-books", [], null, null, null, View_BooksComponent_0, RenderType_BooksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _book_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"], [], null, null)], null, null); }
var BooksComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-books", _book_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"], View_BooksComponent_Host_0, { books: "books" }, {}, []);



/***/ }),

/***/ "./src/app/shared/component/book/book.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/book/book.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
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
var styles = ["#books-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 1fr;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  background-color: #393939;\n  padding: 15px;\n  grid-column-gap: 20px;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  padding: 15px 30px;\n  display: block;\n  max-width: 160px;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-content[_ngcontent-%COMP%]   #information[_ngcontent-%COMP%] {\n  display: grid;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-content[_ngcontent-%COMP%]   #information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #c97e5a;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-content[_ngcontent-%COMP%]   #information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 0;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%] {\n  display: grid;\n  background-color: #393939;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%]   #rating[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 25px;\n  grid-template-columns: auto auto;\n  padding: 15px;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%]   #rating[_ngcontent-%COMP%]   #buy[_ngcontent-%COMP%], #books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%]   #rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c97e5a;\n}\n#books-container[_ngcontent-%COMP%]   #book[_ngcontent-%COMP%]   #book-details[_ngcontent-%COMP%]   #rating[_ngcontent-%COMP%]   #stars[_ngcontent-%COMP%] {\n  justify-self: end;\n}\n@media screen and (max-width: 768px) {\n  #books-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr;\n  }\n\n  #book-content[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9ib29rL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGJvb2tcXGJvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Jvb2svRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0RKO0FER0k7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkVaZ0I7RUZhaEIsYUFBQTtFQUNBLHFCQUFBO0FDRE47QURHTTtFQUNFLHlCRWhCQTtFRmlCQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESU07RUFDRSxhQUFBO0FDRlI7QURJUTtFQUNFLGNFTkQ7RUZPQyxhQUFBO0VBQ0EsZ0JBQUE7QUNGVjtBRElRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRlY7QURPSTtFQUNFLGFBQUE7RUFDQSx5QkV4Q2dCO0FEbUN0QjtBRE9NO0VBQ0UsU0FBQTtBQ0xSO0FEUU07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ05SO0FEUVE7O0VBRUUsY0VqQ0Q7QUQyQlQ7QURTUTtFQUNFLGlCQUFBO0FDUFY7QURjQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQ1hGOztFRGNBO0lBQ0UsK0JBQUE7RUNYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbiNib29rcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG5cclxuICAjYm9vayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcblxyXG4gICAgI2Jvb2stY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1iYWNrZ3JvdW5kO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2luZm9ybWF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2Jvb2stZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1iYWNrZ3JvdW5kO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JhdGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgI2J1eSxcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3N0YXJzIHtcclxuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjYm9va3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgI2Jvb2stY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gIH1cclxufVxyXG4iLCIjYm9va3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cbiNib29rcy1jb250YWluZXIgI2Jvb2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuI2Jvb2tzLWNvbnRhaW5lciAjYm9vayAjYm9vay1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgcGFkZGluZzogMTVweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xufVxuI2Jvb2tzLWNvbnRhaW5lciAjYm9vayAjYm9vay1jb250ZW50IGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTYwcHg7XG59XG4jYm9va3MtY29udGFpbmVyICNib29rICNib29rLWNvbnRlbnQgI2luZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbiNib29rcy1jb250YWluZXIgI2Jvb2sgI2Jvb2stY29udGVudCAjaW5mb3JtYXRpb24gaDMge1xuICBjb2xvcjogI2M5N2U1YTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiNib29rcy1jb250YWluZXIgI2Jvb2sgI2Jvb2stY29udGVudCAjaW5mb3JtYXRpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiNib29rcy1jb250YWluZXIgI2Jvb2sgI2Jvb2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XG59XG4jYm9va3MtY29udGFpbmVyICNib29rICNib29rLWRldGFpbHMgaHIge1xuICBtYXJnaW46IDA7XG59XG4jYm9va3MtY29udGFpbmVyICNib29rICNib29rLWRldGFpbHMgI3JhdGluZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4jYm9va3MtY29udGFpbmVyICNib29rICNib29rLWRldGFpbHMgI3JhdGluZyAjYnV5LFxuI2Jvb2tzLWNvbnRhaW5lciAjYm9vayAjYm9vay1kZXRhaWxzICNyYXRpbmcgaSB7XG4gIGNvbG9yOiAjYzk3ZTVhO1xufVxuI2Jvb2tzLWNvbnRhaW5lciAjYm9vayAjYm9vay1kZXRhaWxzICNyYXRpbmcgI3N0YXJzIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNib29rcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAjYm9vay1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICB9XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiRxdWF0ZXJuYXJ5LWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW5hdjogIzI1MjUyNTtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiRibGFjazogIzFlMWUxZTtcclxuXHJcbiRjb2xvcjogIzkyOTI5MztcclxuJGxpZ2h0LWdyZXk6ICM5MjkyOTM7XHJcblxyXG4kY29sb3ItbGk6ICM0MGM5ODA7XHJcbiRncmVlbjogIzQwYzk4MDtcclxuXHJcbiRjc3M6ICMwMDA0ZmY7XHJcbiRibHVlOiAjMDA3YWNjO1xyXG4kZmItYmx1ZTogIzJiNTY4ZTtcclxuJGxpbmtlZGluLWJsdWU6ICMwMDRmNjM7XHJcbiR0d2l0dGVyLWJsdWU6ICMxMWE4Y2Q7XHJcblxyXG4kaHRtbDogI2ZmMDczYTtcclxuXHJcbiRqYXZhc2NyaXB0OiAjZjdmZjAwO1xyXG4keWVsbG93OiAjZTVlNTEwO1xyXG5cclxuJHJlZDogI2ZmNjA1ODtcclxuJG9yYW5nZTogI2M5N2U1YTtcclxuXHJcbiR0YWJsZXQ6IDEwMjRweDtcclxuIl19 */"];



/***/ }),

/***/ "./src/app/shared/component/book/book.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/component/book/book.component.ts ***!
  \*********************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
class BooksComponent {
    constructor() {
        this.books = [];
    }
}


/***/ }),

/***/ "./src/app/shared/component/card/card.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/card/card.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_CardComponent, View_CardComponent_0, View_CardComponent_Host_0, CardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CardComponent", function() { return RenderType_CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardComponent_0", function() { return View_CardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardComponent_Host_0", function() { return View_CardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponentNgFactory", function() { return CardComponentNgFactory; });
/* harmony import */ var _card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component.scss.shim.ngstyle */ "./src/app/shared/component/card/card.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/shared/component/card/card.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CardComponent = [_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CardComponent, data: {} });

function View_CardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["id", "card-body"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.iconClasses; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.title; _ck(_v, 3, 0, currVal_1); }); }
function View_CardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-card", [], null, null, null, View_CardComponent_0, RenderType_CardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], [], null, null)], null, null); }
var CardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-card", _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], View_CardComponent_Host_0, { title: "title", iconClasses: "iconClasses" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/component/card/card.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/card/card.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
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
var styles = ["div[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #252525;\n  padding: 20px;\n}\ndiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 0;\n}\ndiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #929293;\n}\ndiv[_ngcontent-%COMP%]   #card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9jYXJkL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvY2FyZC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx5QkNGcUI7RURHckIsYUFBQTtBRURGO0FGR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRURKO0FGR0k7RUFDRSxrQkFBQTtFQUNBLGNDUEU7QUNNUjtBRktFO0VBQ0UsVUFBQTtBRUhKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItbmF2O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgaXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iLCIkYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuJHF1YXRlcm5hcnktYmFja2dyb3VuZDogIzIzMjMyMztcclxuJGJhY2tncm91bmQtY29sb3ItbmF2OiAjMjUyNTI1O1xyXG4kdGVydGlhcnktYmFja2dyb3VuZDogIzM5MzkzOTtcclxuJGJsYWNrOiAjMWUxZTFlO1xyXG5cclxuJGNvbG9yOiAjOTI5MjkzO1xyXG4kbGlnaHQtZ3JleTogIzkyOTI5MztcclxuXHJcbiRjb2xvci1saTogIzQwYzk4MDtcclxuJGdyZWVuOiAjNDBjOTgwO1xyXG5cclxuJGNzczogIzAwMDRmZjtcclxuJGJsdWU6ICMwMDdhY2M7XHJcbiRmYi1ibHVlOiAjMmI1NjhlO1xyXG4kbGlua2VkaW4tYmx1ZTogIzAwNGY2MztcclxuJHR3aXR0ZXItYmx1ZTogIzExYThjZDtcclxuXHJcbiRodG1sOiAjZmYwNzNhO1xyXG5cclxuJGphdmFzY3JpcHQ6ICNmN2ZmMDA7XHJcbiR5ZWxsb3c6ICNlNWU1MTA7XHJcblxyXG4kcmVkOiAjZmY2MDU4O1xyXG4kb3JhbmdlOiAjYzk3ZTVhO1xyXG5cclxuJHRhYmxldDogMTAyNHB4O1xyXG4iLCJkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbiAgcGFkZGluZzogMjBweDtcbn1cbmRpdiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmRpdiBoMiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzkyOTI5Mztcbn1cbmRpdiAjY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shared/component/card/card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/component/card/card.component.ts ***!
  \*********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
class CardComponent {
    constructor() {
        this.title = "";
        this.iconClasses = "";
    }
}


/***/ }),

/***/ "./src/app/shared/component/courses/courses.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/courses/courses.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_CoursesComponent, View_CoursesComponent_0, View_CoursesComponent_Host_0, CoursesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CoursesComponent", function() { return RenderType_CoursesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CoursesComponent_0", function() { return View_CoursesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CoursesComponent_Host_0", function() { return View_CoursesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponentNgFactory", function() { return CoursesComponentNgFactory; });
/* harmony import */ var _courses_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.component.scss.shim.ngstyle */ "./src/app/shared/component/courses/courses.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component.ngfactory */ "./src/app/shared/component/card/card.component.ngfactory.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/shared/component/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses.component */ "./src/app/shared/component/courses/courses.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_CoursesComponent = [_courses_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CoursesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CoursesComponent, data: {} });

function View_CoursesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["id", "course"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["id", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "Author"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.imageUrl; var currVal_2 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.authorImageUrl; _ck(_v, 5, 0, currVal_3); var currVal_4 = _v.context.$implicit.url; _ck(_v, 6, 0, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_5); var currVal_6 = _v.context.$implicit.author; _ck(_v, 10, 0, currVal_6); }); }
function View_CoursesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "app-card", [], null, null, null, _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], { title: [0, "title"], iconClasses: [1, "iconClasses"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "div", [["id", "courses-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CoursesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Recommended Courses"; var currVal_1 = "fas fa-play"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.courses; _ck(_v, 4, 0, currVal_2); }, null); }
function View_CoursesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-courses", [], null, null, null, View_CoursesComponent_0, RenderType_CoursesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"], [], null, null)], null, null); }
var CoursesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-courses", _courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"], View_CoursesComponent_Host_0, { courses: "courses" }, {}, []);



/***/ }),

/***/ "./src/app/shared/component/courses/courses.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/component/courses/courses.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = ["#courses-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  max-width: 1200px;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #393939;\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-column-gap: 10px;\n  grid-template-areas: \"author-pic title\" \"author-pic author-name\";\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: block;\n  grid-area: author-pic;\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  grid-area: title;\n  margin: 0;\n  color: #c97e5a;\n}\n#courses-container[_ngcontent-%COMP%]   #course[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-area: author-name;\n  color: white;\n  margin: 0;\n}\n@media screen and (max-width: 768px) {\n  #courses-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  #courses-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    align-self: end;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9jb3Vyc2VzL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGNvdXJzZXNcXGNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2NvdXJzZXMvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FER0U7RUFDRSxhQUFBO0VBQ0EseUJFUGtCO0FETXRCO0FER0k7RUFDRSxXQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQ0U7QUNIUjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNKUjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0VSQztBRElUO0FETU07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSlI7QURVQTtFQUNFO0lBQ0UsMEJBQUE7RUNQRjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI2NvdXJzZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcblxyXG4gICNjb3Vyc2Uge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1iYWNrZ3JvdW5kO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNkZXRhaWxzIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJhdXRob3ItcGljIHRpdGxlXCJcclxuICAgICAgICBcImF1dGhvci1waWMgYXV0aG9yLW5hbWVcIjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGdyaWQtYXJlYTogYXV0aG9yLXBpYztcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhdXRob3ItbmFtZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNjb3Vyc2VzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjY291cnNlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG4jY291cnNlcy1jb250YWluZXIgI2NvdXJzZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XG59XG4jY291cnNlcy1jb250YWluZXIgI2NvdXJzZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb3Vyc2VzLWNvbnRhaW5lciAjY291cnNlICNkZXRhaWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXV0aG9yLXBpYyB0aXRsZVwiIFwiYXV0aG9yLXBpYyBhdXRob3ItbmFtZVwiO1xufVxuI2NvdXJzZXMtY29udGFpbmVyICNjb3Vyc2UgI2RldGFpbHMgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZ3JpZC1hcmVhOiBhdXRob3ItcGljO1xufVxuI2NvdXJzZXMtY29udGFpbmVyICNjb3Vyc2UgI2RldGFpbHMgaDQge1xuICBncmlkLWFyZWE6IHRpdGxlO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjYzk3ZTVhO1xufVxuI2NvdXJzZXMtY29udGFpbmVyICNjb3Vyc2UgI2RldGFpbHMgcCB7XG4gIGdyaWQtYXJlYTogYXV0aG9yLW5hbWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjY291cnNlcy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gICNjb3Vyc2VzLWNvbnRhaW5lciBhIHtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gIH1cbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuJHF1YXRlcm5hcnktYmFja2dyb3VuZDogIzIzMjMyMztcclxuJGJhY2tncm91bmQtY29sb3ItbmF2OiAjMjUyNTI1O1xyXG4kdGVydGlhcnktYmFja2dyb3VuZDogIzM5MzkzOTtcclxuJGJsYWNrOiAjMWUxZTFlO1xyXG5cclxuJGNvbG9yOiAjOTI5MjkzO1xyXG4kbGlnaHQtZ3JleTogIzkyOTI5MztcclxuXHJcbiRjb2xvci1saTogIzQwYzk4MDtcclxuJGdyZWVuOiAjNDBjOTgwO1xyXG5cclxuJGNzczogIzAwMDRmZjtcclxuJGJsdWU6ICMwMDdhY2M7XHJcbiRmYi1ibHVlOiAjMmI1NjhlO1xyXG4kbGlua2VkaW4tYmx1ZTogIzAwNGY2MztcclxuJHR3aXR0ZXItYmx1ZTogIzExYThjZDtcclxuXHJcbiRodG1sOiAjZmYwNzNhO1xyXG5cclxuJGphdmFzY3JpcHQ6ICNmN2ZmMDA7XHJcbiR5ZWxsb3c6ICNlNWU1MTA7XHJcblxyXG4kcmVkOiAjZmY2MDU4O1xyXG4kb3JhbmdlOiAjYzk3ZTVhO1xyXG5cclxuJHRhYmxldDogMTAyNHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/shared/component/courses/courses.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/courses/courses.component.ts ***!
  \***************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
class CoursesComponent {
    constructor() {
        this.courses = [];
    }
}


/***/ }),

/***/ "./src/app/shared/component/star-list/star-list.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/star-list/star-list.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_StarListComponent, View_StarListComponent_0, View_StarListComponent_Host_0, StarListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StarListComponent", function() { return RenderType_StarListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StarListComponent_0", function() { return View_StarListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StarListComponent_Host_0", function() { return View_StarListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListComponentNgFactory", function() { return StarListComponentNgFactory; });
/* harmony import */ var _star_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star-list.component.scss.shim.ngstyle */ "./src/app/shared/component/star-list/star-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _star_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star-list.component */ "./src/app/shared/component/star-list/star-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_StarListComponent = [_star_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_StarListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_StarListComponent, data: {} });

function View_StarListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fas fa-star"]], null, null, null, null, null))], null, null); }
function View_StarListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fas fa-star-half-alt"]], null, null, null, null, null))], null, null); }
function View_StarListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "far fa-star"]], null, null, null, null, null))], null, null); }
function View_StarListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StarListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StarListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StarListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fullStars; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.hasHalfStars; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.emptyStars; _ck(_v, 5, 0, currVal_2); }, null); }
function View_StarListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-star-list", [], null, null, null, View_StarListComponent_0, RenderType_StarListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _star_list_component__WEBPACK_IMPORTED_MODULE_3__["StarListComponent"], [], null, null)], null, null); }
var StarListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-star-list", _star_list_component__WEBPACK_IMPORTED_MODULE_3__["StarListComponent"], View_StarListComponent_Host_0, { rating: "rating" }, {}, []);



/***/ }),

/***/ "./src/app/shared/component/star-list/star-list.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/star-list/star-list.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
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
var styles = ["i[_ngcontent-%COMP%] {\n  color: #e5e510;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9zdGFyLWxpc3QvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcc3Rhci1saXN0XFxzdGFyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc3Rhci1saXN0L0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc3Rhci1saXN0L3N0YXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGNDa0JRO0FDbkJUIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9zdGFyLWxpc3Qvc3Rhci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuaXtcclxuIGNvbG9yOiAkeWVsbG93O1xyXG59XHJcbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiIsImkge1xuICBjb2xvcjogI2U1ZTUxMDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shared/component/star-list/star-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/star-list/star-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: StarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarListComponent", function() { return StarListComponent; });
class StarListComponent {
    constructor() {
        this.rating = 5;
    }
    get fullStars() {
        const totalFullStars = Math.floor(this.rating);
        return Array(totalFullStars).fill(0);
    }
    get hasHalfStars() {
        const rating = this.rating;
        const totalFullStars = Math.floor(this.rating);
        const hasHalfStars = rating - totalFullStars >= 0.5 && rating !== 5;
        return hasHalfStars;
    }
    get emptyStars() {
        const rating = this.rating;
        const highestRating = 5;
        const totalEmptyStars = Math.floor(highestRating - rating);
        return Array(totalEmptyStars).fill(0);
    }
}


/***/ }),

/***/ "./src/app/shared/models/book.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/book.model.ts ***!
  \*********************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
class Book {
    constructor(data) {
        const defaults = Object.assign({ imageUrl: 'https://via.placeholder.com/75x100', title: '', description: '', href: '', rating: 5 }, data);
        this.imageUrl = defaults.imageUrl;
        this.title = defaults.title;
        this.description = defaults.description;
        this.href = defaults.href;
        this.rating = defaults.rating;
    }
}


/***/ }),

/***/ "./src/app/shared/models/course.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/course.model.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(data) {
        const defaults = Object.assign({ imageUrl: 'https://via.placeholder.com/640x360', title: '', author: '', time: '', authorImageUrl: '', url: '' }, data);
        this.imageUrl = defaults.imageUrl;
        this.title = defaults.title;
        this.author = defaults.author;
        this.authorImageUrl = defaults.authorImageUrl;
        this.url = defaults.url;
    }
}


/***/ }),

/***/ "./src/app/shared/models/detail.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/detail.model.ts ***!
  \***********************************************/
/*! exports provided: Detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail", function() { return Detail; });
class Detail {
    constructor(data) {
        const defaults = Object.assign({ videoId: '', topicSimpleId: '', simpleId: '', label: '', description: '', thumbnailUrl: '', categorySimpleId: '' }, data);
        this.categorySimpleId = defaults.categorySimpleId;
        this.simpleId = defaults.simpleId;
        this.videoId = defaults.videoId;
        this.topicSimpleId = defaults.topicSimpleId;
        this.label = defaults.label;
        this.description = defaults.description;
        this.thumbnailUrl = `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg`;
    }
}


/***/ }),

/***/ "./src/app/shared/services/http-utility/ahttp-utility.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/http-utility/ahttp-utility.service.ts ***!
  \***********************************************************************/
/*! exports provided: AHttpUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AHttpUtilityService", function() { return AHttpUtilityService; });
class AHttpUtilityService {
}


/***/ }),

/***/ "./src/app/shared/services/http-utility/http-utility.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/http-utility/http-utility.service.ts ***!
  \**********************************************************************/
/*! exports provided: HttpUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUtilityService", function() { return HttpUtilityService; });
/* harmony import */ var _ahttp_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ahttp-utility.service */ "./src/app/shared/services/http-utility/ahttp-utility.service.ts");

class HttpUtilityService extends _ahttp_utility_service__WEBPACK_IMPORTED_MODULE_0__["AHttpUtilityService"] {
    constructor() {
        super();
        this.base = "https://video-docs-services.herokuapp.com/api";
    }
}


/***/ }),

/***/ "./src/app/views/category/category.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/views/category/category.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_CategoryComponent, View_CategoryComponent_0, View_CategoryComponent_Host_0, CategoryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryComponent", function() { return RenderType_CategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryComponent_0", function() { return View_CategoryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryComponent_Host_0", function() { return View_CategoryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponentNgFactory", function() { return CategoryComponentNgFactory; });
/* harmony import */ var _category_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component.scss.shim.ngstyle */ "./src/app/views/category/category.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_bread_crumbs_bread_crumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bread-crumbs/bread-crumbs.component.ngfactory */ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ngfactory.js");
/* harmony import */ var _components_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bread-crumbs/bread-crumbs.component */ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ts");
/* harmony import */ var _components_bread_crumbs_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bread-crumbs/service/bread-crumbs/bread-crumbs.service */ "./src/app/views/category/components/bread-crumbs/service/bread-crumbs/bread-crumbs.service.ts");
/* harmony import */ var _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component.ngfactory */ "./src/app/views/category/components/header/header.component.ngfactory.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/views/category/components/header/header.component.ts");
/* harmony import */ var _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/icon/aicon.service */ "./src/app/shared/services/icon/aicon.service.ts");
/* harmony import */ var _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/* harmony import */ var _components_side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/side-bar/side-bar.component.ngfactory */ "./src/app/views/category/components/side-bar/side-bar.component.ngfactory.js");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/views/category/components/side-bar/side-bar.component.ts");
/* harmony import */ var _shared_component_book_book_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/component/book/book.component.ngfactory */ "./src/app/shared/component/book/book.component.ngfactory.js");
/* harmony import */ var _shared_component_book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/component/book/book.component */ "./src/app/shared/component/book/book.component.ts");
/* harmony import */ var _shared_component_courses_courses_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/component/courses/courses.component.ngfactory */ "./src/app/shared/component/courses/courses.component.ngfactory.js");
/* harmony import */ var _shared_component_courses_courses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/component/courses/courses.component */ "./src/app/shared/component/courses/courses.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category.component */ "./src/app/views/category/category.component.ts");
/* harmony import */ var _services_resources_aresources_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/resources/aresources.service */ "./src/app/views/category/services/resources/aresources.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_CategoryComponent = [_category_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategoryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoryComponent, data: {} });

function View_CategoryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["id", "category-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-bread-crumbs", [], null, null, null, _components_bread_crumbs_bread_crumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BreadCrumbsComponent_0"], _components_bread_crumbs_bread_crumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BreadCrumbsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbsComponent"], [_components_bread_crumbs_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbsService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-header", [], null, null, null, _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_HeaderComponent_0"], _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], [_shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_7__["AIconService"], _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_8__["AHeaderService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-side-bar", [], null, null, null, _components_side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_SideBarComponent_0"], _components_side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_SideBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-books", [["id", "books"]], null, null, null, _shared_component_book_book_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_BooksComponent_0"], _shared_component_book_book_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_BooksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _shared_component_book_book_component__WEBPACK_IMPORTED_MODULE_12__["BooksComponent"], [], { books: [0, "books"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "app-courses", [["id", "courses"]], null, null, null, _shared_component_courses_courses_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_CoursesComponent_0"], _shared_component_courses_courses_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_CoursesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _shared_component_courses_courses_component__WEBPACK_IMPORTED_MODULE_14__["CoursesComponent"], [], { courses: [0, "courses"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["id", "category-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resources.books; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.resources.courses; _ck(_v, 10, 0, currVal_1); _ck(_v, 13, 0); }, null); }
function View_CategoryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-category", [], null, null, null, View_CategoryComponent_0, RenderType_CategoryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _services_resources_aresources_service__WEBPACK_IMPORTED_MODULE_17__["AResourcesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-category", _category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"], View_CategoryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/category.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/views/category/category.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
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
var styles = ["#category-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr 300px;\n  margin-left: 50px;\n  grid-template-areas: \"breadCrumbs breadCrumbs\" \"header .\" \"document side-bar\" \"courses side-bar\" \"books side-bar\";\n}\n#category-container[_ngcontent-%COMP%]   app-bread-crumbs[_ngcontent-%COMP%] {\n  grid-area: breadCrumbs;\n}\n#category-container[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n  grid-area: header;\n}\n#category-container[_ngcontent-%COMP%]   app-side-bar[_ngcontent-%COMP%] {\n  grid-area: side-bar;\n}\n#category-container[_ngcontent-%COMP%]   app-books[_ngcontent-%COMP%] {\n  grid-area: books;\n}\n#category-container[_ngcontent-%COMP%]   app-courses[_ngcontent-%COMP%] {\n  grid-area: courses;\n}\n#category-container[_ngcontent-%COMP%]   #category-content[_ngcontent-%COMP%] {\n  grid-area: document;\n}\n@media screen and (max-width: 768px) {\n  #category-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n    grid-template-columns: 1fr;\n    grid-template-areas: \"breadCrumbs\" \"header\" \"document\" \"courses\" \"books\" \"side-bar\";\n  }\n  #category-container[_ngcontent-%COMP%]   #category-content[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%]   #video-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlIQUNFO0FDRko7QURRRTtFQUNFLHNCQUFBO0FDTko7QURTRTtFQUNFLGlCQUFBO0FDUEo7QURVRTtFQUNFLG1CQUFBO0FDUko7QURXRTtFQUNFLGdCQUFBO0FDVEo7QURZRTtFQUNFLGtCQUFBO0FDVko7QURhRTtFQUNFLG1CQUFBO0FDWEo7QURlQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLDBCQUFBO0lBQ0EsbUZBQ0U7RUNiSjtFRHNCTTtJQUNFLDBCQUFBO0VDcEJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI2NhdGVnb3J5LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJicmVhZENydW1icyBicmVhZENydW1ic1wiXHJcbiAgICBcImhlYWRlciAuXCJcclxuICAgIFwiZG9jdW1lbnQgc2lkZS1iYXJcIlxyXG4gICAgXCJjb3Vyc2VzIHNpZGUtYmFyXCJcclxuICAgIFwiYm9va3Mgc2lkZS1iYXJcIjtcclxuXHJcbiAgYXBwLWJyZWFkLWNydW1icyB7XHJcbiAgICBncmlkLWFyZWE6IGJyZWFkQ3J1bWJzO1xyXG4gIH1cclxuXHJcbiAgYXBwLWhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICB9XHJcblxyXG4gIGFwcC1zaWRlLWJhciB7XHJcbiAgICBncmlkLWFyZWE6IHNpZGUtYmFyO1xyXG4gIH1cclxuXHJcbiAgYXBwLWJvb2tzIHtcclxuICAgIGdyaWQtYXJlYTogYm9va3M7XHJcbiAgfVxyXG5cclxuICBhcHAtY291cnNlcyB7XHJcbiAgICBncmlkLWFyZWE6IGNvdXJzZXM7XHJcbiAgfVxyXG5cclxuICAjY2F0ZWdvcnktY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGRvY3VtZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjY2F0ZWdvcnktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImJyZWFkQ3J1bWJzXCJcclxuICAgICAgXCJoZWFkZXJcIlxyXG4gICAgICBcImRvY3VtZW50XCJcclxuICAgICAgXCJjb3Vyc2VzXCJcclxuICAgICAgXCJib29rc1wiXHJcbiAgICAgIFwic2lkZS1iYXJcIjtcclxuXHJcbiAgICAjY2F0ZWdvcnktY29udGVudCB7XHJcbiAgICAgICN2aWRlbyB7XHJcbiAgICAgICAgI3ZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYnJlYWRDcnVtYnMgYnJlYWRDcnVtYnNcIiBcImhlYWRlciAuXCIgXCJkb2N1bWVudCBzaWRlLWJhclwiIFwiY291cnNlcyBzaWRlLWJhclwiIFwiYm9va3Mgc2lkZS1iYXJcIjtcbn1cbiNjYXRlZ29yeS1jb250YWluZXIgYXBwLWJyZWFkLWNydW1icyB7XG4gIGdyaWQtYXJlYTogYnJlYWRDcnVtYnM7XG59XG4jY2F0ZWdvcnktY29udGFpbmVyIGFwcC1oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cbiNjYXRlZ29yeS1jb250YWluZXIgYXBwLXNpZGUtYmFyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlLWJhcjtcbn1cbiNjYXRlZ29yeS1jb250YWluZXIgYXBwLWJvb2tzIHtcbiAgZ3JpZC1hcmVhOiBib29rcztcbn1cbiNjYXRlZ29yeS1jb250YWluZXIgYXBwLWNvdXJzZXMge1xuICBncmlkLWFyZWE6IGNvdXJzZXM7XG59XG4jY2F0ZWdvcnktY29udGFpbmVyICNjYXRlZ29yeS1jb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBkb2N1bWVudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJicmVhZENydW1ic1wiIFwiaGVhZGVyXCIgXCJkb2N1bWVudFwiIFwiY291cnNlc1wiIFwiYm9va3NcIiBcInNpZGUtYmFyXCI7XG4gIH1cbiAgI2NhdGVnb3J5LWNvbnRhaW5lciAjY2F0ZWdvcnktY29udGVudCAjdmlkZW8gI3ZpZGVvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_resources_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/resources.model */ "./src/app/views/category/models/resources.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class CategoryComponent {
    constructor(route, resourcesService) {
        this.route = route;
        this.resourcesService = resourcesService;
        this.resources = new _models_resources_model__WEBPACK_IMPORTED_MODULE_1__["Resources"]();
    }
    ngOnInit() {
        this.updateResources();
    }
    updateResources() {
        this.route.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { categoryId } = params;
            this.resources = yield this.resourcesService.getResourcesById(categoryId);
        }));
    }
}


/***/ }),

/***/ "./src/app/views/category/category.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/views/category/category.module.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: CategoryModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModuleNgFactory", function() { return CategoryModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.module */ "./src/app/views/category/category.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _category_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component.ngfactory */ "./src/app/views/category/category.component.ngfactory.js");
/* harmony import */ var _views_category_home_category_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/category-home/category-home.component.ngfactory */ "./src/app/views/category/views/category-home/category-home.component.ngfactory.js");
/* harmony import */ var _views_topic_topic_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/topic/topic.component.ngfactory */ "./src/app/views/category/views/topic/topic.component.ngfactory.js");
/* harmony import */ var _views_detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/detail/detail.component.ngfactory */ "./src/app/views/category/views/detail/detail.component.ngfactory.js");
/* harmony import */ var _components_resources_resources_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/resources/resources.component.ngfactory */ "./src/app/views/category/components/resources/resources.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_alert_services_local_storage_alocal_storage_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/alert/services/local-storage/alocal-storage.model */ "./src/app/components/alert/services/local-storage/alocal-storage.model.ts");
/* harmony import */ var _components_alert_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/alert/services/local-storage/local-storage.service */ "./src/app/components/alert/services/local-storage/local-storage.service.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/* harmony import */ var _shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/seo/seo.service */ "./src/app/shared/seo/seo.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/icon/aicon.service */ "./src/app/shared/services/icon/aicon.service.ts");
/* harmony import */ var _shared_services_icon_icon_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services/icon/icon.service */ "./src/app/shared/services/icon/icon.service.ts");
/* harmony import */ var _components_bread_crumbs_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bread-crumbs/service/bread-crumbs/bread-crumbs.service */ "./src/app/views/category/components/bread-crumbs/service/bread-crumbs/bread-crumbs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/http-utility/ahttp-utility.service */ "./src/app/shared/services/http-utility/ahttp-utility.service.ts");
/* harmony import */ var _shared_services_http_utility_http_utility_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/services/http-utility/http-utility.service */ "./src/app/shared/services/http-utility/http-utility.service.ts");
/* harmony import */ var _services_category_acategory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/category/acategory.service */ "./src/app/views/category/services/category/acategory.service.ts");
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/category/category.service */ "./src/app/views/category/services/category/category.service.ts");
/* harmony import */ var _services_topic_atopic_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/topic/atopic.service */ "./src/app/views/category/services/topic/atopic.service.ts");
/* harmony import */ var _services_topic_topic_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/topic/topic.service */ "./src/app/views/category/services/topic/topic.service.ts");
/* harmony import */ var _services_resources_aresources_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/resources/aresources.service */ "./src/app/views/category/services/resources/aresources.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/resources/resources.service */ "./src/app/views/category/services/resources/resources.service.ts");
/* harmony import */ var _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/detail/adetail.service */ "./src/app/views/category/services/detail/adetail.service.ts");
/* harmony import */ var _services_detail_detail_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/detail/detail.service */ "./src/app/views/category/services/detail/detail.service.ts");
/* harmony import */ var _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/header/service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/* harmony import */ var _components_header_service_header_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/header/service/header.service */ "./src/app/views/category/components/header/service/header.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./category.component */ "./src/app/views/category/category.component.ts");
/* harmony import */ var _views_category_home_category_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/category-home/category-home.component */ "./src/app/views/category/views/category-home/category-home.component.ts");
/* harmony import */ var _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/topic/topic.component */ "./src/app/views/category/views/topic/topic.component.ts");
/* harmony import */ var _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/detail/detail.component */ "./src/app/views/category/views/detail/detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































var CategoryModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_category_module__WEBPACK_IMPORTED_MODULE_1__["CategoryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _category_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CategoryComponentNgFactory"], _views_category_home_category_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CategoryHomeComponentNgFactory"], _views_topic_topic_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TopicComponentNgFactory"], _views_detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DetailComponentNgFactory"], _components_resources_resources_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ResourcesComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_alert_services_local_storage_alocal_storage_model__WEBPACK_IMPORTED_MODULE_10__["ALocalStorage"], _components_alert_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_12__["ASeoService"], _shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_13__["SeoService"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["Title"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_15__["AIconService"], _shared_services_icon_icon_service__WEBPACK_IMPORTED_MODULE_16__["IconService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_bread_crumbs_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_17__["BreadCrumbsService"], _components_bread_crumbs_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_17__["BreadCrumbsService"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__["AHttpUtilityService"], _shared_services_http_utility_http_utility_service__WEBPACK_IMPORTED_MODULE_20__["HttpUtilityService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_category_acategory_service__WEBPACK_IMPORTED_MODULE_21__["ACategoryService"], _services_category_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"], [_shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__["AHttpUtilityService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_topic_atopic_service__WEBPACK_IMPORTED_MODULE_23__["ATopicService"], _services_topic_topic_service__WEBPACK_IMPORTED_MODULE_24__["TopicService"], [_shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__["AHttpUtilityService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_resources_aresources_service__WEBPACK_IMPORTED_MODULE_25__["AResourcesService"], _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_26__["ResourcesService"], [_shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__["AHttpUtilityService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_27__["ADetailService"], _services_detail_detail_service__WEBPACK_IMPORTED_MODULE_28__["DetailService"], [_shared_services_http_utility_ahttp_utility_service__WEBPACK_IMPORTED_MODULE_19__["AHttpUtilityService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_29__["AHeaderService"], _components_header_service_header_service__WEBPACK_IMPORTED_MODULE_30__["HeaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _category_module__WEBPACK_IMPORTED_MODULE_1__["CategoryModule"], _category_module__WEBPACK_IMPORTED_MODULE_1__["CategoryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () { return [[{ path: ":categoryId", component: _category_component__WEBPACK_IMPORTED_MODULE_32__["CategoryComponent"], children: [{ path: "", component: _views_category_home_category_home_component__WEBPACK_IMPORTED_MODULE_33__["CategoryHomeComponent"] }, { path: "topic/:topicId", component: _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_34__["TopicComponent"] }, { path: "topic/:topicId/detail/:detailId", component: _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_35__["DetailComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
class CategoryModule {
}


/***/ }),

/***/ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_BreadCrumbsComponent, View_BreadCrumbsComponent_0, View_BreadCrumbsComponent_Host_0, BreadCrumbsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BreadCrumbsComponent", function() { return RenderType_BreadCrumbsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadCrumbsComponent_0", function() { return View_BreadCrumbsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadCrumbsComponent_Host_0", function() { return View_BreadCrumbsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsComponentNgFactory", function() { return BreadCrumbsComponentNgFactory; });
/* harmony import */ var _bread_crumbs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bread-crumbs.component.scss.shim.ngstyle */ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bread_crumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bread-crumbs.component */ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ts");
/* harmony import */ var _service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/bread-crumbs/bread-crumbs.service */ "./src/app/views/category/components/bread-crumbs/service/bread-crumbs/bread-crumbs.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_BreadCrumbsComponent = [_bread_crumbs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BreadCrumbsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BreadCrumbsComponent, data: {} });

function View_BreadCrumbsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit.iconClasses); _ck(_v, 2, 0, currVal_0); }, null); }
function View_BreadCrumbsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BreadCrumbsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "fas fa-caret-right"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getRouteUrl(_v.context.index); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.iconClasses; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 5, 0, currVal_2); }); }
function View_BreadCrumbsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BreadCrumbsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.breadCrumbs; _ck(_v, 3, 0, currVal_0); }, null); }
function View_BreadCrumbsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bread-crumbs", [], null, null, null, View_BreadCrumbsComponent_0, RenderType_BreadCrumbsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _bread_crumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbsComponent"], [_service_bread_crumbs_bread_crumbs_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbsService"]], null, null)], null, null); }
var BreadCrumbsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bread-crumbs", _bread_crumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbsComponent"], View_BreadCrumbsComponent_Host_0, { breadCrumbs: "breadCrumbs" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/category/components/bread-crumbs/bread-crumbs.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************/
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
var styles = ["div[_ngcontent-%COMP%] {\n  background-color: #2b2b2b;\n  margin-bottom: 10px;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: left;\n  align-content: center;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: auto auto auto;\n  align-items: center;\n  padding: 5px 5px 5px 10px;\n  text-transform: capitalize;\n  background-color: #2b2b2b;\n  border-right: 1px solid #1e1e1e;\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type   i.fa-js[_ngcontent-%COMP%] {\n  color: #f7ff00;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  background-color: #1e1e1e;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   p[_ngcontent-%COMP%] {\n  color: white;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   i.fa-caret-right[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  div[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9icmVhZC1jcnVtYnMvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNvbXBvbmVudHNcXGJyZWFkLWNydW1ic1xcYnJlYWQtY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL2JyZWFkLWNydW1icy9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL2JyZWFkLWNydW1icy9icmVhZC1jcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNIaUI7RURJakIsbUJBQUE7QUVERjtBRkdFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUVESjtBRkdJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQ3BCYTtFRHFCYiwrQkFBQTtFQUNBLGVBQUE7QUVETjtBRkdNO0VBQ0UsU0FBQTtBRURSO0FGS1E7RUFDRSxrQkFBQTtBRUhWO0FGS1U7RUFDRSxjQ2JDO0FDVWI7QUZRTTtFQUNFLHlCQ25DQTtBQzZCUjtBRlFRO0VBQ0UsWUFBQTtBRU5WO0FGU1U7RUFDRSxhQUFBO0FFUFo7QUZlQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VFWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvYnJlYWQtY3J1bWJzL2JyZWFkLWNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtZ2FwOiA1cHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJsYWNrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgJi5mYS1qcyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkamF2YXNjcmlwdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICYuZmEtY2FyZXQtcmlnaHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBkaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG59XHJcbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiIsImRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5kaXYgdWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuZGl2IHVsIGxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxZTFlMWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdiB1bCBsaSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuZGl2IHVsIGxpOmZpcnN0LW9mLXR5cGUgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbmRpdiB1bCBsaTpmaXJzdC1vZi10eXBlIGkuZmEtanMge1xuICBjb2xvcjogI2Y3ZmYwMDtcbn1cbmRpdiB1bCBsaTpsYXN0LW9mLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xufVxuZGl2IHVsIGxpOmxhc3Qtb2YtdHlwZSBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2IHVsIGxpOmxhc3Qtb2YtdHlwZSBpLmZhLWNhcmV0LXJpZ2h0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/category/components/bread-crumbs/bread-crumbs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BreadCrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsComponent", function() { return BreadCrumbsComponent; });
class BreadCrumbsComponent {
    constructor(breadCrumbsService) {
        this.breadCrumbsService = breadCrumbsService;
        this.breadCrumbs = [];
        this.breadCrumbsService.breadCrumbsSubject
            .asObservable()
            .subscribe((breadCrumbs) => {
            this.breadCrumbs = breadCrumbs;
        });
    }
    getRouteUrl(index) {
        let url = "/category/";
        if (index >= 0) {
            url += this.breadCrumbs[0].urlPiece;
        }
        if (index >= 1) {
            url += `/topic/${this.breadCrumbs[1].urlPiece}`;
        }
        if (index >= 2) {
            url += `/detail/${this.breadCrumbs[2].urlPiece}`;
        }
        return url;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/bread-crumbs/service/bread-crumbs/bread-crumbs.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/category/components/bread-crumbs/service/bread-crumbs/bread-crumbs.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BreadCrumbsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsService", function() { return BreadCrumbsService; });
/* harmony import */ var src_app_views_category_models_bread_crumbs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/views/category/models/bread-crumbs.model */ "./src/app/views/category/models/bread-crumbs.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class BreadCrumbsService {
    constructor(router) {
        this.router = router;
        this.breadCrumbsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((navigationEnd) => {
            this.updateBreadCrumbs(navigationEnd.url);
        });
    }
    updateBreadCrumbs(url) {
        const nonValidUrlPieces = ["category", "topic", "detail"];
        const validCrumbs = url
            .split("/")
            .filter(piece => piece.length > 0 && !nonValidUrlPieces.includes(piece));
        validCrumbs[validCrumbs.length - 1] = this.removeHash(validCrumbs);
        const crumbPices = validCrumbs.map(p => new src_app_views_category_models_bread_crumbs_model__WEBPACK_IMPORTED_MODULE_0__["BreadCrumb"]({ urlPiece: p }));
        this.breadCrumbsSubject.next(crumbPices);
    }
    removeHash(urlPieces) {
        return urlPieces.length
            ? urlPieces[urlPieces.length - 1].split("#")[0]
            : "";
    }
}


/***/ }),

/***/ "./src/app/views/category/components/header/header.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/views/category/components/header/header.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/views/category/components/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/views/category/components/header/header.component.ts");
/* harmony import */ var _shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/icon/aicon.service */ "./src/app/shared/services/icon/aicon.service.ts");
/* harmony import */ var _service_aheader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.iconClasses, _co.categoryCSSClass); _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.header.label; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.header.description; _ck(_v, 8, 0, currVal_2); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_shared_services_icon_aicon_service__WEBPACK_IMPORTED_MODULE_4__["AIconService"], _service_aheader_service__WEBPACK_IMPORTED_MODULE_5__["AHeaderService"]], null, null)], null, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/header/header.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/views/category/components/header/header.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
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
var styles = ["header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"icon title\" \"description description\";\n  grid-template-columns: auto auto;\n  grid-column-gap: 20px;\n  align-items: center;\n  grid-area: header;\n}\nheader[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  grid-area: icon;\n  font-size: 100px;\n  justify-self: end;\n}\nheader[_ngcontent-%COMP%]   i.javascript[_ngcontent-%COMP%] {\n  color: #f7ff00;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  grid-area: title;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-area: description;\n  text-align: center;\n  color: white;\n  padding: 0 20px 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9oZWFkZXIvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsMkRBQ0U7RUFFRixnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0hGO0FES0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FES0k7RUFDRSxjRUVPO0FETGI7QURPRTtFQUNFLGdCQUFBO0FDTEo7QURRRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImljb24gdGl0bGVcIlxyXG4gICAgXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG5cclxuICBpIHtcclxuICAgIGdyaWQtYXJlYTogaWNvbjtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuXHJcbiAgICAmLmphdmFzY3JpcHQge1xyXG4gICAgICBjb2xvcjogJGphdmFzY3JpcHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICB9XHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpY29uIHRpdGxlXCIgXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cbmhlYWRlciBpIHtcbiAgZ3JpZC1hcmVhOiBpY29uO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cbmhlYWRlciBpLmphdmFzY3JpcHQge1xuICBjb2xvcjogI2Y3ZmYwMDtcbn1cbmhlYWRlciBoMSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG59XG5oZWFkZXIgcCB7XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/header/header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/category/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_header_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/header.model */ "./src/app/views/category/components/header/model/header.model.ts");


Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
class HeaderComponent {
    /**
     * constructor where set; get; the service
     */
    constructor(iconService, headerService) {
        this.iconService = iconService;
        this.headerService = headerService;
        /**
         * create object of model to access to get data have available
         */
        this.header = new _model_header_model__WEBPACK_IMPORTED_MODULE_1__["Header"]();
        /**
         * create the `sample` to connect between the logic `model-view` (the logic is programming into component) and view(html)
         */
        this.iconClasses = "";
        this.categoryCSSClass = "";
        this.headerService.headerSubject.subscribe(header => {
            this.header = header;
            this.updateStyles(this.header.simpleId);
        });
    }
    /**
     * Programming to set the logic between the service and
     * the `sample`
     */
    updateStyles(categorySimpleId) {
        this.iconClasses = this.iconService.getIconByCategoryID(categorySimpleId);
        this.categoryCSSClass = categorySimpleId;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/header/model/header.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/category/components/header/model/header.model.ts ***!
  \************************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
class Header {
    constructor(data) {
        const defaults = Object.assign({ label: '', description: '', simpleId: '', categorySimpleId: '' }, data);
        this.label = defaults.label;
        this.description = defaults.description;
        this.simpleId = defaults.simpleId;
        this.categorySimpleId = defaults.categorySimpleId;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/header/service/aheader.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/category/components/header/service/aheader.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AHeaderService", function() { return AHeaderService; });
class AHeaderService {
}


/***/ }),

/***/ "./src/app/views/category/components/header/service/header.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/category/components/header/service/header.service.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class HeaderService {
    constructor() {
        this.headerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    callHeader(header) {
        this.headerSubject.next(header);
    }
}


/***/ }),

/***/ "./src/app/views/category/components/resources/resources.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/views/category/components/resources/resources.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_ResourcesComponent, View_ResourcesComponent_0, View_ResourcesComponent_Host_0, ResourcesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ResourcesComponent", function() { return RenderType_ResourcesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ResourcesComponent_0", function() { return View_ResourcesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ResourcesComponent_Host_0", function() { return View_ResourcesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponentNgFactory", function() { return ResourcesComponentNgFactory; });
/* harmony import */ var _resources_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.component.scss.shim.ngstyle */ "./src/app/views/category/components/resources/resources.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources.component */ "./src/app/views/category/components/resources/resources.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ResourcesComponent = [_resources_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ResourcesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ResourcesComponent, data: {} });

function View_ResourcesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵEMPTY_ARRAY"]; _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 2, 0, currVal_2); }); }
function View_ResourcesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResourcesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.list; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
function View_ResourcesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-resources", [], null, null, null, View_ResourcesComponent_0, RenderType_ResourcesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"], [], null, null)], null, null); }
var ResourcesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-resources", _resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"], View_ResourcesComponent_Host_0, { title: "title", list: "list" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/resources/resources.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/category/components/resources/resources.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
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
var styles = ["nav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n}\nnav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: #252525;\n  color: white;\n  height: 75px;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 0;\n  background-color: #2b2b2b;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #40c980;\n  padding: 15px 0;\n  text-align: center;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9yZXNvdXJjZXMvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNvbXBvbmVudHNcXHJlc291cmNlc1xccmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvcmVzb3VyY2VzL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJFUG1CO0VGUW5CLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHlCRXBCZTtBRGtCbkI7QURJSTtFQUNFLGVBQUE7RUFDQSxjRWRFO0VGZUYsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLW5hdjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJuYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cbm5hdiBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5uYXYgdWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xufVxubmF2IHVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzQwYzk4MDtcbiAgcGFkZGluZzogMTVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/resources/resources.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/category/components/resources/resources.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
class ResourcesComponent {
    constructor() {
        this.title = "";
    }
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/course/course.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/course/course.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_CourseComponent, View_CourseComponent_0, View_CourseComponent_Host_0, CourseComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CourseComponent", function() { return RenderType_CourseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseComponent_0", function() { return View_CourseComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseComponent_Host_0", function() { return View_CourseComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponentNgFactory", function() { return CourseComponentNgFactory; });
/* harmony import */ var _course_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/course/course.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.component */ "./src/app/views/category/components/side-bar/component/course/course.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CourseComponent = [_course_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CourseComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CourseComponent, data: {} });

function View_CourseComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Error"], ["src", "https://via.placeholder.com/50x30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["href", "https://www.udemy.com/100-front-end-interview-questions-challenge/?couponCode=CODINGGOD\\"], ["target", "blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["100 Front End Questions Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["href", "https://www.udemy.com/100-front-end-interview-questions-challenge/?couponCode=CODINGGOD\\"], ["id", "buy-now"], ["target", "blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Buy Now"]))], null, null); }
function View_CourseComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-course", [], null, null, null, View_CourseComponent_0, RenderType_CourseComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"], [], null, null)], null, null); }
var CourseComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-course", _course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"], View_CourseComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/course/course.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/course/course.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************/
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
var styles = ["section[_ngcontent-%COMP%] {\n  display: grid;\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\n  background-color: #232323;\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-bottom: 15px;\n}\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c97e5a;\n  font-weight: bold;\n}\nsection[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%]   #buy-now[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: #40c980;\n  border: none;\n  color: white;\n  padding: 10px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvY291cnNlL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcdmlld3NcXGNhdGVnb3J5XFxjb21wb25lbnRzXFxzaWRlLWJhclxcY29tcG9uZW50XFxjb3Vyc2VcXGNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKO0FERUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL2NvbXBvbmVudC9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjYzk3ZTVhO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAjYnV5LW5vdyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MGM5ODA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwic2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5zZWN0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiAjY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5zZWN0aW9uICNjb250ZW50IGg0IHtcbiAgY29sb3I6ICNjOTdlNWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuc2VjdGlvbiAjY29udGVudCAjYnV5LW5vdyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM5ODA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/course/course.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/course/course.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
class CourseComponent {
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ngfactory.js":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ngfactory.js ***!
  \*******************************************************************************************************************/
/*! exports provided: RenderType_FacebookGroupComponent, View_FacebookGroupComponent_0, View_FacebookGroupComponent_Host_0, FacebookGroupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FacebookGroupComponent", function() { return RenderType_FacebookGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FacebookGroupComponent_0", function() { return View_FacebookGroupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FacebookGroupComponent_Host_0", function() { return View_FacebookGroupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookGroupComponentNgFactory", function() { return FacebookGroupComponentNgFactory; });
/* harmony import */ var _facebook_group_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook-group.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _facebook_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facebook-group.component */ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FacebookGroupComponent = [_facebook_group_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FacebookGroupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FacebookGroupComponent, data: {} });

function View_FacebookGroupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["id", "facebook-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["href", "https://www.facebook.com/groups/190277791450732/"], ["target", "blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fab fa-facebook-square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["id", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["href", "https://www.facebook.com/groups/190277791450732/"], ["target", "blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Join Our Facebook Group"]))], null, null); }
function View_FacebookGroupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-facebook-group", [], null, null, null, View_FacebookGroupComponent_0, RenderType_FacebookGroupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _facebook_group_component__WEBPACK_IMPORTED_MODULE_2__["FacebookGroupComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FacebookGroupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-facebook-group", _facebook_group_component__WEBPACK_IMPORTED_MODULE_2__["FacebookGroupComponent"], View_FacebookGroupComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************************/
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
var styles = ["#facebook-group[_ngcontent-%COMP%] {\n  display: grid;\n  border: 1px solid #40c980;\n  grid-template-columns: auto auto 1fr;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 5px 10px;\n}\n#facebook-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: white;\n}\n#facebook-group[_ngcontent-%COMP%]   #bar[_ngcontent-%COMP%] {\n  border-right: 2px solid #40c980;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvZmFjZWJvb2stZ3JvdXAvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNvbXBvbmVudHNcXHNpZGUtYmFyXFxjb21wb25lbnRcXGZhY2Vib29rLWdyb3VwXFxmYWNlYm9vay1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvZmFjZWJvb2stZ3JvdXAvZmFjZWJvb2stZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0o7QURDRTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvZmFjZWJvb2stZ3JvdXAvZmFjZWJvb2stZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmFjZWJvb2stZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQwYzk4MDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnI7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICNiYXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzQwYzk4MDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxufVxyXG4iLCIjZmFjZWJvb2stZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDBjOTgwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbiNmYWNlYm9vay1ncm91cCBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4jZmFjZWJvb2stZ3JvdXAgI2JhciB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM0MGM5ODA7XG4gIGhlaWdodDogNzAlO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FacebookGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookGroupComponent", function() { return FacebookGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class FacebookGroupComponent {
    constructor() { }
    ngOnInit() { }
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ngfactory.js":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ngfactory.js ***!
  \***********************************************************************************************************************/
/*! exports provided: RenderType_LinkedinPostComponent, View_LinkedinPostComponent_0, View_LinkedinPostComponent_Host_0, LinkedinPostComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LinkedinPostComponent", function() { return RenderType_LinkedinPostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LinkedinPostComponent_0", function() { return View_LinkedinPostComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LinkedinPostComponent_Host_0", function() { return View_LinkedinPostComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinPostComponentNgFactory", function() { return LinkedinPostComponentNgFactory; });
/* harmony import */ var _linkedin_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedin-post.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _linkedin_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedin-post.component */ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_LinkedinPostComponent = [_linkedin_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LinkedinPostComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LinkedinPostComponent, data: {} });

function View_LinkedinPostComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fab fa-linkedin"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.linkedinMessage; _ck(_v, 0, 0, currVal_0); }); }
function View_LinkedinPostComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-linkedin-post", [], null, null, null, View_LinkedinPostComponent_0, RenderType_LinkedinPostComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _linkedin_post_component__WEBPACK_IMPORTED_MODULE_2__["LinkedinPostComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], null, null); }
var LinkedinPostComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-linkedin-post", _linkedin_post_component__WEBPACK_IMPORTED_MODULE_2__["LinkedinPostComponent"], View_LinkedinPostComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************************************************/
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
var styles = ["i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc2hhcmUvbGlua2VkaW4tcG9zdC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjYXRlZ29yeVxcY29tcG9uZW50c1xcc2lkZS1iYXJcXGNvbXBvbmVudFxcc2hhcmVcXGxpbmtlZGluLXBvc3RcXGxpbmtlZGluLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvc2lkZS1iYXIvY29tcG9uZW50L3NoYXJlL2xpbmtlZGluLXBvc3QvbGlua2VkaW4tcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL2NvbXBvbmVudC9zaGFyZS9saW5rZWRpbi1wb3N0L2xpbmtlZGluLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59IiwiaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LinkedinPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinPostComponent", function() { return LinkedinPostComponent; });
class LinkedinPostComponent {
    constructor(router) {
        this.router = router;
    }
    get linkedinMessage() {
        const base = 'https://www.linkedin.com/shareArticle?mini=true';
        return `${base}${this.getUrl()}`;
    }
    getUrl() {
        return `&url=https://www.VideoDevDocs.com${this.router.url}`;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/share.component.ngfactory.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/share.component.ngfactory.js ***!
  \*************************************************************************************************/
/*! exports provided: RenderType_ShareComponent, View_ShareComponent_0, View_ShareComponent_Host_0, ShareComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShareComponent", function() { return RenderType_ShareComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShareComponent_0", function() { return View_ShareComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShareComponent_Host_0", function() { return View_ShareComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponentNgFactory", function() { return ShareComponentNgFactory; });
/* harmony import */ var _share_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/share/share.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _linkedin_post_linkedin_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedin-post/linkedin-post.component.ngfactory */ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ngfactory.js");
/* harmony import */ var _linkedin_post_linkedin_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedin-post/linkedin-post.component */ "./src/app/views/category/components/side-bar/component/share/linkedin-post/linkedin-post.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _twitter_post_twitter_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-post/twitter-post.component.ngfactory */ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ngfactory.js");
/* harmony import */ var _twitter_post_twitter_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twitter-post/twitter-post.component */ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _share_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share.component */ "./src/app/views/category/components/side-bar/component/share/share.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ShareComponent = [_share_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShareComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShareComponent, data: {} });

function View_ShareComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "section", [["id", "share-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["id", "share-action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fas fa-share-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Share"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["id", "social-media"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-linkedin-post", [], null, null, null, _linkedin_post_linkedin_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LinkedinPostComponent_0"], _linkedin_post_linkedin_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LinkedinPostComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _linkedin_post_linkedin_post_component__WEBPACK_IMPORTED_MODULE_3__["LinkedinPostComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-twitter-post", [], null, null, null, _twitter_post_twitter_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TwitterPostComponent_0"], _twitter_post_twitter_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TwitterPostComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _twitter_post_twitter_post_component__WEBPACK_IMPORTED_MODULE_6__["TwitterPostComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], null, null); }
function View_ShareComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-share", [], null, null, null, View_ShareComponent_0, RenderType_ShareComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _share_component__WEBPACK_IMPORTED_MODULE_8__["ShareComponent"], [], null, null)], null, null); }
var ShareComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-share", _share_component__WEBPACK_IMPORTED_MODULE_8__["ShareComponent"], View_ShareComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/share.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/share.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************************/
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
var styles = ["#share-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n}\n#share-container[_ngcontent-%COMP%]   #share-action[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-column-gap: 5px;\n}\n#share-container[_ngcontent-%COMP%]   #share-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], #share-container[_ngcontent-%COMP%]   #share-action[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #40c980;\n  font-weight: bold;\n}\n#share-container[_ngcontent-%COMP%]   #share-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  justify-self: end;\n  font-size: 20px;\n}\n#share-container[_ngcontent-%COMP%]   #share-action[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n#share-container[_ngcontent-%COMP%]   #social-media[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc2hhcmUvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXGNvbXBvbmVudHNcXHNpZGUtYmFyXFxjb21wb25lbnRcXHNoYXJlXFxzaGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc2hhcmUvc2hhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURDSTs7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL2NvbXBvbmVudC9zaGFyZS9zaGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaGFyZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcblxyXG4gICNzaGFyZS1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG5cclxuICAgIGksXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjNDBjOTgwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNzb2NpYWwtbWVkaWEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiI3NoYXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xufVxuI3NoYXJlLWNvbnRhaW5lciAjc2hhcmUtYWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uLWdhcDogNXB4O1xufVxuI3NoYXJlLWNvbnRhaW5lciAjc2hhcmUtYWN0aW9uIGksXG4jc2hhcmUtY29udGFpbmVyICNzaGFyZS1hY3Rpb24gaDQge1xuICBjb2xvcjogIzQwYzk4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jc2hhcmUtY29udGFpbmVyICNzaGFyZS1hY3Rpb24gaSB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jc2hhcmUtY29udGFpbmVyICNzaGFyZS1hY3Rpb24gaDQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4jc2hhcmUtY29udGFpbmVyICNzb2NpYWwtbWVkaWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/share.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/share.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
class ShareComponent {
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ngfactory.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ngfactory.js ***!
  \*********************************************************************************************************************/
/*! exports provided: RenderType_TwitterPostComponent, View_TwitterPostComponent_0, View_TwitterPostComponent_Host_0, TwitterPostComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TwitterPostComponent", function() { return RenderType_TwitterPostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TwitterPostComponent_0", function() { return View_TwitterPostComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TwitterPostComponent_Host_0", function() { return View_TwitterPostComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterPostComponentNgFactory", function() { return TwitterPostComponentNgFactory; });
/* harmony import */ var _twitter_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitter-post.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _twitter_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter-post.component */ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_TwitterPostComponent = [_twitter_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TwitterPostComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TwitterPostComponent, data: {} });

function View_TwitterPostComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["target", "blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fab fa-twitter-square"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.twitterMessage; _ck(_v, 0, 0, currVal_0); }); }
function View_TwitterPostComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-twitter-post", [], null, null, null, View_TwitterPostComponent_0, RenderType_TwitterPostComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _twitter_post_component__WEBPACK_IMPORTED_MODULE_2__["TwitterPostComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], null, null); }
var TwitterPostComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-twitter-post", _twitter_post_component__WEBPACK_IMPORTED_MODULE_2__["TwitterPostComponent"], View_TwitterPostComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************************************/
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
var styles = ["i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc2hhcmUvdHdpdHRlci1wb3N0L0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcdmlld3NcXGNhdGVnb3J5XFxjb21wb25lbnRzXFxzaWRlLWJhclxcY29tcG9uZW50XFxzaGFyZVxcdHdpdHRlci1wb3N0XFx0d2l0dGVyLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvc2lkZS1iYXIvY29tcG9uZW50L3NoYXJlL3R3aXR0ZXItcG9zdC90d2l0dGVyLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc2hhcmUvdHdpdHRlci1wb3N0L3R3aXR0ZXItcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCJpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/share/twitter-post/twitter-post.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TwitterPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterPostComponent", function() { return TwitterPostComponent; });
class TwitterPostComponent {
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
    }
    get twitterMessage() {
        const base = this.getBaseWithHashtagsAndRoute();
        const message = encodeURIComponent(`Check out ${this.titleService.getTitle()}! Where documentation is more than just text!`);
        return `${base}${message}`;
    }
    getBaseWithHashtagsAndRoute() {
        const route = this.getRouteUrl();
        const hashtags = this.getRouteHashtags();
        return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtags)}&related=pizzapokerguy&url=${route}&text=`;
    }
    getRouteUrl() {
        return encodeURI(`https://www.VideoDevDocs.com${this.getHashFragmentFreeURL()}`);
    }
    getRouteHashtags() {
        const removeHashFragments = this.getHashFragmentFreeURL();
        const routePieces = removeHashFragments
            .split("/")
            .filter(routePiece => routePiece.length);
        const hashTags = [];
        for (let i = 1; i < routePieces.length; i++) {
            hashTags.push(routePieces[i]);
        }
        return hashTags.join(",");
    }
    getHashFragmentFreeURL() {
        const hasHashFragment = this.router.url.includes("#");
        if (hasHashFragment) {
            const hasFragments = this.router.url.split("#");
            hasFragments.pop();
            return hasFragments.join("");
        }
        return this.router.url;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/support/support.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/support/support.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_SupportComponent, View_SupportComponent_0, View_SupportComponent_Host_0, SupportComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SupportComponent", function() { return RenderType_SupportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SupportComponent_0", function() { return View_SupportComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SupportComponent_Host_0", function() { return View_SupportComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponentNgFactory", function() { return SupportComponentNgFactory; });
/* harmony import */ var _support_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/component/support/support.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "./src/app/views/category/components/side-bar/component/support/support.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_SupportComponent = [_support_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SupportComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SupportComponent, data: {} });

function View_SupportComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Support"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["id", "support"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fab fa-paypal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fab fa-patreon"]], null, null, null, null, null))], null, null); }
function View_SupportComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-support", [], null, null, null, View_SupportComponent_0, RenderType_SupportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"], [], null, null)], null, null); }
var SupportComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-support", _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"], View_SupportComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/support/support.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/support/support.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************/
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
var styles = ["section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #40c980;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 0;\n}\nsection[_ngcontent-%COMP%]   #support[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: auto auto;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   #support[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\nsection[_ngcontent-%COMP%]   #support[_ngcontent-%COMP%]   i.fa-paypal[_ngcontent-%COMP%] {\n  color: #007acc;\n}\nsection[_ngcontent-%COMP%]   #support[_ngcontent-%COMP%]   i.fa-patreon[_ngcontent-%COMP%] {\n  color: #ff6058;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc3VwcG9ydC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjYXRlZ29yeVxcY29tcG9uZW50c1xcc2lkZS1iYXJcXGNvbXBvbmVudFxcc3VwcG9ydFxcc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9jb21wb25lbnQvc3VwcG9ydC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL2NvbXBvbmVudC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQ01JO0VETEosaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUVGSjtBRktFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FFSEo7QUZLSTtFQUNFLGVBQUE7QUVITjtBRktNO0VBQ0UsY0NQRDtBQ0lQO0FGTU07RUFDRSxjQ0RGO0FDSE4iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL2NvbXBvbmVudC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbnNlY3Rpb24ge1xyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAjc3VwcG9ydCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcblxyXG4gICAgICAmLmZhLXBheXBhbCB7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmZhLXBhdHJlb24ge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiIsInNlY3Rpb24gaDQge1xuICBjb2xvcjogIzQwYzk4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbnNlY3Rpb24gI3N1cHBvcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuc2VjdGlvbiAjc3VwcG9ydCBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuc2VjdGlvbiAjc3VwcG9ydCBpLmZhLXBheXBhbCB7XG4gIGNvbG9yOiAjMDA3YWNjO1xufVxuc2VjdGlvbiAjc3VwcG9ydCBpLmZhLXBhdHJlb24ge1xuICBjb2xvcjogI2ZmNjA1ODtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/component/support/support.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/component/support/support.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
class SupportComponent {
}


/***/ }),

/***/ "./src/app/views/category/components/side-bar/side-bar.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/side-bar.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_SideBarComponent, View_SideBarComponent_0, View_SideBarComponent_Host_0, SideBarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SideBarComponent", function() { return RenderType_SideBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SideBarComponent_0", function() { return View_SideBarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SideBarComponent_Host_0", function() { return View_SideBarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponentNgFactory", function() { return SideBarComponentNgFactory; });
/* harmony import */ var _side_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar.component.scss.shim.ngstyle */ "./src/app/views/category/components/side-bar/side-bar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_share_share_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/share/share.component.ngfactory */ "./src/app/views/category/components/side-bar/component/share/share.component.ngfactory.js");
/* harmony import */ var _component_share_share_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/share/share.component */ "./src/app/views/category/components/side-bar/component/share/share.component.ts");
/* harmony import */ var _component_course_course_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/course/course.component.ngfactory */ "./src/app/views/category/components/side-bar/component/course/course.component.ngfactory.js");
/* harmony import */ var _component_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/course/course.component */ "./src/app/views/category/components/side-bar/component/course/course.component.ts");
/* harmony import */ var _component_support_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/support/support.component.ngfactory */ "./src/app/views/category/components/side-bar/component/support/support.component.ngfactory.js");
/* harmony import */ var _component_support_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/support/support.component */ "./src/app/views/category/components/side-bar/component/support/support.component.ts");
/* harmony import */ var _component_facebook_group_facebook_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/facebook-group/facebook-group.component.ngfactory */ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ngfactory.js");
/* harmony import */ var _component_facebook_group_facebook_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/facebook-group/facebook-group.component */ "./src/app/views/category/components/side-bar/component/facebook-group/facebook-group.component.ts");
/* harmony import */ var _side_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-bar.component */ "./src/app/views/category/components/side-bar/side-bar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_SideBarComponent = [_side_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SideBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SideBarComponent, data: {} });

function View_SideBarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "article", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-share", [], null, null, null, _component_share_share_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ShareComponent_0"], _component_share_share_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ShareComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _component_share_share_component__WEBPACK_IMPORTED_MODULE_3__["ShareComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-course", [], null, null, null, _component_course_course_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CourseComponent_0"], _component_course_course_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CourseComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _component_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-support", [], null, null, null, _component_support_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_SupportComponent_0"], _component_support_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_SupportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _component_support_support_component__WEBPACK_IMPORTED_MODULE_7__["SupportComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-facebook-group", [], null, null, null, _component_facebook_group_facebook_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FacebookGroupComponent_0"], _component_facebook_group_facebook_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FacebookGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _component_facebook_group_facebook_group_component__WEBPACK_IMPORTED_MODULE_9__["FacebookGroupComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 8, 0); }, null); }
function View_SideBarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-side-bar", [], null, null, null, View_SideBarComponent_0, RenderType_SideBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"], [], null, null)], null, null); }
var SideBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-side-bar", _side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"], View_SideBarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/side-bar/side-bar.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/side-bar.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
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
var styles = ["article[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 100px;\n  max-width: 250px;\n  background-color: #2b2b2b;\n  padding: 10px;\n  grid-gap: 45px;\n  padding-bottom: 50px;\n}\n\n@media screen and (max-width: 768px) {\n  article[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy9zaWRlLWJhci9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjYXRlZ29yeVxcY29tcG9uZW50c1xcc2lkZS1iYXJcXHNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXJ0aWNsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGdyaWQtZ2FwOiA0NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGFydGljbGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJhcnRpY2xlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1nYXA6IDQ1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/components/side-bar/side-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/category/components/side-bar/side-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
class SideBarComponent {
}


/***/ }),

/***/ "./src/app/views/category/components/topic-list/topic-list.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/views/category/components/topic-list/topic-list.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_TopiclistComponent, View_TopiclistComponent_0, View_TopiclistComponent_Host_0, TopiclistComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TopiclistComponent", function() { return RenderType_TopiclistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopiclistComponent_0", function() { return View_TopiclistComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopiclistComponent_Host_0", function() { return View_TopiclistComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopiclistComponentNgFactory", function() { return TopiclistComponentNgFactory; });
/* harmony import */ var _topic_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic-list.component.scss.shim.ngstyle */ "./src/app/views/category/components/topic-list/topic-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_component_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/component/card/card.component.ngfactory */ "./src/app/shared/component/card/card.component.ngfactory.js");
/* harmony import */ var _shared_component_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/component/card/card.component */ "./src/app/shared/component/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _topic_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topic-list.component */ "./src/app/views/category/components/topic-list/topic-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_TopiclistComponent = [_topic_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TopiclistComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TopiclistComponent, data: {} });

function View_TopiclistComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "topic", _v.context.$implicit.simpleId); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_1); }); }
function View_TopiclistComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "app-card", [], null, null, null, _shared_component_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CardComponent_0"], _shared_component_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_component_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], [], { title: [0, "title"], iconClasses: [1, "iconClasses"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "div", [["id", "topics-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopiclistComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Topics"; var currVal_1 = "fas fa-lightbulb"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.category.topics; _ck(_v, 4, 0, currVal_2); }, null); }
function View_TopiclistComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-topic-list", [], null, null, null, View_TopiclistComponent_0, RenderType_TopiclistComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _topic_list_component__WEBPACK_IMPORTED_MODULE_6__["TopiclistComponent"], [], null, null)], null, null); }
var TopiclistComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-topic-list", _topic_list_component__WEBPACK_IMPORTED_MODULE_6__["TopiclistComponent"], View_TopiclistComponent_Host_0, { category: "category" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/topic-list/topic-list.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/views/category/components/topic-list/topic-list.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
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
var styles = ["#topics-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(4, 1fr);\n}\n#topics-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px;\n  color: #40c980;\n  background-color: #393939;\n  border: none;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n#topics-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s;\n  color: white;\n}\n@media screen and (max-width: 768px) {\n  #topics-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media screen and (max-width: 425px) {\n  #topics-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy90b3BpYy1saXN0L0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcdmlld3NcXGNhdGVnb3J5XFxjb21wb25lbnRzXFx0b3BpYy1saXN0XFx0b3BpYy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3RvcGljLWxpc3QvdG9waWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy90b3BpYy1saXN0L0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxjRUNJO0VGQUoseUJFUGtCO0VGUWxCLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDREo7QURHSTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0ROO0FETUE7RUFDRTtJQUNFLGtDQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSw4QkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3RvcGljLWxpc3QvdG9waWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI3RvcGljcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjdG9waWNzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAjdG9waWNzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcbiIsIiN0b3BpY3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG4jdG9waWNzLWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzQwYzk4MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4jdG9waWNzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjdG9waWNzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgI3RvcGljcy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4kcXVhdGVybmFyeS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICMyNTI1MjU7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4kYmxhY2s6ICMxZTFlMWU7XHJcblxyXG4kY29sb3I6ICM5MjkyOTM7XHJcbiRsaWdodC1ncmV5OiAjOTI5MjkzO1xyXG5cclxuJGNvbG9yLWxpOiAjNDBjOTgwO1xyXG4kZ3JlZW46ICM0MGM5ODA7XHJcblxyXG4kY3NzOiAjMDAwNGZmO1xyXG4kYmx1ZTogIzAwN2FjYztcclxuJGZiLWJsdWU6ICMyYjU2OGU7XHJcbiRsaW5rZWRpbi1ibHVlOiAjMDA0ZjYzO1xyXG4kdHdpdHRlci1ibHVlOiAjMTFhOGNkO1xyXG5cclxuJGh0bWw6ICNmZjA3M2E7XHJcblxyXG4kamF2YXNjcmlwdDogI2Y3ZmYwMDtcclxuJHllbGxvdzogI2U1ZTUxMDtcclxuXHJcbiRyZWQ6ICNmZjYwNTg7XHJcbiRvcmFuZ2U6ICNjOTdlNWE7XHJcblxyXG4kdGFibGV0OiAxMDI0cHg7XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/components/topic-list/topic-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/category/components/topic-list/topic-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopiclistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopiclistComponent", function() { return TopiclistComponent; });
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/category.model */ "./src/app/views/category/models/category.model.ts");

class TopiclistComponent {
    constructor() {
        this.category = new _models_category_model__WEBPACK_IMPORTED_MODULE_0__["Category"]();
    }
}


/***/ }),

/***/ "./src/app/views/category/components/video-playlist/video-playlist.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/views/category/components/video-playlist/video-playlist.component.ngfactory.js ***!
  \************************************************************************************************/
/*! exports provided: RenderType_VideoPlayListComponent, View_VideoPlayListComponent_0, View_VideoPlayListComponent_Host_0, VideoPlayListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VideoPlayListComponent", function() { return RenderType_VideoPlayListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VideoPlayListComponent_0", function() { return View_VideoPlayListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VideoPlayListComponent_Host_0", function() { return View_VideoPlayListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayListComponentNgFactory", function() { return VideoPlayListComponentNgFactory; });
/* harmony import */ var _video_playlist_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-playlist.component.scss.shim.ngstyle */ "./src/app/views/category/components/video-playlist/video-playlist.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _video_playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-playlist.component */ "./src/app/views/category/components/video-playlist/video-playlist.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_VideoPlayListComponent = [_video_playlist_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VideoPlayListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VideoPlayListComponent, data: {} });

function View_VideoPlayListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "li", [], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectVideo(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "img", [], [[8, "src", 4], [8, "alt", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "title"]], [[2, "active", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h4", [], [[2, "active", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _ck(_v, 3, 0, _co.nextRoutePiece, _v.context.$implicit.simpleId); _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit === _co.selectedVideo); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.thumbnailUrl; var currVal_2 = _v.context.$implicit.label; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_4 = (_v.context.$implicit === _co.selectedVideo); _ck(_v, 4, 0, currVal_4); var currVal_5 = (_v.context.$implicit === _co.selectedVideo); _ck(_v, 5, 0, currVal_5); var currVal_6 = _v.context.$implicit.label; _ck(_v, 6, 0, currVal_6); }); }
function View_VideoPlayListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["id", "video-playlist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fab fa-js"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "is-hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Test"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", " / ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VideoPlayListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.playlists; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pickedVideo; var currVal_1 = _co.playlists.length; _ck(_v, 7, 0, currVal_0, currVal_1); }); }
function View_VideoPlayListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-video-playlist", [], null, null, null, View_VideoPlayListComponent_0, RenderType_VideoPlayListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _video_playlist_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayListComponent"], [], null, null)], null, null); }
var VideoPlayListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-video-playlist", _video_playlist_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayListComponent"], View_VideoPlayListComponent_Host_0, { nextRoutePiece: "nextRoutePiece", pickedVideo: "pickedVideo", playlists: "playlists" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/video-playlist/video-playlist.component.scss.shim.ngstyle.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/category/components/video-playlist/video-playlist.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************************/
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
var styles = ["#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  background-color: #393939;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  padding: 20px;\n  margin: 0;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i.fab.fa-js[_ngcontent-%COMP%] {\n  color: #f7ff00;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .is-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  text-align: right;\n  color: #929293;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  border: 1px solid #393939;\n  max-height: 381px;\n  overflow-y: scroll;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: grid;\n  grid-template-columns: 100px 1fr;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #007acc;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.title[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #40c980;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4.active[_ngcontent-%COMP%] {\n  color: white;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #1e1e1e;\n}\n#video-playlist[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n}\n@media screen and (max-width: 768px) {\n  #video-playlist[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n  header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .is-hidden[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    display: inline-block;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n\n  li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy92aWRlby1wbGF5bGlzdC9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjYXRlZ29yeVxcY29tcG9uZW50c1xcdmlkZW8tcGxheWxpc3RcXHZpZGVvLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3ZpZGVvLXBsYXlsaXN0L3ZpZGVvLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNBTjtBREdRO0VBQ0UsY0FBQTtBQ0RWO0FESVE7RUFDRSxhQUFBO0FDRlY7QURLUTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSFY7QURRSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05OO0FEUU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDTlI7QURRUTtFQUNFLHlCQUFBO0FDTlY7QURRUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTlY7QURRUTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ05WO0FEUVE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQ05WO0FEUVU7RUFDRSxZQUFBO0FDTlo7QURVUTtFQUNFLGdDQUFBO0FDUlY7QURVVTtFQUNFLDhCQUFBO0FDUlo7QURnQkE7RUFDRTtJQUNFLGVBQUE7RUNiRjs7RURlQTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7RUNaRjs7RURjQTtJQUNFLGlCQUFBO0VDWEY7O0VEYUE7SUFDRSxjQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvdmlkZW8tcGxheWxpc3QvdmlkZW8tcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8tcGxheWxpc3Qge1xyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGhlYWRlciBoMyB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGkuZmFiLmZhLWpzIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjdmZjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgY29sb3I6ICM5MjkyOTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzODFweDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQwYzk4MDtcclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFlMWUxZTtcclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3ZpZGVvLXBsYXlsaXN0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaGVhZGVyIGgzIC5pcy1oaWRkZW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBsaSAudGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsIiN2aWRlby1wbGF5bGlzdCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3ZpZGVvLXBsYXlsaXN0IGhlYWRlciBoZWFkZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgaGVhZGVyIGgzIGgzIGkuZmFiLmZhLWpzIHtcbiAgY29sb3I6ICNmN2ZmMDA7XG59XG4jdmlkZW8tcGxheWxpc3QgaGVhZGVyIGhlYWRlciBoMyBoMyAuaXMtaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgaGVhZGVyIGgzIGgzIHNtYWxsIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjOTI5MjkzO1xufVxuI3ZpZGVvLXBsYXlsaXN0IGhlYWRlciB1bCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzOTM5Mzk7XG4gIG1heC1oZWlnaHQ6IDM4MXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4jdmlkZW8tcGxheWxpc3QgaGVhZGVyIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjYztcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgdWwgbGkgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgdWwgbGkudGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiN2aWRlby1wbGF5bGlzdCBoZWFkZXIgdWwgbGkgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDBjOTgwO1xufVxuI3ZpZGVvLXBsYXlsaXN0IGhlYWRlciB1bCBsaSBoNC5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG4jdmlkZW8tcGxheWxpc3QgaGVhZGVyIHVsIGxpIGRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUxZTFlO1xufVxuI3ZpZGVvLXBsYXlsaXN0IGhlYWRlciB1bCBsaSBkaXYuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjdmlkZW8tcGxheWxpc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIGhlYWRlciBoMyAuaXMtaGlkZGVuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICB1bCB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cblxuICBsaSAudGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/views/category/components/video-playlist/video-playlist.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/category/components/video-playlist/video-playlist.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoPlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayListComponent", function() { return VideoPlayListComponent; });
/* harmony import */ var src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/detail.model */ "./src/app/shared/models/detail.model.ts");

class VideoPlayListComponent {
    constructor() {
        this.nextRoutePiece = "";
        this.pickedVideo = 1;
        this.playlists = [];
        this.selectedVideo = new src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_0__["Detail"]();
    }
    selectVideo(video) {
        this.selectedVideo = video;
    }
    pickVideo() {
        this.pickedVideo = this.playlists.length - this.selectVideo.length;
    }
}


/***/ }),

/***/ "./src/app/views/category/components/video/video.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/views/category/components/video/video.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_VideoComponent, View_VideoComponent_0, View_VideoComponent_Host_0, VideoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VideoComponent", function() { return RenderType_VideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VideoComponent_0", function() { return View_VideoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VideoComponent_Host_0", function() { return View_VideoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponentNgFactory", function() { return VideoComponentNgFactory; });
/* harmony import */ var _video_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.component.scss.shim.ngstyle */ "./src/app/views/category/components/video/video.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.component */ "./src/app/views/category/components/video/video.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_VideoComponent = [_video_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VideoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VideoComponent, data: {} });

function View_VideoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [["videoIframe", 1]], null, 0, "iframe", [["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], ["allowfullscreen", ""], ["frameborder", "0"]], [[8, "src", 5]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.videoUrl; _ck(_v, 0, 0, currVal_0); }); }
function View_VideoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "youtube pulse-grow-on-hover"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.playVideo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "background-image": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VideoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (("url(" + _co.thumbnailUrl) + ")")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.videoUrl; _ck(_v, 5, 0, currVal_1); }, null); }
function View_VideoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-video", [], null, null, null, View_VideoComponent_0, RenderType_VideoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], null, null)], null, null); }
var VideoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-video", _video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"], View_VideoComponent_Host_0, { videoId: "videoId" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/components/video/video.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/views/category/components/video/video.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
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
var styles = [".youtube[_ngcontent-%COMP%] {\n  \n  position: relative;\n  cursor: pointer;\n  background: #ccc no-repeat center center/cover;\n  padding-bottom: 56.25%;\n  height: 0px;\n  clear: both;\n  border: 1px solid #2b2b2b;\n}\n\n.youtube[_ngcontent-%COMP%]::before {\n  \n  content: \"\";\n  background: rgba(255, 255, 255, 0.6);\n  display: block;\n  margin: -40px 0 0 -40px;\n  border-radius: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 80px;\n  width: 80px;\n  box-shadow: 0 0 20px 30px rgba(51, 51, 51, 0.1);\n  transition: all 0.1s ease;\n  z-index: 1;\n}\n\n@-webkit-keyframes pulse-grow-on-hover {\n  to {\n    transform: scale(1.1);\n  }\n}\n\n@keyframes pulse-grow-on-hover {\n  to {\n    transform: scale(1.1);\n  }\n}\n\n.youtube[_ngcontent-%COMP%]:hover::before {\n  \n  background: rgba(238, 238, 238, 0.8);\n  box-shadow: 0 0 10px 3px rgba(51, 51, 51, 0.8);\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  -webkit-animation-name: pulse-grow-on-hover;\n  animation-name: pulse-grow-on-hover;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n.youtube[_ngcontent-%COMP%]::after {\n  \n  content: \"\";\n  width: 0;\n  height: 0;\n  line-height: 0px;\n  display: block;\n  border-style: solid;\n  border-width: 20px 0 20px 40px;\n  margin: -20px 0 0 -15px;\n  border-color: transparent transparent transparent #333;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 0;\n  width: 0;\n  z-index: 2;\n}\n\n.youtube[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvY29tcG9uZW50cy92aWRlby9EOlxcSFRNTFxcYW5ndWxhclxcdmlkZW8tZGV2LWRvY3NcXHZpZGVvLWRvY3Mvc3JjXFxhcHBcXHZpZXdzXFxjYXRlZ29yeVxcY29tcG9uZW50c1xcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jYXRlZ29yeS9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRTtJQUVFLHFCQUFBO0VDREY7QUFDRjs7QURHQTtFQUNFO0lBRUUscUJBQUE7RUNERjtBQUNGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi55b3V0dWJlIHtcclxuICAvKiBjb250aW5lciAocmVzcG9uc2l2ZSkgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNjY2Mgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4ueW91dHViZTo6YmVmb3JlIHtcclxuICAvKiBQbGF5IGJ1YmJsZSAqL1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogLTQwcHggMCAwIC00MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDMwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlLWdyb3ctb24taG92ZXIge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHB1bHNlLWdyb3ctb24taG92ZXIge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLnlvdXR1YmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgLyogcGxheSBidWJibGUgaG92ZXIgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuOCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoNTEsIDUxLCA1MSwgMC44KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZS1ncm93LW9uLWhvdmVyO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZS1ncm93LW9uLWhvdmVyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi55b3V0dWJlOjphZnRlciB7XHJcbiAgLyogUGxheSBUcmlhbmdsZSAqL1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDIwcHggMCAyMHB4IDQwcHg7XHJcbiAgbWFyZ2luOiAtMjBweCAwIDAgLTE1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi55b3V0dWJlIGlmcmFtZSB7XHJcbiAgLyogeW91dHViZSBlbWJlZCAocmVzcG9uc2l2ZSkgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuIiwiLnlvdXR1YmUge1xuICAvKiBjb250aW5lciAocmVzcG9uc2l2ZSkgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNjY2Mgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJiMmIyYjtcbn1cblxuLnlvdXR1YmU6OmJlZm9yZSB7XG4gIC8qIFBsYXkgYnViYmxlICovXG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogLTQwcHggMCAwIC00MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAzMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgei1pbmRleDogMTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlLWdyb3ctb24taG92ZXIge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlLWdyb3ctb24taG92ZXIge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG4ueW91dHViZTpob3Zlcjo6YmVmb3JlIHtcbiAgLyogcGxheSBidWJibGUgaG92ZXIgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjgpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSg1MSwgNTEsIDUxLCAwLjgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZS1ncm93LW9uLWhvdmVyO1xuICBhbmltYXRpb24tbmFtZTogcHVsc2UtZ3Jvdy1vbi1ob3ZlcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbi55b3V0dWJlOjphZnRlciB7XG4gIC8qIFBsYXkgVHJpYW5nbGUgKi9cbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMjBweCAwIDIwcHggNDBweDtcbiAgbWFyZ2luOiAtMjBweCAwIDAgLTE1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4ueW91dHViZSBpZnJhbWUge1xuICAvKiB5b3V0dWJlIGVtYmVkIChyZXNwb25zaXZlKSAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/views/category/components/video/video.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/category/components/video/video.component.ts ***!
  \********************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
class VideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.embedUrl = "";
        this.thumbnailUrl = '';
        this.videoUrl = "";
    }
    set videoId(value) {
        if (value) {
            this.videoUrl = '';
            this.embedUrl = `https://www.youtube.com/embed/${value}?autoplay=1`;
            this.thumbnailUrl = `https://i.ytimg.com/vi/${value}/hqdefault.jpg`;
        }
    }
    playVideo() {
        if (!this.videoUrl) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
        }
    }
}


/***/ }),

/***/ "./src/app/views/category/models/bread-crumbs.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/category/models/bread-crumbs.model.ts ***!
  \*************************************************************/
/*! exports provided: BreadCrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumb", function() { return BreadCrumb; });
/* harmony import */ var src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/data/display-meta-data.data */ "./src/app/shared/models/data/display-meta-data.data.ts");

class BreadCrumb {
    constructor(data) {
        const defaults = Object.assign({ urlPiece: "" }, data);
        this.label = this.getLabel(defaults.urlPiece);
        this.urlPiece = defaults.urlPiece;
        this.iconClasses = this.getIconClasses(defaults.urlPiece);
    }
    getLabel(urlPiece) {
        if (src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_META_DATA"].hasOwnProperty(urlPiece)) {
            return src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_META_DATA"][urlPiece].label;
        }
        urlPiece = `${urlPiece[0].toUpperCase()}${urlPiece.slice(1)}`;
        return urlPiece;
    }
    getIconClasses(urlPiece) {
        if (src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_META_DATA"].hasOwnProperty(urlPiece)) {
            return src_app_shared_models_data_display_meta_data_data__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_META_DATA"][urlPiece].iconClasses;
        }
        return "";
    }
}


/***/ }),

/***/ "./src/app/views/category/models/category.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/category/models/category.model.ts ***!
  \*********************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var _tab_container_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-container.model */ "./src/app/views/category/models/tab-container.model.ts");
/* harmony import */ var _topic_topic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topic/topic.model */ "./src/app/views/category/models/topic/topic.model.ts");


class Category {
    constructor(data) {
        const defaults = Object.assign({ id: "", simpleId: "", label: "", description: "", topics: [], tabContainers: [] }, data);
        this.simpleId = defaults.simpleId;
        this.label = defaults.label;
        this.description = defaults.description;
        this.topics = defaults.topics.map((topic) => new _topic_topic_model__WEBPACK_IMPORTED_MODULE_1__["Topic"](topic));
        this.tabContainers = defaults.tabContainers.map(tabContainer => new _tab_container_model__WEBPACK_IMPORTED_MODULE_0__["TabContainer"](tabContainer));
    }
}


/***/ }),

/***/ "./src/app/views/category/models/resources.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/category/models/resources.model.ts ***!
  \**********************************************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function() { return Resources; });
/* harmony import */ var src_app_shared_models_book_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/book.model */ "./src/app/shared/models/book.model.ts");
/* harmony import */ var src_app_shared_models_course_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/course.model */ "./src/app/shared/models/course.model.ts");


class Resources {
    constructor(data) {
        const defaults = Object.assign({ books: [], courses: [] }, data);
        this.books = defaults.books.map(book => new src_app_shared_models_book_model__WEBPACK_IMPORTED_MODULE_0__["Book"](book));
        this.courses = defaults.courses.map(course => new src_app_shared_models_course_model__WEBPACK_IMPORTED_MODULE_1__["Course"](course));
    }
}


/***/ }),

/***/ "./src/app/views/category/models/tab-container.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/category/models/tab-container.model.ts ***!
  \**************************************************************/
/*! exports provided: TabContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContainer", function() { return TabContainer; });
/* harmony import */ var _tab_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.model */ "./src/app/views/category/models/tab.model.ts");

class TabContainer {
    constructor(data) {
        const defaults = Object.assign({ title: "", tabItems: [] }, data);
        this.title = defaults.title;
        this.tabItems = defaults.tabItems.map(item => new _tab_model__WEBPACK_IMPORTED_MODULE_0__["Tab"](item));
    }
}


/***/ }),

/***/ "./src/app/views/category/models/tab.model.ts":
/*!****************************************************!*\
  !*** ./src/app/views/category/models/tab.model.ts ***!
  \****************************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
class Tab {
    constructor(data) {
        const defaults = Object.assign({ label: "", iconClasses: "" }, data);
        this.label = defaults.label;
        this.iconClasses = defaults.iconClasses;
    }
}


/***/ }),

/***/ "./src/app/views/category/models/topic/topic-full.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/category/models/topic/topic-full.model.ts ***!
  \*****************************************************************/
/*! exports provided: TopicFull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicFull", function() { return TopicFull; });
class TopicFull {
    constructor(data) {
        const defaults = Object.assign({ categorySimpleId: "", description: "", label: "", simpleId: "", playlistId: "", videoId: "" }, data);
        this.categorySimpleId = defaults.categorySimpleId;
        this.description = defaults.description;
        this.label = defaults.label;
        this.simpleId = defaults.simpleId;
        this.playlistId = defaults.playlistId;
        this.videoId = defaults.videoId;
    }
}


/***/ }),

/***/ "./src/app/views/category/models/topic/topic.model.ts":
/*!************************************************************!*\
  !*** ./src/app/views/category/models/topic/topic.model.ts ***!
  \************************************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
class Topic {
    constructor(data) {
        const defaults = Object.assign({ label: "", simpleId: "" }, data);
        this.label = defaults.label;
        this.simpleId = defaults.simpleId;
    }
}


/***/ }),

/***/ "./src/app/views/category/services/category/acategory.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/category/services/category/acategory.service.ts ***!
  \***********************************************************************/
/*! exports provided: ACategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACategoryService", function() { return ACategoryService; });
class ACategoryService {
}


/***/ }),

/***/ "./src/app/views/category/services/category/category.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/category/services/category/category.service.ts ***!
  \**********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/category.model */ "./src/app/views/category/models/category.model.ts");
/* harmony import */ var _acategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acategory.service */ "./src/app/views/category/services/category/acategory.service.ts");



class CategoryService extends _acategory_service__WEBPACK_IMPORTED_MODULE_2__["ACategoryService"] {
    constructor(httpUtil, http) {
        super();
        this.httpUtil = httpUtil;
        this.http = http;
        this.base = this.httpUtil.base;
    }
    getCategory(categoryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield this.http
                    .get(`${this.base}/v1/category/${categoryId}`)
                    .toPromise();
                return new _models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](res);
            }
            catch (err) {
                return new _models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/views/category/services/detail/adetail.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/category/services/detail/adetail.service.ts ***!
  \*******************************************************************/
/*! exports provided: ADetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADetailService", function() { return ADetailService; });
class ADetailService {
}


/***/ }),

/***/ "./src/app/views/category/services/detail/detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/category/services/detail/detail.service.ts ***!
  \******************************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adetail.service */ "./src/app/views/category/services/detail/adetail.service.ts");
/* harmony import */ var src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/detail.model */ "./src/app/shared/models/detail.model.ts");



class DetailService extends _adetail_service__WEBPACK_IMPORTED_MODULE_1__["ADetailService"] {
    constructor(httpUtil, http) {
        super();
        this.httpUtil = httpUtil;
        this.http = http;
        this.base = this.httpUtil.base;
    }
    getDetailByCategoryTopicSimpledId(categorySimpleId, topicSimpleId, detailSimpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield this.http
                    .get(`${this.base}/v1/details/${detailSimpleId}/category/${categorySimpleId}/topics/${topicSimpleId}`)
                    .toPromise();
                return new src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__["Detail"](res);
            }
            catch (error) {
                return new src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__["Detail"]();
            }
        });
    }
    getDetailByCategoryTopic(categorySimpleId, topicsSimpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield this.http
                    .get(`${this.base}/v1/details/category/${categorySimpleId}/topics/${topicsSimpleId}`)
                    .toPromise();
                return res.map((playlistItem) => new src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__["Detail"](playlistItem));
            }
            catch (error) {
                return [];
            }
        });
    }
}


/***/ }),

/***/ "./src/app/views/category/services/resources/aresources.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/category/services/resources/aresources.service.ts ***!
  \*************************************************************************/
/*! exports provided: AResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AResourcesService", function() { return AResourcesService; });
class AResourcesService {
}


/***/ }),

/***/ "./src/app/views/category/services/resources/resources.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/category/services/resources/resources.service.ts ***!
  \************************************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aresources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aresources.service */ "./src/app/views/category/services/resources/aresources.service.ts");
/* harmony import */ var _models_resources_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/resources.model */ "./src/app/views/category/models/resources.model.ts");



class ResourcesService extends _aresources_service__WEBPACK_IMPORTED_MODULE_1__["AResourcesService"] {
    constructor(httpUtil, http) {
        super();
        this.httpUtil = httpUtil;
        this.http = http;
        this.base = this.httpUtil.base;
    }
    getResourcesById(simpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield this.http.get(`${this.base}/v1/resources/${simpleId}`);
                return new _models_resources_model__WEBPACK_IMPORTED_MODULE_2__["Resources"](res);
            }
            catch (error) {
                return new _models_resources_model__WEBPACK_IMPORTED_MODULE_2__["Resources"]();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/views/category/services/topic/atopic.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/category/services/topic/atopic.service.ts ***!
  \*****************************************************************/
/*! exports provided: ATopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATopicService", function() { return ATopicService; });
class ATopicService {
}


/***/ }),

/***/ "./src/app/views/category/services/topic/topic.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/category/services/topic/topic.service.ts ***!
  \****************************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_topic_topic_full_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/topic/topic-full.model */ "./src/app/views/category/models/topic/topic-full.model.ts");
/* harmony import */ var _atopic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atopic.service */ "./src/app/views/category/services/topic/atopic.service.ts");



class TopicService extends _atopic_service__WEBPACK_IMPORTED_MODULE_2__["ATopicService"] {
    constructor(httpUtil, http) {
        super();
        this.httpUtil = httpUtil;
        this.http = http;
        this.base = this.httpUtil.base;
    }
    getTopicByCategoryId(categoryId, topicId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const res = yield this.http
                    .get(`${this.base}/v1/topics/${topicId}/category/${categoryId}`)
                    .toPromise();
                return new _models_topic_topic_full_model__WEBPACK_IMPORTED_MODULE_1__["TopicFull"](res);
            }
            catch (err) {
                return new _models_topic_topic_full_model__WEBPACK_IMPORTED_MODULE_1__["TopicFull"]();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/views/category/views/category-home/category-home.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/category/views/category-home/category-home.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_CategoryHomeComponent, View_CategoryHomeComponent_0, View_CategoryHomeComponent_Host_0, CategoryHomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryHomeComponent", function() { return RenderType_CategoryHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryHomeComponent_0", function() { return View_CategoryHomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryHomeComponent_Host_0", function() { return View_CategoryHomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHomeComponentNgFactory", function() { return CategoryHomeComponentNgFactory; });
/* harmony import */ var _category_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-home.component.scss.shim.ngstyle */ "./src/app/views/category/views/category-home/category-home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_topic_list_topic_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/topic-list/topic-list.component.ngfactory */ "./src/app/views/category/components/topic-list/topic-list.component.ngfactory.js");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/topic-list/topic-list.component */ "./src/app/views/category/components/topic-list/topic-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-home.component */ "./src/app/views/category/views/category-home/category-home.component.ts");
/* harmony import */ var _services_category_acategory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/category/acategory.service */ "./src/app/views/category/services/category/acategory.service.ts");
/* harmony import */ var _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header/service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_CategoryHomeComponent = [_category_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategoryHomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoryHomeComponent, data: {} });

function View_CategoryHomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-topic-list", [], null, null, null, _components_topic_list_topic_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TopiclistComponent_0"], _components_topic_list_topic_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TopiclistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_3__["TopiclistComponent"], [], { category: [0, "category"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category; _ck(_v, 1, 0, currVal_0); _ck(_v, 3, 0); }, null); }
function View_CategoryHomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-category-home", [], null, null, null, View_CategoryHomeComponent_0, RenderType_CategoryHomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _category_home_component__WEBPACK_IMPORTED_MODULE_5__["CategoryHomeComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_category_acategory_service__WEBPACK_IMPORTED_MODULE_6__["ACategoryService"], _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_7__["AHeaderService"], _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_8__["ASeoService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoryHomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-category-home", _category_home_component__WEBPACK_IMPORTED_MODULE_5__["CategoryHomeComponent"], View_CategoryHomeComponent_Host_0, { category: "category" }, {}, []);



/***/ }),

/***/ "./src/app/views/category/views/category-home/category-home.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/category/views/category-home/category-home.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L3ZpZXdzL2NhdGVnb3J5LWhvbWUvY2F0ZWdvcnktaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/views/category/views/category-home/category-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/category/views/category-home/category-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHomeComponent", function() { return CategoryHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/category.model */ "./src/app/views/category/models/category.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/model/header.model */ "./src/app/views/category/components/header/model/header.model.ts");





class CategoryHomeComponent {
    constructor(route, categoryService, headerService, seoService) {
        this.route = route;
        this.categoryService = categoryService;
        this.headerService = headerService;
        this.seoService = seoService;
        this.category = new _models_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { categoryId } = params;
            this.category = yield this.categoryService.getCategory(categoryId);
            this.updateHeader(this.category);
        }));
    }
    updateHeader(category) {
        const header = new _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__["Header"]({ categorySimpleId: category.simpleId });
        this.headerService.callHeader(header);
        this.updateMetaDescription(header);
    }
    updateMetaDescription(header) {
        this.seoService.addMetaTag(src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_1__["MetaTag"].Description, header.description);
    }
}


/***/ }),

/***/ "./src/app/views/category/views/detail/detail.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/views/category/views/detail/detail.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_DetailComponent, View_DetailComponent_0, View_DetailComponent_Host_0, DetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DetailComponent", function() { return RenderType_DetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailComponent_0", function() { return View_DetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailComponent_Host_0", function() { return View_DetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentNgFactory", function() { return DetailComponentNgFactory; });
/* harmony import */ var _detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.component.scss.shim.ngstyle */ "./src/app/views/category/views/detail/detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/video-playlist/video-playlist.component.ngfactory */ "./src/app/views/category/components/video-playlist/video-playlist.component.ngfactory.js");
/* harmony import */ var _components_video_playlist_video_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/video-playlist/video-playlist.component */ "./src/app/views/category/components/video-playlist/video-playlist.component.ts");
/* harmony import */ var _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/video/video.component.ngfactory */ "./src/app/views/category/components/video/video.component.ngfactory.js");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/video/video.component */ "./src/app/views/category/components/video/video.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail.component */ "./src/app/views/category/views/detail/detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/header/service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/* harmony import */ var _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/detail/adetail.service */ "./src/app/views/category/services/detail/adetail.service.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_DetailComponent = [_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DetailComponent, data: {} });

function View_DetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["id", "detail-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-video-playlist", [], null, null, null, _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_VideoPlayListComponent_0"], _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_VideoPlayListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_video_playlist_video_playlist_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayListComponent"], [], { nextRoutePiece: [0, "nextRoutePiece"], playlists: [1, "playlists"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-video", [], null, null, null, _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_VideoComponent_0"], _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_VideoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { videoId: [0, "videoId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "../"; var currVal_1 = _co.detailPlaylist; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.detail.videoId; _ck(_v, 4, 0, currVal_2); }, null); }
function View_DetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-detail", [], null, null, null, View_DetailComponent_0, RenderType_DetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_9__["AHeaderService"], _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_10__["ADetailService"], _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_11__["ASeoService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-detail", _detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], View_DetailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/views/detail/detail.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/views/category/views/detail/detail.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
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
var styles = ["#detail-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"playlist video\";\n  grid-gap: 10px;\n}\n#detail-container[_ngcontent-%COMP%]   #playlist[_ngcontent-%COMP%] {\n  grid-area: playlist;\n}\n#detail-container[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  grid-area: video;\n}\n@media screen and (max-width: 768px) {\n  #detail-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"video\" \"playlist\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvdmlld3MvZGV0YWlsL0Q6XFxIVE1MXFxhbmd1bGFyXFx2aWRlby1kZXYtZG9jc1xcdmlkZW8tZG9jcy9zcmNcXGFwcFxcdmlld3NcXGNhdGVnb3J5XFx2aWV3c1xcZGV0YWlsXFxkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L3ZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREdBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLHVDQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L3ZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGxheWxpc3QgdmlkZW9cIjtcclxuICBncmlkLWdhcDogMTBweDtcclxuXHJcbiAgI3BsYXlsaXN0IHtcclxuICAgIGdyaWQtYXJlYTogcGxheWxpc3Q7XHJcbiAgfVxyXG4gICN2aWRlbyB7XHJcbiAgICBncmlkLWFyZWE6IHZpZGVvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidmlkZW9cIiBcInBsYXlsaXN0XCI7XHJcbiAgfVxyXG59XHJcbiIsIiNkZXRhaWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwbGF5bGlzdCB2aWRlb1wiO1xuICBncmlkLWdhcDogMTBweDtcbn1cbiNkZXRhaWwtY29udGFpbmVyICNwbGF5bGlzdCB7XG4gIGdyaWQtYXJlYTogcGxheWxpc3Q7XG59XG4jZGV0YWlsLWNvbnRhaW5lciAjdmlkZW8ge1xuICBncmlkLWFyZWE6IHZpZGVvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ2aWRlb1wiIFwicGxheWxpc3RcIjtcbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/views/category/views/detail/detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/category/views/detail/detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/detail.model */ "./src/app/shared/models/detail.model.ts");
/* harmony import */ var src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");
/* harmony import */ var _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/model/header.model */ "./src/app/views/category/components/header/model/header.model.ts");





class DetailComponent {
    constructor(route, headerService, detailService, seoService) {
        this.route = route;
        this.headerService = headerService;
        this.detailService = detailService;
        this.seoService = seoService;
        this.detail = new src_app_shared_models_detail_model__WEBPACK_IMPORTED_MODULE_2__["Detail"]();
        this.detailPlaylist = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const categoryId = this.route.parent.snapshot.paramMap.get("categoryId");
            const { topicId, detailId } = params;
            this.updateDetail(categoryId, topicId, detailId);
            this.updateDetailPlaylist(categoryId, topicId);
        }));
    }
    updateDetail(categorySimpleId, topicSimpleId, detailSimpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.detail = yield this.detailService.getDetailByCategoryTopicSimpledId(categorySimpleId, topicSimpleId, detailSimpleId);
            this.updateHeader(this.detail);
        });
    }
    updateDetailPlaylist(categorySimpleId, topciSimpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.detailPlaylist = yield this.detailService.getDetailByCategoryTopic(categorySimpleId, topciSimpleId);
        });
    }
    updateHeader(detail) {
        const header = new _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__["Header"](Object.assign({}, detail));
        this.headerService.callHeader(header);
        this.seoService.addMetaTag(src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_3__["MetaTag"].Description, header.description);
        this.seoService.addTwitterMeta(header.description, this.detail.thumbnailUrl);
    }
}


/***/ }),

/***/ "./src/app/views/category/views/topic/topic.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/views/category/views/topic/topic.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TopicComponent, View_TopicComponent_0, View_TopicComponent_Host_0, TopicComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TopicComponent", function() { return RenderType_TopicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopicComponent_0", function() { return View_TopicComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopicComponent_Host_0", function() { return View_TopicComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponentNgFactory", function() { return TopicComponentNgFactory; });
/* harmony import */ var _topic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic.component.scss.shim.ngstyle */ "./src/app/views/category/views/topic/topic.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/video-playlist/video-playlist.component.ngfactory */ "./src/app/views/category/components/video-playlist/video-playlist.component.ngfactory.js");
/* harmony import */ var _components_video_playlist_video_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/video-playlist/video-playlist.component */ "./src/app/views/category/components/video-playlist/video-playlist.component.ts");
/* harmony import */ var _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/video/video.component.ngfactory */ "./src/app/views/category/components/video/video.component.ngfactory.js");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/video/video.component */ "./src/app/views/category/components/video/video.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topic.component */ "./src/app/views/category/views/topic/topic.component.ts");
/* harmony import */ var _services_topic_atopic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/topic/atopic.service */ "./src/app/views/category/services/topic/atopic.service.ts");
/* harmony import */ var _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/header/service/aheader.service */ "./src/app/views/category/components/header/service/aheader.service.ts");
/* harmony import */ var _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/detail/adetail.service */ "./src/app/views/category/services/detail/adetail.service.ts");
/* harmony import */ var _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/seo/aseo.service */ "./src/app/shared/seo/aseo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_TopicComponent = [_topic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TopicComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TopicComponent, data: {} });

function View_TopicComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["id", "topic-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-video-playlist", [["id", "playlist"]], null, null, null, _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_VideoPlayListComponent_0"], _components_video_playlist_video_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_VideoPlayListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_video_playlist_video_playlist_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayListComponent"], [], { nextRoutePiece: [0, "nextRoutePiece"], playlists: [1, "playlists"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-video", [["id", "video"]], null, null, null, _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_VideoComponent_0"], _components_video_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_VideoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { videoId: [0, "videoId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "detail"; var currVal_1 = _co.detailPlaylist; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.topic.videoId; _ck(_v, 4, 0, currVal_2); _ck(_v, 6, 0); }, null); }
function View_TopicComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-topic", [], null, null, null, View_TopicComponent_0, RenderType_TopicComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _topic_component__WEBPACK_IMPORTED_MODULE_8__["TopicComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_topic_atopic_service__WEBPACK_IMPORTED_MODULE_9__["ATopicService"], _components_header_service_aheader_service__WEBPACK_IMPORTED_MODULE_10__["AHeaderService"], _services_detail_adetail_service__WEBPACK_IMPORTED_MODULE_11__["ADetailService"], _shared_seo_aseo_service__WEBPACK_IMPORTED_MODULE_12__["ASeoService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TopicComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-topic", _topic_component__WEBPACK_IMPORTED_MODULE_8__["TopicComponent"], View_TopicComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/category/views/topic/topic.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/views/category/views/topic/topic.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = ["#topic-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"playlist video\";\n  grid-gap: 10px;\n}\n#topic-container[_ngcontent-%COMP%]   #playlist[_ngcontent-%COMP%] {\n  grid-area: playlist;\n}\n#topic-container[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  grid-area: video;\n}\n@media screen and (max-width: 768px) {\n  #topic-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"video\" \"playlist\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcnkvdmlld3MvdG9waWMvRDpcXEhUTUxcXGFuZ3VsYXJcXHZpZGVvLWRldi1kb2NzXFx2aWRlby1kb2NzL3NyY1xcYXBwXFx2aWV3c1xcY2F0ZWdvcnlcXHZpZXdzXFx0b3BpY1xcdG9waWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NhdGVnb3J5L3ZpZXdzL3RvcGljL3RvcGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0FDQ0o7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURHQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSx1Q0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yeS92aWV3cy90b3BpYy90b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3BpYy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBsYXlsaXN0IHZpZGVvXCI7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcblxyXG4gICNwbGF5bGlzdCB7XHJcbiAgICBncmlkLWFyZWE6IHBsYXlsaXN0O1xyXG4gIH1cclxuICAjdmlkZW8ge1xyXG4gICAgZ3JpZC1hcmVhOiB2aWRlbztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3RvcGljLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidmlkZW9cIiBcInBsYXlsaXN0XCI7XHJcbiAgfVxyXG59XHJcbiIsIiN0b3BpYy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBsYXlsaXN0IHZpZGVvXCI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuI3RvcGljLWNvbnRhaW5lciAjcGxheWxpc3Qge1xuICBncmlkLWFyZWE6IHBsYXlsaXN0O1xufVxuI3RvcGljLWNvbnRhaW5lciAjdmlkZW8ge1xuICBncmlkLWFyZWE6IHZpZGVvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjdG9waWMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInZpZGVvXCIgXCJwbGF5bGlzdFwiO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/views/category/views/topic/topic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/category/views/topic/topic.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_topic_topic_full_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/topic/topic-full.model */ "./src/app/views/category/models/topic/topic-full.model.ts");
/* harmony import */ var src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/enums/meta-tag.enum */ "./src/app/shared/models/enums/meta-tag.enum.ts");
/* harmony import */ var _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/model/header.model */ "./src/app/views/category/components/header/model/header.model.ts");





class TopicComponent {
    constructor(route, topicService, headerService, detailService, seoService) {
        this.route = route;
        this.topicService = topicService;
        this.headerService = headerService;
        this.detailService = detailService;
        this.seoService = seoService;
        this.topic = new _models_topic_topic_full_model__WEBPACK_IMPORTED_MODULE_2__["TopicFull"]();
        this.detailPlaylist = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const categoryId = this.route.snapshot.paramMap.get("categoryId");
            const { topicId } = params;
            this.updateDetailPlaylist(categoryId, topicId);
            this.updateTopic(categoryId, topicId);
        }));
    }
    updateDetailPlaylist(categorySimpleId, topciSimpleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.detailPlaylist = yield this.detailService.getDetailByCategoryTopic(categorySimpleId, topciSimpleId);
        });
    }
    updateTopic(categorySimpleId, topicId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.topic = yield this.topicService.getTopicByCategoryId(categorySimpleId, topicId);
            this.updateHeader(this.topic);
        });
    }
    updateHeader(topic) {
        const header = new _components_header_model_header_model__WEBPACK_IMPORTED_MODULE_4__["Header"](Object.assign({}, topic));
        this.headerService.callHeader(header);
        this.seoService.addMetaTag(src_app_shared_models_enums_meta_tag_enum__WEBPACK_IMPORTED_MODULE_3__["MetaTag"].Description, header.description);
    }
}


/***/ })

}]);
//# sourceMappingURL=views-category-category-module-ngfactory-es2015.js.map