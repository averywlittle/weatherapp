(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),s=n.n(c),i=(n(24),n(7)),o=n.n(i),u=n(10),d=n(11),l=(n(26),n(2)),j="/api",h={getCurrent:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cityName,r=t.coords,a={cityName:n,coords:r},e.next=4,fetch("".concat(j,"/current/"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),get5Day:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cityName,r=t.coords,a={cityName:n,coords:r},e.next=4,fetch("".concat(j,"/5day/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=n(9),p=n(1),m=function(){return Object(p.jsxs)("header",{className:"app-header",children:[Object(p.jsx)("h3",{children:"Avery's Weather App"}),Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)(b.b,{to:"/current",className:"link",children:"current"}),Object(p.jsx)(b.b,{to:"/5day",className:"link",children:"5day"})]})]})},f=function(e){return Object(p.jsxs)("div",{className:"user-input",children:[Object(p.jsx)("label",{children:"Enter your city:"}),Object(p.jsx)("input",{type:"text",value:e.input,onChange:function(t){return e.setInput(t.target.value)},className:"input-box"})]})},x=function(e){return e.message.length>0?Object(p.jsx)("div",{className:"notification",children:e.message}):e.error.length>0?Object(p.jsx)("div",{className:"notification error",children:e.error}):null},O=function(e){var t=e.data;return t?Object(p.jsxs)("div",{className:"weather-data-container",children:[Object(p.jsx)("p",{className:"currently",children:"It's currently..."}),Object(p.jsxs)("h4",{className:"temp",children:[t.main.temp," \u2109"]}),Object(p.jsxs)("p",{className:"city",children:["in ",t.name,", ",t.sys.country]})]}):null},y=function(e){var t=e.data;console.log(t);var n=new Date(t[0].dt_txt).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(p.jsxs)("div",{className:"forecast-card",children:[Object(p.jsx)("h4",{children:n}),t.map((function(e){var t="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png");return Object(p.jsxs)("div",{className:"snapshot",children:[Object(p.jsx)("p",{children:new Date(e.dt_txt).toTimeString().split(" ")[0]}),Object(p.jsxs)("p",{children:[e.main.temp," \u2109"]}),Object(p.jsx)("img",{src:t,alt:"weather icon"})]},e.dt_txt)}))]})},v=function(e){var t=e.data;if(t){for(var n=new Date(t.list[0].dt_txt).getDate(),r=[],a=0;a<t.list.length;a++){var c=t.list[a],s=new Date(c.dt_txt).getDate(),i=Number(s)-Number(n);void 0===r[i]&&(r[i]=[]),r[i].push(c)}return Object(p.jsxs)("div",{className:"forecast-data-container",children:[Object(p.jsxs)("p",{className:"forecast-header",children:["5 day forecast for ",t.city.name,", ",t.city.country]}),Object(p.jsx)("div",{className:"forecast-list",children:r.map((function(e){return Object(p.jsx)(y,{data:e},e[0].dt)}))})]})}return null},g=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),i=s[0],j=s[1],b=Object(r.useState)(""),y=Object(d.a)(b,2),g=y[0],N=y[1],w=Object(r.useState)(null),S=Object(d.a)(w,2),T=S[0],k=S[1],D=Object(r.useState)(null),C=Object(d.a)(D,2),_=C[0],A=C[1];Object(r.useEffect)((function(){var e=setTimeout(Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.length>0)){e.next=11;break}return t={cityName:g,coords:null},e.next=4,h.getCurrent(t);case 4:return n=e.sent,e.next=7,h.get5Day(t);case 7:r=e.sent,n.cod&&"404"===n.cod||r.cod&&"404"===r.cod?(j("The entered city name returned no result. Please try a different name."),setTimeout((function(){j("")}),5e3)):(k(n),A(r),a("Weather data for ".concat(n.name," retrieved.")),setTimeout((function(){a("")}),5e3)),e.next=12;break;case 11:I();case 12:case"end":return e.stop()}}),e)}))),500);return function(){return clearTimeout(e)}}),[g]);var I=function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={cityName:null,coords:{longitude:t.coords.longitude,latitude:t.coords.latitude}},e.next=3,h.getCurrent(n);case 3:return r=e.sent,k(r),e.next=7,h.get5Day(n);case 7:c=e.sent,A(c),a("Weather data for ".concat(r.name," retrieved.")),setTimeout((function(){a("")}),5e3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(T&&_)return null;navigator.geolocation.getCurrentPosition(e,(function(e){j("Could not retrieve your location, please type a city to get weather report."),setTimeout((function(){j("")}),5e3)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(m,{}),Object(p.jsx)(f,{setInput:N,input:g}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/5day",children:_&&Object(p.jsx)(v,{data:_})}),Object(p.jsx)(l.b,{path:"/current",children:T&&Object(p.jsx)(O,{data:T})}),Object(p.jsx)(l.b,{path:"/",children:Object(p.jsx)(l.a,{to:"/current"})})]}),Object(p.jsx)(x,{message:n,error:i})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(g,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.99b73272.chunk.js.map