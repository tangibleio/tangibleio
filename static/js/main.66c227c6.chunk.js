(this.webpackJsonptangible=this.webpackJsonptangible||[]).push([[0],{29:function(e,t,a){e.exports=a(64)},57:function(e,t,a){e.exports=a.p+"static/media/hero_1.e43a1678.png"},58:function(e,t,a){e.exports=a.p+"static/media/hero_0.153f48f4.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/hero_2.acecfe3e.png"},60:function(e,t,a){e.exports=a.p+"static/media/an.73bdbafe.png"},61:function(e,t,a){e.exports=a.p+"static/media/rd.b9d06c8f.png"},62:function(e,t,a){e.exports=a.p+"static/media/bg.5990e78e.png"},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(26),o=a.n(n),s=a(4),l=a(12),c=a(8),m=a(6),d=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},v=a(13),u=a(2),b=a.n(u),p=a(20),h=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(v.a)(a,2),o=n[0],s=n[1],l=Object(i.useState)([]),c=Object(v.a)(l,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),b())}),[m]);var h=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(p.throttle)((function(){h(),b()}),30),g=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[o]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:b.a.func.isRequired};var f=h,g=a(15),E=a(1),N=a.n(E),O=function(e){e.className;var t=e.navPosition,a=e.hideNav,n=(e.hideSignin,e.bottomOuterDivider),o=(e.bottomDivider,Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"])),s=Object(i.useState)(!1),c=Object(v.a)(s,2),d=c[0],u=c[1],b=Object(i.useRef)(null),p=Object(i.useRef)(null);Object(i.useEffect)((function(){return d&&h(),document.addEventListener("keydown",g),document.addEventListener("click",E),function(){document.removeEventListener("keydown",g),document.addEventListener("click",E),f()}}));var h=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",u(!0)},f=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),u(!1)},g=function(e){d&&27===e.keyCode&&f()},E=function(e){b.current&&d&&!b.current.contains(e.target)&&e.target!==p.current&&f()},O=Object(i.useState)(!0),w=Object(v.a)(O,2),D=w[0],j=w[1];Object(i.useEffect)((function(){var e=function(){window.pageYOffset>"500"?j(!1):j(!0)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[D]);var y=N()(!D&&"nav-bar-bg-color",D&&"reveal-from-top invert-color","site-header",n&&"has-bottom-divider");return r.a.createElement("header",Object.assign({},o,{className:y}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner")},!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:p,className:"header-nav-toggle",onClick:d?f:h},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:N()("header-nav",d&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",t&&"header-nav-".concat(t))},r.a.createElement("li",null,r.a.createElement(l.b,{to:"#features",onClick:f},"Features")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"#contact",onClick:f},"Contact")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"#team",onClick:f},"Team")))))))))};O.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var w=O,D=function(e){var t=e.className,a=e.topOuterDivider,i=(e.topDivider,Object(m.a)(e,["className","topOuterDivider","topDivider"])),n=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},i,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-footer-inner")},r.a.createElement("div",{className:"footer-bottom space-between text-xxs "},r.a.createElement("h6",{className:"fw-100 invert-color"},"Tangible stems from years of research at MIT and a proven, multinational entrepreneurial team."),r.a.createElement("h6",{className:"invert-color"},"Coming soon.")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var j=D,y=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{navPosition:"right",className:"reveal-from-top"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(j,null))},C=a(3),x={types:{topOuterDivider:b.a.bool,bottomOuterDivider:b.a.bool,topDivider:b.a.bool,bottomDivider:b.a.bool,hasBgColor:b.a.bool,invertColor:b.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},k={types:Object(C.a)({},x.types),defaults:Object(C.a)({},x.defaults)},L={types:Object(C.a)(Object(C.a)({},x.types),{},{invertMobile:b.a.bool,invertDesktop:b.a.bool,alignTop:b.a.bool,imageFill:b.a.bool}),defaults:Object(C.a)(Object(C.a)({},x.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(C.a)(Object(C.a)({},x.types),{},{pushLeft:b.a.bool}),defaults:Object(C.a)(Object(C.a)({},x.defaults),{},{pushLeft:!1})},B=a(28),F=a.n(B),S=Object(C.a)({},k.defaults),A=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=(e.hasBgColor,e.invertColor,Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"])),l=N()("illustration-section-01","hero section",a&&"has-top-divider",i&&"has-bottom-divider","has-bg-color",t),c=N()("hero-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",Object.assign({},s,{className:l}),r.a.createElement("div",{className:"container-fh"},r.a.createElement("div",{className:"video-background"},r.a.createElement("div",{className:"video-foreground"},r.a.createElement(F.a,{url:"https://youtu.be/uUKIKml17AU",playing:!0,controls:!1,muted:!0,loop:!0,width:"0em",height:"0em"}))),r.a.createElement("div",{className:c},r.a.createElement("div",{className:"hero-content"},r.a.createElement("div",{className:"container-xs"},r.a.createElement("h1",{"data-reveal-delay":"300",className:"mt-0 mb-16 reveal-scale-down invert-color"},"tangible"),r.a.createElement("h3",{className:"m-0 mt-64  reveal-from-left invert-color ","data-reveal-delay":"200"},"help location-driven businesses strive by predicting how people move.")))))))};A.defaultProps=S;var P=A,I=function(e){var t=e.className,a=e.src,n=e.width,o=e.height,s=e.alt,l=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(i.useState)(!1),d=Object(v.a)(c,2),u=d[0],b=d[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){h(p.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},l,{ref:p,className:t,src:a,width:n,height:o,alt:s,onLoad:function(){b(!0)}}))};I.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var R=I,M=Object(C.a)({},L.defaults),H=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,c=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,b=e.imageFill,p=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=N()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",l&&"has-bg-color",c&&"invert-color",t),f=N()("features-split-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider"),g=N()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},p,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs fw-600 tt-u mb-8"},"Know your business footprint"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Insights"),r.a.createElement("p",{className:"m-0"},"Tangible helps business owners make better decisions using spatio-behavioral data and predictive modeling. We fuse telecom data with various sources of demographic information to create a virtual twin model. This model can augment user-defined locations with realistic population demographics and behaviours.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(R,{src:a(57),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs  fw-600 tt-u mb-8"},"From Retospect to Forecast"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Predict"),r.a.createElement("p",{className:"m-0"},"Understand the impact of various \u2018what if?\u2019 scenarios, such as spatial transformations in business location, updated working-hours, impact of near-by developments, and other global events.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(R,{src:a(58),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs  fw-600 tt-u mb-8"},"explore 'what if?' scenarios"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Transform"),r.a.createElement("p",{className:"m-0"},"Tangible provides an iterative platform to freely simulate future scenarios such as increased or decreased foot-traffic, changes to the clients\u2019 demographics, policy changes, and captial projects.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(R,{src:a(59),alt:"Features split 02",width:528,height:396})))))))};H.defaultProps=M;var U=H,q=Object(C.a)(Object(C.a)({},k.defaults),{},{split:!1}),z=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"fw-900 invert-color reveal-scale-down","data-reveal-delay":"200"},"\u201cyou are about to witness the strength of street knowledge.\u201d"),r.a.createElement("h6",{className:"reveal-scale-down invert-color mb-0 fw-200","data-reveal-delay":"300"},"Straight Outta Compton, 1998"),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"reveal-scale-down invert-color mt-32 fw-500"},"Online retailers have great visibility into their clients\u2019 activity, but tangible businesses are blind outside of their storefronts. Tangible is an AI Location Intelligence platform that analyses behavioral, spatial, demographic, and economic data, to infer and simulate city-scale population behavior.")))),K=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,c=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),u=N()("cta-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider",c&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:u},z))};K.defaultProps=q;var W=K,_=Object(C.a)({},T.defaults),J=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,c=e.invertColor,d=e.pushLeft,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=N()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",l&&"has-bg-color",c&&"invert-color",t),b=N()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",s&&"has-bottom-divider"),p=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},v,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{"data-reveal-delay":"300",className:"mt-64 mb-64 reveal-scale-down"},"team"),r.a.createElement("div",{className:b},r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(R,{src:a(60),width:256,height:256}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Ariel Noyman"),r.a.createElement("p",{className:"m-0 text-sm"},"Urban modeling and simulation. PhD at MIT City Science. Recovering architect & planner, turned urban scientist")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(R,{src:a(61),width:256,height:256}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Dr. Ronan Doorley"),r.a.createElement("p",{className:"m-0 text-sm"},"Data Scientist, spatial analytics, AI, modeling and predictions. Fulbright scholar, PhD in transportation eng. and a post-doc at MIT")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(R,{src:a(62),width:256,height:256}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Barak Goldstein"),r.a.createElement("p",{className:"m-0 text-sm"},"Serial entrepreneur, sold his last venture to Salesforce in 2019. VC, oversaw +$1B portfolio"))))))))};J.defaultProps=_;var V=J,$=Object(C.a)(Object(C.a)({},k.defaults),{},{split:!1}),G=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=(e.hasBgColor,e.invertColor),l=e.split,c=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),d=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"invert-color",t),v=N()("cta-inner section-inner has-shadow",n&&"has-top-divider",o&&"has-bottom-divider",l&&"cta-split");return r.a.createElement("section",Object.assign({},c,{className:d}),r.a.createElement("div",{className:"spacer-64"},r.a.createElement("div",{className:"container-xs"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"invert-color m-0"},"Tangible is coming soon from MIT."),r.a.createElement("h6",{className:"invert-color"},"learn more at info@tangibledata.io"))))))};G.defaultProps=$;var Y=G,Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(W,{split:!0}),r.a.createElement(Y,{id:"contact"}),r.a.createElement(U,{id:"features"}),r.a.createElement(V,{id:"team"}))};g.a.initialize("UA-187994012-1",{debug:!1,siteSpeedSampleRate:1e3});var X=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname,i=t.hash;""===i?window.scrollTo(0,0):setTimeout((function(){var e=i.replace("#",""),t=document.getElementById(e);t&&t.scrollIntoView()}),0),document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:Q,layout:y}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);var Z=Object(c.a)();o.a.render(r.a.createElement(s.b,{history:Z},r.a.createElement(l.a,{basename:"/"},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.66c227c6.chunk.js.map