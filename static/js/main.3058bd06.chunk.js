(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c.n(o),i=c(8),s=c.n(i),a=(c(4),c(5),c(2));var l=function(e){return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"d-flex justify-content-center clock-text col",id:"time",children:e.time.split("").map((function(t,c){return function(t,c){return":"===t?Object(n.jsx)("h1",{id:"digits",style:e.sec%2===0?{color:"white"}:{color:"red"},children:t},c):"A"===t?Object(n.jsx)("h1",{id:"period",style:e.sec%2===0?{color:"red"}:{color:"white"},children:"AM"},c):"P"===t?Object(n.jsx)("h1",{id:"period",style:e.sec%2===0?{color:"red"}:{color:"white"},children:"PM"},c):" "===t?Object(n.jsx)("h1",{id:"period",children:" "},c):"M"===t?null:Object(n.jsx)("h1",{id:"digits",children:t},c)}(t,c)}))})})},d=c(6),u=c.n(d),h=c(9),j=c(7),m=c.n(j);var f=function(e){var t=Object(o.useState)({lat:void 0,lon:void 0,errorMessage:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,sunrise:void 0,sunset:void 0,moonImage:void 0}),c=Object(a.a)(t,2),r=c[0],i=c[1],s=function(){var e=Object(h.a)(u.a.mark((function e(t,c){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(c,"&appid=").concat("f92749be4f33ecd4592771bab3081fd1","&units=metric"));case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent;try{i({lat:t,lon:c,city:o.name,temperatureC:Math.round(o.main.temp),temperatureF:Math.round(1.8*o.main.temp+32),humidity:o.main.humidity,description:o.weather[0].description,icon:o.weather[0].icon,sunrise:m.a.unix(o.sys.sunrise).format("hh:mm a"),sunset:m.a.unix(o.sys.sunset).format("hh:mm a"),country:o.sys.country})}catch(r){console.log(r)}case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e;navigator.geolocation?new Promise((function(t,c){navigator.geolocation.getCurrentPosition(t,c,e)})).then((function(e){s(e.coords.latitude,e.coords.longitude)})).catch((function(e){i({errorMessage:e.message})})):alert("Geolocation not available");var t=setInterval((function(){s(r.lat,r.lon)}),6e5);return function(){clearInterval(t)}}),[]),r.city?Object(n.jsx)("div",{className:"row",id:"weather",children:Object(n.jsx)("div",{className:"d-flex justify-content-center weather-text",children:Object(n.jsxs)("h1",{children:["[",r.city,", ",r.country,"] ",r.temperatureF," ","\xb0F"," / ",r.temperatureC,"\xb0C"]})})}):null};function b(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=function(e){var t=new Date,c="".concat(t.getHours()<=12?t.getHours():t.getHours()-12,":").concat(t.getMinutes(),":").concat(t.getSeconds()," ").concat(t.getHours()<12?"AM":"PM"),n="".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());for("0"===c[0]&&(c="12"+c.substring(1,c.length));c.length<11;)c+=" ";return"".concat(e?n:c)},s=Object(o.useState)(i(c)),d=Object(a.a)(s,2),u=d[0],h=d[1];return Object(o.useEffect)((function(){r(c);var e=setInterval((function(){h(i(c))}),1e3);return function(){clearInterval(e)}}),[c]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"form-check form-switch d-flex justify-content-center",children:[Object(n.jsx)("input",{className:"form-check-input switch",type:"checkbox",id:"flexSwitchCheckDefault",onClick:function(){r(!c)}}),Object(n.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:Object(n.jsx)("h5",{children:c?"Military":"Standard"})})]})}),Object(n.jsx)("div",{className:"row",style:{fontFamily:"sans-serif"},children:Object(n.jsxs)("form",{className:"d-flex justify-content-center",method:"get",ngnoform:"",action:"https://www.google.com/search",autoComplete:"off",children:[Object(n.jsx)("input",{className:"form-control",id:"search-box",type:"text",name:"q",placeholder:"Google"}),Object(n.jsx)("input",{type:"submit",value:"search",className:"btn material-icons",id:"searchButton"})]})}),Object(n.jsx)(l,{time:u,sec:(new Date).getSeconds()}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"d-flex justify-content-center text-info bg-dark date-text",children:Object(n.jsx)("h1",{children:(new Date).toDateString()})})}),Object(n.jsx)(f,{}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{className:"text-white",style:{textDecoration:"none"},href:"https://github.com/akamran2001/Clock",children:Object(n.jsx)("h6",{style:{fontFamily:"monospace"},children:"Created by Ahmed Kamran"})})})]})}var x=function(){return Object(n.jsx)("div",{style:{backgroundImage:"url(https://source.unsplash.com/".concat(window.innerWidth,"x").concat(window.innerHeight,"/daily?scenic)"),height:"100vh"},children:Object(n.jsx)(b,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()},4:function(e,t,c){},5:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.3058bd06.chunk.js.map