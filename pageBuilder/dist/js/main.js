!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}([function(e,t,i){"use strict";(function(e){function t(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=0,a={editors:{},create:function(e,t){try{!function(e){if("undefined"==typeof tinymce)throw Error("PageBuilder: Didn't find tinymce. Please connect tinymce.");if(void 0===e||0===e.length)throw Error("PageBuilder: Didn't find selector");if(e.length>1)throw Error("PageBuilder: Please use individual selector, not more.\n        You use "+e.length+" selectors")}(e)}catch(e){return console.error(e.message),!1}var a=new n(e,t);return a._init(),this.editors[a.className+"_"+i]=a,i+=i,a},getContent:function(e){return this.editors[e]._getContent()}},s={tinymce:{settings:function(e){tinymce.init({menubar:!1,selector:e,height:400,plugins:"link table lists paste",toolbar:"formatselect | table",setup:function(e){e.ui.registry.addContextToolbar("textselection",{predicate:function(t){return!e.selection.isCollapsed()},items:"bold italic underline | bullist numlist | alignleft aligncenter alignright",position:"selection",scope:"node"})}})},setContent:function(e,t){tinymce.get(e.id).setContent(t)},getContent:function(e){return tinymce.get(e.id).getContent()}},height:"500px",bgClasses:"first, sec, third",edit:!0},n=function(){function e(t,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=t.length>0?t[0]:t,this.className="pgBld",this.textareaEditor=this.className+"-editor-textarea";var n=i||{};this.options={},o(s,function(e,t){a.options[e]=n.hasOwnProperty(e)?n[e]:t})}var a,n,r;return a=e,(n=[{key:"_init",value:function(){this._changeSelector(),this._createInterface(),this._createBody(),this._createMenu(),this._createEditor(),this._createRow(),this._clickDoc()}},{key:"_changeSelector",value:function(){this.value=void 0!==this.selector.value?this.selector.value:this.selector.innerHTML,this.selector.style.display="none",this.selector.dataset.edit&&(this.options.edit="true"===this.selector.dataset.edit),this.selector.dataset.bg&&(this.options.bgClasses=this.selector.dataset.bg)}},{key:"_createInterface",value:function(){this.wrapBlock=this._createEl("div",{id:this.className+"_"+i,class:this.className}),this.selector.parentNode.insertBefore(this.wrapBlock,this.selector),this.wrapBlock.style.height=this.options.height}},{key:"_createMenu",value:function(){var e=this;this.menu=this._createEl("div",{class:this.className+"-menu"}),this.menuItem={add:this._createEl("button",{class:this.className+"-menu-item-add"},'<i class="svg"></i> <span>Add block</span>')},this.wrapBlock.appendChild(this.menu),o(this.menuItem,function(t,i){e.menu.appendChild(i)})}},{key:"_createBody",value:function(){this.body=this._createEl("div",{class:this.className+"-body"},this.value),this.wrapBlock.appendChild(this.body)}},{key:"_createEditor",value:function(){var e=this,t=e.className+"-editor";e.editor=e._createEl("div",{class:t});var i=[e._createEl("div",{class:t+"-block"}),e._createEl("div",{class:t+"-footer"}),e._createEl("h3",{class:t+"-h3"},"Edit content"),e._createEl("button",{class:t+"-close",title:"Close"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),e._createEl("button",{class:t+"-save",title:"Save"},'<i class="svg"></i> <span>Save changes</span>'),e._createEl("div",{class:e.textareaEditor})],a=i[0],n=i[1],o=i[2],r=i[3],d=i[4],u=i[5];function h(){var t=e.wrapBlock.querySelector("div."+e.className+"-content.changing");return e.editor.classList.remove("show"),t.classList.remove("changing"),t}e.editor.appendChild(a),n.appendChild(r),n.appendChild(d),c([o,u,n],function(e){a.appendChild(e)}),e.wrapBlock.appendChild(e.editor),function(e){s.tinymce.settings(e)}("div."+this.textareaEditor),l(r,"click",function(){h()}),l(d,"click",function(){h().innerHTML=e.options.tinymce.getContent(a.querySelector("div."+e.textareaEditor))})}},{key:"_createRowSettings",value:function(e){var t=this,i=this,a=i.className+"-settings",s=i._createEl("div",{class:a}),n=[i._createEl("div",{class:a+"-bgRow"}),i._createEl("div",{class:a+"-column"}),i._createEl("div",{class:a+"-footer"}),i._createEl("button",{class:a+"-close",title:"Close"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),i._createEl("button",{class:a+"-save",title:"Save"},'<i class="svg"></i> <span>Save changes</span>'),i._createEl("h3",{class:a+"-h3"},"Background style"),i._createEl("h3",{class:a+"-h3"},"Number of columns in a row")],o=n[0],r=n[1],d=n[2],u=n[3],h=n[4],v=n[5],f=n[6];o.appendChild(v),r.appendChild(f),d.appendChild(u),d.appendChild(h),c(("def, "+i.options.bgClasses).split(", "),function(e){var t=i._createEl("div",{class:a+"-bgCol "+e,"data-class":e});"def"===e&&(t.innerHTML='<i class="svg"></i>'),o.appendChild(t),l(t,"click",function(){y(o.querySelector(".active")),t.classList.add("active")})}),c([o,r,d],function(e){s.appendChild(e)});for(var p=function(e){var i=t._createEl("div",{"data-col":e},'<i class="svg"></i> <span>'.concat(e,"</span>"));l(i,"click",function(){y(r.querySelector(".active")),i.classList.add("active")}),r.appendChild(i)},m=1;m<=6;m++)p(m);function g(){var e=i.wrapBlock.querySelector("div."+i.className+"-row.changing");return e.classList.remove("changing"),e.removeAttribute("data-action"),i.body.classList.remove("editing"),e}function y(e){e&&e.classList.remove("active")}e.appendChild(s),l(u,"click",function(){var e=g(),t=e.querySelector("div."+a+"-bgCol.active"),i=e.querySelector("div[data-col].active");t&&t.classList.remove("active"),i&&i.classList.remove("active")}),l(h,"click",function(){var e=g(),t=o.querySelector(".active"),a=r.querySelector(".active");e.className=i.className+"-row",t&&"def"!==t.dataset.class&&e.classList.add(t.dataset.class),a&&(e.dataset.col=a.dataset.col)})}},{key:"_createRowMenu",value:function(e){var t=this.className+"-row-menu";this.rowMenu=this._createEl("div",{class:t});var i=this._createEl("button",{class:t+"-settings",title:"Settings for row","data-role":"settingRow"},'<i class="svg"></i> <span>Settings</span>'),a={block:this._createEl("div",{class:t+"-block"}),buttons:{edit:this._createEl("button",{title:"Edit row style","data-role":"editRow"},'<i class="svg"></i> <span>Edit</span>'),column:this._createEl("button",{title:"Add column","data-role":"addCol"},'<i class="svg"></i> <span>Add column</span>'),delete:this._createEl("button",{title:"Remove this row","data-role":"delRow"},'<i class="svg"></i> <span>Remove</span>')}};o(a.buttons,function(e,i){i.classList=t+"-"+e,a.block.appendChild(i)}),this.rowMenu.appendChild(a.block),this.rowMenu.appendChild(i),e.firstChild?e.insertBefore(this.rowMenu,e.firstChild):e.appendChild(this.rowMenu)}},{key:"_createRow",value:function(){var e=this;this.rows=this.body.querySelectorAll("div."+this.className+"-row"),c(this.rows,function(t){e.options.edit&&(e._createRowMenu(t),e._connectMenuFunc(t),e._createRowSettings(t)),t.dataset.col<1?e._createCol(t,!0):c(t.querySelectorAll("div."+e.className+"-col"),function(t){e._addColFunc(t)})}),l(this.menuItem.add,"click",function(){var t=e._createEl("div",{class:e.className+"-row","data-col":0});e.body.appendChild(t),e.options.edit&&(e._createRowMenu(t),e._createRowSettings(t),e._connectMenuFunc(t)),e._createCol(t),e.rows=e.body.querySelectorAll("div."+e.className+"-row")})}},{key:"_connectMenuFunc",value:function(e){var t=this;c(e.querySelectorAll("div."+this.className+"-row-menu button"),function(i){"delRow"===i.dataset.role?t._removeRow(i,e):"addCol"===i.dataset.role?t._addCol(i,e):"editRow"===i.dataset.role?t._editRow(i,e):"settingRow"===i.dataset.role&&t._openSetting(i,e)})}},{key:"_openSetting",value:function(e,t){var i=this;l(e,"click",function(){i.body.classList.add("editing"),c(i.rows,function(e){e.classList.remove("changing")}),t.classList.add("changing")})}},{key:"_editRow",value:function(e,t){var i=this;l(e,"click",function(){t.dataset.action="edit";var e=t.querySelector("div."+i.className+"-settings"),a=t.dataset.setCol?t.dataset.setCol:t.dataset.col,s=!1;c(e.querySelectorAll("div."+i.className+"-settings-bgCol, div[data-col]"),function(e){e.classList.remove("active")}),c(t.classList,function(t){"changing"!==t&&t!==i.className+"-row"&&(e.querySelector("div."+t).classList.add("active"),s=!0)}),s||e.querySelector("div."+i.className+"-settings-bgCol.def").classList.add("active"),e.querySelector('div[data-col = "'+a+'"]').classList.add("active")})}},{key:"_createCol",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this._createEl("div",{class:this.className+"-col"});this._addColFunc(i);var a=t&&e.querySelector("div."+this.className+"-content")?e.querySelector("div."+this.className+"-content"):this._createEl("div",{class:this.className+"-content"});i.appendChild(a),e.appendChild(i);var s=e.querySelectorAll("."+this.className+"-col").length;e.dataset.col=s<7?s:6}},{key:"_addColFunc",value:function(e){var t=this._createEl("button",{class:this.className+"-col-edit",title:"Edit column"},'<i class="svg"></i>');if(e.appendChild(t),this._editContent(t,e),this.options.edit){var i=this._createEl("button",{class:this.className+"-col-del",title:"Remove column"},'<i class="svg"></i>');e.appendChild(i),this._removeCol(i,e)}}},{key:"_addCol",value:function(e,t){var i=this;l(e,"click",function(){i._createCol(t)})}},{key:"_removeRow",value:function(e,t){var i=this;l(e,"click",function(){i.body.classList.remove("editing"),t.parentElement.removeChild(t)})}},{key:"_removeCol",value:function(e,t){var i=this;l(e,"click",function(){var e=t.parentElement;e.removeChild(t);var a=e.querySelectorAll("."+i.className+"-col").length;a>=1?e.dataset.col=a<7?a:6:e.parentNode.removeChild(e)})}},{key:"_editContent",value:function(e,t){var i=this;l(e,"click",function(){i.editor.classList.add("show");var e=t.querySelector("div."+i.className+"-content"),a=i.editor.querySelector("div."+i.textareaEditor);a.innerHTML=e.innerHTML,i.options.tinymce.setContent(a,e.innerHTML),e.classList.add("changing")})}},{key:"_clickDoc",value:function(){var e=this;l(document,"mouseup",function(t){var i=e.wrapBlock.querySelector(".editing");if(i){var a=e.body.querySelector(".changing");a.contains(t.target)||(a.classList.remove("changing"),a.removeAttribute("data-action"),i.classList.remove("editing"))}})}},{key:"_createEl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=document.createElement(e);return o(t,function(e,t){a.setAttribute(e,t)}),a.innerHTML=i,a}},{key:"_getContent",value:function(){var e=this,t=this.body.cloneNode(!0);function i(e,t){c(t,function(t){e.removeAttribute(t)})}return c(t.querySelectorAll("div."+this.className+"-row"),function(t){var a=t.querySelector("div."+e.className+"-row-menu"),s=t.querySelector("div."+e.className+"-settings");a&&t.removeChild(a),s&&t.removeChild(s);var n=t.querySelectorAll("div."+e.className+"-col");if(n.length>1)c(n,function(t){var a=t.querySelector("."+e.className+"-col-del"),s=t.querySelector("."+e.className+"-col-edit");i(t.querySelector("."+e.className+"-content"),["id","style","aria-hidden"]),a&&t.removeChild(a),s&&t.removeChild(s)});else if(1===n.length){var o=(n=n[0]).querySelector("div."+e.className+"-content");i(o,["id","style","aria-hidden"]),n.parentNode.dataset.col=0,n.parentNode.insertBefore(o,n),n.parentNode.removeChild(n)}else t.parentNode.removeChild(t)}),t.innerHTML}}])&&t(a.prototype,n),r&&t(a,r),e}();function o(e,t){for(var i in e)e.hasOwnProperty(i)&&t(i,e[i])}function c(e,t){for(var i=0;i<e.length;i++)t(e[i],e)}function l(e,t,i){e.addEventListener?e.addEventListener(t,i):e.attachEvent("on"+t,i)}"undefined"==typeof window?e.pageBuilder=a:window.pageBuilder=a}).call(this,i(1))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},,function(e,t,i){e.exports=i(4)},function(e,t,i){"use strict";i.r(t);i(0);pageBuilder.create(document.querySelector(".textarea"),{height:"auto"}),$(".clicker").on("click",function(){console.dir(pageBuilder.getContent("pgBld_0"))})}]);