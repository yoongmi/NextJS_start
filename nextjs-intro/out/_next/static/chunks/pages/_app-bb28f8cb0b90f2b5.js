(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1126)}])},8019:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),o=n(357),i=n.n(o),s=n(1664),u=n.n(s),a=n(1163);function l(){var e=(0,a.useRouter)();return(0,r.jsxs)("nav",{className:"jsx-788837601a257030",children:[(0,r.jsx)("img",{src:"/vercel.svg",className:"jsx-788837601a257030"}),(0,r.jsxs)("div",{className:"jsx-788837601a257030",children:[(0,r.jsx)(u(),{href:"/",children:(0,r.jsx)("a",{className:"jsx-788837601a257030 "+(("/"===e.pathname?"active":"")||""),children:"Home"})}),(0,r.jsx)(u(),{href:"#",children:(0,r.jsx)("a",{className:"jsx-788837601a257030 "+(("/movies/[...params]"===e.pathname?"active":"")||""),children:"Detail"})})]}),(0,r.jsx)(i(),{id:"788837601a257030",children:"nav.jsx-788837601a257030{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:20px;padding-bottom:10px;-webkit-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;-moz-box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px;box-shadow:rgba(50,50,93,.25)0px 50px 100px -20px,rgba(0,0,0,.3)0px 30px 60px -30px}img.jsx-788837601a257030{max-width:100px;margin-bottom:5px}nav.jsx-788837601a257030 a.jsx-788837601a257030{font-weight:600;font-size:18px}.active.jsx-788837601a257030{color:tomato}nav.jsx-788837601a257030 div.jsx-788837601a257030{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}"})]})}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,s=o(n(7294)),u=n(6273),a=n(2725),l=n(3462),c=n(1018),f=n(7190),d=n(1210),p=n(8684),h={};function v(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var m=s.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,y=e.children,_=e.prefetch,x=e.passHref,g=e.replace,b=e.shallow,S=e.scroll,j=e.locale,w=e.onClick,C=e.onMouseEnter,R=e.onTouchStart,T=e.legacyBehavior,k=void 0===T?!0!==Boolean(!1):T,O=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,!k||"string"!==typeof n&&"number"!==typeof n||(n=s.default.createElement("a",null,n));var z=!1!==_,F=s.default.useContext(l.RouterContext),E=s.default.useContext(c.AppRouterContext);E&&(F=E);var L,M=s.default.useMemo((function(){var e=r(u.resolveHref(F,o,!0),2),t=e[0],n=e[1];return{href:t,as:m?u.resolveHref(F,m):n||t}}),[F,o,m]),P=M.href,A=M.as,N=s.default.useRef(P),I=s.default.useRef(A);k&&(L=s.default.Children.only(n));var B=k?L&&"object"===typeof L&&L.ref:t,Z=r(f.useIntersection({rootMargin:"200px"}),3),D=Z[0],H=Z[1],U=Z[2],q=s.default.useCallback((function(e){I.current===A&&N.current===P||(U(),I.current=A,N.current=P),D(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[A,B,P,U,D]);s.default.useEffect((function(){var e=H&&z&&u.isLocalURL(P),t="undefined"!==typeof j?j:F&&F.locale,n=h[P+"%"+A+(t?"%"+t:"")];e&&!n&&v(F,P,A,{locale:t})}),[A,P,H,j,z,F]);var K={ref:q,onClick:function(e){k||"function"!==typeof w||w(e),k&&L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?s.default.startTransition(d):d()}}(e,F,P,A,g,b,S,j,Boolean(E),z)},onMouseEnter:function(e){k||"function"!==typeof C||C(e),k&&L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),!z&&E||u.isLocalURL(P)&&v(F,P,A,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof R||R(e),k&&L.props&&"function"===typeof L.props.onTouchStart&&L.props.onTouchStart(e),!z&&E||u.isLocalURL(P)&&v(F,P,A,{priority:!0})}};if(!k||x||"a"===L.type&&!("href"in L.props)){var G="undefined"!==typeof j?j:F&&F.locale,X=F&&F.isLocaleDomain&&d.getDomainLocale(A,G,F.locales,F.domainLocales);K.href=X||p.addBasePath(a.addLocale(A,G,F&&F.defaultLocale))}return k?s.default.cloneElement(L,K):s.default.createElement("a",Object.assign({},O,K),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!s,c=r(o.useState(!1),2),f=c[0],d=c[1],p=r(o.useState(null),2),h=p[0],v=p[1];o.useEffect((function(){if(s){if(l||f)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},a.push(n),u.set(n,t),t}(n),o=r.id,i=r.observer,s=r.elements;return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),u.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(h,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[h,l,n,t,f]);var m=o.useCallback((function(){d(!1)}),[]);return[v,f,m]};var o=n(7294),i=n(9311),s="function"===typeof IntersectionObserver,u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var s=r.default.createContext(null);t.GlobalLayoutRouterContext=s;var u=r.default.createContext(null);t.TemplateContext=u},1045:function(e,t,n){var r=n(3454),o=n(7294);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=i(o);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a="undefined"!==typeof r&&r.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){var e,t,n,r=function(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?a:o;f(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",f("boolean"===typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null},o=r.prototype;return o.setOptimizeForSpeed=function(e){f("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(f(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(f(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];f(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},o.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];f(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},o.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]},o.cssRules=function(){var e=this;return this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},o.makeStyleTag=function(e,t,n){t&&f(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},e=r,(t=[{key:"length",get:function(){return this._rulesCount}}])&&u(e.prototype,t),n&&u(e,n),r}();function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},p={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return p[r]||(p[r]="jsx-"+d(e+"-"+n)),p[r]}function v(e,t){var n=e+t;return p[n]||(p[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[n]}var m=function(){var e=function(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return s.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=h(r,n);return{styleId:o,rules:Array.isArray(t)?t.map((function(e){return v(o,e)})):[v(o,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var y=o.createContext(null);function _(){return new m}function x(){return o.useContext(y)}y.displayName="StyleSheetContext";var g=s.default.useInsertionEffect||s.default.useLayoutEffect,b=_();function S(e){var t=b||x();return t?(g((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}S.dynamic=function(e){return e.map((function(e){return h(e[0],e[1])})).join(" ")},t.style=S},357:function(e,t,n){"use strict";e.exports=n(1045).style},1126:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),s=n(8019);function u(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)("div",{children:t})]})}n(906);function a(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(u,{children:(0,i.jsx)(t,o({},n))})}},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,a=[],l=!1,c=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):c=-1,a.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++c<t;)u&&u[c].run();c=-1,t=a.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);