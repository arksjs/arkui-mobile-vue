import{d as f,r as d,H as n,s as m,_ as g,c as v,a,w as u,F as B,f as c,o as E}from"./index.c03c9343.js";import{W as F,Q as C,a as V,T as h}from"./weibo.85d4a3c0.js";const A=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined"},{value:3,label:"\u6211\u7684",icon:"UserOutlined"},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined"}],L=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined",badge:"\u70ED"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined",badge:{dot:!0,content:1}},{value:3,label:"\u6211\u7684",icon:"UserOutlined",badge:1},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined",badge:100}],_=["home","category","cart","my"].map((e,o)=>({icon:`https://cdn.fox2.cn/vfox/tab-bar/${e}@3x.png`,activeIcon:`https://cdn.fox2.cn/vfox/tab-bar/${e}-selected@3x.png`,label:e,value:o+1})),k=[{value:"wechat",label:"\u5FAE\u4FE1",icon:n(F)},{value:"qq",label:"QQ",icon:n(C)},{value:"weibo",label:"\u5FAE\u535A",icon:n(V)},{value:"taobao",label:"\u6DD8\u5B9D",icon:n(h)}],D=f({name:"ExpTabBar",setup(){const e=(r,s)=>{console.log("change",r,s),m(`\u5207\u6362\u5230\u7B2C${s+1}\u4E2A`)},o=d(0);return{tabBarRef:d(),activeValue:o,customIconList:k,baseList:A,badgeList:L,imageList:_,onChange:e}}});function O(e,o,b,r,s,S){const t=c("ak-tab-bar"),l=c("ak-group"),p=c("ak-fixed");return E(),v(B,null,[a(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[a(t,{options:e.baseList,modelValue:e.activeValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.activeValue=i),ref:"tabBarRef"},null,8,["options","modelValue"])]),_:1}),a(l,{title:"\u5FBD\u6807"},{default:u(()=>[a(t,{options:e.badgeList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:u(()=>[a(t,{options:e.customIconList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:u(()=>[a(t,{color:"#8B8DB8",activeColor:"#ffffff",style:{"background-color":"#6667ab"},options:e.baseList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"},{default:u(()=>[a(t,{class:"exp-tabBar-custom",options:e.imageList},null,8,["options"])]),_:1}),a(l,{title:"\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"},{default:u(()=>[a(p,null,{default:u(()=>[a(t,{options:e.baseList,modelValue:e.activeValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.activeValue=i),class:"exp-tabBar-w",onChange:e.onChange},null,8,["options","modelValue","onChange"])]),_:1})]),_:1})],64)}const x=g(D,[["render",O]]);export{x as default};