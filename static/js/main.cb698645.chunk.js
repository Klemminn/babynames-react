(this["webpackJsonpbabynames-react"]=this["webpackJsonpbabynames-react"]||[]).push([[0],{52:function(e,n,t){e.exports=t(92)},61:function(e,n,t){},62:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},86:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){},91:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(23),i=t.n(c),l=t(17),u=t(8),s=t(12),o=t(95),m=function(e){var n=e.children,t=e.className,a=e.loading,c=e.disabled,i=e.link,u=Object(s.a)(e,["children","className","loading","disabled","link"]),m=["button-component"];return t&&m.push(t),r.a.createElement(o.a,Object.assign({className:m.join(" "),disabled:c||a,tag:i?l.b:void 0,to:i||void 0},u),a&&r.a.createElement(J,{size:1}),n)},f=t(96).a,p=(t(61),function(e){var n=e.icon,t=e.className,a=Object(s.a)(e,["icon","className"]),c=["icon-button-component"];return t&&c.push(t),r.a.createElement(m,Object.assign({className:c.join(" ")},a),n)}),d=t(16),v=(t(62),function(e){var n=e.onSelect,t=Object(s.a)(e,["onSelect"]);return r.a.createElement(f,{className:"vote-buttons-component"},[!0,!1].map((function(e,a){return r.a.createElement(p,Object.assign({key:a,color:e?"success":"danger",icon:e?r.a.createElement(d.g,null):r.a.createElement(d.f,null),onClick:function(){return n(e)}},t))})))}),b=t(97),h=function(e){var n=e.onChange,t=Object(s.a)(e,["onChange"]);return r.a.createElement(b.a,Object.assign({onChange:function(e){n&&n(e.target.value)}},t))},E=t(5),k=t.n(E),g=t(7),j=t(11),O=t(34),y=t(21),w=t(22),N=t(26),x=(t(64),new(function(){function e(){Object(y.a)(this,e),N.b.configure({autoClose:2e3,draggable:!1,position:"bottom-right",transition:N.a})}return Object(w.a)(e,[{key:"success",value:function(e){N.b.success(e)}},{key:"info",value:function(e){N.b.info(e)}},{key:"warning",value:function(e){N.b.warning(e)}},{key:"error",value:function(e){N.b.error(e)}}]),e}())),S=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,null,[{key:"displayError",value:function(e){x.info(e)}},{key:"displayErrors",value:function(n){n.forEach((function(n){return e.displayError(n)}))}}]),e}(),L=O.a().shape({email:O.b().required("\xde\xfa ver\xf0ur a\xf0 skr\xe1 netfang.").email("Netfang er ekki \xe1 r\xe9ttu formi.")}),C=function(e){var n=e.onSubmit,t=e.saving,c=e.hasEmail,i=Object(s.a)(e,["onSubmit","saving","hasEmail"]),l=Object(a.useState)(""),u=Object(j.a)(l,2),o=u[0],m=u[1],f=function(){var e=Object(g.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L.validate({email:o});case 4:n&&n(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.errors&&S.displayErrors(e.t0.errors);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){return f(e)}},r.a.createElement(A,null,r.a.createElement(h,Object.assign({type:"email",value:c?"Netfang skr\xe1\xf0":o,onChange:function(e){return m(e)},disabled:c},i)),r.a.createElement(H,{addonType:"append"},r.a.createElement(p,{icon:c?r.a.createElement(d.b,null):r.a.createElement(d.d,null),disabled:c,type:"submit",loading:t}))))},A=t(98).a,H=t(106).a,T=t(50),_=t.n(T),D=function(e){var n=e.link,t=function(e){return"".concat(window.location.origin).concat(e)}(n);return r.a.createElement(A,null,r.a.createElement(h,{readOnly:!0,value:t}),r.a.createElement(H,{addonType:"append"},r.a.createElement(p,{icon:r.a.createElement(d.c,null),onClick:function(){return _()(t)}}),r.a.createElement(p,{icon:r.a.createElement(d.a,null),link:n})))},M=t(99).a,R=t(100).a,U=t(101),W=t(102),F=t(103),z=(t(66),function(e){var n=e.className,t=e.children,a=e.title,c=Object(s.a)(e,["className","children","title"]),i=["card-component"];return n&&i.push(n),r.a.createElement(U.a,Object.assign({className:i.join(" ")},c),r.a.createElement(W.a,null,a&&r.a.createElement(F.a,null,a),t))}),B=function(e){var n=e.name,t=e.onSelect,a=Object(s.a)(e,["name","onSelect"]);return r.a.createElement(z,{className:"name-card main-card",title:n.name},r.a.createElement("p",null,n.firstNamed," bera ",n.name," sem fyrsta nafn.",r.a.createElement("br",null),n.secondNamed," bera ",n.name," sem anna\xf0 nafn."),r.a.createElement(v,Object.assign({onSelect:t},a)))},G=t(104),K=t(105),P=(t(67),function(){return r.a.createElement(G.a,{className:"header-component"},r.a.createElement("div",{className:"container"},r.a.createElement(K.a,{href:"/"},"Nafnaleit")))}),I=l.b,J=(t(68),function(e){var n=e.size,t=void 0===n?4:n;return r.a.createElement("div",{className:"spinner-component"},r.a.createElement(d.e,{className:"icon-spin",size:"".concat(t,"em")}))}),V=t(51),q=t.n(V),$=String(Object({NODE_ENV:"production",PUBLIC_URL:"/nafnaleit.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),Q="production"===$?{api:"http://api.nafnaleit.com/v1"}:"staging"===$?{api:"https://stagingapi.nafnaleit.com/v1"}:{api:"http://127.0.0.1:8000/v1"},X=q.a.create({baseURL:"".concat(Q.api),headers:{Accept:"application/json","Content-type":"application/json"}}),Y=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,null,[{key:"createNewGroup",value:function(){var e=Object(g.a)(k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/newGroup/");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"newAnswer",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.post("/newAnswer/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"finishAnswer",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.post("/finishAnswer/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"registerEmail",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.post("/registerEmail/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),Z=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,null,[{key:"getNames",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/names/",{params:n});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getNameCount",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/nameCount/",{params:n});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getUnfinished",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/unfinished/".concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getResults",value:function(){var e=Object(g.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/results/".concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),ee=function(e){var n=e.history,t=Object(a.useState)([]),c=Object(j.a)(t,2),i=c[0],l=c[1],s=Object(a.useState)(!1),o=Object(j.a)(s,2),m=o[0],f=o[1],p=Object(a.useState)(!1),d=Object(j.a)(p,2),v=d[0],b=d[1],h=Object(u.g)().code;Object(a.useEffect)((function(){E()}),[]);var E=function(){var e=Object(g.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,Z.getUnfinished(h);case 4:n=e.sent,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S.displayError(e.t0);case 11:return e.prev=11,f(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(g.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,Y.finishAnswer({code:h,isApproved:t,name:i[0].name||""});case 4:i.length>1?l(i.slice(1)):n.push("/results/".concat(h)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),S.displayError(e.t0);case 10:return e.prev=10,b(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();return m?null:r.a.createElement("div",{className:"answer-page"},r.a.createElement("h1",null,"H\xe6h\xe6"),r.a.createElement("p",null,"S\xe1 sem sendi \xfe\xe9r \xfeetta vill a\xf0 \xfe\xfa takir afst\xf6\xf0u til eftirfarandi nafna."),r.a.createElement("p",null,"\xdeegar \xfe\xfa hefur fari\xf0 \xed gegnum \xf6ll n\xf6fnin, \xfe\xe1 sj\xe1i\xf0 lista yfir n\xf6fn sem ykkur l\xedka\xf0i :)"),r.a.createElement(R,null,r.a.createElement(M,{md:6},r.a.createElement(B,{name:i[0]||{},onSelect:function(e){return O(e)},disabled:v})),r.a.createElement(M,{md:6},r.a.createElement(z,{className:"main-card"},r.a.createElement("div",{className:"status"},"Eftir a\xf0 svara: ",i.length)))))},ne=(t(86),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Hall\xf3 h\xe6!"),r.a.createElement("p",null,"H\xe9r getur \xfe\xfa fengi\xf0 hugmyndir a\xf0 n\xf6fnum."),r.a.createElement("p",null,"Ferli\xf0 er einfalt:"),r.a.createElement("ol",null,r.a.createElement("li",null,"\xde\xfa f\xe6r\xf0 n\xf6fn og velur \xfeau sem \xfe\xfa ert hrifin/n af."),r.a.createElement("li",null,"\xde\xfa velur a\xf0 halda \xe1fram og f\xe6r\xf0u hlekk til a\xf0 senda \xe1 annan a\xf0ila.  S\xe1 a\xf0ili f\xe6r \xf6ll n\xf6fnin sem \xfe\xfa f\xf3rst \xed gegnum, en s\xe9r \xfe\xf3 ekki hva\xf0a n\xf6fn \xfe\xfa valdir."),r.a.createElement("li",null,"\xdeegar hann hefur loki\xf0 sinni yfirfer\xf0, \xfe\xe1 sj\xe1i\xf0 \xfei\xf0 hva\xf0a n\xf6fn \xfei\xf0 v\xf6ldu\xf0.")),r.a.createElement("div",{className:"gender-buttons"},r.a.createElement(m,{link:"/names/1",className:"boy"},"Drengur"),r.a.createElement(m,{link:"/names/0",className:"girl"},"St\xfalka")))}),te=t(28),ae=(t(87),[{label:"Handah\xf3fskennd",value:"random"},{label:"Algeng",value:"common"},{label:"\xd3algeng",value:"uncommon"},{label:"Stutt",value:"short"},{label:"L\xf6ng",value:"long"}]),re={liked:0,disliked:0,hasEmail:!1},ce=function(e){var n=e.history,t=Object(a.useState)("random"),c=Object(j.a)(t,2),i=c[0],l=c[1],s=Object(a.useState)({}),o=Object(j.a)(s,2),p=o[0],d=o[1],v=Object(a.useState)(re),b=Object(j.a)(v,2),h=b[0],E=b[1],O=Object(a.useState)(!1),y=Object(j.a)(O,2),w=y[0],N=y[1],x=Object(u.g)(),L=x.isMale,C=x.code;Object(a.useEffect)((function(){A()}),[]);var A=function(){var e=Object(g.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,C){e.next=8;break}return e.next=4,Y.createNewGroup();case 4:t=e.sent,n.push("/names/".concat(L,"/").concat(t.code)),e.next=12;break;case 8:return e.next=10,Z.getNameCount({code:C,isSender:1});case 10:a=e.sent,E(a);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),S.displayError(e.t0.data);case 17:H(i);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(g.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.getNames({isMale:L,code:C,type:n});case 3:t=e.sent,d(t[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),S.displayError(e.t0.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,Y.newAnswer({code:C,isApproved:n,name:p.name||""});case 4:t=Object(te.a)({},h),n?t.liked+=1:t.disliked+=1,E(t),H(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S.displayError(e.t0);case 13:return e.prev=13,N(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"names-page"},r.a.createElement(f,{className:"type-buttons"},ae.map((function(e){var n=e.label,t=e.value;return r.a.createElement(m,{key:t,onClick:function(){return l(e=t),void H(e);var e},color:"light",active:i===t},n)}))),r.a.createElement(R,null,r.a.createElement(M,{md:6},r.a.createElement(B,{name:p,onSelect:function(e){return T(e)},disabled:w})),r.a.createElement(M,{md:6},r.a.createElement(z,{className:"main-card"},r.a.createElement("div",{className:"status"},"Valin n\xf6fn: ",h.liked,r.a.createElement("br",null),"Heildar sv\xf6r: ",h.liked+h.disliked),h.liked>0&&r.a.createElement(m,{className:"finish",color:"primary",link:"/send/".concat(C)},"Lj\xfaka vali")))))},ie=(t(88),{liked:0,disliked:0,hasEmail:!1}),le=function(){var e=Object(u.g)().code,n=Object(a.useState)(ie),t=Object(j.a)(n,2),c=t[0],i=t[1],l=Object(a.useState)(!1),s=Object(j.a)(l,2),o=s[0],m=s[1],f=Object(a.useState)(!1),p=Object(j.a)(f,2),d=p[0],v=p[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){var n=Object(g.a)(k.a.mark((function n(){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,Z.getNameCount({code:e,isSender:1});case 4:t=n.sent,i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),S.displayError(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(g.a)(k.a.mark((function n(t){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.prev=1,n.next=4,Y.registerEmail({code:e,email:t});case 4:i(Object(te.a)(Object(te.a)({},c),{},{hasEmail:!0})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),S.displayError(n.t0.data);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})));return function(e){return n.apply(this,arguments)}}();return o?null:r.a.createElement("div",{className:"send-page"},r.a.createElement("h1",null,"Flott n\xf6fn sem \xfe\xfa valdir!"),r.a.createElement("p",null,"N\xfa \xfearftu bara a\xf0 senda link \xe1 \xfeann sem \xfe\xfa vilt, svo hann geti fari\xf0 \xed gegnum s\xf6mu n\xf6fn og \xfe\xfa:"),r.a.createElement(D,{link:"/answer/".concat(e)}),r.a.createElement("p",null,"\xdeegar hann hefur loki\xf0 s\xe9r af, \xfe\xe1 geti\xf0 \xfei\xf0 s\xe9 ni\xf0urst\xf6\xf0urnar \xe1 \xfeessum link:"),r.a.createElement(D,{link:"/results/".concat(e)}),r.a.createElement("p",null,"Ef \xfe\xfa vilt, \xfe\xe1 getur\xf0u einnig fengi\xf0 e-mail sent \xfeegar m\xf3ta\xf0ili hefur svara\xf0 :)"),r.a.createElement(C,{onSubmit:function(e){return h(e)},saving:d,hasEmail:c.hasEmail}))},ue=(t(89),{bothLiked:[],receiverLiked:[],senderLiked:[]}),se=function(){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(ue),l=Object(j.a)(i,2),s=l[0],o=l[1],m=Object(a.useState)(!1),f=Object(j.a)(m,2),p=f[0],d=f[1],v=Object(u.g)().code;Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(g.a)(k.a.mark((function e(){var n,t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,Z.getResults(v);case 4:n=e.sent,t=n.filter((function(e){return e.receiverLiked&&e.senderLiked})).map((function(e){return e.name})),a=n.filter((function(e){return e.senderLiked})).map((function(e){return e.name})),r=n.filter((function(e){return e.receiverLiked})).map((function(e){return e.name})),o({bothLiked:t,receiverLiked:r,senderLiked:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),d(!0);case 14:return e.prev=14,c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return p?r.a.createElement("div",{className:"results-page"},r.a.createElement("h1",null,"Nei heyr\xf0u, seinni a\xf0ili er ekki b\xfainn a\xf0 kl\xe1ra yfirfer\xf0ina!"),r.a.createElement(I,{to:"/answer/".concat(v)},"Fara \xfeanga\xf0 til a\xf0 kl\xe1ra!")):t?null:r.a.createElement("div",{className:"results-page"},r.a.createElement("h1",null,"H\xfarra! \xdei\xf0 eru\xf0 b\xfain a\xf0 kl\xe1ra a\xf0 fara \xed gegnum n\xf6fnin!"),r.a.createElement(R,null,r.a.createElement(M,{md:4},r.a.createElement(z,{className:"main-card",title:s.bothLiked.length?"N\xf6fn sem b\xe1\xf0ir a\xf0ilar v\xf6ldu":"\xdev\xed mi\xf0ur var ekkert nafns em b\xe1\xf0ir a\xf0ilar v\xf6ldu :("},s.bothLiked.map((function(e){return r.a.createElement("div",{key:e,className:"font-weight-bold"},e)})))),r.a.createElement(M,{md:4},r.a.createElement(z,{className:"main-card",title:"N\xf6fn sem fyrri a\xf0ili valdi"},s.senderLiked.map((function(e){return r.a.createElement("div",{key:e,className:s.bothLiked.find((function(n){return e===n}))?"font-weight-bold":""},e)})))),r.a.createElement(M,{md:4},r.a.createElement(z,{className:"main-card",title:"N\xf6fn sem seinni a\xf0ili valdi"},s.receiverLiked.map((function(e){return r.a.createElement("div",{key:e,className:s.bothLiked.find((function(n){return e===n}))?"font-weight-bold":""},e)}))))))},oe=(t(90),t(91),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"container route-container"},r.a.createElement(l.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/home",component:ne}),r.a.createElement(u.b,{exact:!0,path:["/names/:isMale","/names/:isMale/:code"],component:ce}),r.a.createElement(u.b,{exact:!0,path:"/send/:code",component:le}),r.a.createElement(u.b,{exact:!0,path:"/answer/:code",component:ee}),r.a.createElement(u.b,{exact:!0,path:"/results/:code",component:se}),r.a.createElement(u.a,{to:"/home"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.cb698645.chunk.js.map