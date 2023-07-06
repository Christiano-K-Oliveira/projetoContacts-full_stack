"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/contactContext.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/contactContext.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactContext: function() { return /* binding */ ContactContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContactContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nconst ContactProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n    const token = cookies[\"contactguard.token\"];\n    const idClient = cookies[\"contactguard.id\"];\n    const [moreContacts, setMoreContacts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const [contactId, setContactId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(String);\n    const [moreEmails, setMoreEmails] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const createContact = async (contactData)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contacts\", contactData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        router.replace(router.asPath);\n    };\n    const excludeContact = async (id)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contacts/\".concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).catch((err)=>console.log(err));\n        router.replace(router.as);\n    };\n    const addMoreContact = async (contactData)=>{\n        contactData[\"contact_id\"] = contactId;\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contact-telephone\", contactData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreContactsInMyContact(contactId);\n        router.replace(router.asPath);\n    };\n    const addMoreEmail = async (emailData)=>{\n        emailData[\"contact_id\"] = contactId;\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contact-email\", emailData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreEmailsInMyContact(contactId);\n        router.replace(router.asPath);\n    };\n    const excludeMoreEmail = async (emailID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contact-email/\".concat(emailID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreEmailsInMyContact(contactId);\n        if (moreEmails.length === 1) {\n            setMoreEmails([]);\n        }\n        router.replace(router.asPath);\n    };\n    const excludeMoreContact = async (contactID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contact-telephone/\".concat(contactID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreContactsInMyContact(contactId);\n        if (moreContacts.length === 1) {\n            setMoreContacts([]);\n        }\n        router.replace(router.asPath);\n    };\n    const getMoreContactsInMyContact = async (contactID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.get(\"contact-telephone/\".concat(contactID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).then((res)=>{\n            setMoreContacts(res.data);\n        }).catch(()=>{\n            setMoreContacts([]);\n        });\n        setContactId(contactID);\n    };\n    const getMoreEmailsInMyContact = async (contactId)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.get(\"contact-email/\".concat(contactId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).then((res)=>{\n            setMoreEmails(res.data);\n        }).catch(()=>{\n            setMoreEmails([]);\n        });\n        setContactId(contactId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactContext.Provider, {\n        value: {\n            createContact,\n            excludeContact,\n            addMoreContact,\n            addMoreEmail,\n            excludeMoreEmail,\n            excludeMoreContact,\n            getMoreContactsInMyContact,\n            moreContacts,\n            getMoreEmailsInMyContact,\n            moreEmails\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/contexts/contactContext.tsx\",\n        lineNumber: 133,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ContactProvider, \"xX7UXvYmNWd0Ipz0umUolRhnK9o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContactProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactProvider);\nvar _c;\n$RefreshReg$(_c, \"ContactProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCLEVBQUU7UUFDcEI7UUFFQUcsYUFBYTZCO0lBQ2pCO0lBQ0EsTUFBTUwsMkJBQTJCLE9BQU96QjtRQUN0QyxNQUFNZCw4Q0FBR0EsQ0FBQzZDLElBQThCLGlCQUEyQixPQUFWL0IsWUFBYTtZQUNwRVMsU0FBUztnQkFDUEMsZUFBZSxVQUFnQixPQUFOZjtZQUMzQjtRQUNGLEdBQUdxQyxLQUFLLENBQUNDO1lBQ1A3QixjQUFjNkIsSUFBSUM7UUFDcEIsR0FBR2xCLE1BQU07WUFDUFosY0FBYyxFQUFFO1FBQ2xCO1FBRUFILGFBQWFEO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ1QsZUFBZTRDO1FBQ2RDLE9BQU87WUFDTDlCO1lBQ0FPO1lBQ0FRO1lBQ0FFO1lBQ0FHO1lBQ0FHO1lBQ0FQO1lBQ0F6QjtZQUNBNEI7WUFDQXRCO1FBQ0Y7a0JBRUNWOzs7Ozs7QUFHWDtHQXpITUQ7O1FBT2FMLGtEQUFTQTs7O0tBUHRCSztBQTJITiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvY29udGFjdENvbnRleHQudHN4PzFiYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaUNvbnRhY3RBZGRFbWFpbCwgaUNvbnRhY3RBZGRFbWFpbFJldHVybiB9IGZyb20gXCJAL3NjaGVtYXMvY29udGFjdEFkZEVtYWlsLnNjaGVtYVwiO1xuaW1wb3J0IHsgaUNvbnRhY3RBZGRQaG9uZSwgaUNvbnRhY3RBZGRQaG9uZVJldHVybiB9IGZyb20gXCJAL3NjaGVtYXMvY29udGFjdEFkZFBob25lLnNjaGVtYVwiO1xuaW1wb3J0IHsgaUNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiQC9zY2hlbWFzL2NyZWF0ZUNvbnRhY3Quc2NoZW1hXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYm9vbGVhbiwgc3RyaW5nIH0gZnJvbSBcInpvZFwiO1xuXG5pbnRlcmZhY2UgaUNvbnRhY3RQcm92aWRlclByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgaUNvbnRhY3RDb250ZXh0IHtcbiAgICBjcmVhdGVDb250YWN0OiAoY29udGFjdERhdGE6IGlDcmVhdGVDb250YWN0KSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGV4Y2x1ZGVDb250YWN0OiAoaWQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBhZGRNb3JlQ29udGFjdDogKGNvbnRhY3REYXRhOiBpQ29udGFjdEFkZFBob25lKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGFkZE1vcmVFbWFpbDogKGVtYWlsRGF0YTogaUNvbnRhY3RBZGRFbWFpbCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBleGNsdWRlTW9yZUVtYWlsOiAoZW1haWxJZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGV4Y2x1ZGVNb3JlQ29udGFjdDogKGNvbnRhY3RJZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGdldE1vcmVDb250YWN0c0luTXlDb250YWN0OiAoY29udGFjdElkOiBzdHJpbmcpID0+IFByb21pc2U8aUNvbnRhY3RBZGRQaG9uZVJldHVybltdIHwgdm9pZD47XG4gICAgbW9yZUNvbnRhY3RzOiBpQ29udGFjdEFkZFBob25lUmV0dXJuW107XG4gICAgZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0OiAoY29udGFjdElkOiBzdHJpbmcpID0+IFByb21pc2U8aUNvbnRhY3RBZGRFbWFpbFJldHVybltdIHwgdm9pZD47XG4gICAgbW9yZUVtYWlsczogaUNvbnRhY3RBZGRFbWFpbFJldHVybltdO1xufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIGlDb250YWN0Q29udGV4dCk7XG5cbmNvbnN0IENvbnRhY3RQcm92aWRlciA9ICh7Y2hpbGRyZW59OiBpQ29udGFjdFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKClcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXNbXCJjb250YWN0Z3VhcmQudG9rZW5cIl1cbiAgICBjb25zdCBpZENsaWVudCA9IGNvb2tpZXNbXCJjb250YWN0Z3VhcmQuaWRcIl1cbiAgICBjb25zdCBbbW9yZUNvbnRhY3RzLCBzZXRNb3JlQ29udGFjdHNdPSB1c2VTdGF0ZShBcnJheTxpQ29udGFjdEFkZFBob25lUmV0dXJuPilcbiAgICBjb25zdCBbY29udGFjdElkLCBzZXRDb250YWN0SWRdID0gdXNlU3RhdGUoU3RyaW5nKVxuICAgIGNvbnN0IFttb3JlRW1haWxzLCBzZXRNb3JlRW1haWxzXT0gdXNlU3RhdGUoQXJyYXk8aUNvbnRhY3RBZGRFbWFpbFJldHVybj4pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3QgPSBhc3luYyAoY29udGFjdERhdGE6IGlDcmVhdGVDb250YWN0KSA9PiB7XG4gICAgICBhd2FpdCBhcGkucG9zdCgnY29udGFjdHMnLCBjb250YWN0RGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpXG4gICAgfVxuICAgIGNvbnN0IGV4Y2x1ZGVDb250YWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5kZWxldGUoYGNvbnRhY3RzLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hcylcbiAgICB9XG4gICAgY29uc3QgYWRkTW9yZUNvbnRhY3QgPSBhc3luYyAoY29udGFjdERhdGE6IGlDb250YWN0QWRkUGhvbmUpID0+IHtcbiAgICAgIGNvbnRhY3REYXRhW1wiY29udGFjdF9pZFwiXSA9IGNvbnRhY3RJZFxuICBcbiAgICAgIGF3YWl0IGFwaS5wb3N0KFwiY29udGFjdC10ZWxlcGhvbmVcIiwgY29udGFjdERhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZ2V0TW9yZUNvbnRhY3RzSW5NeUNvbnRhY3QoY29udGFjdElkKVxuICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aClcbiAgICB9XG4gICAgY29uc3QgYWRkTW9yZUVtYWlsID0gYXN5bmMgKGVtYWlsRGF0YTogaUNvbnRhY3RBZGRFbWFpbCkgPT4ge1xuICAgICAgZW1haWxEYXRhW1wiY29udGFjdF9pZFwiXSA9IGNvbnRhY3RJZFxuXG4gICAgICBhd2FpdCBhcGkucG9zdChcImNvbnRhY3QtZW1haWxcIiwgZW1haWxEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOmBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGdldE1vcmVFbWFpbHNJbk15Q29udGFjdChjb250YWN0SWQpXG4gICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKVxuICAgIH1cbiAgICBjb25zdCBleGNsdWRlTW9yZUVtYWlsID0gYXN5bmMgKGVtYWlsSUQ6IHN0cmluZykgPT4ge1xuICAgICAgYXdhaXQgYXBpLmRlbGV0ZShgY29udGFjdC1lbWFpbC8ke2VtYWlsSUR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBnZXRNb3JlRW1haWxzSW5NeUNvbnRhY3QoY29udGFjdElkKVxuICAgICAgaWYgKG1vcmVFbWFpbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHNldE1vcmVFbWFpbHMoW10pXG4gICAgICB9XG4gICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKVxuICAgIH1cbiAgICBjb25zdCBleGNsdWRlTW9yZUNvbnRhY3QgPSBhc3luYyAoY29udGFjdElEOiBzdHJpbmcpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5kZWxldGUoYGNvbnRhY3QtdGVsZXBob25lLyR7Y29udGFjdElEfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZ2V0TW9yZUNvbnRhY3RzSW5NeUNvbnRhY3QoY29udGFjdElkKVxuICAgICAgaWYgKG1vcmVDb250YWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2V0TW9yZUNvbnRhY3RzKFtdKVxuICAgICAgfVxuICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRNb3JlQ29udGFjdHNJbk15Q29udGFjdCA9IGFzeW5jIChjb250YWN0SUQ6IHN0cmluZyk6IFByb21pc2U8aUNvbnRhY3RBZGRQaG9uZVJldHVybltdIHwgdm9pZD4gPT4ge1xuICAgICAgICBhd2FpdCBhcGkuZ2V0PGlDb250YWN0QWRkUGhvbmVSZXR1cm5bXT4oYGNvbnRhY3QtdGVsZXBob25lLyR7Y29udGFjdElEfWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgc2V0TW9yZUNvbnRhY3RzKHJlcy5kYXRhKVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgc2V0TW9yZUNvbnRhY3RzKFtdKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldENvbnRhY3RJZChjb250YWN0SUQpXG4gICAgfVxuICAgIGNvbnN0IGdldE1vcmVFbWFpbHNJbk15Q29udGFjdCA9IGFzeW5jIChjb250YWN0SWQ6IHN0cmluZyk6IFByb21pc2U8aUNvbnRhY3RBZGRFbWFpbFJldHVybltdIHwgdm9pZD4gPT4ge1xuICAgICAgYXdhaXQgYXBpLmdldDxpQ29udGFjdEFkZEVtYWlsUmV0dXJuW10+KGBjb250YWN0LWVtYWlsLyR7Y29udGFjdElkfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNb3JlRW1haWxzKHJlcy5kYXRhKVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRNb3JlRW1haWxzKFtdKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgc2V0Q29udGFjdElkKGNvbnRhY3RJZClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhY3RDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3QsXG4gICAgICAgICAgICBleGNsdWRlQ29udGFjdCxcbiAgICAgICAgICAgIGFkZE1vcmVDb250YWN0LFxuICAgICAgICAgICAgYWRkTW9yZUVtYWlsLFxuICAgICAgICAgICAgZXhjbHVkZU1vcmVFbWFpbCxcbiAgICAgICAgICAgIGV4Y2x1ZGVNb3JlQ29udGFjdCxcbiAgICAgICAgICAgIGdldE1vcmVDb250YWN0c0luTXlDb250YWN0LFxuICAgICAgICAgICAgbW9yZUNvbnRhY3RzLFxuICAgICAgICAgICAgZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0LFxuICAgICAgICAgICAgbW9yZUVtYWlscyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbnRhY3RDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFByb3ZpZGVyXG4iXSwibmFtZXMiOlsiYXBpIiwidXNlUm91dGVyIiwicGFyc2VDb29raWVzIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29udGFjdENvbnRleHQiLCJDb250YWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvb2tpZXMiLCJ0b2tlbiIsImlkQ2xpZW50IiwibW9yZUNvbnRhY3RzIiwic2V0TW9yZUNvbnRhY3RzIiwiQXJyYXkiLCJjb250YWN0SWQiLCJzZXRDb250YWN0SWQiLCJTdHJpbmciLCJtb3JlRW1haWxzIiwic2V0TW9yZUVtYWlscyIsInJvdXRlciIsImNyZWF0ZUNvbnRhY3QiLCJjb250YWN0RGF0YSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcGxhY2UiLCJhc1BhdGgiLCJleGNsdWRlQ29udGFjdCIsImlkIiwiZGVsZXRlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYXMiLCJhZGRNb3JlQ29udGFjdCIsImdldE1vcmVDb250YWN0c0luTXlDb250YWN0IiwiYWRkTW9yZUVtYWlsIiwiZW1haWxEYXRhIiwiZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0IiwiZXhjbHVkZU1vcmVFbWFpbCIsImVtYWlsSUQiLCJsZW5ndGgiLCJleGNsdWRlTW9yZUNvbnRhY3QiLCJjb250YWN0SUQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/contactContext.tsx\n"));

/***/ })

});