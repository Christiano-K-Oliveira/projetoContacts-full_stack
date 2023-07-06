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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactContext: function() { return /* binding */ ContactContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContactContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nconst ContactProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n    const token = cookies[\"contactguard.token\"];\n    const idClient = cookies[\"contactguard.id\"];\n    const [moreContacts, setMoreContacts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const [contactId, setContactId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(String);\n    const [moreEmails, setMoreEmails] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const createContact = async (contactData)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contacts\", contactData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n    };\n    const excludeContact = async (id)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contacts/\".concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).catch((err)=>console.log(err));\n    };\n    const addMoreContact = async (contactData)=>{\n        contactData[\"contact_id\"] = contactId;\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contact-telephone\", contactData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreContactsInMyContact(contactId);\n        router.replace(router.asPath);\n    };\n    const addMoreEmail = async (emailData)=>{\n        emailData[\"contact_id\"] = contactId;\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"contact-email\", emailData, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreEmailsInMyContact(contactId);\n        router.replace(router.asPath);\n    };\n    const excludeMoreEmail = async (emailID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contact-email/\".concat(emailID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreEmailsInMyContact(contactId);\n        if (moreEmails.length === 1) {\n            setMoreEmails([]);\n        }\n        router.replace(router.asPath);\n    };\n    const excludeMoreContact = async (contactID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.delete(\"contact-telephone/\".concat(contactID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        getMoreContactsInMyContact(contactId);\n        if (moreContacts.length === 1) {\n            setMoreContacts([]);\n        }\n        router.replace(router.asPath);\n    };\n    const getMoreContactsInMyContact = async (contactID)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.get(\"contact-telephone/\".concat(contactID), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).then((res)=>{\n            setMoreContacts(res.data);\n        }).catch(()=>{\n            setMoreContacts([]);\n        });\n        setContactId(contactID);\n    };\n    const getMoreEmailsInMyContact = async (contactId)=>{\n        await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.get(\"contact-email/\".concat(contactId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).then((res)=>{\n            setMoreEmails(res.data);\n        }).catch(()=>{\n            setMoreEmails([]);\n        });\n        setContactId(contactId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactContext.Provider, {\n        value: {\n            createContact,\n            excludeContact,\n            addMoreContact,\n            addMoreEmail,\n            excludeMoreEmail,\n            excludeMoreContact,\n            getMoreContactsInMyContact,\n            moreContacts,\n            getMoreEmailsInMyContact,\n            moreEmails\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/christiano/Kenzie/projetoContacts-full_stack/front/src/contexts/contactContext.tsx\",\n        lineNumber: 133,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ContactProvider, \"xX7UXvYmNWd0Ipz0umUolRhnK9o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContactProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactProvider);\nvar _c;\n$RefreshReg$(_c, \"ContactProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCwyQkFBMkIsT0FBT3hCO1FBQ3RDLE1BQU1kLDhDQUFHQSxDQUFDNEMsSUFBOEIsaUJBQTJCLE9BQVY5QixZQUFhO1lBQ3BFUyxTQUFTO2dCQUNQQyxlQUFlLFVBQWdCLE9BQU5mO1lBQzNCO1FBQ0YsR0FBR29DLEtBQUssQ0FBQ0M7WUFDUDVCLGNBQWM0QixJQUFJQztRQUNwQixHQUFHbkIsTUFBTTtZQUNQVixjQUFjLEVBQUU7UUFDbEI7UUFFQUgsYUFBYUQ7SUFDZjtJQUVBLHFCQUNJLDhEQUFDVCxlQUFlMkM7UUFDZEMsT0FBTztZQUNMN0I7WUFDQUs7WUFDQU87WUFDQUk7WUFDQUc7WUFDQUc7WUFDQVQ7WUFDQXRCO1lBQ0EyQjtZQUNBckI7UUFDRjtrQkFFQ1Y7Ozs7OztBQUdYO0dBekhNRDs7UUFPYUwsa0RBQVNBOzs7S0FQdEJLO0FBMkhOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9jb250YWN0Q29udGV4dC50c3g/MWJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpQ29udGFjdEFkZEVtYWlsLCBpQ29udGFjdEFkZEVtYWlsUmV0dXJuIH0gZnJvbSBcIkAvc2NoZW1hcy9jb250YWN0QWRkRW1haWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBpQ29udGFjdEFkZFBob25lLCBpQ29udGFjdEFkZFBob25lUmV0dXJuIH0gZnJvbSBcIkAvc2NoZW1hcy9jb250YWN0QWRkUGhvbmUuc2NoZW1hXCI7XG5pbXBvcnQgeyBpQ3JlYXRlQ29udGFjdCB9IGZyb20gXCJAL3NjaGVtYXMvY3JlYXRlQ29udGFjdC5zY2hlbWFcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBib29sZWFuLCBzdHJpbmcgfSBmcm9tIFwiem9kXCI7XG5cbmludGVyZmFjZSBpQ29udGFjdFByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBpQ29udGFjdENvbnRleHQge1xuICAgIGNyZWF0ZUNvbnRhY3Q6IChjb250YWN0RGF0YTogaUNyZWF0ZUNvbnRhY3QpID0+IFByb21pc2U8dm9pZD47XG4gICAgZXhjbHVkZUNvbnRhY3Q6IChpZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGFkZE1vcmVDb250YWN0OiAoY29udGFjdERhdGE6IGlDb250YWN0QWRkUGhvbmUpID0+IFByb21pc2U8dm9pZD47XG4gICAgYWRkTW9yZUVtYWlsOiAoZW1haWxEYXRhOiBpQ29udGFjdEFkZEVtYWlsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGV4Y2x1ZGVNb3JlRW1haWw6IChlbWFpbElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgZXhjbHVkZU1vcmVDb250YWN0OiAoY29udGFjdElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gICAgZ2V0TW9yZUNvbnRhY3RzSW5NeUNvbnRhY3Q6IChjb250YWN0SWQ6IHN0cmluZykgPT4gUHJvbWlzZTxpQ29udGFjdEFkZFBob25lUmV0dXJuW10gfCB2b2lkPjtcbiAgICBtb3JlQ29udGFjdHM6IGlDb250YWN0QWRkUGhvbmVSZXR1cm5bXTtcbiAgICBnZXRNb3JlRW1haWxzSW5NeUNvbnRhY3Q6IChjb250YWN0SWQ6IHN0cmluZykgPT4gUHJvbWlzZTxpQ29udGFjdEFkZEVtYWlsUmV0dXJuW10gfCB2b2lkPjtcbiAgICBtb3JlRW1haWxzOiBpQ29udGFjdEFkZEVtYWlsUmV0dXJuW107XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgaUNvbnRhY3RDb250ZXh0KTtcblxuY29uc3QgQ29udGFjdFByb3ZpZGVyID0gKHtjaGlsZHJlbn06IGlDb250YWN0UHJvdmlkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKVxuICAgIGNvbnN0IHRva2VuID0gY29va2llc1tcImNvbnRhY3RndWFyZC50b2tlblwiXVxuICAgIGNvbnN0IGlkQ2xpZW50ID0gY29va2llc1tcImNvbnRhY3RndWFyZC5pZFwiXVxuICAgIGNvbnN0IFttb3JlQ29udGFjdHMsIHNldE1vcmVDb250YWN0c109IHVzZVN0YXRlKEFycmF5PGlDb250YWN0QWRkUGhvbmVSZXR1cm4+KVxuICAgIGNvbnN0IFtjb250YWN0SWQsIHNldENvbnRhY3RJZF0gPSB1c2VTdGF0ZShTdHJpbmcpXG4gICAgY29uc3QgW21vcmVFbWFpbHMsIHNldE1vcmVFbWFpbHNdPSB1c2VTdGF0ZShBcnJheTxpQ29udGFjdEFkZEVtYWlsUmV0dXJuPilcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9IGFzeW5jIChjb250YWN0RGF0YTogaUNyZWF0ZUNvbnRhY3QpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5wb3N0KCdjb250YWN0cycsIGNvbnRhY3REYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgXG4gICAgfVxuICAgIGNvbnN0IGV4Y2x1ZGVDb250YWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGF3YWl0IGFwaS5kZWxldGUoYGNvbnRhY3RzLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgIH1cbiAgICBjb25zdCBhZGRNb3JlQ29udGFjdCA9IGFzeW5jIChjb250YWN0RGF0YTogaUNvbnRhY3RBZGRQaG9uZSkgPT4ge1xuICAgICAgY29udGFjdERhdGFbXCJjb250YWN0X2lkXCJdID0gY29udGFjdElkXG4gIFxuICAgICAgYXdhaXQgYXBpLnBvc3QoXCJjb250YWN0LXRlbGVwaG9uZVwiLCBjb250YWN0RGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBnZXRNb3JlQ29udGFjdHNJbk15Q29udGFjdChjb250YWN0SWQpXG4gICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKVxuICAgIH1cbiAgICBjb25zdCBhZGRNb3JlRW1haWwgPSBhc3luYyAoZW1haWxEYXRhOiBpQ29udGFjdEFkZEVtYWlsKSA9PiB7XG4gICAgICBlbWFpbERhdGFbXCJjb250YWN0X2lkXCJdID0gY29udGFjdElkXG5cbiAgICAgIGF3YWl0IGFwaS5wb3N0KFwiY29udGFjdC1lbWFpbFwiLCBlbWFpbERhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0KGNvbnRhY3RJZClcbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpXG4gICAgfVxuICAgIGNvbnN0IGV4Y2x1ZGVNb3JlRW1haWwgPSBhc3luYyAoZW1haWxJRDogc3RyaW5nKSA9PiB7XG4gICAgICBhd2FpdCBhcGkuZGVsZXRlKGBjb250YWN0LWVtYWlsLyR7ZW1haWxJRH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOmBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGdldE1vcmVFbWFpbHNJbk15Q29udGFjdChjb250YWN0SWQpXG4gICAgICBpZiAobW9yZUVtYWlscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2V0TW9yZUVtYWlscyhbXSlcbiAgICAgIH1cbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpXG4gICAgfVxuICAgIGNvbnN0IGV4Y2x1ZGVNb3JlQ29udGFjdCA9IGFzeW5jIChjb250YWN0SUQ6IHN0cmluZykgPT4ge1xuICAgICAgYXdhaXQgYXBpLmRlbGV0ZShgY29udGFjdC10ZWxlcGhvbmUvJHtjb250YWN0SUR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBnZXRNb3JlQ29udGFjdHNJbk15Q29udGFjdChjb250YWN0SWQpXG4gICAgICBpZiAobW9yZUNvbnRhY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzZXRNb3JlQ29udGFjdHMoW10pXG4gICAgICB9XG4gICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKVxuICAgIH1cblxuICAgIGNvbnN0IGdldE1vcmVDb250YWN0c0luTXlDb250YWN0ID0gYXN5bmMgKGNvbnRhY3RJRDogc3RyaW5nKTogUHJvbWlzZTxpQ29udGFjdEFkZFBob25lUmV0dXJuW10gfCB2b2lkPiA9PiB7XG4gICAgICAgIGF3YWl0IGFwaS5nZXQ8aUNvbnRhY3RBZGRQaG9uZVJldHVybltdPihgY29udGFjdC10ZWxlcGhvbmUvJHtjb250YWN0SUR9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRNb3JlQ29udGFjdHMocmVzLmRhdGEpXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBzZXRNb3JlQ29udGFjdHMoW10pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0Q29udGFjdElkKGNvbnRhY3RJRClcbiAgICB9XG4gICAgY29uc3QgZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0ID0gYXN5bmMgKGNvbnRhY3RJZDogc3RyaW5nKTogUHJvbWlzZTxpQ29udGFjdEFkZEVtYWlsUmV0dXJuW10gfCB2b2lkPiA9PiB7XG4gICAgICBhd2FpdCBhcGkuZ2V0PGlDb250YWN0QWRkRW1haWxSZXR1cm5bXT4oYGNvbnRhY3QtZW1haWwvJHtjb250YWN0SWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldE1vcmVFbWFpbHMocmVzLmRhdGEpXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldE1vcmVFbWFpbHMoW10pXG4gICAgICB9KVxuICAgICAgXG4gICAgICBzZXRDb250YWN0SWQoY29udGFjdElkKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFjdENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdCxcbiAgICAgICAgICAgIGV4Y2x1ZGVDb250YWN0LFxuICAgICAgICAgICAgYWRkTW9yZUNvbnRhY3QsXG4gICAgICAgICAgICBhZGRNb3JlRW1haWwsXG4gICAgICAgICAgICBleGNsdWRlTW9yZUVtYWlsLFxuICAgICAgICAgICAgZXhjbHVkZU1vcmVDb250YWN0LFxuICAgICAgICAgICAgZ2V0TW9yZUNvbnRhY3RzSW5NeUNvbnRhY3QsXG4gICAgICAgICAgICBtb3JlQ29udGFjdHMsXG4gICAgICAgICAgICBnZXRNb3JlRW1haWxzSW5NeUNvbnRhY3QsXG4gICAgICAgICAgICBtb3JlRW1haWxzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFjdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UHJvdmlkZXJcbiJdLCJuYW1lcyI6WyJhcGkiLCJ1c2VSb3V0ZXIiLCJwYXJzZUNvb2tpZXMiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDb250YWN0Q29udGV4dCIsIkNvbnRhY3RQcm92aWRlciIsImNoaWxkcmVuIiwiY29va2llcyIsInRva2VuIiwiaWRDbGllbnQiLCJtb3JlQ29udGFjdHMiLCJzZXRNb3JlQ29udGFjdHMiLCJBcnJheSIsImNvbnRhY3RJZCIsInNldENvbnRhY3RJZCIsIlN0cmluZyIsIm1vcmVFbWFpbHMiLCJzZXRNb3JlRW1haWxzIiwicm91dGVyIiwiY3JlYXRlQ29udGFjdCIsImNvbnRhY3REYXRhIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXhjbHVkZUNvbnRhY3QiLCJpZCIsImRlbGV0ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZE1vcmVDb250YWN0IiwiZ2V0TW9yZUNvbnRhY3RzSW5NeUNvbnRhY3QiLCJyZXBsYWNlIiwiYXNQYXRoIiwiYWRkTW9yZUVtYWlsIiwiZW1haWxEYXRhIiwiZ2V0TW9yZUVtYWlsc0luTXlDb250YWN0IiwiZXhjbHVkZU1vcmVFbWFpbCIsImVtYWlsSUQiLCJsZW5ndGgiLCJleGNsdWRlTW9yZUNvbnRhY3QiLCJjb250YWN0SUQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/contactContext.tsx\n"));

/***/ })

});