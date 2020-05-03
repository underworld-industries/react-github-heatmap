(this["webpackJsonpreact-github-heatmap-example"]=this["webpackJsonpreact-github-heatmap-example"]||[]).push([[0],{20:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=a(6),i=a(5),u=a(4),d=a(17),m=a(8),s=a(9),h=a(15),f=a(14),E=a(16),b=a(10),p=a(11),y=a(7),g=a.n(y);var v="styles_chart__1caao",w="styles_calendar__3Apt_",k="styles_loading__3UiB4";!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".styles_chart__1caao {\n  margin-bottom: 1rem;\n}\n\n.styles_calendar__3Apt_ {\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 0.25rem;\n  overflow: visible;\n}\n\n.styles_loading__3UiB4 {\n  font-size: 90%;\n}\n\n.styles_title__6Ggf1 {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.25rem;\n}\n");var S={background:"transparent",text:"#000",grade4:"#196127",grade3:"#239a3b",grade2:"#7bc96f",grade1:"#c6e48b",grade0:"#ebedf0"},j="react-github-heatmap";function O(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}function x(e,t){return e.contributions.find((function(e){return e.date===t}))}function C(e,t,a){var n=function(e,t,a){var n=new Date,l=a?Object(p.a)(n,1):Object(u.a)("".concat(e,"-01-01")),r=a?n:Object(u.a)("".concat(e,"-12-31")),c=l;0!==Object(s.a)(l)&&(c=Object(m.a)(l,Object(s.a)(l)));for(var o=[];c<=r;){var d=Object(i.a)(c,"yyyy-MM-dd");o.push({date:d,info:x(t,d)}),c=Object(b.a)(c,7)}return o.map((function(e){for(var a=[],n=0;n<=6;n+=1){var l=Object(i.a)(Object(b.a)(Object(u.a)(e.date),n),"yyyy-MM-dd");if(Object(f.a)(Object(u.a)(l),r))break;a.push({date:l,info:x(t,l)})}return a}))}(e,t,a),l=function(e,t){var a=e.slice(0,t?e.length-1:e.length),n=0;return a.reduce((function(e,t,a){var l=Object(u.a)(t[0].date),r=Object(h.a)(l)+1;return r!==n&&!(0===a&&12===r)&&(e.push({x:a,label:Object(i.a)(l,"MMM")}),n=r),e}),[])}(n,a);return{year:e,blocks:n,monthLabels:l,totalCount:a?function(e){var t=e.contributions,a=new Date,n=t.findIndex((function(e){return e.date===Object(i.a)(a,"yyyy-MM-dd")}));if(-1===n)return 0;var l=t.findIndex((function(e){return e.date===Object(i.a)(Object(p.a)(a,1),"yyyy-MM-dd")}));return-1===l&&(l=t.length-1),t.slice(n,l).reduce((function(e,t){return e+t.count}),0)}(t):function(e,t){var a=e.years.find((function(e){return e.year===String(t)}));return a?a.total:0}(t,e)}}function z(e,t){return t?"".concat(j,"__").concat(e," ").concat(t):"".concat(j,"__").concat(e)}var M=function(e){var t=e.blockSize,a=void 0===t?12:t,r=e.blockMargin,c=void 0===r?2:r,m=e.children,s=e.color,h=void 0===s?void 0:s,f=e.dateFormat,b=void 0===f?"MMM d, yyyy":f,p=e.fontSize,y=void 0===p?14:p,x=e.fullYear,M=void 0===x||x,_=e.theme,D=void 0===_?void 0:_,H=e.data,T=e.style,A=void 0===T?{}:T,N=e.years,L=void 0===N?[Number(Object(i.a)(new Date,"yyyy"))]:N,B=Object(n.useState)(null),Y=Object(o.a)(B,2),I=Y[0],R=Y[1],G=Object(n.useState)(null),J=Object(o.a)(G,2),F=J[0],V=J[1],U=O(L),W=O(M),Z=Object(n.useCallback)((function(){V(null),R(function(e){var t=e.fullYear,a=e.years,n=e.data;if(!n.years.length)throw Error("No data available");return a.map((function(e){var a=Object(E.a)(Object(u.a)(String(e)),new Date);return C(e,n,a&&t)}))}({data:H,years:L,fullYear:M}))}),[L,H,M]);function q(){return D?Object.assign({},S,D):h?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"inherit",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g()("white").darken(8).toHslString(),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"transparent",l=g()(e);if(!l.isValid())return S;var r=g()(t).isValid()?String(g()(t)):S.text;return{background:n,text:r,grade4:l.setAlpha(.92).toHslString(),grade3:l.setAlpha(.76).toHslString(),grade2:l.setAlpha(.6).toHslString(),grade1:l.setAlpha(.44).toHslString(),grade0:a}}(h):S}function P(e){var t=Object(u.a)(e.date);return"<strong>".concat(e.info.count," contributions</strong> on ").concat(Object(i.a)(t,b))}Object(n.useEffect)((function(){Z()}),[]),Object(n.useEffect)((function(){(W!==M||U.some((function(e){return!L.includes(e)})))&&Z()}),[Z,M,W,U,L]);var X=function(){var e=Math.round(1.5*y);return{width:53*(a+c)-c,height:e+7*(a+c)-c}}(),K=X.width,Q=X.height;return F?(console.error(F),l.a.createElement("p",null,"Error :(")):I?l.a.createElement("article",{className:j,style:A},I.map((function(e){var t=e.year,n=e.blocks,r=e.monthLabels,o=e.totalCount;return l.a.createElement("div",{key:t,className:z("chart",v)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:K,height:Q,viewBox:"0 0 ".concat(K," ").concat(Q),className:z("calendar",w),style:{backgroundColor:null===D||void 0===D?void 0:D.background}},function(e){var t={fill:q().text,fontSize:y};return e[1].x-e[0].x<=2&&e.shift(),e.map((function(e){return l.a.createElement("text",{x:(a+c)*e.x,y:y,key:e.x,style:t},e.label)}))}(r),function(e){var t=q(),n=Math.round(1.5*y);return e.map((function(e){return e.map((function(e,r){return l.a.createElement("rect",{x:"0",y:n+(a+c)*r,width:a,height:a,fill:t["grade".concat(e.info?e.info.intensity:0)],"data-tip":e.info?P(e):null,key:e.date})}))})).map((function(e,t){return l.a.createElement("g",{key:t,transform:"translate(".concat((a+c)*t,", 0)")},e)}))}(n)),function(e,t){var a=Object(d.a)(new Date)===e;return l.a.createElement("div",{className:z("meta"),style:{fontSize:y}},a&&M?"Last year":e," \u2013 ",a&&!M?"So far ":null,t," contributions")}(t,o),m)}))):l.a.createElement("div",{className:z("loading",k)},"Loading \u2026")},_=a(18),D=(a(25),a(26),a(19)),H=function(e){var t=e.children,a=Object(D.a)(e,["children"]);return l.a.createElement("pre",a,l.a.createElement("code",null,t))},T={position:"absolute",top:0,right:0,border:0,fill:"#fff",color:"#151513"},A=function(){return l.a.createElement("a",{href:"https://github.com/underworld-industries/react-github-heatmap",className:"github-corner","aria-label":"View source on GitHub"},l.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:T,"aria-hidden":"true"},l.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),l.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"#0078d4",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),l.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"#0078d4",className:"octo-body"})))},N={years:[{year:"2020",total:257,range:{start:"2020-01-01",end:"2020-12-31"}}],contributions:[{date:"2019-12-13",count:5,color:"#239a3b",intensity:2},{date:"2019-12-14",count:10,color:"#239a3b",intensity:3},{date:"2019-12-15",count:10,color:"#239a3b",intensity:3},{date:"2019-12-18",count:15,color:"#239a3b",intensity:3},{date:"2019-12-19",count:12,color:"#239a3b",intensity:3},{date:"2019-12-22",count:1,color:"#239a3b",intensity:1},{date:"2019-12-23",count:1,color:"#239a3b",intensity:1},{date:"2019-12-24",count:7,color:"#239a3b",intensity:2}]},L=function(){var e=Object(n.useState)(N),t=Object(o.a)(e,1)[0];return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(A,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"react-github-heatmap"),l.a.createElement("div",null,"A plugable React component to display a GitHub-like contributions graph"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}}))),l.a.createElement("main",{className:"container"},l.a.createElement(M,{data:t}),l.a.createElement("section",null,l.a.createElement("h2",null,"Installation"),l.a.createElement(H,{style:{marginTop:"0.5rem"}},"yarn add react-github-heatmap\nnpm i react-github-heatmap"),l.a.createElement("p",null,"Then in your code:"),l.a.createElement(H,null,"import React from 'react';\nimport { Heatmap, HeatmapData } from 'react-github-heatmap';\nimport { api } from './api';\n\nconst App = () => {\n  const [data, setData] = React.useState<HeatmapData>();\n  React.useEffect(() => {\n    fetchData();\n  }, [])\n\n  const fetchData = async () => {\n    await api.getData().then(data => {\n      setData(data);\n    }).catch(error => { \n      alert(error.message)\n    })\n  }\n\n  return (\n    <Heatmap data={data} />\n  )\n}")),l.a.createElement("section",null,l.a.createElement("h2",null,"Component properties"),l.a.createElement("div",{style:{overflowX:"auto"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"data"),l.a.createElement("td",null,"HeatmapData"),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"The heatmap data (",l.a.createElement("em",null,"required"),")")),l.a.createElement("tr",null,l.a.createElement("td",null,"blockMargin"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Margin between blocks")),l.a.createElement("tr",null,l.a.createElement("td",null,"blockSize"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"Size of one block (one day)")),l.a.createElement("tr",null,l.a.createElement("td",null,"color"),l.a.createElement("td",null,"string|",l.a.createElement("a",{href:"https://www.npmjs.com/package/tinycolor2"},"Color")),l.a.createElement("td",null,"undefined"),l.a.createElement("td",null,"Base color to compute graph intensity colors (see below)")),l.a.createElement("tr",null,l.a.createElement("td",null,"dateFormat"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"'MMM d, yyyy'"),l.a.createElement("td",null,"A"," ",l.a.createElement("code",null,l.a.createElement("a",{href:"https://date-fns.org/v2.9.0/docs/format"},"date-fns/format"))," ","compatible date string")),l.a.createElement("tr",null,l.a.createElement("td",null,"fontSize"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"14"),l.a.createElement("td",null,"Base font size for text in chart. The title above (@user) is 25% larger.")),l.a.createElement("tr",null,l.a.createElement("td",null,"fullYear"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"Whether to show the whole last year starting now or this year only (starting in January).")),l.a.createElement("tr",null,l.a.createElement("td",null,"theme"),l.a.createElement("td",null,"Theme"),l.a.createElement("td",null,l.a.createElement("em",null,"GitHub theme")),l.a.createElement("td",null,"A object specifying all theme colors explicitly (see below)")),l.a.createElement("tr",null,l.a.createElement("td",null,"tooltips"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"Whether to add ",l.a.createElement("code",null,"data-tip")," attributes to the blocks. Add"," ",l.a.createElement("code",null,"react-tooltip")," and use it as child of this component. See below example.")),l.a.createElement("tr",null,l.a.createElement("td",null,"years"),l.a.createElement("td",null,"number[]"),l.a.createElement("td",null,"[",Object(i.a)(new Date,"yyyy"),"]"),l.a.createElement("td",null,"List of to be rendered years. Defaults to the current year. If no data is available the chart for this year will be ommited.")))))),l.a.createElement("section",null,l.a.createElement("h2",null,"Examples"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#show-contributions-of-last-year"},"Show contributions of last year")),l.a.createElement("li",null,l.a.createElement("a",{href:"#display-this-year-only"},"Display this year only")),l.a.createElement("li",null,l.a.createElement("a",{href:"#show-several-years"},"Show several years")),l.a.createElement("li",null,l.a.createElement("a",{href:"#set-the-color-theme"},"Set the color theme")),l.a.createElement("li",null,l.a.createElement("a",{href:"#add-tooltips"},"Add tooltips")),l.a.createElement("li",null,l.a.createElement("a",{href:"#different-block-size"},"Different block size")),l.a.createElement("li",null,l.a.createElement("a",{href:"#different-block-margin"},"Different block margin")),l.a.createElement("li",null,l.a.createElement("a",{href:"#chart-font-size"},"Chart font size"))),l.a.createElement("hr",null),l.a.createElement("h3",{id:"show-contributions-of-last-year"},"Show contributions of last year"),l.a.createElement("p",null,"By default the last whole year is shown."),l.a.createElement(H,null,"<Heatmap data={data} />"),l.a.createElement(M,{data:t}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"display-this-year-only"},"Display this year only"),l.a.createElement("p",null,"You might prefer the calendar for the current year to start in January (instead of showing the last twelve months)."),l.a.createElement(H,null,"<Heatmap data={data} fullYear={false} />"),l.a.createElement(M,{data:t,fullYear:!1}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"show-several-years"},"Show several years"),l.a.createElement("p",null,"To display multiple years, pass an array into the component:"),l.a.createElement(H,null,"<Heatmap data={data} years={[2018, 2017]} fullYear={false}/>"),l.a.createElement(M,{data:t,years:[2018,2017],fullYear:!1}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"set-the-color-theme"},"Set the color theme"),l.a.createElement("p",null,"Either set a base color (any valid CSS color) to calculate the color hues for the contribution intensity automatically or specify the different theme colors explicitly. If a color is set, the theme will be ignored. If neither color or theme is set, the standard GitHub colors will be used (as in these examples)."),l.a.createElement(H,null,'<Heatmap data={data} color="hsl(203, 82%, 33%)" />'),l.a.createElement(M,{data:t,color:"hsl(203, 82%, 33%)"}),l.a.createElement("p",null,"Set the colors explicitly like this:"),l.a.createElement(H,null,"const defaultTheme = {\n  background: 'transparent',\n  text: '#000',\n  grade4: '#196127',\n  grade3: '#239a3b',\n  grade2: '#7bc96f',\n  grade1: '#c6e48b',\n  grade0: '#ebedf0',\n};\n\n<Heatmap data={data} theme={defaultTheme} />"),l.a.createElement(M,{data:t}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"add-tooltips"},"Add tooltips"),l.a.createElement("p",null,"In order to show tooltips on hover, you need to add another dependency"," ",l.a.createElement("code",null,"react-tooltip"),". Add this component then as child of the calendar. Make sure to enable the `html` property in the ",l.a.createElement("code",null,"ReactTooltip")," component to display the message correctly."),l.a.createElement(H,null,"<div>\n    <Heatmap data={data}>\n      <ReactTooltip delayShow={50} html />\n    </Heatmap>\n  </div>"),l.a.createElement("div",null,l.a.createElement(M,{data:t},l.a.createElement(_.a,{delayShow:50,html:!0}))),l.a.createElement("hr",null),l.a.createElement("h3",{id:"different-block-size"},"Different block size"),l.a.createElement("p",null,"The block size (12 per default) is configurable:"),l.a.createElement(H,null,"<Heatmap data={data} blockSize={10} />"),l.a.createElement(M,{data:t,blockSize:10}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"different-block-margin"},"Different block margin (and size)"),l.a.createElement("p",null,"Analogously the block margin can be adjusted."),l.a.createElement(H,null,"<Heatmap data={data} blockSize={10} blockMargin={4} />"),l.a.createElement(M,{data:t,blockSize:10,blockMargin:4}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"chart-font-size"},"Chart font size"),l.a.createElement("p",null,"Finally, there is a property to set the fontsize of the text inside the chart. This comes in handy, if a large block size or margin is set. The default base font size is 14px."),l.a.createElement(H,null,"<Heatmap data={data} fontSize={14} blockSize={12} />"),l.a.createElement(M,{data:t,fontSize:14,blockSize:12}))))};c.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8824234d.chunk.js.map