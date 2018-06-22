webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsServiceComponent = /** @class */ (function () {
    function NewsServiceComponent(http) {
        this.http = http;
        this.apiKey = '&apiKey=4e6ac20b62354dab9fcc7ae306257e3e';
    }
    NewsServiceComponent.prototype.getNames = function (q) {
        if (q.term === undefined) {
            q.term = 'Vancouver';
        }
        if (q.fromDay === undefined) {
            q.fromDay = new Date().toISOString().slice(0, 10);
        }
        if (q.toDay === undefined) {
            q.toDay = new Date().toISOString().slice(0, 10);
        }
        return this.http.get("https://newsapi.org/v2/everything?q=" + q.term + "&from=" + q.fromDay + "&to=" + q.toDay + "&sortBy=popularity" + this.apiKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) {
            var body = res.json();
            return body.articles;
        })).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    NewsServiceComponent.prototype.getSources = function () {
        return this.http.get("https://newsapi.org/v2/sources?language=en" + this.apiKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) {
            var body = res.json();
            return body.sources;
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    NewsServiceComponent.prototype.getTopBySource = function (q) {
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=" + q.name + this.apiKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) {
            var body = res.json();
            return body.articles;
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    NewsServiceComponent.prototype.handleError = function (error) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__["_throw"])(JSON.stringify(error));
    };
    NewsServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NewsServiceComponent);
    return NewsServiceComponent;
}());

//# sourceMappingURL=newsservice.js.map

/***/ }),

/***/ 135:
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
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_sources__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmarked_bookmarked__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__sources_sources__["a" /* sourcesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__bookmarked_bookmarked__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="News" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sources" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Saved" tabIcon="bookmark"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_newsservice_newsservice__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_top__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var sourcesPage = /** @class */ (function () {
    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    function sourcesPage(myDataService, storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.myInput = '';
        // Store local reference to MyDataService.
        this._myDataService = myDataService;
    }
    sourcesPage.prototype.ionViewDidEnter = function () {
        this.getSomeData();
    };
    sourcesPage.prototype.initializeItems = function () {
        this.Sources = this.quriedSources;
    };
    sourcesPage.prototype.pushPage = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__source_top__["a" /* TopBySource */], {
            name: name
        });
    };
    sourcesPage.prototype.getSomeData = function () {
        var _this = this;
        this._myDataService.getSources()
            .subscribe(function (data) {
            _this.quriedSources = data;
        }, 
        // 2. Handle error.
        function (error) {
            _this.dbError = 'No database connection';
            console.log(error);
        }, 
        // 3. Execute final instructions when successful.
        function () {
            _this.Sources = _this.quriedSources;
        });
    };
    sourcesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.Sources = this.Sources.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    sourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sources',template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/pages/sources/sources.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sources\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-list inset>\n      <button ion-item *ngFor="let item of Sources" (click)="pushPage(item.id)">\n        {{item.name}}\n        <ion-note item-end>{{item.category}}</ion-note>\n      </button>\n      <p *ngIf="dbError">{{dbError}}</p>\n    </ion-list>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/pages/sources/sources.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__components_newsservice_newsservice__["a" /* NewsServiceComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__source_top__["a" /* TopBySource */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__components_newsservice_newsservice__["a" /* NewsServiceComponent */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], sourcesPage);
    return sourcesPage;
}());

//# sourceMappingURL=sources.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBySource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bookmark__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopBySource = /** @class */ (function () {
    function TopBySource(navParams, storage, bookmarkProvider, myDataService) {
        this.navParams = navParams;
        this.storage = storage;
        this.bookmarkProvider = bookmarkProvider;
        this.myInput = '';
        this.name = navParams.get('name');
        this._myDataService = myDataService;
    }
    TopBySource.prototype.ionViewDidEnter = function () {
        var q = {
            name: this.name
        };
        this.getNewsBySource(q);
    };
    TopBySource.prototype.getNewsBySource = function (q) {
        var _this = this;
        this._myDataService.getTopBySource(q)
            .subscribe(function (data) {
            _this.NewsBySource = data;
            console.log(data);
        }, 
        // 2. Handle error.
        function (error) {
            _this.dbError = 'No database connection';
            console.log(error);
        }, 
        // 3. Execute final instructions when successful.
        function () {
            // console.log("Finished")
        });
    };
    TopBySource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>{{name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content overflow-scroll=\"true\">\n      <div class=\"list\">\n       <news-card *ngFor=\"let item of NewsBySource\" [item]=\"item\"></news-card>\n\n    </div>\n</ion-content>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__["a" /* NewsServiceComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__components_bookmark__["a" /* BookmarkProvider */], __WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__["a" /* NewsServiceComponent */]])
    ], TopBySource);
    return TopBySource;
}());

