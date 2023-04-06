"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[211],{31898:(t,n,e)=>{e.d(n,{Z:()=>rt});var r,o,u,a,i,l,c,p,f=/\r\n?/g,s=/\t/g,h=/\f/g,d=function(t){return t.replace(f,"\n").replace(h,"").replace(s,"    ")},g=function(t,n){var e=t||{};if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},y=function(t,n){var e,r=Object.keys(t).filter((function(n){var e=t[n];if(null==e||null==e.match)return!1;var r=e.order;return"number"==typeof r&&isFinite(r)||"undefined"==typeof console||console.warn("simple-markdown: Invalid order for rule `"+n+"`: "+String(r)),!0}));r.sort((function(n,e){var r=t[n],o=t[e],u=r.order,a=o.order;if(u!==a)return u-a;var i=r.quality?0:1,l=o.quality?0:1;return i!==l?i-l:n<e?-1:n>e?1:0}));var o=function n(o,u){var a=[];for(e=u=u||e;o;){var i=null,l=null,c=null,p=NaN,f=0,s=r[0],h=t[s];do{var d=h.order,g=null==u.prevCapture?"":u.prevCapture[0],y=h.match(o,u,g);if(y){var m=h.quality?h.quality(y,u,g):0;m<=p||(i=s,l=h,c=y,p=m)}f++,s=r[f],h=t[s]}while(h&&(!c||h.order===d&&h.quality));if(null==l||null==c)throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '"+r[r.length-1]+"'. It seems to not match the following source:\n"+o);if(c.index)throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");var v=l.parse(c,n,u);if(Array.isArray(v))Array.prototype.push.apply(a,v);else{if(null==v||"object"!=typeof v)throw new Error("parse() function returned invalid parse result: '".concat(v,"'"));null==v.type&&(v.type=i),a.push(v)}u.prevCapture=c,o=o.substring(u.prevCapture[0].length)}return a};return function(t,r){return(e=g(r,n)).inline||e.disableAutoBlockNewlines||(t+="\n\n"),e.prevCapture=null,o(d(t),e)}},m=function(t){var n=function(n,e,r){return e.inline?t.exec(n):null};return n.regex=t,n},v=function(t){var n=function(n,e){return e.inline?null:t.exec(n)};return n.regex=t,n},w=function(t){var n=function(n,e){return t.exec(n)};return n.regex=t,n},S="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x=function(t,n,e){return{$$typeof:S,type:t,key:null==n?void 0:n,ref:null,props:e,_owner:null}},b=function(t,n,e,r){e=e||{},r=void 0===r||r;var o="";for(var u in e){var a=e[u];Object.prototype.hasOwnProperty.call(e,u)&&a&&(o+=" "+$(u)+'="'+$(a)+'"')}var i="<"+t+o+">";return r?i+n+"</"+t+">":i},k={},E=function(t){if(null==t)return null;try{var n=new URL(t,"https://localhost").protocol;if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}catch(e){return null}return t},_=/[<>&"']/g,R={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#96;"},$=function(t){return String(t).replace(_,(function(t){return R[t]}))},A=/\\([^0-9A-Za-z\s])/g,T=function(t){return t.replace(A,"$1")},j=function(t,n,e){var r=e.inline||!1;e.inline=!0;var o=t(n,e);return e.inline=r,o},O=function(t,n,e){return{content:j(n,t[1],e)}},C=function(){return{}},B="(?:[*+-]|\\d+\\.)",P="( *)((?:[*+-]|\\d+\\.)) +",N=new RegExp("^"+P),q=new RegExp(P+"[^\\n]*(?:\\n(?!\\1"+B+" )[^\\n]*)*(\n|$)","gm"),L=/\n{2,}$/,F=/^ (?= *`)|(` *) $/g,I=L,Z=/ *\n+$/,z=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) )\\n*|\\s*\n*$)"),G=/(?:^|\n)( *)$/,X=(r=/^ *\| *| *\| *$/g,o=/ *$/,u=/^ *-+: *$/,a=/^ *:-+: *$/,i=/^ *:-+ *$/,l=function(t){return u.test(t)?"right":a.test(t)?"center":i.test(t)?"left":null},c=function(t,n,e,r){var u=e.inTable;e.inTable=!0;var a=n(t.trim(),e);e.inTable=u;var i=[[]];return a.forEach((function(t,n){"tableSeparator"===t.type?(!r||0!==n&&n!==a.length-1)&&i.push([]):("text"!==t.type||null!=a[n+1]&&"tableSeparator"!==a[n+1].type||(t.content=t.content.replace(o,"")),i[i.length-1].push(t))})),i},{parseTable:(p=function(t){return function(n,e,o){o.inline=!0;var u=c(n[1],e,o,t),a=function(t,n,e,o){return o&&(t=t.replace(r,"")),t.trim().split("|").map(l)}(n[2],0,0,t),i=function(t,n,e,r){return t.trim().split("\n").map((function(t){return c(t,n,e,r)}))}(n[3],e,o,t);return o.inline=!1,{type:"table",header:u,align:a,cells:i}}})(!0),parseNpTable:p(!1),TABLE_REGEX:/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,NPTABLE_REGEX:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/}),H="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",U="\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",D=/mailto:/i,M=function(t,n,e){var r=(t[2]||t[1]).replace(/\s+/g," ").toLowerCase();if(n._defs&&n._defs[r]){var o=n._defs[r];e.target=o.target,e.title=o.title}return n._refs=n._refs||{},n._refs[r]=n._refs[r]||[],n._refs[r].push(e),e},Q=0,J={Array:{react:function(t,n,e){for(var r=e.key,o=[],u=0,a=0;u<t.length;u++,a++){e.key=""+u;var i=t[u];if("text"===i.type)for(i={type:"text",content:i.content};u+1<t.length&&"text"===t[u+1].type;u++)i.content+=t[u+1].content;o.push(n(i,e))}return e.key=r,o},html:function(t,n,e){for(var r="",o=0;o<t.length;o++){var u=t[o];if("text"===u.type)for(u={type:"text",content:u.content};o+1<t.length&&"text"===t[o+1].type;o++)u.content+=t[o+1].content;r+=n(u,e)}return r}},heading:{order:Q++,match:v(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{level:t[1].length,content:j(n,t[2].trim(),e)}})),react:function(t,n,e){return x("h"+t.level,e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("h"+t.level,n(t.content,e))}},nptable:{order:Q++,match:v(X.NPTABLE_REGEX),parse:X.parseNpTable,react:null,html:null},lheading:{order:Q++,match:v(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{type:"heading",level:"="===t[2]?1:2,content:j(n,t[1],e)}})),react:null,html:null},hr:{order:Q++,match:v(/^( *[-*_]){3,} *(?:\n *)+\n/),parse:C,react:function(t,n,e){return x("hr",e.key,k)},html:function(t,n,e){return"<hr>"}},codeBlock:{order:Q++,match:v(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{lang:void 0,content:t[0].replace(/^    /gm,"").replace(/\n+$/,"")}})),react:function(t,n,e){var r=t.lang?"markdown-code-"+t.lang:void 0;return x("pre",e.key,{children:x("code",null,{className:r,children:t.content})})},html:function(t,n,e){var r=t.lang?"markdown-code-"+t.lang:void 0,o=b("code",$(t.content),{class:r});return b("pre",o)}},fence:{order:Q++,match:v(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{type:"codeBlock",lang:t[2]||void 0,content:t[3]}})),react:null,html:null},blockQuote:{order:Q++,match:v(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{content:n(t[0].replace(/^ *> ?/gm,""),e)}})),react:function(t,n,e){return x("blockquote",e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("blockquote",n(t.content,e))}},list:{order:Q++,match:function(t,n){var e=null==n.prevCapture?"":n.prevCapture[0],r=G.exec(e),o=n._list||!n.inline;return r&&o?(t=r[1]+t,z.exec(t)):null},parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){var r=t[2],o=r.length>1,u=o?+r:void 0,a=t[0].replace(I,"\n").match(q),i=!1;return{ordered:o,start:u,items:a.map((function(t,r){var o=N.exec(t),u=o?o[0].length:0,l=new RegExp("^ {1,"+u+"}","gm"),c=t.replace(l,"").replace(N,""),p=r===a.length-1,f=-1!==c.indexOf("\n\n")||p&&i;i=f;var s,h=e.inline,d=e._list;e._list=!0,f?(e.inline=!1,s=c.replace(Z,"\n\n")):(e.inline=!0,s=c.replace(Z,""));var g=n(s,e);return e.inline=h,e._list=d,g}))}})),react:function(t,n,e){var r=t.ordered?"ol":"ul";return x(r,e.key,{start:t.start,children:t.items.map((function(t,r){return x("li",""+r,{children:n(t,e)})}))})},html:function(t,n,e){var r=t.items.map((function(t){return b("li",n(t,e))})).join(""),o=t.ordered?"ol":"ul",u={start:t.start};return b(o,r,u)}},def:{order:Q++,match:v(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){var r=t[1].replace(/\s+/g," ").toLowerCase(),o=t[2],u=t[3];return e._refs&&e._refs[r]&&e._refs[r].forEach((function(t){t.target=o,t.title=u})),e._defs=e._defs||{},e._defs[r]={target:o,title:u},{def:r,target:o,title:u}})),react:function(){return null},html:function(){return""}},table:{order:Q++,match:v(X.TABLE_REGEX),parse:X.parseTable,react:function(t,n,e){var r=function(n){return null==t.align[n]?{}:{textAlign:t.align[n]}},o=t.header.map((function(t,o){return x("th",""+o,{style:r(o),scope:"col",children:n(t,e)})})),u=t.cells.map((function(t,o){return x("tr",""+o,{children:t.map((function(t,o){return x("td",""+o,{style:r(o),children:n(t,e)})}))})}));return x("table",e.key,{children:[x("thead","thead",{children:x("tr",null,{children:o})}),x("tbody","tbody",{children:u})]})},html:function(t,n,e){var r=function(n){return null==t.align[n]?"":"text-align:"+t.align[n]+";"},o=t.header.map((function(t,o){return b("th",n(t,e),{style:r(o),scope:"col"})})).join(""),u=t.cells.map((function(t){var o=t.map((function(t,o){return b("td",n(t,e),{style:r(o)})})).join("");return b("tr",o)})).join(""),a=b("thead",b("tr",o)),i=b("tbody",u);return b("table",a+i)}},newline:{order:Q++,match:v(/^(?:\n *)*\n/),parse:C,react:function(t,n,e){return"\n"},html:function(t,n,e){return"\n"}},paragraph:{order:Q++,match:v(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),parse:O,react:function(t,n,e){return x("div",e.key,{className:"paragraph",children:n(t.content,e)})},html:function(t,n,e){return b("div",n(t.content,e),{class:"paragraph"})}},escape:{order:Q++,match:m(/^\\([^0-9A-Za-z\s])/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{type:"text",content:t[1]}})),react:null,html:null},tableSeparator:{order:Q++,match:function(t,n){return n.inTable?/^ *\| */.exec(t):null},parse:function(){return{type:"tableSeparator"}},react:function(){return" | "},html:function(){return" &vert; "}},autolink:{order:Q++,match:m(/^<([^: >]+:\/[^ >]+)>/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{type:"link",content:[{type:"text",content:t[1]}],target:t[1]}})),react:null,html:null},mailto:{order:Q++,match:m(/^<([^ >]+@[^ >]+)>/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){var r=t[1],o=t[1];return D.test(o)||(o="mailto:"+o),{type:"link",content:[{type:"text",content:r}],target:o}})),react:null,html:null},url:{order:Q++,match:m(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{type:"link",content:[{type:"text",content:t[1]}],target:t[1],title:void 0}})),react:null,html:null},link:{order:Q++,match:m(new RegExp("^\\[("+H+")\\]\\("+U+"\\)")),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{content:n(t[1],e),target:T(t[2]),title:t[3]}})),react:function(t,n,e){return x("a",e.key,{href:E(t.target),title:t.title,children:n(t.content,e)})},html:function(t,n,e){var r={href:E(t.target),title:t.title};return b("a",n(t.content,e),r)}},image:{order:Q++,match:m(new RegExp("^!\\[("+H+")\\]\\("+U+"\\)")),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{alt:t[1],target:T(t[2]),title:t[3]}})),react:function(t,n,e){return x("img",e.key,{src:E(t.target),alt:t.alt,title:t.title})},html:function(t,n,e){var r={src:E(t.target),alt:t.alt,title:t.title};return b("img","",r,!1)}},reflink:{order:Q++,match:m(new RegExp("^\\[("+H+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return M(t,e,{type:"link",content:n(t[1],e)})})),react:null,html:null},refimage:{order:Q++,match:m(new RegExp("^!\\[("+H+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return M(t,e,{type:"image",alt:t[1]})})),react:null,html:null},em:{order:Q,match:m(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),quality:function(t){return t[0].length+.2},parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{content:n(t[2]||t[1],e)}})),react:function(t,n,e){return x("em",e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("em",n(t.content,e))}},strong:{order:Q,match:m(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),quality:function(t){return t[0].length+.1},parse:O,react:function(t,n,e){return x("strong",e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("strong",n(t.content,e))}},u:{order:Q++,match:m(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),quality:function(t){return t[0].length},parse:O,react:function(t,n,e){return x("u",e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("u",n(t.content,e))}},del:{order:Q++,match:m(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),parse:O,react:function(t,n,e){return x("del",e.key,{children:n(t.content,e)})},html:function(t,n,e){return b("del",n(t.content,e))}},inlineCode:{order:Q++,match:m(/^(`+)([\s\S]*?[^`])\1(?!`)/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{content:t[2].replace(F,"$1")}})),react:function(t,n,e){return x("code",e.key,{children:t.content})},html:function(t,n,e){return b("code",$(t.content))}},br:{order:Q++,match:w(/^ {2,}\n/),parse:C,react:function(t,n,e){return x("br",e.key,k)},html:function(t,n,e){return"<br>"}},text:{order:Q++,match:w(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),parse:function(t){function n(n,e,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n,e){return{content:t[0]}})),react:function(t,n,e){return t.content},html:function(t,n,e){return $(t.content)}}},K=function(t,n){var e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n)throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");var o=t.Array||J.Array,u=o[n];if(!u)throw new Error("simple-markdown: outputFor: to join nodes of type `"+n+"` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");var a=u,i=function r(o,u){return e=u=u||e,Array.isArray(o)?a(o,r,u):t[o.type][n](o,r,u)},l=function(t,n){return e=g(n,r),i(t,e)};return l},V=y(J),W=function(t,n){return(n=n||{}).inline=!1,V(t,n)},Y=function(t,n){var e=L.test(t);return(n=n||{}).inline=!e,V(t,n)},tt=K(J,"react"),nt=K(J,"html"),et=function(t,n){return tt(W(t,n),n)},rt={defaultRules:J,parserFor:y,outputFor:K,inlineRegex:m,blockRegex:v,anyScopeRegex:w,parseInline:j,parseBlock:function(t,n,e){var r=e.inline||!1;e.inline=!1;var o=t(n+"\n\n",e);return e.inline=r,o},markdownToReact:et,markdownToHtml:function(t,n){return nt(W(t,n),n)},ReactMarkdown:function(t){var n={};for(var e in t)"source"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.children=et(t.source),x("div",null,n)},defaultBlockParse:W,defaultInlineParse:function(t,n){return(n=n||{}).inline=!0,V(t,n)},defaultImplicitParse:Y,defaultReactOutput:tt,defaultHtmlOutput:nt,preprocess:d,sanitizeText:$,sanitizeUrl:E,unescapeUrl:T,htmlTag:b,reactElement:x,defaultRawParse:V,ruleOutput:function(t,n){n||"undefined"==typeof console||console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");return function(e,r,o){return t[e.type][n](e,r,o)}},reactFor:function(t){return function n(e,r){if(r=r||{},Array.isArray(e)){for(var o=r.key,u=[],a=null,i=0;i<e.length;i++){r.key=""+i;var l=n(e[i],r);"string"==typeof l&&"string"==typeof a?(a+=l,u[u.length-1]=a):(u.push(l),a=l)}return r.key=o,u}return t(e,n,r)}},htmlFor:function(t){return function n(e,r){return r=r||{},Array.isArray(e)?e.map((function(t){return n(t,r)})).join(""):t(e,n,r)}},defaultParse:function(){return"undefined"!=typeof console&&console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),Y.apply(null,arguments)},defaultOutput:function(){return"undefined"!=typeof console&&console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),tt.apply(null,arguments)}}},211:(t,n,e)=>{e.d(n,{c:()=>c});e(94646);var r=e(70044),o=e(43047),u=e(31898);function a(t){const n=function(t){return t.replace(/\n{2,}/g,"\n").replace(/^\s+/gm,"")}(t),e=(0,u.Z.defaultBlockParse)(n);let r=[[]],o=0;function a(t,n){if("text"===t.type){t.content.split("\n").forEach(((t,e)=>{0!==e&&(o++,r.push([])),t.split(" ").forEach((t=>{t&&r[o].push({content:t,type:n||"normal"})}))}))}else"strong"!==t.type&&"em"!==t.type||t.content.forEach((n=>{a(n,t.type)}))}return e.forEach((t=>{"paragraph"===t.type&&t.content.forEach((t=>{a(t)}))})),r}function i(t,n,e){return t.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",n*e-.1+"em").attr("dy",e+"em")}function l(t,n){t.text(""),n.forEach(((n,e)=>{const r=t.append("tspan").attr("font-style","em"===n.type?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight","strong"===n.type?"bold":"normal");0===e?r.text(n.content):r.text(" "+n.content)}))}const c=(t,n="",{style:e="",isTitle:c=!1,classes:p="",useHtmlLabels:f=!0,isNode:s=!0,width:h,addSvgBackground:d=!1}={})=>{if(r.l.info("createText",n,e,c,p,f,s,d),f){const r=(g=n,(0,u.Z.defaultBlockParse)(g).map((function t(n){return"text"===n.type?n.content.replace(/\n/g,"<br/>"):"strong"===n.type?`<strong>${n.content.map(t).join("")}</strong>`:"em"===n.type?`<em>${n.content.map(t).join("")}</em>`:"paragraph"===n.type?`<p>${n.content.map(t).join("")}</p>`:""})).join(""));let a=function(t,n,e,r){const o=t.append("foreignObject"),u=o.append("xhtml:div"),a=n.label,i=n.isNode?"nodeLabel":"edgeLabel";var l,c;u.html(`<span class="${i} ${r}" `+(n.labelStyle?'style="'+n.labelStyle+'"':"")+">"+a+"</span>"),l=u,(c=n.labelStyle)&&l.attr("style",c),u.style("display","table-cell"),u.style("white-space","nowrap"),u.style("max-width",e+"px"),u.attr("xmlns","http://www.w3.org/1999/xhtml");let p=u.node().getBoundingClientRect();return p.width===e&&(u.style("display","table"),u.style("white-space","break-spaces"),u.style("width",e+"px"),p=u.node().getBoundingClientRect()),o.style("width",p.width),o.style("height",p.height),o.node()}(t,{isNode:s,label:(0,o.d)(r).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")},h,p);return a}{const e=a(n),r=['"',"'",".",",",":",";","!","?","(",")","[","]","{","}"];let o;e.forEach((t=>{t.forEach((t=>{r.includes(t.content)&&o&&(o.content+=t.content,t.content=""),o=t}))}));const u=function(t,n,e,r=!1){const o=n.append("g");let u=o.insert("rect").attr("class","background");const a=o.append("text").attr("y","-10.1");let c=-1;if(e.forEach((n=>{c++;let e,r=i(a,c,1.1),o=[...n].reverse(),u=[];for(;o.length;)e=o.pop(),u.push(e),l(r,u),r.node().getComputedTextLength()>t&&(u.pop(),o.push(e),l(r,u),u=[],c++,r=i(a,c,1.1))})),r){const t=a.node().getBBox(),n=2;return u.attr("x",-n).attr("y",-n).attr("width",t.width+2*n).attr("height",t.height+2*n),o.node()}return a.node()}(h,t,e,d);return u}var g}}}]);