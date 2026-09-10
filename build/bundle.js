/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) { n[e] = r[e]; } return n; }
var navbar = document.querySelector('.navbar');
var navLinks = document.querySelectorAll('.nav-link');
var sections = _toConsumableArray(document.querySelectorAll('main section[id]'));
function updateNavbarState() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  var activeId = sections[0] ? sections[0].id : 'home';
  var offset = navbar.offsetHeight + 24;
  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom > offset) {
      activeId = section.id;
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    activeId = sections[sections.length - 1] ? sections[sections.length - 1].id : 'home';
  }
  navLinks.forEach(function (link) {
    var isActive = link.getAttribute('href') === '#' + activeId;
    link.classList.toggle('active', isActive);
  });
}
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
window.addEventListener('scroll', updateNavbarState);
window.addEventListener('load', updateNavbarState);
var track = document.querySelector('.carousel-track');
var slides = _toConsumableArray(document.querySelectorAll('.slide'));
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var currentIndex = 0;
function updateCarousel() {
  if (!track || slides.length === 0) return;
  var slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
}
if (prevButton && nextButton) {
  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
}
window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
var modal = document.querySelector('.modal');
var modalTriggers = document.querySelectorAll('.modal-trigger');
var closeButton = document.querySelector('.close-button');
var modalBackdrop = document.querySelector('.modal-backdrop');
function openModal() {
  if (!modal) return;
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  if (!modal) return;
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
}
modalTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', openModal);
});
if (closeButton) {
  closeButton.addEventListener('click', closeModal);
}
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modal && modal.classList.contains('visible')) {
    closeModal();
  }
});

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Georgia", serif;
  background: #efe8df;
  color: #1d1d1d;
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
}

.navbar {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  min-height: 70px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #b67f4a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  transition: all 0.3s ease;
}

.brand-name {
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 1.3rem;
  align-items: center;
}

.nav-link {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1d1d1d;
  transition: all 0.3s ease;
}

.nav-link.active {
  color: #b67f4a;
}

.navbar.scrolled .brand-name {
  font-size: 0.75rem;
}

.navbar.scrolled .brand-mark {
  width: 32px;
  height: 32px;
  font-size: 0.62rem;
}

.navbar.scrolled .nav-link {
  font-size: 0.65rem;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1d1d1d;
}

.hero-fixed-bg {
  position: absolute;
  inset: 0;
  background-image: url("https://api.nga.gov/iiif/e6eb5003-aa1d-4425-b604-aef1c71d0346__900/full/!800,800/0/default.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.hero-video,
.hero-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-video {
  -o-object-fit: cover;
     object-fit: cover;
  filter: brightness(0.6);
}

.hero-overlay {
  background: rgba(15, 15, 15, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: 3rem 2rem;
  color: #ffffff;
}

.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}

.hero h1,
.section-heading h2,
.slide-copy h3,
.journal-card h3 {
  font-family: "Georgia", serif;
}

.hero h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.95;
  max-width: 700px;
}

.hero-subtitle {
  margin: 1.4rem 0 2rem;
  max-width: 560px;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.4rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.primary-btn {
  background: #b67f4a;
  color: #ffffff;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.section {
  padding: 6rem 0;
}

.section-heading {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 2.2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4rem);
  line-height: 1;
}

.carousel {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
}

.carousel-viewport {
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.carousel-track {
  display: flex;
  transition: transform 0.35s ease;
}

.slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  background: #ffffff;
}

.slide img {
  width: 100%;
  height: 470px;
  -o-object-fit: cover;
     object-fit: cover;
}

.slide-copy {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f5efe7;
}

.slide-tag {
  margin: 0 0 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b67f4a;
}

.slide-copy h3 {
  margin: 0 0 0.8rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
}

.slide-copy p {
  margin: 0;
  color: #6d6b68;
}

.nav-btn {
  width: 46px;
  height: 46px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  background: #ffffff;
  color: #1d1d1d;
  cursor: pointer;
}

.journal-section {
  background: #1d1d1d;
  color: #ffffff;
}

.journal-section .section-heading h2,
.journal-section .eyebrow {
  color: #ffffff;
}

.article-grid {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.journal-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.8rem 1.3rem;
}

.article-date {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d4bb8d;
}

.journal-card h3 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 3vw, 2.6rem);
  line-height: 1.05;
}

