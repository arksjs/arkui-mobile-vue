import{d as _,r,p as f,_ as k,b as v,w as n,f as o,o as l,a as m,c as y,h as g,k as w,n as C,F as x}from"./index-1677cc26.js";const h=_({name:"ExpSticky",setup(){const e=r("Sticky 1"),a=r(null),s=(c,i)=>{console.log("change",c,i)};return f(()=>{}),{viewRef:a,activeName:e,onChange:s}}});function V(e,a,s,c,i,$){const p=o("ta-sticky-view-item"),d=o("ta-sticky-view"),u=o("ta-group");return l(),v(u,{title:"Sticky View"},{default:n(()=>[m(d,{ref:"viewRef",class:"exp-sticky-box",modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=t=>e.activeName=t),onChange:e.onChange},{default:n(()=>[(l(),y(x,null,g(4,t=>m(p,{key:t,name:`Sticky ${t}`},{default:n(()=>[w("div",{class:C(`exp-sticky-box-${t}`)},null,2)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue","onChange"])]),_:1})}const B=k(h,[["render",V]]);export{B as default};