import{_ as k,d as p,r,b as x,w as e,f as c,o as u,a as t,l as a}from"./index.95fccdd4.js";const v=p({name:"ExpSticky",setup(){return{activeIndex:r(0),onChange:i=>{console.log("change",i)}}}}),f=a("div",{class:"exp-sticky-box-1"},null,-1),m=a("div",{class:"exp-sticky-box-2"},null,-1),y=a("div",{class:"exp-sticky-box-3"},null,-1),h=a("div",{class:"exp-sticky-box-4"},null,-1);function g(n,s,i,C,w,I){const o=c("ak-sticky-view-item"),d=c("ak-sticky-view"),_=c("ak-group");return u(),x(_,{title:"Sticky View"},{default:e(()=>[t(d,{class:"exp-sticky-box",activeIndex:n.activeIndex,"onUpdate:activeIndex":s[0]||(s[0]=l=>n.activeIndex=l),onChange:n.onChange},{default:e(()=>[t(o,{name:"Sticky 1"},{default:e(()=>[f]),_:1}),t(o,{name:"Sticky 2"},{default:e(()=>[m]),_:1}),t(o,{name:"Sticky 3"},{default:e(()=>[y]),_:1}),t(o,{name:"Sticky 4"},{default:e(()=>[h]),_:1})]),_:1},8,["activeIndex","onChange"])]),_:1})}const S=k(v,[["render",g]]);export{S as default};
