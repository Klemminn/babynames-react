(this["webpackJsonpbabynames-react"]=this["webpackJsonpbabynames-react"]||[]).push([[0],{52:function(e,n,t){e.exports=t(92)},61:function(e,n,t){},62:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},86:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){},91:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(23),i=t.n(c),l=t(17),s=t(8),u=t(12),o=t(95),m=function(e){var n=e.children,t=e.className,a=e.loading,c=e.disabled,i=e.link,s=Object(u.a)(e,["children","className","loading","disabled","link"]),m=["button-component"];return t&&m.push(t),r.a.createElement(o.a,Object.assign({className:m.join(" "),disabled:c||a,tag:i?l.b:void 0,to:i||void 0},s),a&&r.a.createElement(P,{size:1}),n)},f=t(96),d=function(e){var n=e.className,t=Object(u.a)(e,["className"]);return r.a.createElement(f.a,Object.assign({className:["flex-wrap",n].join(" ")},t))},p=(t(61),function(e){var n=e.children,t=e.icon,a=e.className,c=Object(u.a)(e,["children","icon","className"]),i=["icon-button-component"];return a&&i.push(a),n&&i.push("has-children"),r.a.createElement(m,Object.assign({className:i.join(" ")},c),t," ",!!n&&n)}),v=t(14),b=(t(62),function(e){var n=e.onSelect,t=Object(u.a)(e,["onSelect"]);return r.a.createElement(d,{className:"vote-buttons-component"},[!0,!1].map((function(e,a){return r.a.createElement(p,Object.assign({key:a,color:e?"success":"danger",icon:e?r.a.createElement(v.g,null):r.a.createElement(v.f,null),onClick:function(){return n(e)}},t))})))}),h=t(97),E=0,k=function(e){var n=e.onChange,t=e.onChangeDelay,a=Object(u.a)(e,["onChange","onChangeDelay"]);return r.a.createElement(h.a,Object.assign({onChange:function(e){var a=e.target.value;if(n)if(t){var r=++E;setTimeout((function(){r===E&&n(a)}),t)}else n(a)}},a))},g=t(5),j=t.n(g),O=t(7),y=t(11),w=t(34),N=t(21),x=t(22),S=t(26),L=(t(64),new(function(){function e(){Object(N.a)(this,e),S.b.configure({autoClose:2e3,draggable:!1,position:"bottom-right",transition:S.a})}return Object(x.a)(e,[{key:"success",value:function(e){S.b.success(e)}},{key:"info",value:function(e){S.b.info(e)}},{key:"warning",value:function(e){S.b.warning(e)}},{key:"error",value:function(e){S.b.error(e)}}]),e}())),C=function(){function e(){Object(N.a)(this,e)}return Object(x.a)(e,null,[{key:"displayError",value:function(e){L.info(e)}},{key:"displayErrors",value:function(n){n.forEach((function(n){return e.displayError(n)}))}}]),e}(),A=w.a().shape({email:w.b().required("\xde\xfa ver\xf0ur a\xf0 skr\xe1 netfang.").email("Netfang er ekki \xe1 r\xe9ttu formi.")}),H=function(e){var n=e.onSubmit,t=e.saving,c=e.hasEmail,i=Object(u.a)(e,["onSubmit","saving","hasEmail"]),l=Object(a.useState)(""),s=Object(y.a)(l,2),o=s[0],m=s[1],f=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A.validate({email:o});case 4:n&&n(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.errors&&C.displayErrors(e.t0.errors);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){return f(e)}},r.a.createElement(B,null,r.a.createElement(k,Object.assign({type:"email",value:c?"Netfang skr\xe1\xf0":o,onChange:function(e){return m(e)},disabled:c},i)),r.a.createElement(D,{addonType:"append"},r.a.createElement(p,{icon:c?r.a.createElement(v.b,null):r.a.createElement(v.d,null),disabled:c,type:"submit",loading:t}))))},B=t(98).a,D=t(106).a,F=t(50),M=t.n(F),z=function(e){var n=e.link,t=function(e){return"".concat(window.location.origin).concat(e)}(n);return r.a.createElement(B,null,r.a.createElement(k,{readOnly:!0,value:t}),r.a.createElement(D,{addonType:"append"},r.a.createElement(p,{icon:r.a.createElement(v.c,null),onClick:function(){return M()(t)}}),r.a.createElement(p,{icon:r.a.createElement(v.a,null),link:n})))},G=t(99).a,R=t(100).a,T=t(101),U=t(102),W=t(103),J=(t(66),function(e){var n=e.className,t=e.children,a=e.title,c=Object(u.a)(e,["className","children","title"]),i=["card-component"];return n&&i.push(n),r.a.createElement(T.a,Object.assign({className:i.join(" ")},c),r.a.createElement(U.a,null,a&&r.a.createElement(W.a,null,a),t))}),q=function(e){var n=e.name,t=e.onSelect,a=e.continueButton,c=e.unanswered,i=Object(u.a)(e,["name","onSelect","continueButton","unanswered"]);return r.a.createElement(J,{className:"name-card main-card",title:n.name?n.name:"Ekkert nafn uppfyllir valin skilyr\xf0i"},a&&r.a.createElement("div",{className:"continue-button d-md-none"},r.a.createElement(p,{color:"primary",link:"/send/".concat(a),icon:r.a.createElement(v.b,null)},"Lj\xfaka vali")),!!c&&r.a.createElement("div",{className:"unanswered d-md-none"},"\xd3sv\xf6ra\xf0: ",c),!!n.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.firstNamed," bera ",n.name," sem fyrsta nafn.",r.a.createElement("br",null),n.secondNamed," bera ",n.name," sem anna\xf0 nafn."),r.a.createElement(b,Object.assign({onSelect:t},i))))},I=t(104),V=t(105),$=(t(67),function(){return r.a.createElement(I.a,{className:"header-component"},r.a.createElement("div",{className:"container"},r.a.createElement(V.a,{href:"/"},"Nafnaleit")))}),K=l.b,P=(t(68),function(e){var n=e.size,t=void 0===n?4:n;return r.a.createElement("div",{className:"spinner-component"},r.a.createElement(v.e,{className:"icon-spin",size:"".concat(t,"em")}))}),Q=t(51),X={api:"https://api.nafnaleit.com/v1"},Y=t.n(Q).a.create({baseURL:"".concat(X.api),headers:{Accept:"application/json","Content-type":"application/json"}}),Z=function(){function e(){Object(N.a)(this,e)}return Object(x.a)(e,null,[{key:"createNewGroup",value:function(){var e=Object(O.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("/newGroup/");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"newAnswer",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("/newAnswer/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"finishAnswer",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("/finishAnswer/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"registerEmail",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("/registerEmail/",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),_=function(){function e(){Object(N.a)(this,e)}return Object(x.a)(e,null,[{key:"getNames",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("/names/",{params:n});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getNameCount",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("/nameCount/",{params:n});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getUnfinished",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("/unfinished/".concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getResults",value:function(){var e=Object(O.a)(j.a.mark((function e(n){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("/results/".concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),ee=function(e){var n=e.history,t=Object(a.useState)([]),c=Object(y.a)(t,2),i=c[0],l=c[1],u=Object(a.useState)(!1),o=Object(y.a)(u,2),m=o[0],f=o[1],d=Object(a.useState)(!1),p=Object(y.a)(d,2),v=p[0],b=p[1],h=Object(s.g)().code;Object(a.useEffect)((function(){E()}),[]);var E=function(){var e=Object(O.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,_.getUnfinished(h);case 4:n=e.sent,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),C.displayError(e.t0);case 11:return e.prev=11,f(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,Z.finishAnswer({code:h,isApproved:t,name:i[0].name||""});case 4:i.length>1?l(i.slice(1)):n.push("/results/".concat(h)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),C.displayError(e.t0);case 10:return e.prev=10,b(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();return m?null:r.a.createElement("div",{className:"answer-page"},r.a.createElement("h1",null,"H\xe6h\xe6"),r.a.createElement("p",null,"S\xe1 sem sendi \xfe\xe9r \xfeetta vill a\xf0 \xfe\xfa takir afst\xf6\xf0u til eftirfarandi nafna."),r.a.createElement("p",null,"\xdeegar \xfe\xfa hefur fari\xf0 \xed gegnum \xf6ll n\xf6fnin, \xfe\xe1 sj\xe1i\xf0 \xfei\xf0 lista yfir n\xf6fn sem ykkur l\xedka\xf0i :)"),r.a.createElement(R,null,r.a.createElement(G,{md:6},r.a.createElement(q,{name:i[0]||{},onSelect:function(e){return k(e)},disabled:v,unanswered:i.length})),r.a.createElement(G,{md:6,className:"d-none d-md-block"},r.a.createElement(J,{className:"main-card"},r.a.createElement("div",{className:"status"},"\xd3sv\xf6ru\xf0: ",i.length)))))},ne=(t(86),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Hall\xf3 h\xe6!"),r.a.createElement("p",null,"H\xe9r getur \xfe\xfa fengi\xf0 hugmyndir a\xf0 n\xf6fnum."),r.a.createElement("p",null,"Ferli\xf0 er einfalt:"),r.a.createElement("ol",null,r.a.createElement("li",null,"\xde\xfa f\xe6r\xf0 n\xf6fn og velur \xfeau sem \xfe\xfa ert hrifin/n af."),r.a.createElement("li",null,"\xde\xfa velur a\xf0 halda \xe1fram og f\xe6r\xf0u hlekk til a\xf0 senda \xe1 annan a\xf0ila.  S\xe1 a\xf0ili f\xe6r \xf6ll n\xf6fnin sem \xfe\xfa f\xf3rst \xed gegnum, en s\xe9r \xfe\xf3 ekki hva\xf0a n\xf6fn \xfe\xfa valdir."),r.a.createElement("li",null,"\xdeegar hann hefur loki\xf0 sinni yfirfer\xf0, \xfe\xe1 sj\xe1i\xf0 \xfei\xf0 hva\xf0a n\xf6fn \xfei\xf0 v\xf6ldu\xf0.")),r.a.createElement("div",{className:"gender-buttons"},r.a.createElement(m,{link:"/names/1",className:"boy"},"Drengur"),r.a.createElement(m,{link:"/names/0",className:"girl"},"St\xfalka")))}),te=t(28),ae=(t(87),[{label:"Handah\xf3fskennd",value:"random"},{label:"Algeng",value:"common"},{label:"\xd3algeng",value:"uncommon"},{label:"Stutt",value:"short"},{label:"L\xf6ng",value:"long"}]),re={liked:0,disliked:0,hasEmail:!1},ce={name:"",firstNamed:0,secondNamed:0},ie="",le=function(e){var n=e.history,t=Object(a.useState)("random"),c=Object(y.a)(t,2),i=c[0],l=c[1],u=Object(a.useState)(ce),o=Object(y.a)(u,2),f=o[0],p=o[1],v=Object(a.useState)(re),b=Object(y.a)(v,2),h=b[0],E=b[1],g=Object(a.useState)(!1),w=Object(y.a)(g,2),N=w[0],x=w[1],S=Object(a.useState)(!1),L=Object(y.a)(S,2),A=L[0],H=L[1],B=Object(s.g)(),D=B.isMale,F=B.code;Object(a.useEffect)((function(){M()}),[]);var M=function(){var e=Object(O.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),e.prev=1,F){e.next=9;break}return e.next=5,Z.createNewGroup();case 5:t=e.sent,n.replace("/names/".concat(D,"/").concat(t.code)),e.next=13;break;case 9:return e.next=11,_.getNameCount({code:F,isSender:1});case 11:a=e.sent,E(a);case 13:return e.next=15,z(i);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),C.displayError(e.t0.data);case 20:return e.prev=20,x(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(O.a)(j.a.mark((function e(n){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getNames({isMale:D,code:F,type:n,startsWith:ie});case 3:t=e.sent,p(t[0]||ce),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),C.displayError(e.t0.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(j.a.mark((function e(n){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.prev=1,e.next=4,Z.newAnswer({code:F,isApproved:n,name:f.name||""});case 4:t=Object(te.a)({},h),n?t.liked+=1:t.disliked+=1,E(t),z(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),C.displayError(e.t0);case 13:return e.prev=13,H(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}();return N?null:r.a.createElement("div",{className:"names-page"},r.a.createElement(d,{className:"type-buttons"},ae.map((function(e){var n=e.label,t=e.value;return r.a.createElement(m,{key:t,onClick:function(){return l(e=t),void z(e);var e},color:"light",active:i===t},n)}))),r.a.createElement(k,{placeholder:"Nafn byrjar \xe1...",className:"mb-4",onChangeDelay:800,onChange:function(e){return ie=e,void z(i)}}),r.a.createElement(R,null,r.a.createElement(G,{md:6},r.a.createElement(q,{name:f,onSelect:function(e){return T(e)},disabled:A,continueButton:h.liked?F:void 0})),r.a.createElement(G,{md:6,className:"d-none d-md-block"},r.a.createElement(J,{className:"main-card"},r.a.createElement("div",{className:"status"},"Valin n\xf6fn: ",h.liked,r.a.createElement("br",null),"Heildar sv\xf6r: ",h.liked+h.disliked),h.liked>0&&r.a.createElement(m,{className:"finish",color:"primary",link:"/send/".concat(F)},"Lj\xfaka vali")))))},se=(t(88),{liked:0,disliked:0,hasEmail:!1}),ue=function(){var e=Object(s.g)().code,n=Object(a.useState)(se),t=Object(y.a)(n,2),c=t[0],i=t[1],l=Object(a.useState)(!1),u=Object(y.a)(l,2),o=u[0],m=u[1],f=Object(a.useState)(!1),d=Object(y.a)(f,2),p=d[0],v=d[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){var n=Object(O.a)(j.a.mark((function n(){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,_.getNameCount({code:e,isSender:1});case 4:t=n.sent,i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),C.displayError(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(O.a)(j.a.mark((function n(t){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.prev=1,n.next=4,Z.registerEmail({code:e,email:t});case 4:i(Object(te.a)(Object(te.a)({},c),{},{hasEmail:!0})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),C.displayError(n.t0.data);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})));return function(e){return n.apply(this,arguments)}}();return o?null:r.a.createElement("div",{className:"send-page"},r.a.createElement("h1",null,"Flott n\xf6fn sem \xfe\xfa valdir!"),r.a.createElement("p",null,"N\xfa \xfearftu bara a\xf0 senda link \xe1 \xfeann sem \xfe\xfa vilt, svo hann geti fari\xf0 \xed gegnum s\xf6mu n\xf6fn og \xfe\xfa:"),r.a.createElement(z,{link:"/answer/".concat(e)}),r.a.createElement("p",null,"\xdeegar hann hefur loki\xf0 s\xe9r af, \xfe\xe1 geti\xf0 \xfei\xf0 s\xe9 ni\xf0urst\xf6\xf0urnar \xe1 \xfeessum link:"),r.a.createElement(z,{link:"/results/".concat(e)}),r.a.createElement("p",null,"Ef \xfe\xfa vilt, \xfe\xe1 getur\xf0u einnig fengi\xf0 e-mail sent \xfeegar m\xf3ta\xf0ili hefur svara\xf0 :)"),r.a.createElement(H,{onSubmit:function(e){return h(e)},saving:p,hasEmail:c.hasEmail}))},oe=(t(89),{bothLiked:[],receiverLiked:[],senderLiked:[]}),me=function(){var e=Object(a.useState)(!1),n=Object(y.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(oe),l=Object(y.a)(i,2),u=l[0],o=l[1],m=Object(a.useState)(!1),f=Object(y.a)(m,2),d=f[0],p=f[1],v=Object(s.g)().code;Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(O.a)(j.a.mark((function e(){var n,t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,_.getResults(v);case 4:n=e.sent,t=n.filter((function(e){return e.receiverLiked&&e.senderLiked})).map((function(e){return e.name})),a=n.filter((function(e){return e.senderLiked})).map((function(e){return e.name})),r=n.filter((function(e){return e.receiverLiked})).map((function(e){return e.name})),o({bothLiked:t,receiverLiked:r,senderLiked:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),p(!0);case 14:return e.prev=14,c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return d?r.a.createElement("div",{className:"results-page"},r.a.createElement("h1",null,"Nei heyr\xf0u, seinni a\xf0ili er ekki b\xfainn a\xf0 kl\xe1ra yfirfer\xf0ina!"),r.a.createElement(K,{to:"/answer/".concat(v)},"Fara \xfeanga\xf0 til a\xf0 kl\xe1ra!")):t?null:r.a.createElement("div",{className:"results-page"},r.a.createElement("h1",null,"H\xfarra! \xdei\xf0 eru\xf0 b\xfain a\xf0 kl\xe1ra a\xf0 fara \xed gegnum n\xf6fnin!"),r.a.createElement(R,null,r.a.createElement(G,{md:4,className:"d-flex align-items-stretch"},r.a.createElement(J,{title:u.bothLiked.length?"N\xf6fn sem b\xe1\xf0ir a\xf0ilar v\xf6ldu":"\xdev\xed mi\xf0ur var ekkert nafn sem b\xe1\xf0ir a\xf0ilar v\xf6ldu :("},u.bothLiked.map((function(e){return r.a.createElement("div",{key:e,className:"font-weight-bold"},e)})))),r.a.createElement(G,{md:4,className:"d-flex align-items-stretch"},r.a.createElement(J,{title:"N\xf6fn sem fyrri a\xf0ili valdi"},u.senderLiked.map((function(e){return r.a.createElement("div",{key:e,className:u.bothLiked.find((function(n){return e===n}))?"font-weight-bold":""},e)})))),r.a.createElement(G,{md:4,className:"d-flex align-items-stretch"},r.a.createElement(J,{title:"N\xf6fn sem seinni a\xf0ili valdi"},u.receiverLiked.map((function(e){return r.a.createElement("div",{key:e,className:u.bothLiked.find((function(n){return e===n}))?"font-weight-bold":""},e)}))))))},fe=(t(90),t(91),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement("div",{className:"container route-container"},r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:ne}),r.a.createElement(s.b,{exact:!0,path:["/names/:isMale","/names/:isMale/:code"],component:le}),r.a.createElement(s.b,{exact:!0,path:"/send/:code",component:ue}),r.a.createElement(s.b,{exact:!0,path:"/answer/:code",component:ee}),r.a.createElement(s.b,{exact:!0,path:"/results/:code",component:me}),r.a.createElement(s.a,{to:"/"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.772edf34.chunk.js.map