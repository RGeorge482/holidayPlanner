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

  deleteHandler = function deleteHandler(itemId) {
    var newItems = _this.state.items.filter(function (item) {
      return item.id !== itemId;
    });

    _this.setState({
      items: newitems
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LocationDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return _this.deleteHandler(id);
        },
        children: "Remove"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2NhdGlvbnMvTG9jYXRpb25EZXRhaWwuanMiXSwibmFtZXMiOlsiTG9jYXRpb25EZXRhaWwiLCJwcm9wcyIsImRlbGV0ZUhhbmRsZXIiLCJpdGVtSWQiLCJuZXdJdGVtcyIsInN0YXRlIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJzZXRTdGF0ZSIsIm5ld2l0ZW1zIiwiY2xhc3NlcyIsImRldGFpbCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBRTdCQyxlQUFhLEdBQUcsdUJBQUNDLE1BQUQsRUFBWTtBQUMxQixRQUFNQyxRQUFRLEdBQUcsS0FBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWU4sTUFBaEI7QUFBQSxLQUE1QixDQUFqQjs7QUFDQSxTQUFJLENBQUNPLFFBQUwsQ0FBYztBQUFDSixXQUFLLEVBQUVLO0FBQVIsS0FBZDtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGlFQUFPLENBQUNDLE1BQTVCO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVaLEtBQUssQ0FBQ2EsS0FEYjtBQUVFLFNBQUcsRUFBRWIsS0FBSyxDQUFDYztBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUEsZ0JBQUtkLEtBQUssQ0FBQ2M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLGdCQUFVZCxLQUFLLENBQUNlO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsZ0JBQUlmLEtBQUssQ0FBQ2dCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUU7QUFBSyxlQUFTLEVBQUVMLGlFQUFPLENBQUNNLE9BQXhCO0FBQUEsNkJBQ0k7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxLQUFJLENBQUNoQixhQUFMLENBQW1CTyxFQUFuQixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FyQlFULGM7QUF1Qk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsb2NhdGlvbklkXS5mOTM1ZWViNGY0MzhjNWM4Y2ViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Mb2NhdGlvbkRldGFpbC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIExvY2F0aW9uRGV0YWlsKHByb3BzKSB7XHJcblxyXG4gIGRlbGV0ZUhhbmRsZXIgPSAoaXRlbUlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaXRlbUlkKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IG5ld2l0ZW1zfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvcHMuaW1hZ2V9XHJcbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZUhhbmRsZXIoaWQpfT5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkRldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9