(this["webpackJsonpgame-scores"]=this["webpackJsonpgame-scores"]||[]).push([[0],{79:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(22),c=n.n(i),s=(n(79),n(53)),o=n(10),u=n(99),l=n(94),d=n(101),j=n(31),h=n(7),b=n(8),f=n(13),m=n(14),O=n(93),y=n(95),p=n(96),v=n(71),x=n(24),w=n(100),g=n(46),k=n(35),q=n(67),M=n(1);function S(t){var e=Object(a.useState)(!0),n=Object(x.a)(e,2),r=n[0],i=n[1];return Object(M.jsxs)(w.a,{bg:"light",border:"light",className:"app-card",children:[Object(M.jsx)(w.a.Header,{children:Object(M.jsxs)("div",{className:"d-flex align-items-center",children:[Object(M.jsx)(k.a,{icon:q.faUserCircle,className:"mx-1",onClick:function(){return i(!r)}}),Object(M.jsx)("span",{children:t.name}),Object(M.jsx)("div",{className:"mx-1",children:null===t||void 0===t?void 0:t.slotLeft}),Object(M.jsx)("div",{className:"flex-grow-1"}),Object(M.jsx)("div",{className:"mx-1",children:null===t||void 0===t?void 0:t.slotRight})]})}),Object(M.jsx)(g.a,{in:r,children:Object(M.jsx)(w.a.Body,{children:t.children})}),Object(M.jsx)(w.a.Footer,{className:"text-muted text-end",children:Object(M.jsxs)("span",{className:"mx-2",children:["Total: ",t.points]})})]})}var C=n(68);function N(t){return Object(M.jsx)(w.a,{onClick:t.onClick,bg:"secondary",border:"secondary",className:"text-center app-card",children:Object(M.jsx)(w.a.Body,{children:Object(M.jsx)(k.a,{icon:C.a,size:"4x"})})})}var P=n(61),G=n.n(P),B=n(91),A=n(98),_=n(92),E=function(){function t(){if(Object(h.a)(this,t),this.constructor===t)throw new Error("Abstract classes can't be instantiated.")}return Object(b.a)(t,[{key:"action",value:function(){throw new Error("Method must be implemented.")}}]),t}();function H(t){var e=function(t){return Object(M.jsxs)(B.a,{responsive:!0,striped:!0,children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"Card"}),Object(M.jsx)("th",{children:"Quantity"})]})}),Object(M.jsx)("tbody",{children:t.board.get(t.index).cards.map((function(t,e){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:t.item.name}),Object(M.jsx)("td",{children:t.quantity})]},e)}))})]})};return Object(M.jsx)(A.a,{children:Object(j.a)(t.board.keys()).map((function(n,a){return Object(M.jsxs)(A.a.Item,{eventKey:a,children:[Object(M.jsxs)(A.a.Header,{children:[Object(M.jsxs)(_.a,{bg:"success",className:"mx-2",pill:!0,children:[" ",t.board.get(n).points]}),n]}),Object(M.jsx)(A.a.Body,{children:Object(M.jsx)(e,{index:n,board:t.board})})]},a)}))})}var I=function t(e){Object(h.a)(this,t),this.name=e},L=n(69),T=n(74),z={cog:"Cog",compass:"Compass",tablet:"Tablet"},W=function(t){return t.reduce((function(t,e){return t+e}),0)},R=function(t,e){return t.length===e+1?t[0]:t[e+1]},F=function(t,e){return 0===e?t[t.length-1]:t[e-1]},J=function(t){var e=new V(t,(function(t){return t.item.type}));return W(Object.values(z).map((function(t){return Math.pow(e.get(t),2)})))+7*Math.min.apply(Math,Object(j.a)(t.map((function(t){return t.quantity}))))},K=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return W(t.map((function(t){return 0===t.quantity?0:t.item.action(e)*t.quantity})))},U=function(t){return function(t){var e=t;return e.forEach((function(t,n){t.board&&t.board.forEach((function(a,r){var i=0;switch(r){case"military":case"civic":i=K(a.cards);break;case"money":i=Math.floor(K(a.cards)/3);break;case"science":i=J(a.cards);break;case"commerce":case"guild":i=K(a.cards,{players:e,index:n})}t.board.set(r,{points:i,cards:a.cards})}))})),e}(t)},V=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(h.a)(this,n),(a=e.call(this)).key=r||function(t){return t};var i,c=Object(L.a)(t);try{for(c.s();!(i=c.n()).done;){var s=i.value;a.add(s,s.quantity)}}catch(o){c.e(o)}finally{c.f()}return a}return Object(b.a)(n,[{key:"add",value:function(t,e){t=this.key(t),this.set(t,((this.get(t)||0)+1)*e)}}]),n}(Object(T.a)(Map)),$=n(72),D=n(97),Q=n(102),X=function(){function t(){Object(h.a)(this,t),this.name="Silver"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),Y=function(){function t(){Object(h.a)(this,t),this.name="Gold"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),Z=function(){function t(){Object(h.a)(this,t),this.name="Battle Wins"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),tt=function(){function t(){Object(h.a)(this,t),this.name="Battle Losses"}return Object(b.a)(t,[{key:"action",value:function(){return-1}}]),t}(),et=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 1"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),nt=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 2"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),at=function(){function t(){Object(h.a)(this,t),this.name="Giza Phase 3"}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),rt=function(){function t(){Object(h.a)(this,t),this.name="Pawnshop"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),it=function(){function t(){Object(h.a)(this,t),this.name="Baths"}return Object(b.a)(t,[{key:"action",value:function(){return 3}}]),t}(),ct=function(){function t(){Object(h.a)(this,t),this.name="Altar"}return Object(b.a)(t,[{key:"action",value:function(){return 2}}]),t}(),st=function(){function t(){Object(h.a)(this,t),this.name="Theater"}return Object(b.a)(t,[{key:"action",value:function(){return 2}}]),t}(),ot=function(){function t(){Object(h.a)(this,t),this.name="Scriptorium",this.type=z.tablet}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),ut=function(){function t(){Object(h.a)(this,t),this.name="Workshop",this.type=z.cog}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),lt=function(){function t(){Object(h.a)(this,t),this.name="Apothecary",this.type=z.compass}return Object(b.a)(t,[{key:"action",value:function(){return 1}}]),t}(),dt=function(){function t(){Object(h.a)(this,t),this.name="Marketplace"}return Object(b.a)(t,[{key:"action",value:function(){return 0}}]),t}(),jt=function(){function t(){Object(h.a)(this,t),this.name="Vineyard"}return Object(b.a)(t,[{key:"action",value:function(){return 0}}]),t}(),ht="misc cards do not play an action",bt=function t(){Object(h.a)(this,t),this.name="Raw Materials",this.action=function(){throw new Error(ht)}},ft=function t(){Object(h.a)(this,t),this.name="Manufactured Goods",this.action=function(){throw new Error(ht)}},mt=function t(){Object(h.a)(this,t),this.name="Military Structures",this.action=function(){throw new Error(ht)}},Ot=function(t,e){var n=0;return null===t||void 0===t||t.board.get("misc").cards.forEach((function(t){t.item.name===e&&(n=t.quantity)})),n},yt=function(t){return Ot(t,"Raw Materials")},pt=function(t){return Ot(t,"Manufactured Goods")},vt=function(t){return Ot(t,"Military Structures")},xt=function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.board.get("military").cards.filter((function(t){return"Battle Losses"===t.item.name&&t.quantity>0})))||void 0===n?void 0:n.length)&&void 0!==e?e:0},wt=function(t,e){var n,a;return null!==(n=null===t||void 0===t||null===(a=t.board.get(e).cards.filter((function(t){return t.quantity>0})))||void 0===a?void 0:a.length)&&void 0!==n?n:0},gt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Workers Guild",t.action=function(t){return yt(F(t.players,t.index))+yt(R(t.players,t.index))},t}return n}(E),kt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Craftsmens Guild",t.action=function(t){return 2*pt(F(t.players,t.index))+2*pt(R(t.players,t.index))},t}return n}(E),qt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Traders Guild",t.action=function(t){return wt(F(t.players,t.index),"commerce")+wt(R(t.players,t.index),"commerce")},t}return n}(E),Mt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Philosophers Guild",t.action=function(t){return wt(F(t.players,t.index),"science")+wt(R(t.players,t.index),"science")},t}return n}(E),St=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Spies Guild",t.action=function(t){return vt(F(t.players,t.index))+vt(R(t.players,t.index))},t}return n}(E),Ct=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Strategists Guild",t.action=function(t){return xt(F(t.players,t.index))+xt(R(t.players,t.index))},t}return n}(E),Nt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Shipowners Guild",t.action=function(t){return yt(t.players[t.index])+pt(t.players[t.index])+wt(t.players[t.index],"guild")},t}return n}(E),Pt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Magistrates Guild",t.action=function(t){return wt(F(t.players,t.index),"civic")+wt(R(t.players,t.index),"civic")},t}return n}(E),Gt=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).name="Builders Guild",t.action=function(t){return wt(F(t.players,t.index),"wonders")+wt(t.players[t.index],"wonders")+wt(R(t.players,t.index),"wonders")},t}return n}(E);var Bt=function(){var t=new Map;return t.set("military",{points:0,cards:[{item:new Z,quantity:0},{item:new tt,quantity:0}]}),t.set("money",{points:0,cards:[{item:new X,quantity:0},{item:new Y,quantity:0}]}),t.set("wonders",{points:0,cards:[{item:new et,quantity:0},{item:new nt,quantity:0},{item:new at,quantity:0}]}),t.set("civic",{points:0,cards:[{item:new rt,quantity:0},{item:new it,quantity:0},{item:new ct,quantity:0},{item:new st,quantity:0}]}),t.set("science",{points:0,cards:[{item:new ot,quantity:0},{item:new ut,quantity:0},{item:new lt,quantity:0}]}),t.set("commerce",{points:0,cards:[{item:new jt,quantity:0},{item:new dt,quantity:0}]}),t.set("guild",{points:0,cards:[{item:new gt,quantity:0},{item:new kt,quantity:0},{item:new qt,quantity:0},{item:new Mt,quantity:0},{item:new St,quantity:0},{item:new Ct,quantity:0},{item:new Nt,quantity:0},{item:new Pt,quantity:0},{item:new Gt,quantity:0}]}),t.set("misc",{points:0,cards:[{item:new bt,quantity:0},{item:new ft,quantity:0},{item:new mt,quantity:0}]}),t},At=function(){return Bt()};function _t(t){var e,n,r=null!==(e=null===t||void 0===t?void 0:t.min)&&void 0!==e?e:0,i=null!==(n=null===t||void 0===t?void 0:t.max)&&void 0!==n?n:Number.MAX_VALUE,c=Object(a.useState)(t.value),s=Object(x.a)(c,2),o=s[0],u=s[1],l=function(e){t.onChange(e),u(e)};return Object(M.jsxs)("div",{className:"quantity-input",children:[Object(M.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--left",type:"button",onClick:function(){o>r&&l(o-1)},children:"\u2014"}),Object(M.jsx)("input",{className:"quantity-input__screen",type:"text",value:o,readOnly:!0}),Object(M.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--right",type:"button",onClick:function(){o<i&&l(o+1)},children:"\uff0b"})]})}function Et(t){var e,n=Object(a.useState)(null!==(e=t.board)&&void 0!==e?e:At()),r=Object(x.a)(n,2),i=r[0],c=r[1];return Object(M.jsxs)(D.a,{show:t.show,onHide:t.handleClose,children:[Object(M.jsx)(D.a.Header,{closeButton:!0,children:Object(M.jsx)(D.a.Title,{children:"Board Builder"})}),Object(M.jsx)(D.a.Body,{children:Object(M.jsx)(A.a,{children:Object(j.a)(i.keys()).map((function(t,e){return Object(M.jsxs)(A.a.Item,{eventKey:e,children:[Object(M.jsx)(A.a.Header,{children:t}),Object(M.jsx)(A.a.Body,{children:Object(M.jsx)(Q.a,{variant:"flush",children:i.get(t).cards.map((function(e,n){return Object(M.jsxs)(Q.a.Item,{className:"d-flex",children:[e.item.name,Object(M.jsx)("div",{className:"flex-grow-1"}),Object(M.jsx)("div",{children:Object(M.jsx)(_t,{value:e.quantity,min:0,onChange:function(e){return function(t,e,n){var a=i.get(e);a.cards[n].quantity=t,c((function(t){return new Map(t).set(e,a)}))}(e,t,n)}})})]},n)}))})})]},e)}))})}),Object(M.jsx)(D.a.Footer,{children:Object(M.jsx)(O.a,{variant:"primary",onClick:function(){return t.handleSave(i)},children:"Save Changes"})})]})}var Ht=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).addPlayer=function(){var t=prompt("Please enter player name");t&&a.setState((function(e){return{players:G()(e.players,{$push:[new I(t)]})}}))},a.updatePlayer=function(t,e){var n=a.state.players.slice();n[e]=t,a.setState({players:n})},a.removePlayer=function(t){a.setState((function(e){return G()(e,{players:{$splice:[[t,1]]}})}))},a.calculateScores=function(){var t=U(a.state.players.slice());a.setState({players:t})},a.openModal=function(t,e){a.setState({modalOpen:!0,modalPlayer:t,playerIndex:e})},a.closeModal=function(){a.setState({modalOpen:!1,modalPlayer:null})},a.saveModal=function(t){var e=a.state.playerIndex,n=a.state.players[e];n.board=t,a.updatePlayer(n,e),a.closeModal()},a.getPoints=function(t){return t.board?Object(j.a)(t.board.values()).reduce((function(t,e){return t+e.points}),0):0},a.state={players:[new I("steven"),new I("charlotte")],modalOpen:!1,modalPlayer:null,playerIndex:null},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"render",value:function(){var t=this;return Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{className:"m-3",children:"7-Wonders"}),Object(M.jsxs)(l.a,{children:[Object(M.jsx)("div",{className:"d-grid gap-2",children:Object(M.jsx)(O.a,{variant:"primary",size:"lg",onClick:function(){return t.calculateScores()},children:"Calculate"})}),Object(M.jsxs)(y.a,{children:[this.state.players.map((function(e,n){return Object(M.jsx)(p.a,{xs:12,sm:6,children:Object(M.jsx)(S,{name:e.name,points:t.getPoints(e),slotLeft:Object(M.jsx)(k.a,{icon:$.faPlus,onClick:function(){return t.openModal(e,n)}}),slotRight:Object(M.jsx)(v.a,{onClick:function(){return t.removePlayer(n)}}),children:e.board&&Object(M.jsx)(H,{board:e.board})})},n)})),Object(M.jsx)(p.a,{xs:12,md:6,children:Object(M.jsx)(N,{onClick:this.addPlayer})})]})]}),this.state.modalPlayer&&Object(M.jsx)(Et,{show:this.state.modalOpen,handleClose:this.closeModal,handleSave:this.saveModal,board:this.state.modalPlayer.board})]})}}]),n}(r.a.Component),It=[{path:"/",exact:!0,name:"Home!",main:function(){return Object(M.jsx)("h2",{children:"Home"})}},{path:"/sevenwonders",name:"7 Wonders",main:function(){return Object(M.jsx)(Ht,{})}},{path:"/shoelaces",name:"Shoelaces!",main:function(){return Object(M.jsx)("h2",{children:"Shoelaces"})}}];function Lt(){return Object(M.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(M.jsxs)(l.a,{children:[Object(M.jsx)(u.a.Brand,{children:"Game Scores"}),Object(M.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(M.jsx)(u.a.Collapse,{id:"responsive-navbar-nav",children:Object(M.jsx)(d.a,{className:"me-auto",children:It.map((function(t,e){return Object(M.jsx)(d.a.Link,{as:s.b,to:t.path,href:t.path,children:t.name},e)}))})})]})})}function Tt(){return Object(M.jsxs)(s.a,{children:[Object(M.jsx)(Lt,{}),Object(M.jsx)(o.c,{children:It.map((function(t,e){return Object(M.jsx)(o.a,{path:t.path,exact:t.exact,children:Object(M.jsx)(t.main,{})},e)}))})]})}c.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(Tt,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.72876ccd.chunk.js.map