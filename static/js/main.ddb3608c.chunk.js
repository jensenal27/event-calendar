(this.webpackJsonpcaldemo=this.webpackJsonpcaldemo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mapdemo.b91d544f.jpg"},function(e,t,a){e.exports=a.p+"static/media/wifi.e96a9e58.svg"},function(e,t,a){e.exports=a.p+"static/media/next.4fa3a670.svg"},function(e,t,a){e.exports=a.p+"static/media/last.4e3521de.svg"},function(e,t,a){e.exports=a.p+"static/media/map.a4dbc07f.svg"},function(e,t,a){e.exports=a.p+"static/media/close.d8d76782.svg"},function(e,t,a){e.exports=a.p+"static/media/reset.7b017f40.svg"},,,,,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(12),r=a.n(o),l=(a(29),a(3)),s=(a(30),a(31),a(1)),m=a.n(s),c=a(4),d=function(e){var t=e.currentDate;return n.a.createElement("div",{className:"headerdiv"},n.a.createElement("div",{className:"headerwrap"},n.a.createElement("div",{className:"demoalert"},n.a.createElement("span",null,"DEMO: Press F11 to view in Fullscreen")),n.a.createElement("div",{className:"header-col"},n.a.createElement("span",{className:"month"},m()(t).format("MMMM").toUpperCase()))))},u=function(e){for(var t=e.currentDate,a=[],i=m()(t).startOf("week"),o=0;o<7;o++)a.push(n.a.createElement("div",{className:"day-col",key:o},m()(i).add(o,"days").format("dddd")));return n.a.createElement("div",{className:"daysdiv"},n.a.createElement("div",{className:"dayswrap"},a))},p=(a(11),function(e){var t=e.title,a=e.date,i=e.type,o=m()(a).tz("America/New_York").format("h:mm A");return n.a.createElement("span",{className:"event",id:i},t," | ",o)}),v=function(e){var t=e.type,a=e.description;return n.a.createElement("span",{className:"closure",id:t},a)},T=(a(35),function(e){for(var t=e.currentDate,a=e.selectedDate,i=e.modalAppear,o=e.events,r=e.closures,l=e.setSelectedDate,s=e.actualDate,c=e.setModal,d=e.setShowModal,u=e.setModalDate,T=e.setActiveModal,E=m()(t).startOf("month"),f=m()(E).endOf("month"),g=m()(E).startOf("week"),y=m()(f).endOf("month"),D=[],b=[],h=g,C="";h<=y;){for(var O=function(e){C=m()(h).format("D");var t=h;b.push(n.a.createElement("div",{className:"column cell ".concat(m()(h).isSame(a)&&!m()(h).isSame(E,"month")?"dis-selected":m()(h).isSame(E,"month")?m()(h).isSame(a)?"selected":m()(h).isSame(s,"day")?"current":"":"disabled"),key:h,onClick:function(){return function(e){!1===m()(e).isSame(a)?(l(e),u(m()(e).format("dddd, MMMM Do")),i(e),d(!0)):(l([]),c([]),T([]),d(!1))}(t)}},n.a.createElement("span",{className:"number"},C),n.a.createElement("span",{className:"bg"},C),n.a.createElement("div",{className:"closurewrap"},r.map((function(e,t){return h.isSame(r[t].DateAndTime,"day")?n.a.createElement(v,{key:t,id:r[t].id,type:r[t].ClosureType,description:r[t].Description}):null}))),n.a.createElement("div",{className:"eventwrap"},o.map((function(e,t){return h.isSame(o[t].DateAndTime,"day")?n.a.createElement(p,{key:t,id:o[t].id,title:o[t].Title,date:o[t].DateAndTime,type:o[t].EventType}):null}))))),h=m()(h).add(1,"days")},N=0;N<7;N++)O();D.push(n.a.createElement("div",{className:"row",key:h}," ",b," ")),b=[]}return n.a.createElement("div",{className:"rowsdiv"},D)}),E=function(e){var t=e.item.Title,a=e.item.POC,i=e.item.EventType,o=e.item.Description,r=e.item.Room,l=e.item.DateAndTime,s=e.item.EndDateAndTime,c=m()(l),d=m()(s),u=c.tz("America/New_York").format("h:mm A"),p=d.tz("America/New_York").format("h:mm A");return n.a.createElement("div",{className:"modalevent",id:"modalevent-"+i},n.a.createElement("div",{className:"eventtitle"},t),n.a.createElement("div",{className:"eventpoc"},"POC: ",a),n.a.createElement("div",{className:"eventdescription"},o),n.a.createElement("div",{className:"eventtime"},u," - ",p),n.a.createElement("div",{className:"eventroom"},r))},f=a(2),g=function(e){var t=e.modals,a=Object(f.c)(t,(function(e){return e.Id}),{config:f.b.gentle,from:{opacity:0,transform:"translatex(-600px)"},enter:{opacity:1,transform:"translatex(0px)"},leave:{opacity:0,transform:"translatex(-600px)"},trail:400});return n.a.createElement("div",{className:"eventsmodalentry"},a.map((function(e){var t=e.item,a=e.key,i=e.props;return n.a.createElement(f.a.div,{key:a,style:i},n.a.createElement(E,{item:t}))})))},y=function(e){var t=e.type,a=e.description;return n.a.createElement("div",{className:"modalclosure",id:"modalclosure-"+t},a)},D=(a(36),function(e){var t=e.modalDate,a=e.modals,i=e.modalClosures,o=Object(f.c)(a,(function(e){return e.Id}),{config:f.b.gentle,from:{opacity:0,width:0,height:0,transform:"translatex(-600px)"},enter:{opacity:1,width:1,height:1,transform:"translatex(0px)"},leave:{opacity:0,width:0,height:0,transform:"translatex(-600px)"}});return n.a.createElement("div",{className:"eventsmodalwrap"},n.a.createElement("div",{className:"modaldate"},t),n.a.createElement("div",{className:"modalclosurewrap"},i.map((function(e,t){return n.a.createElement(y,{key:t,id:i[t].id,type:i[t].ClosureType,description:i[t].Description})}))),o.map((function(e){e.item;var t=e.key,i=e.props;return n.a.createElement(f.a.div,{key:t,style:i},n.a.createElement(g,{modals:a}))})))}),b=function(e){var t=e.showModal,a=e.modalDate,i=e.modals,o=e.modalClosures;return Object(f.c)(t,null,{config:f.b.gentle,from:{opacity:0,transform:"translatex(-600px)"},enter:{opacity:1,transform:"translatex(0px)"},leave:{opacity:0,transform:"translatex(-600px)"}}).map((function(e){var t=e.item,r=e.props,l=e.key;return t&&n.a.createElement(f.a.div,{className:"modaldiv",key:l,style:r},n.a.createElement(D,{modalDate:a,modals:i,modalClosures:o}))}))},h=a(13),C=a.n(h),O=function(e){var t=e.showMap;return Object(f.c)(t,null,{config:f.b.wobbly,from:{opacity:0,transform:"rotatex(90deg)"},enter:{opacity:1,transform:"rotatex(0deg)"},leave:{opacity:0,transform:"rotatex(90deg)"}}).map((function(e){var t=e.item,a=e.props,i=e.key;return t&&n.a.createElement(f.a.div,{className:"mapdiv",key:i,style:a},n.a.createElement("img",{id:"map",src:C.a,alt:"map"}))}))},N=a(14),x=a.n(N),q=a(15),A=a.n(q),w=a(16),k=a.n(w),L=a(17),I=a.n(L),Z=a(18),j=a.n(Z),S=a(19),U=a.n(S),M=function(e){var t=e.events,a=e.closures,o=(e.images,e.wifi),r=e.resetData,s=Object(i.useState)(new Date),p=Object(l.a)(s,2),v=p[0],E=p[1],f=Object(i.useState)(new Date),g=Object(l.a)(f,2),y=g[0],D=g[1],h=Object(i.useState)([]),C=Object(l.a)(h,2),N=C[0],q=C[1],w=Object(i.useState)([]),L=Object(l.a)(w,2),Z=L[0],S=L[1],M=Object(i.useState)([]),P=Object(l.a)(M,2),R=P[0],H=P[1],F=Object(i.useState)([]),z=Object(l.a)(F,2),B=(z[0],z[1]),Y=Object(i.useState)(""),_=Object(l.a)(Y,2),J=_[0],W=_[1],G=Object(i.useState)(!1),K=Object(l.a)(G,2),Q=K[0],V=K[1],X=Object(i.useState)(!1),$=Object(l.a)(X,2),ee=$[0],te=$[1],ae=Object(i.useState)(1),ie=Object(l.a)(ae,2),ne=ie[0],oe=ie[1],re=o.map((function(e,t){return e.Password})),le=o.map((function(e,t){return e.Network}));Object(i.useEffect)((function(){var e=setInterval((function(){oe((function(e){return e<60?e+1:0}))}),1e3);return function(){return clearInterval(e)}}),[ne]),Object(i.useEffect)((function(){if(0===ne){var e=document.getElementsByClassName("headerdiv"),t=document.getElementsByClassName("monthtoggle"),a=document.getElementsByClassName("maptoggle"),i=document.getElementsByClassName("wifitoggle");e[0].click(),q([]),S([]),B([]),V(!1),E(new Date),D(new Date),te(!1),t[0].classList.contains("flip")&&t[0].classList.remove("flip"),a[0].classList.contains("flip")&&a[0].classList.remove("flip"),i[0].classList.contains("flip")&&i[0].classList.remove("flip")}}),[ne]);var se=function(e){e.target.classList.contains("flip")?e.target.classList.remove("flip"):e.target.classList.add("flip")},me=function(e){te(!ee),se(e)};return n.a.createElement("div",{className:"calendar",onClick:function(){oe(1)}},n.a.createElement("div",{className:"titlediv"},n.a.createElement("span",{className:"title"},"Event Space"),n.a.createElement("span",{className:"titleblock"}),n.a.createElement("span",{className:"subtitle"},"CULTURE CALENDAR")),n.a.createElement(d,{currentDate:y}),n.a.createElement(u,{currentDate:y}),n.a.createElement("div",{className:"cellsdiv"},n.a.createElement(T,{closures:a,currentDate:y,actualDate:v,selectedDate:N,setSelectedDate:q,setModal:S,setModalDate:W,modalAppear:function(e){S(Object(c.a)(t.filter((function(t){return m()(t.DateAndTime).isSame(e,"day")})))),H(Object(c.a)(a.filter((function(t){return m()(t.DateAndTime).isSame(e,"day")})))),B(e)},setActiveModal:B,setShowModal:V,events:t})),n.a.createElement(b,{showModal:Q,modalDate:J,modals:Z,modalClosures:R}),n.a.createElement(O,{showMap:ee,toggleMap:me}),n.a.createElement("div",{className:"testbutton",onClick:r},n.a.createElement("img",{src:U.a,alt:""})),n.a.createElement("div",{className:"calendarkey"},n.a.createElement("div",{className:"leftkey"},n.a.createElement("span",{id:"keytitle"},"Events"),n.a.createElement("span",{id:"EventTypeOne"},"Event Type"),n.a.createElement("span",{id:"EventTypeTwo"},"Event Type"),n.a.createElement("span",{id:"EventTypeThree"},"Event Type"),n.a.createElement("span",{id:"EventTypeFour"},"Event Type")),n.a.createElement("div",{className:"rightkey"},n.a.createElement("span",{id:"keytitle"},"Closures"),n.a.createElement("span",{id:"ClosureTypeOne"},"Closure Type"),n.a.createElement("span",{id:"ClosureTypeTwo"},"Closure Type"),n.a.createElement("span",{id:"ClosureTypeThree"},"Closure Type"),n.a.createElement("span",{id:"keyHoliday"},"Holiday"))),n.a.createElement("div",{className:"maptoggle",onClick:me},n.a.createElement("div",{className:"togglefront"},n.a.createElement("div",{className:"togglemain"},n.a.createElement("img",{src:I.a,alt:""})),n.a.createElement("span",null,"Tap for Seating Chart")),n.a.createElement("div",{className:"toggleback"},n.a.createElement("div",{className:"togglemain"},n.a.createElement("img",{src:j.a,alt:""})),n.a.createElement("span",null,"Tap to Close"))),n.a.createElement("div",{className:"monthtoggle",onClick:function(e){m()(y).isSame(m()(v,"month"))?(se(e),D(m()(y).add(1,"months"))):m()(y).isSame(m()(v,"month").add(1,"months"))&&(se(e),D(m()(y).subtract(1,"months")))}},n.a.createElement("div",{className:"togglefront"},n.a.createElement("div",{className:"togglemain"},n.a.createElement("img",{src:A.a,alt:""})),n.a.createElement("span",null,"Tap for Next Month")),n.a.createElement("div",{className:"toggleback"},n.a.createElement("div",{className:"togglemain"},n.a.createElement("img",{src:k.a,alt:""})),n.a.createElement("span",null,"Tap for This Month"))),n.a.createElement("div",{className:"wifitoggle",onClick:se},n.a.createElement("div",{className:"togglefront"},n.a.createElement("div",{className:"togglemain"},n.a.createElement("img",{src:x.a,alt:""})),n.a.createElement("span",null,"Tap for Wi-Fi Password")),n.a.createElement("div",{className:"toggleback"},n.a.createElement("div",{className:"togglemain"},"net: ",le[0],n.a.createElement("br",null),"pw: ",re[0]),n.a.createElement("span",null,"Tap to Close"))))},P=a(5),R=a(6);function H(){var e=Object(P.a)(["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-size: cover;\n        background-position: 34% 50%;\n        background-repeat: none;\n        opacity: 0;\n        z-index: 0;\n        background-image: url(",");\n        animation: "," ","s linear infinite 0s;\n        animation-delay: ","s;\n    "]);return H=function(){return e},e}function F(){var e=Object(P.a)(["\n        0% { opacity: 0; background-position: 20% 50%; animation-timing-function: ease-in; }\n        ","% { opacity: 1; background-position: 35% 50%; animation-timing-function: ease-out; }\n        ","% { opacity: 1; background-position: 50% 50%; }\n        ","% { opacity: 0; background-position: 65% 50%; }\n        100% { opacity: 0 }\n    "]);return F=function(){return e},e}var z=function(e){var t=e.id,a=e.url,i=e.images,o=10*t-10,r=10*i.length,l=i.length/r*100/2,s=2*l+1,m=3*l+1,c=Object(R.b)(F(),l,s,m),d=R.a.div(H(),a,c,r,o);return n.a.createElement("li",null,n.a.createElement(d,null))},B=(a(42),function(e){var t=e.images;return n.a.createElement("div",{className:"slideshowwrap"},n.a.createElement("ul",{className:"slideshow"},t.map((function(e,a){return n.a.createElement(z,{key:a,images:t,id:t[a].Id,url:t[a].Url})}))))}),Y=[{Id:1,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-16T18:00:00Z",EndDateAndTime:"2020-04-16T20:00:00Z",Room:"Location",EventType:"EventTypeOne",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:2,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-16T16:30:00Z",EndDateAndTime:"2020-04-17T01:00:00Z",Room:"Location",EventType:"EventTypeTwo",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:3,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-28T00:00:00Z",EndDateAndTime:"2020-04-28T01:00:00Z",Room:"Location",EventType:"EventTypeTwo",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:4,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-19T15:00:00Z",EndDateAndTime:"2020-04-19T19:00:00Z",Room:"Location",EventType:"EventTypeTwo",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:5,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-01T00:00:00Z",EndDateAndTime:"2020-04-01T01:00:00Z",Room:"Location",EventType:"EventTypeThree",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:6,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-12T00:00:00Z",EndDateAndTime:"2020-04-12T01:00:00Z",Room:"Location",EventType:"EventTypeThree",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:7,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-19T19:30:00Z",EndDateAndTime:"2020-04-19T21:30:00Z",Room:"Location",EventType:"EventTypeFour",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:8,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-06T14:00:00Z",EndDateAndTime:"2020-04-06T22:00:00Z",Room:"Location",EventType:"EventTypeOne",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:9,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-09T19:00:00Z",EndDateAndTime:"2020-04-09T20:00:00Z",Room:"Location",EventType:"EventTypeTwo",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:10,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-17T17:00:00Z",EndDateAndTime:"2020-04-17T21:00:00Z",Room:"Location",EventType:"EventTypeThree",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:11,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-13T15:00:00Z",EndDateAndTime:"2020-04-13T17:00:00Z",Room:"Location",EventType:"EventTypeFour",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:12,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-25T12:30:00Z",EndDateAndTime:"2020-04-25T14:30:00Z",Room:"Location",EventType:"EventTypeOne",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:13,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-25T15:00:00Z",EndDateAndTime:"2020-04-25T17:00:00Z",Room:"Location",EventType:"EventTypeOne",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:14,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-26T17:00:00Z",EndDateAndTime:"2020-04-26T21:00:00Z",Room:"Location",EventType:"EventTypeThree",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:15,Title:"Event Title",POC:"Event Contact",DateAndTime:"2020-04-31T16:00:00Z",EndDateAndTime:"2020-04-31T20:00:00Z",Room:"Location",EventType:"EventTypeFour",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{Id:16,Title:"Event Title - Longer",POC:"Event Contact",DateAndTime:"2020-04-30T20:00:00Z",EndDateAndTime:"2020-04-30T22:00:00Z",Room:"Location",EventType:"EventTypeOne",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],_=[{Id:1,ClosureType:"ClosureTypeOne",DateAndTime:"2020-04-16T16:30:00Z",Description:"Closure Type One Info"},{Id:2,ClosureType:"ClosureTypeTwo",DateAndTime:"2019-11-31T19:30:00Z",Description:"Closure Type Two Info"},{Id:3,ClosureType:"ClosureTypeThree",DateAndTime:"2020-04-26T00:00:00Z",Description:"Closure Type Three Info"},{Id:4,ClosureType:"Holiday",DateAndTime:"2020-04-07T19:30:00Z",Description:"World Health Day"},{Id:5,ClosureType:"ClosureTypeTwo",DateAndTime:"2020-04-19T19:30:00Z",Description:"Closure Type Two Info"},{Id:6,ClosureType:"Holiday",DateAndTime:"2020-04-15T19:30:00Z",Description:"Tax Day"},{Id:7,ClosureType:"Holiday",DateAndTime:"2020-04-22T19:30:00Z",Description:"Earth Day"},{Id:8,ClosureType:"Holiday",DateAndTime:"2020-05-05T19:30:00Z",Description:"Cinco de Mayo"},{Id:9,ClosureType:"ClosureTypeOne",DateAndTime:"2020-04-06T16:30:00Z",Description:"Closure Type One Info"},{Id:10,ClosureType:"Holiday",DateAndTime:"2020-05-25T19:30:00Z",Description:"Memorial Day"}],J=[{Id:1,Url:"https://picsum.photos/id/20/1000/1000"},{Id:2,Url:"https://picsum.photos/id/22/1000/1000"},{Id:3,Url:"https://picsum.photos/id/23/1000/1000"},{Id:4,Url:"https://picsum.photos/id/24/1000/1000"},{Id:5,Url:"https://picsum.photos/id/25/1000/1000"},{Id:6,Url:"https://picsum.photos/id/26/1000/1000"},{Id:7,Url:"https://picsum.photos/id/27/1000/1000"},{Id:8,Url:"https://picsum.photos/id/28/1000/1000"},{Id:9,Url:"https://picsum.photos/id/29/1000/1000"},{Id:10,Url:"https://picsum.photos/id/30/1000/1000"}],W=[{Network:"Network",Password:"Password"},{Network:"Testing",Password:"Test Pass"}],G=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(i.useState)([]),s=Object(l.a)(r,2),c=s[0],d=s[1],u=Object(i.useState)([]),p=Object(l.a)(u,2),v=p[0],T=p[1],E=Object(i.useState)([]),f=Object(l.a)(E,2),g=f[0],y=f[1];Object(i.useEffect)((function(){o(Y),d(_),T(J),y(W)}),[]),a.sort((function(e,t){return m()(e.DateAndTime)-m()(t.DateAndTime)}));return n.a.createElement("div",{className:"container"},n.a.createElement(M,{events:a,closures:c,images:v,resetData:function(){console.log("This is a demo.")},wifi:g}),n.a.createElement(B,{images:v}))};r.a.render(n.a.createElement(G,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ddb3608c.chunk.js.map