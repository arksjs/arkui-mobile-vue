import{_ as f,d as C,r as l,c as m,a as e,w as u,F as h,k as E,f as d,o as k,h as s,t as B}from"./index.95fccdd4.js";const F=C({name:"ExpPagination",setup(){const t=l(2),n=l(1),p=l(1),c=l(1),i=l(1);return{current:t,current2:n,current3:p,current4:c,current5:i,total:5,onChange:r=>{console.log("change",r),E(`\u8DF3\u8F6C\u5230\u7B2C ${r} \u9875`)}}}}),S=s(" \u4E0A\u4E00\u9875 "),$=s(" \u4E0B\u4E00\u9875 ");function D(t,n,p,c,i,g){const a=d("ak-pagination"),r=d("ak-group");return k(),m(h,null,[e(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[e(a,{current:t.current,"onUpdate:current":n[0]||(n[0]=o=>t.current=o),total:t.total},null,8,["current","total"])]),_:1}),e(r,{title:"Slot default"},{default:u(()=>[e(a,{current:t.current2,"onUpdate:current":n[1]||(n[1]=o=>t.current2=o),total:t.total},{default:u(({current:o})=>[s(" \u7B2C "+B(o)+" \u9875 ",1)]),_:1},8,["current","total"])]),_:1}),e(r,{title:"Slot prev & next"},{default:u(()=>[e(a,{current:t.current3,"onUpdate:current":n[2]||(n[2]=o=>t.current3=o),total:t.total},{prev:u(()=>[S]),next:u(()=>[$]),_:1},8,["current","total"])]),_:1}),e(r,{title:"CSS height=32px"},{default:u(()=>[e(a,{style:{height:"32px"},current:t.current4,"onUpdate:current":n[3]||(n[3]=o=>t.current4=o),total:t.total},null,8,["current","total"])]),_:1}),e(r,{title:"\u4E8B\u4EF6\u76D1\u542C change"},{default:u(()=>[e(a,{total:t.total,onChange:t.onChange},null,8,["total","onChange"])]),_:1})],64)}const _=f(F,[["render",D]]);export{_ as default};
