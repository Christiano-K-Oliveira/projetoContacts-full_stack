"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/client",{

/***/ "./src/schemas/createContact.schema.ts":
/*!*********************************************!*\
  !*** ./src/schemas/createContact.schema.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactReturnSchema: function() { return /* binding */ createContactReturnSchema; },\n/* harmony export */   createContactSchema: function() { return /* binding */ createContactSchema; }\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n\nconst createContactSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty(\"Nome obrigat\\xf3rio\").max(150, \"M\\xe1ximo de 150 carcateres\"),\n    telephone: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(11, \"M\\xednimo de 11 caracteres\").max(11, \"M\\xe1ximo de 11 caracteres\").nonempty(\"Necess\\xe1rio passar um telefone\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(\"Email Inv\\xe1lido\").optional().or(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().refine((value)=>value === undefined))\n});\nconst createContactReturnSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    telephone: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    registration_date: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    client_id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hcy9jcmVhdGVDb250YWN0LnNjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUI7QUFFdkIsTUFBTUMsc0JBQXNCRCxrQ0FBQ0EsQ0FBQ0UsT0FBTztJQUNqQ0MsTUFBTUgsa0NBQUNBLENBQUNJLFNBQVNDLFNBQVMsdUJBQW9CQyxJQUFJLEtBQUs7SUFDdkRDLFdBQVdQLGtDQUFDQSxDQUFDSSxTQUFTSSxJQUFJLElBQUksOEJBQTJCRixJQUFJLElBQUksOEJBQTJCRCxTQUFTO0lBQ3JHSSxPQUFPVCxrQ0FBQ0EsQ0FBQ0ksU0FBU0ssTUFBTSxxQkFBa0JDLFdBQVdDLEdBQUdYLGtDQUFDQSxDQUFDSSxTQUFTUSxPQUFPLENBQUNDLFFBQVVBLFVBQVVDO0FBQ25HO0FBRUEsTUFBTUMsNEJBQTRCZixrQ0FBQ0EsQ0FBQ0UsT0FBTztJQUN2Q2MsSUFBSWhCLGtDQUFDQSxDQUFDSTtJQUNORCxNQUFNSCxrQ0FBQ0EsQ0FBQ0k7SUFDUkcsV0FBV1Asa0NBQUNBLENBQUNJO0lBQ2JLLE9BQU9ULGtDQUFDQSxDQUFDSTtJQUNUYSxtQkFBbUJqQixrQ0FBQ0EsQ0FBQ0k7SUFDckJjLFdBQVdsQixrQ0FBQ0EsQ0FBQ0k7QUFDakI7QUFLeUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjaGVtYXMvY3JlYXRlQ29udGFjdC5zY2hlbWEudHM/MTM1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5jb25zdCBjcmVhdGVDb250YWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIG5hbWU6IHouc3RyaW5nKCkubm9uZW1wdHkoJ05vbWUgb2JyaWdhdMOzcmlvJykubWF4KDE1MCwgJ03DoXhpbW8gZGUgMTUwIGNhcmNhdGVyZXMnKSxcbiAgICB0ZWxlcGhvbmU6IHouc3RyaW5nKCkubWluKDExLCAnTcOtbmltbyBkZSAxMSBjYXJhY3RlcmVzJykubWF4KDExLCAnTcOheGltbyBkZSAxMSBjYXJhY3RlcmVzJykubm9uZW1wdHkoJ05lY2Vzc8OhcmlvIHBhc3NhciB1bSB0ZWxlZm9uZScpLFxuICAgIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCdFbWFpbCBJbnbDoWxpZG8nKS5vcHRpb25hbCgpLm9yKHouc3RyaW5nKCkucmVmaW5lKCh2YWx1ZSkgPT4gdmFsdWUgPT09IHVuZGVmaW5lZCkpLFxufSlcblxuY29uc3QgY3JlYXRlQ29udGFjdFJldHVyblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBpZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgIHRlbGVwaG9uZTogei5zdHJpbmcoKSxcbiAgICBlbWFpbDogei5zdHJpbmcoKSxcbiAgICByZWdpc3RyYXRpb25fZGF0ZTogei5zdHJpbmcoKSxcbiAgICBjbGllbnRfaWQ6IHouc3RyaW5nKCksXG59KVxuXG5leHBvcnQgdHlwZSBpQ3JlYXRlQ29udGFjdCA9IHouaW5mZXI8dHlwZW9mIGNyZWF0ZUNvbnRhY3RTY2hlbWE+XG5leHBvcnQgdHlwZSBpQ3JlYXRlQ29udGFjdFJldHVybiA9IHouaW5mZXI8dHlwZW9mIGNyZWF0ZUNvbnRhY3RSZXR1cm5TY2hlbWE+XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RTY2hlbWEsIGNyZWF0ZUNvbnRhY3RSZXR1cm5TY2hlbWEgfSJdLCJuYW1lcyI6WyJ6IiwiY3JlYXRlQ29udGFjdFNjaGVtYSIsIm9iamVjdCIsIm5hbWUiLCJzdHJpbmciLCJub25lbXB0eSIsIm1heCIsInRlbGVwaG9uZSIsIm1pbiIsImVtYWlsIiwib3B0aW9uYWwiLCJvciIsInJlZmluZSIsInZhbHVlIiwidW5kZWZpbmVkIiwiY3JlYXRlQ29udGFjdFJldHVyblNjaGVtYSIsImlkIiwicmVnaXN0cmF0aW9uX2RhdGUiLCJjbGllbnRfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/schemas/createContact.schema.ts\n"));

/***/ })

});