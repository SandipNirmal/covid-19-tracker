(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),o=t.n(i),c=(t(11),{success:"#28a745",warning:"#ffc107",info:"#17a2b8",danger:"#282f36"}),l={success:"#ffffff",warning:"#ffffff",info:"#ffffff",danger:"#ffffff",dark:"#282f36"},s=function(e){return e?{backgroundColor:c[e]||"#f6f6f6",color:l[e]||l.dark}:{}};var u=function(e){var a=e.title,t=e.count,n=e.total,i=e.variant,o=e.increase,c=n?(t/n*100).toFixed(2):0;return r.a.createElement("div",{className:"card",style:s(i)},r.a.createElement("h3",{className:"card-title"},a),r.a.createElement("div",{className:"card-info"},r.a.createElement("div",{className:"flex align-center wrap"},r.a.createElement("h2",{className:"count"},t.toLocaleString()),o?r.a.createElement("span",null,"( \u2191 ",o," )"):null),r.a.createElement("h2",{className:"count"},"".concat(c,"%"))))};var d=function(){return r.a.createElement("footer",null,r.a.createElement("h6",null,"Data Source:",r.a.createElement("a",{href:"https://coronavirus.jhu.edu/",target:"_new"},"John Hopkins University")))};var m=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h3",null,"COVID-19 Tracker")))};var f=function(){return r.a.createElement("div",{className:"spinner"})},v=t(2),h=t.n(v),E=t(5),S=t(1);var g=function(e){var a=Object(n.useState)(),t=Object(S.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(),c=Object(S.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)(),d=Object(S.a)(u,2),m=d[0],f=d[1];return Object(n.useEffect)((function(){function a(){return(a=Object(E.a)(h.a.mark((function a(){var t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(!0),f(),a.next=4,fetch(e).then((function(e){return e.json()})).catch((function(e){f(e||"Failed to load data!")}));case 4:(t=a.sent)?i(t):f("Failed to load data!"),s(!1);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),{stats:r,loading:l,error:m}};t(13);var N=r.a.memo((function(e){var a,t=e.title,n=e.url,i=void 0===n?"https://covid19.mathdro.id/api":n,o=e.previousDay,c=(o=void 0===o?{}:o).confirmed,l=o.deaths,s=g(i),d=s.stats,m=s.error,v=s.loading;return r.a.createElement("div",{className:"stats-container"},r.a.createElement("h2",{className:"stats-title"},t),m?r.a.createElement("h4",{className:"error"},m):null,v?r.a.createElement(f,null):null,!d||v||m?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"confirmed-container"},r.a.createElement("div",{className:"confirmed"},r.a.createElement("h5",null,"Total Confirmed"),r.a.createElement("div",{className:"numbers"},r.a.createElement("h3",null,d.error?0:d.confirmed.value.toLocaleString()),c?r.a.createElement("span",null,"( \u2191 ",(d.confirmed.value-c).toLocaleString()," )"):null)),d.error?null:r.a.createElement("p",{className:"last-updated"},"Last Updated: ",(a=d.lastUpdate,new Date(a).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})))),r.a.createElement("div",{className:"card-container"},r.a.createElement(u,{title:"Recovered",count:d.error?0:d.recovered.value,total:d.error?0:d.confirmed.value,variant:"success"}),r.a.createElement(u,{title:"Deaths",count:d.error?0:d.deaths.value,increase:l&&(d.deaths.value-l).toLocaleString(),total:d.error?0:d.confirmed.value,variant:"danger"}))))})),p={AFG:"Afghanistan",ALA:"Aland Islands",ALB:"Albania",DZA:"Algeria",ASM:"American Samoa",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATA:"Antarctica",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia",BES:"Bonaire, Saint Eustatius and Saba ",BIH:"Bosnia and Herzegovina",BWA:"Botswana",BVT:"Bouvet Island",BRA:"Brazil",IOT:"British Indian Ocean Territory",VGB:"British Virgin Islands",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CPV:"Cape Verde",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",CHL:"Chile",CHN:"China",CXR:"Christmas Island",CCK:"Cocos Islands",COL:"Colombia",COM:"Comoros",COK:"Cook Islands",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Curacao",CYP:"Cyprus",CZE:"Czech Republic",COD:"Democratic Republic of the Congo",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",TLS:"East Timor",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",ATF:"French Southern Territories",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GUM:"Guam",GTM:"Guatemala",GGY:"Guernsey",GNB:"Guinea-Bissau",GIN:"Guinea",GUY:"Guyana",HTI:"Haiti",HMD:"Heard Island and McDonald Islands",HND:"Honduras",HKG:"Hong Kong",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",CIV:"Ivory Coast",JAM:"Jamaica",JPN:"Japan",JEY:"Jersey",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KIR:"Kiribati",XKX:"Kosovo",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MHL:"Marshall Islands",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",FSM:"Micronesia",MDA:"Moldova",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NRU:"Nauru",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NIU:"Niue",NFK:"Norfolk Island",PRK:"North Korea",MNP:"Northern Mariana Islands",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PLW:"Palau",PSE:"Palestinian Territory",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",PCN:"Pitcairn",POL:"Poland",PRT:"Portugal",PRI:"Puerto Rico",QAT:"Qatar",COG:"Republic of the Congo",REU:"Reunion",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",BLM:"Saint Barthelemy",SHN:"Saint Helena",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin",SPM:"Saint Pierre and Miquelon",VCT:"Saint Vincent and the Grenadines",WSM:"Samoa",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten",SVK:"Slovakia",SVN:"Slovenia",SLB:"Solomon Islands",SOM:"Somalia",ZAF:"South Africa",SGS:"South Georgia and the South Sandwich Islands",KOR:"South Korea",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SJM:"Svalbard and Jan Mayen",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syria",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TGO:"Togo",TKL:"Tokelau",TON:"Tonga",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",TCA:"Turks and Caicos Islands",TUV:"Tuvalu",VIR:"U.S. Virgin Islands",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",UMI:"United States Minor Outlying Islands",URY:"Uruguay",USA:"US",UZB:"Uzbekistan",VUT:"Vanuatu",VAT:"Vatican",VEN:"Venezuela",VNM:"Vietnam",WLF:"Wallis and Futuna",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},M={Confirmed:"confirmed",Recovered:"recovered",Deaths:"deaths"};var A=function(){var e=Object(n.useState)(localStorage.getItem("selected-country")||"IND"),a=Object(S.a)(e,2),t=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"selector"},r.a.createElement("label",{htmlFor:"country"},"Select Country:"),r.a.createElement("select",{id:"country",className:"select",onChange:function(e){var a;i(e.target.value),a=e.target.value,localStorage.setItem("selected-country",a)},defaultValue:t},r.a.createElement("option",{value:""},"Select Country"),Object.entries(p).map((function(e){var a=Object(S.a)(e,2),t=a[0],n=a[1];return r.a.createElement("option",{key:t,value:t},n)})))),t?r.a.createElement(N,{title:p[t],url:"https://covid19.mathdro.id/api/countries/".concat(t)}):null)},b=r.a.memo((function(e){var a=e.count,t=void 0===a?0:a,n=e.type;return r.a.createElement("div",null,r.a.createElement("h5",{className:"color-".concat(n)},t.toLocaleString()),r.a.createElement("p",null,n))}));var C=r.a.memo((function(e){var a=e.title,t=e.count,n=t.confirmed,i=t.recovered,o=t.deaths;return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,a)),r.a.createElement("div",{className:"count"},r.a.createElement(b,{count:n,type:"confirmed"}),r.a.createElement(b,{count:i||"NA",type:"recovered"}),r.a.createElement(b,{count:o,type:"deaths"})))}));t(14);var y=function(){var e=g("https://covid19.mathdro.id/api/confirmed"),a=e.stats,t=e.loading,i=e.error,o=Object(n.useState)([]),c=Object(S.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)([]),d=Object(S.a)(u,2),m=d[0],v=d[1],h=!(!i&&!a)&&a.error;return Object(n.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},t={confirmed:0,recovered:0,deaths:0,active:0,lastUpdate:0};return e.forEach((function(e){var n=e.countryRegion,r=e.lastUpdate,i=e.confirmed,o=e.recovered,c=e.deaths,l=e.active,s=e.iso3;t.confirmed+=i,t.recovered+=o,t.deaths+=c,t.active+=l,t.lastUpdate<r&&(t.lastUpdate=r),a[n]?(a[n].confirmed+=i,a[n].recovered+=o,a[n].deaths+=c,a[n].active+=l):a[n]={country:n,lastUpdate:r,confirmed:i,recovered:o,deaths:c,active:l,iso3:s}})),{worldwide:t,countriesData:Object.keys(a).map((function(e){return a[e]}))}}(a).countriesData;s(e),v(e.sort((function(e,a){return a.confirmed-e.confirmed})))}),[a]),r.a.createElement("div",{className:"stats-container"},r.a.createElement("h2",{className:"stats-title"},"All Countries"),t?r.a.createElement(f,null):null,a&&!t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"country-list-actions"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"countries"},"Sort By:"),r.a.createElement("select",{id:"countries",className:"select",onChange:function(e){!function(e){var a=l.slice();v(a.sort((function(a,t){return t[e]-a[e]})))}(e.target.value)}},Object.entries(M).map((function(e){var a=Object(S.a)(e,2),t=a[0],n=a[1];return r.a.createElement("option",{key:n,value:n},t)})))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{className:"select",id:"country",onChange:function(e){!function(e){var a=l.slice();v(a.filter((function(a){return a.country.toLowerCase().includes(e.toLowerCase().trim())})))}(e.target.value)}}))),r.a.createElement("p",{className:"info"},"Total Affected Countries: ",r.a.createElement("b",null,l.length)),m.map((function(e){var a=e.country,t=(e.lastUpdate,e.confirmed),n=e.recovered,i=e.deaths;e.active,e.iso3;return r.a.createElement(C,{title:a,count:{confirmed:t,recovered:n,deaths:i},key:a})}))):h?r.a.createElement("h5",null,"Error Loading Data."):null)};t(15);function R(e){var a=e.name,t=e.handleClick,n=e.selected?"tab-header-item tab-selected":"tab-header-item";return r.a.createElement("button",{onClick:t,className:n},a)}function I(e){var a=e.selectedIndex,t=e.handleClick,n=e.tabs;return r.a.createElement("div",{className:"tab-header"},n.map((function(e,n){var i=e.name;return r.a.createElement(R,{name:i,key:i,selected:n===a,handleClick:function(){t(n)}})})))}var B=function(e){var a=e.tabs,t=Object(n.useState)(0),i=Object(S.a)(t,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{tabs:a.map((function(e){return{name:e.name}})),handleClick:c,selectedIndex:o}),a[o].component)};t(16);var L=function(){var e=[{name:"Country List",component:r.a.createElement(y,null)},{name:"Country Select",component:r.a.createElement(A,null)}],a=g("https://covid19.mathdro.id/api/daily").stats,t={};if(a&&a.length){var n=a.length-1;t={confirmed:a[n].confirmed.total,deaths:a[n].deaths.total}}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,{title:"Global",previousDay:t}),r.a.createElement(B,{tabs:e})),r.a.createElement(d,null))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-19-tracker","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(a,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.f24c2375.chunk.js.map