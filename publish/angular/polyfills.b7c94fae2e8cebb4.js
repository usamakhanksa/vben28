"use strict";(self.webpackChunkfandaqapp=self.webpackChunkfandaqapp||[]).push([[76429],{1253:(ye,De,Ze)=>{Ze(48332);const Ue=":";const He=function(r,...s){if(He.translate){const h=He.translate(r,s);r=h[0],s=h[1]}let u=ot(r[0],r.raw[0]);for(let h=1;h<r.length;h++)u+=s[h-1]+ot(r[h],r.raw[h]);return u},ht=":";function ot(r,s){return s.charAt(0)===ht?r.substring(function $e(r,s){for(let u=1,h=1;u<r.length;u++,h++)if("\\"===s[h])h++;else if(r[u]===Ue)return u;throw new Error(`Unterminated $localize metadata block in "${s}".`)}(r,s)+1):r}globalThis.$localize=He},48332:()=>{!function(e){const n=e.performance;function c(B){n&&n.mark&&n.mark(B)}function i(B,v){n&&n.measure&&n.measure(B,v)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function f(B){return a+B}const E=!0===e[f("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let g=(()=>{class B{static#e=this.__symbol__=f;static assertZonePatched(){if(e.Promise!==pe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=B.current;for(;t.parent;)t=t.parent;return t}static get current(){return J.zone}static get currentTask(){return Ee}static __load_patch(t,o,S=!1){if(pe.hasOwnProperty(t)){if(!S&&E)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const Z="Zone:"+t;c(Z),pe[t]=o(e,B,oe),i(Z,Z)}}get parent(){return this._parent}get name(){return this._name}constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new I(this,this._parent&&this._parent._zoneDelegate,o)}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const S=this._zoneDelegate.intercept(this,t,o),Z=this;return function(){return Z.runGuarded(S,this,arguments,o)}}run(t,o,S,Z){J={parent:J,zone:this};try{return this._zoneDelegate.invoke(this,t,o,S,Z)}finally{J=J.parent}}runGuarded(t,o=null,S,Z){J={parent:J,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,S,Z)}catch(se){if(this._zoneDelegate.handleError(this,se))throw se}}finally{J=J.parent}}runTask(t,o,S){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===z&&(t.type===le||t.type===C))return;const Z=t.state!=k;Z&&t._transitionTo(k,V),t.runCount++;const se=Ee;Ee=t,J={parent:J,zone:this};try{t.type==C&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,S)}catch(d){if(this._zoneDelegate.handleError(this,d))throw d}}finally{t.state!==z&&t.state!==p&&(t.type==le||t.data&&t.data.isPeriodic?Z&&t._transitionTo(V,k):(t.runCount=0,this._updateTaskCount(t,-1),Z&&t._transitionTo(z,k,z))),J=J.parent,Ee=se}}scheduleTask(t){if(t.zone&&t.zone!==this){let S=this;for(;S;){if(S===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);S=S.parent}}t._transitionTo(re,z);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(S){throw t._transitionTo(p,re,z),this._zoneDelegate.handleError(this,S),S}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==re&&t._transitionTo(V,re),t}scheduleMicroTask(t,o,S,Z){return this.scheduleTask(new b($,t,o,S,Z,void 0))}scheduleMacroTask(t,o,S,Z,se){return this.scheduleTask(new b(C,t,o,S,Z,se))}scheduleEventTask(t,o,S,Z,se){return this.scheduleTask(new b(le,t,o,S,Z,se))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===V||t.state===k){t._transitionTo(q,V,k);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(p,q),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(z,q),t.runCount=0,t}}_updateTaskCount(t,o){const S=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let Z=0;Z<S.length;Z++)S[Z]._updateTaskCount(t.type,o)}}return B})();const N={name:"",onHasTask:(B,v,t,o)=>B.hasTask(t,o),onScheduleTask:(B,v,t,o)=>B.scheduleTask(t,o),onInvokeTask:(B,v,t,o,S,Z)=>B.invokeTask(t,o,S,Z),onCancelTask:(B,v,t,o)=>B.cancelTask(t,o)};class I{constructor(v,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=v,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const S=o&&o.onHasTask;(S||t&&t._hasTaskZS)&&(this._hasTaskZS=S?o:N,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=v,o.onScheduleTask||(this._scheduleTaskZS=N,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=N,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=N,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(v,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,v,t):new g(v,t)}intercept(v,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,v,t,o):t}invoke(v,t,o,S,Z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,v,t,o,S,Z):t.apply(o,S)}handleError(v,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,v,t)}scheduleTask(v,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,v,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=$)throw new Error("Task is missing scheduleFn.");D(t)}return o}invokeTask(v,t,o,S){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,v,t,o,S):t.callback.apply(o,S)}cancelTask(v,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,v,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(v,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,v,t)}catch(o){this.handleError(v,o)}}_updateTaskCount(v,t){const o=this._taskCounts,S=o[v],Z=o[v]=S+t;if(Z<0)throw new Error("More tasks executed then were scheduled.");0!=S&&0!=Z||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:v})}}class b{constructor(v,t,o,S,Z,se){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=v,this.source=t,this.data=S,this.scheduleFn=Z,this.cancelFn=se,!o)throw new Error("callback is not defined");this.callback=o;const d=this;this.invoke=v===le&&S&&S.useG?b.invokeTask:function(){return b.invokeTask.call(e,d,this,arguments)}}static invokeTask(v,t,o){v||(v=this),ue++;try{return v.runCount++,v.zone.runTask(v,t,o)}finally{1==ue&&y(),ue--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(z,re)}_transitionTo(v,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${v}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=v,v==z&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const H=f("setTimeout"),x=f("Promise"),j=f("then");let ae,K=[],G=!1;function te(B){if(ae||e[x]&&(ae=e[x].resolve(0)),ae){let v=ae[j];v||(v=ae.then),v.call(ae,B)}else e[H](B,0)}function D(B){0===ue&&0===K.length&&te(y),B&&K.push(B)}function y(){if(!G){for(G=!0;K.length;){const B=K;K=[];for(let v=0;v<B.length;v++){const t=B[v];try{t.zone.runTask(t,null,null)}catch(o){oe.onUnhandledError(o)}}}oe.microtaskDrainDone(),G=!1}}const ce={name:"NO ZONE"},z="notScheduled",re="scheduling",V="scheduled",k="running",q="canceling",p="unknown",$="microTask",C="macroTask",le="eventTask",pe={},oe={symbol:f,currentZoneFrame:()=>J,onUnhandledError:Q,microtaskDrainDone:Q,scheduleMicroTask:D,showUncaughtError:()=>!g[f("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Q,patchMethod:()=>Q,bindArguments:()=>[],patchThen:()=>Q,patchMacroTask:()=>Q,patchEventPrototype:()=>Q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Q,wrapWithCurrentZone:()=>Q,filterProperties:()=>[],attachOriginToPatched:()=>Q,_redefineProperty:()=>Q,patchCallbacks:()=>Q,nativeScheduleMicroTask:te};let J={parent:null,zone:new g(null,null)},Ee=null,ue=0;function Q(){}i("Zone","Zone"),e.Zone=g}(globalThis);const ye=Object.getOwnPropertyDescriptor,De=Object.defineProperty,Ze=Object.getPrototypeOf,et=Object.create,Ue=Array.prototype.slice,Ve="addEventListener",Me="removeEventListener",Ge=Zone.__symbol__(Ve),ve=Zone.__symbol__(Me),ge="true",_e="false",Le=Zone.__symbol__("");function ze(e,n){return Zone.current.wrap(e,n)}function Fe(e,n,c,i,a){return Zone.current.scheduleMacroTask(e,n,c,i,a)}const U=Zone.__symbol__,Ae=typeof window<"u",be=Ae?window:void 0,ne=Ae&&be||globalThis,Ie="removeAttribute";function We(e,n){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=ze(e[c],n+"_"+c));return e}function qe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Xe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in ne)&&typeof ne.process<"u"&&"[object process]"==={}.toString.call(ne.process),Ne=!Se&&!Xe&&!(!Ae||!be.HTMLElement),ke=typeof ne.process<"u"&&"[object process]"==={}.toString.call(ne.process)&&!Xe&&!(!Ae||!be.HTMLElement),xe={},je=function(e){if(!(e=e||ne.event))return;let n=xe[e.type];n||(n=xe[e.type]=U("ON_PROPERTY"+e.type));const c=this||e.target||ne,i=c[n];let a;return Ne&&c===be&&"error"===e.type?(a=i&&i.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=i&&i.apply(this,arguments),null!=a&&!a&&e.preventDefault()),a};function nt(e,n,c){let i=ye(e,n);if(!i&&c&&ye(c,n)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;const a=U("on"+n+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete i.writable,delete i.value;const f=i.get,E=i.set,g=n.slice(2);let N=xe[g];N||(N=xe[g]=U("ON_PROPERTY"+g)),i.set=function(I){let b=this;!b&&e===ne&&(b=ne),b&&("function"==typeof b[N]&&b.removeEventListener(g,je),E&&E.call(b,null),b[N]=I,"function"==typeof I&&b.addEventListener(g,je,!1))},i.get=function(){let I=this;if(!I&&e===ne&&(I=ne),!I)return null;const b=I[N];if(b)return b;if(f){let H=f.call(this);if(H)return i.set.call(this,H),"function"==typeof I[Ie]&&I.removeAttribute(n),H}return null},De(e,n,i),e[a]=!0}function Ye(e,n,c){if(n)for(let i=0;i<n.length;i++)nt(e,"on"+n[i],c);else{const i=[];for(const a in e)"on"==a.slice(0,2)&&i.push(a);for(let a=0;a<i.length;a++)nt(e,i[a],c)}}const fe=U("originalInstance");function Ce(e){const n=ne[e];if(!n)return;ne[U(e)]=n,ne[e]=function(){const a=We(arguments,e);switch(a.length){case 0:this[fe]=new n;break;case 1:this[fe]=new n(a[0]);break;case 2:this[fe]=new n(a[0],a[1]);break;case 3:this[fe]=new n(a[0],a[1],a[2]);break;case 4:this[fe]=new n(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},de(ne[e],n);const c=new n(function(){});let i;for(i in c)"XMLHttpRequest"===e&&"responseBlob"===i||function(a){"function"==typeof c[a]?ne[e].prototype[a]=function(){return this[fe][a].apply(this[fe],arguments)}:De(ne[e].prototype,a,{set:function(f){"function"==typeof f?(this[fe][a]=ze(f,e+"."+a),de(this[fe][a],f)):this[fe][a]=f},get:function(){return this[fe][a]}})}(i);for(i in n)"prototype"!==i&&n.hasOwnProperty(i)&&(ne[e][i]=n[i])}function Te(e,n,c){let i=e;for(;i&&!i.hasOwnProperty(n);)i=Ze(i);!i&&e[n]&&(i=e);const a=U(n);let f=null;if(i&&(!(f=i[a])||!i.hasOwnProperty(a))&&(f=i[a]=i[n],qe(i&&ye(i,n)))){const g=c(f,a,n);i[n]=function(){return g(this,arguments)},de(i[n],f)}return f}function it(e,n,c){let i=null;function a(f){const E=f.data;return E.args[E.cbIdx]=function(){f.invoke.apply(this,arguments)},i.apply(E.target,E.args),f}i=Te(e,n,f=>function(E,g){const N=c(E,g);return N.cbIdx>=0&&"function"==typeof g[N.cbIdx]?Fe(N.name,g[N.cbIdx],N,a):f.apply(E,g)})}function de(e,n){e[U("OriginalDelegate")]=n}let rt=!1,$e=!1;function Tt(){if(rt)return $e;rt=!0;try{const e=be.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&($e=!0)}catch{}return $e}Zone.__load_patch("ZoneAwarePromise",(e,n,c)=>{const i=Object.getOwnPropertyDescriptor,a=Object.defineProperty,E=c.symbol,g=[],N=!1!==e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],I=E("Promise"),b=E("then"),H="__creationTrace__";c.onUnhandledError=d=>{if(c.showUncaughtError()){const _=d&&d.rejection;_?console.error("Unhandled Promise rejection:",_ instanceof Error?_.message:_,"; Zone:",d.zone.name,"; Task:",d.task&&d.task.source,"; Value:",_,_ instanceof Error?_.stack:void 0):console.error(d)}},c.microtaskDrainDone=()=>{for(;g.length;){const d=g.shift();try{d.zone.runGuarded(()=>{throw d.throwOriginal?d.rejection:d})}catch(_){j(_)}}};const x=E("unhandledPromiseRejectionHandler");function j(d){c.onUnhandledError(d);try{const _=n[x];"function"==typeof _&&_.call(this,d)}catch{}}function K(d){return d&&d.then}function G(d){return d}function ae(d){return t.reject(d)}const te=E("state"),D=E("value"),y=E("finally"),ce=E("parentPromiseValue"),z=E("parentPromiseState"),re="Promise.then",V=null,k=!0,q=!1,p=0;function $(d,_){return l=>{try{oe(d,_,l)}catch(T){oe(d,!1,T)}}}const C=function(){let d=!1;return function(l){return function(){d||(d=!0,l.apply(null,arguments))}}},le="Promise resolved with itself",pe=E("currentTaskTrace");function oe(d,_,l){const T=C();if(d===l)throw new TypeError(le);if(d[te]===V){let R=null;try{("object"==typeof l||"function"==typeof l)&&(R=l&&l.then)}catch(O){return T(()=>{oe(d,!1,O)})(),d}if(_!==q&&l instanceof t&&l.hasOwnProperty(te)&&l.hasOwnProperty(D)&&l[te]!==V)Ee(l),oe(d,l[te],l[D]);else if(_!==q&&"function"==typeof R)try{R.call(l,T($(d,_)),T($(d,!1)))}catch(O){T(()=>{oe(d,!1,O)})()}else{d[te]=_;const O=d[D];if(d[D]=l,d[y]===y&&_===k&&(d[te]=d[z],d[D]=d[ce]),_===q&&l instanceof Error){const P=n.currentTask&&n.currentTask.data&&n.currentTask.data[H];P&&a(l,pe,{configurable:!0,enumerable:!1,writable:!0,value:P})}for(let P=0;P<O.length;)ue(d,O[P++],O[P++],O[P++],O[P++]);if(0==O.length&&_==q){d[te]=p;let P=l;try{throw new Error("Uncaught (in promise): "+function f(d){return d&&d.toString===Object.prototype.toString?(d.constructor&&d.constructor.name||"")+": "+JSON.stringify(d):d?d.toString():Object.prototype.toString.call(d)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(M){P=M}N&&(P.throwOriginal=!0),P.rejection=l,P.promise=d,P.zone=n.current,P.task=n.currentTask,g.push(P),c.scheduleMicroTask()}}}return d}const J=E("rejectionHandledHandler");function Ee(d){if(d[te]===p){try{const _=n[J];_&&"function"==typeof _&&_.call(this,{rejection:d[D],promise:d})}catch{}d[te]=q;for(let _=0;_<g.length;_++)d===g[_].promise&&g.splice(_,1)}}function ue(d,_,l,T,R){Ee(d);const O=d[te],P=O?"function"==typeof T?T:G:"function"==typeof R?R:ae;_.scheduleMicroTask(re,()=>{try{const M=d[D],L=!!l&&y===l[y];L&&(l[ce]=M,l[z]=O);const A=_.run(P,void 0,L&&P!==ae&&P!==G?[]:[M]);oe(l,!0,A)}catch(M){oe(l,!1,M)}},l)}const B=function(){},v=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(_){return oe(new this(null),k,_)}static reject(_){return oe(new this(null),q,_)}static any(_){if(!_||"function"!=typeof _[Symbol.iterator])return Promise.reject(new v([],"All promises were rejected"));const l=[];let T=0;try{for(let P of _)T++,l.push(t.resolve(P))}catch{return Promise.reject(new v([],"All promises were rejected"))}if(0===T)return Promise.reject(new v([],"All promises were rejected"));let R=!1;const O=[];return new t((P,M)=>{for(let L=0;L<l.length;L++)l[L].then(A=>{R||(R=!0,P(A))},A=>{O.push(A),T--,0===T&&(R=!0,M(new v(O,"All promises were rejected")))})})}static race(_){let l,T,R=new this((M,L)=>{l=M,T=L});function O(M){l(M)}function P(M){T(M)}for(let M of _)K(M)||(M=this.resolve(M)),M.then(O,P);return R}static all(_){return t.allWithCallback(_)}static allSettled(_){return(this&&this.prototype instanceof t?this:t).allWithCallback(_,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(_,l){let T,R,O=new this((A,X)=>{T=A,R=X}),P=2,M=0;const L=[];for(let A of _){K(A)||(A=this.resolve(A));const X=M;try{A.then(Y=>{L[X]=l?l.thenCallback(Y):Y,P--,0===P&&T(L)},Y=>{l?(L[X]=l.errorCallback(Y),P--,0===P&&T(L)):R(Y)})}catch(Y){R(Y)}P++,M++}return P-=2,0===P&&T(L),O}constructor(_){const l=this;if(!(l instanceof t))throw new Error("Must be an instanceof Promise.");l[te]=V,l[D]=[];try{const T=C();_&&_(T($(l,k)),T($(l,q)))}catch(T){oe(l,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(_,l){let T=this.constructor?.[Symbol.species];(!T||"function"!=typeof T)&&(T=this.constructor||t);const R=new T(B),O=n.current;return this[te]==V?this[D].push(O,R,_,l):ue(this,O,R,_,l),R}catch(_){return this.then(null,_)}finally(_){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=t);const T=new l(B);T[y]=y;const R=n.current;return this[te]==V?this[D].push(R,T,_,_):ue(this,R,T,_,_),T}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[I]=e.Promise;e.Promise=t;const S=E("thenPatched");function Z(d){const _=d.prototype,l=i(_,"then");if(l&&(!1===l.writable||!l.configurable))return;const T=_.then;_[b]=T,d.prototype.then=function(R,O){return new t((M,L)=>{T.call(this,M,L)}).then(R,O)},d[S]=!0}return c.patchThen=Z,o&&(Z(o),Te(e,"fetch",d=>function se(d){return function(_,l){let T=d.apply(_,l);if(T instanceof t)return T;let R=T.constructor;return R[S]||Z(R),T}}(d))),Promise[n.__symbol__("uncaughtPromiseErrors")]=g,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,c=U("OriginalDelegate"),i=U("Promise"),a=U("Error"),f=function(){if("function"==typeof this){const I=this[c];if(I)return"function"==typeof I?n.call(I):Object.prototype.toString.call(I);if(this===Promise){const b=e[i];if(b)return n.call(b)}if(this===Error){const b=e[a];if(b)return n.call(b)}}return n.call(this)};f[c]=n,Function.prototype.toString=f;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}});let we=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){we=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{we=!1}const at={useG:!0},he={},Ke={},Je=new RegExp("^"+Le+"(\\w+)(true|false)$"),lt=U("propagationStopped");function ut(e,n){const c=(n?n(e):e)+_e,i=(n?n(e):e)+ge,a=Le+c,f=Le+i;he[e]={},he[e][_e]=a,he[e][ge]=f}function ft(e,n,c,i){const a=i&&i.add||Ve,f=i&&i.rm||Me,E=i&&i.listeners||"eventListeners",g=i&&i.rmAll||"removeAllListeners",N=U(a),I="."+a+":",b="prependListener",H="."+b+":",x=function(D,y,ce){if(D.isRemoved)return;const z=D.callback;let re;"object"==typeof z&&z.handleEvent&&(D.callback=k=>z.handleEvent(k),D.originalDelegate=z);try{D.invoke(D,y,[ce])}catch(k){re=k}const V=D.options;return V&&"object"==typeof V&&V.once&&y[f].call(y,ce.type,D.originalDelegate?D.originalDelegate:D.callback,V),re};function j(D,y,ce){if(!(y=y||e.event))return;const z=D||y.target||e,re=z[he[y.type][ce?ge:_e]];if(re){const V=[];if(1===re.length){const k=x(re[0],z,y);k&&V.push(k)}else{const k=re.slice();for(let q=0;q<k.length&&(!y||!0!==y[lt]);q++){const p=x(k[q],z,y);p&&V.push(p)}}if(1===V.length)throw V[0];for(let k=0;k<V.length;k++){const q=V[k];n.nativeScheduleMicroTask(()=>{throw q})}}}const K=function(D){return j(this,D,!1)},G=function(D){return j(this,D,!0)};function ae(D,y){if(!D)return!1;let ce=!0;y&&void 0!==y.useG&&(ce=y.useG);const z=y&&y.vh;let re=!0;y&&void 0!==y.chkDup&&(re=y.chkDup);let V=!1;y&&void 0!==y.rt&&(V=y.rt);let k=D;for(;k&&!k.hasOwnProperty(a);)k=Ze(k);if(!k&&D[a]&&(k=D),!k||k[N])return!1;const q=y&&y.eventNameToString,p={},$=k[N]=k[a],C=k[U(f)]=k[f],le=k[U(E)]=k[E],pe=k[U(g)]=k[g];let oe;y&&y.prepend&&(oe=k[U(y.prepend)]=k[y.prepend]);const t=ce?function(l){if(!p.isExisting)return $.call(p.target,p.eventName,p.capture?G:K,p.options)}:function(l){return $.call(p.target,p.eventName,l.invoke,p.options)},o=ce?function(l){if(!l.isRemoved){const T=he[l.eventName];let R;T&&(R=T[l.capture?ge:_e]);const O=R&&l.target[R];if(O)for(let P=0;P<O.length;P++)if(O[P]===l){O.splice(P,1),l.isRemoved=!0,0===O.length&&(l.allRemoved=!0,l.target[R]=null);break}}if(l.allRemoved)return C.call(l.target,l.eventName,l.capture?G:K,l.options)}:function(l){return C.call(l.target,l.eventName,l.invoke,l.options)},Z=y&&y.diff?y.diff:function(l,T){const R=typeof T;return"function"===R&&l.callback===T||"object"===R&&l.originalDelegate===T},se=Zone[U("UNPATCHED_EVENTS")],d=e[U("PASSIVE_EVENTS")],_=function(l,T,R,O,P=!1,M=!1){return function(){const L=this||e;let A=arguments[0];y&&y.transferEventName&&(A=y.transferEventName(A));let X=arguments[1];if(!X)return l.apply(this,arguments);if(Se&&"uncaughtException"===A)return l.apply(this,arguments);let Y=!1;if("function"!=typeof X){if(!X.handleEvent)return l.apply(this,arguments);Y=!0}if(z&&!z(l,X,L,arguments))return;const Pe=we&&!!d&&-1!==d.indexOf(A),me=function J(l,T){return!we&&"object"==typeof l&&l?!!l.capture:we&&T?"boolean"==typeof l?{capture:l,passive:!0}:l?"object"==typeof l&&!1!==l.passive?{...l,passive:!0}:l:{passive:!0}:l}(arguments[2],Pe);if(se)for(let Oe=0;Oe<se.length;Oe++)if(A===se[Oe])return Pe?l.call(L,A,X,me):l.apply(this,arguments);const dt=!!me&&("boolean"==typeof me||me.capture),Et=!(!me||"object"!=typeof me)&&me.once,kt=Zone.current;let _t=he[A];_t||(ut(A,q),_t=he[A]);const gt=_t[dt?ge:_e];let st,Be=L[gt],pt=!1;if(Be){if(pt=!0,re)for(let Oe=0;Oe<Be.length;Oe++)if(Z(Be[Oe],X))return}else Be=L[gt]=[];const mt=L.constructor.name,yt=Ke[mt];yt&&(st=yt[A]),st||(st=mt+T+(q?q(A):A)),p.options=me,Et&&(p.options.once=!1),p.target=L,p.capture=dt,p.eventName=A,p.isExisting=pt;const Qe=ce?at:void 0;Qe&&(Qe.taskData=p);const Re=kt.scheduleEventTask(st,X,Qe,R,O);return p.target=null,Qe&&(Qe.taskData=null),Et&&(me.once=!0),!we&&"boolean"==typeof Re.options||(Re.options=me),Re.target=L,Re.capture=dt,Re.eventName=A,Y&&(Re.originalDelegate=X),M?Be.unshift(Re):Be.push(Re),P?L:void 0}};return k[a]=_($,I,t,o,V),oe&&(k[b]=_(oe,H,function(l){return oe.call(p.target,p.eventName,l.invoke,p.options)},o,V,!0)),k[f]=function(){const l=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=arguments[2],O=!!R&&("boolean"==typeof R||R.capture),P=arguments[1];if(!P)return C.apply(this,arguments);if(z&&!z(C,P,l,arguments))return;const M=he[T];let L;M&&(L=M[O?ge:_e]);const A=L&&l[L];if(A)for(let X=0;X<A.length;X++){const Y=A[X];if(Z(Y,P))return A.splice(X,1),Y.isRemoved=!0,0===A.length&&(Y.allRemoved=!0,l[L]=null,"string"==typeof T)&&(l[Le+"ON_PROPERTY"+T]=null),Y.zone.cancelTask(Y),V?l:void 0}return C.apply(this,arguments)},k[E]=function(){const l=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=[],O=He(l,q?q(T):T);for(let P=0;P<O.length;P++){const M=O[P];R.push(M.originalDelegate?M.originalDelegate:M.callback)}return R},k[g]=function(){const l=this||e;let T=arguments[0];if(T){y&&y.transferEventName&&(T=y.transferEventName(T));const R=he[T];if(R){const M=l[R[_e]],L=l[R[ge]];if(M){const A=M.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}if(L){const A=L.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}}}else{const R=Object.keys(l);for(let O=0;O<R.length;O++){const M=Je.exec(R[O]);let L=M&&M[1];L&&"removeListener"!==L&&this[g].call(this,L)}this[g].call(this,"removeListener")}if(V)return this},de(k[a],$),de(k[f],C),pe&&de(k[g],pe),le&&de(k[E],le),!0}let te=[];for(let D=0;D<c.length;D++)te[D]=ae(c[D],i);return te}function He(e,n){if(!n){const f=[];for(let E in e){const g=Je.exec(E);let N=g&&g[1];if(N&&(!n||N===n)){const I=e[E];if(I)for(let b=0;b<I.length;b++)f.push(I[b])}}return f}let c=he[n];c||(ut(n),c=he[n]);const i=e[c[_e]],a=e[c[ge]];return i?a?i.concat(a):i.slice():a?a.slice():[]}function ht(e,n){const c=e.Event;c&&c.prototype&&n.patchMethod(c.prototype,"stopImmediatePropagation",i=>function(a,f){a[lt]=!0,i&&i.apply(a,f)})}function ot(e,n,c,i,a){const f=Zone.__symbol__(i);if(n[f])return;const E=n[f]=n[i];n[i]=function(g,N,I){return N&&N.prototype&&a.forEach(function(b){const H=`${c}.${i}::`+b,x=N.prototype;try{if(x.hasOwnProperty(b)){const j=e.ObjectGetOwnPropertyDescriptor(x,b);j&&j.value?(j.value=e.wrapWithCurrentZone(j.value,H),e._redefineProperty(N.prototype,b,j)):x[b]&&(x[b]=e.wrapWithCurrentZone(x[b],H))}else x[b]&&(x[b]=e.wrapWithCurrentZone(x[b],H))}catch{}}),E.call(n,g,N,I)},e.attachOriginToPatched(n[i],E)}function r(e,n,c){if(!c||0===c.length)return n;const i=c.filter(f=>f.target===e);if(!i||0===i.length)return n;const a=i[0].ignoreProperties;return n.filter(f=>-1===a.indexOf(f))}function s(e,n,c,i){e&&Ye(e,r(e,n,c),i)}function u(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,c)=>{const i=u(e);c.patchOnProperties=Ye,c.patchMethod=Te,c.bindArguments=We,c.patchMacroTask=it;const a=n.__symbol__("BLACK_LISTED_EVENTS"),f=n.__symbol__("UNPATCHED_EVENTS");e[f]&&(e[a]=e[f]),e[a]&&(n[a]=n[f]=e[a]),c.patchEventPrototype=ht,c.patchEventTarget=ft,c.isIEOrEdge=Tt,c.ObjectDefineProperty=De,c.ObjectGetOwnPropertyDescriptor=ye,c.ObjectCreate=et,c.ArraySlice=Ue,c.patchClass=Ce,c.wrapWithCurrentZone=ze,c.filterProperties=r,c.attachOriginToPatched=de,c._redefineProperty=Object.defineProperty,c.patchCallbacks=ot,c.getGlobalObjects=()=>({globalSources:Ke,zoneSymbolEventNames:he,eventNames:i,isBrowser:Ne,isMix:ke,isNode:Se,TRUE_STR:ge,FALSE_STR:_e,ZONE_SYMBOL_PREFIX:Le,ADD_EVENT_LISTENER_STR:Ve,REMOVE_EVENT_LISTENER_STR:Me})});const w=U("zoneTask");function ee(e,n,c,i){let a=null,f=null;c+=i;const E={};function g(I){const b=I.data;return b.args[0]=function(){return I.invoke.apply(this,arguments)},b.handleId=a.apply(e,b.args),I}function N(I){return f.call(e,I.data.handleId)}a=Te(e,n+=i,I=>function(b,H){if("function"==typeof H[0]){const x={isPeriodic:"Interval"===i,delay:"Timeout"===i||"Interval"===i?H[1]||0:void 0,args:H},j=H[0];H[0]=function(){try{return j.apply(this,arguments)}finally{x.isPeriodic||("number"==typeof x.handleId?delete E[x.handleId]:x.handleId&&(x.handleId[w]=null))}};const K=Fe(n,H[0],x,g,N);if(!K)return K;const G=K.data.handleId;return"number"==typeof G?E[G]=K:G&&(G[w]=K),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(K.ref=G.ref.bind(G),K.unref=G.unref.bind(G)),"number"==typeof G||G?G:K}return I.apply(e,H)}),f=Te(e,c,I=>function(b,H){const x=H[0];let j;"number"==typeof x?j=E[x]:(j=x&&x[w],j||(j=x)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof x?delete E[x]:x&&(x[w]=null),j.zone.cancelTask(j)):I.apply(e,H)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",c="clear";ee(e,n,c,"Timeout"),ee(e,n,c,"Interval"),ee(e,n,c,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ee(e,"request","cancel","AnimationFrame"),ee(e,"mozRequest","mozCancel","AnimationFrame"),ee(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const c=["alert","prompt","confirm"];for(let i=0;i<c.length;i++)Te(e,c[i],(f,E,g)=>function(N,I){return n.current.run(f,e,I,g)})}),Zone.__load_patch("EventTarget",(e,n,c)=>{(function ie(e,n){n.patchEventPrototype(e,n)})(e,c),function F(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:i,TRUE_STR:a,FALSE_STR:f,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let N=0;N<c.length;N++){const I=c[N],x=E+(I+f),j=E+(I+a);i[I]={},i[I][f]=x,i[I][a]=j}const g=e.EventTarget;g&&g.prototype&&n.patchEventTarget(e,n,[g&&g.prototype])}(e,c);const i=e.XMLHttpRequestEventTarget;i&&i.prototype&&c.patchEventTarget(e,c,[i.prototype])}),Zone.__load_patch("MutationObserver",(e,n,c)=>{Ce("MutationObserver"),Ce("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,c)=>{Ce("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,c)=>{Ce("FileReader")}),Zone.__load_patch("on_property",(e,n,c)=>{!function h(e,n){if(Se&&!ke||Zone[e.symbol("patchEvents")])return;const c=n.__Zone_ignore_on_properties;let i=[];if(Ne){const a=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const f=function ct(){try{const e=be.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];s(a,u(a),c&&c.concat(f),Ze(a))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<i.length;a++){const f=n[i[a]];f&&f.prototype&&s(f.prototype,u(f.prototype),c)}}(c,e)}),Zone.__load_patch("customElements",(e,n,c)=>{!function W(e,n){const{isBrowser:c,isMix:i}=n.getGlobalObjects();(c||i)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,c)}),Zone.__load_patch("XHR",(e,n)=>{!function N(I){const b=I.XMLHttpRequest;if(!b)return;const H=b.prototype;let j=H[Ge],K=H[ve];if(!j){const p=I.XMLHttpRequestEventTarget;if(p){const $=p.prototype;j=$[Ge],K=$[ve]}}const G="readystatechange",ae="scheduled";function te(p){const $=p.data,C=$.target;C[f]=!1,C[g]=!1;const le=C[a];j||(j=C[Ge],K=C[ve]),le&&K.call(C,G,le);const pe=C[a]=()=>{if(C.readyState===C.DONE)if(!$.aborted&&C[f]&&p.state===ae){const J=C[n.__symbol__("loadfalse")];if(0!==C.status&&J&&J.length>0){const Ee=p.invoke;p.invoke=function(){const ue=C[n.__symbol__("loadfalse")];for(let Q=0;Q<ue.length;Q++)ue[Q]===p&&ue.splice(Q,1);!$.aborted&&p.state===ae&&Ee.call(p)},J.push(p)}else p.invoke()}else!$.aborted&&!1===C[f]&&(C[g]=!0)};return j.call(C,G,pe),C[c]||(C[c]=p),k.apply(C,$.args),C[f]=!0,p}function D(){}function y(p){const $=p.data;return $.aborted=!0,q.apply($.target,$.args)}const ce=Te(H,"open",()=>function(p,$){return p[i]=0==$[2],p[E]=$[1],ce.apply(p,$)}),re=U("fetchTaskAborting"),V=U("fetchTaskScheduling"),k=Te(H,"send",()=>function(p,$){if(!0===n.current[V]||p[i])return k.apply(p,$);{const C={target:p,url:p[E],isPeriodic:!1,args:$,aborted:!1},le=Fe("XMLHttpRequest.send",D,C,te,y);p&&!0===p[g]&&!C.aborted&&le.state===ae&&le.invoke()}}),q=Te(H,"abort",()=>function(p,$){const C=function x(p){return p[c]}(p);if(C&&"string"==typeof C.type){if(null==C.cancelFn||C.data&&C.data.aborted)return;C.zone.cancelTask(C)}else if(!0===n.current[re])return q.apply(p,$)})}(e);const c=U("xhrTask"),i=U("xhrSync"),a=U("xhrListener"),f=U("xhrScheduled"),E=U("xhrURL"),g=U("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function tt(e,n){const c=e.constructor.name;for(let i=0;i<n.length;i++){const a=n[i],f=e[a];if(f){if(!qe(ye(e,a)))continue;e[a]=(g=>{const N=function(){return g.apply(this,We(arguments,c+"."+a))};return de(N,g),N})(f)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function c(i){return function(a){He(e,i).forEach(E=>{const g=e.PromiseRejectionEvent;if(g){const N=new g(i,{promise:a.promise,reason:a.rejection});E.invoke(N)}})}}e.PromiseRejectionEvent&&(n[U("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),n[U("rejectionHandledHandler")]=c("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,c)=>{!function m(e,n){n.patchMethod(e,"queueMicrotask",c=>function(i,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(e,c)})}},ye=>{ye(ye.s=1253)}]);