.journal-card p {
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.journal-card a {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f1d7ac;
}

.modal-trigger {
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  cursor: pointer;
}

.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 200;
}

.modal.visible {
  opacity: 1;
  pointer-events: auto;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.modal-box {
  position: relative;
  z-index: 1;
  width: min(760px, calc(100vw - 2rem));
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
}

.modal-box img {
  width: 100%;
  height: 320px;
  -o-object-fit: cover;
     object-fit: cover;
}

.modal-copy {
  padding: 1.5rem 1.5rem 2rem;
}

.modal-copy h3 {
  margin: 0 0 0.8rem;
  font-size: 2rem;
  line-height: 1;
}

.modal-copy p:last-child {
  margin: 0;
  color: #6d6b68;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 1.3rem;
  background: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  cursor: pointer;
}

.site-footer {
  background: #1d1d1d;
  color: #ffffff;
  padding: 2rem 0 3rem;
}

.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-links a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.footer-inner p {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 1024px) {
  .slide {
    grid-template-columns: 1fr;
  }

  .article-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
    min-height: 110px;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem 1rem;
  }

  .hero {
    min-height: 80vh;
  }

  .hero-content {
    padding: 2rem 1rem;
  }

  .carousel {
    grid-template-columns: 1fr;
  }

  .nav-btn {
    display: none;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 4.5rem 0;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss","webpack://./css/_variables.scss","webpack://./css/_mixins.scss"],"names":[],"mappings":"AAGA;EACE,sBAAA;AAFF;;AAKA;EACE,uBAAA;AAFF;;AAKA;EACE,SAAA;EACA,6BCHU;EDIV,mBAAA;EACA,cCfc;EDgBd,gBAAA;AAFF;;AAKA;EACE,cAAA;EACA,eAAA;AAFF;;AAKA;;EAEE,aAAA;AAFF;;AAKA;EACE,cAAA;EACA,qBAAA;AAFF;;AAKA;EACE,gBAAA;EACA,MAAA;EACA,YAAA;EACA,oCAAA;AAFF;;AAKA;EElBE,iBDZU;ECaV,cAAA;EACA,eAAA;EFkBA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBC7Da;ED8Db,cC3DM;ED4DN,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cC1Fc;ED2Fd,yBAAA;AAAF;;AAGA;EACE,cC5Fa;AD4Ff;;AAGA;EACE,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBCvHc;ADuHhB;;AAGA;EACE,kBAAA;EACA,QAAA;EACA,uHAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;AAAF;;AAGA;;EAEE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,oBAAA;KAAA,iBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,iCAAA;AAAF;;AAGA;EACE,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,cCnJM;ADmJR;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,+BAAA;AAAF;;AAGA;;;;EAIE,6BC/Ja;AD+Jf;;AAGA;EACE,SAAA;EACA,mCAAA;EACA,iBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,gBAAA;EACA,+BAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;AAAF;;AAGA;;EAEE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,oBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,mBC1Ma;ED2Mb,cCxMM;ADwMR;;AAGA;EACE,qCAAA;EACA,sCAAA;EACA,cC9MM;AD8MR;;AAGA;EACE,eAAA;AAAF;;AAGA;EEpME,iBDZU;ECaV,cAAA;EACA,eAAA;EFoMA,qBAAA;AAEF;;AACA;EACE,SAAA;EACA,mCAAA;EACA,cAAA;AAEF;;AACA;EE/ME,iBDZU;ECaV,cAAA;EACA,eAAA;EF+MA,aAAA;EACA,+CAAA;EACA,SAAA;EACA,mBAAA;AAIF;;AADA;EACE,gBAAA;EACA,qCAAA;AAIF;;AADA;EACE,aAAA;EACA,gCAAA;AAIF;;AADA;EACE,eAAA;EACA,aAAA;EACA,kCAAA;EACA,mBCtPM;AD0PR;;AADA;EACE,WAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;AAIF;;AADA;EACE,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAIF;;AADA;EACE,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cC/Qa;ADmRf;;AADA;EACE,kBAAA;EACA,iCAAA;EACA,cAAA;AAIF;;AADA;EACE,SAAA;EACA,cCxRY;AD4Rd;;AADA;EACE,WAAA;EACA,YAAA;EACA,qCAAA;EACA,kBAAA;EACA,mBC/RM;EDgSN,cCtSc;EDuSd,eAAA;AAIF;;AADA;EACE,mBC3Sc;ED4Sd,cCtSM;AD0SR;;AADA;;EAEE,cC3SM;AD+SR;;AADA;EE7RE,iBDZU;ECaV,cAAA;EACA,eAAA;EF6RA,aAAA;EACA,gDAAA;EACA,WAAA;AAMF;;AAHA;EACE,qCAAA;EACA,2CAAA;EACA,mBAAA;EACA,sBAAA;AAMF;;AAHA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAMF;;AAHA;EACE,gBAAA;EACA,mCAAA;EACA,iBAAA;AAMF;;AAHA;EACE,gBAAA;EACA,+BAAA;AAMF;;AAHA;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAMF;;AAHA;EACE,mBAAA;EACA,oBAAA;EACA,2CAAA;EACA,qCAAA;EACA,cC5VM;ED6VN,eAAA;AAMF;;AAHA;EACE,eAAA;EACA,QAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,oBAAA;EACA,8BAAA;EACA,YAAA;AAMF;;AAHA;EACE,UAAA;EACA,oBAAA;AAMF;;AAHA;EACE,kBAAA;EACA,QAAA;EACA,8BAAA;AAMF;;AAHA;EACE,kBAAA;EACA,UAAA;EACA,qCAAA;EACA,mBC3XM;ED4XN,mBAAA;EACA,gBAAA;EACA,2CAAA;AAMF;;AAHA;EACE,WAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;AAMF;;AAHA;EACE,2BAAA;AAMF;;AAHA;EACE,kBAAA;EACA,eAAA;EACA,cAAA;AAMF;;AAHA;EACE,SAAA;EACA,cCpZY;AD0Zd;;AAFA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,+BAAA;EACA,cCjaM;EDkaN,eAAA;AAKF;;AAFA;EACE,mBC5ac;ED6ad,cCvaM;EDwaN,oBAAA;AAKF;;AAFA;EE1ZE,iBDZU;ECaV,cAAA;EACA,eAAA;EF0ZA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AAOF;;AAJA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AAOF;;AAJA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qCAAA;AAOF;;AAJA;EACE,SAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,+BAAA;AAOF;;AE1cI;EFucF;IACE,0BAAA;EAOF;;EAJA;IACE,gDAAA;EAOF;AACF;AExdI;EFqdF;IACE,sBAAA;IACA,uBAAA;IACA,iBAAA;IACA,mBAAA;IACA,sBAAA;EAMF;;EAHA;IACE,eAAA;IACA,uBAAA;IACA,gBAAA;EAMF;;EAHA;IACE,gBAAA;EAMF;;EAHA;IACE,kBAAA;EAMF;;EAHA;IACE,0BAAA;EAMF;;EAHA;IACE,aAAA;EAMF;;EAHA;IACE,0BAAA;EAMF;;EAHA;IACE,iBAAA;EAMF;AACF","sourcesContent":["@import 'variables';\n@import 'mixins';\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: $font-body;\n  background: #efe8df;\n  color: $primary-color;\n  line-height: 1.6;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nbutton,\na {\n  font: inherit;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.navbar {\n  @include section-shell;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 90px;\n  transition: all 0.3s ease;\n}\n\n.navbar.scrolled {\n  min-height: 70px;\n}\n\n.brand-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.brand-mark {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: $accent-color;\n  color: $white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  transition: all 0.3s ease;\n}\n\n.brand-name {\n  font-size: 0.95rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.3rem;\n  align-items: center;\n}\n\n.nav-link {\n  font-size: 0.75rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: $primary-color;\n  transition: all 0.3s ease;\n}\n\n.nav-link.active {\n  color: $accent-color;\n}\n\n.navbar.scrolled .brand-name {\n  font-size: 0.75rem;\n}\n\n.navbar.scrolled .brand-mark {\n  width: 32px;\n  height: 32px;\n  font-size: 0.62rem;\n}\n\n.navbar.scrolled .nav-link {\n  font-size: 0.65rem;\n}\n\n.hero {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: $primary-color;\n}\n\n.hero-fixed-bg {\n  position: absolute;\n  inset: 0;\n  background-image: url('https://api.nga.gov/iiif/e6eb5003-aa1d-4425-b604-aef1c71d0346__900/full/!800,800/0/default.jpg');\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.hero-video,\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.hero-video {\n  object-fit: cover;\n  filter: brightness(0.6);\n}\n\n.hero-overlay {\n  background: rgba(15, 15, 15, 0.5);\n}\n\n.hero-content {\n  position: relative;\n  z-index: 1;\n  max-width: 820px;\n  padding: 3rem 2rem;\n  color: $white;\n}\n\n.eyebrow {\n  margin: 0 0 1rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.hero h1,\n.section-heading h2,\n.slide-copy h3,\n.journal-card h3 {\n  font-family: $font-display;\n}\n\n.hero h1 {\n  margin: 0;\n  font-size: clamp(3rem, 7vw, 5.5rem);\n  line-height: 0.95;\n  max-width: 700px;\n}\n\n.hero-subtitle {\n  margin: 1.4rem 0 2rem;\n  max-width: 560px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.primary-btn,\n.secondary-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 1.4rem;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.primary-btn {\n  background: $accent-color;\n  color: $white;\n}\n\n.secondary-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: $white;\n}\n\n.section {\n  padding: 6rem 0;\n}\n\n.section-heading {\n  @include section-shell;\n  margin-bottom: 2.2rem;\n}\n\n.section-heading h2 {\n  margin: 0;\n  font-size: clamp(2.4rem, 4vw, 4rem);\n  line-height: 1;\n}\n\n.carousel {\n  @include section-shell;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 1rem;\n  align-items: center;\n}\n\n.carousel-viewport {\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.carousel-track {\n  display: flex;\n  transition: transform 0.35s ease;\n}\n\n.slide {\n  min-width: 100%;\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  background: $white;\n}\n\n.slide img {\n  width: 100%;\n  height: 470px;\n  object-fit: cover;\n}\n\n.slide-copy {\n  padding: 2rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #f5efe7;\n}\n\n.slide-tag {\n  margin: 0 0 0.8rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: $accent-color;\n}\n\n.slide-copy h3 {\n  margin: 0 0 0.8rem;\n  font-size: clamp(2rem, 4vw, 3rem);\n  line-height: 1;\n}\n\n.slide-copy p {\n  margin: 0;\n  color: $muted-color;\n}\n\n.nav-btn {\n  width: 46px;\n  height: 46px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 50%;\n  background: $white;\n  color: $primary-color;\n  cursor: pointer;\n}\n\n.journal-section {\n  background: $primary-color;\n  color: $white;\n}\n\n.journal-section .section-heading h2,\n.journal-section .eyebrow {\n  color: $white;\n}\n\n.article-grid {\n  @include section-shell;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n\n.journal-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 1.8rem 1.3rem;\n}\n\n.article-date {\n  display: inline-block;\n  margin-bottom: 0.8rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #d4bb8d;\n}\n\n.journal-card h3 {\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 3vw, 2.6rem);\n  line-height: 1.05;\n}\n\n.journal-card p {\n  margin: 0 0 1rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.journal-card a {\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #f1d7ac;\n}\n\n.modal-trigger {\n  margin-bottom: 1rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.08);\n  color: $white;\n  cursor: pointer;\n}\n\n.modal {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  z-index: 200;\n}\n\n.modal.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.modal-box {\n  position: relative;\n  z-index: 1;\n  width: min(760px, calc(100vw - 2rem));\n  background: $white;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);\n}\n\n.modal-box img {\n  width: 100%;\n  height: 320px;\n  object-fit: cover;\n}\n\n.modal-copy {\n  padding: 1.5rem 1.5rem 2rem;\n}\n\n.modal-copy h3 {\n  margin: 0 0 0.8rem;\n  font-size: 2rem;\n  line-height: 1;\n}\n\n.modal-copy p:last-child {\n  margin: 0;\n  color: $muted-color;\n}\n\n\n.close-button {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  border: 0;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  font-size: 1.3rem;\n  background: rgba(0, 0, 0, 0.55);\n  color: $white;\n  cursor: pointer;\n}\n\n.site-footer {\n  background: $primary-color;\n  color: $white;\n  padding: 2rem 0 3rem;\n}\n\n.footer-inner {\n  @include section-shell;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n}\n\n.footer-links {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.footer-links a {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.footer-inner p {\n  margin: 0;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n@include respond-to(tablet) {\n  .slide {\n    grid-template-columns: 1fr;\n  }\n\n  .article-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@include respond-to(mobile) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    min-height: 110px;\n    padding-top: 0.7rem;\n    padding-bottom: 0.7rem;\n  }\n\n  .nav-links {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 0.8rem 1rem;\n  }\n\n  .hero {\n    min-height: 80vh;\n  }\n\n  .hero-content {\n    padding: 2rem 1rem;\n  }\n\n  .carousel {\n    grid-template-columns: 1fr;\n  }\n\n  .nav-btn {\n    display: none;\n  }\n\n  .article-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .section {\n    padding: 4.5rem 0;\n  }\n}\n","$primary-color: #1d1d1d;\n$secondary-color: #f3efe7;\n$panel-color: #f7f2eb;\n$accent-color: #b67f4a;\n$accent-soft: rgba(182, 127, 74, 0.18);\n$muted-color: #6d6b68;\n$white: #ffffff;\n$shadow-soft: 0 24px 60px rgba(19, 17, 12, 0.14);\n$shadow-card: 0 18px 40px rgba(29, 29, 29, 0.12);\n$font-display: 'Georgia', serif;\n$font-body: 'Georgia', serif;\n$max-width: 1180px;\n$breakpoint-tablet: 1024px;\n$breakpoint-mobile: 768px;\n","@mixin flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin respond-to($breakpoint) {\n  @if $breakpoint == mobile {\n    @media (max-width: 768px) {\n      @content;\n    }\n  } @else if $breakpoint == tablet {\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $breakpoint == desktop {\n    @media (min-width: 1025px) {\n      @content;\n    }\n  }\n}\n\n@mixin section-shell {\n  max-width: $max-width;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta name=\"description\" content=\"My personal blog about favorite paintings\" />\n    <title>Rob Hand | Favorite Paintings</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link href=\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap\" rel=\"stylesheet\" />\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" />\n  </head>\n  <body>\n    <header class=\"site-header\">\n      <nav class=\"navbar\" aria-label=\"Main navigation\">\n        <div class=\"brand-wrap\">\n          <span class=\"brand-mark\">RH</span>\n          <span class=\"brand-name\">Rob Hand</span>\n        </div>\n\n        <div class=\"nav-links\">\n          <a href=\"#home\" class=\"nav-link active\">Home</a>\n          <a href=\"#featured\" class=\"nav-link\">Featured</a>\n          <a href=\"#journal\" class=\"nav-link\">Journal</a>\n          <a href=\"#contact\" class=\"nav-link\">Contact</a>\n        </div>\n      </nav>\n    </header>\n\n    <main>\n      <section id=\"home\" class=\"hero\">\n        <div class=\"hero-fixed-bg\"></div>\n        <video class=\"hero-video\" autoplay loop muted playsinline>\n          <source src=\"https://videos.pexels.com/video-files/854982/854982-hd_1920_1080.mp4\" type=\"video/mp4\" />\n        </video>\n        <div class=\"hero-overlay\"></div>\n\n        <div class=\"hero-content\">\n          <p class=\"eyebrow\">Personal blog</p>\n          <h1>Favorite paintings, seen slowly.</h1>\n          <p class=\"hero-subtitle\">\n            A collection of my favorite paintings.\n          </p>\n          <div class=\"hero-actions\">\n            <a href=\"#featured\" class=\"primary-btn\">Read feature</a>\n            <a href=\"#journal\" class=\"secondary-btn\">See journal</a>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"featured\" class=\"section featured-section\">\n        <div class=\"section-heading\">\n          <p class=\"eyebrow\">Featured review</p>\n          <h2>Paintings in conversation</h2>\n        </div>\n\n        <div class=\"carousel\">\n          <button class=\"nav-btn prev\" type=\"button\" aria-label=\"Previous painting\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </button>\n\n          <div class=\"carousel-viewport\">\n            <div class=\"carousel-track\">\n              <article class=\"slide\">\n                <img src=\"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20260302172601\" alt=\"The Starry Night\" />\n                <div class=\"slide-copy\">\n                  <p class=\"slide-tag\">Favorite painting</p>\n                  <h3>The Starry Night</h3>\n                  <p>\n                    A painting of restless light and quiet panic. My favorite Van Gogh painting.\n                  </p>\n                </div>\n              </article>\n\n              <article class=\"slide\">\n                <img src=\"https://ih1.redbubble.net/image.6108847453.1651/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg\" alt=\"AI Apple\" />\n                <div class=\"slide-copy\">\n                  <p class=\"slide-tag\">Favorite painting</p>\n                  <h3>Funny AI Apple</h3>\n                  <p>\n                    An amazing piece of art that captures the essence of beauty, generated by ChatGPT.\n                  </p>\n                </div>\n              </article>\n\n              <article class=\"slide\">\n                <img src=\"https://www.angelaedwards.co.uk/wp-content/uploads/2022/07/The_Persistence_of_Memory-1024x754-1.jpeg\" alt=\"The Persistence of Memory\" />\n                <div class=\"slide-copy\">\n                  <p class=\"slide-tag\">Favorite painting</p>\n                  <h3>The Persistence of Memory</h3>\n                  <p>\n                    I know this painting has deep meaning, I dont know what it is though. It looks cool!\n                  </p>\n                </div>\n              </article>\n            </div>\n          </div>\n\n          <button class=\"nav-btn next\" type=\"button\" aria-label=\"Next painting\">\n            <i class=\"fas fa-chevron-right\"></i>\n          </button>\n        </div>\n      </section>\n\n      <section id=\"journal\" class=\"section journal-section\">\n        <div class=\"section-heading\">\n          <p class=\"eyebrow\">Recent thoughts</p>\n          <h2>Notes from the studio wall</h2>\n        </div>\n\n        <div class=\"article-grid\">\n          <article class=\"journal-card\">\n            <span class=\"article-date\">April 12</span>\n            <h3>If I had blog thoughts they would be here!</h3>\n            <p>\n              Here is a blog space for my thoughts, hopefully I will eventually have more.\n            </p>\n            <button class=\"modal-trigger\" type=\"button\">Open painting note</button>\n            <a href=\"#contact\">Keep reading</a>\n          </article>\n\n          <article class=\"journal-card\">\n            <span class=\"article-date\">March 29</span>\n            <h3>My paintings</h3>\n            <p>\n              I do not know how to paint, maybe I will learn someday!\n            </p>\n            <button class=\"modal-trigger\" type=\"button\">Open painting note</button>\n            <a href=\"#contact\">Keep reading</a>\n          </article>\n\n          <article class=\"journal-card\">\n            <span class=\"article-date\">February 18</span>\n            <h3>If I could paint</h3>\n            <p>\n              If I knew how to paint, I would paint all sorts of things. \n            </p>\n            <button class=\"modal-trigger\" type=\"button\">Open painting note</button>\n            <a href=\"#contact\">Keep reading</a>\n          </article>\n        </div>\n      </section>\n\n    </main>\n\n    <div class=\"modal\" aria-hidden=\"true\">\n      <div class=\"modal-backdrop\" data-close=\"true\"></div>\n      <div class=\"modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n        <button class=\"close-button\" type=\"button\" aria-label=\"Close modal\">×</button>\n        <img src=\"https://www.angelaedwards.co.uk/wp-content/uploads/2022/07/The_Persistence_of_Memory-1024x754-1.jpeg\" alt=\"The Persistence of Memory\" />\n        <div class=\"modal-copy\">\n          <p class=\"slide-tag\">Favorite painting</p>\n          <h3 id=\"modal-title\">The Persistence of Memory</h3>\n          <p>\n            This is a simple modal with extra painting notes. It opens on the current page and closes with the button or the dark background.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <footer id=\"contact\" class=\"site-footer\">\n      <div class=\"footer-inner\">\n        <div class=\"footer-links\">\n          <a href=\"https://www.instagram.com\" aria-label=\"Instagram\"><i class=\"fab fa-instagram\"></i></a>\n          <a href=\"https://www.x.com\" aria-label=\"X\"><i class=\"fab fa-x-twitter\"></i></a>\n          <a href=\"https://www.behance.net\" aria-label=\"Behance\"><i class=\"fab fa-behance\"></i></a>\n        </div>\n        <p>© 2026 Rob Hand — Favorite Paintings Journal</p>\n      </div>\n    </footer>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map