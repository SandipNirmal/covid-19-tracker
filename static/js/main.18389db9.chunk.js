(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],[,,function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n=3e5,r={}},function(e,a,t){"use strict";var n=t(9),r=t.n(n),i=t(14),o=t(1),c=t(0),l=t(2);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a,t=Object(c.useState)(),n=Object(o.a)(t,2),s=n[0],u=n[1],d=Object(c.useState)(),m=Object(o.a)(d,2),f=m[0],v=m[1],h=Object(c.useState)(),E=Object(o.a)(h,2),S=E[0],g=E[1];return Object(c.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v(!0),g(),!(l.b[e]&&l.b[e].expiry>Date.now())){t.next=7;break}u(l.b[e].data),v(!1),t.next=12;break;case 7:return t.next=9,fetch(e).then((function(e){return e.json()})).catch((function(e){g(e||"Failed to load data!")}));case 9:(n=t.sent)?(u(n),l.b[e]={data:n,expiry:Date.now()+a}):g("Failed to load data!"),v(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,a]),{stats:s,loading:f,error:S}}},function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=(t(22),{success:"#28a745",warning:"#ffc107",info:"#17a2b8",danger:"#282f36"}),o={success:"#ffffff",warning:"#ffffff",info:"#ffffff",danger:"#ffffff",dark:"#282f36"},c=function(e){return e?{backgroundColor:i[e]||"#f6f6f6",color:o[e]||o.dark}:{}};a.a=function(e){var a=e.title,t=e.count,n=e.total,i=e.variant,o=e.increase,l=n?(t/n*100).toFixed(2):0;return r.a.createElement("div",{className:"card",style:c(i)},r.a.createElement("h3",{className:"card-title"},a),r.a.createElement("div",{className:"card-info"},r.a.createElement("div",{className:"flex align-center wrap"},r.a.createElement("h2",{className:"count"},t.toLocaleString()),o?r.a.createElement("span",null,"( \u2191 ",o," )"):null),r.a.createElement("h2",{className:"count"},"".concat(l,"%"))))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return i}));var n={AFG:"Afghanistan",ALA:"Aland Islands",ALB:"Albania",DZA:"Algeria",ASM:"American Samoa",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATA:"Antarctica",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia",BES:"Bonaire, Saint Eustatius and Saba ",BIH:"Bosnia and Herzegovina",BWA:"Botswana",BVT:"Bouvet Island",BRA:"Brazil",IOT:"British Indian Ocean Territory",VGB:"British Virgin Islands",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CPV:"Cape Verde",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",CHL:"Chile",CHN:"China",CXR:"Christmas Island",CCK:"Cocos Islands",COL:"Colombia",COM:"Comoros",COK:"Cook Islands",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Curacao",CYP:"Cyprus",CZE:"Czech Republic",COD:"Democratic Republic of the Congo",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",TLS:"East Timor",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",ATF:"French Southern Territories",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GUM:"Guam",GTM:"Guatemala",GGY:"Guernsey",GNB:"Guinea-Bissau",GIN:"Guinea",GUY:"Guyana",HTI:"Haiti",HMD:"Heard Island and McDonald Islands",HND:"Honduras",HKG:"Hong Kong",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",CIV:"Ivory Coast",JAM:"Jamaica",JPN:"Japan",JEY:"Jersey",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KIR:"Kiribati",XKX:"Kosovo",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MHL:"Marshall Islands",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",FSM:"Micronesia",MDA:"Moldova",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NRU:"Nauru",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NIU:"Niue",NFK:"Norfolk Island",PRK:"North Korea",MNP:"Northern Mariana Islands",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PLW:"Palau",PSE:"Palestinian Territory",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",PCN:"Pitcairn",POL:"Poland",PRT:"Portugal",PRI:"Puerto Rico",QAT:"Qatar",COG:"Republic of the Congo",REU:"Reunion",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",BLM:"Saint Barthelemy",SHN:"Saint Helena",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin",SPM:"Saint Pierre and Miquelon",VCT:"Saint Vincent and the Grenadines",WSM:"Samoa",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten",SVK:"Slovakia",SVN:"Slovenia",SLB:"Solomon Islands",SOM:"Somalia",ZAF:"South Africa",SGS:"South Georgia and the South Sandwich Islands",KOR:"South Korea",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SJM:"Svalbard and Jan Mayen",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syria",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TGO:"Togo",TKL:"Tokelau",TON:"Tonga",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",TCA:"Turks and Caicos Islands",TUV:"Tuvalu",VIR:"U.S. Virgin Islands",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",UMI:"United States Minor Outlying Islands",URY:"Uruguay",USA:"US",UZB:"Uzbekistan",VUT:"Vanuatu",VAT:"Vatican",VEN:"Venezuela",VNM:"Vietnam",WLF:"Wallis and Futuna",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},t={confirmed:0,recovered:0,deaths:0,active:0,lastUpdate:0};return e.forEach((function(e){var n=e.countryRegion,r=e.lastUpdate,i=e.confirmed,o=e.recovered,c=e.deaths,l=e.active,s=e.iso3;t.confirmed+=i,t.recovered+=o,t.deaths+=c,t.active+=l,t.lastUpdate<r&&(t.lastUpdate=r),a[n]?(a[n].confirmed+=i,a[n].recovered+=o,a[n].deaths+=c,a[n].active+=l):a[n]={country:n,lastUpdate:r,confirmed:i,recovered:o,deaths:c,active:l,iso3:s}})),{worldwide:t,countriesData:Object.keys(a).map((function(e){return a[e]}))}},i={Confirmed:"confirmed",Recovered:"recovered",Deaths:"deaths"}},function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(4),o=t(8),c=t(3),l=t(2);t(24);a.a=r.a.memo((function(e){var a,t=e.title,n=e.url,s=void 0===n?"https://covid19.mathdro.id/api":n,u=e.previousDay,d=(u=void 0===u?{}:u).confirmed,m=u.deaths,f=Object(c.a)(s,3*l.a),v=f.stats,h=f.error,E=f.loading;return r.a.createElement("div",{className:"stats-container"},r.a.createElement("h2",{className:"stats-title"},t),h?r.a.createElement("h4",{className:"error"},h):null,E?r.a.createElement(o.a,null):null,!v||E||h?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"confirmed-container"},r.a.createElement("div",{className:"confirmed"},r.a.createElement("h5",null,"Total Confirmed"),r.a.createElement("div",{className:"numbers"},r.a.createElement("h3",null,v.error?0:v.confirmed.value.toLocaleString()),d?r.a.createElement("span",null,"( \u2191 ",(v.confirmed.value-d).toLocaleString()," )"):null)),v.error?null:r.a.createElement("p",{className:"last-updated"},"Last Updated: ",(a=v.lastUpdate,new Date(a).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})))),r.a.createElement("div",{className:"card-container"},r.a.createElement(i.a,{title:"Recovered",count:v.error?0:v.recovered.value,total:v.error?0:v.confirmed.value,variant:"success"}),r.a.createElement(i.a,{title:"Deaths",count:v.error?0:v.deaths.value,increase:m&&(v.deaths.value-m).toLocaleString(),total:v.error?0:v.confirmed.value,variant:"danger"}))))}))},function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=r.a.memo((function(e){var a=e.count,t=void 0===a?0:a,n=e.type;return r.a.createElement("div",null,r.a.createElement("h5",{className:"color-".concat(n)},t.toLocaleString()),r.a.createElement("p",null,n))}));a.a=r.a.memo((function(e){var a=e.style,t=e.title,n=e.count,o=n.confirmed,c=n.recovered,l=n.deaths;return r.a.createElement("div",{style:a,className:"list-item"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,t)),r.a.createElement("div",{className:"count"},r.a.createElement(i,{count:o,type:"confirmed"}),r.a.createElement(i,{count:c||"NA",type:"recovered"}),r.a.createElement(i,{count:l,type:"deaths"})))}))},function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("div",{className:"spinner"})}},,,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),i=t.n(r),o=t(16),c=t(15),l=t(3),s=t(7),u=t(8),d=t(2),m=(t(26),t(5));a.default=function(){var e=Object(l.a)("https://covid19.mathdro.id/api/confirmed",3*d.a),a=e.stats,t=e.loading,f=e.error,v=Object(r.useState)([]),h=Object(n.a)(v,2),E=h[0],S=h[1],g=Object(r.useState)([]),b=Object(n.a)(g,2),N=b[0],p=b[1],M=!(!f&&!a)&&a.error;Object(r.useEffect)((function(){var e=Object(m.b)(a).countriesData;S(e),p(e.sort((function(e,a){return a.confirmed-e.confirmed})))}),[a]);var A=function(e){var a=e.index,t=e.style,n=N[a],r=n.country,o=n.confirmed,c=n.recovered,l=n.deaths;return i.a.createElement(s.a,{title:r,count:{confirmed:o,recovered:c,deaths:l},key:r,style:t})};return i.a.createElement("div",{className:"stats-container"},i.a.createElement("h2",{className:"stats-title"},"All Countries"),t?i.a.createElement(u.a,null):null,a&&!t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"country-list-actions"},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"countries"},"Sort By:"),i.a.createElement("select",{id:"countries",className:"select",onChange:function(e){!function(e){var a=E.slice();p(a.sort((function(a,t){return t[e]-a[e]})))}(e.target.value)}},Object.entries(m.c).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return i.a.createElement("option",{key:r,value:r},t)})))),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"country"},"Country:"),i.a.createElement("input",{className:"select",id:"country",onChange:function(e){!function(e){var a=E.slice();p(a.filter((function(a){return a.country.toLowerCase().includes(e.toLowerCase().trim())})))}(e.target.value)}}))),i.a.createElement("p",{className:"info"},"Total Affected Countries: ",i.a.createElement("b",null,E.length)),i.a.createElement(c.a,null,(function(e){e.height;var a=e.width;return i.a.createElement(o.a,{height:500,width:a,itemSize:a>480?50:70,itemCount:N.length,className:"list-container"},A)}))):M?i.a.createElement("h5",null,"Error Loading Data."):null)}},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),i=t.n(r),o=t(6),c=t(5);a.default=function(){var e=Object(r.useState)(localStorage.getItem("selected-country")||"IND"),a=Object(n.a)(e,2),t=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"selector"},i.a.createElement("label",{htmlFor:"country"},"Select Country:"),i.a.createElement("select",{id:"country",className:"select",onChange:function(e){var a;l(e.target.value),a=e.target.value,localStorage.setItem("selected-country",a)},defaultValue:t},i.a.createElement("option",{value:""},"Select Country"),Object.entries(c.a).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return i.a.createElement("option",{key:t,value:t},r)})))),t?i.a.createElement(o.a,{title:c.a[t],url:"https://covid19.mathdro.id/api/countries/".concat(t)}):null)}},,,,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),o=t.n(i);t(4);var c=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h3",null,"COVID-19 Tracker")))},l=t(6),s=(t(12),t(7),t(11),t(1));t(27);function u(e){var a=e.name,t=e.handleClick,n=e.selected?"tab-header-item tab-selected":"tab-header-item";return r.a.createElement("button",{onClick:t,className:n},a)}function d(e){var a=e.selectedIndex,t=e.handleClick,n=e.tabs;return r.a.createElement("div",{className:"tab-header"},n.map((function(e,n){var i=e.name;return r.a.createElement(u,{name:i,key:i,selected:n===a,handleClick:function(){t(n)}})})))}var m=function(e){var a=e.tabs,t=Object(n.useState)(0),i=Object(s.a)(t,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{tabs:a.map((function(e){return{name:e.name}})),handleClick:c,selectedIndex:o}),a[o].component)},f=t(3),v=(t(28),Object(n.lazy)((function(){return Promise.resolve().then(t.bind(null,11))}))),h=Object(n.lazy)((function(){return Promise.resolve().then(t.bind(null,12))}));var E=function(){var e=[{name:"Country List",component:r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(v,null))},{name:"Country Select",component:r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(h,null))}],a=Object(f.a)("https://covid19.mathdro.id/api/daily").stats,t={};if(a&&a.length){var i=a.length-1;t={confirmed:a[i].confirmed.total,deaths:a[i].deaths.total}}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{title:"Global",previousDay:t}),r.a.createElement(m,{tabs:e})))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-19-tracker","/service-worker.js");S?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(a,e)}))}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.18389db9.chunk.js.map