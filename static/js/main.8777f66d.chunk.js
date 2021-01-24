(this.webpackJsonptangible=this.webpackJsonptangible||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),l=a(2),c=a(9),s=a(4),u=a(10),d=function(e){var t=e.component,a=e.layout,n=Object(u.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(l.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},m=a(17),v=a(1),b=a.n(v),f=a(15),p=r.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),o=Object(m.a)(a,2),i=o[0],l=o[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),u=s[0],d=s[1],v=function(){return u.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=u[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=i-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<u.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof u&&u.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",g)),b())}),[u]);var p=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",g))},h=Object(f.throttle)((function(){p(),b()}),30),g=Object(f.throttle)((function(){l(window.innerHeight)}),30);return Object(n.useEffect)((function(){p(),b()}),[i]),r.a.createElement(r.a.Fragment,null,e.children())}));p.propTypes={children:b.a.func.isRequired};var h=p,g=a(11),O=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"site-content"},t))},E=a(7),j=a(16),w=a.n(j),y={types:{topOuterDivider:b.a.bool,bottomOuterDivider:b.a.bool,topDivider:b.a.bool,bottomDivider:b.a.bool,hasBgColor:b.a.bool,invertColor:b.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},D={types:Object(E.a)({},y.types),defaults:Object(E.a)({},y.defaults)},N=(Object(E.a)(Object(E.a)({},y.types),{},{invertMobile:b.a.bool,invertDesktop:b.a.bool,alignTop:b.a.bool,imageFill:b.a.bool}),Object(E.a)(Object(E.a)({},y.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1}),Object(E.a)(Object(E.a)({},y.types),{},{pushLeft:b.a.bool}),Object(E.a)(Object(E.a)({},y.defaults),{},{pushLeft:!1}),Object(E.a)({},D.defaults)),C=function(e){var t=e.className,a=(e.topOuterDivider,e.bottomOuterDivider,e.topDivider),n=e.bottomDivider,o=e.hasBgColor,i=(e.invertColor,Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"])),l=w()("illustration-section-01","hero section",o&&"has-bg-color",t),c=w()("hero-inner section-inner",a&&"has-top-divider",n&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},i,{className:l}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:c},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"tangible"),r.a.createElement("h3",{className:"fw-400 reveal-from-top","data-reveal-delay":"1500"},"you are about to witness the",r.a.createElement("div",null),"strength of street knowledge"),r.a.createElement("p",{className:"fw-100 text-s reveal-from-top","data-reveal-delay":"2050"},"Dr. Dre, Straight Outta Compton, 1998")),r.a.createElement("h4",{className:"spacer-64 reveal-from-top","data-reveal-delay":"2000"},"coming soon."))))};C.defaultProps=N;var L=C,B=function(){return r.a.createElement(L,null)};g.a.initialize("G-BZ4H3DME5W");var k=function(){var e=Object(n.useRef)(),t=Object(l.f)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),r.a.createElement(h,{ref:e,children:function(){return r.a.createElement(l.c,null,r.a.createElement(d,{exact:!0,path:"/",component:B,layout:O}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);var A=Object(s.a)();i.a.render(r.a.createElement(l.b,{history:A},r.a.createElement(c.a,{basename:"/"},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8777f66d.chunk.js.map