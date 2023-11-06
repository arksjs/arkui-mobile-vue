import{a3 as h,a0 as m,a4 as d,d as b,r as u,s as g,_ as k,c as E,a as s,w as c,F as $,f as C,o as V}from"./index-1677cc26.js";const A=m({apiName:"showImagePreview",component:h,createHook:d}),P=b({name:"ExpImagePreview",setup(){const e=u(!1),n=u(!1),i=u(!1),r=u(!1),f=u(""),v=["https://cdn.fox2.cn/vfox/swiper/different-1.jpg","https://cdn.fox2.cn/vfox/swiper/different-2.jpg","https://cdn.fox2.cn/vfox/swiper/different-3.jpg"];function a(){A({value:v[1],urls:v,showClose:!0,imageHighRendering:!1,success:o=>{console.log("success",o)}})}function t(o){n.value=o.showClose||!1,f.value=o.current||"",i.value=o.changeEvent||!1,r.value=o.visibleEvent||!1,e.value=!0}return{visible:e,showClose:n,imageUrls:v,current:f,onCallApi:a,show:t,onVisibleStateChange:o=>{r.value&&(console.log("visible-state-change",o),g(`${o.state} 事件触发`)),o.state==="hidden"&&(n.value=!1,f.value="",i.value=!1,r.value=!1)},onChange:(o,w)=>{i.value&&(console.log("change",{current:o,activeIndex:w}),g(`切换到第 ${w+1} 张`))},onCancel:o=>{i.value&&(console.log("cancel",o),g("关闭"))}}}});function F(e,n,i,r,f,v){const a=C("ta-cell"),t=C("ta-group"),p=C("ta-image-preview");return V(),E($,null,[s(t,{title:"基础用法"},{default:c(()=>[s(a,{label:"预览图片",isLink:"",onClick:n[0]||(n[0]=l=>e.show({}))}),s(a,{label:"指定初始图片",isLink:"",onClick:n[1]||(n[1]=l=>e.show({current:"https://cdn.fox2.cn/vfox/swiper/different-2.jpg"}))}),s(a,{label:"展示关闭按钮",isLink:"",onClick:n[2]||(n[2]=l=>e.show({showClose:!0}))})]),_:1}),s(t,{title:"事件监听"},{default:c(()=>[s(a,{label:"change/cancel",isLink:"",onClick:n[3]||(n[3]=l=>e.show({changeEvent:!0}))}),s(a,{label:"visible-state-change",isLink:"",onClick:n[4]||(n[4]=l=>e.show({visibleEvent:!0}))})]),_:1}),s(t,{title:"API"},{default:c(()=>[s(a,{label:"showImagePreview",isLink:"",onClick:e.onCallApi},null,8,["onClick"])]),_:1}),s(p,{visible:e.visible,"onUpdate:visible":n[5]||(n[5]=l=>e.visible=l),urls:e.imageUrls,modelValue:e.current,"onUpdate:modelValue":n[6]||(n[6]=l=>e.current=l),showClose:e.showClose,imageHighRendering:!1,magnification:1.2,onVisibleStateChange:e.onVisibleStateChange,onCancel:e.onCancel,onChange:e.onChange},null,8,["visible","urls","modelValue","showClose","magnification","onVisibleStateChange","onCancel","onChange"])],64)}const B=k(P,[["render",F]]);export{B as default};