function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function b(t,e,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function h(t){return c=t,f=setTimeout(w,e),l?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function w(){var t=v();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-a);return d?p(n,o-(t-c)):n}(t))}function T(t){return f=void 0,b&&i?g(t):(i=r=void 0,u)}function x(){var t=v(),n=j(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return h(a);if(d)return f=setTimeout(w,e),g(a)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(m(n.maxWait)||0,e):o,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:T(v())},x}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(t,e,{leading:i,maxWait:e,trailing:r})};const g=document.querySelector(".feedback-form");document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea");g.addEventListener("input",t(e)((function(t){localStorage.setItem("feedback-form-state",JSON.stringify(t.target.value))}),500)),g.addEventListener("submit",handleSubmit);
//# sourceMappingURL=03-feedback.e94282d5.js.map
