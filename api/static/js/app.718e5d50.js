(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},3306:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("notes_list"),n("v-container",[n("v-btn",{on:{click:t.new_note}},[t._v(" Add new note ")])],1)],1)},a=[],c=n("5530"),s=n("2f62"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",t._l(t.$store.state.notes_ids,(function(t){return n("note",{key:t,attrs:{note_id:t}})})),1)],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-card",[n("v-card-title",[n("v-text-field",{on:{keydown:function(e){t.changed=!0}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-card-text",[n("v-textarea",{on:{keydown:function(e){t.changed=!0}},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),n("v-card-actions",[n("v-row",{attrs:{justify:"end"}},[t.changed?n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"success"},on:{click:t.save_changes}},[t._v(" save changes ")])],1):t._e(),t.changed?n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"warning"},on:{click:t.discard_changes}},[t._v(" discard changes ")])],1):t._e(),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"error"},on:{click:t.delete_note}},[t._v(" delete note")])],1)],1)],1)],1)],1)],1)},d=[],f=(n("a434"),{name:"note",props:["note_id"],data:function(){return{title:"",body:"",tags:[],changed:!1}},computed:Object(c["a"])({},Object(s["c"])(["get_note"])),mounted:function(){var t=this.get_note(this.note_id);this.title=t["title"],this.body=t["body"],this.tags=t["tags"]},methods:{save_changes:function(){var t=this.$store.dispatch("update_note",{note_id:this.note_id,title:this.title,tags:this.tags,body:this.body});if("err"==t)return this.discard_changes(),void console.log("some error appeared");this.changed=!1},discard_changes:function(){var t=this.get_note(this.note_id);this.title=t["title"],this.body=t["body"],this.tags=t["tags"],this.changed=!1},delete_tag:function(t){this.tags.splice(t,1),this.changed=!0},new_tag:function(){this.tags},delete_note:function(){this.$store.dispatch("delete_note",this.note_id)}}}),_=f,p=(n("cb93"),n("2877")),h=Object(p["a"])(_,l,d,!1,null,null,null),v=h.exports,b={name:"notes_list",components:{note:v},methods:{}},g=b,m=Object(p["a"])(g,i,u,!1,null,null,null),y=m.exports,O={name:"App",components:{notes_list:y},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["load_notes","add_new_note"])),{},{new_note:function(){this.add_new_note()}}),created:function(){this.load_notes()}},w=O,E=(n("034f"),Object(p["a"])(w,o,a,!1,null,null,null)),j=E.exports,x=(n("99af"),n("b64b"),n("96cf"),n("1da1")),k=n("b85c"),T=n("bc3a"),D=n.n(T);r["default"].use(s["a"]);var N=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVER_URL||"http://localhost:5000",R=new s["a"].Store({state:{server_url:N,notes:{},notes_ids:[]},getters:{get_note:function(t){return function(e){return t.notes[e]}}},mutations:{LOADED_NOTES:function(t,e){t.notes=e,t.notes_ids=Object.keys(e)},UPDATE_NOTE:function(t,e){t.notes[e["note_id"]]={title:e["title"],body:e["body"],tags:e["tags"]}},DELETE_NOTE:function(t,e){delete t.notes[e];var n,r=0,o=Object(k["a"])(t.notes_ids);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(t.notes_ids[a]==e){r=a;break}}}catch(c){o.e(c)}finally{o.f()}t.notes_ids.splice(r,1)},ADD_NEW_NOTE:function(t,e){t.notes[e]={title:"",body:""},t.notes_ids.push(e)}},actions:{load_notes:function(t){return Object(x["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,e.next=3,D.a.get("".concat(n.server_url,"/notes"));case 3:o=e.sent,a=o["data"],r("LOADED_NOTES",a);case 6:case"end":return e.stop()}}),e)})))()},update_note:function(t,e){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,o=t.commit,n.next=3,D.a.put("".concat(r.server_url,"/notes/").concat(e["note_id"]),{title:e["title"],body:e["body"],tags:e["tags"]});case 3:if(a=n.sent,"ok"==a.data){n.next=7;break}return console.log(a),n.abrupt("return","err");case 7:o("UPDATE_NOTE",e);case 8:case"end":return n.stop()}}),n)})))()},delete_note:function(t,e){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,o=t.commit,n.next=3,D.a.delete("".concat(r.server_url,"/notes/").concat(e));case 3:if(a=n.sent,"ok"==a.data){n.next=7;break}return console.log(a),n.abrupt("return","err");case 7:o("DELETE_NOTE",e);case 8:case"end":return n.stop()}}),n)})))()},add_new_note:function(t){return Object(x["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,e.next=3,D.a.post("".concat(n.server_url,"/notes"),{title:"",body:""});case 3:if(o=e.sent,a=o.data,console.log(a),"ok"==a.res){e.next=9;break}return console.log(o),e.abrupt("return","err");case 9:r("ADD_NEW_NOTE",a.id);case 10:case"end":return e.stop()}}),e)})))()}},modules:{}}),P=n("ce5b"),A=n.n(P);n("bf40");r["default"].use(A.a);var S=new A.a({});n("d5e8"),n("5363");r["default"].config.productionTip=!1,new r["default"]({store:R,vuetify:S,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){},cb93:function(t,e,n){"use strict";var r=n("3306"),o=n.n(r);o.a}});
//# sourceMappingURL=app.718e5d50.js.map