(this["webpackJsonpreact-project1"]=this["webpackJsonpreact-project1"]||[]).push([[0],{209:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s(0),n=s.n(r),a=s(78),i=s.n(a),l=(s(89),s(2)),o=s(3),d=s(6),j=s(7),h=(s(90),function(e){return Object(c.jsxs)("ul",{style:{listStyle:"none"},children:[Object(c.jsx)("span",{children:"name"}),Object(c.jsx)("li",{children:e.user.name}),Object(c.jsx)("span",{children:"email"}),Object(c.jsx)("li",{children:e.user.email})]})}),u=s(12),b=s.n(u),m=s(22),p=s(23),O=s.n(p);function x(){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users/",e.prev=1,e.next=4,O.a.get("https://jsonplaceholder.typicode.com/users/");case 4:return t=e.sent,console.log(t),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(b.a.mark((function e(t){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://jsonplaceholder.typicode.com/users/"+t,e.prev=1,e.next=4,O.a.delete(s);case 4:return c=e.sent,console.log(c),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users/",e.prev=1,e.next=4,O.a.post("https://jsonplaceholder.typicode.com/users/",t);case 4:return s=e.sent,console.log(s),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var w=s(17),S=s(35);function U(e){var t=S.a().shape({name:S.b().required("the name is required"),email:S.b().email().required("the email is required")});return Object(c.jsx)(w.d,{enableReinitialize:!0,initialValues:e.values,onSubmit:e.onSubmit,validationSchema:t,render:function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h2",{className:"card-title",children:"Register New User"})}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)(w.c,{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)(w.b,{name:"name",className:"form-control"}),Object(c.jsx)(w.a,{className:"alert alert-danger",name:"name"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)(w.b,{name:"email",className:"form-control"}),Object(c.jsx)(w.a,{name:"email"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{className:"btn btn-success btn-sm",children:"Save User"})})]})})]})}})}var k=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={users:[],user:{}},e.componentDidMount=function(){x().then((function(t){e.setState({users:t.data})}))},e.setActive=function(t){e.setState({user:t})},e.the_deleteUser=function(t){v(t.id).then((function(){console.log("deleted");var s=e.state.users,c=s.indexOf(t);s.splice(c,1),e.setState({users:s})})).catch((function(e){alert("Oops error server "+e)})).catch((function(e){alert("Oops problem of server")}))},e.the_updateUser=function(e){y(e).then((function(){alert("the user updated with success")})).catch((function(e){alert("Oops problem of server")}))},e.the_addUser=function(e){y(e).then((function(){alert("the user adding with success")})).catch((function(e){alert("Oops problem of server")}))},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{className:"container my-5",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"card my-3",children:[Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h1",{className:"card-header text-success",children:"Users api "}),Object(c.jsxs)("div",{className:"col-md-12",children:[Object(c.jsx)("h4",{className:"text-primary",children:"Add User"}),Object(c.jsx)(U,{values:{name:"",email:""},onSubmit:this.the_addUser})]})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("table",{className:"table table-bordered table-hover text-align-center",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"bg-primary",children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Username"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Website"}),Object(c.jsx)("th",{children:"Company"}),Object(c.jsx)("th",{children:"Status"})]})}),Object(c.jsx)("tbody",{children:this.state.users.map((function(t,s){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.username}),Object(c.jsx)("td",{children:t.phone}),Object(c.jsx)("td",{children:t.website}),Object(c.jsx)("td",{children:t.company.name}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("span",{onClick:function(){return e.setActive(t)},className:"btn btn-primary btn-sm",children:[Object(c.jsx)("i",{className:"fa fa-eye"}),"Show"]}),Object(c.jsxs)("span",{className:"btn btn-success btn-sm",children:[Object(c.jsx)("i",{className:"fa fa-edit"}),"Edit"]}),Object(c.jsxs)("span",{onClick:function(){return e.the_deleteUser(t)},className:"btn btn-danger btn-sm",children:[Object(c.jsx)("i",{className:"fa fa-trash"}),"Delete"]})]})})]},t.id)}))})]})}),Object(c.jsx)("div",{className:"card-footer",children:this.state.user.id>0?Object(c.jsx)(h,{user:this.state.user}):"Please Select user"}),Object(c.jsxs)("div",{className:"col-md-12",children:[Object(c.jsx)("h4",{className:"text-warning",children:"Edit User"}),this.state.user.id>0?Object(c.jsx)(U,{values:this.state.user,onSubmit:this.the_updateUser}):"Please Select user"]})]})})})})})}}]),s}(r.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,210)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),C()},89:function(e,t,s){},90:function(e,t,s){}},[[209,1,2]]]);
//# sourceMappingURL=main.d52c0d53.chunk.js.map