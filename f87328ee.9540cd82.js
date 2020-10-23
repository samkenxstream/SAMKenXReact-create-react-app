/*! For license information please see f87328ee.9540cd82.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(114),n(113)),u={id:"adding-a-stylesheet",title:"Adding a Stylesheet",sidebar_label:"Adding Stylesheets"},c={unversionedId:"adding-a-stylesheet",id:"adding-a-stylesheet",isDocsHomePage:!1,title:"Adding a Stylesheet",description:"This project setup uses webpack for handling all assets. webpack offers a custom way of \u201cextending\u201d the concept of import beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to import the CSS from the JavaScript file:",source:"@site/../docs/adding-a-stylesheet.md",slug:"/adding-a-stylesheet",permalink:"/docs/adding-a-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-a-stylesheet.md",version:"current",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,sidebar_label:"Adding Stylesheets",sidebar:"docs",previous:{title:"Using HTTPS in Development",permalink:"/docs/using-https-in-development"},next:{title:"Adding a CSS Modules Stylesheet",permalink:"/docs/adding-a-css-modules-stylesheet"}},i=[{value:"<code>Button.css</code>",id:"buttoncss",children:[]},{value:"<code>Button.js</code>",id:"buttonjs",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project setup uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack")," for handling all assets. webpack offers a custom way of \u201cextending\u201d the concept of ",Object(a.b)("inlineCode",{parentName:"p"},"import")," beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to ",Object(a.b)("strong",{parentName:"p"},"import the CSS from the JavaScript file"),":"),Object(a.b)("h2",{id:"buttoncss"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.css")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".Button {\n  padding: 20px;\n}\n")),Object(a.b)("h2",{id:"buttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport './Button.css'; // Tell webpack that Button.js uses these styles\n\nclass Button extends Component {\n  render() {\n    // You can use them as regular CSS styles\n    return <div className=\"Button\" />;\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This is not required for React")," but many people find this feature convenient. You can read about the benefits of this approach ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b"}),"here"),". However you should be aware that this makes your code less portable to other build tools and environments than webpack."),Object(a.b)("p",null,"In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified ",Object(a.b)("inlineCode",{parentName:"p"},".css")," file in the build output."),Object(a.b)("p",null,"If you are concerned about using webpack-specific semantics, you can put all your CSS right into ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.css"),". It would still be imported from ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.js"),", but you could always remove that import if you later migrate to a different build tool."))}s.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<a;l++)u[l]=n[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function O(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var S=w.prototype=new O;S.constructor=w,r(S,j.prototype),S.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,N=[];function $(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case u:c=!0}}if(c)return n(r,e,""===t?"."+I(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+I(o=e[i],i);c+=T(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)c+=T(o=o.value,l=t+I(o,i++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function A(e,t,n){return null==e?0:T(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),A(e,D,t=$(t,a,r,o)),R(t)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(h(321));return e}var J={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,B,t=$(null,null,t,n)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=u(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(i[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)a.call(n,c[f])&&(i[c[f]]=n[c[f]])}}return i}}}]);