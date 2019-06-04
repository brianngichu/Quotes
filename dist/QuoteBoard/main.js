(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote></app-quote>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quotes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quote/quote.component */ "./src/app/components/quote/quote.component.ts");
/* harmony import */ var _components_quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quote-details/quote-details.component */ "./src/app/components/quote-details/quote-details.component.ts");
/* harmony import */ var _components_quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quote-form/quote-form.component */ "./src/app/components/quote-form/quote-form.component.ts");
/* harmony import */ var _time_count_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-count.pipe */ "./src/app/time-count.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_4__["QuoteComponent"],
                _components_quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsComponent"],
                _components_quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteFormComponent"],
                _time_count_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeCountPipe"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_8__["HighlightDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/quote-details/quote-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/quote-details/quote-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  margin-left: 30%;\n  margin-top: 10px;\n}\n.col p{\n  margin-top: 10px;\n  margin-left: -20%;\n}\n.btn-danger{\n  margin-left: 42%;\n}\n"

/***/ }),

/***/ "./src/app/components/quote-details/quote-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/quote-details/quote-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"blockquote-footer text-right\">{{quote.author}}</footer>\n<div class=\"container\">\n  <div class=\"row\">\n    <div  class=\"col\">\n      <small ><button (click)='quoteAdd()'><i class=\"fa fa-thumbs-up\"></i></button></small>\n      <p>Like: {{quote.upVote}} </p>\n    </div>\n\n    <div class=\"col\">\n      <small><button (click)='quoteMinus()' type=\"button\" name=\"button\"><i class=\"fa fa-thumbs-down\"></i></button></small>\n      <p>Unlike: {{quote.downVote}}  </p>\n    </div>\n  </div>\n  <button (click)='quoteDelete(true)' class=\"btn btn-danger btn-sm\">Delete</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/quote-details/quote-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/quote-details/quote-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuoteDetailsComponent.prototype.quoteAdd = function () {
        this.quote.upVote += 1;
    };
    QuoteDetailsComponent.prototype.quoteMinus = function () {
        this.quote.downVote += 1;
    };
    QuoteDetailsComponent.prototype.quoteDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isComplete", void 0);
    QuoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/components/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/components/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/quote-form/quote-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/quote-form/quote-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n  width: 100%;\n}\n.container{\n  background-color:whitesmoke;\n}"

/***/ }),

/***/ "./src/app/components/quote-form/quote-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/quote-form/quote-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"details\">\n        <form (ngSubmit)='submitQuote()' #goalForm ='ngForm'>\n            <div class=\"form-group\">\n                <input [(ngModel)]=\"newQuote.name\" name=\"name\" #name=\"ngModel\" type=\"text\"  class=\" name form-control\" id=\"name\" placeholder=\"Full Names\">\n            </div>\n            <div class=\"form-group\">\n                <textarea [(ngModel)]=\"newQuote.quoteWords\" name=\"quoteWords\" #quoteWords=\"ngModel\"  id=\"quoteWords\" rows=\"4\"  class=\"quotes form-control\"\n                placeholder=\"Quote\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <input [(ngModel)]=\"newQuote.author\" name=\"author\" #author=\"ngModel\" type='text' id=\"author\"  class=\"author form-control\" placeholder=\"Author\">\n            </div>\n            <div class=\"form-group\">\n               <input type='date' id=\"complete\" [(ngModel)]=\"newQuote.completeDate\" name=\"completeDate\" #completeDate=\"ngModel\" class=\"date form-control\">\n           </div>\n          <button type=\"submit\" class=\"btn btn-success\">Generate</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/quote-form/quote-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/quote-form/quote-form.component.ts ***!
  \***************************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]("", "", "", new Date(), 0, 0);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/components/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/components/quote-form/quote-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/components/quote/quote.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/quote/quote.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  height: 60px;\n  background-color: black;\n  color : gold;\n}\nheader > h1{\n  text-align: center;\n  text-transform: uppercase\n}\n.box{\n  margin-left: 20%;\n  background-color: whitesmoke;\n  margin-right: 20%\n}\n.contain{\n  background-color: whitesmoke;\n  margin-top: 50px;\n  width: 50%;\n  margin-left: 80px;\n}\n.contain > p{\n  width: 100%;\n}\n.welcome{\n  text-align: center;\n}\nh2{\n  margin-top: 30px;\n}\nul{\n  list-style-type: none;\n}\np{\n  font-size: 18px;\n}\n.button button{\n  margin-left: 42%;\n  margin-top: 30px;\n}\n.contain a{\n  color: white;\n  font-size : 20px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/quote/quote.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/quote/quote.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Inspire</h1>\n</header>\n<div class=\"welcome\">\n  <h2>Welcome To Inspire</h2>\n</div>\n<div class=\"contain\">\n  <p> “And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.” “It has long been an axiom of mine that the little things are infinitely the most important.”</p>\n</div>\n    <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n \n<div class=\"contain\">\n  <div class=\"box\" *ngFor='let quote of quotes'>\n    <blockquote class=\"blockquote\">\n      <ul>\n        <li appHighlight>{{quote.quoteWords}}</li>\n        <app-quote-details [quote]=\"quote\" (isComplete)=\"deleteQuote($event,i)\"></app-quote-details>\n      </ul>\n     </blockquote>\n        <p class= \"text-center\">Submitted by {{quote.name}} {{quote.completeDate|timeCount}} days ago</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/quote/quote.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/quote/quote.component.ts ***!
  \*****************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        this.quotes.unshift(quote);
    };
    QuoteComponent.prototype.deleteQuote = function (isComplete, index) {
        if (isComplete) {
            var toDelete = confirm("Do you want to delete?");
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/components/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/components/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elem) {
        this.elem = elem;
        this.elem.nativeElement.style.backgroundColor = 'cyan';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(name, quoteWords, author, completeDate, upVote, downVote) {
        this.name = name;
        this.quoteWords = quoteWords;
        this.author = author;
        this.completeDate = completeDate;
        this.upVote = upVote;
        this.downVote = downVote;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/time-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-count.pipe.ts ***!
  \************************************/
/*! exports provided: TimeCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCountPipe", function() { return TimeCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeCountPipe = /** @class */ (function () {
    function TimeCountPipe() {
    }
    TimeCountPipe.prototype.transform = function (value) {
        var today = new Date();
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(todayWithNoTime - value);
        var secondsInADay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value < todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    TimeCountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeCount'
        })
    ], TimeCountPipe);
    return TimeCountPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/moringa core/QuoteBoard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map