(this["webpackJsonpcard-project"]=this["webpackJsonpcard-project"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(13),n(5)),l=n(3),i=n(4),u=n(7),d=n(6);n(14);function h(t){return r.a.createElement("div",null,r.a.createElement("h1",null,t.children))}var f=function(t){return r.a.createElement("div",{className:"display"},r.a.createElement(h,null,t.text),r.a.createElement("button",{onClick:t.shuffle,disabled:t.start},"Start"))};n(15);var m=function(t){return r.a.createElement("div",{className:"cards",onClick:t.turnCards,index:t.index},t.content)},g=(n(16),function(t){return r.a.createElement("div",{className:"cards-container"},t.children)}),v=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={cards:[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12],start:!1,userClickedPattern:[],displayText:"Memory Card Game",eventTarget:[]},t.shuffleCards=function(){for(var e=Object(s.a)(t.state.cards),n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=e[n];e[n]=e[a],e[a]=r}t.setState({cards:e,start:!0,displayText:"Click only 2 cards at a time to check their number"})},t.turnCards=function(e){var n=e.target,a=t.state.eventTarget;a.push(n);var r=t.state.userClickedPattern,c=n.getAttribute("index"),o=t.state.cards[c];r.push(o),n.style.transform="rotateY(0)",n.style.fontSize="5rem",2===r.length?r[r.length-1]!==r[r.length-2]&&(console.log(r[r.length-1]),console.log(r[r.length-2]),setTimeout((function(){a[a.length-1].style.fontSize="0",a[a.length-1].style.transform="rotateY(180deg)",a[a.length-2].style.fontSize="0",a[a.length-2].style.transform="rotateY(180deg)"}),1300)):r.length>2&&r.splice(0,2),console.log(r.length)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.cards.map((function(e,n){return r.a.createElement(m,{key:n,content:e,turnCards:t.turnCards,index:n})}));return r.a.createElement("div",{className:"App"},r.a.createElement(f,{text:this.state.displayText,shuffle:this.shuffleCards,start:this.state.start}),r.a.createElement(g,null,e))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0d4a5bba.chunk.js.map