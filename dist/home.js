"use strict";function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach(function(e){define(t,e,function(t){return this._invoke(e,t)})})}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){invoke("next",t,i,a)},function(t){invoke("throw",t,i,a)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return invoke("throw",t,i,a)})}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e(function(e,r){invoke(t,n,e,r)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator["return"]&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,function(){return this}),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,function(){return this}),define(g,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},"catch":function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}window.addEventListener("DOMContentLoaded",verifyUserLogin);document.querySelector(".save-task").addEventListener("click",saveTask);document.querySelector(".userIcon").addEventListener("click",renderAvatarInput);function saveTask(){return _saveTask.apply(this,arguments)}function _saveTask(){_saveTask=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(){var userEmail,taskName,taskDescription;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:userEmail=localStorage.getItem("email");taskName=document.querySelector("#task-name").value.trim();taskDescription=document.querySelector("#task-description").value.trim();if(!(taskName===null||taskName==="")){_context.next=6;break}renderErrorMessage("Empty field.","Task name must be filled.");return _context.abrupt("return");case 6:fetch("http://localhost:8080/api/task/save",{method:"POST",body:JSON.stringify({name:taskName,description:taskDescription,userEmail:userEmail,completed:false}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(function(response){if(response.status===200){clearForm();createTaskCard(taskName,taskDescription,false);return}if(response.status===409){renderErrorMessage("Conflict.","You can't create more than 1 task with same name.");return}renderErrorMessage("Server error.","Occurred an error in server. code: "+response.status)});case 7:case"end":return _context.stop()}},_callee)}));return _saveTask.apply(this,arguments)}function clearForm(){document.querySelector("#task-name").value="";document.querySelector("#task-description").value=""}function renderErrorMessage(title,text){Swal.fire({title:title,text:text,icon:"error",background:"#322e2e",color:"white"})}function verifyUserLogin(){return _verifyUserLogin.apply(this,arguments)}function _verifyUserLogin(){_verifyUserLogin=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(){var email,isValidEmail;return _regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:email=localStorage.getItem("email");_context2.next=3;return verifyIfEmailIsRegistered(email);case 3:isValidEmail=_context2.sent;if(email==""||email==null||!isValidEmail){localStorage.removeItem("email");window.location.href="/html/login.html"}startApplication(email);case 6:case"end":return _context2.stop()}},_callee2)}));return _verifyUserLogin.apply(this,arguments)}function verifyIfEmailIsRegistered(_x){return _verifyIfEmailIsRegistered.apply(this,arguments)}function _verifyIfEmailIsRegistered(){_verifyIfEmailIsRegistered=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(email){return _regeneratorRuntime().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",fetch("http://localhost:8080/api/user/verifyEmail?email="+email).then(function(response){if(response.status===404)return false;else if(response.status===200)return true;renderErrorMessage("Server error.","Code: "+response.status);return false}));case 1:case"end":return _context3.stop()}},_callee3)}));return _verifyIfEmailIsRegistered.apply(this,arguments)}function quitUser(){Swal.fire({title:"Are you sure you want to leave?",text:"You only will need do login again.",icon:"warning",showCancelButton:true,cancelButtonColor:"#d33",confirmButtonColor:"#3085d6",confirmButtonText:"Yes",cancelButtonText:"Cancel",background:"#322e2e",color:"white"}).then(function(result){if(result.isConfirmed){localStorage.removeItem("email");window.location.href="/html/login.html"}})}function startApplication(email){setUserName(email);getTasksAndRender(email);setUserAvatar(email);setInterval(function(){document.getElementById("loader").style.display="none";document.querySelector(".loading").style.display="none"},450)}function setUserAvatar(_x2){return _setUserAvatar.apply(this,arguments)}function _setUserAvatar(){_setUserAvatar=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(email){var avatar;return _regeneratorRuntime().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:if(!(localStorage.getItem("avatar")===null||localStorage.getItem("avatar")==="")){_context4.next=3;break}_context4.next=3;return getUserAvatarAndSaveInLocalStorage(email);case 3:avatar=localStorage.getItem("avatar");console.log("Avatar: "+avatar);document.querySelector(".userIcon").src=avatar;case 6:case"end":return _context4.stop()}},_callee4)}));return _setUserAvatar.apply(this,arguments)}function renderAvatarInput(){Swal.fire({title:"Enter the url to your avatar picture.",text:"For the moment we only accept url to online images.",input:"text",background:"#322e2e",showCancelButton:true,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",color:"white",inputAttributes:{autocapitalize:"off"}}).then(function(result){if(result.isConfirmed){var url=result.value;console.log("avatar: "+url);fetch("http://localhost:8080/api/user/avatar",{method:"PATCH",body:JSON.stringify({email:localStorage.getItem("email"),avatar:localStorage.getItem("avatar")}),headers:{"Content-type":"application/json; charset=UTF-8"}});localStorage.setItem("avatar",url)}})}function getUserAvatarAndSaveInLocalStorage(_x3){return _getUserAvatarAndSaveInLocalStorage.apply(this,arguments)}function _getUserAvatarAndSaveInLocalStorage(){_getUserAvatarAndSaveInLocalStorage=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(email){var response,data;return _regeneratorRuntime().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:_context5.prev=0;_context5.next=3;return fetch("http://localhost:8080/api/user/avatar?email="+email);case 3:response=_context5.sent;if(response.ok){_context5.next=6;break}throw new Error("An error occurred. code: "+response.status);case 6:_context5.next=8;return response.text();case 8:data=_context5.sent;// Obtém o corpo da resposta como texto
localStorage.setItem("avatar",data);// Salva o avatar no localStorage
_context5.next=15;break;case 12:_context5.prev=12;_context5.t0=_context5["catch"](0);console.error(_context5.t0);case 15:case"end":return _context5.stop()}},_callee5,null,[[0,12]])}));return _getUserAvatarAndSaveInLocalStorage.apply(this,arguments)}function deleteTask(event){Swal.fire({title:"Are you sure you want delete this?",text:"This is irreversible.",icon:"warning",showCancelButton:true,cancelButtonColor:"#3085d6",confirmButtonColor:"#d33",confirmButtonText:"Delete",cancelButtonText:"Cancel",background:"#322e2e",color:"white"}).then(function(result){if(result.isConfirmed){var taskName=event.target.parentNode.querySelector(".task-secondary-camp").querySelector("h1").textContent;var taskDescription=event.target.parentNode.querySelector(".task-secondary-camp").querySelector("p").textContent;removeTaskOfDatabase(taskName,taskDescription,false);event.target.parentNode.remove()}})}function removeTaskOfDatabase(_x4,_x5,_x6){return _removeTaskOfDatabase.apply(this,arguments)}function _removeTaskOfDatabase(){_removeTaskOfDatabase=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(taskName,taskDescription,taskCompleted){var email,url;return _regeneratorRuntime().wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:email=localStorage.getItem("email");url="http://localhost:8080/api/task/delete";fetch(url,{method:"DELETE",headers:{"Content-Type":"application/json"},// Corpo da requisição, se necessário
body:JSON.stringify({name:taskName,description:taskDescription,completed:taskCompleted,userEmail:email})}).then(function(response){if(!response.ok)throw new Error("An error occurred. code: "+response.status)});case 3:case"end":return _context6.stop()}},_callee6)}));return _removeTaskOfDatabase.apply(this,arguments)}function setUserName(email){fetch("http://localhost:8080/api/user/name/".concat(email)).then(function(response){if(!response.ok){throw new Error("Network response was not ok")}return response.json()}).then(function(data){document.querySelector(".userNameCamp").textContent=data.name.split(" ")[0]})["catch"](function(error){console.error("There was a problem with your fetch operation:",error)})}function getTasksAndRender(email){fetch("http://localhost:8080/api/task/".concat(email)).then(function(response){if(!response.ok){throw new Error("Network response was not ok")}return response.json()}).then(function(data){renderTasks(data)})["catch"](function(error){console.error("There was a problem with your fetch operation:",error)})}function createTaskCard(name,description,completed){if(description===null||description==="")description=name;var tasks=document.querySelector(".tasks");var taskSeparator=document.createElement("section");taskSeparator.classList.add("task-secondary-camp");var taskCard=document.createElement("span");taskCard.classList.add("task-card");var taskName=document.createElement("h1");taskName.innerText=name;taskName.classList.add("task-title");var taskDescription=document.createElement("p");taskDescription.innerText=description;taskDescription.classList.add("task-description");var binImage=document.createElement("img");binImage.src="/images/bin.png";binImage.classList.add("bin-icon");binImage.addEventListener("click",deleteTask);taskSeparator.append(taskName,taskDescription);taskCard.append(taskSeparator,binImage);tasks.append(taskCard)}function renderTasks(tasks){tasks.forEach(function(task){createTaskCard(task.taskName,task.description)})}function showModal(errorMessage){document.getElementById("errorMessage").innerText=errorMessage;document.getElementById("errorModal").style.display="block"}function closeModal(){document.getElementById("errorModal").style.display="none";canSendRequest=true}document.querySelector(".quitButton").addEventListener("click",quitUser);