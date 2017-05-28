webpackJsonp([2,5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Global Constants
var Parse = __webpack_require__(432);
// Initialize Parse
Parse.initialize('wyf-app', 'key');
Parse.serverURL = 'http://localhost:3000/parse';
var ParseApiService = (function () {
    function ParseApiService(dom) {
        this.Api = Parse;
        // Respond to live query socket events
        Parse.LiveQuery.on('open', function () {
            var loggedIn = Parse.User.current() ? true : false;
            console.log("Opened Socket - Logged in: " + loggedIn);
        });
        Parse.LiveQuery.on('close', function () {
            var loggedIn = Parse.User.current() ? true : false;
            console.log("Opened Socket - Logged in: " + loggedIn);
        });
        Parse.LiveQuery.on('error', function (error) {
            console.warn("Socket Experienced an Error", error);
        });
        // dom.window.link('ParseApiService', this);
    }
    ParseApiService.prototype.logIn = function (username, password, success, error) {
        Parse.User.logIn(username, password).then(function (res) {
            success(res);
        }, function (e) {
            error(e);
        });
    };
    ParseApiService.prototype.logInFacebook = function (success, error) {
        Parse.FacebookUtils.logIn(null, {
            success: function (user) {
                // Call success funciton
                success(user);
            },
            error: function (user, error) {
                error(user, error);
            }
        });
    };
    ParseApiService.prototype.signup = function (username, password, success) {
        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.signUp().then(function () {
            // Call success function
            success();
        }, function (e) {
            console.log("Signin failed through email");
        });
    };
    // Get all posts from the API
    ParseApiService.prototype.test = function (success) {
        var Test = this.Api.Object.extend("Test");
        var query = new this.Api.Query(Test);
        query.find({
            success: function (obj) {
                success(obj);
            }
        });
        return "Parse Save Succeeded!";
    };
    return ParseApiService;
}());
ParseApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__["a" /* DomInjectableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__["a" /* DomInjectableService */]) === "function" && _a || Object])
], ParseApiService);

var _a;
//# sourceMappingURL=parse-api.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                width: '100%',
                height: '100%',
                thumbnailsColumns: 3,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__["b" /* NgxGalleryAnimation */].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '100%',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }];
        this.galleryImages = [
            {
                small: 'https://lorempixel.com/180/100',
                medium: 'https://lorempixel.com/540/300',
                big: 'https://lorempixel.com/900/500'
            },
            {
                small: 'https://lorempixel.com/180/100',
                medium: 'https://lorempixel.com/540/300',
                big: 'https://lorempixel.com/900/500'
            },
            {
                small: 'https://lorempixel.com/180/100',
                medium: 'https://lorempixel.com/540/300',
                big: 'https://lorempixel.com/900/500'
            }
        ];
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        template: __webpack_require__(459),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        template: __webpack_require__(461),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 267;


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(297);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_component__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(bootstrapConfig) {
        this.title = 'app works!';
        bootstrapConfig.interval = 10000;
        bootstrapConfig.wrap = false;
        bootstrapConfig.keyboard = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(457),
        styles: [__webpack_require__(419)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]] // add NgbCarouselConfig to the component providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dev_brand_dev_brand_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_slider_slider_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_contact_contact_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dom_injectables_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__parse_api_parse_api_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**********************************************************************
 * Primary App Dependencies
 **********************************************************************/







/**********************************************************************
 * App Components
 **********************************************************************/







/**********************************************************************
 * App Services
 **********************************************************************/


