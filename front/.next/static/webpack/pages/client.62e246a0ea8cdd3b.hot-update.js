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

/***/ "./src/pages/client.tsx":
/*!******************************!*\
  !*** ./src/pages/client.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MenuClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MenuClient */ \"./src/components/MenuClient/index.tsx\");\n/* harmony import */ var _components_MenuContatos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MenuContatos */ \"./src/components/MenuContatos/index.tsx\");\n/* harmony import */ var _components_Modals_ModalAddContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modals/ModalAddContact */ \"./src/components/Modals/ModalAddContact/index.tsx\");\n/* harmony import */ var _components_Modals_ModalAddEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modals/ModalAddEmail */ \"./src/components/Modals/ModalAddEmail/index.tsx\");\n/* harmony import */ var _components_Modals_ModalCreateContact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modals/ModalCreateContact */ \"./src/components/Modals/ModalCreateContact/index.tsx\");\n/* harmony import */ var _components_Modals_ModalEditUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Modals/ModalEditUser */ \"./src/components/Modals/ModalEditUser/index.tsx\");\n/* harmony import */ var _components_Modals_ModalUserContacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Modals/ModalUserContacts */ \"./src/components/Modals/ModalUserContacts/index.tsx\");\n/* harmony import */ var _components_Modals_ModalUserEmails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modals/ModalUserEmails */ \"./src/components/Modals/ModalUserEmails/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Client = (param)=>{\n    let { contacts, client, clientContacts, clientEmails } = param;\n    _s();\n    const [openEditUser, setOpenEditUser] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [openContacts, setOpenContacts] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [openEmails, setOpenEmails] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [openCreateContact, setOpenCreateContact] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [openAddContact, setOpenAddContact] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [openAddEmail, setOpenAddEmail] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex max-h-fit justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        openEditUser: setOpenEditUser,\n                        openContacts: setOpenContacts,\n                        openEmails: setOpenEmails,\n                        client: client\n                    }, void 0, false, {\n                        fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuContatos__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        openCreateContact: setOpenCreateContact,\n                        openAddContact: setOpenAddContact,\n                        openAddEmail: setOpenAddEmail,\n                        contacts: contacts\n                    }, void 0, false, {\n                        fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            openEditUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalEditUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                openModal: setOpenEditUser\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 54,\n                columnNumber: 33\n            }, undefined),\n            openContacts && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalUserContacts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                contacts: clientContacts,\n                openModal: setOpenContacts\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 57,\n                columnNumber: 33\n            }, undefined),\n            openEmails && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalUserEmails__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                emails: clientEmails,\n                openModal: setOpenEmails\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 60,\n                columnNumber: 31\n            }, undefined),\n            openCreateContact && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalCreateContact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                openModal: setOpenCreateContact\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 63,\n                columnNumber: 36\n            }, undefined),\n            openAddContact && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalAddContact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                openModal: setOpenAddContact\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 66,\n                columnNumber: 33\n            }, undefined),\n            openAddEmail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modals_ModalAddEmail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                openModal: setOpenAddEmail\n            }, void 0, false, {\n                fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/pages/client.tsx\",\n                lineNumber: 69,\n                columnNumber: 31\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Client, \"d/rkFiRKWV6DrShQVMyopW52xCc=\");\n_c = Client;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Client);\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2xpZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSTtBQUNhO0FBQ0o7QUFDVTtBQUNWO0FBQ1E7QUFDSjtBQUV0QjtBQWtCNUMsTUFBTVMsU0FBaUM7UUFBQyxFQUFDQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUM7O0lBQ3BGLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLG1CQUFtQkMscUJBQXFCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVqRCxxQkFDSTs7MEJBQ0ksOERBQUNrQjtnQkFBS0MsV0FBVTs7a0NBQ1osOERBQUMzQiw4REFBVUE7d0JBQ1BjLGNBQWNDO3dCQUNkQyxjQUFjQzt3QkFDZEMsWUFBWUM7d0JBQ1pSLFFBQVFBOzs7Ozs7a0NBRVosOERBQUNWLGdFQUFZQTt3QkFDVG1CLG1CQUFtQkM7d0JBQ25CQyxnQkFBZ0JDO3dCQUNoQkMsY0FBY0M7d0JBQ2RmLFVBQVVBOzs7Ozs7Ozs7Ozs7WUFLZEksOEJBQWdCLDhEQUFDVCx3RUFBYUE7Z0JBQUN1QixXQUFXYjs7Ozs7O1lBRzFDQyw4QkFBZ0IsOERBQUNWLDRFQUFpQkE7Z0JBQUNJLFVBQVVFO2dCQUFnQmdCLFdBQVdYOzs7Ozs7WUFHeEVDLDRCQUFjLDhEQUFDWCwwRUFBZUE7Z0JBQUNzQixRQUFRaEI7Z0JBQWNlLFdBQVdUOzs7Ozs7WUFHbEVDLG1DQUFxQiw4REFBQ2hCLDZFQUFrQkE7Z0JBQUN3QixXQUFXUDs7Ozs7O1lBR3BEQyxnQ0FBa0IsOERBQUNwQiwwRUFBZUE7Z0JBQUMwQixXQUFXTDs7Ozs7O1lBRzlDQyw4QkFBZ0IsOERBQUNyQix3RUFBYUE7Z0JBQUN5QixXQUFXSDs7Ozs7Ozs7QUFJeEQ7R0E3Q01oQjtLQUFBQTs7QUEwR04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NsaWVudC50c3g/MjcxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudUNsaWVudCBmcm9tIFwiQC9jb21wb25lbnRzL01lbnVDbGllbnRcIjtcbmltcG9ydCBNZW51Q29udGF0b3MgZnJvbSBcIkAvY29tcG9uZW50cy9NZW51Q29udGF0b3NcIjtcbmltcG9ydCBNb2RhbEFkZENvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbHMvTW9kYWxBZGRDb250YWN0XCI7XG5pbXBvcnQgTW9kYWxBZGRFbWFpbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9Nb2RhbEFkZEVtYWlsXCI7XG5pbXBvcnQgTW9kYWxDcmVhdGVDb250YWN0IGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxzL01vZGFsQ3JlYXRlQ29udGFjdFwiO1xuaW1wb3J0IE1vZGFsRWRpdFVzZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbHMvTW9kYWxFZGl0VXNlclwiO1xuaW1wb3J0IE1vZGFsVXNlckNvbnRhY3RzIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxzL01vZGFsVXNlckNvbnRhY3RzXCI7XG5pbXBvcnQgTW9kYWxVc2VyRW1haWxzIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxzL01vZGFsVXNlckVtYWlsc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzJ1xuaW1wb3J0IHsgaUNyZWF0ZUNvbnRhY3RSZXR1cm4gfSBmcm9tIFwiQC9zY2hlbWFzL2NyZWF0ZUNvbnRhY3Quc2NoZW1hXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IGljbGllbnRSZXR1cm4gfSBmcm9tIFwiQC9zY2hlbWFzL3JlZ2lzdGVyLnNjaGVtYVwiO1xuaW1wb3J0IHsgaUNsaWVudEFkZENvbnRhY3RSZXR1cm4gfSBmcm9tIFwiQC9zY2hlbWFzL2NsaWVudEFkZENvbnRhY3Quc2NoZW1hXCI7XG5pbXBvcnQgeyBpQ2xpZW50QWRkRW1haWxSZXR1cm4gfSBmcm9tIFwiQC9zY2hlbWFzL2NsaWVudEFkZEVtYWlsLnNjaGVtYVwiO1xuaW1wb3J0IHsgaUNvbnRhY3RBZGRQaG9uZVJldHVybiB9IGZyb20gXCJAL3NjaGVtYXMvY29udGFjdEFkZFBob25lLnNjaGVtYVwiO1xuXG5pbnRlcmZhY2UgaUNsaWVudFByb3BzIHtcbiAgICBjb250YWN0czogaUNyZWF0ZUNvbnRhY3RSZXR1cm5bXSxcbiAgICBjbGllbnQ6IGljbGllbnRSZXR1cm4sXG4gICAgY2xpZW50Q29udGFjdHM6IGlDbGllbnRBZGRDb250YWN0UmV0dXJuW10sXG4gICAgY2xpZW50RW1haWxzOiBpQ2xpZW50QWRkRW1haWxSZXR1cm5bXSxcbiAgICBjb250YWN0Q29udGFjdHM6IChpZDogc3RyaW5nKSA9PiBQcm9taXNlPGlDb250YWN0QWRkUGhvbmVSZXR1cm5bXSB8IHVuZGVmaW5lZCB8IHZvaWQ+LFxufVxuXG5jb25zdCBDbGllbnQ6IE5leHRQYWdlPGlDbGllbnRQcm9wcz4gPSAoe2NvbnRhY3RzLCBjbGllbnQsIGNsaWVudENvbnRhY3RzLCBjbGllbnRFbWFpbHN9KSA9PiB7XG4gICAgY29uc3QgW29wZW5FZGl0VXNlciwgc2V0T3BlbkVkaXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtvcGVuQ29udGFjdHMsIHNldE9wZW5Db250YWN0c10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbb3BlbkVtYWlscywgc2V0T3BlbkVtYWlsc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbb3BlbkNyZWF0ZUNvbnRhY3QsIHNldE9wZW5DcmVhdGVDb250YWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtvcGVuQWRkQ29udGFjdCwgc2V0T3BlbkFkZENvbnRhY3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW29wZW5BZGRFbWFpbCwgc2V0T3BlbkFkZEVtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWF4LWgtZml0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxNZW51Q2xpZW50XG4gICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0VXNlcj17c2V0T3BlbkVkaXRVc2VyfVxuICAgICAgICAgICAgICAgICAgICBvcGVuQ29udGFjdHM9e3NldE9wZW5Db250YWN0c31cbiAgICAgICAgICAgICAgICAgICAgb3BlbkVtYWlscz17c2V0T3BlbkVtYWlsc31cbiAgICAgICAgICAgICAgICAgICAgY2xpZW50PXtjbGllbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TWVudUNvbnRhdG9zXG4gICAgICAgICAgICAgICAgICAgIG9wZW5DcmVhdGVDb250YWN0PXtzZXRPcGVuQ3JlYXRlQ29udGFjdH1cbiAgICAgICAgICAgICAgICAgICAgb3BlbkFkZENvbnRhY3Q9e3NldE9wZW5BZGRDb250YWN0fVxuICAgICAgICAgICAgICAgICAgICBvcGVuQWRkRW1haWw9e3NldE9wZW5BZGRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgY29udGFjdHM9e2NvbnRhY3RzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGVuRWRpdFVzZXIgJiYgPE1vZGFsRWRpdFVzZXIgb3Blbk1vZGFsPXtzZXRPcGVuRWRpdFVzZXJ9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdHMgJiYgPE1vZGFsVXNlckNvbnRhY3RzIGNvbnRhY3RzPXtjbGllbnRDb250YWN0c30gb3Blbk1vZGFsPXtzZXRPcGVuQ29udGFjdHN9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGVuRW1haWxzICYmIDxNb2RhbFVzZXJFbWFpbHMgZW1haWxzPXtjbGllbnRFbWFpbHN9IG9wZW5Nb2RhbD17c2V0T3BlbkVtYWlsc30vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvcGVuQ3JlYXRlQ29udGFjdCAmJiA8TW9kYWxDcmVhdGVDb250YWN0IG9wZW5Nb2RhbD17c2V0T3BlbkNyZWF0ZUNvbnRhY3R9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3BlbkFkZENvbnRhY3QgJiYgPE1vZGFsQWRkQ29udGFjdCBvcGVuTW9kYWw9e3NldE9wZW5BZGRDb250YWN0fS8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9wZW5BZGRFbWFpbCAmJiA8TW9kYWxBZGRFbWFpbCBvcGVuTW9kYWw9e3NldE9wZW5BZGRFbWFpbH0vPlxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpOiBQcm9taXNlPEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdDx7IFtrZXk6IHN0cmluZ106IGFueTsgfT4+ID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gbm9va2llcy5nZXQoY3R4KVxuICAgIFxuICAgIGlmICghY29va2llc1tcImNvbnRhY3RndWFyZC50b2tlblwiXSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBbY29udGFjdHNDbGllbnQsIHNldENvbnRhY3RzQ2xpZW50XSA9IHVzZVN0YXRlKFtdIGFzIGlDcmVhdGVDb250YWN0UmV0dXJuW10pXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10gYXMgaUNyZWF0ZUNvbnRhY3RSZXR1cm5bXSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ29udGFjdHMoKSB7XG4gICAgICAgICAgICBhd2FpdCBhcGkuZ2V0PGlDcmVhdGVDb250YWN0UmV0dXJuW10+KGBjb250YWN0cy8ke2Nvb2tpZXNbXCJjb250YWN0Z3VhcmQuaWRcIl19YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbXCJjb250YWN0Z3VhcmQudG9rZW5cIl19YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4gc2V0TGlzdChyZXMuZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gc2V0Q29udGFjdHNDbGllbnQoW10pKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQ29udGFjdHMoKVxuXG4gICAgfSwgW10pXG5cblxuICAgIGNvbnN0IHJlc3BvbnNlQ2xpZW50ID0gYXdhaXQgYXBpLmdldDxpY2xpZW50UmV0dXJuPihgY2xpZW50cy8ke2Nvb2tpZXNbXCJjb250YWN0Z3VhcmQuaWRcIl19YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1tcImNvbnRhY3RndWFyZC50b2tlblwiXX1gXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcmVzQ2xpZW50Q29udGFjdHMgPSBhd2FpdCBhcGkuZ2V0PGlDbGllbnRBZGRDb250YWN0UmV0dXJuW10+KGBjbGllbnQtdGVsZXBob25lLyR7Y29va2llc1tcImNvbnRhY3RndWFyZC5pZFwiXX1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzW1wiY29udGFjdGd1YXJkLnRva2VuXCJdfWBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZXNDbGllbnRFbWFpbHMgPSBhd2FpdCBhcGkuZ2V0PGlDbGllbnRBZGRFbWFpbFJldHVybltdPihgY2xpZW50LWVtYWlsLyR7Y29va2llc1tcImNvbnRhY3RndWFyZC5pZFwiXX1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzW1wiY29udGFjdGd1YXJkLnRva2VuXCJdfWBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29udGFjdHM6IGNvbnRhY3RzQ2xpZW50LCBcbiAgICAgICAgICAgIGNsaWVudDogcmVzcG9uc2VDbGllbnQuZGF0YSwgXG4gICAgICAgICAgICBjbGllbnRDb250YWN0czogcmVzQ2xpZW50Q29udGFjdHMuZGF0YSwgXG4gICAgICAgICAgICBjbGllbnRFbWFpbHM6IHJlc0NsaWVudEVtYWlscy5kYXRhLFxuICAgICAgICB9XG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IENsaWVudFxuIl0sIm5hbWVzIjpbIk1lbnVDbGllbnQiLCJNZW51Q29udGF0b3MiLCJNb2RhbEFkZENvbnRhY3QiLCJNb2RhbEFkZEVtYWlsIiwiTW9kYWxDcmVhdGVDb250YWN0IiwiTW9kYWxFZGl0VXNlciIsIk1vZGFsVXNlckNvbnRhY3RzIiwiTW9kYWxVc2VyRW1haWxzIiwidXNlU3RhdGUiLCJDbGllbnQiLCJjb250YWN0cyIsImNsaWVudCIsImNsaWVudENvbnRhY3RzIiwiY2xpZW50RW1haWxzIiwib3BlbkVkaXRVc2VyIiwic2V0T3BlbkVkaXRVc2VyIiwib3BlbkNvbnRhY3RzIiwic2V0T3BlbkNvbnRhY3RzIiwib3BlbkVtYWlscyIsInNldE9wZW5FbWFpbHMiLCJvcGVuQ3JlYXRlQ29udGFjdCIsInNldE9wZW5DcmVhdGVDb250YWN0Iiwib3BlbkFkZENvbnRhY3QiLCJzZXRPcGVuQWRkQ29udGFjdCIsIm9wZW5BZGRFbWFpbCIsInNldE9wZW5BZGRFbWFpbCIsIm1haW4iLCJjbGFzc05hbWUiLCJvcGVuTW9kYWwiLCJlbWFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/client.tsx\n"));

/***/ })

});