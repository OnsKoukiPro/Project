System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>M});var n={lessThanXSeconds:{one:"по-малко от секунда",other:"по-малко от {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половин минута",lessThanXMinutes:{one:"по-малко от минута",other:"по-малко от {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"около час",other:"около {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дни"},aboutXWeeks:{one:"около седмица",other:"около {{count}} седмици"},xWeeks:{one:"1 седмица",other:"{{count}} седмици"},aboutXMonths:{one:"около месец",other:"около {{count}} месеца"},xMonths:{one:"1 месец",other:"{{count}} месеца"},aboutXYears:{one:"около година",other:"около {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"над година",other:"над {{count}} години"},almostXYears:{one:"почти година",other:"почти {{count}} години"}};function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}const r={date:a({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:a({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var s={};function d(){return s}function c(t,e){var n,a,r,o,s,c,f,h;i(1,arguments);var m=d(),v=l(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(s=e.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:m.weekStartsOn)&&void 0!==a?a:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=u(t),b=y.getUTCDay(),g=(b<v?7:0)+b-v;return y.setUTCDate(y.getUTCDate()-g),y.setUTCHours(0,0,0,0),y}function f(t,e,n){i(2,arguments);var a=c(t,n),r=c(e,n);return a.getTime()===r.getTime()}var h=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function m(t){var e=h[t];return 2===t?"'във "+e+" в' p":"'в "+e+" в' p"}var v={lastWeek:function(t,e,n){var a=u(t),r=a.getUTCDay();return f(a,e,n)?m(r):function(t){var e=h[t];switch(t){case 0:case 3:case 6:return"'миналата "+e+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+e+" в' p"}}(r)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function(t,e,n){var a=u(t),r=a.getUTCDay();return f(a,e,n)?m(r):function(t){var e=h[t];switch(t){case 0:case 3:case 6:return"'следващата "+e+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+e+" в' p"}}(r)},other:"P"};function y(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function b(t,e,n,a,r){var i=function(t){return"quarter"===t}(e)?r:function(t){return"year"===t||"week"===t||"minute"===t||"second"===t}(e)?a:n;return t+"-"+i}const g={ordinalNumber:function(t,e){var n=Number(t),a=null==e?void 0:e.unit;if(0===n)return b(0,a,"ев","ева","ево");if(n%1e3==0)return b(n,a,"ен","на","но");if(n%100==0)return b(n,a,"тен","тна","тно");var r=n%100;if(r>20||r<10)switch(r%10){case 1:return b(n,a,"ви","ва","во");case 2:return b(n,a,"ри","ра","ро");case 7:case 8:return b(n,a,"ми","ма","мо")}return b(n,a,"ти","та","то")},era:y({values:{narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:y({values:{abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:y({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]},defaultWidth:"wide"}),dayPeriod:y({values:{wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}},defaultWidth:"wide"})};function w(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],l=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(l)?P(l,(function(t){return t.test(u)})):p(l,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(s):s,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(u.length);return{value:o,rest:d}}}function p(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function P(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var W,S={ordinalNumber:(W={matchPattern:/^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var a=n[0],r=t.match(W.parsePattern);if(!r)return null;var i=W.valueCallback?W.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:w({matchPatterns:{narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(преди новата ера|новата ера|нова ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^п/i,/^н/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?o?)? тримес.?/i,wide:/^[1234](-?[врт]?о?)? тримесечие/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:w({matchPatterns:{abbreviated:/^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,wide:/^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^юн/i,/^юл/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)/i,abbreviated:/^(нед|пон|вто|сря|чет|пет|съб)/i,wide:/^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[ъб]/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{any:/^(преди о|след о|в по|на о|през|веч|сут|следо)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^преди о/i,pm:/^след о/i,midnight:/^в пол/i,noon:/^на об/i,morning:/^сут/i,afternoon:/^следо/i,evening:/^веч/i,night:/^през н/i}},defaultParseWidth:"any"})};const M={code:"bg",formatDistance:function(t,e,a){var r,i=n[t];return r="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",String(e)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"след "+r:"преди "+r:r},formatLong:r,formatRelative:function(t,e,n,a){var r=v[t];return"function"==typeof r?r(e,n,a):r},localize:g,match:S,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));