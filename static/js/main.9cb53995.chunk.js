(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],[,,,,,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),o=n.n(i),c=(n(11),{success:"#28a745",warning:"#ffc107",info:"#17a2b8",danger:"#282f36"}),l={success:"#ffffff",warning:"#ffffff",info:"#ffffff",danger:"#ffffff",dark:"#282f36"},s=function(e){return e?{backgroundColor:c[e]||"#f6f6f6",color:l[e]||l.dark}:{}};var u=function(e){var a=e.title,n=e.count,t=e.total,i=e.variant,o=t?(n/t*100).toFixed(2):0;return r.a.createElement("div",{className:"card",style:s(i)},r.a.createElement("h3",{className:"card-title"},a),r.a.createElement("div",{className:"card-info"},r.a.createElement("h2",{className:"count"},n.toLocaleString()),r.a.createElement("h2",{className:"count"},"".concat(o,"%"))))};var d=function(){return r.a.createElement("footer",null,r.a.createElement("h6",null,"Data Source:",r.a.createElement("a",{href:"https://covid19.mathdro.id/api"},"https://covid19.mathdro.id/api.")))};var m=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h3",null,"COVID-19 Tracker")))};var f=function(){return r.a.createElement("div",{className:"spinner"})},v=n(2),h=n.n(v),E=n(5),S=n(1);var N=function(e){var a=Object(t.useState)(),n=Object(S.a)(a,2),r=n[0],i=n[1],o=Object(t.useState)(),c=Object(S.a)(o,2),l=c[0],s=c[1],u=Object(t.useState)(),d=Object(S.a)(u,2),m=d[0],f=d[1];return Object(t.useEffect)((function(){function a(){return(a=Object(E.a)(h.a.mark((function a(){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(!0),f(),a.next=4,fetch(e).then((function(e){return e.json()})).catch((function(e){f(e||"Failed to load data!")}));case 4:(n=a.sent)?i(n):f("Failed to load data!"),s(!1);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),{stats:r,loading:l,error:m}};n(13);var g=r.a.memo((function(e){var a,n=e.title,t=e.url,i=N(void 0===t?"https://covid19.mathdro.id/api":t),o=i.stats,c=i.error,l=i.loading;return r.a.createElement("div",{className:"stats-container"},r.a.createElement("h2",{className:"stats-title"},n),c?r.a.createElement("h4",{className:"error"},c):null,l?r.a.createElement(f,null):null,!o||l||c?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"confirmed-container"},r.a.createElement("div",{className:"confirmed"},r.a.createElement("h5",null,"Total Confirmed"),r.a.createElement("h3",null,o.error?0:o.confirmed.value.toLocaleString())),o.error?null:r.a.createElement("p",{className:"last-updated"},"Last Updated: ",(a=o.lastUpdate,new Date(a).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})))),r.a.createElement("div",{className:"card-container"},r.a.createElement(u,{title:"Recovered",count:o.error?0:o.recovered.value,total:o.error?0:o.confirmed.value,variant:"success"}),r.a.createElement(u,{title:"Deaths",count:o.error?0:o.deaths.value,total:o.error?0:o.confirmed.value,variant:"danger"}))))})),M={AFG:"Afghanistan",ALA:"Aland Islands",ALB:"Albania",DZA:"Algeria",ASM:"American Samoa",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATA:"Antarctica",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia",BES:"Bonaire, Saint Eustatius and Saba ",BIH:"Bosnia and Herzegovina",BWA:"Botswana",BVT:"Bouvet Island",BRA:"Brazil",IOT:"British Indian Ocean Territory",VGB:"British Virgin Islands",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CPV:"Cape Verde",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",CHL:"Chile",CHN:"China",CXR:"Christmas Island",CCK:"Cocos Islands",COL:"Colombia",COM:"Comoros",COK:"Cook Islands",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Curacao",CYP:"Cyprus",CZE:"Czech Republic",COD:"Democratic Republic of the Congo",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",TLS:"East Timor",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",ATF:"French Southern Territories",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GUM:"Guam",GTM:"Guatemala",GGY:"Guernsey",GNB:"Guinea-Bissau",GIN:"Guinea",GUY:"Guyana",HTI:"Haiti",HMD:"Heard Island and McDonald Islands",HND:"Honduras",HKG:"Hong Kong",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",CIV:"Ivory Coast",JAM:"Jamaica",JPN:"Japan",JEY:"Jersey",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KIR:"Kiribati",XKX:"Kosovo",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MHL:"Marshall Islands",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",FSM:"Micronesia",MDA:"Moldova",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NRU:"Nauru",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NIU:"Niue",NFK:"Norfolk Island",PRK:"North Korea",MNP:"Northern Mariana Islands",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PLW:"Palau",PSE:"Palestinian Territory",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",PCN:"Pitcairn",POL:"Poland",PRT:"Portugal",PRI:"Puerto Rico",QAT:"Qatar",COG:"Republic of the Congo",REU:"Reunion",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",BLM:"Saint Barthelemy",SHN:"Saint Helena",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin",SPM:"Saint Pierre and Miquelon",VCT:"Saint Vincent and the Grenadines",WSM:"Samoa",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten",SVK:"Slovakia",SVN:"Slovenia",SLB:"Solomon Islands",SOM:"Somalia",ZAF:"South Africa",SGS:"South Georgia and the South Sandwich Islands",KOR:"South Korea",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SJM:"Svalbard and Jan Mayen",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syria",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TGO:"Togo",TKL:"Tokelau",TON:"Tonga",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",TCA:"Turks and Caicos Islands",TUV:"Tuvalu",VIR:"U.S. Virgin Islands",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",UMI:"United States Minor Outlying Islands",URY:"Uruguay",USA:"US",UZB:"Uzbekistan",VUT:"Vanuatu",VAT:"Vatican",VEN:"Venezuela",VNM:"Vietnam",WLF:"Wallis and Futuna",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},p={Confirmed:"confirmed",Recovered:"recovered",Deaths:"deaths"};var A=function(){var e=Object(t.useState)("IND"),a=Object(S.a)(e,2),n=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"selector"},r.a.createElement("label",{htmlFor:"country"},"Select Country:"),r.a.createElement("select",{id:"country",className:"select",onChange:function(e){i(e.target.value)},defaultValue:n},r.a.createElement("option",{value:""},"Select Country"),Object.entries(M).map((function(e){var a=Object(S.a)(e,2),n=a[0],t=a[1];return r.a.createElement("option",{key:n,value:n},t)})))),n?r.a.createElement(g,{title:M[n],url:"https://covid19.mathdro.id/api/countries/".concat(n)}):null)},C=r.a.memo((function(e){var a=e.count,n=void 0===a?0:a,t=e.type;return r.a.createElement("div",null,r.a.createElement("h5",{className:"color-".concat(t)},n.toLocaleString()),r.a.createElement("p",null,t))}));var b=r.a.memo((function(e){var a=e.title,n=e.count,t=n.confirmed,i=n.recovered,o=n.deaths;return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,a)),r.a.createElement("div",{className:"count"},r.a.createElement(C,{count:t,type:"confirmed"}),r.a.createElement(C,{count:i,type:"recovered"}),r.a.createElement(C,{count:o,type:"deaths"})))}));n(14);var R=function(){var e=N("https://covid19.mathdro.id/api/confirmed"),a=e.stats,n=e.loading,i=e.error,o=Object(t.useState)([]),c=Object(S.a)(o,2),l=c[0],s=c[1],u=Object(t.useState)([]),d=Object(S.a)(u,2),m=d[0],v=d[1],h=!(!i&&!a)&&a.error;return Object(t.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a={},n={confirmed:0,recovered:0,deaths:0,active:0,lastUpdate:0};return e.forEach((function(e){var t=e.countryRegion,r=e.lastUpdate,i=e.confirmed,o=e.recovered,c=e.deaths,l=e.active,s=e.iso3;n.confirmed+=i,n.recovered+=o,n.deaths+=c,n.active+=l,n.lastUpdate<r&&(n.lastUpdate=r),a[t]?(a[t].confirmed+=i,a[t].recovered+=o,a[t].deaths+=c,a[t].active+=l):a[t]={country:t,lastUpdate:r,confirmed:i,recovered:o,deaths:c,active:l,iso3:s}})),{worldwide:n,countriesData:Object.keys(a).map((function(e){return a[e]}))}}(a).countriesData;s(e),v(e.sort((function(e,a){return a.confirmed-e.confirmed})))}),[a]),r.a.createElement("div",{className:"stats-container"},r.a.createElement("h2",{className:"stats-title"},"All Countries"),n?r.a.createElement(f,null):null,a&&!n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"country-list-actions"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"countries"},"Sort By:"),r.a.createElement("select",{id:"countries",className:"select",onChange:function(e){!function(e){var a=l.slice();v(a.sort((function(a,n){return n[e]-a[e]})))}(e.target.value)}},Object.entries(p).map((function(e){var a=Object(S.a)(e,2),n=a[0],t=a[1];return r.a.createElement("option",{key:t,value:t},n)})))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{className:"select",id:"country",onChange:function(e){!function(e){var a=l.slice();v(a.filter((function(a){return a.country.toLowerCase().includes(e.toLowerCase().trim())})))}(e.target.value)}}))),r.a.createElement("p",{className:"info"},"Total Affected Countries: ",r.a.createElement("b",null,l.length)),m.map((function(e){var a=e.country,n=(e.lastUpdate,e.confirmed),t=e.recovered,i=e.deaths;e.active,e.iso3;return r.a.createElement(b,{title:a,count:{confirmed:n,recovered:t,deaths:i},key:a})}))):h?r.a.createElement("h5",null,"Error Loading Data."):null)};n(15);function y(e){var a=e.name,n=e.handleClick,t=e.selected?"tab-header-item tab-selected":"tab-header-item";return r.a.createElement("button",{onClick:n,className:t},a)}function B(e){var a=e.selectedIndex,n=e.handleClick,t=e.tabs;return r.a.createElement("div",{className:"tab-header"},t.map((function(e,t){var i=e.name;return r.a.createElement(y,{name:i,key:i,selected:t===a,handleClick:function(){n(t)}})})))}var I=function(e){var a=e.tabs,n=Object(t.useState)(0),i=Object(S.a)(n,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{tabs:a.map((function(e){return{name:e.name}})),handleClick:c,selectedIndex:o}),a[o].component)};n(16);var L=function(){var e=[{name:"Country Select",component:r.a.createElement(A,null)},{name:"Country List",component:r.a.createElement(R,null)}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(g,{title:"Global"}),r.a.createElement(I,{tabs:e})),r.a.createElement(d,null))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-19-tracker","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(a,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.9cb53995.chunk.js.map