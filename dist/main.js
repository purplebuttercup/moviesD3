/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\nvar colors = {\r\n  'badass'      : '#631325',\r\n  'depressive'  : '#6A7687',\r\n  'life'        : '#739876',\r\n  'mindfuck'    : '#AFC3B8',\r\n  'mystic'      : '#7B5487',\r\n  'romance'     : '#F1B5BB'\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9ycy5qcz8xYjkyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb2xvcnMgPSB7XHJcbiAgJ2JhZGFzcycgICAgICA6ICcjNjMxMzI1JyxcclxuICAnZGVwcmVzc2l2ZScgIDogJyM2QTc2ODcnLFxyXG4gICdsaWZlJyAgICAgICAgOiAnIzczOTg3NicsXHJcbiAgJ21pbmRmdWNrJyAgICA6ICcjQUZDM0I4JyxcclxuICAnbXlzdGljJyAgICAgIDogJyM3QjU0ODcnLFxyXG4gICdyb21hbmNlJyAgICAgOiAnI0YxQjVCQidcclxufVxyXG5cclxuZXhwb3J0IHsgY29sb3JzIH07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/colors.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors.js */ \"./src/colors.js\");\n\r\n\r\n\r\n\r\nfunction component(name) {\r\n  const element = document.createElement('div');\r\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['', name], ' ');\r\n\r\n  return element;\r\n}\r\n\r\nfunction svgComponent(name){\r\n  const svg = document.createElement('svg');\r\n  svg.setAttribute('id', name);\r\n  svg.setAttribute('width', 260);\r\n  svg.setAttribute('height', 200);\r\n\r\n  return svg;\r\n}\r\n\r\nvar svg = d3.select(\"svg\"),\r\n    width = +svg.attr(\"width\"),\r\n    height = +svg.attr(\"height\"),\r\n    radius = Math.min(width, height) / 2\r\n\r\nvar pie = d3.pie()\r\n    .sort(null)\r\n    .value(function(d) { return d.percentage; });\r\n\r\nvar path = d3.arc()\r\n    .outerRadius(radius - 10)\r\n    .innerRadius(0);\r\n\r\nvar label = d3.arc()\r\n    .outerRadius(radius - 40)\r\n    .innerRadius(radius - 40);\r\n\r\nd3.json(\"../data/data.json\", function(error, movies) {\r\n  if (error) throw error;\r\n  console.log(movies)\r\n  movies.forEach((movie, index) => {\r\n    var  g = svg.append(\"g\").attr(\"transform\", \"translate(\" + index +30 + \",\" + index + 30+ \")\");\r\n\r\n    var arc = g.selectAll(\".arc\")\r\n      .data(pie(movie.values))\r\n      .enter().append(\"g\")\r\n        .attr(\"class\", \"arc\");\r\n\r\n    arc.append(\"path\")\r\n        .attr(\"d\", path)\r\n        .attr(\"fill\", function(d) { return _colors_js__WEBPACK_IMPORTED_MODULE_1__[\"colors\"][d.data.genre]; });\r\n\r\n    arc.append(\"text\")\r\n        .attr(\"transform\", function(d) { return \"translate(\" + label.centroid(d) + \")\"; })\r\n        .attr(\"dy\", \"0.35em\")\r\n        .text(function(d) { return d.data.genre; });\r\n\r\n    })\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycy5qcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWycnLCBuYW1lXSwgJyAnKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN2Z0NvbXBvbmVudChuYW1lKXtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMjYwKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAyMDApO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcblxyXG52YXIgc3ZnID0gZDMuc2VsZWN0KFwic3ZnXCIpLFxyXG4gICAgd2lkdGggPSArc3ZnLmF0dHIoXCJ3aWR0aFwiKSxcclxuICAgIGhlaWdodCA9ICtzdmcuYXR0cihcImhlaWdodFwiKSxcclxuICAgIHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMlxyXG5cclxudmFyIHBpZSA9IGQzLnBpZSgpXHJcbiAgICAuc29ydChudWxsKVxyXG4gICAgLnZhbHVlKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQucGVyY2VudGFnZTsgfSk7XHJcblxyXG52YXIgcGF0aCA9IGQzLmFyYygpXHJcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzIC0gMTApXHJcbiAgICAuaW5uZXJSYWRpdXMoMCk7XHJcblxyXG52YXIgbGFiZWwgPSBkMy5hcmMoKVxyXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyAtIDQwKVxyXG4gICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIDQwKTtcclxuXHJcbmQzLmpzb24oXCIuLi9kYXRhL2RhdGEuanNvblwiLCBmdW5jdGlvbihlcnJvciwgbW92aWVzKSB7XHJcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuICBjb25zb2xlLmxvZyhtb3ZpZXMpXHJcbiAgbW92aWVzLmZvckVhY2goKG1vdmllLCBpbmRleCkgPT4ge1xyXG4gICAgdmFyICBnID0gc3ZnLmFwcGVuZChcImdcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGluZGV4ICszMCArIFwiLFwiICsgaW5kZXggKyAzMCsgXCIpXCIpO1xyXG5cclxuICAgIHZhciBhcmMgPSBnLnNlbGVjdEFsbChcIi5hcmNcIilcclxuICAgICAgLmRhdGEocGllKG1vdmllLnZhbHVlcykpXHJcbiAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcclxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpO1xyXG5cclxuICAgIGFyYy5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXHJcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvbG9yc1tkLmRhdGEuZ2VucmVdOyB9KTtcclxuXHJcbiAgICBhcmMuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbGFiZWwuY2VudHJvaWQoZCkgKyBcIilcIjsgfSlcclxuICAgICAgICAuYXR0cihcImR5XCIsIFwiMC4zNWVtXCIpXHJcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5kYXRhLmdlbnJlOyB9KTtcclxuXHJcbiAgICB9KVxyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });