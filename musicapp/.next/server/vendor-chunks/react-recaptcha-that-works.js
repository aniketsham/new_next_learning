"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-recaptcha-that-works";
exports.ids = ["vendor-chunks/react-recaptcha-that-works"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-recaptcha-that-works/dist/Recaptcha.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-recaptcha-that-works/dist/Recaptcha.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nconst isReady = () => Boolean(typeof window === 'object'\n    // @ts-ignore\n    && window.grecaptcha\n    // @ts-ignore\n    && window.grecaptcha.render);\nconst Recaptcha = (0, react_1.forwardRef)(({ id = 'react-recaptcha-that-works', siteKey, size = 'normal', theme = 'light', onLoad = undefined, onVerify, onExpire = undefined, onError = undefined, onClose = undefined, }, ref) => {\n    const [ready, setReady] = (0, react_1.useState)(isReady());\n    const widgetRef = (0, react_1.useRef)();\n    const closeObserverRef = (0, react_1.useRef)();\n    const readyIntervalRef = (0, react_1.useRef)();\n    const isRendered = () => {\n        return typeof widgetRef.current === 'number';\n    };\n    const updateReadyState = () => {\n        if (isReady()) {\n            clearInterval(readyIntervalRef.current);\n            setReady(true);\n        }\n    };\n    const renderRecaptcha = () => {\n        // @ts-ignore\n        widgetRef.current = window.grecaptcha.render(id, {\n            sitekey: siteKey,\n            size,\n            theme,\n            callback: onVerify,\n            'expired-callback': onExpire,\n            'error-callback': onError,\n        });\n        onLoad?.();\n    };\n    (0, react_1.useEffect)(() => {\n        if (ready) {\n            renderRecaptcha();\n            return;\n        }\n        readyIntervalRef.current = setInterval(updateReadyState, 1000);\n        return () => clearInterval(readyIntervalRef.current);\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [ready]);\n    (0, react_1.useEffect)(() => {\n        if (ready && !isRendered()) {\n            renderRecaptcha();\n        }\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [ready]);\n    (0, react_1.useEffect)(() => {\n        return () => {\n            closeObserverRef.current?.disconnect();\n            if (isRendered()) {\n                // @ts-ignore\n                window.grecaptcha.reset(widgetRef.current);\n            }\n        };\n    }, []);\n    const registerOnCloseListener = (0, react_1.useCallback)(() => {\n        closeObserverRef.current?.disconnect();\n        const iframes = document.getElementsByTagName('iframe');\n        const recaptchaFrame = Array.prototype.find\n            .call(iframes, e => e.src.includes('google.com/recaptcha/api2/bframe'));\n        const recaptchaElement = recaptchaFrame.parentNode.parentNode;\n        let lastOpacity = recaptchaElement.style.opacity;\n        closeObserverRef.current = new MutationObserver(() => {\n            if (lastOpacity !== recaptchaElement.style.opacity\n                && recaptchaElement.style.opacity == 0) { // eslint-disable-line eqeqeq\n                onClose?.();\n            }\n            lastOpacity = recaptchaElement.style.opacity;\n        });\n        closeObserverRef.current.observe(recaptchaElement, {\n            attributes: true,\n            attributeFilter: ['style'],\n        });\n    }, [onClose]);\n    (0, react_1.useImperativeHandle)(ref, () => ({\n        execute: () => {\n            if (onClose) {\n                registerOnCloseListener();\n            }\n            // @ts-ignore\n            window.grecaptcha.execute(widgetRef.current);\n        },\n        reset: () => {\n            // @ts-ignore\n            window.grecaptcha.reset(widgetRef.current);\n        }\n    }), [onClose, registerOnCloseListener]);\n    return (react_1.default.createElement(\"span\", { id: id }));\n});\nexports[\"default\"] = Recaptcha;\n//# sourceMappingURL=Recaptcha.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVjYXB0Y2hhLXRoYXQtd29ya3MvZGlzdC9SZWNhcHRjaGEuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZCQUE2QixtQkFBTyxDQUFDLHdHQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNktBQTZLO0FBQzFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0RBQW9ELFFBQVE7QUFDNUQsQ0FBQztBQUNELGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY2FwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWNhcHRjaGEtdGhhdC13b3Jrcy9kaXN0L1JlY2FwdGNoYS5qcz9lM2E4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBpc1JlYWR5ID0gKCkgPT4gQm9vbGVhbih0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0J1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAmJiB3aW5kb3cuZ3JlY2FwdGNoYVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAmJiB3aW5kb3cuZ3JlY2FwdGNoYS5yZW5kZXIpO1xuY29uc3QgUmVjYXB0Y2hhID0gKDAsIHJlYWN0XzEuZm9yd2FyZFJlZikoKHsgaWQgPSAncmVhY3QtcmVjYXB0Y2hhLXRoYXQtd29ya3MnLCBzaXRlS2V5LCBzaXplID0gJ25vcm1hbCcsIHRoZW1lID0gJ2xpZ2h0Jywgb25Mb2FkID0gdW5kZWZpbmVkLCBvblZlcmlmeSwgb25FeHBpcmUgPSB1bmRlZmluZWQsIG9uRXJyb3IgPSB1bmRlZmluZWQsIG9uQ2xvc2UgPSB1bmRlZmluZWQsIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGlzUmVhZHkoKSk7XG4gICAgY29uc3Qgd2lkZ2V0UmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKSgpO1xuICAgIGNvbnN0IGNsb3NlT2JzZXJ2ZXJSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKCk7XG4gICAgY29uc3QgcmVhZHlJbnRlcnZhbFJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikoKTtcbiAgICBjb25zdCBpc1JlbmRlcmVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpZGdldFJlZi5jdXJyZW50ID09PSAnbnVtYmVyJztcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVJlYWR5U3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVhZHlJbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHNldFJlYWR5KHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJSZWNhcHRjaGEgPSAoKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2lkZ2V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuZ3JlY2FwdGNoYS5yZW5kZXIoaWQsIHtcbiAgICAgICAgICAgIHNpdGVrZXk6IHNpdGVLZXksXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgdGhlbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogb25WZXJpZnksXG4gICAgICAgICAgICAnZXhwaXJlZC1jYWxsYmFjayc6IG9uRXhwaXJlLFxuICAgICAgICAgICAgJ2Vycm9yLWNhbGxiYWNrJzogb25FcnJvcixcbiAgICAgICAgfSk7XG4gICAgICAgIG9uTG9hZD8uKCk7XG4gICAgfTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICByZW5kZXJSZWNhcHRjaGEoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkeUludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCh1cGRhdGVSZWFkeVN0YXRlLCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwocmVhZHlJbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtyZWFkeV0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocmVhZHkgJiYgIWlzUmVuZGVyZWQoKSkge1xuICAgICAgICAgICAgcmVuZGVyUmVjYXB0Y2hhKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtyZWFkeV0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VPYnNlcnZlclJlZi5jdXJyZW50Py5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBpZiAoaXNSZW5kZXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5ncmVjYXB0Y2hhLnJlc2V0KHdpZGdldFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmVnaXN0ZXJPbkNsb3NlTGlzdGVuZXIgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgICAgICBjbG9zZU9ic2VydmVyUmVmLmN1cnJlbnQ/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgY29uc3QgaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcbiAgICAgICAgY29uc3QgcmVjYXB0Y2hhRnJhbWUgPSBBcnJheS5wcm90b3R5cGUuZmluZFxuICAgICAgICAgICAgLmNhbGwoaWZyYW1lcywgZSA9PiBlLnNyYy5pbmNsdWRlcygnZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpMi9iZnJhbWUnKSk7XG4gICAgICAgIGNvbnN0IHJlY2FwdGNoYUVsZW1lbnQgPSByZWNhcHRjaGFGcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGxldCBsYXN0T3BhY2l0eSA9IHJlY2FwdGNoYUVsZW1lbnQuc3R5bGUub3BhY2l0eTtcbiAgICAgICAgY2xvc2VPYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGFjaXR5ICE9PSByZWNhcHRjaGFFbGVtZW50LnN0eWxlLm9wYWNpdHlcbiAgICAgICAgICAgICAgICAmJiByZWNhcHRjaGFFbGVtZW50LnN0eWxlLm9wYWNpdHkgPT0gMCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U/LigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdE9wYWNpdHkgPSByZWNhcHRjaGFFbGVtZW50LnN0eWxlLm9wYWNpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZU9ic2VydmVyUmVmLmN1cnJlbnQub2JzZXJ2ZShyZWNhcHRjaGFFbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10sXG4gICAgICAgIH0pO1xuICAgIH0sIFtvbkNsb3NlXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlSW1wZXJhdGl2ZUhhbmRsZSkocmVmLCAoKSA9PiAoe1xuICAgICAgICBleGVjdXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyT25DbG9zZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5leGVjdXRlKHdpZGdldFJlZi5jdXJyZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5ncmVjYXB0Y2hhLnJlc2V0KHdpZGdldFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH0pLCBbb25DbG9zZSwgcmVnaXN0ZXJPbkNsb3NlTGlzdGVuZXJdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGlkOiBpZCB9KSk7XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlY2FwdGNoYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlY2FwdGNoYS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-recaptcha-that-works/dist/Recaptcha.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-recaptcha-that-works/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-recaptcha-that-works/dist/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Recaptcha_1 = __importDefault(__webpack_require__(/*! ./Recaptcha */ \"(ssr)/./node_modules/react-recaptcha-that-works/dist/Recaptcha.js\"));\nexports[\"default\"] = Recaptcha_1.default;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVjYXB0Y2hhLXRoYXQtd29ya3MvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQyxtQkFBTyxDQUFDLHNGQUFhO0FBQ3pELGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY2FwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWNhcHRjaGEtdGhhdC13b3Jrcy9kaXN0L2luZGV4LmpzPzYxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWNhcHRjaGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9SZWNhcHRjaGFcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVjYXB0Y2hhXzEuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-recaptcha-that-works/dist/index.js\n");

/***/ })

};
;