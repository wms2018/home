var EntryPoint=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),r=(o(i),n(6)),s=o(r),c=n(7),u=o(c),l=n(8),d=o(l),m=n(9),f=o(m),p=n(10),b=o(p),v=n(11),g=o(v),y=n(14),h=o(y),w=[],_=!1,k=document.all&&!window.atob,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(_=!0),_)return w=(0,g.default)(w,E),(0,b.default)(w,E.once),w},L=function(){w=(0,h.default)(),x()};e.exports={init:function(e){return E=a(E,e),w=(0,h.default)(),function(e){return!0===e||"mobile"===e&&f.default.mobile()||"phone"===e&&f.default.phone()||"tablet"===e&&f.default.tablet()||"function"==typeof e&&!0===e()}(E.disable)||k?void w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}):(document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),"DOMContentLoaded"===E.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?x(!0):"load"===E.startEvent?window.addEventListener(E.startEvent,function(){x(!0)}):document.addEventListener(E.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,u.default)(x,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(x,E.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,b.default)(w,E.once)},E.throttleDelay)),E.disableMutationObserver||(0,d.default)("[data-aos]",L),w)},refresh:x,refreshHard:L}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=d,o=m;return d=m=void 0,g=t,p=e.apply(o,n)}function r(e){var n=e-v,o=e-g;return void 0===v||n>=t||n<0||h&&o>=f}function c(){var e=k();return r(e)?u(e):void(b=setTimeout(c,function(e){var n=t-(e-v);return h?_(n,f-(e-g)):n}(e)))}function u(e){return b=void 0,E&&d?a(e):(d=m=void 0,p)}function l(){var e=k(),n=r(e);if(d=arguments,m=this,v=e,n){if(void 0===b)return function(e){return g=e,b=setTimeout(c,t),y?a(e):p}(v);if(h)return b=setTimeout(c,t),a(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,m,f,p,b,v,g=0,y=!1,h=!1,E=!0;if("function"!=typeof e)throw new TypeError(s);return t=i(t)||0,o(n)&&(y=!!n.leading,f=(h="maxWait"in n)?w(i(n.maxWait)||0,t):f,E="trailing"in n?!!n.trailing:E),l.cancel=function(){void 0!==b&&clearTimeout(b),g=0,d=v=m=b=void 0},l.flush=function(){return void 0===b?p:u(k())},l}function o(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function a(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&h.call(e)==u}function i(e){if("number"==typeof e)return e;if(a(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||f.test(e)?p(e.slice(2),n?2:8):d.test(e)?c:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",c=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,b="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,g=b||v||Function("return this")(),y=Object.prototype,h=y.toString,w=Math.max,_=Math.min,k=function(){return g.Date.now()};e.exports=function(e,t,a){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(s);return o(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),n(e,t,{leading:i,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function o(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&y.call(e)==c}function a(e){if("number"==typeof e)return e;if(o(e))return s;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var a=d.test(e);return a||m.test(e)?f(e.slice(2),a?2:8):l.test(e)?s:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",s=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,f=parseInt,p="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,v=p||b||Function("return this")(),g=Object.prototype,y=g.toString,h=Math.max,w=Math.min,_=function(){return v.Date.now()};e.exports=function(e,t,o){function i(t){var n=d,o=m;return d=m=void 0,g=t,p=e.apply(o,n)}function s(e){var n=e-v,o=e-g;return void 0===v||n>=t||n<0||k&&o>=f}function c(){var e=_();return s(e)?u(e):void(b=setTimeout(c,function(e){var n=t-(e-v);return k?w(n,f-(e-g)):n}(e)))}function u(e){return b=void 0,E&&d?i(e):(d=m=void 0,p)}function l(){var e=_(),n=s(e);if(d=arguments,m=this,v=e,n){if(void 0===b)return function(e){return g=e,b=setTimeout(c,t),y?i(e):p}(v);if(k)return b=setTimeout(c,t),i(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,m,f,p,b,v,g=0,y=!1,k=!1,E=!0;if("function"!=typeof e)throw new TypeError(r);return t=a(t)||0,n(o)&&(y=!!o.leading,f=(k="maxWait"in o)?h(a(o.maxWait)||0,t):f,E="trailing"in o?!!o.trailing:E),l.cancel=function(){void 0!==b&&clearTimeout(b),g=0,d=v=m=b=void 0},l.flush=function(){return void 0===b?p:u(_())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var o=window.document,a=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,i=function(){};t.default=function(e,t){var r=new a(n);i=t,r.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,a){!function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")}(e,o+n,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t){var n=0,o=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(o=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,a.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(o=t),n+o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);var o=n(0),a=n.n(o);document.addEventListener("DOMContentLoaded",function(e){window.onscroll=function(){(document.body.scrollTop>20||document.documentElement.scrollTop>20)&&!document.getElementById("navbar").classList.contains("c-navbar__sticky")?(document.getElementById("navbar").classList.add("c-navbar__sticky"),document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.add("c-navbar__mob-menu-btn-scroll")):document.body.scrollTop>20||document.documentElement.scrollTop>20||!document.getElementById("navbar").classList.contains("c-navbar__sticky")||(document.getElementById("navbar").classList.remove("c-navbar__sticky"),document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.remove("c-navbar__mob-menu-btn-scroll"))},document.getElementsByClassName("footer__copyright").item(0).querySelector("p").innerHTML="Copyright &copy; "+(new Date).getFullYear()+" World Marketing Summit"}),a.a.init({once:!0,disable:"mobile"}),window.showAllFeatures=function(e){var t=document.getElementsByClassName("more");"title"===e?(t[0].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[0].classList.add("packages__features__hide")):"principal"===e?(t[1].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[1].classList.add("packages__features__hide")):"platinum"===e?(t[2].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[2].classList.add("packages__features__hide")):"gold"===e?(t[3].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[3].classList.add("packages__features__hide")):"silver"===e?(t[4].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[4].classList.add("packages__features__hide")):"bronze"===e&&(t[5].classList.remove("packages__features__hide"),document.getElementsByClassName("link-regular")[5].classList.add("packages__features__hide"))},window.toggleHamburger=function(){document.getElementsByClassName("hamburger")[0].classList.contains("is-active")?(document.getElementsByClassName("hamburger")[0].classList.remove("is-active"),document.getElementsByClassName("c-navbar")[0].classList.remove("c-navbar__mobile-menu"),document.getElementById("navbar").classList.remove("c-navbar__sticky"),document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.remove("c-navbar__mob-menu-btn-scroll")):(document.getElementsByClassName("hamburger")[0].classList.add("is-active"),document.getElementsByClassName("c-navbar")[0].classList.add("c-navbar__mobile-menu"),document.getElementById("navbar").classList.add("c-navbar__sticky"),document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.add("c-navbar__mob-menu-btn-scroll"))},$(function(){$(".same-page").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500,"linear")})}),window.closeMobMenu=function(){document.getElementsByClassName("hamburger")[0].classList.remove("is-active"),document.getElementsByClassName("c-navbar")[0].classList.remove("c-navbar__mobile-menu")},$("#sponsor-carousel").slick({dots:!0,infinite:!0,speed:300,slidesToShow:3,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:768,settings:{arrows:!0,slidesToShow:1}}]}),$("#sponsor-form").submit(function(e){var t=document.getElementById("inputName"),n=document.getElementById("inputEmail"),o=document.getElementById("inputText");t.nodeValue&&n.nodeValue&&o.nodeValue||alertify.error("Check inputs")})}]);