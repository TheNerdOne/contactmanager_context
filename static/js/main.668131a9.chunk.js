(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{32:function(e,a,t){},36:function(e,a,t){e.exports=t.p+"static/media/avatar-circle.56f0c7de.png"},41:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(35),l=t.n(c),o=t(6),s=t(7),i=t(9),m=t(8),u=t(10),p=t(14),d=t(15),h=t(3),f=t(2),b=t.n(f),v=t(12),E=t(40),g=t(19),y=t(13),N=t.n(y),O=r.a.createContext(),C=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return C(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),x=O.Consumer,k=t(36),w=t.n(k),S=(t(32),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.deleteClick=function(){var e=Object(v.a)(b.a.mark((function e(a,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,l=a.phone,o=this.state.showContactInfo;return r.a.createElement(x,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{style:{cursor:"pointer"},className:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 col-sm-10 offset-sm-1"},r.a.createElement("div",{className:"card mb-3 p-card-hover mt-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 d-flex justify-content-center",onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},style:{cursor:"pointer"}},r.a.createElement("img",{src:w.a,className:"card-img img-fluid rounded-circle p-1 p-img-profile",alt:"profile"})),r.a.createElement("div",{className:"col-md-8 d-flex align-items-center"},r.a.createElement("div",{className:"card-body d-flex justify-content-between pl-0"},r.a.createElement("div",{className:"contact-name d-flex align-items-baseline ml-3 pl-1"},r.a.createElement("span",{className:"card-title mr-1"},n),r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"card-text fa fa-caret-down",style:T.caret}," ")),r.a.createElement("div",{className:"contact-edit"},r.a.createElement(p.b,{to:"contact/edit/".concat(t),className:"mr-1 float-left"}," ",r.a.createElement("i",{className:"card-text fa fa-pencil mr-2",style:T.pencil})," "),r.a.createElement("i",{onClick:e.deleteClick.bind(e,t,s),className:"card-text fa fa-times",style:T.times})))),o?r.a.createElement("ul",{className:"list-group p-tran w-100"},r.a.createElement("li",{className:"list-group-item"}," ",r.a.createElement("i",{className:"fa fa-envelope"})," Email: ",c),r.a.createElement("li",{className:"list-group-item"}," ",r.a.createElement("i",{className:"fa fa-phone"})," Phone: ",l)):null)))}))}}]),a}(n.Component)),A=S,T={caret:{color:"#555",cursor:"pointer"},times:{color:"rgb(220, 0, 0)",cursor:"pointer"},pencil:{color:"#777"}};S.defaultProps={contact:{name:"no name",email:"no email",phone:"no number"}};var P=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(A,{key:e.id,contact:e})})))}))}}]),a}(n.Component),D=t(17),I=t(39),q=t.n(I),_=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,className:q()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};_.defaultProps={type:"text"};var M=_,U=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.pOnChange=function(e){return t.setState(Object(D.a)({},e.target.name,e.target.value))},t.pOnSubmit=function(){var e=Object(v.a)(b.a.mark((function e(a,n){var r,c,l,o,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,l=r.email,o=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required!"}}),e.abrupt("return",null);case 5:if(""!==l){e.next=8;break}return t.setState({errors:{email:"Email is required!"}}),e.abrupt("return",null);case 8:if(""!==o){e.next=11;break}return t.setState({errors:{phone:"Phone is required!"}}),e.abrupt("return",null);case 11:return s={name:c,email:l,phone:o},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(x,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"col col-md-6 offset-md-3 col-sm-12"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.pOnSubmit.bind(e,o)},r.a.createElement(M,{label:"Name",name:"name",value:t,placeholder:"Enter Name...",onChange:e.pOnChange,error:l.name}),r.a.createElement(M,{label:"Email",name:"email",value:n,type:"email",placeholder:"Enter Email...",onChange:e.pOnChange,error:l.email}),r.a.createElement(M,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.pOnChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-success btn-block"})))))}))}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.pOnChange=function(e){return t.setState(Object(D.a)({},e.target.name,e.target.value))},t.pOnSubmit=function(){var e=Object(v.a)(b.a.mark((function e(a,n){var r,c,l,o,s,i,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,l=r.email,o=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required!"}}),e.abrupt("return",null);case 5:if(""!==l){e.next=8;break}return t.setState({errors:{email:"Email is required!"}}),e.abrupt("return",null);case 8:if(""!==o){e.next=11;break}return t.setState({errors:{phone:"Phone is required!"}}),e.abrupt("return",null);case 11:return s=t.props.match.params.id,i={name:c,email:l,phone:o},e.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var a,t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(x,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"col col-md-6 offset-md-3 col-sm-12"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.pOnSubmit.bind(e,o)},r.a.createElement(M,{label:"Name",name:"name",value:t,placeholder:"Enter Name...",onChange:e.pOnChange,error:l.name}),r.a.createElement(M,{label:"Email",name:"email",value:n,type:"email",placeholder:"Enter Email...",onChange:e.pOnChange,error:l.email}),r.a.createElement(M,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.pOnChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-success btn-block"})))))}))}}]),a}(n.Component),B=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},a),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"true","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"navbar-collapse collapse ",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav float-right flex-row-reverse"},r.a.createElement("li",{className:"nav-item ml-2"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",{className:"nav-item ml-2"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"})," About"))))))};B.defaultProps={branding:"my App"};var H=B;function J(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"we're sorry this page you looking for does not exist :("))}function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"displaye-4"},"About Contact Manager App"),r.a.createElement("p",{className:"lead"},"Hi, I'm poria and this is my first react app the contact manager with context and json placeholder you can add new contact, delete and edit them. it's not a big thing but if you have an idea (except the UI) contact me in ",r.a.createElement("a",{href:"https://t.me/OneDevel0perArmy"},"Telegram")),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}t(68),t(69);var W=Object(h.a)(),V=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,{history:W},r.a.createElement("div",{className:"text-left"},r.a.createElement(H,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{exact:!0,path:"/about",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:U}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(d.a,{component:J})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.668131a9.chunk.js.map