import{d as k,r as t,s as a,_ as F,c as E,a as o,w as u,F as I,f as p,o as y}from"./index.c03c9343.js";const g=k({name:"ExpNumberKeyboard",setup(){const e=t(""),n=t(!1),C=t(!1),r=t(!1),d=t(!1),m=t(!1),i=t(!1),s=t(!1),v=t(!1);return{value:e,visible1:n,visible2:C,visible3:r,visible4:d,visible5:m,visible6:i,visible7:s,visible8:v,onInput:b=>{a(b)},onChange:b=>{console.log("change",b),a(`\u672C\u6B21\u8F93\u5165\u503C\u4E3A\uFF1A${b}`)},onDelete:b=>{console.log("delete",b),a("\u5220\u9664")},onClose:b=>{console.log("close",b)}}}});function A(e,n,C,r,d,m){const i=p("ak-number-keyboard"),s=p("ak-cell"),v=p("ak-group"),D=p("ak-input"),f=p("ak-form-item");return y(),E(I,null,[o(v,{title:"\u57FA\u7840\u952E\u76D8"},{default:u(()=>[o(s,{label:"\u9ED8\u8BA4\u952E\u76D8",isLink:"",onClick:n[1]||(n[1]=l=>e.visible1=!0)},{default:u(()=>[o(i,{visible:e.visible1,"onUpdate:visible":n[0]||(n[0]=l=>e.visible1=l),onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),o(s,{label:"\u5E26\u5C0F\u6570\u70B9\uFF08customKey='.'\uFF09",isLink:"",onClick:n[3]||(n[3]=l=>e.visible2=!0)},{default:u(()=>[o(i,{visible:e.visible2,"onUpdate:visible":n[2]||(n[2]=l=>e.visible2=l),customKey:".",onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),o(s,{label:"\u8EAB\u4EFD\u8BC1\uFF08customKey='X'\uFF09",isLink:"",onClick:n[5]||(n[5]=l=>e.visible3=!0)},{default:u(()=>[o(i,{visible:e.visible3,"onUpdate:visible":n[4]||(n[4]=l=>e.visible3=l),customKey:"X",onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1})]),_:1}),o(v,{title:"\u5E26\u53F3\u4FA7\u680F\u952E\u76D8"},{default:u(()=>[o(s,{label:"\u9ED8\u8BA4\u952E\u76D8",isLink:"",onClick:n[7]||(n[7]=l=>e.visible4=!0)},{default:u(()=>[o(i,{visible:e.visible4,"onUpdate:visible":n[6]||(n[6]=l=>e.visible4=l),type:"rightColumn",onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),o(s,{label:"1\u4E2A\u81EA\u5B9A\u4E49\u503C\uFF08customKey=['.']\uFF09",isLink:"",onClick:n[9]||(n[9]=l=>e.visible5=!0)},{default:u(()=>[o(i,{visible:e.visible5,"onUpdate:visible":n[8]||(n[8]=l=>e.visible5=l),type:"rightColumn",customKey:".",onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),o(s,{label:"2\u4E2A\u81EA\u5B9A\u4E49\u503C\uFF08customKey=['00', '.']\uFF09",isLink:"",onClick:n[11]||(n[11]=l=>e.visible6=!0)},{default:u(()=>[o(i,{visible:e.visible6,"onUpdate:visible":n[10]||(n[10]=l=>e.visible6=l),type:"rightColumn",customKey:["00","."],onInput:e.onInput,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","customKey","onInput","onDelete","onClose"])]),_:1})]),_:1}),o(v,{title:"\u5176\u4ED6"},{default:u(()=>[o(s,{label:"\u8BBE\u7F6E\u6807\u9898",isLink:"",onClick:n[13]||(n[13]=l=>e.visible7=!0)},{default:u(()=>[o(i,{title:"\u952E\u76D8\u6807\u9898",visible:e.visible7,"onUpdate:visible":n[12]||(n[12]=l=>e.visible7=l),onInput:e.onInput,onChange:e.onChange,onDelete:e.onDelete,onClose:e.onClose},null,8,["visible","onInput","onChange","onDelete","onClose"])]),_:1}),o(f,{name:"number",label:"\u53CC\u5411\u7ED1\u5B9A",onClick:n[17]||(n[17]=l=>e.visible8=!0)},{default:u(()=>[o(D,{modelValue:e.value,"onUpdate:modelValue":n[14]||(n[14]=l=>e.value=l),readonly:""},null,8,["modelValue"]),o(i,{visible:e.visible8,"onUpdate:visible":n[15]||(n[15]=l=>e.visible8=l),modelValue:e.value,"onUpdate:modelValue":n[16]||(n[16]=l=>e.value=l)},null,8,["visible","modelValue"])]),_:1})]),_:1})],64)}const K=F(g,[["render",A]]);export{K as default};