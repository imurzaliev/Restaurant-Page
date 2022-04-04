/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://restaurant-page/./src/background.jpg?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\nconst homepage = () => {\n  const content = document.querySelector(\"#content\");\n  const header = document.createElement(\"header\");\n  const topbar = document.createElement(\"div\");\n  const home = document.createElement(\"h2\");\n  const menu = document.createElement(\"h2\");\n  const contact = document.createElement(\"h2\");\n  const title = document.createElement(\"h1\");\n  const main = document.createElement(\"main\");\n  const ul = document.createElement(\"ul\");\n  const li1 = document.createElement(\"li\");\n  const li2 = document.createElement(\"li\");\n  const li3 = document.createElement(\"li\");\n  const footer = document.createElement(\"footer\");\n  const p = document.createElement(\"p\");\n  const a = document.createElement(\"a\");\n  home.textContent = \"Home\";\n  menu.textContent = \"Menu\";\n  contact.textContent = \"Contact\";\n  title.textContent = \"Your Favorite Restaurant\";\n  li1.textContent = \"Cozy atmosphere\";\n  li2.textContent = \"Tasty food\";\n  li3.textContent = \"Great service\";\n  a.href = \"https://github.com/imurzaliev/Restaurant-Page\";\n  a.target = \"_blank\";\n  a.textContent = \"Murzaliev Iskender ©\";\n  p.textContent = \"2022 \";\n  topbar.classList.add(\"topbar\");\n  topbar.appendChild(home);\n  topbar.appendChild(menu);\n  topbar.appendChild(contact);\n  topbar.appendChild(title);\n  header.appendChild(topbar);\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n  ul.appendChild(li3);\n  main.appendChild(ul);\n  p.appendChild(a);\n  footer.appendChild(p);\n  content.appendChild(header);\n  content.appendChild(main);\n  content.appendChild(footer);\n\n  return content;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\");\n/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\n// import \"./style.css\";\n\n\n// function component() {\n//   const content = document.querySelector(\"#content\");\n\n//   const myBackgroundImg = new Image();\n//   myBackgroundImg.src = Background;\n\n//   content.appendChild(myBackgroundImg);\n//   content.appendChild(homepage());\n\n//   return content;\n// }\n\n// homepage();\nfunction hello() {\n  const div = document.createElement(\"div\");\n  div.textContent = \"hello\";\n}\nhello();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;