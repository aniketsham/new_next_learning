"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/get-messages/route";
exports.ids = ["app/api/get-messages/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_aniketsharma_Dropbox_Mac_Desktop_Learning_mystryapp_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get-messages/route.ts */ \"(rsc)/./src/app/api/get-messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-messages/route\",\n        pathname: \"/api/get-messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-messages/route\"\n    },\n    resolvedPagePath: \"/Users/aniketsharma/Dropbox/Mac/Desktop/Learning/mystryapp/src/app/api/get-messages/route.ts\",\n    nextConfigOutput,\n    userland: _Users_aniketsharma_Dropbox_Mac_Desktop_Learning_mystryapp_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/get-messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtbWVzc2FnZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFuaWtldHNoYXJtYSUyRkRyb3Bib3glMkZNYWMlMkZEZXNrdG9wJTJGTGVhcm5pbmclMkZteXN0cnlhcHAlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYW5pa2V0c2hhcm1hJTJGRHJvcGJveCUyRk1hYyUyRkRlc2t0b3AlMkZMZWFybmluZyUyRm15c3RyeWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEM7QUFDekg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0cnlhcHAvP2Y0N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FuaWtldHNoYXJtYS9Ecm9wYm94L01hYy9EZXNrdG9wL0xlYXJuaW5nL215c3RyeWFwcC9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldC1tZXNzYWdlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0LW1lc3NhZ2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FuaWtldHNoYXJtYS9Ecm9wYm94L01hYy9EZXNrdG9wL0xlYXJuaW5nL215c3RyeWFwcC9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                try {\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"no user found with email\");\n                    }\n                    if (!user.isVerified) {\n                        throw new Error(\"User should be verified first\");\n                    }\n                    const isPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPassword) {\n                        console.log(\"user details\");\n                        console.log(user);\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect Password\");\n                    }\n                } catch (error) {\n                    throw new Error(error);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString();\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            console.log(\"token values\");\n            console.log(token);\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id;\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            console.log(\"session\");\n            console.log(session);\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/signin\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXT_AUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFFckM7QUFDVztBQUNGO0FBRS9CLE1BQU1JLGNBQTRCO0lBQ3JDQyxXQUFVO1FBQ05MLDJFQUFtQkEsQ0FBQztZQUNoQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQVk7Z0JBQ1JDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07b0JBQVFDLGFBQWE7Z0JBQVM7Z0JBQzdEQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBRUEsTUFBTUcsV0FBVU4sV0FBZTtnQkFDM0IsTUFBTU4sMERBQVNBO2dCQUNmLElBQUk7b0JBQ0EsTUFBTWEsT0FBSyxNQUFNWixvREFBU0EsQ0FBQ2EsT0FBTyxDQUFDO3dCQUMvQkMsS0FBSTs0QkFDQTtnQ0FBQ1IsT0FBTUQsWUFBWVUsVUFBVTs0QkFBQTs0QkFDN0I7Z0NBQUNDLFVBQVNYLFlBQVlVLFVBQVU7NEJBQUE7eUJBRW5DO29CQUNMO29CQUVBLElBQUcsQ0FBQ0gsTUFBSzt3QkFDTCxNQUFNLElBQUlLLE1BQU87b0JBQ3JCO29CQUNBLElBQUcsQ0FBQ0wsS0FBS00sVUFBVSxFQUFDO3dCQUNoQixNQUFNLElBQUlELE1BQU07b0JBQ3BCO29CQUNBLE1BQU1FLGFBQVcsTUFBTXJCLHVEQUFjLENBQUNPLFlBQVlLLFFBQVEsRUFBQ0UsS0FBS0YsUUFBUTtvQkFDeEUsSUFBR1MsWUFBVzt3QkFDVkUsUUFBUUMsR0FBRyxDQUFDO3dCQUNaRCxRQUFRQyxHQUFHLENBQUNWO3dCQUNaLE9BQU9BO29CQUNYLE9BQ0k7d0JBQ0EsTUFBTSxJQUFJSyxNQUFNO29CQUNwQjtnQkFDSixFQUFFLE9BQU9NLE9BQVc7b0JBQ2hCLE1BQU0sSUFBSU4sTUFBTU07Z0JBQ3BCO1lBQ0o7UUFDSjtLQUdIO0lBQ0RDLFdBQVU7UUFDTixNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWQsSUFBSSxFQUFFO1lBRXJCLElBQUdBLE1BQUs7Z0JBQ0pjLE1BQU1DLEdBQUcsR0FBQ2YsS0FBS2UsR0FBRyxFQUFFQztnQkFDcEJGLE1BQU1SLFVBQVUsR0FBQ04sS0FBS00sVUFBVTtnQkFDaENRLE1BQU1HLG1CQUFtQixHQUFDakIsS0FBS2lCLG1CQUFtQjtnQkFDbERILE1BQU1WLFFBQVEsR0FBQ0osS0FBS0ksUUFBUTtZQUNoQztZQUNBSyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDSTtZQUNaLE9BQU9BO1FBQ1Q7UUFDRixNQUFNSSxTQUFRLEVBQUVBLE9BQU8sRUFBRUosS0FBSyxFQUFFO1lBRTVCLElBQUdBLE9BQU07Z0JBQ0xJLFFBQVFsQixJQUFJLENBQUNlLEdBQUcsR0FBQ0QsTUFBTUMsR0FBRztnQkFDMUJHLFFBQVFsQixJQUFJLENBQUNNLFVBQVUsR0FBQ1EsTUFBTVIsVUFBVTtnQkFDeENZLFFBQVFsQixJQUFJLENBQUNpQixtQkFBbUIsR0FBQ0gsTUFBTUcsbUJBQW1CO2dCQUMxREMsUUFBUWxCLElBQUksQ0FBQ0ksUUFBUSxHQUFDVSxNQUFNVixRQUFRO1lBQ3hDO1lBQ0FLLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNRO1lBQ1osT0FBT0E7UUFDVDtJQUVOO0lBQ0FDLE9BQU07UUFDRkMsUUFBTztJQUNYO0lBQ0FGLFNBQVE7UUFDSkcsVUFBUztJQUNiO0lBQ0FDLFFBQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBQ3ZDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0cnlhcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cz9hMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL2RiQ29ubmVjdFwiO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6TmV4dEF1dGhPcHRpb25zPXtcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczp7XG4gICAgICAgICAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczphbnkpOlByb21pc2U8YW55PntcbiAgICAgICAgICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI9YXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJG9yOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1haWw6Y3JlZGVudGlhbHMuaWRlbnRpZmllcn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJuYW1lOmNyZWRlbnRpYWxzLmlkZW50aWZpZXJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZighdXNlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKFwibm8gdXNlciBmb3VuZCB3aXRoIGVtYWlsXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIXVzZXIuaXNWZXJpZmllZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIHNob3VsZCBiZSB2ZXJpZmllZCBmaXJzdFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmQ9YXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsdXNlci5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQYXNzd29yZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgZGV0YWlsc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBQYXNzd29yZFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIF0sXG4gICAgY2FsbGJhY2tzOntcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuXG4gICAgICAgICAgICBpZih1c2VyKXtcbiAgICAgICAgICAgICAgICB0b2tlbi5faWQ9dXNlci5faWQ/LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB0b2tlbi5pc1ZlcmlmaWVkPXVzZXIuaXNWZXJpZmllZFxuICAgICAgICAgICAgICAgIHRva2VuLmlzQWNjZXB0aW5nTWVzc2FnZXM9dXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzXG4gICAgICAgICAgICAgICAgdG9rZW4udXNlcm5hbWU9dXNlci51c2VybmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiB2YWx1ZXNcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcblxuICAgICAgICAgICAgaWYodG9rZW4pe1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5faWQ9dG9rZW4uX2lkXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzVmVyaWZpZWQ9dG9rZW4uaXNWZXJpZmllZFxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzPXRva2VuLmlzQWNjZXB0aW5nTWVzc2FnZXNcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWU9dG9rZW4udXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvblwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbilcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcbiAgICB9LFxuICAgIHBhZ2VzOntcbiAgICAgICAgc2lnbkluOicvc2lnbmluJ1xuICAgIH0sXG4gICAgc2Vzc2lvbjp7XG4gICAgICAgIHN0cmF0ZWd5Olwiand0XCJcbiAgICB9LFxuICAgIHNlY3JldDpwcm9jZXNzLmVudi5ORVhUX0FVVEhfU0VDUkVUXG59Il0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJkYkNvbm5lY3QiLCJVc2VyTW9kZWwiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCIkb3IiLCJpZGVudGlmaWVyIiwidXNlcm5hbWUiLCJFcnJvciIsImlzVmVyaWZpZWQiLCJpc1Bhc3N3b3JkIiwiY29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiX2lkIiwidG9TdHJpbmciLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9BVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get-messages/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/get-messages/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n\n\n\n\n\nasync function GET(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_options__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    const user = session?.user;\n    if (!session || !session.user) {\n        return Response.json({\n            success: false,\n            message: \"Not Authenticated \"\n        }, {\n            status: 401\n        });\n    }\n    const userId = new (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types).ObjectId(user._id);\n    try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aggregate([\n            {\n                $match: {\n                    _id: userId\n                }\n            },\n            {\n                $unwind: \"$messages\"\n            },\n            {\n                $sort: {\n                    \"messages.createdAt\": -1\n                }\n            },\n            {\n                $group: {\n                    _id: \"$_id\",\n                    messages: {\n                        $push: \"$messages\"\n                    }\n                }\n            }\n        ]).exec();\n        console.log(\"getting message\");\n        console.log(user);\n        if (!user || user.length === 0) {\n            return Response.json({\n                success: false,\n                message: \"No Messages Available \"\n            }, {\n                status: 401\n            });\n        }\n        return Response.json({\n            success: true,\n            messages: user[0].messages\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(\"Unexpected Error occured\", error);\n        return Response.json({\n            success: false,\n            message: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDYjtBQUM0QjtBQUNwQjtBQUNGO0FBSS9CLGVBQWVLLElBQUlDLE9BQWU7SUFDckMsTUFBTUgsMERBQVNBO0lBQ2YsTUFBTUksVUFBUSxNQUFNUCwyREFBZ0JBLENBQUNFLCtEQUFXQTtJQUNoRCxNQUFNTSxPQUFXRCxTQUFTQztJQUUxQixJQUFHLENBQUNELFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxFQUFDO1FBQ3pCLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUNqQkMsU0FBUTtZQUNSQyxTQUFRO1FBQ1osR0FDSjtZQUNJQyxRQUFPO1FBQ1g7SUFDQTtJQUVBLE1BQU1DLFNBQU8sSUFBSWIsdURBQWMsQ0FBQ2UsUUFBUSxDQUFDUixLQUFLUyxHQUFHO0lBRWpELElBQUk7UUFDQSxNQUFNVCxPQUFPLE1BQU1KLG9EQUFTQSxDQUFDYyxTQUFTLENBQUM7WUFDbkM7Z0JBQUVDLFFBQVE7b0JBQUVGLEtBQUtIO2dCQUFPO1lBQUU7WUFDMUI7Z0JBQUVNLFNBQVM7WUFBWTtZQUN2QjtnQkFBRUMsT0FBTztvQkFBRSxzQkFBc0IsQ0FBQztnQkFBRTtZQUFFO1lBQ3RDO2dCQUFFQyxRQUFRO29CQUFFTCxLQUFLO29CQUFRTSxVQUFVO3dCQUFFQyxPQUFPO29CQUFZO2dCQUFFO1lBQUU7U0FDN0QsRUFBRUMsSUFBSTtRQUNUQyxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDbkI7UUFDWixJQUFHLENBQUNBLFFBQVFBLEtBQUtvQixNQUFNLEtBQUcsR0FBRTtZQUN4QixPQUFPbkIsU0FBU0MsSUFBSSxDQUFDO2dCQUNqQkMsU0FBUTtnQkFDUkMsU0FBUTtZQUNaLEdBQ0o7Z0JBQ0lDLFFBQU87WUFDWDtRQUNBO1FBRUEsT0FBT0osU0FBU0MsSUFBSSxDQUFDO1lBQ2pCQyxTQUFRO1lBQ1JZLFVBQVNmLElBQUksQ0FBQyxFQUFFLENBQUNlLFFBQVE7UUFDN0IsR0FDQTtZQUNJVixRQUFPO1FBQ1g7SUFDSixFQUFFLE9BQU9nQixPQUFPO1FBQ1pILFFBQVFDLEdBQUcsQ0FBQyw0QkFBMkJFO1FBQ3ZDLE9BQU9wQixTQUFTQyxJQUFJLENBQUM7WUFDakJDLFNBQVE7WUFDUkMsU0FBUTtRQUNaLEdBQ0E7WUFDSUMsUUFBTztRQUNYO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RyeWFwcC8uL3NyYy9hcHAvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZS50cz8zOTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9uc1wiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvZGJDb25uZWN0XCI7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCJuZXh0LWF1dGhcIlxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDpSZXF1ZXN0KXtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKVxuICAgIGNvbnN0IHNlc3Npb249YXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgICBjb25zdCB1c2VyOlVzZXI9IHNlc3Npb24/LnVzZXJcblxuICAgIGlmKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpe1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTpcIk5vdCBBdXRoZW50aWNhdGVkIFwiXG4gICAgICAgIH0sXG4gICAge1xuICAgICAgICBzdGF0dXM6NDAxXG4gICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB1c2VySWQ9bmV3IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkKHVzZXIuX2lkKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5hZ2dyZWdhdGUoW1xuICAgICAgICAgICAgeyAkbWF0Y2g6IHsgX2lkOiB1c2VySWQgfSB9LFxuICAgICAgICAgICAgeyAkdW53aW5kOiAnJG1lc3NhZ2VzJyB9LFxuICAgICAgICAgICAgeyAkc29ydDogeyAnbWVzc2FnZXMuY3JlYXRlZEF0JzogLTEgfSB9LFxuICAgICAgICAgICAgeyAkZ3JvdXA6IHsgX2lkOiAnJF9pZCcsIG1lc3NhZ2VzOiB7ICRwdXNoOiAnJG1lc3NhZ2VzJyB9IH0gfSxcbiAgICAgICAgICBdKS5leGVjKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBtZXNzYWdlXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIGlmKCF1c2VyIHx8IHVzZXIubGVuZ3RoPT09MCl7XG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczpmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlwiTm8gTWVzc2FnZXMgQXZhaWxhYmxlIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdGF0dXM6NDAxXG4gICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOnRydWUsXG4gICAgICAgICAgICBtZXNzYWdlczp1c2VyWzBdLm1lc3NhZ2VzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1czoyMDBcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVuZXhwZWN0ZWQgRXJyb3Igb2NjdXJlZFwiLGVycm9yKVxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTpcIkludGVybmFsIFNlcnZlciBFcnJvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1czo1MDBcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJtb25nb29zZSIsImF1dGhPcHRpb25zIiwiZGJDb25uZWN0IiwiVXNlck1vZGVsIiwiR0VUIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwiUmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwiX2lkIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJHVud2luZCIsIiRzb3J0IiwiJGdyb3VwIiwibWVzc2FnZXMiLCIkcHVzaCIsImV4ZWMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get-messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Already Connected to Database\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL || \"\", {});\n        console.log(db);\n        console.log(db.connections);\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"DB Connected Succesfully\");\n    } catch (error) {\n        console.log(\"Database Connection failed\", error);\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFPL0IsTUFBTUMsYUFBNEIsQ0FFbEM7QUFFQSxlQUFlQztJQUNQLElBQUdELFdBQVdFLFdBQVcsRUFBQztRQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUk7UUFDQSxNQUFNQyxLQUFHLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxJQUFHLENBQUM7UUFDL0ROLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWkYsUUFBUUMsR0FBRyxDQUFDQyxHQUFHSyxXQUFXO1FBQzFCVixXQUFXRSxXQUFXLEdBQUNHLEdBQUdLLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7UUFDbkRSLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixFQUFFLE9BQU9RLE9BQU87UUFDWlQsUUFBUUMsR0FBRyxDQUFDLDhCQUE2QlE7UUFDekNMLFFBQVFNLElBQUksQ0FBQztJQUNqQjtBQUNSO0FBR0EsaUVBQWVaLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0cnlhcHAvLi9zcmMvbGliL2RiQ29ubmVjdC50cz82MGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG50eXBlIENvbm5lY3Rpb25PYmplY3Q9e1xuaXNDb25uZWN0ZWQ/Om51bWJlclxufVxuXG5cbmNvbnN0IGNvbm5lY3Rpb246Q29ubmVjdGlvbk9iamVjdD17XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCk6UHJvbWlzZTx2b2lkPntcbiAgICAgICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgQ29ubmVjdGVkIHRvIERhdGFiYXNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGI9YXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCB8fCBcIlwiLHt9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYi5jb25uZWN0aW9ucylcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQ9ZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQiBDb25uZWN0ZWQgU3VjY2VzZnVsbHlcIilcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGlvbiBmYWlsZWRcIixlcnJvcilcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgICAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now()\n    }\n});\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,\n            \"please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify code Required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"verify code expiry is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBU2pELE1BQU1FLGdCQUE4QixJQUFJRCw0Q0FBTUEsQ0FBQztJQUMzQ0UsU0FBUTtRQUNKQyxNQUFLQztRQUNMQyxVQUFTO0lBQ2I7SUFDQUMsV0FBVTtRQUNOSCxNQUFLSTtRQUNMRixVQUFTO1FBQ1RHLFNBQVFELEtBQUtFLEdBQUc7SUFDcEI7QUFDSjtBQWNBLE1BQU1DLGFBQXdCLElBQUlWLDRDQUFNQSxDQUFDO0lBQ3JDVyxVQUFTO1FBQ0xSLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQztZQUFLO1NBQXVCO0lBQzFDO0lBQ0FPLE9BQU07UUFDRlQsTUFBS0M7UUFDTEMsVUFBUztZQUFDO1lBQUs7U0FBb0I7UUFDbkNRLFFBQU87UUFDUEMsT0FBTTtZQUFDO1lBQXlJO1NBQW1DO0lBQ3ZMO0lBQ0FDLFVBQVM7UUFDTFosTUFBS0M7UUFDTEMsVUFBUztZQUFDO1lBQUs7U0FBdUI7SUFDMUM7SUFDQVcsWUFBVztRQUNQYixNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBSztTQUF1QjtJQUUxQztJQUNBWSxrQkFBaUI7UUFDYmQsTUFBS0k7UUFDTEYsVUFBUztZQUFDO1lBQUs7U0FBaUM7SUFFcEQ7SUFDQWEsWUFBVztRQUNQZixNQUFLZ0I7UUFDTFgsU0FBUTtJQUNaO0lBQ0FZLHFCQUFvQjtRQUNoQmpCLE1BQUtnQjtRQUNMWCxTQUFRO0lBQ1o7SUFDQWEsVUFBVTtRQUFDcEI7S0FBYztBQUU3QjtBQUVBLE1BQU1xQixZQUFXLHdEQUFnQixDQUFDRSxJQUFJLElBQTZCekIscURBQWMsQ0FBTyxRQUFPVztBQUUvRixpRUFBZVksU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RyeWFwcC8uL3NyYy9tb2RlbHMvVXNlci50cz8wOTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSx7U2NoZW1hLERvY3VtZW50fSBmcm9tIFwibW9uZ29vc2VcIlxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2UgZXh0ZW5kcyBEb2N1bWVudHtcbiAgICBjb250ZW50OnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6RGF0ZSxcblxufVxuXG5cbmNvbnN0IE1lc3NhZ2VTY2hlbWE6U2NoZW1hPE1lc3NhZ2U+PW5ldyBTY2hlbWEoe1xuICAgIGNvbnRlbnQ6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlZEF0OntcbiAgICAgICAgdHlwZTpEYXRlLFxuICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0OkRhdGUubm93KClcbiAgICB9XG59KVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIgZXh0ZW5kcyBEb2N1bWVudHtcbiAgICB1c2VybmFtZTpzdHJpbmcsXG4gICAgZW1haWw6c3RyaW5nLFxuICAgIHBhc3N3b3JkOnN0cmluZyxcbiAgICB2ZXJpZnlDb2RlOnN0cmluZyxcbiAgICB2ZXJpZnlDb2RlRXhwaXJ5OkRhdGU7XG4gICAgaXNWZXJpZmllZDpib29sZWFuO1xuICAgIGlzQWNjZXB0aW5nTWVzc2FnZXM6Ym9vbGVhbjtcbiAgICBtZXNzYWdlczpNZXNzYWdlW107XG5cbn1cblxuY29uc3QgdXNlclNjaGVtYTpTY2hlbWE8VXNlcj49bmV3IFNjaGVtYSh7XG4gICAgdXNlcm5hbWU6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiXVxuICAgIH0sXG4gICAgZW1haWw6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJFbWFpbCBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdW5pcXVlOnRydWUsXG4gICAgICAgIG1hdGNoOlsvW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/L2csXCJwbGVhc2UgdXNlIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiXVxuICAgIH0sXG4gICAgdmVyaWZ5Q29kZTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlZlcmlmeSBjb2RlIFJlcXVpcmVkXCJdXG5cbiAgICB9LFxuICAgIHZlcmlmeUNvZGVFeHBpcnk6e1xuICAgICAgICB0eXBlOkRhdGUsXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLFwidmVyaWZ5IGNvZGUgZXhwaXJ5IGlzIHJlcXVpcmVkXCJdXG5cbiAgICB9LFxuICAgIGlzVmVyaWZpZWQ6e1xuICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6ZmFsc2VcbiAgICB9LFxuICAgIGlzQWNjZXB0aW5nTWVzc2FnZXM6e1xuICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6dHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IFtNZXNzYWdlU2NoZW1hXSxcblxufSlcblxuY29uc3QgVXNlck1vZGVsPSAobW9uZ29vc2UubW9kZWxzLlVzZXIgYXMgbW9uZ29vc2UuTW9kZWw8VXNlcj4pIHx8IG1vbmdvb3NlLm1vZGVsPFVzZXI+KFwiVXNlclwiLHVzZXJTY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbFxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiTWVzc2FnZVNjaGVtYSIsImNvbnRlbnQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsImVtYWlsIiwidW5pcXVlIiwibWF0Y2giLCJwYXNzd29yZCIsInZlcmlmeUNvZGUiLCJ2ZXJpZnlDb2RlRXhwaXJ5IiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwibWVzc2FnZXMiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@opentelemetry","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fmystryapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();