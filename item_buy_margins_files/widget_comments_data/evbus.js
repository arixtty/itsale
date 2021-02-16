﻿(window.webpackJsonp=window.webpackJsonp||[]).push([["evbus"],{MJEz:function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return m})),n.d(e,"tq",(function(){return y})),n.d(e,"processExecData",(function(){return u}));var r,a=n("4O8T"),o=n.n(a);!function(t){t.EV_GC_START="ev_gc_start",t.EV_GC_END="ev_gc_end",t.EV_PAUSED="ev_paused",t.EV_RESTARTED="ev_restarted",t.EV_NEW_HANDLER="ev_new_handler",t.EV_RM_HANDLER="ev_rm_handler",t.EV_TASK_START="ev_task_start"}(r||(r={}));var i=function(){function t(t){var e=this;void 0===t&&(t=function(){}),this._errorHandler=t,this._timerInterval=15,this._handlers=Object.create(null),this._emitter=new o.a,this._q=[],this.destroy=function(){e.pause(),clearInterval(e._gcTimer)},this.pause=function(){e._timer&&(clearTimeout(e._timer),e._timer=void 0,e._emitter.emit(r.EV_PAUSED))},this.restart=function(){e._timer||(e._next(),e._emitter.emit(r.EV_RESTARTED))},this.push=function(t){e._q.push(t),e.restart()},this.setHandler=function(t,n,a){void 0===a&&(a=!1),n.once=a,e._handlers[t]=n,e._emitter.emit(r.EV_NEW_HANDLER,t)},this.removeHandler=function(t){delete e._handlers[t],e._emitter.emit(r.EV_RM_HANDLER,t)},this._next()}return Object.defineProperty(t.prototype,"events",{get:function(){return this._emitter},enumerable:!0,configurable:!0}),t.migrate=function(e,n){void 0===n&&(n=function(){});var r=new t(n);return r.pause(),e&&e.destroy&&e._handlers&&e._q&&(e.destroy(),Object.keys(e._handlers).forEach((function(t){var n=e._handlers[t];r.setHandler(t,n,n.once)})),e._q.forEach((function(t){return r.push(t)}))),r.restart(),r},t.prototype.setupGc=function(e){this._gcTimer&&clearInterval(this._gcTimer),this._gcTimer=setInterval(this._gcTask.bind(this),e||t._gcDefaultInterval)},t.prototype._next=function(t){void 0===t&&(t=!1),this._timer=setTimeout(this._processNext.bind(this),t?0:this._timerInterval)},t.prototype._gcTask=function(){this.pause(),this._emitter.emit(r.EV_GC_START);var t=this._q.filter((function(t){return t.postponed}));this._q=this._q.filter((function(t){return!t.postponed})),this._emitter.emit(r.EV_GC_END,t),this.restart()},t.prototype._processNext=function(){var t=this,e=this._q.splice(0,1)[0];if(e){var n,a=this._handlers[e.selector];if((null==a?void 0:a.once)&&this.removeHandler(e.selector),!a)return e.postponed||(e.postponed=!0),this._q.push(e),void(this._timer&&this._next());this._emitter.emit(r.EV_TASK_START,e.selector),window._tqVerbose&&console.info("Running evbus task",e.selector);try{n=Promise.resolve(a(e))}catch(t){n=Promise.reject(t)}n.then((function(){t._next(!0)}),(function(n){t._errorHandler&&t._errorHandler(e,n),t._next(!0)}))}else this.pause()},t._gcDefaultInterval=5e3,t}(),s={click:1,mouseover:1,mouseout:1,keyup:1,keydown:1,change:1,paste:1},c=function(t){return function(e){var n;if(e.type===t&&e.target&&t&&(n=e.target.nodeType===Node.TEXT_NODE?e.target.parentNode:e.target,r=n,!Object.keys(r).some((function(t){return t.startsWith("_react")||t.startsWith("__react")}))&&n.dataset)){var r,a=n.dataset["task"+(t.toUpperCase()[0]+t.slice(1))];if(!a){if("click"!==e.type)return;var o=n.closest("[data-task-click]");if(!o)return;n=o,a=o.dataset["task"+(t.toUpperCase()[0]+t.slice(1))]}return a&&(g().push({selector:a,payload:{dataAttrs:n.dataset,event:e},postponed:!1,createTime:Date.now()}),n.dataset.prevent)?(e.preventDefault(),!1):void 0}}},u=function(t,e){var n={};try{n=JSON.parse(t)}catch(e){console.error("Failed to parse JSON: ",t)}for(var r in n)n.hasOwnProperty(r)&&q().push({selector:r,payload:{target:e,data:n[r]},postponed:!1,createTime:Date.now()})},d=function(t,e){if(t.matches("[data-exec]")){if(null==e?void 0:e.has(t))return;null==e||e.add(t),u(t.dataset.exec||"{}",t),t.removeAttribute("data-exec")}},_=n("HLtZ"),l=function(t,e){var n={message:"Task execution error",data:{taskName:t.selector,type:void 0===t.payload.dataAttrs?"startup_task":"interactive_task",params:JSON.stringify(void 0===t.payload.dataAttrs?t.payload.data:t.payload.dataAttrs)}};Object(_.logError)(e,{environment:"task_queue",breadcrumb:n}),console.error(e)},f=function(){if(!document.head)throw new Error("Document must be loaded before queue init");return document.head},v=function(t){document.addEventListener("DOMContentLoaded",t),"interactive"!==document.readyState&&"complete"!==document.readyState||t()},p=function(){return v((function(){!function(t,e){for(var n in e)e.hasOwnProperty(n)&&t.removeEventListener(n,e[n])}(document.body,f()._tqhl),f()._tqhl=function(t){var e={};for(var n in s)if(s.hasOwnProperty(n)){var r=c(n);t.addEventListener(n,r),e[n]=r}return e}(document.body)}))},h=function(){var t=f();t._tqs=new i(l),t._tqi=new i(l),p(),t._tq={setInteractiveHandler:function(e,n,r){return void 0===r&&(r=!1),t._tqi.setHandler(e,n,r)},setStartupHandler:function(e,n,r){void 0===r&&(r=!1),t._tqs.setHandler(e,n,r),v((function(){t._tqs.setupGc(),t._tqs.restart()}))}},v((function(){t._tqi.setupGc(),window._obs=new MutationObserver((function(t){for(var e=new Set,n=0,r=t;n<r.length;n++)for(var a=0,o=r[n].addedNodes;a<o.length;a++){var i=o[a];if(i instanceof HTMLElement||i instanceof SVGElement){d(i,e);for(var s=0,c=i.querySelectorAll("[data-exec]");s<c.length;s++){var u=c[s];(u instanceof HTMLElement||u instanceof SVGElement)&&d(u,e)}}}})),window._obs.observe(document,{subtree:!0,childList:!0,attributes:!0}),function(){for(var t=0,e=document.querySelectorAll("[data-exec]");t<e.length;t++){var n=e[t];(n instanceof HTMLElement||n instanceof SVGElement)&&d(n)}}()})),g().setHandler("Common/nav_go",(function(t){var e,n;(null===(e=t.payload.event)||void 0===e?void 0:e.target)&&window.nav.go(t.payload.event.target,t.payload.event,JSON.parse((null===(n=t.payload.dataAttrs)||void 0===n?void 0:n.options)||"{}"))}),!1)},m=function(){var t=f();t._tq?(t._tqi=i.migrate(t._tqi,l),t._tqs=i.migrate(t._tqs,l),p()):h()},E=function(t){return function(){var e=f();if(!e["_"+t])throw new Error(t+" not initialized");return e["_"+t]}},y=E("tq"),g=E("tqi"),q=E("tqs")}}]);try{stManager.done("cmodules/bundles/evbus.71c4db72a7544b2aa7b1.js")}catch(t){}