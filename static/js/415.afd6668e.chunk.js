"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5415:function(e,t,s){s.r(t);var a=s(5861),n=s(8152),i=s(7757),r=s.n(i),c=s(4569),l=s.n(c),o=s(3504),m=s(2791),u=s(3528),p=s(184);t.default=function(){var e=(0,m.useState)([]),t=(0,n.Z)(e,2),s=t[0],i=t[1],c=(0,m.useState)([]),d=(0,n.Z)(c,2),h=d[0],f=d[1];return(0,m.useEffect)((function(){function e(){return(e=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("https://api.themoviedb.org/3/trending/movie/day?api_key=335e18ee033f463b61f137f6ef07bd65");case 2:t=e.sent,i(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,m.useEffect)((function(){f(s.map((function(e){return e.poster_path})))}),[s]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending Todays"}),(0,p.jsx)("ul",{className:u.Z.slider_ul,children:h.map((function(e){return(0,p.jsx)("img",{className:u.Z.moving_images,src:"https://image.tmdb.org/t/p/original/".concat(e),alt:""},e)}))}),(0,p.jsx)("ul",{className:u.Z.trending_list,style:{},children:s.map((function(e){return(0,p.jsx)("li",{className:u.Z.link_item,children:(0,p.jsxs)(o.rU,{className:u.Z.list_links,to:"movies/".concat(e.id),children:[(0,p.jsx)("img",{className:u.Z.poster_img,src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:""},e.title),(0,p.jsxs)("div",{className:u.Z.title_div,children:[(0,p.jsx)("p",{className:u.Z.movie_name,children:e.title}),(0,p.jsxs)("p",{className:u.Z.vote,children:["IMDB: ",e.vote_average]})]})]},e.id)})}))})]})}}}]);
//# sourceMappingURL=415.afd6668e.chunk.js.map