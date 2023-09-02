/*! For license information please see 201.ffc6f763.chunk.js.LICENSE.txt */
(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[201],{1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3201:function(e,n,t){"use strict";t.d(n,{Z:function(){return vn}});var r=t(9439);function o(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function i(e,n){if(null==e)return{};var t,r,i=o(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=t(1413),s=t(1694),u=t.n(s),c=!("undefined"===typeof window||!window.document||!window.document.createElement),l=!1,f=!1;try{var d={get passive(){return l=!0},get once(){return f=l=!0}};c&&(window.addEventListener("test",d,d),window.removeEventListener("test",d,!0))}catch(hn){}var p=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!f){var o=r.once,i=r.capture,a=t;!f&&o&&(a=t.__once||function e(r){this.removeEventListener(n,e,i),t.call(this,r)},t.__once=a),e.addEventListener(n,a,l?r:i)}e.addEventListener(n,t,r)};function v(e){return e&&e.ownerDocument||document}var h,m=function(e,n,t,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)};function E(e){if((!h&&0!==h||e)&&c){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),h=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return h}var g=t(2791);var b=function(e){var n=(0,g.useRef)(e);return(0,g.useEffect)((function(){n.current=e}),[e]),n};function y(e){var n=b(e);return(0,g.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}var x=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};var O=function(e,n){return(0,g.useMemo)((function(){return function(e,n){var t=x(e),r=x(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])};function k(e){var n=function(e){var n=(0,g.useRef)(e);return n.current=e,n}(e);(0,g.useEffect)((function(){return function(){return n.current()}}),[])}function w(e,n){return function(e){var n=v(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var C=/([A-Z])/g;var N=/^ms-/;function R(e){return function(e){return e.replace(C,"-$1").toLowerCase()}(e).replace(N,"-ms-")}var S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var T=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(R(n))||w(e).getPropertyValue(R(n));Object.keys(n).forEach((function(o){var i=n[o];i||0===i?!function(e){return!(!e||!S.test(e))}(o)?t+=R(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(R(o))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t};var j=function(e,n,t,r){return p(e,n,t,r),function(){m(e,n,t,r)}};function Z(e,n,t){void 0===t&&(t=5);var r=!1,o=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(n,t,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),n+t),i=j(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function P(e,n,t,r){null==t&&(t=function(e){var n=T(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var o=Z(e,t,r),i=j(e,"transitionend",n);return function(){o(),i()}}function D(e){void 0===e&&(e=v());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(hn){return e.body}}function L(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var F=t(4164);var M=t(3433),B=t(4942),A=t(5671),_=t(3144);var H,I=(H="modal-open","".concat("data-rr-ui-").concat(H)),W=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,r=n.handleContainerOverflow,o=void 0===r||r,i=n.isRTL,a=void 0!==i&&i;(0,A.Z)(this,e),this.handleContainerOverflow=o,this.isRTL=a,this.modals=[],this.ownerDocument=t}return(0,_.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,B.Z)({overflow:r.style.overflow},t,r.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt(T(r,t)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(I,""),T(r,n)}},{key:"reset",value:function(){var e=this;(0,M.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(I),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),U=W,V=(0,g.createContext)(c?window:void 0);V.Provider;function K(){return(0,g.useContext)(V)}var z=function(e,n){return c?null==e?(n||v()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var $=function(e){var n=e.children,t=e.in,r=e.onExited,o=e.mountOnEnter,i=e.unmountOnExit,a=(0,g.useRef)(null),s=(0,g.useRef)(t),u=y(r);(0,g.useEffect)((function(){t?s.current=!0:u(a.current)}),[t,u]);var c=O(a,n.ref),l=(0,g.cloneElement)(n,{ref:c});return t?l:i||!s.current&&o?null:l},X=t(184);function Y(e){var n=e.children,t=e.in,o=e.onExited,i=e.onEntered,a=e.transition,s=(0,g.useState)(!t),u=(0,r.Z)(s,2),c=u[0],l=u[1];t&&c&&l(!1);var f=function(e){var n=e.in,t=e.onTransition,r=(0,g.useRef)(null),o=(0,g.useRef)(!0),i=y(t);return(0,g.useEffect)((function(){if(r.current){var e=!1;return i({in:n,element:r.current,initial:o.current,isStale:function(){return e}}),function(){e=!0}}}),[n,i]),(0,g.useEffect)((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(e){Promise.resolve(a(e)).then((function(){e.isStale()||(e.in?null==i||i(e.element,e.initial):(l(!0),null==o||o(e.element)))}),(function(n){throw e.in||l(!0),n}))}}),d=O(f,n.ref);return c&&!t?null:(0,g.cloneElement)(n,{ref:d})}function q(e,n,t){return e?(0,X.jsx)(e,Object.assign({},t)):n?(0,X.jsx)(Y,Object.assign({},t,{transition:n})):(0,X.jsx)($,Object.assign({},t))}var G,J=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Q(e){var n=K(),t=e||function(e){return G||(G=new U({ownerDocument:null==e?void 0:e.document})),G}(n),r=(0,g.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,g.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,g.useCallback)((function(e){r.current.backdrop=e}),[])})}var ee=(0,g.forwardRef)((function(e,n){var t=e.show,o=void 0!==t&&t,i=e.role,a=void 0===i?"dialog":i,s=e.className,u=e.style,l=e.children,f=e.backdrop,d=void 0===f||f,p=e.keyboard,v=void 0===p||p,h=e.onBackdropClick,m=e.onEscapeKeyDown,E=e.transition,b=e.runTransition,x=e.backdropTransition,O=e.runBackdropTransition,w=e.autoFocus,C=void 0===w||w,N=e.enforceFocus,R=void 0===N||N,S=e.restoreFocus,T=void 0===S||S,Z=e.restoreFocusOptions,P=e.renderDialog,M=e.renderBackdrop,B=void 0===M?function(e){return(0,X.jsx)("div",Object.assign({},e))}:M,A=e.manager,_=e.container,H=e.onShow,I=e.onHide,W=void 0===I?function(){}:I,U=e.onExit,V=e.onExited,$=e.onExiting,Y=e.onEnter,G=e.onEntering,ee=e.onEntered,ne=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,J),te=function(e,n){var t=K(),o=(0,g.useState)((function(){return z(e,null==t?void 0:t.document)})),i=(0,r.Z)(o,2),a=i[0],s=i[1];if(!a){var u=z(e);u&&s(u)}return(0,g.useEffect)((function(){n&&a&&n(a)}),[n,a]),(0,g.useEffect)((function(){var n=z(e);n!==a&&s(n)}),[e,a]),a}(_),re=Q(A),oe=function(){var e=(0,g.useRef)(!0),n=(0,g.useRef)((function(){return e.current}));return(0,g.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}(),ie=function(e){var n=(0,g.useRef)(null);return(0,g.useEffect)((function(){n.current=e})),n.current}(o),ae=(0,g.useState)(!o),se=(0,r.Z)(ae,2),ue=se[0],ce=se[1],le=(0,g.useRef)(null);(0,g.useImperativeHandle)(n,(function(){return re}),[re]),c&&!ie&&o&&(le.current=D()),o&&ue&&ce(!1);var fe=y((function(){if(re.add(),Ee.current=j(document,"keydown",he),me.current=j(document,"focus",(function(){return setTimeout(pe)}),!0),H&&H(),C){var e=D(document);re.dialog&&e&&!L(re.dialog,e)&&(le.current=e,re.dialog.focus())}})),de=y((function(){var e;(re.remove(),null==Ee.current||Ee.current(),null==me.current||me.current(),T)&&(null==(e=le.current)||null==e.focus||e.focus(Z),le.current=null)}));(0,g.useEffect)((function(){o&&te&&fe()}),[o,te,fe]),(0,g.useEffect)((function(){ue&&de()}),[ue,de]),k((function(){de()}));var pe=y((function(){if(R&&oe()&&re.isTopModal()){var e=D();re.dialog&&e&&!L(re.dialog,e)&&re.dialog.focus()}})),ve=y((function(e){e.target===e.currentTarget&&(null==h||h(e),!0===d&&W())})),he=y((function(e){v&&27===e.keyCode&&re.isTopModal()&&(null==m||m(e),e.defaultPrevented||W())})),me=(0,g.useRef)(),Ee=(0,g.useRef)();if(!te)return null;var ge=Object.assign({role:a,ref:re.setDialogRef,"aria-modal":"dialog"===a||void 0},ne,{style:u,className:s,tabIndex:-1}),be=P?P(ge):(0,X.jsx)("div",Object.assign({},ge,{children:g.cloneElement(l,{role:"document"})}));be=q(E,b,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:U,onExiting:$,onExited:function(){ce(!0),null==V||V.apply(void 0,arguments)},onEnter:Y,onEntering:G,onEntered:ee,children:be});var ye=null;return d&&(ye=B({ref:re.setBackdropRef,onClick:ve}),ye=q(x,O,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ye})),(0,X.jsx)(X.Fragment,{children:F.createPortal((0,X.jsxs)(X.Fragment,{children:[ye,be]}),te)})}));ee.displayName="Modal";var ne=Object.assign(ee,{Manager:U}),te=t(1120);function re(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,te.Z)(e)););return e}function oe(){return oe="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=re(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},oe.apply(this,arguments)}var ie=t(136),ae=t(516);var se=Function.prototype.bind.call(Function.prototype.call,[].slice);function ue(e,n){return se(e.querySelectorAll(n))}function ce(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var le,fe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",de=".sticky-top",pe=".navbar-toggler",ve=function(e){(0,ie.Z)(t,e);var n=(0,ae.Z)(t);function t(){return(0,A.Z)(this,t),n.apply(this,arguments)}return(0,_.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,T(n,(0,B.Z)({},e,"".concat(parseFloat(T(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],T(n,(0,B.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;oe((0,te.Z)(t.prototype),"setContainerStyle",this).call(this,e);var r,o,i=this.getElement();if(o="modal-open",(r=i).classList?r.classList.add(o):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";ue(i,fe).forEach((function(t){return n.adjustAndStore(a,t,e.scrollBarWidth)})),ue(i,de).forEach((function(t){return n.adjustAndStore(s,t,-e.scrollBarWidth)})),ue(i,pe).forEach((function(t){return n.adjustAndStore(s,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;oe((0,te.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var r,o,i=this.getElement();o="modal-open",(r=i).classList?r.classList.remove(o):"string"===typeof r.className?r.className=ce(r.className,o):r.setAttribute("class",ce(r.className&&r.className.baseVal||"",o));var a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";ue(i,fe).forEach((function(e){return n.restore(a,e)})),ue(i,de).forEach((function(e){return n.restore(s,e)})),ue(i,pe).forEach((function(e){return n.restore(s,e)}))}}]),t}(U);var he=t(9611);var me=!1,Ee=g.createContext(null),ge="unmounted",be="exited",ye="entering",xe="entered",Oe="exiting",ke=function(e){var n,t;function r(n,t){var r;r=e.call(this,n,t)||this;var o,i=t&&!t.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?i?(o=be,r.appearStatus=ye):o=xe:o=n.unmountOnExit||n.mountOnEnter?ge:be,r.state={status:o},r.nextCallback=null,r}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,(0,he.Z)(n,t),r.getDerivedStateFromProps=function(e,n){return e.in&&n.status===ge?{status:be}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==ye&&t!==xe&&(n=ye):t!==ye&&t!==xe||(n=Oe)}this.updateStatus(!1,n)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,n,t,r=this.props.timeout;return e=n=t=r,null!=r&&"number"!==typeof r&&(e=r.exit,n=r.enter,t=void 0!==r.appear?r.appear:n),{exit:e,enter:n,appear:t}},i.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===ye){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this);t&&function(e){e.scrollTop}(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===be&&this.setState({status:ge})},i.performEnter=function(e){var n=this,t=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[F.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!t||me?this.safeSetState({status:xe},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:ye},(function(){n.props.onEntering(i,a),n.onTransitionEnd(u,(function(){n.safeSetState({status:xe},(function(){n.props.onEntered(i,a)}))}))})))},i.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:F.findDOMNode(this);n&&!me?(this.props.onExit(r),this.safeSetState({status:Oe},(function(){e.props.onExiting(r),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:be},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:be},(function(){e.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},i.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,n.nextCallback=null,e(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},i.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===ge)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,o(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return g.createElement(Ee.Provider,{value:null},"function"===typeof t?t(e,r):g.cloneElement(g.Children.only(t),r))},r}(g.Component);function we(){}ke.contextType=Ee,ke.propTypes={},ke.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:we,onEntering:we,onEntered:we,onExit:we,onExiting:we,onExited:we},ke.UNMOUNTED=ge,ke.EXITED=be,ke.ENTERING=ye,ke.ENTERED=xe,ke.EXITING=Oe;var Ce=ke;function Ne(e,n){var t=T(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function Re(e,n){var t=Ne(e,"transitionDuration"),r=Ne(e,"transitionDelay"),o=P(e,(function(t){t.target===e&&(o(),n(t))}),t+r)}var Se,Te=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],je=g.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,o=e.onEntered,s=e.onExit,u=e.onExiting,c=e.onExited,l=e.addEndListener,f=e.children,d=e.childRef,p=i(e,Te),v=(0,g.useRef)(null),h=O(v,d),m=function(e){var n;h((n=e)&&"setState"in n?F.findDOMNode(n):null!=n?n:null)},E=function(e){return function(n){e&&v.current&&e(v.current,n)}},b=(0,g.useCallback)(E(t),[t]),y=(0,g.useCallback)(E(r),[r]),x=(0,g.useCallback)(E(o),[o]),k=(0,g.useCallback)(E(s),[s]),w=(0,g.useCallback)(E(u),[u]),C=(0,g.useCallback)(E(c),[c]),N=(0,g.useCallback)(E(l),[l]);return(0,X.jsx)(Ce,(0,a.Z)((0,a.Z)({ref:n},p),{},{onEnter:b,onEntered:x,onEntering:y,onExit:k,onExited:C,onExiting:w,addEndListener:N,nodeRef:v,children:"function"===typeof f?function(e,n){return f(e,(0,a.Z)((0,a.Z)({},n),{},{ref:m}))}:g.cloneElement(f,{ref:m})}))})),Ze=["className","children","transitionClasses"],Pe=(Se={},(0,B.Z)(Se,ye,"show"),(0,B.Z)(Se,xe,"show"),Se),De=g.forwardRef((function(e,n){var t=e.className,r=e.children,o=e.transitionClasses,s=void 0===o?{}:o,c=i(e,Ze),l=(0,g.useCallback)((function(e,n){!function(e){e.offsetHeight}(e),null==c.onEnter||c.onEnter(e,n)}),[c]);return(0,X.jsx)(je,(0,a.Z)((0,a.Z)({ref:n,addEndListener:Re},c),{},{onEnter:l,childRef:r.ref,children:function(e,n){return g.cloneElement(r,(0,a.Z)((0,a.Z)({},n),{},{className:u()("fade",t,r.props.className,Pe[e],s[e])}))}}))}));De.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},De.displayName="Fade";var Le=De,Fe=/-(.)/g;var Me=["xxl","xl","lg","md","sm","xs"],Be=g.createContext({prefixes:{},breakpoints:Me,minBreakpoint:"xs"});Be.Consumer,Be.Provider;function Ae(e,n){var t=(0,g.useContext)(Be).prefixes;return e||t[n]||n}var _e=["className","bsPrefix","as"],He=function(e){return e[0].toUpperCase()+(n=e,n.replace(Fe,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function Ie(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,r=void 0===t?He(e):t,o=n.Component,s=n.defaultProps,c=g.forwardRef((function(n,t){var r=n.className,s=n.bsPrefix,c=n.as,l=void 0===c?o||"div":c,f=i(n,_e),d=Ae(s,e);return(0,X.jsx)(l,(0,a.Z)({ref:t,className:u()(r,d)},f))}));return c.defaultProps=s,c.displayName=r,c}var We=Ie("modal-body"),Ue=g.createContext({onHide:function(){}}),Ve=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],Ke=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.contentClassName,s=e.centered,c=e.size,l=e.fullscreen,f=e.children,d=e.scrollable,p=i(e,Ve);t=Ae(t,"modal");var v="".concat(t,"-dialog"),h="string"===typeof l?"".concat(t,"-fullscreen-").concat(l):"".concat(t,"-fullscreen");return(0,X.jsx)("div",(0,a.Z)((0,a.Z)({},p),{},{ref:n,className:u()(v,r,c&&"".concat(t,"-").concat(c),s&&"".concat(v,"-centered"),d&&"".concat(v,"-scrollable"),l&&h),children:(0,X.jsx)("div",{className:u()("".concat(t,"-content"),o),children:f})}))}));Ke.displayName="ModalDialog";var ze=Ke,$e=Ie("modal-footer"),Xe=t(2007),Ye=t.n(Xe),qe=["className","variant"],Ge={"aria-label":Ye().string,onClick:Ye().func,variant:Ye().oneOf(["white"])},Je=g.forwardRef((function(e,n){var t=e.className,r=e.variant,o=i(e,qe);return(0,X.jsx)("button",(0,a.Z)({ref:n,type:"button",className:u()("btn-close",r&&"btn-close-".concat(r),t)},o))}));Je.displayName="CloseButton",Je.propTypes=Ge,Je.defaultProps={"aria-label":"Close"};var Qe=Je,en=["closeLabel","closeVariant","closeButton","onHide","children"],nn=g.forwardRef((function(e,n){var t=e.closeLabel,r=e.closeVariant,o=e.closeButton,s=e.onHide,u=e.children,c=i(e,en),l=(0,g.useContext)(Ue),f=y((function(){null==l||l.onHide(),null==s||s()}));return(0,X.jsxs)("div",(0,a.Z)((0,a.Z)({ref:n},c),{},{children:[u,o&&(0,X.jsx)(Qe,{"aria-label":t,variant:r,onClick:f})]}))}));nn.defaultProps={closeLabel:"Close",closeButton:!1};var tn=nn,rn=["bsPrefix","className"],on=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=i(e,rn);return t=Ae(t,"modal-header"),(0,X.jsx)(tn,(0,a.Z)((0,a.Z)({ref:n},o),{},{className:u()(r,t)}))}));on.displayName="ModalHeader",on.defaultProps={closeLabel:"Close",closeButton:!1};var an,sn=on,un=Ie("modal-title",{Component:(an="h4",g.forwardRef((function(e,n){return(0,X.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{ref:n,className:u()(e.className,an)}))})))}),cn=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],ln={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ze};function fn(e){return(0,X.jsx)(Le,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}function dn(e){return(0,X.jsx)(Le,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}var pn=g.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.style,l=e.dialogClassName,f=e.contentClassName,d=e.children,h=e.dialogAs,b=e["aria-labelledby"],x=e["aria-describedby"],w=e["aria-label"],C=e.show,N=e.animation,R=e.backdrop,S=e.keyboard,T=e.onEscapeKeyDown,j=e.onShow,Z=e.onHide,D=e.container,L=e.autoFocus,F=e.enforceFocus,M=e.restoreFocus,B=e.restoreFocusOptions,A=e.onEntered,_=e.onExit,H=e.onExiting,I=e.onEnter,W=e.onEntering,U=e.onExited,V=e.backdropClassName,K=e.manager,z=i(e,cn),$=(0,g.useState)({}),Y=(0,r.Z)($,2),q=Y[0],G=Y[1],J=(0,g.useState)(!1),Q=(0,r.Z)(J,2),ee=Q[0],te=Q[1],re=(0,g.useRef)(!1),oe=(0,g.useRef)(!1),ie=(0,g.useRef)(null),ae=(0,g.useState)(null),se=(0,r.Z)(ae,2),ue=se[0],ce=se[1],fe=O(n,ce),de=y(Z),pe="rtl"===(0,g.useContext)(Be).dir;t=Ae(t,"modal");var he=(0,g.useMemo)((function(){return{onHide:de}}),[de]);function me(){return K||function(e){return le||(le=new ve(e)),le}({isRTL:pe})}function Ee(e){if(c){var n=me().getScrollbarWidth()>0,t=e.scrollHeight>v(e).documentElement.clientHeight;G({paddingRight:n&&!t?E():void 0,paddingLeft:!n&&t?E():void 0})}}var ge=y((function(){ue&&Ee(ue.dialog)}));k((function(){m(window,"resize",ge),null==ie.current||ie.current()}));var be=function(){re.current=!0},ye=function(e){re.current&&ue&&e.target===ue.dialog&&(oe.current=!0),re.current=!1},xe=function(){te(!0),ie.current=P(ue.dialog,(function(){te(!1)}))},Oe=function(e){"static"!==R?oe.current||e.target!==e.currentTarget?oe.current=!1:null==Z||Z():function(e){e.target===e.currentTarget&&xe()}(e)},ke=(0,g.useCallback)((function(e){return(0,X.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:u()("".concat(t,"-backdrop"),V,!N&&"show")}))}),[N,V,t]),we=(0,a.Z)((0,a.Z)({},s),q);we.display="block";return(0,X.jsx)(Ue.Provider,{value:he,children:(0,X.jsx)(ne,{show:C,ref:fe,backdrop:R,container:D,keyboard:!0,autoFocus:L,enforceFocus:F,restoreFocus:M,restoreFocusOptions:B,onEscapeKeyDown:function(e){S?null==T||T(e):(e.preventDefault(),"static"===R&&xe())},onShow:j,onHide:Z,onEnter:function(e,n){e&&Ee(e),null==I||I(e,n)},onEntering:function(e,n){null==W||W(e,n),p(window,"resize",ge)},onEntered:A,onExit:function(e){null==ie.current||ie.current(),null==_||_(e)},onExiting:H,onExited:function(e){e&&(e.style.display=""),null==U||U(e),m(window,"resize",ge)},manager:me(),transition:N?fn:void 0,backdropTransition:N?dn:void 0,renderBackdrop:ke,renderDialog:function(e){return(0,X.jsx)("div",(0,a.Z)((0,a.Z)({role:"dialog"},e),{},{style:we,className:u()(o,t,ee&&"".concat(t,"-static"),!N&&"show"),onClick:R?Oe:void 0,onMouseUp:ye,"aria-label":w,"aria-labelledby":b,"aria-describedby":x,children:(0,X.jsx)(h,(0,a.Z)((0,a.Z)({},z),{},{onMouseDown:be,className:l,contentClassName:f,children:d}))}))}})})}));pn.displayName="Modal",pn.defaultProps=ln;var vn=Object.assign(pn,{Body:We,Header:sn,Title:un,Footer:$e,Dialog:ze,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},4942:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(9142);function o(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=201.ffc6f763.chunk.js.map