"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{2725:function(e,n,r){var t=r(184);n.Z=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("h3",{children:"No info found..."})})}},9681:function(e,n,r){r.r(n);var t=r(5861),c=r(8152),s=r(7757),a=r.n(s),u=r(6871),i=r(2791),o=r(4569),h=r.n(o),l=r(2725),f=r(184);n.default=function(){var e=(0,u.bx)(),n=(0,i.useState)([]),r=(0,c.Z)(n,2),s=r[0],o=r[1];return(0,i.useEffect)((function(){var n=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US&page=1"));case 3:r=e.sent,o(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:return e.prev=10,console.log("success"),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();n(e)}),[e]),0===s.length?(0,f.jsx)(l.Z,{}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Reviews:"}),(0,f.jsx)("ul",{children:s.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.author)}))})]})}}}]);
//# sourceMappingURL=681.db8b2706.chunk.js.map