(window["webpackJsonpreact-closure"]=window["webpackJsonpreact-closure"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e){var n;(n=function(t,e){this.name=t,this.age=e}).prototype.greeting=function(){console.log("\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 "+this.name+", \u0438 \u044f \u043f\u0438\u0448\u0443 \u0438\u0437 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430!!!")};var a=new n("John",23),r=new n("Mary",66);a.greeting(),console.log(r.constructor===n)},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(13),n(1)),u=n(2),s=n(4),l=n(3),h=n(5),p=(n(14),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={num:0},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.counter=function(){var e=0;return function(){e++,t.setState({num:e})}},this.closureCounter=this.counter()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:{margin:"200px"}},"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u0438\u0437 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u044f: ",this.state.num,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){t.closureCounter()}}," INC "))}}]),e}(r.a.Component)),m=(n(15),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={data:"\u041d\u0410\u0427\u0410\u041b\u042c\u041d\u041e\u0415 \u0421\u041e\u0421\u0422\u041e\u042f\u041d\u0418\u0415..."},n.updateState=function(t){n.setState({data:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u0437: ".concat(t)})},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"100px"}},"\u0420\u041e\u0414\u0418\u0422\u0415\u041b\u042c: ",this.state.data,r.a.createElement(f,{update:this.updateState}),r.a.createElement(p,null))}}]),e}(r.a.Component)),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).message="\u0414\u041e\u0427\u042c",n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442:",r.a.createElement("button",{onClick:function(){return t.props.update(t.message)}},"CLICK"),r.a.createElement(v,{update:this.props.update}))}}]),e}(r.a.Component),v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).message="\u0412\u041d\u0423\u041a",n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,"\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:",r.a.createElement("button",{onClick:function(){return t.props.update(t.message)}},"CLICK"))}}]),e}(r.a.Component),d=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fcc1d8f9.chunk.js.map