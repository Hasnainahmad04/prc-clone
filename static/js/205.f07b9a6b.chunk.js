"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[205],{6062:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var a=i(1413),o=i(3433),l=i(9439),s=i(2791),n=i(1501),c=i(3692),d=i(2493),r="podcastmodal_modal-head__2Afw9",u="podcastmodal_modal-dialog__dmeZp",m="podcastmodal_modal-body__xF6LD",p="podcastmodal_footer__oj-nx",h=i(3201),f=i(3577),_=i(3241),g=i(3874),x=i(1860);var v=i.p+"static/media/cross.f0b758ddf83d463aa3c0bf0052e9b196.svg",y=i(184),j=function(t){var e=t.onClose,i=t.show,o=t.podcast,n=t.onAdd,c=t.onUpdate,d=t.onDelete,j=(0,s.useState)({}),C=(0,l.Z)(j,2),b=C[0],k=C[1];(0,s.useEffect)((function(){k(o)}),[o]);var N=function(t){var e=t.currentTarget,i=(0,a.Z)({},b);i[e.name]=e.value,k(i)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h.Z,{show:i,onHide:e,dialogClassName:u,children:[(0,y.jsxs)("div",{className:r,children:[(0,y.jsx)("h5",{children:b.isUpdate?"Edit Podcast":"Publish Podcast"}),(0,y.jsx)("span",{onClick:function(){e(),k({})},children:(0,y.jsx)("img",{src:v,alt:""})})]}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)(_.Z,{type:"text",name:"title",id:"title",placeholder:"Enter Title",label:"Title",value:b.title||"",onChange:N}),(0,y.jsx)(f.Z,{value:b.file,onChange:function(t){var e=(0,a.Z)({},b);return e.file=t.current.files[0].name,console.log(t.current.files),k(e)},accept:"audio/mp3,audio/*;capture=microphone",note:"* Please Upload Media File Type MP3,MP4"}),(0,y.jsx)(x.Z,{name:"summary",id:"summary",placeholder:"Short Summary",label:"Summary",value:b.summary||"",onChange:N}),(0,y.jsxs)("div",{style:{display:"flex"},children:[(0,y.jsx)("div",{style:{width:"49%",marginRight:"20px"},children:(0,y.jsx)(g.Z,{options:["Politics","Equities","Commodities","Rates","FX","Property","Presentations"],id:"category",name:"category",label:"Category",onChange:N,value:b.category})}),(0,y.jsx)("div",{style:{width:"49%"},children:(0,y.jsx)(_.Z,{type:"date",name:"date",id:"date",label:"Date",onChange:N,value:b.date||""})})]}),(0,y.jsx)("div",{className:"hr"}),(0,y.jsxs)("div",{className:p,children:[b.isUpdate?(0,y.jsx)("button",{className:"btn-outline-150",onClick:function(){e(),d(b),k({})},children:"Delete"}):(0,y.jsx)("button",{className:"btn-outline-150",onClick:function(){e(),k({})},children:"Cancel"}),b.isUpdate?(0,y.jsx)("button",{className:"btn-fill-150",onClick:function(){c(b),k({})},children:"Edit"}):(0,y.jsx)("button",{className:"btn-fill-150",onClick:function(){b.id=Date.now(),n(b),k({})},children:"Publish"})]})]})]})})},C="podcastcard_card__zfYAp",b="podcastcard_card_header__IJU4y",k="podcastcard_card_body__WFhrx",N="podcastcard_card_title__Euh95",Z="podcastcard_card_desc__GDhFy",P="podcastcard_card_footer__yIlzQ",w=i(6571),R=function(t){var e=t.podcast,i=t.onEdit,a=new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(0,y.jsxs)("div",{className:C,children:[(0,y.jsx)("div",{className:b,children:(0,y.jsx)("img",{src:w.Z,alt:"logo..",width:"40",height:"40"})}),(0,y.jsxs)("div",{className:k,children:[(0,y.jsx)("h6",{className:"".concat(N," text_black"),onClick:function(){return i(e)},children:(0,y.jsx)("b",{children:e.title})}),(0,y.jsx)("p",{className:Z,children:e.summary}),(0,y.jsxs)("div",{className:P,children:[(0,y.jsxs)("p",{className:"text_gray",children:["Category:",(0,y.jsx)("span",{className:"text_black mx-1",children:(0,y.jsxs)("b",{children:[" ",e.category," "]})})]}),(0,y.jsx)("p",{className:"mx-3 text_gray",children:a})]})]})]})},S=function(){var t=(0,s.useState)(!1),e=(0,l.Z)(t,2),i=e[0],r=e[1],u=(0,s.useState)(!1),m=(0,l.Z)(u,2),p=m[0],h=m[1],f=(0,s.useState)({}),_=(0,l.Z)(f,2),g=_[0],x=_[1],v=(0,s.useState)({}),C=(0,l.Z)(v,2),b=C[0],k=C[1],N=(0,s.useState)(1),Z=(0,l.Z)(N,2),P=Z[0],w=Z[1],S=(0,s.useState)(10),L=(0,l.Z)(S,1)[0],M=(0,s.useState)([{id:1,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:2,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:3,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Commodities",file:"China_outlook.mp3"},{id:4,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-07-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:5,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:6,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:7,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:8,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Politics",file:"China_outlook.mp3"},{id:9,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Rate",file:"China_outlook.mp3"},{id:10,title:"China 2020 RMB Outlook_ Jan 2020",date:"2019-06-01",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",category:"Rate",file:"China_outlook.mp3"}]),B=(0,l.Z)(M,2),q=B[0],J=B[1],O=function(){r(!0)},D=function(t){O(),x((0,a.Z)((0,a.Z)({},t),{},{isUpdate:!0}))},U=P*L,E=U-L;q.slice(E,U);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j,{show:i,onClose:function(){r(!1)},onAdd:function(t){var e=[t].concat((0,o.Z)(q));J(e),r(!1)},podcast:g,onUpdate:function(t){var e=q.findIndex((function(e){return e.id===t.id})),i=(0,o.Z)(q);i[e]=(0,a.Z)((0,a.Z)({},t),{},{isUpdate:!1}),J(i),r(!1)},onDelete:function(t){h(!0),k(t)}}),(0,y.jsx)(d.Z,{title:"Delete Podcast?",desc:"Are you sure, you want to delete this Podcast? All the data related to this Podcast will get lost if you delete it.",show:p,onClose:function(){return h(!1)},onRemove:function(){var t=(0,o.Z)(q).filter((function(t){return t.id!==b.id}));J(t),h(!1)}}),(0,y.jsxs)("div",{className:"content",children:[(0,y.jsx)(n.Z,{title:"List Of Podcasts",addBtnTitle:"Publish Podcast",handleShow:O,search:!0,filterBtn:!0}),(0,y.jsx)("div",{className:"card_container",children:q.map((function(t,e){return(0,y.jsx)(R,{podcast:t,onEdit:D},e)}))}),(0,y.jsx)("div",{className:"pagination-wrapper",children:(0,y.jsx)(c.Z,{itemsPerPage:L,totelItems:q.length,paginate:function(t){return w(t)}})})]})]})}}}]);
//# sourceMappingURL=205.f07b9a6b.chunk.js.map