/**********************************************************************
 * Primary App Module
 **********************************************************************/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dev_brand_dev_brand_component__["a" /* DevBrandComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__["a" /* GalleryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'wyf-app' }),
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["a" /* NgxGalleryModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__dom_injectables_service__["a" /* DomInjectableService */], __WEBPACK_IMPORTED_MODULE_15__parse_api_parse_api_service__["a" /* ParseApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_api_parse_api_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevBrandComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**********************************************************************
 * Filename:      dev-brand.component.ts
 * Author:        Tech Ninja
 * Date:          May 26, 2017
 * Description:   Angular component that controls the dev-tag branding
 *                below the page footer.
 * Credits:
 **********************************************************************/




/**********************************************************************
 * Jquery Prototype:
 * allows for chaining: $(selector).animateRotate()
 **********************************************************************/
__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default.a.fn.animateRotate = function (angle, duration, easing, complete) {
    return this.each(function () {
        var $elem = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(this);
        __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()({
            deg: 0
        }).animate({
            deg: angle
        }, {
            duration: duration,
            easing: easing,
            step: function (now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default.a.noop
        });
    });
};
/**********************************************************************
 * Dev-Brand Component:
 * Angular Component decorator and exported class
 **********************************************************************/
var DevBrandComponent = (function () {
    // Constructor
    function DevBrandComponent(dom, parse) {
        this.dom = dom;
        this.parse = parse;
    }
    // Window Scroll Listener
    DevBrandComponent.prototype.onWindowScroll = function () {
        this.screenOffset = this.dom.document.body.scrollHeight;
        this.yPos = this.dom.window.scrollY;
        this.winHeight = this.dom.window.innerHeight;
        this.overlay = this.dom.document.querySelector('.menu-overlay');
        this.dev_tag = this.dom.document.querySelector('.dev-tag-wrapper');
        // Branding
        this.DevBrand(this.yPos, this.dev_tag, this.screenOffset, this.winHeight);
    };
    DevBrandComponent.prototype.submitForm = function (n, e, q) {
        console.log("Submitting form", [arguments]);
        var Table = this.parse.Api.Object.extend('TechNinja');
        var table = new Table();
        var user = {
            name: n,
            email: e,
            questions: q
        };
        table.save(user, {
            success: function (res) { console.info(["Response", arguments]); },
            error: function (err) { console.info(["Error", arguments]); }
        });
    };
    // Executes when the controller is initialized
    DevBrandComponent.prototype.ngOnInit = function () {
        // Set the needed parameters
        this.screenOffset = this.dom.document.body.scrollHeight;
        this.yPos = this.dom.window.scrollY;
        this.winHeight = this.dom.window.innerHeight;
        this.overlay = this.dom.document.querySelector('.menu-overlay');
        this.dev_tag = this.dom.document.querySelector('.dev-tag-wrapper');
        // Enable the dev-brand
        this.DevBrand(this.yPos, this.dev_tag, this.screenOffset, this.winHeight);
        // Dev Brand Functionality
        var dev_btn = __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()('.dev-link');
        // Button click listener
        dev_btn.on('click', function (e) {
            e.preventDefault();
            var chevron = '.dev-chevron';
            var dev_bar = '.dev-tag';
            rotate(chevron);
            moveUp(dev_bar);
            changeColor(chevron);
            // console.log("Clicked")
        });
        function rotate(selector) {
            __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).toggleClass("down");
            // console.log("Rotated", $(selector));
        }
        function moveUp(selector) {
            if (__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).css('height') !== '500px')
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).animate({
                    height: '500px'
                });
            else
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).animate({
                    height: '22px'
                });
            // console.log("Moved", $(selector).css('height'));
        }
        function changeColor(selector) {
            if (__WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).css("color") === 'rgb(251, 168, 60)')
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).css("color", 'rgb(255, 255, 255)');
            else
                __WEBPACK_IMPORTED_MODULE_2_jquery_dist_jquery___default()(selector).css("color", 'rgb(251, 168, 60)');
            // console.log("Changed Color", $(selector).css("color"));
        }
    };
    DevBrandComponent.prototype.menuOverlay = function (yPos, overlay) {
        // Reactive Menu
        if (yPos > 100)
            this.setVisibility(overlay, 'visible');
        if (yPos < 100)
            this.setVisibility(overlay, 'hidden');
    };
    DevBrandComponent.prototype.DevBrand = function (yPos, dev_tag, screenOffset, win) {
        // Reactive Dev Tag
        var factor = .98;
        // console.log(["Eval", (yPos + win) > screenOffset * factor, "start val", (yPos + win), "greater than", screenOffset * factor, "Win", win]);
        if ((yPos + win) > screenOffset * factor)
            this.setVisibility(dev_tag, 'visible');
        if ((yPos + win) < screenOffset * factor)
            this.setVisibility(dev_tag, 'hidden');
    };
    DevBrandComponent.prototype.setVisibility = function (el, visibility) {
        return el.style.visibility = visibility;
    };
    return DevBrandComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DevBrandComponent.prototype, "onWindowScroll", null);
DevBrandComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'dev-brand',
        template: __webpack_require__(458),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__["a" /* DomInjectableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dom_injectables_service__["a" /* DomInjectableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__parse_api_parse_api_service__["a" /* ParseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__parse_api_parse_api_service__["a" /* ParseApiService */]) === "function" && _b || Object])
], DevBrandComponent);

var _a, _b;
//# sourceMappingURL=dev-brand.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_api_parse_api_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(parse) {
        this.parse = parse;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submitForm = function (n, e, i, m) {
        console.log("Submitting form", [arguments]);
        var Table = this.parse.Api.Object.extend('ContactForm');
        var table = new Table();
        var user = {
            name: n,
            email: e,
            inquiry: i,
            message: m
        };
        table.save(user, {
            success: function (res) {
                console.info(["Response", arguments]);
            },
            error: function (err) {
                console.info(["Error", arguments]);
            }
        });
    };
    return ContactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ContactComponent.prototype, "full_name", void 0);
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'wyf-contact',
        template: __webpack_require__(460),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__parse_api_parse_api_service__["a" /* ParseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__parse_api_parse_api_service__["a" /* ParseApiService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'wyf-slider',
        template: __webpack_require__(462),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_injectables_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default.a.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default()(this).removeClass('animated ' + animationName);
        });
    }
});
var NavigationComponent = (function () {
    function NavigationComponent(pageScrollService, dom, router) {
        this.pageScrollService = pageScrollService;
        this.dom = dom;
        this.router = router;
        this.enabled = false;
        this.dropped = false;
        // Page Scroll Configurations
        __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 50;
        __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 500;
        // Navigation Links
        this.navLinks = [{
                name: 'Home',
                href: 'home',
                hash: ''
            }, {
                name: 'About',
                href: 'home',
                hash: '#about-anchor'
            }, {
                name: 'Gallery',
                href: 'home',
                hash: '#gallery-anchor'
            }, {
                name: 'Services',
                href: 'home',
                hash: '#services-anchor'
            }, {
                name: 'Contact',
                href: 'home',
                hash: '#contact-anchor'
            }];
    }
    /**********************************************************************
     * Window Scroll Functions
     **********************************************************************/
    NavigationComponent.prototype.scrollTo = function (link) {
        var _this = this;
        var pageScrollInstance;
        if (link.href != '')
            new Promise(function (res, reject) {
                pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollInstance */].simpleInstance(_this.dom.document, link.hash);
                _this.router.navigate([link.href]);
            }).then(function () {
                _this.pageScrollService.start(pageScrollInstance);
            });
        else
            new Promise(function (res, reject) {
                _this.router.navigate([link.href], { fragment: link.hash });
            }).then(function () {
                pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollInstance */].simpleInstance(_this.dom.document, link.hash);
            }).then(function () {
                _this.pageScrollService.start(pageScrollInstance);
            });
    };
    ;
    NavigationComponent.prototype.onWindowScroll = function () {
        this.screenOffset = document.body.offsetHeight;
        this.yPos = window.scrollY;
        this.menu = __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default()('.navigation');
        // Begin Menu Toggler
        this.toggleMenu();
    };
    /**********************************************************************
     * Component Initialization Function
     **********************************************************************/
    NavigationComponent.prototype.ngOnInit = function () {
        this.screenOffset = document.body.offsetHeight;
        this.yPos = window.scrollY;
        this.menu = __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default()('.navigation');
        this.menuDefaults = {
            top: this.menu.css('top'),
            left: this.menu.css('left'),
            width: this.menu.css('width'),
            height: this.menu.css('height')
        };
        this.logoContainer = this.menu.find('.logo-container').eq(0);
        this.defaultLogo = this.logoContainer.html();
        this.enabled = false;
        this.dropped = this.menu.css('position') === 'fixed';
        this.toggleMenu();
        // if not homepage, make logo text readable
        var href = this.dom.window.location.href.split('/');
        var notHomePage = href[href.length - 1] != 'home';
        if (notHomePage)
            this.getLogo().setTextLogo();
    };
    // public scrollSomewhereHorizontally(): void {
    //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.dom.document, scrollTarget: '#targetToTheRight', verticalScrolling: false});
    //     this.pageScrollService.start(pageScrollInstance);
    // }; 
    // public goToHeadingInContainer(): void {
    //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.dom.document, scrollTarget: '#head3', scrollingViews: [this.container.nativeElement]});
    //     this.pageScrollService.start(pageScrollInstance);
    // };
    /**********************************************************************
     * Dom Functions
     **********************************************************************/
    NavigationComponent.prototype.toggleMenu = function () {
        var offset = parseInt(this.menu.css('height').replace('px', '')) - 20;
        if (this.yPos >= this.screenOffset + offset && !this.dropped)
            this.setNavState('on');
        else if (this.yPos < this.screenOffset + offset && this.dropped)
            this.setNavState('off');
        // else { this.setNavState('off') console.log(['condition:', this.screenOffset + offset && this.dropped, ['properties', [this.yPos, this.screenOffset, offset, this.dropped]]]) }
    };
    NavigationComponent.prototype.getLogo = function () {
        var _this = this;
        var newLogo = __WEBPACK_IMPORTED_MODULE_4_jquery_dist_jquery___default()('<span></span>').css({
            position: 'absolute',
            top: '10px',
            left: '40px',
            color: 'white'
        }).html('WaleYaFoto');
        newLogo.setTextLogo = function () { return _this.logoContainer.html(newLogo); };
        newLogo.setDefaultLogo = function () { return _this.logoContainer.html(_this.defaultLogo); };
        return newLogo;
    };
    NavigationComponent.prototype.setNavState = function (state) {
        var logo = this.getLogo();
        if (state === 'on' && !this.dropped) {
            // this.scaleNav( 'down' );
            this.menu.css('position', 'fixed')
                .css({
                top: -100,
                left: 0,
                width: '100%',
                height: this.menuDefaults.height
            })
                .animate({ top: 0 });
            this.dropped = true;
            logo.setTextLogo();
            // console.info("Turned on el", this.dropped);
        }
        else if (state === 'off' && this.dropped) {
            // this.scaleNav( 'up' );
            this.menu.css('position', 'relative')
                .css({
                top: this.menuDefaults.top,
                width: '100%',
                height: this.menuDefaults.height
            })
                .animate({ top: 0 });
            this.dropped = false;
            logo.setDefaultLogo();
            // console.info("Shut off el");
        }
        // console.log("Setting State to " + state, ['dropped?', this.dropped]);
    };
    return NavigationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], NavigationComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavigationComponent.prototype, "onWindowScroll", null);
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'wyf-navigation',
        template: __webpack_require__(463),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["d" /* PageScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["d" /* PageScrollService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dom_injectables_service__["a" /* DomInjectableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_injectables_service__["a" /* DomInjectableService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _d || Object])
], NavigationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "@media (min-width: 992px) { /* LARGER THAN PHONE */\n    .dev-link-page-wrapper:before {\n        height: 100%;\n    }\n\n    .dev-link-page-wrapper:after {\n    height: 100%;\n    }\n}\n\n@media (max-width: 992px) { /* SMALLER THAN DESKTOP */\n    .dev-link-page-wrapper:before {\n        height: 150%;\n    }\n\n    .dev-link-page-wrapper:after {\n    height: 150%;\n    }\t\n}\n\n/* --------------------------------------\n * DEV BRAND\n * -------------------------------------- */\n.dev-tag-wrapper {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 10000;\n  visibility: hidden;\n}\n\n.dev-tag {\n  position: relative;\n  background-color: #333131;\n  z-index: 0;\n  height: 24px;\n}\n\n.dev-tag p {\n  margin: 0 auto;\n  padding: 4px;\n  width: 300px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.dev-link {\n  position: relative;\n  bottom: 12px;\n  left: 48%\n}\n\n.dev-link:after {\n    content: \"\";\n    position: absolute;\n    background-color: #333131;\n    width: 50px;\n    height: 50px;\n    top: -28px;\n    border-radius: 50px;\n    z-index: -1;\n}\n\n.dev-chevron {\n    position: absolute;\n    margin: 0 auto;\n    top: -24px;\n    left: 17px;\n    z-index: 2;\n    color: #FBA83C;\n    text-align: center;\n}\n\nspan.dev-by {\n    color: #CDCDCD;\n}\n\nspan.dt-primary {\n    color: #3A89C3;\n}\n\nspan.dt-secondary {\n    color: #FBA83C;\n}\n\n.dev-link-page-wrapper {\n  display: block;\n  width: 100%;\n  height: 20px;\n  height: 100%;\n  position: absolute;\n  color: white;\n  top: 28px;\n  overflow: scroll;\n}\n\n.dev-link-page-wrapper:before {\n    content: \"\";\n    overflow: hidden;\n    background-color: black;\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 1000%;\n    opacity: 0.5;\n}\n\n.dev-link-page-wrapper:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  position: absolute;\n  color: white;\n  top: 0;\n  overflow: hidden;\n  background-image: url('/assets/images/dev_bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 0;\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n\n.dev-link-page-wrapper textarea,\n.dev-link-page-wrapper button {\n  width: 100%;\n}\n\n.dev-link-page-wrapper button {\n    width: 40%;\n}\n\n.dev-link-page-wrapper input,\n.dev-link-page-wrapper textarea {\n  margin-bottom: 10px;\n}\n\n.dev-content {\n    position: relative;\n    max-width: 960px;\n    margin: 0 auto;\n    margin-top: 40px;\n    z-index: 1;\n    font-family: 'Pt Sans';\n}\n\n.dev-content .brand-logo {\n  font-family: 'Rationale';\n  margin-bottom: 40px;\n}\n\n.dev-content .logo {\n  width: 200px;\n  font-size: 50px;\n}\n\n.dev-content .hr_divide {\n  /*width: 200px;\n  float: left;*/\n  margin-top: 5px;\n}\n\n.dev-slogan {\n  font-family: 'Open Sans Condensed';\n  font-size: 24px;\n  margin-top: 30px;\n}\n\n.dev-info {\n    font-family: 'PT Sans';\n    font-size: 16px;\n    margin-top: 30px;\n}\n\n.dev-contact-bar {\n    margin: 0 auto;\n    margin-top: 30px;\n}\n\n.dev-contact-bar li {\n    font-size: 25px;\n    margin-right: 25px;\n}\n\n.dev-contact-bar li:last-child {\n    margin-right: 0;\n}\n\n.dev-contact-bar a {\n  text-decoration: none;\n  color: white;\n}\n\n.dev-contact-bar a:hover {\n  cursor: pointer;\n  color: #ffcc43;\n}\n\n.dev-primary {\n    color: #3A89C3;\n}\n\n.dev-secondary {\n    color: #F8982F;\n}\n\n.dev-serv {\n    display: block;\n    margin-top: -10px;\n    font-size: 20px;\n    margin-left: 56%;\n}\n\n.dev-contact {\n    font-size: 26px;\n    margin-top: 0;\n    margin-bottom: 34px;\n}\n\n.dev-contact-info {\n  margin-bottom: 120px;\n}\n\n.dev-content .contact-form textarea,  {\n    border-radius: 4px;\n    color: white;\n    padding-left: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".gallery-content {\n    height: 80vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<section class=\"dev-tag-wrapper\" style=\"visibility: visible;\">\n    <div class=\"custom dev-tag\">\n        <p class=\"dev-tag-body\"><a href=\"http://tech-ninja.ca\" target=\"blank\" class=\"dev-link-site\"><span class=\"dev-by\">Developed By:</span> <span class=\"dt-primary\">Tech </span><span class=\"dt-secondary\">Ninja <span class=\"dev-by\">|</span> Web &amp; IT</span></a></p>\n    </div>\n    <a class=\"dev-link\">\n        <i class=\"dev-chevron fa fa-chevron-up rotate\"></i>\n    </a>\n    <div class=\"dev-link-page-wrapper\">\n        <div class=\"dev-content\">\n            <div class=\"col-md-6 brand-info\">\n                <div class=\"brand-logo\">\n                    <div class=\"logo\">\n                        <span class=\"dev-primary\">tech</span> <span class=\"dev-secondary\">ninja</span>\n                        <span class=\"dev-serv\">Web &amp; IT</span>\n                    </div>\n                    <hr class=\"hr_divide\">\n                    <h3 class=\"dev-slogan\">Leave The Web To Us!</h3>\n                    <p class=\"dev-info\">\n                        We Are A Modern Design &amp; Development Studio Serving Clients All Across Canada.\n                        <br><br>\n                        Contact us to get a quote. It's risk free!\n                    </p>\n                    <ul class=\"dev-contact-bar list-inline list-unstyled\">\n                        <li class=\"facebook\"><a target=\"_blank\" href=\"https://www.facebook.com/4umNinja/\" class=\"fb-link\"><i class=\"fa fa-lg fa-facebook\"></i></a></li>\n                        <li class=\"twitter\"><a target=\"_blank\" href=\"https://twitter.com/4umNinja/\" class=\"twitter-link\"><i class=\"fa fa-lg fa-twitter\"></i></a></li>\n                        <li class=\"google\"><a target=\"_blank\" href=\"https://plus.google.com/+Tech-NinjaCa\" class=\"google-link\"><i class=\"fa fa-lg fa-google-plus\"></i></a></li>\n                        <li class=\"youtube\"><a target=\"_blank\" href=\"https://www.youtube.com/user/phreelyfe\" class=\"youtube-link\"><i class=\"fa fa-lg fa-youtube\"></i></a></li>\n                        <li class=\"laptop\"><a target=\"_blank\" href=\"/4umninja@gmail.com\" class=\"laptop-link\"><i class=\"fa fa-lg fa-laptop\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6 contact-form\">\n                <h3 class=\"dev-contact dev-secondary form-group\">Contact Us Today!</h3>\n                <input #n type=\"text\" class=\"dev-name form-control\" placeholder=\"Enter Your Name\">\n                <input #e type=\"email\" class=\"dev-email form-control\" placeholder=\"Enter Your Email\">\n                <textarea #q name=\"dev-comments\" id=\"dev-comments\" class=\"dev-comments form-control\" rows=\"3\" placeholder=\"Got Questions?\"></textarea>\n                <button class=\"btn btn-primary dev-send\" (click)=\"submitForm(n.value, e.value, q.value)\">Send</button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<wyf-navigation></wyf-navigation>\n<section class=\"gallery-content container\">\n\t<ngx-gallery class=\"ngx-gallery-container\" [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n</section>\n<dev-brand></dev-brand>\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\">\n    <div class=\"container\">\n\t\t<h2 class=\"heading uppercase text-shadow-white\">Contact</h2>\n\t\t<div class=\"contact-info col-sm-4 col-sm-offset-1\">\n\t\t\t<p>Dami Sanusi</p>\n\t\t\t<p>Whitby, ON</p>\n\t\t\t<p>(647) 774-1174</p>\n\t\t\t<p>dami.sanusi@gmail.com</p>\n\t\t\t<div class=\"social-media-icons\">\n\t\t\t\t<a href=\"https://www.facebook.com/ItsMeDami\" class=\"social-link col-xs-4\" target=\"blank\"><i class=\"icon-facebook\"></i></a>\n\t\t\t\t<a href=\"https://www.instagram.com/waleyafoto/\" class=\"social-link col-xs-4\" target=\"blank\"><i class=\"icon-instagram\"></i></a>\n\t\t\t\t<a href=\"http://vsco.co/itsmedami/images/1\" class=\"social-link col-xs-4\" target=\"blank\"><i class=\"icon-vsco\"></i></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-container col-sm-4 col-sm-offset-1\">\n\t\t\t<form action=\"\" class=\"contact-form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input #name type=\"text\" class=\"form-control full-name\" placeholder=\"Full Name\">\n\t\t\t\t\t<input #email type=\"email\" class=\"form-control email\" placeholder=\"Email\">\n\t\t\t\t\t<input #inquiry type=\"text\" class=\"form-control inquiry\" placeholder=\"Inquiry\">\n\t\t\t\t\t<textarea #message name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control message\" placeholder=\"Write Your Message!\"></textarea>\n\t\t\t\t\t<button class=\"wyf-button full-width\" (click)=\"submitForm(\n\t\t\t\t\t\tname.value, email.value, inquiry.value, message.value\n\t\t\t\t\t)\">Send</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<wyf-slider></wyf-slider>\n<wyf-navigation></wyf-navigation>\n<a id=\"about-anchor\"></a>\n<section class=\"about container\">\n\t<div class=\"row\">\n\t\t<div class=\"about-paragraph col-md-5 col-md-offset-2\">\n\t\t\t<h3 class=\"title thick-font text-center\">hi, i'm dami</h3>\n\t\t\t<p class=\"description\">\n\t\t\t\tSuspendisse tincidunt vitae orci nec pharetra. <br />\n\t\t\t\tDonec nec varius tortor. Etiam bibendum, libero id. <br />\n\t\t\t\tMorbi tincidunt placerat metus, eget congue diam faucibus.\n\t\t\t</p>\n\t\t</div>\n\t\t<img src=\"assets/images/home-page/about/dami-sanusi.jpg\" alt=\"\" class=\"about-image col-md-3 img-responsive\">\n\t</div>\n</section>\n<a id=\"gallery-anchor\"></a>\n<section class=\"gallery d-flex justify-content-center align-items-center\">\n\t<div class=\"d-md-flex flex-row-reverse flex-wrap\">\n\t\t<div class=\"flex-row\">\n\t\t\t<h2 class=\"heading uppercase vertical-text\">Gallery</h2>\n\t\t</div>\n\t\t<a href [routerLink]=\"['/gallery']\" class=\"gallery-link\"><div class=\"d-sm-flex flex-row\">\n\t\t\t<div class=\"gallery-container flex-column\">\n\t\t\t\t<div class=\"gallery-feature\">\n\t\t\t\t\t<img src=\"assets/images/home-page/gallery/weddings.jpg\" alt=\"\" class=\"gallery-feature-image\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"gallery-feature\">\n\t\t\t\t\t<img src=\"assets/images/home-page/gallery/events.jpg\" alt=\"\" class=\"gallery-feature-image\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"gallery-container flex-column\">\n\t\t\t\t<div class=\"gallery-feature\">\n\t\t\t\t\t<img src=\"assets/images/home-page/gallery/portraits.jpg\" alt=\"\" class=\"gallery-feature-image\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"gallery-feature\">\n\t\t\t\t\t<img src=\"assets/images/home-page/gallery/landscapes.jpg\" alt=\"\" class=\"gallery-feature-image\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div></a>\n\t</div>\n</section>\n<section class=\"thoughts d-flex justify-content-center align-items-center flex-wrap flex-column box-shadow-black\">\n    <div class=\"thoughts-container container\">\n\t\t<p class=\"feature-text text-center text-shadow-white uppercase\">\n\t\t\t\"Photography is an immediate reaction\n\t\t\t<br />drawing is a meditation.\"\n\t\t</p>\n\t\t<p class=\"feature-text-caption text-center\">- henri cartier-bresson -</p>\n\t</div>\n</section>\n<a id=\"services-anchor\"></a>\n<section class=\"services text-center text-shadow-white box-shadow-black\">\n    <h2 class=\"heading uppercase\">Services</h2>\n    <div class=\"services-container d-md-flex justify-content-center flex-wrap\">\n        <div class=\"weddings flex-column\">\n            <i class=\"icon-weddings\"></i>\n            <h4 class=\"title\">Weddings</h4>\n            <p class=\"service-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum nunc. Nam quis tortor eu eros dapibus mattis at.</p>\n        </div>\n        <div class=\"events flex-column\">\n            <i class=\"icon-events\"></i>\n            <h4 class=\"title\">Events</h4>\n\t\t\t<p class=\"service-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum nunc. Nam quis tortor eu eros dapibus mattis at.</p>\n        </div>\n\t\t<div class=\"portraits flex-column\">\n\t\t\t<i class=\"icon-portrait\"></i>\n\t\t\t<h4 class=\"title\">Portraits</h4>\n\t\t\t<p class=\"service-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum nunc. Nam quis tortor eu eros dapibus mattis at.</p>\n\t\t</div>\n\t\t<div class=\"landscapes flex-column\">\n\t\t\t<i class=\"icon-landscape\"></i>\n\t\t\t<h4 class=\"title\">Landscapes</h4>\n\t\t\t<p class=\"service-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum nunc. Nam quis tortor eu eros dapibus mattis at.</p>\n\t\t</div>\n\t</div>\n</section>\n<a id=\"contact-anchor\"></a>\n<wyf-contact></wyf-contact>\n<dev-brand></dev-brand>\n"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<section class=\"slider\">\n    <img src=\"assets/images/home-page/slideshow/bg-1.jpg\" alt=\"\" class=\"slider-image\">\n</section>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<section class=\"navigation box-shadow-black\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"logo-container\"><i class=\"icon-wyf-logo\"></i></div>\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#wyf-nav\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n            </div>\n        </div><!--Fluid Container End-->\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"wyf-nav\">\n            <ul class=\"nav navbar-nav uppercase\">\n                <!--<li class=\"nav-link active\"><a [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a></li>-->\n                <li *ngFor=\"let link of navLinks\" class=\"nav-link\">\n                    <a pageScroll [href]=\"link.hash\" (click)=\"scrollTo(link)\">\n                        {{ link.name }} <span class=\"sr-only\">(current)</span></a>\n                    </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </nav>\n</section>"

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomInjectableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


function _window() {
    // return the global native browser window object
    return window;
}
var DomInjectableService = (function () {
    function DomInjectableService(doc) {
        this.doc = doc;
    }
    Object.defineProperty(DomInjectableService.prototype, "window", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomInjectableService.prototype, "document", {
        get: function () {
            return this.doc;
        },
        enumerable: true,
        configurable: true
    });
    return DomInjectableService;
}());
DomInjectableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], DomInjectableService);

//# sourceMappingURL=dom-injectables.service.js.map

/***/ })

},[506]);
//# sourceMappingURL=main.bundle.js.map