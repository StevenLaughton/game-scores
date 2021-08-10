(this["webpackJsonpgame-scores"]=this["webpackJsonpgame-scores"]||[]).push([[0],{84:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(29),c=n.n(i),s=(n(84),n(62)),o=n(12),u=n(107),l=n(101),d=n(109),j=n(33),h=n(7),b=n(9),f=n(16),m=n(17),O=n(104),y=n(102),p=n(103),v=n(19),x=n(108),w=n(57),g=n(50),k=n(73),q=n(1);function M(t){var e=Object(a.useState)(!0),n=Object(v.a)(e,2),r=n[0],i=n[1];return Object(q.jsxs)(x.a,{bg:"light",border:"light",className:"app-card",children:[Object(q.jsx)(x.a.Header,{children:Object(q.jsxs)("div",{className:"d-flex align-items-center",children:[Object(q.jsx)(g.a,{icon:k.faUserCircle,className:"mx-1",onClick:function(){return i(!r)}}),Object(q.jsx)("span",{children:t.name}),Object(q.jsx)("div",{className:"flex-grow-1"}),Object(q.jsxs)(O.a,{children:[Object(q.jsx)(O.a.Toggle,{size:"sm",variant:"secondary"}),Object(q.jsx)(O.a.Menu,{children:t.menu})]})]})}),Object(q.jsx)(w.a,{in:r,children:Object(q.jsx)(x.a.Body,{className:"p-0",children:t.children})}),Object(q.jsx)(x.a.Footer,{className:"text-muted text-end",children:Object(q.jsxs)("span",{className:"mx-2",children:["Total: ",t.points]})})]})}var S=n(68),N=n.n(S),C=function(){function t(){if(Object(h.a)(this,t),this.constructor===t)throw new Error("Abstract classes can't be instantiated.")}return Object(b.a)(t,[{key:"action",value:function(){throw new Error("Method must be implemented.")}}]),t}(),G=function t(e){Object(h.a)(this,t),this.name=e},A=n(75),P=n(78),B={cog:"Cog",compass:"Compass",tablet:"Tablet"},I=function(t){return t.reduce((function(t,e){return t+e}),0)},E=function(t,e){return t.length===e+1?t[0]:t[e+1]},_=function(t,e){return 0===e?t[t.length-1]:t[e-1]},H=function(t){var e=new W(t,(function(t){return t.item.type}));return I(Object.values(B).map((function(t){return Math.pow(e.get(t),2)})))+7*Math.min.apply(Math,Object(j.a)(t.map((function(t){return t.quantity}))))},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return I(t.map((function(t){return 0===t.quantity?0:t.item.action(e)*t.quantity})))},z=function(t){return function(t){var e=t;return e.forEach((function(t,n){t.board&&t.board.forEach((function(a,r){var i=0;switch(r){case"military":case"civic":i=T(a.cards);break;case"money":i=Math.floor(T(a.cards)/3);break;case"science":i=H(a.cards);break;case"commerce":case"guild":i=T(a.cards,{players:e,index:n})}t.board.set(r,{points:i,cards:a.cards})}))})),e}(t)},W=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(h.a)(this,n),(a=e.call(this)).key=r||function(t){return t};var i,c=Object(A.a)(t);try{for(c.s();!(i=c.n()).done;){var s=i.value;a.add(s,s.quantity)}}catch(o){c.e(o)}finally{c.f()}return a}return Object(b.a)(n,[{key:"add",value:function(t,e){t=this.key(t),this.set(t,((this.get(t)||0)+1)*e)}}]),n}(Object(P.a)(Map)),L=n(76);function F(t){return Object(q.jsx)(x.a,{onClick:t.onClick,bg:"secondary",border:"secondary",className:"text-center app-card",children:Object(q.jsx)(x.a.Body,{children:Object(q.jsx)(g.a,{icon:L.a,size:"4x"})})})}var D=n(105),J=n(106),K=n(110),R=n(74),U=function(){function t(){Object(h.a)(this,t),this.name="Silver"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),V=function(){function t(){Object(h.a)(this,t),this.name="Gold"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),$=function(){function t(){Object(h.a)(this,t),this.name="Battle Wins"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),X=function(){function t(){Object(h.a)(this,t),this.name="Battle Losses"}return Object(b.a)(t,[{key:"action",value:function(){return-1}}]),t}(),Q=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 1"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),Y=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 2"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),Z=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 3"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),tt=function(){function t(){Object(h.a)(this,t),this.name="Pawnshop"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),et=function(){function t(){Object(h.a)(this,t),this.name="Baths"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),nt=function(){function t(){Object(h.a)(this,t),this.name="Altar"}return Object(b.a)(t,[{key:"action",value:function(){return 2}}]),t}(),at=function(){function t(){Object(h.a)(this,t),this.name="Theater"}return Object(b.a)(t,[{key:"action",value:function(){return 2}}]),t}(),rt=function(){function t(){Object(h.a)(this,t),this.name="Scriptorium",this.type=B.tablet}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),it=function(){function t(){Object(h.a)(this,t),this.name="Workshop",this.type=B.cog}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),ct=function(){function t(){Object(h.a)(this,t),this.name="Apothecary",this.type=B.compass}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),st=function(){function t(){Object(h.a)(this,t),this.name="Marketplace"}return Object(b.a)(t,[{key:"action",value:function(){return 0}}]),t}(),ot=function(){function t(){Object(h.a)(this,t),this.name="Vineyard"}return Object(b.a)(t,[{key:"action",value:function(){return 0}}]),t}(),ut="misc cards do not play an action",lt=function t(){Object(h.a)(this,t),this.name="Raw Materials",this.action=function(){throw new Error(ut)}},dt=function t(){Object(h.a)(this,t),this.name="Manufactured Goods",this.action=function(){throw new Error(ut)}},jt=function t(){Object(h.a)(this,t),this.name="Military Structures",this.action=function(){throw new Error(ut)}},ht=function(t,e){var n=0;return null===t||void 0===t||t.board.get("misc").cards.forEach((function(t){t.item.name===e&&(n=t.quantity)})),n},bt=function(t){return ht(t,"Raw Materials")},ft=function(t){return ht(t,"Manufactured Goods")},mt=function(t){return ht(t,"Military Structures")},Ot=function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.board.get("military").cards.filter((function(t){return"Battle Losses"===t.item.name&&t.quantity>0})))||void 0===n?void 0:n.length)&&void 0!==e?e:0},yt=function(t,e){var n,a;return null!==(n=null===t||void 0===t||null===(a=t.board.get(e).cards.filter((function(t){return t.quantity>0})))||void 0===a?void 0:a.length)&&void 0!==n?n:0},pt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Workers Guild",t.action=function(t){return bt(_(t.players,t.index))+bt(E(t.players,t.index))},t}return n}(C),vt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Craftsmens Guild",t.action=function(t){return 2*ft(_(t.players,t.index))+2*ft(E(t.players,t.index))},t}return n}(C),xt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Traders Guild",t.action=function(t){return yt(_(t.players,t.index),"commerce")+yt(E(t.players,t.index),"commerce")},t}return n}(C),wt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Philosophers Guild",t.action=function(t){return yt(_(t.players,t.index),"science")+yt(E(t.players,t.index),"science")},t}return n}(C),gt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Spies Guild",t.action=function(t){return mt(_(t.players,t.index))+mt(E(t.players,t.index))},t}return n}(C),kt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Strategists Guild",t.action=function(t){return Ot(_(t.players,t.index))+Ot(E(t.players,t.index))},t}return n}(C),qt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Shipowners Guild",t.action=function(t){return bt(t.players[t.index])+ft(t.players[t.index])+yt(t.players[t.index],"guild")},t}return n}(C),Mt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Magistrates Guild",t.action=function(t){return yt(_(t.players,t.index),"civic")+yt(E(t.players,t.index),"civic")},t}return n}(C),St=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Builders Guild",t.action=function(t){return yt(_(t.players,t.index),"wonders")+yt(t.players[t.index],"wonders")+yt(E(t.players,t.index),"wonders")},t}return n}(C);var Nt=function(){var t=new Map;return t.set("military",{points:0,cards:[{item:new $,quantity:0},{item:new X,quantity:0}]}),t.set("money",{points:0,cards:[{item:new U,quantity:0},{item:new V,quantity:0}]}),t.set("wonders",{points:0,cards:[{item:new Q,quantity:0},{item:new Y,quantity:0},{item:new Z,quantity:0}]}),t.set("civic",{points:0,cards:[{item:new tt,quantity:0},{item:new et,quantity:0},{item:new nt,quantity:0},{item:new at,quantity:0}]}),t.set("science",{points:0,cards:[{item:new rt,quantity:0},{item:new it,quantity:0},{item:new ct,quantity:0}]}),t.set("commerce",{points:0,cards:[{item:new ot,quantity:0},{item:new st,quantity:0}]}),t.set("guild",{points:0,cards:[{item:new pt,quantity:0},{item:new vt,quantity:0},{item:new xt,quantity:0},{item:new wt,quantity:0},{item:new gt,quantity:0},{item:new kt,quantity:0},{item:new qt,quantity:0},{item:new Mt,quantity:0},{item:new St,quantity:0}]}),t.set("misc",{points:0,cards:[{item:new lt,quantity:0},{item:new dt,quantity:0},{item:new jt,quantity:0}]}),t},Ct=function(){return Nt()};function Gt(t){var e,n,r=null!==(e=null===t||void 0===t?void 0:t.min)&&void 0!==e?e:0,i=null!==(n=null===t||void 0===t?void 0:t.max)&&void 0!==n?n:Number.MAX_VALUE,c=Object(a.useState)(t.value),s=Object(v.a)(c,2),o=s[0],u=s[1],l=function(e){t.onChange(e),u(e)};return Object(q.jsxs)("div",{className:"quantity-input",children:[Object(q.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--left",type:"button",onClick:function(){o>r&&l(o-1)},children:"\u2014"}),Object(q.jsx)("input",{className:"quantity-input__screen",type:"text",value:o,readOnly:!0}),Object(q.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--right",type:"button",onClick:function(){o<i&&l(o+1)},children:"\uff0b"})]})}function At(t){var e,n=Object(a.useState)(null!==(e=t.board)&&void 0!==e?e:Ct()),r=Object(v.a)(n,2),i=r[0],c=r[1];return Object(q.jsxs)(D.a,{show:t.show,onHide:t.handleClose,children:[Object(q.jsx)(D.a.Header,{closeButton:!0,children:Object(q.jsx)(D.a.Title,{children:"Scoreboard Builder"})}),Object(q.jsx)(D.a.Body,{className:"p-0",children:Object(q.jsx)(J.a,{children:Object(j.a)(i.keys()).map((function(t,e){return Object(q.jsxs)(J.a.Item,{eventKey:e,children:[Object(q.jsx)(J.a.Header,{children:t}),Object(q.jsx)(J.a.Body,{children:Object(q.jsx)(K.a,{variant:"flush",children:i.get(t).cards.map((function(e,n){return Object(q.jsxs)(K.a.Item,{className:"d-flex",children:[e.item.name,Object(q.jsx)("div",{className:"flex-grow-1"}),Object(q.jsx)(Gt,{value:e.quantity,onChange:function(e){return function(t,e,n){var a=i.get(e);a.cards[n].quantity=t,c((function(t){return new Map(t).set(e,a)}))}(e,t,n)}})]},n)}))})})]},e)}))})}),Object(q.jsx)(D.a.Footer,{children:Object(q.jsx)(R.a,{variant:"primary",onClick:function(){return t.handleSave(i)},children:"Save Changes"})})]})}var Pt=n(100);function Bt(t){return Object(q.jsx)(J.a,{children:Object(j.a)(t.board.keys()).map((function(e,n){return Object(q.jsxs)(J.a.Item,{eventKey:n,children:[Object(q.jsxs)(J.a.Header,{children:[Object(q.jsxs)(Pt.a,{bg:"success",className:"mx-2",pill:!0,children:[" ",t.board.get(e).points]}),e]}),Object(q.jsx)(J.a.Body,{children:Object(q.jsx)(K.a,{variant:"flush",children:t.board.get(e).cards.map((function(t,e){return Object(q.jsxs)(K.a.Item,{className:"d-flex",children:[t.item.name,Object(q.jsx)("div",{className:"flex-grow-1"}),Object(q.jsx)("span",{children:t.quantity})]},e)}))})})]},n)}))})}var It=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).addPlayer=function(){var t=prompt("Please enter player name");t&&a.setState((function(e){return{players:N()(e.players,{$push:[new G(t)]})}}))},a.updatePlayer=function(t,e){var n=a.state.players.slice();n[e]=t,a.setState({players:n},(function(){return a.calculateScores()}))},a.removePlayer=function(t){a.setState((function(e){return N()(e,{players:{$splice:[[t,1]]}})}))},a.calculateScores=function(){a.setState({players:z(a.state.players.slice())})},a.openModal=function(t){a.setState({modalOpen:!0,modalIndex:t})},a.closeModal=function(){a.setState({modalOpen:!1,modalIndex:null})},a.saveModal=function(t){var e=a.state.modalIndex,n=a.state.players[e];n.board=t,a.updatePlayer(n,e),a.closeModal()},a.getPoints=function(t){return t.board?Object(j.a)(t.board.values()).reduce((function(t,e){return t+e.points}),0):0},a.dropdownMenu=function(t){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(O.a.Item,{as:"button",onClick:function(){return a.openModal(t)},children:"Add/Edit Scoreboard"}),Object(q.jsx)(O.a.Item,{as:"button",onClick:function(){return a.removePlayer(t)},children:"Delete Player"})]})},a.state={players:[new G("steven"),new G("charlotte")],modalOpen:!1,modalIndex:null},a}return Object(b.a)(n,[{key:"componentDid",value:function(){console.log("did mount")}},{key:"render",value:function(){var t=this;return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:"m-3",children:"7-Wonders"}),Object(q.jsx)(l.a,{children:Object(q.jsxs)(y.a,{children:[this.state.players.map((function(e,n){return Object(q.jsx)(p.a,{xs:12,sm:6,children:Object(q.jsx)(M,{name:e.name,points:t.getPoints(e),menu:t.dropdownMenu(n),children:e.board&&Object(q.jsx)(Bt,{board:e.board})})},n)})),Object(q.jsx)(p.a,{xs:12,md:6,children:Object(q.jsx)(F,{onClick:this.addPlayer})})]})}),null!==this.state.modalIndex&&Object(q.jsx)(At,{show:this.state.modalOpen,handleClose:this.closeModal,handleSave:this.saveModal.bind(this),board:this.state.players[this.state.modalIndex].board})]})}}]),n}(r.a.Component),Et=[{path:"/",exact:!0,name:"Home!",main:function(){return Object(q.jsx)("h2",{children:"Home"})}},{path:"/sevenwonders",name:"7 Wonders",main:function(){return Object(q.jsx)(It,{})}},{path:"/shoelaces",name:"Shoelaces!",main:function(){return Object(q.jsx)("h2",{children:"Shoelaces"})}}];function _t(){return Object(q.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(q.jsxs)(l.a,{children:[Object(q.jsx)(u.a.Brand,{children:"Game Scores"}),Object(q.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(q.jsx)(u.a.Collapse,{id:"responsive-navbar-nav",children:Object(q.jsx)(d.a,{className:"me-auto",children:Et.map((function(t,e){return Object(q.jsx)(d.a.Link,{as:s.b,to:t.path,href:t.path,children:t.name},e)}))})})]})})}function Ht(){return Object(q.jsxs)(s.a,{children:[Object(q.jsx)(_t,{}),Object(q.jsx)(o.c,{children:Et.map((function(t,e){return Object(q.jsx)(o.a,{path:t.path,exact:t.exact,children:Object(q.jsx)(t.main,{})},e)}))})]})}c.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(Ht,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.dd0d1920.chunk.js.map