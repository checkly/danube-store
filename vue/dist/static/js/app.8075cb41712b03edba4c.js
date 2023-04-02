webpackJsonp([1],{0:function(t,e){},"1O9p":function(t,e){},"2lH8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jsonSchema=e.fromString=e.empty=e.isUuid=e.regex=e.uuid=void 0;const a=i("OMJi"),o=i("D6fo"),n={v4:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,v5:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u};e.regex=n;const s={v4:{type:"string",pattern:n.v4.toString().slice(1,-2)},v5:{type:"string",pattern:n.v5.toString().slice(1,-2)}};e.jsonSchema=s;const r=(0,a.deprecate)(()=>(0,o.v4)(),"uuidv4() is deprecated. Use v4() from the uuid module instead.");e.uuid=r;const l=(0,a.deprecate)(t=>(0,o.validate)(t)&&(4===(0,o.version)(t)||5===(0,o.version)(t)),"isUuid() is deprecated. Use validate() from the uuid module instead.");e.isUuid=l;const c=(0,a.deprecate)(()=>o.NIL,"empty() is deprecated. Use NIL from the uuid module instead.");e.empty=c;const p=(0,a.deprecate)((t,e="bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45")=>(0,o.v5)(t,e),"fromString() is deprecated. Use v5() from the uuid module instead.");e.fromString=p},D6fo:function(t,e,i){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0});var o=new Uint8Array(16);function n(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var r=function(t){return"string"==typeof t&&s.test(t)},l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));var p,u,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!r(i))throw TypeError("Stringified UUID is invalid");return i},v=0,m=0;var g=function(t,e,i){var a=e&&i||0,o=e||new Array(16),s=(t=t||{}).node||p,r=void 0!==t.clockseq?t.clockseq:u;if(null==s||null==r){var l=t.random||(t.rng||n)();null==s&&(s=p=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==r&&(r=u=16383&(l[6]<<8|l[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),g=void 0!==t.nsecs?t.nsecs:m+1,h=c-v+(g-m)/1e4;if(h<0&&void 0===t.clockseq&&(r=r+1&16383),(h<0||c>v)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=c,m=g,u=r;var f=(1e4*(268435455&(c+=122192928e5))+g)%4294967296;o[a++]=f>>>24&255,o[a++]=f>>>16&255,o[a++]=f>>>8&255,o[a++]=255&f;var _=c/4294967296*1e4&268435455;o[a++]=_>>>8&255,o[a++]=255&_,o[a++]=_>>>24&15|16,o[a++]=_>>>16&255,o[a++]=r>>>8|128,o[a++]=255&r;for(var b=0;b<6;++b)o[a+b]=s[b];return e||d(o)};var h=function(t){if(!r(t))throw TypeError("Invalid UUID");var e,i=new Uint8Array(16);return i[0]=(e=parseInt(t.slice(0,8),16))>>>24,i[1]=e>>>16&255,i[2]=e>>>8&255,i[3]=255&e,i[4]=(e=parseInt(t.slice(9,13),16))>>>8,i[5]=255&e,i[6]=(e=parseInt(t.slice(14,18),16))>>>8,i[7]=255&e,i[8]=(e=parseInt(t.slice(19,23),16))>>>8,i[9]=255&e,i[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,i[11]=e/4294967296&255,i[12]=e>>>24&255,i[13]=e>>>16&255,i[14]=e>>>8&255,i[15]=255&e,i};var f=function(t,e,i){function a(t,a,o,n){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof a&&(a=h(a)),16!==a.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+t.length);if(s.set(a),s.set(t,a.length),(s=i(s))[6]=15&s[6]|e,s[8]=63&s[8]|128,o){n=n||0;for(var r=0;r<16;++r)o[n+r]=s[r];return o}return d(s)}try{a.name=t}catch(t){}return a.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",a.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",a};function _(t){return 14+(t+64>>>9<<4)+1}function b(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}function y(t,e,i,a,o,n){return b((s=b(b(e,t),b(a,n)))<<(r=o)|s>>>32-r,i);var s,r}function C(t,e,i,a,o,n,s){return y(e&i|~e&a,t,e,o,n,s)}function k(t,e,i,a,o,n,s){return y(e&a|i&~a,t,e,o,n,s)}function w(t,e,i,a,o,n,s){return y(e^i^a,t,e,o,n,s)}function x(t,e,i,a,o,n,s){return y(i^(e|~a),t,e,o,n,s)}var S=f("v3",48,function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(t){for(var e=[],i=32*t.length,a=0;a<i;a+=8){var o=t[a>>5]>>>a%32&255,n=parseInt("0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o),16);e.push(n)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[_(e)-1]=e;for(var i=1732584193,a=-271733879,o=-1732584194,n=271733878,s=0;s<t.length;s+=16){var r=i,l=a,c=o,p=n;i=C(i,a,o,n,t[s],7,-680876936),n=C(n,i,a,o,t[s+1],12,-389564586),o=C(o,n,i,a,t[s+2],17,606105819),a=C(a,o,n,i,t[s+3],22,-1044525330),i=C(i,a,o,n,t[s+4],7,-176418897),n=C(n,i,a,o,t[s+5],12,1200080426),o=C(o,n,i,a,t[s+6],17,-1473231341),a=C(a,o,n,i,t[s+7],22,-45705983),i=C(i,a,o,n,t[s+8],7,1770035416),n=C(n,i,a,o,t[s+9],12,-1958414417),o=C(o,n,i,a,t[s+10],17,-42063),a=C(a,o,n,i,t[s+11],22,-1990404162),i=C(i,a,o,n,t[s+12],7,1804603682),n=C(n,i,a,o,t[s+13],12,-40341101),o=C(o,n,i,a,t[s+14],17,-1502002290),a=C(a,o,n,i,t[s+15],22,1236535329),i=k(i,a,o,n,t[s+1],5,-165796510),n=k(n,i,a,o,t[s+6],9,-1069501632),o=k(o,n,i,a,t[s+11],14,643717713),a=k(a,o,n,i,t[s],20,-373897302),i=k(i,a,o,n,t[s+5],5,-701558691),n=k(n,i,a,o,t[s+10],9,38016083),o=k(o,n,i,a,t[s+15],14,-660478335),a=k(a,o,n,i,t[s+4],20,-405537848),i=k(i,a,o,n,t[s+9],5,568446438),n=k(n,i,a,o,t[s+14],9,-1019803690),o=k(o,n,i,a,t[s+3],14,-187363961),a=k(a,o,n,i,t[s+8],20,1163531501),i=k(i,a,o,n,t[s+13],5,-1444681467),n=k(n,i,a,o,t[s+2],9,-51403784),o=k(o,n,i,a,t[s+7],14,1735328473),a=k(a,o,n,i,t[s+12],20,-1926607734),i=w(i,a,o,n,t[s+5],4,-378558),n=w(n,i,a,o,t[s+8],11,-2022574463),o=w(o,n,i,a,t[s+11],16,1839030562),a=w(a,o,n,i,t[s+14],23,-35309556),i=w(i,a,o,n,t[s+1],4,-1530992060),n=w(n,i,a,o,t[s+4],11,1272893353),o=w(o,n,i,a,t[s+7],16,-155497632),a=w(a,o,n,i,t[s+10],23,-1094730640),i=w(i,a,o,n,t[s+13],4,681279174),n=w(n,i,a,o,t[s],11,-358537222),o=w(o,n,i,a,t[s+3],16,-722521979),a=w(a,o,n,i,t[s+6],23,76029189),i=w(i,a,o,n,t[s+9],4,-640364487),n=w(n,i,a,o,t[s+12],11,-421815835),o=w(o,n,i,a,t[s+15],16,530742520),a=w(a,o,n,i,t[s+2],23,-995338651),i=x(i,a,o,n,t[s],6,-198630844),n=x(n,i,a,o,t[s+7],10,1126891415),o=x(o,n,i,a,t[s+14],15,-1416354905),a=x(a,o,n,i,t[s+5],21,-57434055),i=x(i,a,o,n,t[s+12],6,1700485571),n=x(n,i,a,o,t[s+3],10,-1894986606),o=x(o,n,i,a,t[s+10],15,-1051523),a=x(a,o,n,i,t[s+1],21,-2054922799),i=x(i,a,o,n,t[s+8],6,1873313359),n=x(n,i,a,o,t[s+15],10,-30611744),o=x(o,n,i,a,t[s+6],15,-1560198380),a=x(a,o,n,i,t[s+13],21,1309151649),i=x(i,a,o,n,t[s+4],6,-145523070),n=x(n,i,a,o,t[s+11],10,-1120210379),o=x(o,n,i,a,t[s+2],15,718787259),a=x(a,o,n,i,t[s+9],21,-343485551),i=b(i,r),a=b(a,l),o=b(o,c),n=b(n,p)}return[i,a,o,n]}(function(t){if(0===t.length)return[];for(var e=8*t.length,i=new Uint32Array(_(e)),a=0;a<e;a+=8)i[a>>5]|=(255&t[a/8])<<a%32;return i}(t),8*t.length))});var A=function(t,e,i){var a=(t=t||{}).random||(t.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){i=i||0;for(var o=0;o<16;++o)e[i+o]=a[o];return e}return d(a)};function I(t,e,i,a){switch(t){case 0:return e&i^~e&a;case 1:return e^i^a;case 2:return e&i^e&a^i&a;case 3:return e^i^a}}function N(t,e){return t<<e|t>>>32-e}var $=f("v5",80,function(t){var e=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var a=unescape(encodeURIComponent(t));t=[];for(var o=0;o<a.length;++o)t.push(a.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var n=t.length/4+2,s=Math.ceil(n/16),r=new Array(s),l=0;l<s;++l){for(var c=new Uint32Array(16),p=0;p<16;++p)c[p]=t[64*l+4*p]<<24|t[64*l+4*p+1]<<16|t[64*l+4*p+2]<<8|t[64*l+4*p+3];r[l]=c}r[s-1][14]=8*(t.length-1)/Math.pow(2,32),r[s-1][14]=Math.floor(r[s-1][14]),r[s-1][15]=8*(t.length-1)&4294967295;for(var u=0;u<s;++u){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=r[u][v];for(var m=16;m<80;++m)d[m]=N(d[m-3]^d[m-8]^d[m-14]^d[m-16],1);for(var g=i[0],h=i[1],f=i[2],_=i[3],b=i[4],y=0;y<80;++y){var C=Math.floor(y/20),k=N(g,5)+I(C,h,f,_)+b+e[C]+d[y]>>>0;b=_,_=f,f=N(h,30)>>>0,h=g,g=k}i[0]=i[0]+g>>>0,i[1]=i[1]+h>>>0,i[2]=i[2]+f>>>0,i[3]=i[3]+_>>>0,i[4]=i[4]+b>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]});var P=function(t){if(!r(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)};i.d(e,"v1",function(){return g}),i.d(e,"v3",function(){return S}),i.d(e,"v4",function(){return A}),i.d(e,"v5",function(){return $}),i.d(e,"NIL",function(){return"00000000-0000-0000-0000-000000000000"}),i.d(e,"version",function(){return P}),i.d(e,"validate",function(){return r}),i.d(e,"stringify",function(){return d}),i.d(e,"parse",function(){return h})},IByc:function(t,e){},KvUz:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),o=i("mtWM"),n={data:function(){return{books:[],id:"books"}},beforeMount(){this.pullBooks()},methods:{pullBooks:function(){o.a.get("/api/books",{headers:{Accept:"application/json"}}).then(t=>{const e=this.$route.path,i=this.$route.query.string;e.includes("search")?t.data.forEach(t=>{(t.title.toUpperCase().includes(i.toUpperCase())||t.author.toUpperCase().includes(i.toUpperCase()))&&this.books.push(t)}):e.includes("category")?t.data.forEach(t=>{t.genre.toUpperCase().includes(i.toUpperCase())&&this.books.push(t)}):this.books=t.data},t=>{this.$root.$emit("downtime",null),console.log(t)})},navigateToMessage:function(t){this.$router.push({path:`/books/${t}`}).catch(t=>{this.$router.push({path:"/"})})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop"},[i("div",{staticClass:"special-offer"}),t._v(" "),i("div",{staticClass:"shop-content"},[i("h2",[t._v("Top sellers")]),t._v(" "),i("ul",t._l(t.books,function(e){return i("li",{key:e.TITLE,staticClass:"preview",on:{click:function(i){return t.navigateToMessage(e.id)}}},[i("div",{staticClass:"preview-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"preview-author"},[t._v(t._s(e.author))]),t._v(" "),i("div",{staticClass:"preview-details"},[i("p",{staticClass:"preview-rating"},[t._v(t._s(e.rating))]),t._v(" "),i("p",{staticClass:"preview-price"},[t._v("$"+t._s(e.price))])])])}),0)])])},staticRenderFns:[]};var r=i("VU/8")(n,s,!1,function(t){i("RtsS")},"data-v-159be0e2",null).exports,l={data:()=>({msg:"Welcome to Your Vue.js App"}),methods:{navigateToCategory(t){this.$router.push({path:"/category",query:{string:t.target.name}}).catch(t=>{this.$router.push({path:"/"})})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[t._m(0),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"crime"}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"novel"}},[t._v("Novels & Stories")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"erotic"}},[t._v("Erotic Novels")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"scifi"}},[t._v("Sci-Fi")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"fantasy"}},[t._v("Fantasy")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"horror"}},[t._v("Horror")])])])]),t._v(" "),i("li",[t._v("Non-Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"history"}},[t._v("History")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"psychology"}},[t._v("Psychology")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"philosophy"}},[t._v("Philosophy")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"cooking"}},[t._v("Cooking")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"economics"}},[t._v("Economics")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"mathematics"}},[t._v("Mathematics")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"business"}},[t._v("Business")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"finance"}},[t._v("Finance")])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-title-wrapper"},[e("h2",[this._v("Books")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-title-wrapper"},[e("h2",[this._v("DVDs")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[t._v("Crime & Thrillers")]),t._v(" "),i("li",[t._v("Documentaries")]),t._v(" "),i("li",[t._v("TV")]),t._v(" "),i("li",[t._v("Sci-Fi")]),t._v(" "),i("li",[t._v("Fantasy")]),t._v(" "),i("li",[t._v("Horror")]),t._v(" "),i("li",[t._v("Cartoons")])])])])}]};var p=i("VU/8")(l,c,!1,function(t){i("iFHm")},"data-v-7851559a",null).exports,u={data(){return{book:"",bookTitle:"",bookAuthor:"",bookGenre:"",bookPrice:"",bookStock:"",bookRating:"",bookId:this.$route.params.id}},beforeMount(){this.pullDetails()},methods:{pullDetails:function(){o.a.get(`/api/books/${this.bookId}`,{headers:{Accept:"application/json"}}).then(t=>{this.book=t.data,this.bookTitle=this.book.title,this.bookAuthor=this.book.author,this.bookPrice=this.book.price,this.bookStock=this.book.stock,this.bookGenre=this.book.genre,this.bookRating=this.book.rating},t=>{console.log(t)})},addToCart:function(){const t=window.localStorage;let e=t.getItem("cartContent")?t.getItem("cartContent"):"[]";const i=JSON.parse(e);i.push(this.book),e=JSON.stringify(i),t.setItem("cartContent",e),this.$router.push({path:"/cart"}).catch(t=>{this.$router.push({path:"/"})})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-wrapper"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-text-content"},[i("h2",[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",{staticClass:"book-rating"},[t._v(t._s(t.bookRating))]),t._v(" "),i("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),i("p",[t._v("Genre: "+t._s(t.bookGenre))]),t._v(" "),i("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),i("p",[t._v("Price: $"+t._s(t.bookPrice))]),t._v(" "),i("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),i("div",{staticClass:"detail-image-container"},[i("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),i("div",{staticClass:"centered"},[i("p",{staticClass:"title"},[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),t.book?i("button",{staticClass:"call-to-action",on:{click:function(e){return t.addToCart()}}},[t._v("Add to cart")]):t._e()])])},staticRenderFns:[]};var v=i("VU/8")(u,d,!1,function(t){i("g+Ag")},"data-v-37d2648c",null).exports,m={data:function(){return{loggedIn:!1,email:"",password:"",error:!1,searchQuery:""}},methods:{show(){this.$modal.show("modal-login")},signIn(){this.error="",this.email&&this.password?"user@email.com"===this.email&&"supersecure1"===this.password?(this.loggedIn=!0,this.$modal.hide("modal-login")):this.error="The email and/or password you have provided is incorrect.":this.error="Please fill in all fields."},signOut(){this.loggedIn=!1},signUp(){this.$modal.show("modal-signup")},submitSignUp(){this.email?(console.log("email found"),this.loggedIn=!0,this.$modal.hide("modal-signup")):(this.error="error",console.log("no email found"))},navigateToCart(){this.$router.push({path:"/cart"}).catch(t=>{this.$router.push({path:"/"})})},navigateToSearch(){this.$router.push({path:"/search",query:{string:this.searchQuery}}).catch(t=>{this.$router.push({path:"/"})})},navigateToAccount(){this.$router.push({path:"/account"}).catch(t=>{this.$router.push({path:"/"})})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topbar"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",name:"searchbar"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),i("button",{attrs:{id:"button-search"},on:{click:function(e){return t.navigateToSearch()}}},[t._v("Search")]),t._v(" "),t.loggedIn?i("div",{attrs:{id:"login-message"}},[t._v("Welcome back, "+t._s(t.email))]):t._e(),t._v(" "),i("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),i("div",{staticClass:"account-buttons"},[t.loggedIn?i("button",{attrs:{id:"logout"},on:{click:function(e){return t.signOut()}}},[t._v("Log out")]):i("button",{attrs:{id:"login"},on:{click:function(e){return t.show()}}},[t._v("Log in")]),t._v(" "),i("button",{staticClass:"call-to-action",attrs:{id:"signup"},on:{click:function(e){return t.signUp()}}},[t._v("Sign up")]),t._v(" "),i("button",{staticClass:"topbar-icon",attrs:{id:"cart"},on:{click:function(e){return t.navigateToCart()}}},[i("i",{staticClass:"fas fa-shopping-cart"})]),t._v(" "),t.loggedIn?i("button",{staticClass:"topbar-icon",attrs:{id:"account"},on:{click:function(e){return t.navigateToAccount()}}},[i("i",{staticClass:"fas fa-user"})]):t._e()]),t._v(" "),i("modal",{attrs:{name:"modal-login"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-login"}},[i("div",{staticClass:"partition-title"},[t._v("LOG IN")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"n-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"textfield-modal",attrs:{id:"n-password2",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              "+t._s(t.error)+"\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])]),t._v(" "),i("modal",{attrs:{name:"modal-signup",height:"auto"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-register"}},[i("div",{staticClass:"partition-title"},[t._v("SIGN UP")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"s-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-password2",type:"password",placeholder:"Password"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I will be using my account for:")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"myself",name:"user-type",value:"myelf"}}),t._v(" "),i("label",{attrs:{for:"myself"}},[t._v("Myself")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"business",name:"user-type",value:"business"}}),t._v(" "),i("label",{attrs:{for:"business"}},[t._v("My business")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"marketing-agreement",name:"marketing-agreement"}}),t._v(" "),i("label",{attrs:{for:"marketing-agreement"}},[t._v("I would like to receive promotional emails")]),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"privacy-policy",name:"privacy-policy"}}),t._v(" "),i("label",{attrs:{for:"privacy-policy"}},[t._v("I have read and accept the privacy policy")]),i("br")]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              Please fill in all fields.\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"register-btn"},on:{click:function(e){return t.submitSignUp()}}},[t._v("\n                Register\n              ")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{attrs:{id:"logo",src:"static/logo-horizontal.svg"}})])}]};var h=i("VU/8")(m,g,!1,function(t){i("KvUz")},"data-v-9a19ef14",null).exports,f={data:()=>({cartItems:[],totalPrice:0,billingCoupon:!1,coupon:"",couponAccepted:!1}),methods:{navigateToCheckout:function(){this.$router.push({path:"/checkout"}).catch(t=>{this.$router.push({path:"/"})})},emptyCart:function(){window.localStorage;localStorage.removeItem("cartContent"),this.cartItems=[]},fetchItems:function(){const t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)},sumPrices:function(){let t=0;this.cartItems.forEach(e=>{t+=parseFloat(e.price)}),this.totalPrice=t.toFixed(2)},applyCoupon:function(){"COUPON2020"===this.coupon&&(this.couponAccepted=!0,this.totalPrice=.8*this.totalPrice)}},mounted(){this.fetchItems(),this.sumPrices()}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart"},[i("h1",[t._v("Your Shopping Cart")]),t._v(" "),t.cartItems?t._e():i("p",[t._v("Your shopping cart is empty. Go buy some books!")]),t._v(" "),i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n      1x, "+t._s(e.title)+", "+t._s(e.author)+", $"+t._s(e.price)+"\n    ")])}),0),t._v("\n  Total: $"),i("div",{attrs:{id:"total-price"}},[t._v(t._s(t.totalPrice))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCoupon,expression:"billingCoupon"}],attrs:{type:"checkbox",id:"billing-coupon",name:"billing-coupon"},domProps:{checked:Array.isArray(t.billingCoupon)?t._i(t.billingCoupon,null)>-1:t.billingCoupon},on:{change:function(e){var i=t.billingCoupon,a=e.target,o=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&(t.billingCoupon=i.concat([null])):n>-1&&(t.billingCoupon=i.slice(0,n).concat(i.slice(n+1)))}else t.billingCoupon=o}}}),t._v(" "),i("label",{attrs:{for:"billing-coupon"}},[t._v("I have a coupon for this order")]),i("br"),t._v(" "),t.billingCoupon?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"textfield-modal",attrs:{id:"coupon",type:"text",placeholder:"Coupon"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.applyCoupon}},[t._v("Apply")]),t._v(" "),t.couponAccepted?i("p",[t._v("Coupon applied! 20% discount")]):i("p",[t._v("Invalid coupon.")])]):t._e(),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToCheckout()}}},[t._v("\n    Checkout\n  ")]),t._v(" "),i("button",{on:{click:function(e){return t.emptyCart()}}},[t._v("Empty Cart")])])},staticRenderFns:[]};var b=i("VU/8")(f,_,!1,function(t){i("1O9p")},"data-v-3ffc652b",null).exports,y=i("2lH8"),C={data:()=>({shippingName:"",shippingSurname:"",shippingAddress:"",shippingZipcode:"",shippingCity:"",shippingCompany:"",billingName:"",billingSurname:"",billingAddress:"",billingZipcode:"",billingCity:"",billingCompany:"",errorMessage:"",separateBilling:!1}),methods:{navigateToRecap:function(){if(this.shippingName&&this.shippingSurname&&this.shippingAddress&&this.shippingZipcode&&this.shippingCity&&this.shippingCompany){const t=window.localStorage,e=t.getItem("cartContent"),i=JSON.parse(e);let a,o=t.getItem("orders");a=o?JSON.parse(o):[];let n=Date.now(),s=new Date(n),r=s.getDate(),l=s.getMonth()+1,c=s.getFullYear();const p={id:Object(y.uuid)(),date:r+"-"+l+"-"+c,cartItems:i};a.push(p),t.setItem("orders",JSON.stringify(a)),localStorage.removeItem("cartContent"),this.$router.push({path:"/recap"}).catch(t=>{})}else this.errorMessage="Please fill in all fields."}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout"},[i("h1",[t._v("Checkout")]),t._v(" "),i("h2",[t._v("buy those books already...")]),t._v(" "),i("p",[t._v("Shipping:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingName,expression:"shippingName"}],staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"},domProps:{value:t.shippingName},on:{input:function(e){e.target.composing||(t.shippingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingSurname,expression:"shippingSurname"}],staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"},domProps:{value:t.shippingSurname},on:{input:function(e){e.target.composing||(t.shippingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress,expression:"shippingAddress"}],staticClass:"textfield-modal",attrs:{id:"s-address",type:"text",placeholder:"Address"},domProps:{value:t.shippingAddress},on:{input:function(e){e.target.composing||(t.shippingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingZipcode,expression:"shippingZipcode"}],staticClass:"textfield-modal",attrs:{id:"s-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.shippingZipcode},on:{input:function(e){e.target.composing||(t.shippingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCity,expression:"shippingCity"}],staticClass:"textfield-modal",attrs:{id:"s-city",type:"text",placeholder:"City"},domProps:{value:t.shippingCity},on:{input:function(e){e.target.composing||(t.shippingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCompany,expression:"shippingCompany"}],staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.shippingCompany},on:{input:function(e){e.target.composing||(t.shippingCompany=e.target.value)}}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I would like the items to be shipped")]),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"asap",name:"user-type",value:"asap"}}),t._v(" "),i("label",{attrs:{for:"asap"}},[t._v("as soon as possible")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"single",name:"user-type",value:"single"}}),t._v(" "),i("label",{attrs:{for:"single"}},[t._v("in a single package")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.separateBilling,expression:"separateBilling"}],attrs:{type:"checkbox",id:"billing-different",name:"billing-different"},domProps:{checked:Array.isArray(t.separateBilling)?t._i(t.separateBilling,null)>-1:t.separateBilling},on:{change:function(e){var i=t.separateBilling,a=e.target,o=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&(t.separateBilling=i.concat([null])):n>-1&&(t.separateBilling=i.slice(0,n).concat(i.slice(n+1)))}else t.separateBilling=o}}}),t._v(" "),i("label",{attrs:{for:"billing-different"}},[t._v("Billing address is different from shipping")]),i("br")]),t._v(" "),t.separateBilling?i("div",{attrs:{id:"billing-block"}},[i("p",[t._v("Billing:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingName,expression:"billingName"}],staticClass:"textfield-modal",attrs:{id:"b-name",type:"text",placeholder:"Name"},domProps:{value:t.billingName},on:{input:function(e){e.target.composing||(t.billingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingSurname,expression:"billingSurname"}],staticClass:"textfield-modal",attrs:{id:"b-surname",type:"text",placeholder:"Surname"},domProps:{value:t.billingSurname},on:{input:function(e){e.target.composing||(t.billingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingAddress,expression:"billingAddress"}],staticClass:"textfield-modal",attrs:{id:"b-address",type:"text",placeholder:"Address"},domProps:{value:t.billingAddress},on:{input:function(e){e.target.composing||(t.billingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingZipcode,expression:"billingZipcode"}],staticClass:"textfield-modal",attrs:{id:"b-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.billingZipcode},on:{input:function(e){e.target.composing||(t.billingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCity,expression:"billingCity"}],staticClass:"textfield-modal",attrs:{id:"b-city",type:"text",placeholder:"City"},domProps:{value:t.billingCity},on:{input:function(e){e.target.composing||(t.billingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCompany,expression:"billingCompany"}],staticClass:"textfield-modal",attrs:{id:"b-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.billingCompany},on:{input:function(e){e.target.composing||(t.billingCompany=e.target.value)}}}),t._v(" "),i("br")])]):t._e(),t._v(" "),t.errorMessage?i("p",{attrs:{id:"error-message"}},[t._v(t._s(t.errorMessage))]):t._e(),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToRecap()}}},[t._v("Buy")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])}]};var w=i("VU/8")(C,k,!1,function(t){i("z/h+")},"data-v-f1081960",null).exports,x={data:function(){return{cartItems:[]}},methods:{navigateToCheckout:function(){this.$router.push({path:"/checkout"}).catch(t=>{this.$router.push({path:"/"})})},navigateToHome:function(){this.$router.push({path:"/"}).catch(t=>{this.$router.push({path:"/"})})}},mounted(){const t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recap"},[i("p",{attrs:{id:"order-confirmation"}},[t._v("All good, order is on the way. Thank you!!")]),t._v(" "),i("p",{attrs:{id:"recap-content"}},[i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n                1x, "+t._s(e.title)+", "+t._s(e.author)+"\n            ")])}),0)]),t._v(" "),i("button",{on:{click:function(e){return t.navigateToHome()}}},[t._v("Shop more")])])},staticRenderFns:[]};var A=i("VU/8")(x,S,!1,function(t){i("u2Ps")},"data-v-829b8cd2",null).exports,I={data:()=>({billingName:"",billingSurname:"",billingAddress:"",billingZipcode:"",billingCity:"",billingCompany:"",errorMessage:"",file:"",uploadSuccess:!1,uploadFailure:!1,orders:[]}),beforeMount(){const t=window.localStorage.getItem("orders");this.orders=JSON.parse(t)},methods:{onSelect(){const t=this.$refs.file.files[0];this.file=t,console.log(this.file.type)},submit(){this.file&&("image/png"===this.file.type||"image/jpg"===this.file.type||"image/jpeg"===this.file.type?this.uploadSuccess=!0:this.uploadFailure=!0)}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account"},[i("div",{staticClass:"account-content"},[i("h2",[t._v("Account")]),t._v(" "),i("div",{attrs:{id:"user-details"}},[i("h3",[t._v("User Details")]),t._v(" "),i("div",[t._v("E-Mail address: user@email.com")]),t._v(" "),i("div",[t._v("\n                Profile picture: "),i("input",{ref:"file",attrs:{type:"file"},on:{change:function(e){return t.onSelect()}}}),t._v(" "),i("br"),t._v(" "),i("button",{on:{click:function(e){return t.submit()}}},[t._v("Upload")]),t._v(" "),t.uploadSuccess?i("div",{attrs:{id:"upload-message-succcess"}},[t._v("Upload successful.")]):t._e(),t._v(" "),t.uploadFailure?i("div",{attrs:{id:"upload-message-failure"}},[t._v("Upload failed: unsupported file format.")]):t._e()])]),t._v(" "),i("div",{attrs:{id:"billing"}},[i("h3",[t._v("Billing Information")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingName,expression:"billingName"}],attrs:{id:"s-name",type:"text",placeholder:"Name"},domProps:{value:t.billingName},on:{input:function(e){e.target.composing||(t.billingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingSurname,expression:"billingSurname"}],attrs:{id:"s-surname",type:"text",placeholder:"Surname"},domProps:{value:t.billingSurname},on:{input:function(e){e.target.composing||(t.billingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingAddress,expression:"billingAddress"}],attrs:{id:"s-address",type:"text",placeholder:"Address"},domProps:{value:t.billingAddress},on:{input:function(e){e.target.composing||(t.billingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingZipcode,expression:"billingZipcode"}],attrs:{id:"s-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.billingZipcode},on:{input:function(e){e.target.composing||(t.billingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCity,expression:"billingCity"}],attrs:{id:"s-city",type:"text",placeholder:"City"},domProps:{value:t.billingCity},on:{input:function(e){e.target.composing||(t.billingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCompany,expression:"billingCompany"}],attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.billingCompany},on:{input:function(e){e.target.composing||(t.billingCompany=e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"button"}},[t._v("Update")])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"orders"}},[e("h3",[this._v("Previous Orders")]),this._v(" "),e("ul",[e("li",[this._v("Order C0E11D0A-7378-446A-BE77-2FA07A576CFA - "),e("a",{attrs:{href:"/static/invoice-20-07-02.pdf",download:""}},[this._v("Invoice")])])])])}]};var $=i("VU/8")(I,N,!1,function(t){i("dGw4")},"data-v-334f6df9",null).exports,P={name:"App",data:function(){return{downtime:!1}},mounted(){this.$root.$on("downtime",t=>{this.downtime=!0})},methods:{},components:{"component-sidebar":p,"component-shop":r,"component-detail":v,"component-topbar":h,"component-cart":b,"component-checkout":w,"component-recap":A}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.downtime?i("div",{attrs:{id:"top-downtime-notice"}},[i("h3",{staticClass:"top-notice",attrs:{id:"top-special-offer-message"}},[t._v("\n      ERROR! Danube is experiencing issues! Downtimes such as this are set to happen a few times a week for demo purposes :)\n    ")])]):i("div",{attrs:{id:"top-special-offer"}},[t._m(0)]),t._v(" "),i("component-topbar"),t._v(" "),i("hr"),t._v(" "),i("div",{attrs:{id:"app-content"}},[i("div",{staticClass:"main-container"},[i("router-view",{key:t.$route.fullPath,attrs:{name:"componentShop"}}),t._v(" "),i("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),i("router-view",{attrs:{name:"componentSidebar"}}),t._v(" "),i("router-view",{attrs:{name:"componentCart"}}),t._v(" "),i("router-view",{attrs:{name:"componentCheckout"}}),t._v(" "),i("router-view",{attrs:{name:"componentRecap"}}),t._v(" "),i("router-view",{attrs:{name:"componentAccount"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"top-notice",attrs:{id:"top-special-offer-message"}},[this._v("\n      SPECIAL OFFER: 20% OFF BOOKS WITH "),e("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME ONLY!\n    ")])}]};var U=i("VU/8")(P,T,!1,function(t){i("IByc")},null,null).exports,E=i("/ocq"),R=i("8+8L");a.a.use(E.a),a.a.use(R.a);var F=new E.a({routes:[{path:"/",components:{componentSidebar:p,componentShop:r}},{path:"/books/:id",components:{componentSidebar:p,componentDetail:v}},{path:"/cart",components:{componentCart:b}},{path:"/checkout",components:{componentCheckout:w}},{path:"/recap",components:{componentRecap:A}},{path:"/search",components:{componentSidebar:p,componentShop:r}},{path:"/category",components:{componentSidebar:p,componentShop:r}},{path:"/account",components:{componentAccount:$}}],mode:"history"}),O=i("rifk"),M=i.n(O);a.a.config.productionTip=!1,a.a.use(M.a),new a.a({el:"#app",router:F,components:{App:U},template:"<App/>",render:t=>t(U)})},RtsS:function(t,e){},dGw4:function(t,e){},"g+Ag":function(t,e){},iFHm:function(t,e){},u2Ps:function(t,e){},"z/h+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8075cb41712b03edba4c.js.map