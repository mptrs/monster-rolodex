(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(2),r=n.n(o);n(8),n(9);const c=e=>s.a.createElement("div",{className:"card-container"},s.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),s.a.createElement("h2",null,e.monster.name),s.a.createElement("p",null,e.monster.email));n(10);const l=e=>s.a.createElement("div",{className:"card-list"},e.monsters.map(e=>s.a.createElement(c,{key:e.id,monster:e})));n(11);const i=({placeholder:e,handleChange:t})=>s.a.createElement("input",{className:"search",type:"search",placeholder:e,onChange:t});n(12);class h extends a.Component{constructor(){super(),this.handleChange=e=>this.setState({searchField:e.target.value}),this.state={monsters:[],searchField:""}}componentDidMount(){fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>this.setState({monsters:e}))}render(){const e=this.state,t=e.monsters,n=e.searchField,a=t.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Monsters rolodex"),s.a.createElement(i,{placeholder:"Search monsters",handleChange:this.handleChange}),s.a.createElement(l,{monsters:a}))}}var m=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[3,1,2]]]);
//# sourceMappingURL=main.5f3740be.chunk.js.map