//# sourceMappingURL=source-top.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bookmark__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, storage, bookmarkProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.bookmarkProvider = bookmarkProvider;
    }
    ContactPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.bookmarkProvider.getAllBookmarkFilms().then(function (val) {
            _this.SavedNews = val;
        });
        console.log(this.SavedNews);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmarked',template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/pages/bookmarked/bookmarked.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Saved Articles\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n <ion-content overflow-scroll="true">\n    <div class="list">\n       <news-card *ngFor="let item of SavedNews" [item]="item"></news-card>\n    </div>\n  </ion-content>\n\n\n'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/pages/bookmarked/bookmarked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__components_bookmark__["a" /* BookmarkProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=bookmarked.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    function HomePage(myDataService, storage) {
        this.storage = storage;
        this.myInput = '';
        this.isError = false;
        this._myDataService = myDataService;
        this.loadDefault();
    }
    /*   ionViewDidEnter() { //load data each time the tab is entered
            this.loadDefault();
    }
    }*/
    HomePage.prototype.loadDefault = function () {
        var q = {
            term: 'Vancouver',
            country: 'ca'
        };
        this.getSomeData(q);
    };
    HomePage.prototype.onSearch = function (e) {
        var q = {
            term: e.target.value
        };
        this.getSomeData(q);
    };
    HomePage.prototype.getSomeData = function (q) {
        var _this = this;
        this._myDataService.getNames(q)
            .subscribe(function (data) {
            _this.News = data;
        }, 
        // 2. Handle error.
        function (error) {
            _this.isError = true;
            console.log(error);
        }, 
        // 3. Execute final instructions when successful.
        function () {
            // console.log("Finished")
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (search)=" onSearch($event)" (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <p *ngIf="isError">Not able to connect to database</p>\n\n  <ion-content overflow-scroll="true">\n    <div class="list">\n\n      <news-card *ngFor="let item of News" [item]="item"></news-card>\n    </div>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__["a" /* NewsServiceComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_newsservice_newsservice__["a" /* NewsServiceComponent */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sources_sources__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bookmarked_bookmarked__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_news_card_card__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_time_ago_pipe__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_bookmark__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_source_top__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sources_sources__["a" /* sourcesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bookmarked_bookmarked__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_news_card_card__["a" /* NewsCard */],
                __WEBPACK_IMPORTED_MODULE_13_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pages_source_top__["a" /* TopBySource */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sources_sources__["a" /* sourcesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bookmarked_bookmarked__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_source_top__["a" /* TopBySource */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__components_bookmark__["a" /* BookmarkProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmark__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsCard = /** @class */ (function () {
    function NewsCard(bookmarkProvider) {
        this.bookmarkProvider = bookmarkProvider;
        this.isBookmark = false;
    }
    NewsCard.prototype.ngOnInit = function () {
        var _this = this;
        this.bookmarkProvider.isBookmark(this.item).then(function (isFav) {
            _this.isBookmark = isFav; //check if bookmark exist
        });
    };
    NewsCard.prototype.ionViewDidEnter = function () {
    };
    NewsCard.prototype.bookmarkedCard = function () {
        var _this = this;
        this.bookmarkProvider.bookmarkedCard(this.item).then(function () {
            _this.isBookmark = true;
        });
    };
    NewsCard.prototype.unbookmarkedCard = function () {
        var _this = this;
        this.bookmarkProvider.unbookmarkedCard(this.item.url).then(function () {
            _this.isBookmark = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewsCard.prototype, "item", void 0);
    NewsCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news-card',template:/*ion-inline-start:"/Users/mtaranova/Documents/news-app/src/components/news-card/card.html"*/'<ion-card *ngIf="item">\n  <ion-item>\n    <ion-avatar item-start>\n      <img src={{item.urlToImage}} [class.hide]="!item.urlToImage">\n    </ion-avatar>\n    <h2>{{item.source.name}}</h2>\n    <p>{{item.publishedAt | timeAgo}} by {{item.author}}</p>\n  </ion-item>\n  <a href="{{item.url}}" target="_blank" [class.hide]="!item.urlToImage">\n  <img src={{item.urlToImage}}>\n</a>\n  <ion-card-content>\n    <h3>{{item.title}}</h3>\n\n    <p>{{item.description}}</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n\n\n      <button ion-button outline clear small icon-left (click)="unbookmarkedCard()" *ngIf="isBookmark">\n   <ion-icon name="bookmark"></ion-icon>\nSaved\n</button>\n      <button ion-button outline clear small icon-left (click)="bookmarkedCard()" *ngIf="!isBookmark">\n\n   <ion-icon name="bookmark-outlined"></ion-icon>\nSave for later\n</button>\n\n\n    </ion-col>\n    <ion-col center text-right>\n      <button ion-button outline icon-left small>\n        <ion-icon name="arrow-dropright"></ion-icon>\n        <div><a href="{{item.url}}" target="_blank">Read now</a></div>\n      </button>\n    </ion-col>\n\n\n  </ion-row>\n\n</ion-card>'/*ion-inline-end:"/Users/mtaranova/Documents/news-app/src/components/news-card/card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bookmark__["a" /* BookmarkProvider */]])
    ], NewsCard);
    return NewsCard;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'bookmarks';
var BookmarkProvider = /** @class */ (function () {
    function BookmarkProvider(storage) {
        this.storage = storage;
    }
    BookmarkProvider.prototype.isBookmark = function (filmId) {
        return this.getAllBookmarkFilms().then(function (result) {
            if (result) {
                return result.some(function (el) {
                    return el.url === filmId.url;
                });
            }
            else {
                return false; //if the boomarks doesb't exist in storage
            }
        });
    };
    BookmarkProvider.prototype.bookmarkedCard = function (filmId) {
        var _this = this;
        return this.getAllBookmarkFilms().then(function (result) {
            if (result) {
                result.push(filmId);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [filmId]);
            }
        });
    };
    BookmarkProvider.prototype.unbookmarkedCard = function (filmId) {
        var _this = this;
        return this.getAllBookmarkFilms().then(function (result) {
            if (result) {
                var urlArray = result.map(function (e) { return e.url; });
                var index = urlArray.indexOf(filmId);
                result.splice(index, 1); //delete if unliked
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    BookmarkProvider.prototype.getAllBookmarkFilms = function () {
        //this.storage.clear()
        return this.storage.get(STORAGE_KEY).then(function (val) {
            if (val != null) {
                return val;
            }
            else {
                return;
            }
        }, function (err) {
            console.log("Storage error : ", err);
        });
    };
    BookmarkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], BookmarkProvider);
    return BookmarkProvider;
}());

//# sourceMappingURL=bookmark.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.js.map