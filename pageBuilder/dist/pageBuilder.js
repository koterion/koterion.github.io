!function(e){var t={};function i(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=2)}([function(e,t,i){"use strict";(function(e){function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var i=0,s={editors:{},create:function(e,t){try{!function(e){if("undefined"==typeof tinymce)throw Error("PageBuilder: Didn't find tinymce. Please connect tinymce.");if(void 0===e||0===e.length)throw Error("PageBuilder: Didn't find selector");if(e.length>1)throw Error("PageBuilder: Please use individual selector, not more.\n        You use "+e.length+" selectors")}(e)}catch(e){return console.error(e.message),!1}var s=new n(e,t);return s._init(),this.editors[s.className+"_"+i]=s,i+=i,s},getContent:function(e){if(this.editors[e])return this.editors[e]._getContent();console.error("Didn't find plugin with id '".concat(e,"'"))},rebuild:function(e){this.editors[e]._rebuild()}},a={height:"500px",rowClasses:"first, sec, third",colClasses:"full",edit:!0,tinymceSettings:function(e){tinymce.init({menubar:!1,selector:e,height:400,plugins:"link table lists paste",toolbar:"formatselect | table",setup:function(e){e.ui.registry.addContextToolbar("textselection",{predicate:function(t){return!e.selection.isCollapsed()},items:"bold italic underline | bullist numlist | alignleft aligncenter alignright",position:"selection",scope:"node"})}})},setTinymceContent:function(e,t){tinymce.get(e.id).setContent(t)},getTinymceContent:function(e){return tinymce.get(e.id).getContent()}},n=function(){function e(t,i){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=t.length>0?t[0]:t,this.className="pgBld",this.textareaEditor=this.className+"-editor-textarea";var n=i||{};this.options={},o(a,function(e,t){s.options[e]=Object.prototype.hasOwnProperty.call(n,e)?n[e]:t})}var n,r,d;return n=e,(r=[{key:"_init",value:function(){this._changeSelector(),this._createInterface(),this._createBody(),this.options.edit&&this._createMenu(),this._createEditor(),this._createRow(),this._clickDoc()}},{key:"_changeSelector",value:function(){this.value=void 0!==this.selector.value?this.selector.value:this.selector.innerHTML,this.selector.style.display="none",this.selector.dataset.edit&&(this.options.edit="true"===this.selector.dataset.edit),this.selector.dataset.rowclasses&&(this.options.rowClasses=this.selector.dataset.rowclasses),this.selector.dataset.colclasses&&(this.options.colClasses=this.selector.dataset.colclasses)}},{key:"_createInterface",value:function(){this.wrapBlock=this._createEl("div",{id:this.className+"_"+i,class:this.className}),this.selector.parentNode.insertBefore(this.wrapBlock,this.selector),this.wrapBlock.style.height=this.options.height}},{key:"_createMenu",value:function(){var e=this;this.menu=this._createEl("div",{class:this.className+"-menu"}),this.menuItem={add:this._createEl("button",{class:this.className+"-menu-item-add",type:"button"},'<i class="svg"></i> <span>Add block</span>')},this.wrapBlock.appendChild(this.menu),o(this.menuItem,function(t,i){e.menu.appendChild(i)})}},{key:"_createBody",value:function(){this.body=this._createEl("div",{class:this.className+"-body"},this.value),this.wrapBlock.appendChild(this.body)}},{key:"_createEditor",value:function(){var e=this,t=e.className+"-editor";e.editor=e._createEl("div",{class:t});var i=[e._createEl("div",{class:t+"-block"}),e._createEl("div",{class:t+"-footer"}),e._createEl("h3",{class:t+"-h3"},"Edit content"),e._createEl("button",{class:t+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),e._createEl("button",{class:t+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>'),e._createEl("div",{class:e.textareaEditor})],s=i[0],a=i[1],n=i[2],o=i[3],r=i[4],d=i[5];function u(){var t=e.wrapBlock.querySelector("div."+e.className+"-content.changing");return e.editor.classList.remove("show"),t.classList.remove("changing"),t}e.editor.appendChild(s),a.appendChild(o),a.appendChild(r),l([n,d,a],function(e){s.appendChild(e)}),e.wrapBlock.appendChild(e.editor),e._addTiny("div."+this.textareaEditor),c(o,"click",function(){u()}),c(r,"click",function(){u().innerHTML=e.options.getTinymceContent(s.querySelector("div."+e.textareaEditor))})}},{key:"_createRowSettings",value:function(e){var t=this,i=this,s=i.className+"-settings",a=i._createEl("div",{class:s}),n=[i._createEl("div",{class:s+"-bgRow"}),i._createEl("div",{class:s+"-column"}),i._createEl("div",{class:s+"-footer"}),i._createEl("select",{class:s+"-bgCol"}),i._createEl("button",{class:s+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),i._createEl("button",{class:s+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>'),i._createEl("h3",{class:s+"-h3"},"Row class"),i._createEl("h3",{class:s+"-h3"},"Number of columns in a row")],o=n[0],r=n[1],d=n[2],u=n[3],h=n[4],v=n[5],p=n[6],f=n[7];o.appendChild(p),o.appendChild(u),r.appendChild(f),d.appendChild(h),d.appendChild(v),l(("def, "+i.options.rowClasses).split(", "),function(e){var t=i._createEl("option",{value:e},e);"def"===e&&(t.innerText="none"),u.appendChild(t)}),l([o,r,d],function(e){a.appendChild(e)});for(var m=function(e){var i=t._createEl("div",{"data-col":e},'<i class="svg"></i> <span>'.concat(e,"</span>"));c(i,"click",function(){var e;(e=r.querySelector(".active"))&&e.classList.remove("active"),i.classList.add("active")}),r.appendChild(i)},g=1;g<=6;g++)m(g);function y(){var e=i.wrapBlock.querySelector("div."+i.className+"-row.changing");return e.classList.remove("changing"),e.removeAttribute("data-action"),i.body.classList.remove("editing"),e}e.appendChild(a),c(h,"click",function(){var e=y(),t=e.querySelector("div."+s+"-bgCol.active"),i=e.querySelector("div[data-col].active");t&&t.classList.remove("active"),i&&i.classList.remove("active")}),c(v,"click",function(){var e=y(),t=u.value,s=r.querySelector(".active");e.className=i.className+"-row","def"!==t&&e.classList.add(t),s&&(e.dataset.setCol=s.dataset.col)})}},{key:"_createRowMenu",value:function(e){var t=this.className+"-row-menu";this.rowMenu=this._createEl("div",{class:t});var i=this._createEl("button",{class:t+"-settings",title:"Settings for row","data-role":"settingRow",type:"button"},'<i class="svg"></i> <span>Settings</span>'),s={block:this._createEl("div",{class:t+"-block"}),buttons:{edit:this._createEl("button",{title:"Edit row style","data-role":"editRow",type:"button"},'<i class="svg"></i> <span>Edit</span>'),column:this._createEl("button",{title:"Add column","data-role":"addCol",type:"button"},'<i class="svg"></i> <span>Add column</span>'),delete:this._createEl("button",{title:"Remove this row","data-role":"delRow",type:"button"},'<i class="svg"></i> <span>Remove</span>')}};o(s.buttons,function(e,i){i.classList=t+"-"+e,s.block.appendChild(i)}),this.rowMenu.appendChild(s.block),this.rowMenu.appendChild(i),e.firstChild?e.insertBefore(this.rowMenu,e.firstChild):e.appendChild(this.rowMenu)}},{key:"_createRow",value:function(){var e=this;this.rows=this.body.querySelectorAll("div."+this.className+"-row");var t=!1;if(this.rows.length<1){t=!0,this.body.innerHTML="";var i=this._createEl("div",{class:this.className+"-row","data-col":0});this._createCol(i,!0,this.value),this.body.appendChild(i),this.rows=this.body.querySelectorAll("div."+this.className+"-row")}l(this.rows,function(i){e.options.edit&&(e._createRowMenu(i),e._connectMenuFunc(i),e._createRowSettings(i)),i.dataset.col<1?e._createCol(i,!0):t||l(i.querySelectorAll("div."+e.className+"-col"),function(t){e._addColFunc(t)})}),this.options.edit&&c(this.menuItem.add,"click",function(){var t=e._createEl("div",{class:e.className+"-row","data-col":0});e.body.appendChild(t),e.options.edit&&(e._createRowMenu(t),e._createRowSettings(t),e._connectMenuFunc(t)),e._createCol(t),e.rows=e.body.querySelectorAll("div."+e.className+"-row")})}},{key:"_connectMenuFunc",value:function(e){var t=this;l(e.querySelectorAll("div."+this.className+"-row-menu button"),function(i){"delRow"===i.dataset.role?t._removeRow(i,e):"addCol"===i.dataset.role?t._addCol(i,e):"editRow"===i.dataset.role?t._editRow(i,e):"settingRow"===i.dataset.role&&t._openSetting(i,e)})}},{key:"_openSetting",value:function(e,t){var i=this;c(e,"click",function(){i.body.classList.add("editing"),l(i.rows,function(e){e.classList.remove("changing")}),t.classList.add("changing")})}},{key:"_editRow",value:function(e,t){var i=this;c(e,"click",function(){t.dataset.action="edit";var e=t.querySelector("div."+i.className+"-settings"),s=t.dataset.setCol?t.dataset.setCol:t.dataset.col,a=e.querySelector("select."+i.className+"-settings-bgCol"),n=!1;l(e.querySelectorAll("div."+i.className+"-settings-bgCol, div[data-col]"),function(e){e.classList.remove("active")}),l(t.classList,function(e){i.options.rowClasses.includes(e)&&(a.value=e,n=!0)}),n||(a.value="def"),e.querySelector('div[data-col = "'+s+'"]').classList.add("active")})}},{key:"_createCol",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=this._createEl("div",{class:this.className+"-col"});this._addColFunc(s);var a=t&&e.querySelector("div."+this.className+"-content")?e.querySelector("div."+this.className+"-content"):this._createEl("div",{class:this.className+"-content"},i);s.appendChild(a),e.appendChild(s);var n=e.querySelectorAll("."+this.className+"-col").length;e.dataset.col=n<7?n:6}},{key:"_addColFunc",value:function(e){var t=this._createEl("button",{class:this.className+"-col-edit",title:"Edit column",type:"button"},'<i class="svg"></i>');if(e.appendChild(t),this._editContent(t,e),this.options.edit){var i=this._createEl("button",{class:this.className+"-col-del",title:"Remove column",type:"button"},'<i class="svg"></i>');e.appendChild(i),this._removeCol(i,e);var s=this._createEl("button",{class:this.className+"-col-settings",title:"Settings",type:"button"},'<i class="svg"></i>');e.appendChild(s),this._openColSetting(s,e),this._createColSettings(e)}}},{key:"_addCol",value:function(e,t){var i=this;c(e,"click",function(){i._createCol(t)})}},{key:"_removeRow",value:function(e,t){var i=this;c(e,"click",function(){i.body.classList.remove("editing"),t.parentElement.removeChild(t)})}},{key:"_removeCol",value:function(e,t){var i=this;c(e,"click",function(){var e=t.parentElement;e.removeChild(t);var s=e.querySelectorAll("."+i.className+"-col").length;s>=1?e.dataset.col=s<7?s:6:e.parentNode.removeChild(e)})}},{key:"_createColSettings",value:function(e){var t=this.className+"-colSettings",i=this,s=[i._createEl("div",{class:t}),i._createEl("div",{class:t+"-classes"}),i._createEl("div",{class:t+"-footer"}),i._createEl("h3",{class:t+"-h3"},"Col class"),i._createEl("select",{class:t+"-select"}),i._createEl("button",{class:t+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit</span>'),i._createEl("button",{class:t+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>')],a=s[0],n=s[1],o=s[2],r=s[3],d=s[4],u=s[5],h=s[6];l(("def, "+i.options.colClasses).split(", "),function(e){var t=i._createEl("option",{value:e},e);"def"===e&&(t.innerText="none"),d.appendChild(t)}),n.appendChild(r),n.appendChild(d),o.appendChild(u),o.appendChild(h),a.appendChild(n),a.appendChild(o),e.appendChild(a),c(u,"click",function(){e.classList.remove("changingCol")}),c(h,"click",function(){var t=d.value;e.classList="def"===t?i.className+"-col":i.className+"-col "+t})}},{key:"_openColSetting",value:function(e,t){var i=this;c(e,"click",function(){var e=i.body.querySelectorAll(".changingCol"),s=t.querySelector("."+i.className+"-colSettings-select");l(e,function(e){e.classList.remove("changingCol")}),t.classList.add("changingCol");var a=!1;l(t.classList,function(e){i.options.colClasses.includes(e)&&(s.value=e,a=!0)}),a||(s.value="def")})}},{key:"_editContent",value:function(e,t){var i=this;c(e,"click",function(){i.editor.classList.add("show");var e=t.querySelector("div."+i.className+"-content"),s=i.editor.querySelector("div."+i.textareaEditor);s.innerHTML=e.innerHTML,i.options.setTinymceContent(s,e.innerHTML),e.classList.add("changing")})}},{key:"_clickDoc",value:function(){var e=this;c(document,"mouseup",function(t){var i=e.wrapBlock.querySelector(".editing"),s=e.body.querySelector(".changingCol");if(i){var a=e.body.querySelector(".changing");a&&!a.contains(t.target)&&(a.classList.remove("changing"),a.removeAttribute("data-action"),i.classList.remove("editing"))}s&&!s.contains(t.target)&&s.classList.remove("changingCol")})}},{key:"_createEl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=document.createElement(e);return o(t,function(e,t){s.setAttribute(e,t)}),s.innerHTML=i,s}},{key:"_getContent",value:function(){var e=this,t=this.body.cloneNode(!0);function i(e,t){l(t,function(t){e.removeAttribute(t)})}return l(t.querySelectorAll("div."+this.className+"-row"),function(t){var s=t.querySelector("div."+e.className+"-row-menu"),a=t.querySelector("div."+e.className+"-settings");s&&t.removeChild(s),a&&t.removeChild(a);var n=t.querySelectorAll("div."+e.className+"-col");if(n.length>1)l(n,function(t){var s=t.querySelector("."+e.className+"-col-del"),a=t.querySelector("."+e.className+"-col-edit"),n=t.querySelector("."+e.className+"-content"),o=t.querySelector("."+e.className+"-col-settings"),l=t.querySelector("."+e.className+"-colSettings");i(n,["id","style","aria-hidden"]),s&&t.removeChild(s),a&&t.removeChild(a),o&&t.removeChild(o),l&&t.removeChild(l)});else if(1===n.length){var o=(n=n[0]).querySelector("div."+e.className+"-content");i(o,["id","style","aria-hidden"]),n.parentNode.dataset.col=0,n.parentNode.insertBefore(o,n),n.parentNode.removeChild(n)}else t.parentNode.removeChild(t)}),t.innerHTML}},{key:"_addTiny",value:function(e){this.options.tinymceSettings(e)}},{key:"_rebuild",value:function(){this.wrapBlock.parentElement&&(this.wrapBlock.parentElement.removeChild(this.wrapBlock),s.create(this.selector,this.options))}}])&&t(n.prototype,r),d&&t(n,d),e}();function o(e,t){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t(i,e[i])}function l(e,t){for(var i=0;i<e.length;i++)t(e[i],e)}function c(e,t,i){e.addEventListener?e.addEventListener(t,i):e.attachEvent("on"+t,i)}"undefined"==typeof window?e.pageBuilder=s:window.pageBuilder=s}).call(this,i(1))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){i(0),i(5),i(10),e.exports=i(12)},,,function(e,t){},,,,,function(e,t){},,function(e,t){}]);