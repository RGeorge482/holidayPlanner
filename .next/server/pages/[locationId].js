module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[locationId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/locations/LocationDetail.js":
/*!************************************************!*\
  !*** ./components/locations/LocationDetail.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationDetail.module.css */ "./components/locations/LocationDetail.module.css");
/* harmony import */ var _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\35386\\OneDrive\\Desktop\\React\\holiday-planner\\06\\holiday-planner\\components\\locations\\LocationDetail.js";


function LocationDetail(props) {
  const deleteHandler = () => {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: deleteHandler,
        children: "Remove"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LocationDetail);

/***/ }),

/***/ "./components/locations/LocationDetail.module.css":
/*!********************************************************!*\
  !*** ./components/locations/LocationDetail.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "LocationDetail_detail__1U0H7",
	"actions": "LocationDetail_actions__HD6bj"
};


/***/ }),

/***/ "./pages/[locationId]/index.js":
/*!*************************************!*\
  !*** ./pages/[locationId]/index.js ***!
  \*************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_locations_LocationDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/locations/LocationDetail */ "./components/locations/LocationDetail.js");

var _jsxFileName = "C:\\Users\\35386\\OneDrive\\Desktop\\React\\holiday-planner\\06\\holiday-planner\\pages\\[locationId]\\index.js";





function LocationDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.locationData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "Description",
        content: props.locationData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_locations_LocationDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: props.locationData.image,
      title: props.locationData.title,
      address: props.locationData.address,
      description: props.locationData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect("mongodb+srv://geo:geomongo351@cluster0.gzpjq.mongodb.net/locations?retryWrites=true&w=majority");
  const db = client.db();
  const locationsCollection = db.collection("locations");
  const locations = await locationsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: false,
    paths: locations.map(location => ({
      params: {
        locationId: location._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const locationId = context.params.locationId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect("mongodb+srv://geo:geomongo351@cluster0.gzpjq.mongodb.net/locations?retryWrites=true&w=majority");
  const db = client.db();
  const locationsCollection = db.collection("locations");
  const selectedLocation = await locationsCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_3__["ObjectId"])(locationId)
  });
  client.close();
  return {
    props: {
      locationData: {
        id: selectedLocation._id.toString(),
        title: selectedLocation.title,
        address: selectedLocation.address,
        image: selectedLocation.image,
        description: selectedLocation.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (LocationDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbnMvTG9jYXRpb25EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbnMvTG9jYXRpb25EZXRhaWwubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9bbG9jYXRpb25JZF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9jYXRpb25EZXRhaWwiLCJwcm9wcyIsImRlbGV0ZUhhbmRsZXIiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImFjdGlvbnMiLCJMb2NhdGlvbkRldGFpbHMiLCJsb2NhdGlvbkRhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibG9jYXRpb25zQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJsb2NhdGlvbnMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsImxvY2F0aW9uIiwicGFyYW1zIiwibG9jYXRpb25JZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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ZDtBQUlaRixhQUFLLEVBQUU0QixnQkFBZ0IsQ0FBQzVCLEtBSlo7QUFLWkcsbUJBQVcsRUFBRXlCLGdCQUFnQixDQUFDekI7QUFMbEI7QUFEVDtBQURGLEdBQVA7QUFXRDtBQUVjRSw4RUFBZixFOzs7Ozs7Ozs7OztBQy9FQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bbG9jYXRpb25JZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1tsb2NhdGlvbklkXS9pbmRleC5qc1wiKTtcbiIsIiAgXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTG9jYXRpb25EZXRhaWwubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBMb2NhdGlvbkRldGFpbChwcm9wcykge1xyXG5cclxuICBjb25zdCBkZWxldGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb3BzLmltYWdlfVxyXG4gICAgICAgIGFsdD17cHJvcHMudGl0bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlSGFuZGxlcn0+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25EZXRhaWw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTG9jYXRpb25EZXRhaWxfZGV0YWlsX18xVTBIN1wiLFxuXHRcImFjdGlvbnNcIjogXCJMb2NhdGlvbkRldGFpbF9hY3Rpb25zX19IRDZialwiXG59O1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge01vbmdvQ2xpZW50LCBPYmplY3RJZH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmltcG9ydCBMb2NhdGlvbkRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvY2F0aW9ucy9Mb2NhdGlvbkRldGFpbCc7XHJcblxyXG5mdW5jdGlvbiBMb2NhdGlvbkRldGFpbHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cHJvcHMubG9jYXRpb25EYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9J0Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5sb2NhdGlvbkRhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8TG9jYXRpb25EZXRhaWxcclxuICAgICAgaW1hZ2U9e3Byb3BzLmxvY2F0aW9uRGF0YS5pbWFnZX1cclxuICAgICAgdGl0bGU9e3Byb3BzLmxvY2F0aW9uRGF0YS50aXRsZX1cclxuICAgICAgYWRkcmVzcz17cHJvcHMubG9jYXRpb25EYXRhLmFkZHJlc3N9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5sb2NhdGlvbkRhdGEuZGVzY3JpcHRpb259XHJcbiAgICAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2VvOmdlb21vbmdvMzUxQGNsdXN0ZXIwLmd6cGpxLm1vbmdvZGIubmV0L2xvY2F0aW9ucz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IGxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbG9jYXRpb25JZDogbG9jYXRpb24uX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9OyBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuXHJcbiAgY29uc3QgbG9jYXRpb25JZCA9IGNvbnRleHQucGFyYW1zLmxvY2F0aW9uSWQ7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2VvOmdlb21vbmdvMzUxQGNsdXN0ZXIwLmd6cGpxLm1vbmdvZGIubmV0L2xvY2F0aW9ucz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZExvY2F0aW9uID0gYXdhaXQgbG9jYXRpb25zQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgIF9pZDogT2JqZWN0SWQobG9jYXRpb25JZCksXHJcbiAgfSk7XHJcblxyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxvY2F0aW9uRGF0YToge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZExvY2F0aW9uLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZExvY2F0aW9uLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTG9jYXRpb24uYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRMb2NhdGlvbi5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRMb2NhdGlvbi5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25EZXRhaWxzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9