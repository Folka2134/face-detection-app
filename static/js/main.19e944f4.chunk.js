(this["webpackJsonpfacedetector-app"]=this["webpackJsonpfacedetector-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a(377)},105:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},375:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(97),s=a.n(i),l=(a(105),a(24)),o=a(25),c=a(27),m=a(26),u=a(98),p=a.n(u),h=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{className:"white",style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim underline pa3 pointer",onClick:function(){return t("signout")}},"Sign out")):r.a.createElement("div",{className:"white",style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim underline pa3 pointer",onClick:function(){return t("home")}},"Guest"),r.a.createElement("p",{className:"f3 link dim underline pa3 pointer",onClick:function(){return t("signin")}},"Sign in"),r.a.createElement("p",{className:"f3 link dim  underline pa3 pointer",onClick:function(){return t("register")}},"Register"))},d=a(99),g=a.n(d),b=function(){return r.a.createElement("div",{className:"logo-container ma4 mt0 pa3"},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{alt:"",src:g.a})))},f=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"white f3 ma0 mt5"},"Hey Otis. Your current entry count is:"),r.a.createElement("p",{className:"white f2 ma0"},"#5"))},w=(a(337),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"white o-40"},"This magic brain can detect images in your images. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center form pa4 br3 shadow-5"},r.a.createElement("input",{type:"text",className:"f4 pa2 w-70 center",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-purple",onClick:a},"DETECT"))))}),E=(a(338),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center mt4 "},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSignIn=function(){e.props.onRouteChange("home")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",null,r.a.createElement("article",{className:"br3 ba white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 white"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"email",name:"email-address",id:"email-address",onChange:this.onSignInEmail})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"password",name:"password",id:"password",onChange:this.onSignInPassword}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba white bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSignIn})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("a",{href:"#0",className:"f6 link dim white db",onClick:function(){return e("register")}},"Register"))))))}}]),a}(r.a.Component),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onRegister=function(){e.props.onRouteChange("home")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",null,r.a.createElement("article",{className:"br3 ba white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 white"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"text",name:"name",id:"name",onChange:this.onRegisterName})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"email",name:"email-address",id:"email-address",onChange:this.onRegisterEmail})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white",type:"password",name:"password",id:"password",onChange:this.onRegisterPassword}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba white bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onRegister})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("a",{href:"#0",className:"f6 link dim white db",onClick:function(){return e("signin")}},"Signin"))))))}}]),a}(r.a.Component),C=a(51),y=a.n(C),k=(a(375),new y.a.App({apiKey:"bfa999187c9d4f528dbaeb04de3bd334"})),S={particles:{number:{value:50},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:10}}}},R={input:"",imageUrl:"",route:"signin",isSignedIn:!1,box:{},user:{id:"",name:"",email:"",password:"",entries:"",joined:""}},x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:t})},e.calculateFaceBox=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),k.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(t){e.displayFaceBox(e.calculateFaceBox(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(R):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=R,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,a=e.route,n=e.isSignedIn,i=e.box;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{params:S,className:"particles"}),r.a.createElement(h,{onRouteChange:this.onRouteChange,isSignedIn:n}),"home"===a?r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(f,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(w,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(E,{imageUrl:t,box:i})):"signin"===a||"signout"===a?r.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(376);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a.p+"static/media/brain.fee6bc46.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.19e944f4.chunk.js.map