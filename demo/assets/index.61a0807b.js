import{d as E,r as b,x as C,s as v,_ as B,c as i,a,w as t,F as n,f as _,o as u,g as d,b as c,p as x,t as m,n as g}from"./index.2233f704.js";const y=E({name:"ExpSwiper",setup(){const s=b(0),f=b(null),k=w=>{v(`change \u5230\u7B2C ${w+1} \u5F20`),console.log("change",w)},A=w=>{v(`\u7B2C ${w+1} \u5F20 animated`),console.log("animated",w)};return C(()=>{}),{swiperRef:f,swiperList:[1,2,3,4],imageUrls:["https://cdn.fox2.cn/vfox/swiper/regular-1.jpg","https://cdn.fox2.cn/vfox/swiper/regular-2.jpg","https://cdn.fox2.cn/vfox/swiper/regular-3.jpg"],activeIndex:s,autoplay:!0,showToast:v,onChange:k,onAnimated:A}}});function h(s,f,k,A,w,I){const r=_("ak-swiper-item"),l=_("ak-swiper"),o=_("ak-group"),F=_("ak-image");return u(),i(n,null,[a(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[a(l,{class:"exp-swiper-box"},{default:t(()=>[(u(!0),i(n,null,d(s.swiperList,(e,p)=>(u(),c(r,{key:e},{default:t(()=>[x("div",{class:g(["exp-swiper-box-item",{even:p%2==1}])},m(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u663E\u793A\u9762\u677F\u6307\u793A\u70B9 indicator-dots=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":""},{default:t(()=>[(u(!0),i(n,null,d(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(F,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u663E\u793A\u5207\u6362\u6309\u94AE navigation-buttons=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","navigation-buttons":""},{default:t(()=>[(u(!0),i(n,null,d(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(F,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u5FAA\u73AF\u5C55\u793A initial-circular=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","initial-circular":""},{default:t(()=>[(u(!0),i(n,null,d(s.swiperList,(e,p)=>(u(),c(r,{key:e},{default:t(()=>[x("div",{class:g(["exp-swiper-box-item",{even:p%2==1}])},m(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u5782\u76F4\u65B9\u5411 initial-vertical=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","initial-vertical":""},{default:t(()=>[(u(!0),i(n,null,d(s.swiperList,(e,p)=>(u(),c(r,{key:e},{default:t(()=>[x("div",{class:g(["exp-swiper-box-item",{even:p%2==1}])},m(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u66F4\u6539\u6307\u793A\u70B9\u989C\u8272"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 0.5)","indicator-active-color":"#ff4d4f"},{default:t(()=>[(u(!0),i(n,null,d(s.swiperList,(e,p)=>(u(),c(r,{key:e},{default:t(()=>[x("div",{class:g(["exp-swiper-box-item",{even:p%2==1}])},m(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u81EA\u52A8\u8F6E\u64AD\uFF08\u5207\u6362\u65F6\u957F\u8BBE\u7F6E\u4E3A3000ms\uFF09"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"",autoplay:s.autoplay,interval:3e3},{default:t(()=>[(u(!0),i(n,null,d(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(F,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["autoplay"])]),_:1}),a(o,{title:"\u6ED1\u52A8\u8FC7\u7A0B\u65F6\u957F\uFF08\u8BBE\u7F6E\u4E3A2000ms\uFF09"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"",duration:2e3},{default:t(()=>[(u(!0),i(n,null,d(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(F,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08change/animated/click\uFF09"},{default:t(()=>[a(l,{ref:"swiperRef",class:"exp-swiper-box","indicator-dots":"",activeIndex:s.activeIndex,"onUpdate:activeIndex":f[0]||(f[0]=e=>s.activeIndex=e),onActiveIndexChange:s.onChange,onAnimated:s.onAnimated,onClick:f[1]||(f[1]=e=>s.showToast("click \u89E6\u53D1"))},{default:t(()=>[(u(!0),i(n,null,d(s.swiperList,(e,p)=>(u(),c(r,{key:e},{default:t(()=>[x("div",{class:g(["exp-swiper-box-item",{even:p%2==1}])},m(e),3)]),_:2},1024))),128))]),_:1},8,["activeIndex","onActiveIndexChange","onAnimated"])]),_:1})],64)}const $=B(y,[["render",h]]);export{$ as default};
