"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9967],{19967:(e,t,r)=>{r.r(t),r.d(t,{diagram:()=>i});var n=r(45886),o=(r(45625),r(94646));r(9419),r(17452),r(3688),r(70870),r(70277),r(96225);r(43349);r(66749),r(74379);r(61666);o.c_6;r(85408),r(48003);var l=r(49540);r(27856),r(27484),r(17967),r(39354);const a={},s=function(e){const t=Object.keys(e);for(const r of t)a[r]=e[r]},i={parser:n.p,db:n.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,s(e.flowchart),n.f.clear(),n.f.setGen("gen-1")}}},49540:(e,t,r)=>{r.d(t,{a:()=>g,f:()=>f});var n=r(45625),o=r(94646),l=r(45886),a=r(9419),s=r(85408),i=r(73841),c=r(43349),d=r(48003);const p={},b=function(e,t,r,n,o,l){const i=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let d="default";n.classes.length>0&&(d=n.classes.join(" "));const p=(0,s.m)(n.styles);let b,w=void 0!==n.text?n.text:n.id;if((0,a.j)((0,a.g)().flowchart.htmlLabels)){const e={label:w.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};b=(0,c.a)(i,e).node(),b.parentNode.removeChild(b)}else{const e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));const t=w.split(a.d.lineBreakRegex);for(const r of t){const t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}b=e}let f=0,g="";switch(n.type){case"round":f=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}t.setNode(n.id,{labelStyle:p.labelStyle,shape:g,labelText:w,rx:f,ry:f,class:d,style:p.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:l.db.getTooltip(n.id)||"",domId:l.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,a.g)().flowchart.padding}),a.l.info("setNode",{labelStyle:p.labelStyle,shape:g,labelText:w,rx:f,ry:f,class:d,style:p.style,id:n.id,domId:l.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,a.g)().flowchart.padding})}))},w=function(e,t,r){a.l.info("abc78 edges = ",e);let n,l,i=0,c={};if(void 0!==e.defaultStyle){const t=(0,s.m)(e.defaultStyle);n=t.style,l=t.labelStyle}e.forEach((function(r){i++;var d="L-"+r.start+"-"+r.end;void 0===c[d]?(c[d]=0,a.l.info("abc78 new entry",d,c[d])):(c[d]++,a.l.info("abc78 new entry",d,c[d]));let b=d+"-"+c[d];a.l.info("abc78 new link id to be used is",d,b,c[d]);var w="LS-"+r.start,f="LE-"+r.end;const g={style:"",labelStyle:""};switch(g.minlen=r.length||1,"arrow_open"===r.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let u="",h="";switch(r.stroke){case"normal":u="fill:none;",void 0!==n&&(u=n),void 0!==l&&(h=l),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,s.m)(r.style);u=e.style,h=e.labelStyle}g.style=g.style+=u,g.labelStyle=g.labelStyle+=h,void 0!==r.interpolate?g.curve=(0,s.n)(r.interpolate,o.c_6):void 0!==e.defaultInterpolate?g.curve=(0,s.n)(e.defaultInterpolate,o.c_6):g.curve=(0,s.n)(p.curve,o.c_6),void 0===r.text?void 0!==r.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType="text",g.label=r.text.replace(a.d.lineBreakRegex,"\n"),void 0===r.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=b,g.classes="flowchart-link "+w+" "+f,t.setEdge(r.start,r.end,g,i)}))},f={setConf:function(e){const t=Object.keys(e);for(const r of t)p[r]=e[r]},addVertices:b,addEdges:w,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(r){return}},draw:function(e,t,r,c){a.l.info("Drawing flowchart"),c.db.clear(),l.f.setGen("gen-2"),c.parser.parse(e);let p=c.db.getDirection();void 0===p&&(p="TD");const{securityLevel:f,flowchart:g}=(0,a.g)(),u=g.nodeSpacing||50,h=g.rankSpacing||50;let y;"sandbox"===f&&(y=(0,o.Ys)("#i"+t));const k="sandbox"===f?(0,o.Ys)(y.nodes()[0].contentDocument.body):(0,o.Ys)("body"),x="sandbox"===f?y.nodes()[0].contentDocument:document,m=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:u,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let v;const S=c.db.getSubGraphs();a.l.info("Subgraphs - ",S);for(let n=S.length-1;n>=0;n--)v=S[n],a.l.info("Subgraph - ",v),c.db.addVertex(v.id,v.title,"group",void 0,v.classes,v.dir);const _=c.db.getVertices(),T=c.db.getEdges();a.l.info("Edges",T);let C=0;for(C=S.length-1;C>=0;C--){v=S[C],(0,o.td_)("cluster").append("text");for(let e=0;e<v.nodes.length;e++)a.l.info("Setting up subgraphs",v.nodes[e],v.id),m.setParent(v.nodes[e],v.id)}b(_,m,t,k,x,c),w(T,m);const $=k.select(`[id="${t}"]`),E=k.select("#"+t+" g");if((0,i.r)(E,m,["point","circle","cross"],"flowchart",t),s.u.insertTitle($,"flowchartTitleText",g.titleTopMargin,c.db.getDiagramTitle()),(0,d.s)(m,$,g.diagramPadding,g.useMaxWidth),c.db.indexNodes("subGraph"+C),!g.htmlLabels){const e=x.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=x.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(_).forEach((function(e){const r=_[e];if(r.link){const n=(0,o.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=x.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===f?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),o=n.select(".label-container");o&&t.append((function(){return o.node()}));const l=n.select(".label");l&&t.append((function(){return l.node()}))}}}))}},g=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);