import{j as e,a as l}from"./react-DbUYpRju.js";import{c as v}from"./react-dom-D0h_DeMb.js";import{$ as b}from"./react-loader-spinner-CmBnjrgC.js";import{R as N,L as C,a as k,C as S,X as $,Y as w,b as L,T as A}from"./recharts-YPm0ktQ-.js";import"./eventemitter3-BFZ8r7KD.js";import"./scheduler-CKyTKYc2.js";import"./styled-components-CZgjqS7E.js";import"./tslib-wbdO-F7s.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./clsx-B-dksMZM.js";import"./lodash-B4Nu4dCC.js";import"./tiny-invariant-BaFNuDhB.js";import"./d3-shape-DjFPhhqo.js";import"./d3-path-CimkQT29.js";import"./react-smooth-Byfstcok.js";import"./prop-types-DVIH8rkB.js";import"./fast-equals-C7I1S-bJ.js";import"./victory-vendor-6_AdwBXU.js";import"./d3-scale-BYIooUZQ.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-g_qRI3rN.js";import"./d3-time-format-BKO53YJi.js";import"./d3-time-QpEiTrED.js";import"./d3-interpolate-CvRPKVI0.js";import"./d3-color-9lF95FHy.js";import"./d3-format-CzD4bSOQ.js";import"./recharts-scale-DiOBu8nk.js";import"./decimal.js-light-B5-9uEc-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const f="https://api.coingecko.com/api/v3",E=(s,n)=>`${f}/coins/markets?vs_currency=${n}&order=market_cap_desc&per_page=20&page=${s}&x_cg_demo_api_key=CG-t5Uy9G1hUYqtgg3MbEZKT9NA`,T=s=>`${f}/search?query=${s}&x_cg_demo_api_key=CG-t5Uy9G1hUYqtgg3MbEZKT9NA`,U=s=>`${f}/coins/${s}/market_chart?vs_currency=usd&days=7`,R="/crypto-app/assets/chart-up-CfzBpwUI.svg",P="/crypto-app/assets/chart-down-uYDfKm8v.svg",z="_container_1gh3b_1",D="_table_1gh3b_15",q="_symbol_1gh3b_61",B="_success_1gh3b_97",H="_error_1gh3b_105",j={container:z,table:D,symbol:q,success:B,error:H};function K({coin:s,currencySymbol:n,setChart:c}){const{id:o,image:t,name:r,symbol:i,current_price:m,total_volume:a,price_change_percentage_24h:d}=s,x=async()=>{try{const _=await(await fetch(U(o))).json();c({..._,coin:s,currencySymbol:n})}catch{c(null)}};return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:j.symbol,onClick:x,children:[e.jsx("img",{src:t||"fallback-image.svg",alt:r||"Unknown Coin"}),e.jsx("span",{children:i.toUpperCase()})]})}),e.jsx("td",{children:r||"N/A"}),e.jsxs("td",{children:[n,m?m.toLocaleString():"N/A"]}),e.jsxs("td",{className:d>0?j.success:j.error,children:[" ",typeof d=="number"?d.toFixed(2):"N/A","%"]}),e.jsx("td",{children:a.toLocaleString()}),e.jsx("td",{children:e.jsx("img",{src:d>0?R:P,alt:d>0?"Price Up":"Price Down"})})]})}function O({coins:s,isLoding:n,currency:c,setChart:o}){const t=r=>r==="usd"?"$":r==="eur"?"€":"¥";return e.jsx("div",{className:j.container,children:n?e.jsx(b,{strokeColor:"#3874ff",strokeWidth:"2"}):e.jsxs("table",{className:j.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Coin"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"24h"}),e.jsx("th",{children:"Total Volume"}),e.jsx("th",{children:"Chart"})]})}),e.jsx("tbody",{children:s.map(r=>e.jsx(K,{coin:r,currencySymbol:t(c),setChart:o},r.id))})]})})}const Y="_pagination_l0m7x_1",G="_disabled_l0m7x_73",I="_selected_l0m7x_81",u={pagination:Y,disabled:G,selected:I};function M({page:s,setPage:n}){const c=()=>{s<=1||n(t=>t-1)},o=()=>{s>=10||n(t=>t+1)};return e.jsxs("div",{className:u.pagination,children:[e.jsx("button",{onClick:c,className:s===1?u.disabled:null,children:"Previous"}),e.jsx("p",{className:s===1?u.selected:null,children:"1"}),e.jsx("p",{className:s===2?u.selected:null,children:"2"}),s>2&&s<9&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"..."}),e.jsx("p",{className:u.selected,children:s})]}),e.jsx("span",{children:"..."}),e.jsx("p",{className:s===9?u.selected:null,children:"9"}),e.jsx("p",{className:s===10?u.selected:null,children:"10"}),e.jsx("button",{onClick:o,className:s===10?u.disabled:null,children:"Next"})]})}const F="_searchBox_r6qqk_1",W="_searchResult_r6qqk_63",g={searchBox:F,searchResult:W};function X({currency:s,setCurrency:n}){const[c,o]=l.useState(""),[t,r]=l.useState([]),[i,m]=l.useState(!1);return l.useEffect(()=>{const a=new AbortController;if(r([]),!c){m(!1);return}const d=async()=>{try{const p=await(await fetch(T(c),{signal:a.signal})).json();p.coins?(r(p.coins),m(!1)):alert(p.status.error_meassage)}catch(x){x.name!=="AbortError"&&alert(x.message)}};return m(!0),d(),()=>a.abort()},[c]),e.jsxs("div",{className:g.searchBox,children:[e.jsx("input",{type:"text",placeholder:"Search",value:c,onChange:a=>o(a.target.value)}),e.jsxs("select",{value:s,onChange:a=>n(a.target.value),children:[e.jsx("option",{value:"usd",children:"USD"}),e.jsx("option",{value:"eur",children:"EUR"}),e.jsx("option",{value:"jpy",children:"JPY"})]}),(!!t.length||i)&&e.jsxs("div",{className:g.searchResult,children:[i&&e.jsx(b,{width:"50px",heigth:"50px",strokeColor:"#3874ff",strokeWidth:"2"}),e.jsx("ul",{children:t.map(a=>e.jsxs("li",{children:[e.jsx("img",{src:a.thumb,alt:a.name}),e.jsx("p",{children:a.name})]},a.id))})]})]})}const Z=(s,n)=>s[n].map(o=>({date:o[0],[n]:o[1]})),J="_container_1k0z9_1",V="_cross_1k0z9_19",Q="_chart_1k0z9_59",ee="_graph_1k0z9_87",se="_name_1k0z9_97",te="_types_1k0z9_129",re="_selected_1k0z9_167",ne="_datails_1k0z9_177",h={container:J,cross:V,chart:Q,graph:ee,name:se,types:te,selected:re,datails:ne};function ce({chart:s,setChart:n}){const[c,o]=l.useState("prices"),t=r=>{if(r.target.tagName==="BUTTON"){const i=r.target.innerText.toLowerCase().replace(" ","_");o(i)}};return e.jsxs("div",{className:h.container,children:[e.jsx("span",{className:h.cross,onClick:()=>n(null),children:"x"}),e.jsxs("div",{className:h.chart,children:[e.jsxs("div",{className:h.name,children:[e.jsx("img",{src:s.coin.image}),e.jsx("p",{children:s.coin.name})]}),e.jsx("div",{className:h.graph,children:e.jsx(oe,{data:Z(s,c),type:c})}),e.jsxs("div",{className:h.types,onClick:t,children:[e.jsx("button",{className:c==="prices"?h.selected:null,children:"prices"}),e.jsx("button",{className:c==="market_caps"?h.selected:null,children:"market_caps"}),e.jsx("button",{className:c==="total_volumes"?h.selected:null,children:"total_volumes"})]}),e.jsxs("div",{className:h.datails,children:[e.jsxs("div",{children:[e.jsx("p",{children:"prices:"}),e.jsxs("span",{children:[s.currencySymbol,s.coin.current_price]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"ATH:"}),e.jsxs("span",{children:[s.currencySymbol,s.coin.ath]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Market Cap:"}),e.jsxs("span",{children:[s.currencySymbol,s.coin.market_cap]})]})]})]})]})}const oe=({data:s,type:n})=>e.jsx(N,{width:"100%",height:"100%",children:e.jsxs(C,{width:400,height:300,data:s,children:[e.jsx(k,{type:"monotone",dataKey:n,stroke:"#3874ff",strokeWidth:"2px"}),e.jsx(S,{stroke:"#404042"}),e.jsx($,{dataKey:"date",hide:!0}),e.jsx(w,{dataKey:n,domain:["auto","auto"]}),e.jsx(L,{}),e.jsx(A,{})]})});function ae(){const[s,n]=l.useState([]),[c,o]=l.useState(!0),[t,r]=l.useState(1),[i,m]=l.useState("usd"),[a,d]=l.useState(null);return l.useEffect(()=>{o(!0),(async()=>{try{const _=await(await fetch(E(t,i))).json();n(_),o(!1)}catch(p){alert(p.message)}})()},[t,i]),e.jsxs("div",{children:[e.jsx(X,{currency:i,setCurrency:m}),e.jsx(O,{coins:s,isLoding:c,currency:i,setChart:d}),e.jsx(M,{page:t,setPage:r}),!!a&&e.jsx(ce,{chart:a,setChart:d})]})}const ie="_header_1fs7s_1",le="_footer_1fs7s_43",y={header:ie,footer:le};function de({children:s}){return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:y.header,children:[e.jsx("h1",{children:"Crypto App"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://coingecko.com/",children:"coins"})," | React.js"," "]})]}),s,e.jsx("footer",{className:y.footer,children:e.jsx("p",{children:"Developer by Elnaz Hashemi "})})]})}function he(){return e.jsx(de,{children:e.jsx(ae,{})})}v.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(he,{})}));
