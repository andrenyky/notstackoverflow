(this.webpackJsonpnot_stack_overflow=this.webpackJsonpnot_stack_overflow||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),i=(a(15),a(2)),l=a(5),m=a(6),c=a(9),u=a(8),d=(a(16),a(7)),h=function(e){var t=e.existingThreads,a=e.onSave,n=e.inputComment,s=e.addComment;return r.a.createElement("div",{style:{}},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"ba bw3  threadStyle",style:{padding:"25px",marginTop:"2em"}},r.a.createElement("p",{className:"f2",id:"questionStyle"},e.threadQuestion),e.threadComments.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(d.a,{type:"text",value:e.commText,onSave:a}),r.a.createElement("hr",null))})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("textarea",{className:"commentBox",onChange:n(e.id),value:e.comment,placeholder:"Type your comment here..."}),r.a.createElement("div",null,r.a.createElement("button",{style:{marginLeft:"15px"},className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-mid-gray",onClick:function(){return s(e)}},"Add new comm ")))))})))},p=function(e){var t=e.username,a=e.inputQuestion,n=e.question,s=e.addQuestion;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 i courier"},"Hello, ",t," "),r.a.createElement("div",null,r.a.createElement("p",{className:"f3 i courier"},"Type your question here"),r.a.createElement("textarea",{className:"questionBox",placeholder:"Type question here...",onChange:a(n),value:n}),r.a.createElement("div",null,r.a.createElement("button",{style:{marginTop:"15px",backgroundColor:"#121212"},className:"link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-gray",type:"submit",onClick:s},"Add a question "))))},g=function(e){var t=e.userInput,a=e.setUser;return r.a.createElement("div",{className:"f3 tc"},r.a.createElement("header",null,r.a.createElement("p",{className:"siteName"}," NotStackOverflow")),r.a.createElement("div",{className:"ba bw3 br3 borderUser"},r.a.createElement("p",{style:{fontFamily:"'Roboto', sans-serif"}}," Enter username "),r.a.createElement("input",{type:"text",placeholder:"...",onChange:t,className:"pa3 ba b--green bg- ",style:{borderRadius:"15px",backgroundColor:"#121212",color:"#AAA9A7",width:"50%"}}),r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-gray",style:{marginTop:"15px",backgroundColor:"#121212"}},"Login"))))},v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).userInput=function(e){n.setState({username:e.target.value})},n.setUser=function(){n.state.username.length>0&&n.setState({hasUsername:!0})},n.inputQuestion=function(e){return function(e){n.setState({question:e.target.value})}},n.addQuestion=function(){if(n.state.question.length>0){var e={threadQuestion:n.state.question,threadComments:[],id:1+Math.random(),comment:""},t=Object(i.a)(n.state.existingThreads);t.push(e),n.setState({question:"",existingThreads:t},(function(){console.log(n.state.existingThreads)}))}},n.inputComment=function(e){return function(t){for(var a=Object(i.a)(n.state.existingThreads),r=0;r<a.length;r++)if(e===a[r].id){a[r].comment=t.target.value;break}n.setState({existingThreads_renew:a})}},n.addComment=function(e){var t={commText:e.comment.slice(),id:1+Math.random()};if(t.commText.length>0){for(var a=Object(i.a)(n.state.existingThreads),r=0;r<a.length;r++)if(e.id===a[r].id){a[r].threadComments.push(t),a[r].comment="",console.log("Thread has new comm",a[r]);break}n.setState({existingThreads_renew:a}),console.log("ThreadComms",e.threadComments)}},n.onSave=function(e){},n.state={hasUsername:!1,username:"",question:"",existingThreads:[],comment:""},n}return Object(m.a)(a,[{key:"render",value:function(){return!0===this.state.hasUsername?r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("p",{className:"siteName"}," NotStackOverflow")),r.a.createElement(p,{username:this.state.username,inputQuestion:this.inputQuestion,question:this.state.question,addQuestion:this.addQuestion}),r.a.createElement(h,{existingThreads:this.state.existingThreads,onSave:this.onSave,inputComment:this.inputComment,addComment:this.addComment})):r.a.createElement(g,{userInput:this.userInput,setUser:this.setUser})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.07368d31.chunk.js.map