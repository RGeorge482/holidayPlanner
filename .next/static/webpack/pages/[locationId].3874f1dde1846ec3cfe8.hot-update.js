webpackHotUpdate_N_E("pages/[locationId]",{

/***/ "./components/locations/LocationDetail.js":
/*!************************************************!*\
  !*** ./components/locations/LocationDetail.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationDetail.module.css */ "./components/locations/LocationDetail.module.css");
/* harmony import */ var _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\35386\\OneDrive\\Desktop\\React\\holiday-planner\\06\\holiday-planner\\components\\locations\\LocationDetail.js";


function LocationDetail(props) {
  var _this = this;

  var deleteHandler = function deleteHandler(itemId) {
    var items = _this.state.items;
  };

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
        onClick: deleteHandler(this.props.id),
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

_c = LocationDetail;
/* harmony default export */ __webpack_exports__["default"] = (LocationDetail);

var _c;

$RefreshReg$(_c, "LocationDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2NhdGlvbnMvTG9jYXRpb25EZXRhaWwuanMiXSwibmFtZXMiOlsiTG9jYXRpb25EZXRhaWwiLCJwcm9wcyIsImRlbGV0ZUhhbmRsZXIiLCJpdGVtSWQiLCJpdGVtcyIsInN0YXRlIiwiY2xhc3NlcyIsImRldGFpbCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJhY3Rpb25zIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFFN0IsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFELEVBQVk7QUFDaEMsUUFBTUMsS0FBSyxHQUFHLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxLQUF6QjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVFLGlFQUFPLENBQUNDLE1BQTVCO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVOLEtBQUssQ0FBQ08sS0FEYjtBQUVFLFNBQUcsRUFBRVAsS0FBSyxDQUFDUTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUEsZ0JBQUtSLEtBQUssQ0FBQ1E7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLGdCQUFVUixLQUFLLENBQUNTO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsZ0JBQUlULEtBQUssQ0FBQ1U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFLLGVBQVMsRUFBRUwsaUVBQU8sQ0FBQ00sT0FBeEI7QUFBQSw2QkFDSTtBQUFRLGVBQU8sRUFBRVYsYUFBYSxDQUFDLEtBQUtELEtBQUwsQ0FBV1ksRUFBWixDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztLQXBCUWIsYztBQXNCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xvY2F0aW9uSWRdLjM4NzRmMWRkZTE4NDZlYzNjZmU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0xvY2F0aW9uRGV0YWlsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTG9jYXRpb25EZXRhaWwocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgZGVsZXRlSGFuZGxlciA9IChpdGVtSWQpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9wcy5pbWFnZX1cclxuICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUhhbmRsZXIodGhpcy5wcm9wcy5pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=