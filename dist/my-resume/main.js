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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\r\n  <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\r\n    <span class=\"d-block d-lg-none\">{{firstname}}&nbsp;{{lastname}}</span>\r\n    <span class=\"d-none d-lg-block\">\r\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"assets/images/cv_photo.jpeg\" alt=\"\">\r\n    </span>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"experience\">Experience</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"education\">Education</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"skills\">Skills</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"interests\">Interests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/curriculum\" routerLinkActive=\"active\" class=\"nav-link js-scroll-trigger\" fragment=\"awards\">Awards</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/project\" routerLinkActive=\"active\"  class=\"nav-link js-scroll-trigger\" fragment=\"projects\">Projects</a>\r\n      </li>\r\n      <!--li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" href=\"#services\">Services</a>\r\n      </li-->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Nephthali-Resume';
        this.firstname = 'Nephthali';
        this.lastname = 'Djabon';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./curriculum/curriculum.component */ "./src/app/curriculum/curriculum.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");









var appRoutes = [
    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"] },
    { path: 'curriculum', component: _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumComponent"] },
    { path: '', redirectTo: '/curriculum', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var routerOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    enableTracing: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
                _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, routerOptions)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/curriculum.service.ts":
/*!***************************************!*\
  !*** ./src/app/curriculum.service.ts ***!
  \***************************************/
/*! exports provided: CurriculumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumService", function() { return CurriculumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_mockup_data_mock_curriculum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mockup-data/mock-curriculum */ "./src/mockup-data/mock-curriculum.ts");



var CurriculumService = /** @class */ (function () {
    function CurriculumService() {
    }
    CurriculumService.prototype.getResume = function () {
        return src_mockup_data_mock_curriculum__WEBPACK_IMPORTED_MODULE_2__["resume"];
    };
    CurriculumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurriculumService);
    return CurriculumService;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum.component.css":
/*!*****************************************************!*\
  !*** ./src/app/curriculum/curriculum.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJpY3VsdW0vY3VycmljdWx1bS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/curriculum/curriculum.component.html":
/*!******************************************************!*\
  !*** ./src/app/curriculum/curriculum.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\r\n\r\n  <!--pre>{{ resume | json }}</pre-->\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"about\">\r\n    <div class=\"w-100\">\r\n      <h1 class=\"mb-0\">{{resume.about.firstname}}\r\n        <span class=\"text-primary\">{{resume.about.lastname}}</span>\r\n      </h1>\r\n      <div class=\"subheading mb-5\">{{resume.about.address.street}} {{resume.about.address.city}}\r\n        {{resume.about.address.postalcode}}  {{resume.about.address.phonenumber}} ·\r\n        <a href=\"mailto:{{email}}\">{{resume.about.email}}</a>\r\n      </div>\r\n      <p class=\"lead mb-5\">{{resume.about.description}}.</p>\r\n      <div class=\"social-icons\">\r\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/nephthali-djabon-6aa24a25/\">\r\n          <i class=\"fab fa-linkedin-in\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/ennva/developer-roadmap\">\r\n          <i class=\"fab fa-github\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://twitter.com/ennvaweb\">\r\n          <i class=\"fab fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/ennva.digit.5\">\r\n          <i class=\"fab fa-facebook-f\"></i>\r\n        </a>\r\n        <!--a (click)=\"downloadFile('cv.pdf')\" class=\"\"><i class=\"far fa-file-pdf\"></i></a-->\r\n        <a (click)=\"sendEmail('assets/doc/cv.pdf')\" href=\"assets/doc/cv.pdf\" target=\"_self\">\r\n          <i class=\"far fa-file-pdf\"></i>\r\n        </a>\r\n        <a (click)=\"downloadFile('cv.docx')\" class=\"\"><i class=\"far fa-file-word\"></i></a>\r\n        <!--a (click)=\"sendEmail()\" href=\"assets/doc/cv.docx\">\r\n            <i class=\"far fa-file-word\"></i>\r\n          </a-->\r\n      </div>\r\n      <div class=\"\">\r\n          \r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <hr class=\"m-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex justify-content-center\" id=\"experience\">\r\n    <div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Experience</h2>\r\n\r\n      <div *ngFor=\"let experience of resume.experiences; let i=index\"\r\n        class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n        <div class=\"resume-content\">\r\n          <h3 class=\"mb-0\">{{experience.role}}</h3>\r\n          <div class=\"subheading mb-3\">{{experience.company}}</div>\r\n          <p>{{experience.description}}</p>\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\">{{experience.date}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!--div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">Senior Web Developer</h3>\r\n            <div class=\"subheading mb-3\">Intelitec Solutions</div>\r\n            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">March 2013 - Present</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">Web Developer</h3>\r\n            <div class=\"subheading mb-3\">Intelitec Solutions</div>\r\n            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">December 2011 - March 2013</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">Junior Web Designer</h3>\r\n            <div class=\"subheading mb-3\">Shout! Media Productions</div>\r\n            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">July 2010 - December 2011</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">Web Design Intern</h3>\r\n            <div class=\"subheading mb-3\">Shout! Media Productions</div>\r\n            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">September 2008 - June 2010</span>\r\n          </div>\r\n        </div-->\r\n\r\n    </div>\r\n\r\n  </section>\r\n\r\n  <hr class=\"m-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"education\">\r\n    <div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Education</h2>\r\n\r\n      <div *ngFor=\"let education of resume.educations\"\r\n        class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n        <div class=\"resume-content\">\r\n          <h3 class=\"mb-0\">{{education.institution}}</h3>\r\n          <div class=\"subheading mb-3\">{{education.diploma}}</div>\r\n          <div>{{education.description}}</div>\r\n          <p>{{education.grade}}</p>\r\n        </div>\r\n        <div class=\"resume-date text-md-right\">\r\n          <span class=\"text-primary\">{{education.date}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!--div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">University of Colorado Boulder</h3>\r\n            <div class=\"subheading mb-3\">Bachelor of Science</div>\r\n            <div>Computer Science - Web Development Track</div>\r\n            <p>GPA: 3.23</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">August 2006 - May 2010</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\r\n          <div class=\"resume-content\">\r\n            <h3 class=\"mb-0\">James Buchanan High School</h3>\r\n            <div class=\"subheading mb-3\">Technology Magnet Program</div>\r\n            <p>GPA: 3.56</p>\r\n          </div>\r\n          <div class=\"resume-date text-md-right\">\r\n            <span class=\"text-primary\">August 2002 - May 2006</span>\r\n          </div>\r\n        </div-->\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <hr class=\"m-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"skills\">\r\n    <div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Skills</h2>\r\n\r\n      <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\r\n      <ul class=\"list-inline dev-icons\">\r\n        <li *ngFor=\"let skill of resume.skills\" class=\"list-inline-item\">\r\n          <ng-container *ngIf=\"skill.type == 'programming-languages'\">\r\n            <i class=\"fab fa-{{skill.description}}\"></i>\r\n          </ng-container>\r\n        </li>\r\n      </ul>\r\n\r\n      <br />\r\n      <div class=\"subheading mb-3\">Workflow</div>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li *ngFor=\"let skill of resume.skills\">\r\n          <ng-container *ngIf=\"skill.type == 'workflow'\">\r\n            <i class=\"fa-li fa fa-check\"></i>\r\n            {{skill.description}}\r\n          </ng-container>\r\n        </li>\r\n      </ul>\r\n\r\n      <br />\r\n      <div class=\"subheading mb-3\">Develpment tools</div>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li *ngFor=\"let skill of resume.skills\">\r\n          <ng-container *ngIf=\"skill.type == 'develpment-tools'\">\r\n            <i class=\"fa-li fa fa-check\"></i>\r\n            {{skill.description}}\r\n          </ng-container>\r\n        </li>\r\n      </ul>\r\n\r\n      <br />\r\n      <div class=\"subheading mb-3\">database</div>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li *ngFor=\"let skill of resume.skills\">\r\n          <ng-container *ngIf=\"skill.type == 'database'\">\r\n            <i class=\"fa-li fa fa-check\"></i>\r\n            {{skill.description}}\r\n          </ng-container>\r\n        </li>\r\n      </ul>\r\n\r\n      <br />\r\n      <div class=\"subheading mb-3\">virtualization</div>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li *ngFor=\"let skill of resume.skills\">\r\n          <ng-container *ngIf=\"skill.type == 'virtualization'\">\r\n            <i class=\"fa-li fa fa-check\"></i>\r\n            {{skill.description}}\r\n          </ng-container>\r\n        </li>\r\n      </ul>\r\n\r\n      <!--\r\n      <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\r\n      <ul class=\"list-inline dev-icons\">\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-html5\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-css3-alt\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-js-square\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-angular\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-react\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-node-js\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-sass\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-less\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-wordpress\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-gulp\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-grunt\"></i>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <i class=\"fab fa-npm\"></i>\r\n        </li>\r\n      </ul>\r\n      -->\r\n\r\n      <!--div class=\"subheading mb-3\">Workflow</div>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Mobile-First, Responsive Design</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Cross Browser Testing &amp; Debugging</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Cross Functional Teams</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-check\"></i>\r\n          Agile Development &amp; Scrum</li>\r\n      </ul-->\r\n    </div>\r\n  </section>\r\n\r\n  <hr class=\"m-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"interests\">\r\n    <div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Interests</h2>\r\n      <p *ngFor=\"let interest of resume.interests\">{{interest.description}}</p>\r\n      <p class=\"mb-0\"></p>\r\n    </div>\r\n    <!--div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Interests</h2>\r\n      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and\r\n        novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and\r\n        kayaking.</p>\r\n      <p class=\"mb-0\">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I\r\n        am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in\r\n        the front-end web development world.</p>\r\n    </div-->\r\n  </section>\r\n\r\n  <hr class=\"m-0\">\r\n\r\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"awards\">\r\n    <div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li *ngFor=\"let certification of resume.certifications\">\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          {{certification.description}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!--div class=\"w-100\">\r\n      <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\r\n      <ul class=\"fa-ul mb-0\">\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          Google Analytics Certified Developer</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          Mobile Web Specialist - Google Certification</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          1<sup>st</sup>\r\n          Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          1<sup>st</sup>\r\n          Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          2<sup>nd</sup>\r\n          Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          1<sup>st</sup>\r\n          Place - James Buchanan High School - Hackathon 2006</li>\r\n        <li>\r\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n          3<sup>rd</sup>\r\n          Place - James Buchanan High School - Hackathon 2005</li>\r\n      </ul>\r\n    </div-->\r\n  </section>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/curriculum/curriculum.component.ts":
/*!****************************************************!*\
  !*** ./src/app/curriculum/curriculum.component.ts ***!
  \****************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../curriculum.service */ "./src/app/curriculum.service.ts");
/* harmony import */ var _send_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../send-mail.service */ "./src/app/send-mail.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_6__);







var CurriculumComponent = /** @class */ (function () {
    function CurriculumComponent(curriculumService, mailService, http, platformLocation) {
        var _this = this;
        this.curriculumService = curriculumService;
        this.mailService = mailService;
        this.http = http;
        this.firstname = 'Nephthali';
        this.lastname = 'Djabon';
        this.address = {
            street: 'via Magnanelli 6/3',
            postalcode: '40033',
            city: 'Casalecchio di Reno, Bologna',
            country: 'Italy',
            phone: '(+39)051/6171646'
        };
        this.email = 'nephthali2017@gmail.com';
        this.about = 'IT Consultant with an outstanding quality record of engineering products from design to fabrication.' +
            'Team-oriented and self-directed Engineer with personal integrity and professional ethics.' +
            'Experienced in software engineering specially on software design, development and lifecycle management.' +
            'CompTia Cloud+ certified leveraging cloud business and technical solutions.' +
            'Good understanding of Database Management and many programming languages';
        this.resume = null;
        this.message = "";
        this.url_doc = '../assets/doc/';
        this.url_doc_pdf = '../assets/doc/cv.pdf';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        this.resume = curriculumService.getResume();
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            //console.log('th data:', data.ip);
            _this.ipAddress = data.ip;
            _this.getInfoIpAddress(_this.ipAddress);
        });
        this.mailService.getIpAddress().subscribe(function (data) {
            //console.log('ipInfo: ' + data);
            _this.ipInfo = data;
        });
        this.location = platformLocation;
        //console.log('location:' + (platformLocation as any).location);
        //console.log('href:' + (platformLocation as any).location.href);
        //console.log('origin:' +(platformLocation as any).location.origin);
    }
    CurriculumComponent.prototype.ngOnInit = function () {
    };
    CurriculumComponent.prototype.sendMessage = function (doc) {
        //console.log('visitor\'s ip adress is: ' + this.ipAddress);
        /*
        var templateParams = {
          name: 'Neph',
          notes: 'Someone has download your curriculum!',
          user_ip: 'visitor\'s ip adress is: ' + this.ipAddress,
          user_name: 'nephthali',
          user_email: 'nephthali2017@gmail.com',
          doc: 'Document download: ' + doc,
          website: (this.location).location.origin
    
        };
        */
        this.templateParams[doc] = doc;
        emailjs_com__WEBPACK_IMPORTED_MODULE_6___default.a.send('nephthali2017_gmail_com', 'alert_template', this.templateParams, 'user_O0EDRectaunaQj1pG7XKZ')
            .then(function (response) {
            //console.log('SUCCESS!', response.status, response.text);
        }, function (err) {
            //console.log('FAILED...', err);
        });
    };
    CurriculumComponent.prototype.getInfoIpAddress = function (ipAddress) {
        var _this = this;
        return this.http.get('http://ip-api.com/json/' + ipAddress)
            .subscribe(function (data) {
            _this.templateParams = {
                name: 'Neph',
                notes: 'Someone has download your curriculum!',
                user_ip: 'visitor\'s ip adress is: ' + _this.ipAddress,
                user_name: 'nephthali',
                user_email: 'nephthali2017@gmail.com',
                website: (_this.location).location.origin
            };
            //console.log('IP: ', this.ipAddress);
            //console.log('IP Geo data: ', data);
            _this.ipAdressInfo = data;
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                //console.log('Key: ' + key + ', Value: ' + data[key]);
                _this.templateParams[key] = data[key];
            }
            //console.log('TEMPLATE: ', this.templateParams);
        });
    };
    CurriculumComponent.prototype.downloadFile = function (fileName) {
        this.sendMessage(fileName);
        //console.log('iP: ' + this.ipInfo);
        var url = this.url_doc + fileName;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/pdf',
            'Accept': 'application/pdf',
        });
        return this.http.get(this.url_doc_pdf, {
            headers: headers,
            responseType: 'blob'
        }).subscribe(function (res) {
            var pdfUrl = (window.URL || window['webkitURL']).createObjectURL(new Blob([res], { type: 'application/pdf' }));
            //console.log("pdfUrl: " + pdfUrl);
            var anchor = document.createElement('a');
            anchor.href = pdfUrl;
            anchor.setAttribute("download", fileName);
            anchor.click();
        });
    };
    CurriculumComponent.prototype.sendEmail = function (doc) {
        var _this = this;
        this.mailService.getDocPath(doc).subscribe((function (v) {
            //console.log('value: ', v);
            _this.url_doc = v;
        }), (function (e) { return console.log('error: ', e); }), (function () { return console.log('the sequence completed!'); }));
        //alert('value: ' + this.url_doc);
        this.mailService.performGetEx().subscribe((function (v) { return console.log('value: ', v); }), (function (e) { return console.log('error: ', e); }), (function () { return console.log('the sequence completed!'); }));
        ;
    };
    CurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curriculum',
            template: __webpack_require__(/*! ./curriculum.component.html */ "./src/app/curriculum/curriculum.component.html"),
            styles: [__webpack_require__(/*! ./curriculum.component.css */ "./src/app/curriculum/curriculum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _send_mail_service__WEBPACK_IMPORTED_MODULE_3__["SendMailService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]])
    ], CurriculumComponent);
    return CurriculumComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\r\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"about\">\r\n        <div class=\"w-100\">\r\n          <h1 class=\"mb-0\">Page Not Found\r\n            <span class=\"text-primary\"></span>\r\n          </h1>\r\n          <p class=\"lead mb-5\">\r\n              <a href=\"\">\r\n                  <i class=\"fa fa-home\"></i>Homepage\r\n                </a>\r\n          </p>\r\n        </div>\r\n      </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"assets/images/symfony_black_logo_v.png\" class=\"card-img-top\" alt=\"symfony-project\">\r\n        <hr>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Custum Symfony Bundle</h5>\r\n          <p class=\"card-text\">Translation Bundle from Database is a symfony bundle library to integrate with every\r\n            symfony project. It's allow to manage your translations from database.</p>\r\n          <a target=\"_blank\" href=\"https://github.com/ennva/TranslationBundle\" class=\"btn btn-primary\">Githup\r\n            Project</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--div class=\"col-sm-3\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\r\n            content.</p>\r\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\r\n            content.</p>\r\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </div>\r\n      </div>\r\n    </div-->\r\n  </div>\r\n\r\n\r\n  <!--section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"about\">\r\n        <div class=\"w-100\">\r\n          <h1 class=\"mb-0\">Comming Soon!\r\n            <span class=\"text-primary\"></span>\r\n          </h1>\r\n          <p class=\"lead mb-5\">\r\n              <a href=\"\">\r\n                  <i class=\"fa fa-home\"></i>Homepage\r\n                </a>\r\n          </p>\r\n        </div>\r\n      </section-->\r\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/send-mail.service.ts":
