/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","ojs/ojcomponentcore","ojs/ojcustomelement"],function(e){var t={properties:{value:{type:"string",value:""}},extension:{_CONSTRUCTOR:function(t){var o="value",n="_ojSwitcher_orig_display_style",i=this,r=t.element,s=!0,a=null;function l(){a=null}function d(t,i){var a=r[o];void 0===t[n]&&Object.defineProperty(t,n,{value:t.style.display}),i===a?function(t){"none"===t.style.display?(t.style.display="",e.Components.subtreeShown(t,s?{initialRender:!0}:void 0)):s&&e.Components.subtreeShown(t,{initialRender:!0})}(t):function(t){"none"!==t.style.display&&(t.style.display="none",e.Components.subtreeHidden(t))}(t)}i._caseElementMutationObserver=new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&(e.addedNodes&&Array.prototype.forEach.call(e.addedNodes,function(e){if(1===e.nodeType){var t=e.getAttribute("slot");d(e,t),l()}}),e.removedNodes&&Array.prototype.forEach.call(e.removedNodes,function(e){1===e.nodeType&&(void 0!==e[n]&&(e.style.display=e[n]),l())}))})}),this.createDOM=function(){i._caseElementMutationObserver.observe(r,{childList:!0})},this.updateDOM=function(){var t=function(){a||(a=e.BaseCustomElementBridge.getSlotMap(r));return a}();for(var o in t)t[o].forEach(function(e){d(e,o)});s&&(s=!1)}},_CONTROLS_SUBTREE_HIDDEN:!0}};e.CustomElementBridge.registerMetadata("oj-switcher",null,t),e.CustomElementBridge.register("oj-switcher",{metadata:e.CustomElementBridge.getMetadata("oj-switcher")})});