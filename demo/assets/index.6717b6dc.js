import{d as v,r as c,_ as g,c as E,a as e,w as n,F as S,f as o,o as w,p as t}from"./index.22d61472.js";const C=v({name:"ExpSkeleton",setup(){const a=c(!0),u=c("circle"),i=c("default"),_=c(!1);return{animated:a,avatarShape:u,buttonShape:i,loadingSwitch:_}}}),F={class:"exp-skeleton-panel"},x={class:"exp-skeleton-panel"},b={class:"exp-skeleton-panel"},B={class:"exp-skeleton-panel"},A={class:"exp-skeleton-switch"},V={class:"exp-skeleton-sub-component"},D=t("h4",{class:"title"},"hello World",-1),$=t("p",{class:"paragraph"},"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002",-1),N={class:"exp-skeleton-panel"};function y(a,u,i,_,z,H){const s=o("ak-skeleton"),l=o("ak-group"),p=o("ak-switch"),d=o("ak-icon"),r=o("ak-skeleton-image"),k=o("ak-skeleton-title"),h=o("ak-skeleton-paragraph"),m=o("ak-skeleton-button");return w(),E(S,null,[e(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[t("div",F,[e(s)])]),_:1}),e(l,{title:"\u663E\u793A\u5934\u50CF"},{default:n(()=>[t("div",x,[e(s,{avatar:""})])]),_:1}),e(l,{title:"\u5E26\u52A8\u753B"},{default:n(()=>[t("div",b,[e(s,{avatar:"",animated:a.animated,avatarShape:a.avatarShape},null,8,["animated","avatarShape"])])]),_:1}),e(l,{title:"\u663E\u793A\u5B50\u7EC4\u4EF6"},{default:n(()=>[t("div",B,[t("div",A,[e(p,{modelValue:a.loadingSwitch,"onUpdate:modelValue":u[0]||(u[0]=f=>a.loadingSwitch=f)},null,8,["modelValue"])]),e(s,{avatar:"",loading:!a.loadingSwitch},{default:n(()=>[t("div",V,[e(d,{icon:"HeartFilled",size:"32"}),D,$])]),_:1},8,["loading"])])]),_:1}),e(l,{title:"\u81EA\u7531\u7EC4\u5408"},{default:n(()=>[t("div",N,[e(s,{class:"exp-skeleton-custom",buttonShape:a.buttonShape},{layout:n(()=>[e(r),e(k),e(h,{row:2}),e(m)]),_:1},8,["buttonShape"])])]),_:1})],64)}const W=g(C,[["render",y]]);export{W as default};