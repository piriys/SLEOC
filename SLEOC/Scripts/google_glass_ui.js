var g=this,k=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};Math.random();var m=function(a,b){return a<b?-1:a>b?1:0};Math.random();var n;t:{var p=g.navigator;if(p){var s=p.userAgent;if(s){n=s;break t}}n=""};var aa=-1!=n.indexOf("Opera")||-1!=n.indexOf("OPR"),t=-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE"),v=-1!=n.indexOf("Gecko")&&-1==n.toLowerCase().indexOf("webkit")&&!(-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE")),ba=-1!=n.toLowerCase().indexOf("webkit"),w=function(){var a=g.document;return a?a.documentMode:void 0},x=function(){var a="",b;if(aa&&g.opera)return a=g.opera.version,"function"==k(a)?a():a;v?b=/rv\:([^\);]+)(\)|;)/:t?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ba&&(b=/WebKit\/(\S+)/);b&&(a=
(a=b.exec(n))?a[1]:"");return t&&(b=w(),b>parseFloat(a))?String(b):a}(),y={},z=function(a){if(!y[a]){for(var b=0,c=String(x).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"",u=RegExp("(\\d*)(\\D*)","g"),ca=RegExp("(\\d*)(\\D*)","g");do{var q=u.exec(h)||["","",""],r=ca.exec(l)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=m(0==q[1].length?0:parseInt(q[1],10),
0==r[1].length?0:parseInt(r[1],10))||m(0==q[2].length,0==r[2].length)||m(q[2],r[2])}while(0==b)}y[a]=0<=b}},A=g.document,da=A&&t?w()||("CSS1Compat"==A.compatMode?parseInt(x,10):5):void 0;var B;if(!(B=!v&&!t)){var C;if(C=t)C=t&&9<=da;B=C}B||v&&z("1.9.1");t&&z("9");var D=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};var _movie='<article>\n  <figure>\n    <img src="$ROOT/links/movie.jpg">\n  </figure>\n  <section>\n    <h1 class="text-large">Movie</h1>\n    <p class="text-x-small">\n      <img class="icon-small" src="$ROOT/links/rated_r.png">\n      120 min / Drama\n    </p>\n    <hr>\n    <p class="text-normal">\n      1:15 2:10 4:15<br>\n      Movie Theatre\n    </p>\n  </section>\n</article>\n',_flight='<article>\n  <section>\n    <div class="layout-figure">\n      <div class="align-center">\n        <p class="text-x-large">BOS</p>\n        <img src="$ROOT/links/plane.png" width="50" height="50">\n        <p class="text-x-large">SFO</p>\n      </div>\n      <div>\n        <div class="text-normal">\n          <p>Virgin America 351</p>\n          <p>Gate B38</p>\n          <p>8:35am</p>\n          <p class="green">On Time</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</article>\n',
_sports='<article>\n  <section>\n    <div class="layout-two-column">\n      <div class="align-center">\n        <p>Celtics</p>\n        <p class="text-x-large">101</p>\n      </div>\n      <div class="align-center">\n        <p>Bulls</p>\n        <p class="text-x-large">95</p>\n      </div>\n    </div>\n  </section>\n  <footer>\n    <p>Final Score</p>\n  </footer>\n</article>\n',_simpleEvent='<article>\n  <section>\n    <div class="text-auto-size">\n      <p class="yellow">8:00<sub>PM</sub></p>\n      <p>Dinner with folks tonight</p>\n    </div>\n  </section>\n  <footer>\n    <div>Their place</div>\n  </footer>\n</article>\n',
_imageList='<article>\n  <figure>\n    <img src="$ROOT/links/lincoln.png">\n  </figure>\n  <section>\n    <table class="text-small align-justify no-border"> \n      <tbody>\n        <tr>\n          <td class="muted">Born</td>\n          <td>Feb 12, 1809</td>\n        </tr>\n        <tr>\n          <td class="muted">Died</td>\n          <td>Apr 15, 1865</td>\n        </tr>\n        <tr>\n          <td class="muted">Height</td>\n          <td>6\' 4"</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n',
_mosaicList='<article>\n  <figure>\n    <ul class="mosaic mosaic3">\n      <li style="background-image: url($ROOT/links/washington.jpg)"></li>\n      <li style="background-image: url($ROOT/links/lincoln.png)"></li>\n      <li style="background-image: url($ROOT/links/obama.jpg)"></li>\n      <li style="background-image: url($ROOT/links/washington.jpg)"></li>\n      <li style="background-image: url($ROOT/links/lincoln.png)"></li>\n    </ul>\n  </figure>\n  <section>\n    <p class="text-small muted">\n      U.S. Presidents\n    </p>\n    <table class="text-small align-justify">\n      <tbody>\n        <tr>\n          <td>Washington</td>\n          <td class="muted">1<sup>st</sup></td>\n        </tr>\n        <tr>\n          <td>Lincoln</td>\n          <td class="muted">16<sup>th</sup></td>\n        </tr>\n        <tr>\n          <td>Obama</td>\n          <td class="muted">44<sup>th</sup></td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n',
_stock='<article>\n  <section>\n    <table class="align-justify"> \n      <tbody>\n        <tr>\n          <td>AAPL</td>\n          <td>503.73</td>\n          <td class="red">-16.57 (3.18%)</td>\n        </tr>\n        <tr>\n          <td>AMZN</td>\n          <td>274.03</td>\n          <td class="green">+6.09 (2.27%)</td>\n        </tr>\n        <tr>\n          <td>GOOG</td>\n          <td>727.58</td>\n          <td class="red">-12.41 (1.68%)</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n',
_transit='<article>\n  <section>\n    <table class="text-small">\n      <tbody>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0000_blue.png" class="icon-small">\n            Daly City <span class="muted">\u203a</span> Dublin\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 5 min</div>\n        </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0001_green.png" class="icon-small">\n            Milbrae <span class="muted">\u203a</span> Richmond\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 7 min</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0002_yellow.png" class="icon-small">\n            Fremont <span class="muted">\u203a</span> Daly City\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 16 min</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0003_red.png" class="icon-small">\n            Pittsburg/Bay Point <span class="muted">\u203a</span> SFO\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 21 min</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <footer>\n    <img src="$ROOT/links/icons_30_0025_geo_transit.png" class="left">\n    <p>Embarcadero BART</p>\n  </footer>\n</article>\n',
_list='<article>\n  <section>\n    <ul class="text-x-small">\n      <li>Gingerbread</li>\n      <li>Chocolate Chip Cookies</li>\n      <li>Tiramisu</li>\n      <li>Donuts</li>\n      <li>Sugar Plum Gummies</li>\n    </ul>\n  </section>\n  <footer>\n    <p>Grocery list</p>\n  </footer>\n</article>\n',_autoResize='<article>\n  <section>\n    <p class="text-auto-size">This <em class="yellow">paragraph</em> auto-resizes according to the <strong class="blue">HTML</strong> content length.\n    </p>\n  </section>\n</article>\n',
_hybrid='<article class="photo">\n  <img src="$ROOT/links/filoli-spring-fling.jpg" width="100%" height="100%">\n  <div class="overlay-gradient-tall-dark"/>\n  <section>\n    <p class="text-auto-size">Spring Fling Fundraiser at Filoli</p>\n  </section>\n</article>\n',_mosaic='<article class="photo">\n  <ul class="mosaic mosaic3">\n    <li style="background-image: url($ROOT/links/washington.jpg)"></li>\n    <li style="background-image: url($ROOT/links/lincoln.png)"></li>\n    <li style="background-image: url($ROOT/links/obama.jpg)"></li>\n  </ul>\n  <div class="overlay-gradient-tall-dark"/>\n  <section>\n    <p class="text-auto-size">United States Presidents</p>\n  </section>\n</article>\n',
_multipage='<article class="cover-only">\n  <section>\n    <p class="text-auto-size">This is the cover card of a long list</p>\n  </section>\n  <footer>\n    <p>Hover to scroll</p>\n  </footer>\n</article>\n<article class="auto-paginate">\n  <ul class="text-x-small">\n    <li>First item</li>\n    <li>Second item</li>\n    <li>Third item</li>\n    <li>Fourth item</li>\n    <li>Fifth item</li>\n    <li>Sixth item</li>\n    <li>Seventh item</li>\n    <li>Eighth item</li>\n    <li>Ninth item</li>\n    <li>Tenth item</li>\n  </ul>\n</article>\n',
_author='<article class="author">\n  <img src="$ROOT/links/filoli-spring-fling.jpg" width="100%" height="100%">\n  <div class="overlay-full"/>\n  <header>\n    <img src="$ROOT/links/lincoln-avatar.png"/>\n    <h1>@abraham_lincoln</h1>\n    <h2>Gettysburg, Pennsylvania</h2>\n  </header>\n  <section>\n    <p class="text-auto-size">Four score and seven years ago, our fathers brought forth on this continent a new nation, conceived in <span class="blue">#liberty</span></p>\n  </section>\n</article>\n',
E=[{id:"TEXT",content:{text:"This item auto-resizes according to the text length",notification:{level:"DEFAULT"}}},{id:"AUTO_RESIZE",content:{html:_autoResize,notification:{level:"DEFAULT"}}},{id:"HYBRID",content:{html:_hybrid,notification:{level:"DEFAULT"}}},{id:"HYBRID_MOSAIC",content:{html:_mosaic,notification:{level:"DEFAULT"}}},{id:"MULTIPAGE",content:{html:_multipage,notification:{level:"DEFAULT"}}},{id:"SIMPLE_EVENT",content:{html:_simpleEvent,notification:{level:"DEFAULT"}}},{id:"LIST",content:{html:_list,
notification:{level:"DEFAULT"}}},{id:"IMAGE_LIST",content:{html:_imageList,notification:{level:"DEFAULT"}}},{id:"MOSAIC_LIST",content:{html:_mosaicList,notification:{level:"DEFAULT"}}},{id:"STOCK",content:{html:_stock,notification:{level:"DEFAULT"}}},{id:"SPORTS",content:{html:_sports,notification:{level:"DEFAULT"}}},{id:"FLIGHT",content:{html:_flight,notification:{level:"DEFAULT"}}},{id:"MOVIE",content:{html:_movie,notification:{level:"DEFAULT"}}},{id:"TRANSIT",content:{html:_transit,notification:{level:"DEFAULT"}}},
{id:"SIMPLE_MESSAGE",content:{text:"Hello Explorers,\n\nWelcome to Glass!\n\n+Project Glass\n",creator:{displayName:"Project Glass",imageUrls:["https://lh3.googleusercontent.com/-quy9Ox8dQJI/T3xUHhub6PI/AAAAAAAAHAQ/YvjqA3Pw1sM/glass_photos.jpg?sz=360"]},menuItems:[{action:"REPLY"}],notification:{level:"DEFAULT"}}},{id:"AUTHOR",content:{html:_author,notification:{level:"DEFAULT"}}}];var ea=function(){this.t=!1},F=[{l:"minute",value:60},{l:"hour",value:60},{l:"day",value:24}],J=function(a){a.c=document.getElementById("source-json");a.b=document.getElementById("source-html");a.h=document.getElementsByTagName("textarea");a.d=document.getElementById("client-id");a.m=document.getElementById("authorize-api-button");a.g=document.getElementById("send-button");for(var b=0;b<a.g.childNodes.length;++b)if(a.g.childNodes[b].nodeType==Element.TEXT_NODE){a.r=a.g.childNodes[b];break}a.u=document.getElementById("reload-button");
a.n=document.getElementById("delete-button");a.a=document.getElementById("brand-icon-url");a.s=document.getElementsByClassName("scroll-bar-inner");a.j=document.getElementById("menu-item-list");a.B=document.getElementById("menu-item-box");a.v=document.getElementById("top-container");a.k=document.getElementById("item-list");a.f=document.getElementById("butterbar");a.q=document.getElementById("json-button");a.e=document.getElementById("html-text-button");a.p=document.getElementById("preview");a.A=document.getElementById("auth-settings");
a.w=document.getElementById("api-actions");a.o=document.getElementById("source-container");t:{for(var b=document.getElementById("bottom-container").getElementsByClassName("selector"),c=0;c<b.length;++c)for(var d=b[c].getElementsByTagName("a"),e=0;e<d.length;++e){var f=d[e].attributes.getNamedItem("value");if(f&&"timeline"==f.value){b=d[e];break t}}b=null}a.C=b;a.a.value=window.localStorage.brandIconURL||"";fa(a);ga(a);ha(a);if(b=window.localStorage.clientId)a.d.value=b,G(a);ia(a);H();ja(a);I(a);ka(a)},
ga=function(a){for(var b=0;b<a.h.length;++b)a.h[b].onkeydown=function(a){if(9===a.keyCode){var b=this.selectionStart,e=this.value;this.value=e.substring(0,b)+"  "+e.substring(this.selectionEnd);this.selectionStart=this.selectionEnd=b+2;a.preventDefault()}},a.h[b].onfocus=function(){a.o.classList.add("editing")},a.h[b].onblur=function(){a.o.classList.remove("editing")};a.b.oninput=function(){var b=this.value,d=JSON.parse(a.c.value)||{};d.html||null==d.text?d.html=b:d.text=b;a.c.value=JSON.stringify(d,
void 0,2);K(a,d,!1)};a.b.a=a.b.oninput;a.c.oninput=function(){var b=JSON.parse(this.value)||{};b.text&&!b.html?(a.b.value=b.text,a.e.textContent="Text"):(a.b.value=b.html||"",a.e.textContent="HTML");K(a,b,!1)};a.c.a=a.b.oninput},fa=function(a){a.d.onchange=function(){I(a)};a.d.onkeyup=function(){I(a)};a.m.onclick=function(){L(a);return!1};a.g.onclick=function(){la(a)};a.u.onclick=function(){M(a)};a.n.onclick=function(){ma(a)};var b=function(){N(a)};a.a.a=b;a.a.onkeyup=b;a.a.oninput=b;a.a.onpaste=
b;a.a.b=function(a){a.preventDefault();a.stopPropagation();a.dataTransfer.dropEffect="copy";this.classList.add("dragging")};a.a.c=function(a){a.preventDefault();a.stopPropagation();this.classList.remove("dragging")};a.a.d=function(b){b.stopPropagation();b.preventDefault();na(a,b.dataTransfer.files[0])}},ia=function(a){for(var b=0;b<a.s.length;++b)a.s[b].onscroll=function(){for(var a=this.getElementsByClassName("shadown");0<a.length;++b)a[b].style.opacity=this.scrollTop/15}},pa=function(a,b,c){var d=
c.values[0],e=document.createElement("DIV"),f=document.createElement("CENTER"),h=document.createElement("IMG"),l=document.createElement("P");e.classList.add("menu-item");f.classList.add("menu-item-value");h.classList.add("menu-item-icon");h.src=d.iconUrl||"";l.classList.add("menu-item-display-name");l.textContent=d.displayName;f.appendChild(h);f.appendChild(l);e.appendChild(f);e.onclick=function(){oa(a,b,c.id)};return e},qa=function(a,b){D(a.k);if(b.items&&0<b.items.length){for(var c=null,d=0;d<b.items.length;++d){var e=
b.items[d],f=document.createElement("LI"),e=O(a,"item-"+e.id,e,P(e));f.classList.add("carditem");f.appendChild(e);a.k.appendChild(f);c||(c=e)}a.C.click();c.addEventListener("load",function(){Q(a,c.id,b.items[0])})}else d=document.createElement("P"),d.textContent="No items found",a.k.appendChild(d)},G=function(a){a.f.classList.remove("shown")},H=function(){for(var a=document.getElementsByClassName("map-tooltip"),b=0;b<a.length;++b)ra(a[b])},ra=function(a){if(a.parentElement){a.parentElement.onmouseover=
function(){a.classList.add("visible");a.D=!1};a.parentElement.onmouseout=function(){a.classList.remove("visible")};a.style.left=(a.parentElement.clientWidth-a.clientWidth)/2-2+"px";a.style.top=a.parentElement.clientHeight+6+"px";for(var b=parseInt(a.style.paddingLeft.replace("px",""),10)||0,c=a.clientWidth/2,d=a.getElementsByClassName("pointer"),e=0;e<d.length;++e)d[e].style.left=c+b+"px"}a.onmouseover=function(){this.classList.remove("visible");this.D=!0}},ja=function(a){a.q.onclick=function(b){b.preventDefault();
this.classList.add("selected");a.e.classList.remove("selected");a.c.style.display="block";a.b.style.display="none"};a.e.onclick=function(b){b.preventDefault();this.classList.add("selected");a.q.classList.remove("selected");a.b.style.display="block";a.c.style.display="none"}},R=function(a,b){b.text&&!b.html?(a.b.value=b.text,a.e.textContent="Text"):(a.b.value=b.html||"",a.e.textContent="HTML");a.c.value=JSON.stringify(b,void 0,2)},S=function(a,b,c,d){var e=document.createElement("P");b=document.createTextNode(b+
"  ");var f=document.createElement("A");f.textContent="Dismiss";f.onclick=function(){G(a)};D(a.f);e.appendChild(b);e.appendChild(f);a.f.appendChild(e);a.f.classList.toggle("error",!!c);a.f.classList.add("shown");d&&setTimeout(function(){G(a)},d)},I=function(a){a.m.classList.toggle("disabled",!a.t||""==a.d.value)},K=function(a,b,c){a.p.contentWindow.postMessage(T("",b,P(b),a.a.value,c),"*");a.r&&(a.r.textContent=b.id?"Update Item":"Insert Item");a.n.style.display=b.id?"inline":"none";H()},L=function(a,
b,c){gapi.auth.authorize({client_id:a.d.value,scope:"https://www.googleapis.com/auth/glass.timeline",immediate:b||!1},function(b){b&&(window.localStorage.clientId=a.d.value,c?c():(M(a),sa(a),a.A.style.display="none",a.w.style.display="block",H()))})},T=function(a,b,c,d,e){a={id:a,event:"content",content:b,footer:c,brandIcon:d,selected:e};gapi&&gapi.auth&&(b=gapi.auth.getToken())&&(a.accessToken=b.access_token);return a},O=function(a,b,c,d){var e=a.a.value,f=document.createElement("IFRAME");f.classList.add("smallcard");
f.src="smallcard.html";f.id=b;f.onload=function(){f.contentWindow.postMessage(T(b,c,d,e,!0),"*")};return f},U=function(a,b,c){b.execute(function(d){d.error?L(a,!0,function(){b.execute(c)}):c(d.result)})},P=function(a){var b="just now";if(a.displayTime||a.updated){a=Math.floor((new Date-new Date(a.displayTime||a.updated))/6E4);var c=0,d=!0;if(0==a)return b;0>a&&(a*=-1,d=!1);for(;c+1<F.length&&(b=Math.floor(a/F[c+1].value),0!=b);++c)a=b;b=a+" "+F[c].l;1!=a&&(b+="s");b=d?b+" ago":"in "+b}return b},ha=
function(a){var b=document.getElementById("template-list"),c=window.location.href,d=c.lastIndexOf("/"),e=null;-1<d&&(c=c.substr(0,d));for(d=0;d<E.length;++d){var f=E[d],h=document.createElement("LI");h.classList.add("carditem");f.content.html&&(f.content.html=f.content.html.replace(/\$ROOT/g,c));var l=f.id,u=O(a,"template-"+f.id,f.content,f.id.replace("_"," ")),l=l.replace("_"," ");h.appendChild(u);b.appendChild(h);e||(e=u)}f=E[0];e.addEventListener("load",function(){Q(a,"template-"+f.id,f.content)})},
ka=function(a){window.onmessage=function(b){b=b.data;"clicked"==b.event?Q(a,b.id,b.content):"changed"==b.event&&R(a,b.content)}},M=function(a){var b={maxResults:a.G};S(a,"Loading Timeline Items...");U(a,gapi.client.mirror.timeline.list(b),function(b){qa(a,b);G(a)})},sa=function(a){var b=gapi.client.mirror.subscriptions.list({});U(a,b,function(b){if(b.items)for(var d=0;d<b.items.length;++d){var e=b.items[d];if("timeline"==e.collection){a.i=e;break}}})},Q=function(a,b,c){if(b&&c){for(var d=document.getElementsByClassName("smallcard"),
e=0;e<d.length;++e)d[e].contentWindow.postMessage({event:d[e].id==b?"select":"unselect"},"*");R(a,c);e=!1;D(a.j);if(c.menuItems){for(d=b=0;d<c.menuItems.length;++d){var f=c.menuItems[d];f.values&&0<f.values.length&&(e=pa(a,c.id,f),a.j.appendChild(e),b+=e.offsetWidth,e=!0)}a.j.style.width=b}a.B.style.display=e?"block":"none";a.v.classList.toggle("extended",e);K(a,c,!0)}},la=function(a){var b=JSON.parse(a.c.value),c=null,c=b.id?gapi.client.mirror.timeline.update({id:b.id,resource:b}):gapi.client.mirror.timeline.insert({resource:b});
S(a,"Executing request...");U(a,c,function(){M(a)})},ma=function(a){var b=JSON.parse(a.c.value),c=null;b.id?(c=gapi.client.mirror.timeline["delete"]({id:b.id}),S(a,"Deleting item..."),U(a,c,function(){M(a)})):a.F("Item not in Timeline",!0,2E3)},oa=function(a,b,c){if(a.i){var d=new XMLHttpRequest,e=new FormData;e.append("itemId",b);e.append("menuActionId",c);e.append("callbackUrl",a.i.callbackUrl);e.append("userToken",a.i.userToken);e.append("verifyToken",a.i.verifyToken);d.onreadystatechange=function(){4==
d.readyState&&S(a,"Notification sent!",!1,5E3)};d.open("POST","/operation/notify",!0);d.send(e);S(a,"Sending notification...",!1)}else S(a,"Unable to send notification, service is not subscribed",!0)},na=function(a,b){if(b.type.match("image.*")){var c=new FileReader;c.onload=function(b){a.a.value=b.target.result;a.a.classList.remove("dragging");N(a)};c.readAsDataURL(b)}},N=function(a){var b=a.a.value;window.localStorage.brandIconURL=b;b={event:"updateBrand",url:b};a.p.contentWindow.postMessage(b,
"*");a=document.getElementsByClassName("smallcard");for(var c=0;c<a.length;++c)a[c].contentWindow.postMessage(b,"*")},W=function(){gapi.auth.init(function(){gapi.client.load("mirror","v1",function(){V.t=!0;I(V)})})},X=["initMirrorApi"],Y=g;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var $;if($=!X.length)$=void 0!==W;$?Y[Z]=W:Y[Z]?Y=Y[Z]:Y=Y[Z]={}}
var V=function(){if(top==self&&"mirror-api-playground.appspot.com"==window.location.hostname)return window.location.replace("https://developers.google.com/glass/playground"),null;var a=new ea;if("complete"==document.readyState)J(a);else{var b=function(){"complete"==document.readyState&&(document.removeEventListener("readystatechange",b,!1),J(a))};document.addEventListener("readystatechange",b,!1)}return a}();
