import{a as h,j as i}from"./react-DbUYpRju.js";import{d as a,m as s}from"./styled-components-CZgjqS7E.js";const l="#4fa94d",f={"aria-busy":!0,role:"progressbar"};a.div`
  display: ${o=>o.$visible?"flex":"none"};
`;const k="http://www.w3.org/2000/svg",t=242.776657104492,b=1.6,x=s`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;a.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${x} ${b}s linear infinite;
`;const y=[0,30,60,90,120,150,180,210,240,270,300,330],m=s`
to {
   transform: rotate(360deg);
 }
`,v=a.svg`
  animation: ${m} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,g=a.polyline`
  stroke-width: ${o=>o.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,C=({strokeColor:o=l,strokeWidth:r="5",animationDuration:n="0.75",width:d="96",visible:$=!0,ariaLabel:c="rotating-lines-loading"})=>{const p=h.useCallback(()=>y.map(e=>i.jsx(g,{points:"24,12 24,4",width:r,transform:`rotate(${e}, 24, 24)`},e)),[r]);return $?i.jsx(v,{xmlns:k,viewBox:"0 0 48 48",width:d,stroke:o,speed:n,"data-testid":"rotating-lines-svg","aria-label":c,...f,children:p()}):null},u=s`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${u} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;export{C as $};
