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
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_aniketsharma_Dropbox_Mac_Desktop_Learning_nextauth_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"/Users/aniketsharma/Dropbox/Mac/Desktop/Learning/nextauth/src/app/api/users/signup/route.ts\",\n    nextConfigOutput,\n    userland: _Users_aniketsharma_Dropbox_Mac_Desktop_Learning_nextauth_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFuaWtldHNoYXJtYSUyRkRyb3Bib3glMkZNYWMlMkZEZXNrdG9wJTJGTGVhcm5pbmclMkZuZXh0YXV0aCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhbmlrZXRzaGFybWElMkZEcm9wYm94JTJGTWFjJTJGRGVza3RvcCUyRkxlYXJuaW5nJTJGbmV4dGF1dGgmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGgvP2ZiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FuaWtldHNoYXJtYS9Ecm9wYm94L01hYy9EZXNrdG9wL0xlYXJuaW5nL25leHRhdXRoL3NyYy9hcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYW5pa2V0c2hhcm1hL0Ryb3Bib3gvTWFjL0Rlc2t0b3AvTGVhcm5pbmcvbmV4dGF1dGgvc3JjL2FwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/mailer */ \"(rsc)/./src/helpers/mailer.ts\");\n\n\n\n\n\n// Connect to the database\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nconst POST = async (request)=>{\n    try {\n        const reqBody = await request.json();\n        const { username, email, password } = reqBody;\n        console.log(reqBody);\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"User Already Exists\"\n            }, {\n                status: 400\n            });\n        }\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        (0,_helpers_mailer__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            message: \"User created successfully\",\n            user: savedUser\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNWO0FBQ2tCO0FBQ3hCO0FBQ2E7QUFDN0MsMEJBQTBCO0FBQzFCQSw2REFBU0E7QUFFRixNQUFNSyxPQUFPLE9BQU9DO0lBQ3pCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7UUFDbEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO1FBRXRDSyxRQUFRQyxHQUFHLENBQUNOO1FBRVosTUFBTU8sT0FBTyxNQUFNYix5REFBSUEsQ0FBQ2MsT0FBTyxDQUFDO1lBQUVMO1FBQU07UUFFeEMsSUFBSUksTUFBTTtZQUNSLE9BQU9aLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFUSxPQUFPO1lBQXNCLEdBQy9CO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNQyxPQUFPLE1BQU1mLHVEQUFnQixDQUFDO1FBQ3BDLE1BQU1pQixpQkFBaUIsTUFBTWpCLG9EQUFhLENBQUNRLFVBQVVPO1FBRXJELE1BQU1JLFVBQVUsSUFBSXJCLHlEQUFJQSxDQUFDO1lBQ3ZCUTtZQUNBQztZQUNBQyxVQUFVUztRQUNaO1FBRUEsTUFBTUcsWUFBWSxNQUFNRCxRQUFRRSxJQUFJO1FBQ3BDWixRQUFRQyxHQUFHLENBQUNVO1FBRVpuQiwwREFBU0EsQ0FBQztZQUFDTTtZQUFNZSxXQUFVO1lBQVNDLFFBQU9ILFVBQVVJLEdBQUc7UUFBQTtRQUN4RCxPQUFPekIscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRW9CLFNBQVE7WUFBTUMsU0FBUztZQUE2QmYsTUFBTVM7UUFBVTtJQUcxRSxFQUFFLE9BQU9QLE9BQVk7UUFDbkIsT0FBT2QscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRVEsT0FBT0EsTUFBTWEsT0FBTztRQUFDLEdBQ3ZCO1lBQUVaLFFBQVE7UUFBSTtJQUVsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aC8uL3NyYy9hcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZS50cz8xNmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2RiQ29uZmlnL2RiQ29uZmlnXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlck1vZGVsXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSBcIkAvaGVscGVycy9tYWlsZXJcIjtcbi8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG5jb25uZWN0REIoKTtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxdWVzdDogTmV4dFJlcXVlc3QpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXFCb2R5O1xuXG4gICAgY29uc29sZS5sb2cocmVxQm9keSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIlVzZXIgQWxyZWFkeSBFeGlzdHNcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoMTApO1xuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0anMuaGFzaChwYXNzd29yZCwgc2FsdCk7XG5cbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xuICAgIGNvbnNvbGUubG9nKHNhdmVkVXNlcilcblxuICAgIHNlbmRFbWFpbCh7ZW1haWwsZW1haWxUeXBlOlwiVkVSSUZZXCIsdXNlcklkOnNhdmVkVXNlci5faWR9KVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2Vzczp0cnVlLCBtZXNzYWdlOiBcIlVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIiwgdXNlcjogc2F2ZWRVc2VyIH0sXG4gICAgIFxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXIiLCJOZXh0UmVzcG9uc2UiLCJiY3J5cHRqcyIsInNlbmRFbWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxQm9keSIsImpzb24iLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRPbmUiLCJlcnJvciIsInN0YXR1cyIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsInNhdmVkVXNlciIsInNhdmUiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJfaWQiLCJzdWNjZXNzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.ts":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"Mongo DB Connected\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"MongoDb Connection Error\" + err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ2xCLElBQUk7UUFDQUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUN0QyxNQUFNQyxhQUFXTiw0REFBbUI7UUFFcENNLFdBQVdDLEVBQUUsQ0FBQyxhQUFZO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFFQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVEsQ0FBQ0c7WUFDbkJGLFFBQVFDLEdBQUcsQ0FBQyw2QkFBMkJDO1lBQ3ZDUCxRQUFRUSxJQUFJO1FBQ2hCO0lBQ0osRUFBRSxPQUFPQyxPQUFPO1FBQ1pKLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDaEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vc3JjL2RiQ29uZmlnL2RiQ29uZmlnLnRzP2MwNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCl7XG4gICAgdHJ5IHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwhKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uPW1vbmdvb3NlLmNvbm5lY3Rpb25cblxuICAgICAgICBjb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvIERCIENvbm5lY3RlZFwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ2Vycm9yJywoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RiIENvbm5lY3Rpb24gRXJyb3JcIitlcnIpXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJleGl0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/mailer.ts":
/*!*******************************!*\
  !*** ./src/helpers/mailer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.ts\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n        if (emailType === \"VERIFY\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                $set: {\n                    verifyToken: hashedToken,\n                    verfiyTokenExpiry: Date.now() + 3600000\n                }\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                $set: {\n                    forgotPasswordToken: hashedToken,\n                    forgotPasswordExpiry: Date.now() + 3600000\n                }\n            });\n        }\n        // Looking to send emails in production? Check out our Email API/SMTP product!\n        var transport = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"61701273f2b271\",\n                pass: \"126bb7461a1eef\"\n            }\n        });\n        const mailOptions = {\n            from: \"anikets2408@gmail.com\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\",\n            html: `<p>Click  <a href=\"${process.env.DOMAIN}/verifyemail?token=${hashedToken}\">Here</a> to \n            ${emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\"} or copy paste the url in the browser<br/>\n            ${process.env.DOMAIN}/verifyEmail?token=${hashedToken}\n            </p>`\n        };\n        const mailResponse = await transport.sendMail(mailOptions);\n        return mailResponse;\n    } catch (error) {\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9tYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDSDtBQUNKO0FBQ3hCLE1BQU1HLFlBQVUsT0FBTSxFQUFDQyxLQUFLLEVBQUNDLFNBQVMsRUFBQ0MsTUFBTSxFQUFLO0lBQ3JELElBQUc7UUFDQyxNQUFNQyxjQUFZLE1BQU1MLG9EQUFhLENBQUNJLE9BQU9HLFFBQVEsSUFBRztRQUN4RCxJQUFHSixjQUFZLFVBQVM7WUFDcEIsTUFBTUwseURBQUlBLENBQUNVLGlCQUFpQixDQUFDSixRQUFPO2dCQUNoQ0ssTUFBSztvQkFDREMsYUFBWUw7b0JBQVlNLG1CQUFrQkMsS0FBS0MsR0FBRyxLQUFHO2dCQUV6RDtZQUNKO1FBQ0osT0FDSyxJQUFJVixjQUFZLFNBQVE7WUFDekIsTUFBTUwseURBQUlBLENBQUNVLGlCQUFpQixDQUFDSixRQUFPO2dCQUNoQ0ssTUFBSztvQkFDREsscUJBQW9CVDtvQkFBWVUsc0JBQXFCSCxLQUFLQyxHQUFHLEtBQUc7Z0JBRXBFO1lBQ0o7UUFDSjtRQUNBLDhFQUE4RTtRQUM5RSxJQUFJRyxZQUFZakIsdURBQTBCLENBQUM7WUFDL0NtQixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFDSkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1FBQ0Y7UUFFTSxNQUFNQyxjQUFZO1lBQ2RDLE1BQU07WUFDTkMsSUFBSXZCO1lBQ0p3QixTQUFTdkIsY0FBYyxXQUFXLHNCQUFvQjtZQUN0RHdCLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLEVBQUV6QixZQUFZO1lBQ2hGLEVBQUVGLGNBQWMsV0FBVyxzQkFBb0Isc0JBQXNCO1lBQ3JFLEVBQUV5QixRQUFRQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRXpCLFlBQVk7Z0JBQ2xELENBQUM7UUFDUDtRQUVBLE1BQU0wQixlQUFlLE1BQU1mLFVBQVVnQixRQUFRLENBQUNUO1FBQzlDLE9BQU9RO0lBQ2IsRUFDQSxPQUFNRSxPQUFVO1FBQ1osTUFBTSxJQUFJQyxNQUFNRCxNQUFNRSxPQUFPO0lBQ2pDO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vc3JjL2hlbHBlcnMvbWFpbGVyLnRzPzZjOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIlxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsPWFzeW5jKHtlbWFpbCxlbWFpbFR5cGUsdXNlcklkfTphbnkpPT57XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBoYXNoZWRUb2tlbj1hd2FpdCBiY3J5cHRqcy5oYXNoKHVzZXJJZC50b1N0cmluZygpLDEwKVxuICAgICAgICBpZihlbWFpbFR5cGU9PT1cIlZFUklGWVwiKXtcbiAgICAgICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLHtcbiAgICAgICAgICAgICAgICAkc2V0OntcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5VG9rZW46aGFzaGVkVG9rZW4sdmVyZml5VG9rZW5FeHBpcnk6RGF0ZS5ub3coKSszNjAwMDAwXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVtYWlsVHlwZT09PVwiUkVTRVRcIil7XG4gICAgICAgICAgICBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJJZCx7XG4gICAgICAgICAgICAgICAgJHNldDp7XG4gICAgICAgICAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46aGFzaGVkVG9rZW4sZm9yZ290UGFzc3dvcmRFeHBpcnk6RGF0ZS5ub3coKSszNjAwMDAwXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIExvb2tpbmcgdG8gc2VuZCBlbWFpbHMgaW4gcHJvZHVjdGlvbj8gQ2hlY2sgb3V0IG91ciBFbWFpbCBBUEkvU01UUCBwcm9kdWN0IVxuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIGhvc3Q6IFwic2FuZGJveC5zbXRwLm1haWx0cmFwLmlvXCIsXG4gICAgcG9ydDogMjUyNSxcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBcIjYxNzAxMjczZjJiMjcxXCIsXG4gICAgICBwYXNzOiBcIjEyNmJiNzQ2MWExZWVmXCJcbiAgICB9XG4gIH0pO1xuXG4gICAgICAgIGNvbnN0IG1haWxPcHRpb25zPXtcbiAgICAgICAgICAgIGZyb206ICdhbmlrZXRzMjQwOEBnbWFpbC5jb20nLCBcbiAgICAgICAgICAgIHRvOiBlbWFpbCxcbiAgICAgICAgICAgIHN1YmplY3Q6IGVtYWlsVHlwZSA9PT0gXCJWRVJJRllcIiA/IFwiVmVyaWZ5IHlvdXIgZW1haWxcIjpcIlJlc2V0IHlvdXIgcGFzc3dvcmRcIiwgXG4gICAgICAgICAgICBodG1sOiBgPHA+Q2xpY2sgIDxhIGhyZWY9XCIke3Byb2Nlc3MuZW52LkRPTUFJTn0vdmVyaWZ5ZW1haWw/dG9rZW49JHtoYXNoZWRUb2tlbn1cIj5IZXJlPC9hPiB0byBcbiAgICAgICAgICAgICR7ZW1haWxUeXBlID09PSBcIlZFUklGWVwiID8gXCJWZXJpZnkgeW91ciBlbWFpbFwiOlwiUmVzZXQgeW91ciBwYXNzd29yZFwifSBvciBjb3B5IHBhc3RlIHRoZSB1cmwgaW4gdGhlIGJyb3dzZXI8YnIvPlxuICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5ET01BSU59L3ZlcmlmeUVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XG4gICAgICAgICAgICA8L3A+YCwgLy8gaHRtbCBib2R5XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbWFpbFJlc3BvbnNlID0gYXdhaXQgdHJhbnNwb3J0LnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgICAgIHJldHVybiBtYWlsUmVzcG9uc2VcbiAgICB9XG4gICAgY2F0Y2goZXJyb3I6YW55KXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJVc2VyIiwibm9kZW1haWxlciIsImJjcnlwdGpzIiwic2VuZEVtYWlsIiwiZW1haWwiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJoYXNoZWRUb2tlbiIsImhhc2giLCJ0b1N0cmluZyIsImZpbmRCeUlkQW5kVXBkYXRlIiwiJHNldCIsInZlcmlmeVRva2VuIiwidmVyZml5VG9rZW5FeHBpcnkiLCJEYXRlIiwibm93IiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkRXhwaXJ5IiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwicHJvY2VzcyIsImVudiIsIkRPTUFJTiIsIm1haWxSZXNwb25zZSIsInNlbmRNYWlsIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.ts":
/*!*********************************!*\
  !*** ./src/models/userModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please Provide the username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please Provide the email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Provide the password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordExpiry: Date,\n    verifyToken: String,\n    verfiyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBVyxJQUFJRCx3REFBZSxDQUFDO0lBQ2pDRyxVQUFTO1FBQ0xDLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQztZQUFLO1NBQThCO1FBQzdDQyxRQUFPO0lBQ1g7SUFDQUMsT0FBTTtRQUNGSixNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBSztTQUEyQjtRQUMxQ0MsUUFBTztJQUNYO0lBQ0FFLFVBQVM7UUFDTEwsTUFBS0M7UUFDTEMsVUFBUztZQUFDO1lBQUs7U0FBOEI7SUFFakQ7SUFDQUksWUFBVztRQUNQTixNQUFLTztRQUNMQyxTQUFRO0lBQ1o7SUFDQUMscUJBQW9CUjtJQUNwQlMsc0JBQXFCQztJQUNyQkMsYUFBWVg7SUFDWlksbUJBQWtCRjtBQUN0QjtBQUVBLE1BQU1HLE9BQUtsQix3REFBZSxDQUFDb0IsS0FBSyxJQUFJcEIscURBQWMsQ0FBQyxTQUFRQztBQUUzRCxpRUFBZWlCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aC8uL3NyYy9tb2RlbHMvdXNlck1vZGVsLnRzPzM3OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1c2VyU2NoZW1hPW5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHVzZXJuYW1lOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLFwiUGxlYXNlIFByb3ZpZGUgdGhlIHVzZXJuYW1lXCJdLFxuICAgICAgICB1bmlxdWU6dHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJQbGVhc2UgUHJvdmlkZSB0aGUgZW1haWxcIl0sXG4gICAgICAgIHVuaXF1ZTp0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBsZWFzZSBQcm92aWRlIHRoZSBwYXNzd29yZFwiXSxcbiAgICAgXG4gICAgfSxcbiAgICBpc1ZlcmlmaWVkOntcbiAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OmZhbHNlXG4gICAgfSxcbiAgICBmb3Jnb3RQYXNzd29yZFRva2VuOlN0cmluZyxcbiAgICBmb3Jnb3RQYXNzd29yZEV4cGlyeTpEYXRlLFxuICAgIHZlcmlmeVRva2VuOlN0cmluZyxcbiAgICB2ZXJmaXlUb2tlbkV4cGlyeTpEYXRlXG59KVxuXG5jb25zdCBVc2VyPW1vbmdvb3NlLm1vZGVscy51c2VycyB8fCBtb25nb29zZS5tb2RlbChcInVzZXJzXCIsdXNlclNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRFeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJmaXlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsharma%2FDropbox%2FMac%2FDesktop%2FLearning%2Fnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();