/*!**************************************!*\
  !*** ./src/app/send-mail.service.ts ***!
  \**************************************/
/*! exports provided: SendMailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailService", function() { return SendMailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SendMailService = /** @class */ (function () {
    function SendMailService(http) {
        this.http = http;
        this.url = '../assets/send-mail.php';
        this.url_doc = '../assets/doc/';
        this.url_doc_pdf = '../assets/doc/cv.pdf';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
    }
    SendMailService.prototype.performGetEx = function () {
        return this.http.get(this.url);
    };
    SendMailService.prototype.getDocPath = function (doc) {
        if (doc === void 0) { doc = ''; }
        return this.http.get(this.url_doc + doc);
    };
    SendMailService.prototype.getPdfPathWithHeaders = function () {
        return this.http.get(this.url_doc_pdf, { responseType: 'json', headers: this.headers });
    };
    SendMailService.prototype.getIpAddress = function () {
        return this.http
            .get('http://api.ipstack.com/check?access_key=28be7cccfcea83eb3274534367d002b4&output=json')
            .map(function (response) { return response || {}; })
            .catch(this.handleError);
    };
    SendMailService.prototype.handleError = function (error) {
        //Log error in the browser console
        console.error('observable error: ', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    SendMailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendMailService);
    return SendMailService;
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/mockup-data/mock-about.ts":
/*!***************************************!*\
  !*** ./src/mockup-data/mock-about.ts ***!
  \***************************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony import */ var _mock_addresses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-addresses */ "./src/mockup-data/mock-addresses.ts");

var about = {
    firstname: "Nephthali",
    lastname: "Djabon",
    address: _mock_addresses__WEBPACK_IMPORTED_MODULE_0__["address"],
    email: "nephthali2017@gmail.com",
    description: "IT Consultant with an outstanding quality record of engineering products from design to fabrication.Team-oriented and self-directed Engineer with personal integrity and professional ethics.Experienced in software engineering specially on software design, development and lifecycle management.CompTia Cloud+ certified leveraging cloud business and technical solutions.Good understanding of Database Management and many programming languages"
};


/***/ }),

/***/ "./src/mockup-data/mock-addresses.ts":
/*!*******************************************!*\
  !*** ./src/mockup-data/mock-addresses.ts ***!
  \*******************************************/
/*! exports provided: address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
var address = {
    street: "",
    city: "",
    postalcode: "",
    phonenumber: "(+33)354307074"
};


/***/ }),

/***/ "./src/mockup-data/mock-certifications.ts":
/*!************************************************!*\
  !*** ./src/mockup-data/mock-certifications.ts ***!
  \************************************************/
/*! exports provided: certifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certifications", function() { return certifications; });
var certifications = [
    { logo: "", description: "CompTIA CLOUD+ Certified : Virtualisation server and Desktop, private and public Cloud ( Certification CompTIA)" },
    { logo: "", description: "SAP Modules PP ,MM, MRP course attendance ( Software University, Italy)" },
    { logo: "", description: "Diploma of analyst web programmer ( Training center ENAIP – Italy)" }
];


/***/ }),

/***/ "./src/mockup-data/mock-curriculum.ts":
/*!********************************************!*\
  !*** ./src/mockup-data/mock-curriculum.ts ***!
  \********************************************/
/*! exports provided: resume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resume", function() { return resume; });
/* harmony import */ var _mock_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-about */ "./src/mockup-data/mock-about.ts");
/* harmony import */ var _mock_experiences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-experiences */ "./src/mockup-data/mock-experiences.ts");
/* harmony import */ var _mock_educations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-educations */ "./src/mockup-data/mock-educations.ts");
/* harmony import */ var _mock_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-skills */ "./src/mockup-data/mock-skills.ts");
/* harmony import */ var _mock_interests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-interests */ "./src/mockup-data/mock-interests.ts");
/* harmony import */ var _mock_certifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock-certifications */ "./src/mockup-data/mock-certifications.ts");






