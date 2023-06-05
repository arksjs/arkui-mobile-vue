import{d as k,l as r,s as U,_ as L,c as V,a as l,w as p,F as D,f as h,o as F}from"./index-970516b9.js";const y=k({name:"ExpImageUploader",setup(){const e=r([]),t=r(["https://cdn.fox2.cn/vfox/empty/default@2x.png","https://cdn.fox2.cn/vfox/empty/error@2x.png"]),m=r([]),g=(o,{formatSize:a})=>{if(o.size>1024*1024)return U(`上传图片不能大于 ${a(1024*1024)}`),!1;U(`上传图片大小为 ${a(o.size)}`)},f=(o,a)=>{a.setUploading("上传中..."),setTimeout(()=>{i(o).then(u=>{Math.random()>.5?a.fail("模拟失败"):a.success(u)})},2e3)};function i(o){return new Promise(a=>{const u=new FileReader;u.onload=function(C){var c;a(((c=C.target)==null?void 0:c.result)??"")},u.readAsDataURL(o)})}return{imageList:e,imageList2:t,imageList3:m,hookBeforeUpload:g,hookUploadOrFail:f,hookUpload:(o,a)=>{i(o).then(u=>{a.success(u)})},onChange:o=>{console.log("change",o)},onDelete:o=>{console.log("delete",o)}}}});function R(e,t,m,g,f,i){const s=h("ta-image-uploader"),d=h("ta-group");return F(),V(D,null,[l(d,{title:"基础用法"},{default:p(()=>[l(s,{uploadReady:e.hookUploadOrFail,onChange:e.onChange,onDelete:e.onDelete,accept:["png","jpg"],maxCount:9,modelValue:e.imageList,"onUpdate:modelValue":t[0]||(t[0]=n=>e.imageList=n),multiple:""},null,8,["uploadReady","onChange","onDelete","modelValue"])]),_:1}),l(d,{title:"上传前置处理"},{default:p(()=>[l(s,{beforeUpload:e.hookBeforeUpload,uploadReady:e.hookUpload,accept:["png","jpg"],maxCount:9,modelValue:e.imageList3,"onUpdate:modelValue":t[1]||(t[1]=n=>e.imageList3=n),multiple:""},null,8,["beforeUpload","uploadReady","modelValue"])]),_:1}),l(d,{title:"禁用删除"},{default:p(()=>[l(s,{modelValue:e.imageList2,"onUpdate:modelValue":t[2]||(t[2]=n=>e.imageList2=n),deletable:!1,uploadReady:e.hookUpload},null,8,["modelValue","uploadReady"])]),_:1}),l(d,{title:"禁用上传"},{default:p(()=>[l(s,{disabled:""})]),_:1})],64)}const w=L(y,[["render",R]]);export{w as default};