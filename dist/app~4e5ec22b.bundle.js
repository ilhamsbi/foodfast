(()=>{"use strict";var n,A={948:(n,A,t)=>{t.d(A,{Z:()=>c});var a=t(537),e=t.n(a),r=t(645),i=t.n(r),o=t(667),p=t.n(o),s=new URL(t(846),t.b),d=new URL(t(978),t.b),l=new URL(t(873),t.b),E=i()(e()),C=p()(s),g=p()(d),u=p()(l);E.push([n.id,`@media screen and (min-width: 650px) {\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n\n  .app-bar .app-bar__brand h1 {\n    font-size: 1.5em;\n  }\n\n  .app-bar .app-bar__menu {\n    display: none;\n  }\n\n  .app-bar .app-bar__navigation {\n    position: static;\n    width: 100%;\n  }\n\n  .app-bar .app-bar__navigation ul li {\n    display: inline-block;\n  }\n\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n\n  .restaurants {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .restaurant {\n    grid-template-columns: auto 1fr;\n  }\n\n  .restaurant .restaurant__name {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .restaurant .restaurant__description {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  footer #footerTools {\n    flex-direction: row;\n  }\n  .jumbotron {\n    min-height: 300px;\n    background-image: url(${C});\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .app-bar .app-bar__brand h1 {\n    font-size: 2em;\n  }\n\n  .jumbotron {\n    min-height: 400px;\n  }\n}\n\n@media screen and (min-width: 850px) {\n  .restaurants {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 420px;\n    background-image: url(${g});\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .restaurants {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 450px;\n    background-image: url(${u});\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .restaurants {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 480px;\n    background-image: url(${u});\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,yDAA8D;EAChE;AACF;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,iBAAiB;IACjB,yDAAoE;EACtE;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,iBAAiB;IACjB,yDAAwD;EAC1D;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,iBAAiB;IACjB,yDAAwD;EAC1D;AACF",sourcesContent:["@media screen and (min-width: 650px) {\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n\n  .app-bar .app-bar__brand h1 {\n    font-size: 1.5em;\n  }\n\n  .app-bar .app-bar__menu {\n    display: none;\n  }\n\n  .app-bar .app-bar__navigation {\n    position: static;\n    width: 100%;\n  }\n\n  .app-bar .app-bar__navigation ul li {\n    display: inline-block;\n  }\n\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n\n  .restaurants {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .restaurant {\n    grid-template-columns: auto 1fr;\n  }\n\n  .restaurant .restaurant__name {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .restaurant .restaurant__description {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  footer #footerTools {\n    flex-direction: row;\n  }\n  .jumbotron {\n    min-height: 300px;\n    background-image: url(../public/images/hero-image_4-small.jpg);\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .app-bar .app-bar__brand h1 {\n    font-size: 2em;\n  }\n\n  .jumbotron {\n    min-height: 400px;\n  }\n}\n\n@media screen and (min-width: 850px) {\n  .restaurants {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 420px;\n    background-image: url(../public/images/hero-image_4-large-large.jpg);\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .restaurants {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 450px;\n    background-image: url(../public/images/hero-image_4.jpg);\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .restaurants {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  .jumbotron {\n    min-height: 480px;\n    background-image: url(../public/images/hero-image_4.jpg);\n  }\n}\n"],sourceRoot:""}]);const c=E},890:(n,A,t)=>{t.d(A,{Z:()=>E});var a=t(537),e=t.n(a),r=t(645),i=t.n(r),o=t(667),p=t.n(o),s=new URL(t(873),t.b),d=i()(e());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap);"]);var l=p()(s);d.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: "Open Sans", sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.skip-link {\n  position: absolute;\n  top: -60px;\n  left: 200px;\n  background-color: var(--main-color);\n  color: rgb(255, 0, 0);\n  padding: 4px;\n  z-index: 10000;\n  border-radius: 10px;\n}\n\n.skip-link:focus {\n  top: 25px;\n}\n/*\n  AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: rgb(21, 80, 44);\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 28px;\n  padding: 14px;\n  cursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 20px;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 54px;\n  left: -700px;\n  width: 100%;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: rgb(21, 80, 44);\n  overflow: hidden;\n  text-align: center;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  padding: 15px;\n  margin-bottom: 5px;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 100;\n}\n\n.app-bar .app-bar__navigation ul li a:hover {\n  color: #d0d0d0;\n}\n\n/* \n  Hero\n*/\n\n/* Jumbotron */\n\n.jumbotron {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* min-height: 550px; */\n  width: 100%;\n  height: 350px;\n  background-image: url(${l});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.boxjumbotron {\n  width: 100%;\n  padding: 40px;\n  color: white;\n  margin: 10%;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.title-jumbotron {\n  color: #fff;\n  font-weight: 600;\n  font-size: 36px;\n  text-shadow: 1px 1px #141414;\n  padding-top: 70px;\n}\n\n.text-jumbotron {\n  color: #fff;\n  margin-top: 15px;\n  font-size: 20px;\n  font-weight: 400;\n  text-shadow: 1px 2px black;\n}\n\n.text-jumbotron span {\n  color: var(--main-color);\n}\n\n/*\n  Main Content\n*/\n\nmain {\n  flex: 1;\n}\n\n.content {\n  padding: 32px;\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  padding: 20px;\n  text-align: center;\n}\n\n.content__heading h1 {\n  font-size: 36px;\n  font-family: "Open Sans", sans-serif;\n  font-weight: 350;\n}\n/*\n  Restaurants\n*/\n\n.restaurants {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n  Restaurant Item\n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 200px;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 10px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  font-size: large;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #080808;\n  text-decoration: none;\n  padding: 10px;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.restaurant_place {\n  margin-top: 15px;\n  display: inline-block;\n\tborder-radius: 6px;\n\tbackground-color: #08b928;\n\tpadding: 6px 12px 6px;\n\tcolor: white;\n\tfont-weight: 350;\n}\n\n/*\n  restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 80%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 8px;\n}\n\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n/*\n  Footer\n*/\n\nfooter {\n  padding: 16px;\n  background-color: rgb(21, 80, 44);\n}\n\nfooter p {\n  margin-top: 16px;\n  text-decoration: none;\n  text-align: center;\n  color: #ffffff;\n}\n\n/*\n  Button\n*/\n`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.skip-link {\n  position: absolute;\n  top: -60px;\n  left: 200px;\n  background-color: var(--main-color);\n  color: rgb(255, 0, 0);\n  padding: 4px;\n  z-index: 10000;\n  border-radius: 10px;\n}\n\n.skip-link:focus {\n  top: 25px;\n}\n/*\n  AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: rgb(21, 80, 44);\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 28px;\n  padding: 14px;\n  cursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 20px;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 54px;\n  left: -700px;\n  width: 100%;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: rgb(21, 80, 44);\n  overflow: hidden;\n  text-align: center;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  padding: 15px;\n  margin-bottom: 5px;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 100;\n}\n\n.app-bar .app-bar__navigation ul li a:hover {\n  color: #d0d0d0;\n}\n\n/* \n  Hero\n*/\n\n/* Jumbotron */\n\n.jumbotron {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* min-height: 550px; */\n  width: 100%;\n  height: 350px;\n  background-image: url('../public/images/hero-image_4.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.boxjumbotron {\n  width: 100%;\n  padding: 40px;\n  color: white;\n  margin: 10%;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.title-jumbotron {\n  color: #fff;\n  font-weight: 600;\n  font-size: 36px;\n  text-shadow: 1px 1px #141414;\n  padding-top: 70px;\n}\n\n.text-jumbotron {\n  color: #fff;\n  margin-top: 15px;\n  font-size: 20px;\n  font-weight: 400;\n  text-shadow: 1px 2px black;\n}\n\n.text-jumbotron span {\n  color: var(--main-color);\n}\n\n/*\n  Main Content\n*/\n\nmain {\n  flex: 1;\n}\n\n.content {\n  padding: 32px;\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  padding: 20px;\n  text-align: center;\n}\n\n.content__heading h1 {\n  font-size: 36px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 350;\n}\n/*\n  Restaurants\n*/\n\n.restaurants {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n  Restaurant Item\n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 200px;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 10px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  font-size: large;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #080808;\n  text-decoration: none;\n  padding: 10px;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.restaurant_place {\n  margin-top: 15px;\n  display: inline-block;\n\tborder-radius: 6px;\n\tbackground-color: #08b928;\n\tpadding: 6px 12px 6px;\n\tcolor: white;\n\tfont-weight: 350;\n}\n\n/*\n  restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 80%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 8px;\n}\n\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n/*\n  Footer\n*/\n\nfooter {\n  padding: 16px;\n  background-color: rgb(21, 80, 44);\n}\n\nfooter p {\n  margin-top: 16px;\n  text-decoration: none;\n  text-align: center;\n  color: #ffffff;\n}\n\n/*\n  Button\n*/\n"],sourceRoot:""}]);const E=d},362:(n,A,t)=>{var a=t(379),e=t.n(a),r=t(795),i=t.n(r),o=t(569),p=t.n(o),s=t(565),d=t.n(s),l=t(216),E=t.n(l),C=t(589),g=t.n(C),u=t(948),c={};c.styleTagTransform=g(),c.setAttributes=d(),c.insert=p().bind(null,"head"),c.domAPI=i(),c.insertStyleElement=E(),e()(u.Z,c),u.Z&&u.Z.locals&&u.Z.locals},915:(n,A,t)=>{var a=t(379),e=t.n(a),r=t(795),i=t.n(r),o=t(569),p=t.n(o),s=t(565),d=t.n(s),l=t(216),E=t.n(l),C=t(589),g=t.n(C),u=t(890),c={};c.styleTagTransform=g(),c.setAttributes=d(),c.insert=p().bind(null,"head"),c.domAPI=i(),c.insertStyleElement=E(),e()(u.Z,c),u.Z&&u.Z.locals&&u.Z.locals}},t={};function a(n){var e=t[n];if(void 0!==e)return e.exports;var r=t[n]={id:n,exports:{}};return A[n](r,r.exports,a),r.exports}a.m=A,n=[],a.O=(A,t,e,r)=>{if(!t){var i=1/0;for(d=0;d<n.length;d++){for(var[t,e,r]=n[d],o=!0,p=0;p<t.length;p++)(!1&r||i>=r)&&Object.keys(a.O).every((n=>a.O[n](t[p])))?t.splice(p--,1):(o=!1,r<i&&(i=r));if(o){n.splice(d--,1);var s=e();void 0!==s&&(A=s)}}return A}r=r||0;for(var d=n.length;d>0&&n[d-1][2]>r;d--)n[d]=n[d-1];n[d]=[t,e,r]},a.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return a.d(A,{a:A}),A},a.d=(n,A)=>{for(var t in A)a.o(A,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var A=a.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");if(t.length)for(var e=t.length-1;e>-1&&!n;)n=t[e--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),(()=>{a.b=document.baseURI||self.location.href;var n={400:0};a.O.j=A=>0===n[A];var A=(A,t)=>{var e,r,[i,o,p]=t,s=0;if(i.some((A=>0!==n[A]))){for(e in o)a.o(o,e)&&(a.m[e]=o[e]);if(p)var d=p(a)}for(A&&A(t);s<i.length;s++)r=i[s],a.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return a.O(d)},t=self.webpackChunkfoodfast=self.webpackChunkfoodfast||[];t.forEach(A.bind(null,0)),t.push=A.bind(null,t.push.bind(t))})(),a.nc=void 0;var e=a.O(void 0,[192,2,193,337,268],(()=>a(253)));e=a.O(e)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map