var resume = {
    about: _mock_about__WEBPACK_IMPORTED_MODULE_0__["about"],
    experiences: _mock_experiences__WEBPACK_IMPORTED_MODULE_1__["esperiences"],
    educations: _mock_educations__WEBPACK_IMPORTED_MODULE_2__["educations"],
    skills: _mock_skills__WEBPACK_IMPORTED_MODULE_3__["skills"],
    interests: _mock_interests__WEBPACK_IMPORTED_MODULE_4__["interests"],
    certifications: _mock_certifications__WEBPACK_IMPORTED_MODULE_5__["certifications"]
};


/***/ }),

/***/ "./src/mockup-data/mock-educations.ts":
/*!********************************************!*\
  !*** ./src/mockup-data/mock-educations.ts ***!
  \********************************************/
/*! exports provided: educations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "educations", function() { return educations; });
var educations = [
    { institution: "Udemy Platform", diploma: "Software Developer", description: "Android Development with Android Studio", grade: "", date: "05/2018 - 07/2018" },
    { institution: "Udemy Platform", diploma: "Software Developer", description: "Build An Online Bank With java, Angular 2, Spring and More", grade: "", date: "03/2018 - 04/2018" },
    { institution: "University of Ferrara , Italy", diploma: "Computer and Automation Engineer", description: "Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. May analyze and design databases within an application area, working individually or coordinating database development as part of a team. Design, program, simulate and test automated machinery and processes in order to complete exact tasks", grade: "", date: "09/2004 – 10/2010" },
    { institution: "Lycée technique de Douala Koumassi, Cameroon", diploma: "Electrotechnical Engineer", description: "Design, develop, and test electrical devices and equipment, including communications systems, power generators, motors and navigation systems, and electrical systems for automobiles and aircraft. Oversee the manufacture of these devices, systems, and equipment.", grade: "", date: "09/1998 – 09/2002" }
];


/***/ }),

