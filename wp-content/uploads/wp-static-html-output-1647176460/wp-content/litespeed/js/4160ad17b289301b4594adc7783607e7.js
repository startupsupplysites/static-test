!function(l,a,d){"use strict";var e={getInstance:function(e,t){return l.offside.factory||(l.offside.factory=n(t)),l.offside.factory.getOffsideInstance(e,t)}};function n(e){var t,h=function(e){0<T.length&&(isNaN(e)?T.forEach(function(e){x[e].close()}):x[e].close())},L=function(){S(D,i)},S=function(e,t){e.classList?e.classList.add(t):e.className=(e.className+" "+t).trim()},E=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},O=function(e,t,n){e.addEventListener(t,n)},A=function(e,t,n){e.removeEventListener(t,n)},q=function(e){return e instanceof HTMLElement?[e]:Array.isArray(e)?e:"string"==typeof e&&Array.apply(null,a.querySelectorAll(e))},w=function(e,t){var n=e.indexOf(t);return-1<n&&n},n={slidingElementsSelector:".offside-sliding-element",disableCss3dTransforms:!1,debug:!1};for(t in e)n.hasOwnProperty(t)&&(n[t]=e[t]);var k="offside-js",o=k+"--init",i=k+"--interact",x=[],C=!0,s=!n.disableCss3dTransforms&&function(){if(!l.getComputedStyle)return!1;var e,t=a.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in a.body.insertBefore(t,null),n)t.style[o]!==d&&(t.style[o]="translate3d(1px,1px,1px)",e=l.getComputedStyle(t).getPropertyValue(n[o]));return a.body.removeChild(t),e!==d&&0<e.length&&"none"!==e}(),T=[],D=a.body,r=q(n.slidingElementsSelector),N=n.debug;function c(e,t,n){var o,i={buttonsSelector:"",slidingSide:"left",init:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};for(o in t)i.hasOwnProperty(o)&&(i[o]=t[o]);function s(){(!1===w(T,v)?y:p)()}function r(e){e.preventDefault(),s()}var l=e,c=q(i.buttonsSelector),a=i.slidingSide,d="offside",u=d+"--"+a,f="is-open",m=k+"--is-open",g=k+"--is-"+a,v=n||0,y=function(){i.beforeOpen(),C&&(C=!1,L()),h(),S(D,m),S(D,g),S(l,f),T.push(v),i.afterOpen()},p=function(){var e=w(T,v);!1!==e&&(i.beforeClose(),E(D,m),E(D,g),E(l,f),T.splice(e,1),i.afterClose())},b=function(){l||console.error('Offside alert: "offside" selector could not match any element'),c.length||console.error('Offside alert: "buttonsSelector" selector could not match any element')};this.toggle=function(){s()},this.open=function(){y()},this.close=function(){p()},this.closeAll=function(){h()},this.destroy=function(){i.beforeDestroy(),p(),c.forEach(function(e){A(e,"click",r)}),E(l,d),E(l,u),delete x[v],i.afterDestroy()},N&&b(),S(l,d),S(l,u),c.forEach(function(e){O(e,"click",r)}),i.init()}return r.forEach(function(e){S(e,"offside-sliding-element")}),s||S(a.documentElement,"no-csstransforms3d"),S(D,o),{closeOpenOffside:function(){h()},getOffsideInstance:function(e,t){var n,o,i,s,r=x.length||0,l=(o=t,i=r,!1!==(s=q((n=e)!==d?n:".offside"))?new c(s[0],o,i):null);if(null!==l)return x[r]=l}}}"undefined"!=typeof module&&module.exports?module.exports=e.getInstance:l.offside=e.getInstance}(window,document),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".slideout-navigation").style.display=""});for(var generateOffside=offside(".slideout-navigation",{slidingElementsSelector:"#slideout-container",buttonsSelector:".slideout-mobile .main-navigation .menu-toggle, .slideout-both .main-navigation .menu-toggle, .slideout-both .slideout-toggle, .slideout-desktop .slideout-toggle",slidingSide:offSide.side,afterOpen:function(){document.documentElement.classList.add("slide-opened"),document.body.classList.add("slide-opened");var e,t=document.querySelector("ul.slideout-menu");!t||(e=t.firstChild.querySelector("a"))&&setTimeout(function(){e.focus()},200)},afterClose:function(){for(var e=document.body,t=document.querySelectorAll(".main-navigation"),n=0;n<t.length;n++)t[n].classList.contains("toggled")&&t[n].classList.remove("toggled");if(document.documentElement.classList.remove("slide-opened"),e.classList.remove("slide-opened"),"true"===document.querySelector(".main-navigation .menu-toggle").getAttribute("aria-expanded")&&document.querySelector(".main-navigation .menu-toggle").setAttribute("aria-expanded",!1),e.classList.contains("dropdown-hover"))for(var o=document.querySelector(".main-navigation:not(.slideout-navigation)").querySelectorAll("li.menu-item-has-children"),n=0;n<o.length;n++){var i=o[n].querySelector("span.dropdown-menu-toggle");i&&(i.removeAttribute("tabindex"),i.setAttribute("role","presentation"),i.removeAttribute("aria-expanded"))}}}),closeElements=document.querySelectorAll(".slideout-overlay, .slideout-exit, .slider-exit a"),i=0;i<closeElements.length;i++)closeElements[i].addEventListener("click",function(e){e.preventDefault(),generateOffside.close()});for(var slideoutLinks=document.querySelectorAll(".slideout-navigation ul a"),closeOffsideOnAction=function(){var e=this.getAttribute("href");"#"===e||""===e||navigator.userAgent.match(/iemobile/i)||setTimeout(function(){generateOffside.close()},200)},i=0;i<slideoutLinks.length;i++)slideoutLinks[i].addEventListener("click",closeOffsideOnAction,!1);document.addEventListener("keyup",function(e){var t;document.body.classList.contains("slide-opened")&&27==(e=e||window.event).keyCode&&(generateOffside.close(),t=document.body,window.document.documentElement.clientWidth<=768?(t.classList.contains("slideout-mobile")||t.classList.contains("slideout-both"))&&document.querySelector(".main-navigation .menu-toggle").focus():(t.classList.contains("slideout-desktop")||t.classList.contains("slideout-both"))&&(document.querySelector(".slideout-toggle a").focus(),document.activeElement.blur()))})
;