/***/ "./src/mockup-data/mock-experiences.ts":
/*!*********************************************!*\
  !*** ./src/mockup-data/mock-experiences.ts ***!
  \*********************************************/
/*! exports provided: esperiences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esperiences", function() { return esperiences; });
var esperiences = [
    { role: "IT CONSULTANT", company: "C-DEV SA - Luxembourg", description: "Design, develop and execute software solutions to address business issues • Provide architectural blueprints and technical leadership to our IT team • Evaluate and recommend tools, technologies and processes to ensure the highest quality product platform • Collaborate with peer organizations, quality assurance and end users to produce cutting-edge software solutions • Interpret business requirements to articulate the business needs to be addressed Troubleshoot code level problems quickly and efficiently", date: "02/2020 - present" },
    { role: "Software Developer", company: "Cineca Consortium - Italy", description: "Traduct functional and non functional requirements into technical requirements of software product that meet the customer needs. Design and realize Website, API REST and SOAP. Organize functional and unit tests. Design and optimize Database. Write technical documentation", date: "06/2014 - 15/01/2020" },
    { role: "Software Developer", company: "Freelancer", description: "Design, realize, adapt and optimize Web application. Organize functional and unit tests. Design and optimize Database. Write technical documentation", date: "04/2013 – 06/2014" },
    { role: "Project Engineer", company: "Bisol S.r.l - Italy", description: "Develop projects: evalution of costs and deadlines, technical support to customers and sales manager. Monitore process and requests changes. Set priorities", date: "04/2012 – 04/2013" },
    { role: "Trainee", company: "IMPAR S.r.l - Italy", description: "Design electrical and refrigeration systems", date: "03/2012 – 04/2012" },
    { role: "Photovoltaic systems designer", company: "GP Service s.r.l - Italy", description: "Design and configure photovoltaic installation systems", date: "06/2011 – 09/2011" },
    { role: "Computer assistance technician", company: "TECNOFORM System s.r.l - Italy", description: "Install and troubleshoot workstation and hardware peripherals. Install and Update Applications", date: "10/2010 – 01/2011" },
    { role: "Computer Numerical Control (CNC) Programmer", company: "TRW Motor - Italy", description: "Ensure accuracy of instructions set.Monitor all CNC program", date: "05/2008 – 08/2008" },
    { role: "Systems and Network Technician", company: "University of Ferrara", description: "Install and oversee computer equipment and software on the university laboratory. Manage network, domain, group, account and security. Support of desktop users.", date: "09/2005 – 05/2006" }
];


/***/ }),

/***/ "./src/mockup-data/mock-interests.ts":
/*!*******************************************!*\
  !*** ./src/mockup-data/mock-interests.ts ***!
  \*******************************************/
/*! exports provided: interests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interests", function() { return interests; });
var interests = [
    { topic: "extra activities", description: "I am volunteer most of time, doing the best making people happy. I am passionate of technologies and so I am like experienced new things. I am adept of the DIY" },
    { topic: "sport", description: "Gym is part of mine. Since young I use to practise soccer. Running is one of my best sport activities" },
    { topic: "music", description: "I like listen a good music and also play Guitar." }
];


/***/ }),

/***/ "./src/mockup-data/mock-skills.ts":
/*!****************************************!*\
  !*** ./src/mockup-data/mock-skills.ts ***!
  \****************************************/
/*! exports provided: skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
var skills = [
    { type: "programming-languages", description: "html5\"></i>" },
    { type: "programming-languages", description: "css3-alt" },
    { type: "programming-languages", description: "js-square" },
    { type: "programming-languages", description: "angular" },
    { type: "programming-languages", description: "react" },
    { type: "programming-languages", description: "node-js" },
    { type: "programming-languages", description: "sass" },
    { type: "programming-languages", description: "less" },
    { type: "programming-languages", description: "wordpress" },
    { type: "programming-languages", description: "npm" },
    { type: "programming-languages", description: "java" },
    { type: "programming-languages", description: "php" },
    { type: "programming-languages", description: "symfony" },
    { type: "workflow", description: "Mobile-First, Responsive Design" },
    { type: "workflow", description: "Cross Functional Teams" },
    { type: "workflow", description: "Agile Development & Scrum" },
    { type: "workflow", description: "Countinuous Delivery, Countinuous Integration" },
    { type: "database", description: "Oracle" },
    { type: "database", description: "Mysql" },
    { type: "database", description: "MongoDb" },
    { type: "database", description: "postgreSql" },
    { type: "develpment-tools", description: "Git" },
    { type: "develpment-tools", description: "Jenkins" },
    { type: "develpment-tools", description: "PhpStorm" },
    { type: "develpment-tools", description: "Eclipse" },
    { type: "develpment-tools", description: "Netbeans" },
    { type: "develpment-tools", description: "Sublime-text" },
    { type: "virtualization", description: "Hyper-V" },
    { type: "virtualization", description: "Vmware" },
    { type: "virtualization", description: "Docker" },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nephthali Djabon\Desktop\PROJECTS\my-resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map