/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","knockout","ojs/ojeventtarget","ojs/ojdataprovider"],function(t,e,i){var n=function(){function e(t,e){this.data=t,this.options=e,this._KEY="key",this._KEYS="keys",this._AFTERKEYS="afterKeys",this._DIRECTION="direction",this._ATTRIBUTE="attribute",this._SORT="sort",this._SORTCRITERIA="sortCriteria",this._DATA="data",this._METADATA="metadata",this._INDEXES="indexes",this._OFFSET="offset",this._SIZE="size",this._IDATTRIBUTE="idAttribute",this._IMPLICITSORT="implicitSort",this._SORTCOMPARATORS="sortComparators",this._COMPARATORS="comparators",this._COMPARATOR="comparator",this._RESULTS="results",this._CONTAINS="contains",this._FETCHPARAMETERS="fetchParameters",this._CONTAINSPARAMETERS="containsParameters",this._VALUE="value",this._DONE="done",this._ADD="add",this._REMOVE="remove",this._UPDATE="update",this.Item=function(){return function(t,e,i){this._parent=t,this.metadata=e,this.data=i,this[t._METADATA]=e,this[t._DATA]=i}}(),this.ItemMetadata=function(){return function(t,e){this._parent=t,this.key=e,this[t._KEY]=e}}(),this.FetchByKeysResults=function(){return function(t,e,i){this._parent=t,this.fetchParameters=e,this.results=i,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i}}(),this.ContainsKeysResults=function(){return function(t,e,i){this._parent=t,this.containsParameters=e,this.results=i,this[t._CONTAINSPARAMETERS]=e,this[t._RESULTS]=i}}(),this.FetchByOffsetResults=function(){return function(t,e,i,n){this._parent=t,this.fetchParameters=e,this.results=i,this.done=n,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i,this[t._DONE]=n}}(),this.FetchListParameters=function(){return function(t,e,i){this._parent=t,this.size=e,this.sortCriteria=i,this[t._SIZE]=e,this[t._SORTCRITERIA]=i}}(),this.FetchListResult=function(){return function(t,e,i,n){this._parent=t,this.fetchParameters=e,this.data=i,this.metadata=n,this[t._FETCHPARAMETERS]=e,this[t._DATA]=i,this[t._METADATA]=n}}(),this.AsyncIterable=function(){return function(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}}(),this.AsyncIterator=function(){function t(t,e,i,n){this._parent=t,this._nextFunc=e,this._params=i,this._offset=n,this._cachedOffset=n}return t.prototype.next=function(){var t=this._nextFunc(this._params,this._cachedOffset);return this._cachedOffset=this._cachedOffset+t.value[this._parent._DATA].length,Promise.resolve(t)},t}(),this.AsyncIteratorResult=function(){return function(t,e,i){this._parent=t,this.value=e,this.done=i,this[t._VALUE]=e,this[t._DONE]=i}}(),this.DataProviderMutationEventDetail=function(){return function(t,e,i,n){this._parent=t,this.add=e,this.remove=i,this.update=n,this[t._ADD]=e,this[t._REMOVE]=i,this[t._UPDATE]=n}}(),this.DataProviderOperationEventDetail=function(){return function(t,e,i,n,s){this._parent=t,this.keys=e,this.metadata=i,this.data=n,this.indexes=s,this[t._KEYS]=e,this[t._METADATA]=i,this[t._DATA]=n,this[t._INDEXES]=s}}(),this.DataProviderAddOperationEventDetail=function(){return function(t,e,i,n,s,r){this._parent=t,this.keys=e,this.afterKeys=i,this.metadata=n,this.data=s,this.indexes=r,this[t._KEYS]=e,this[t._AFTERKEYS]=i,this[t._METADATA]=n,this[t._DATA]=s,this[t._INDEXES]=r}}(),this._cachedIndexMap=[],this._sequenceNum=0,this._subscribeObservableArray(t),null!=e&&null!=e[this._KEYS]&&(this._keysSpecified=!0,this._keys=e[this._KEYS])}return e.prototype.containsKeys=function(t){var e=this;return this.fetchByKeys(t).then(function(i){var n=new Set;return t[e._KEYS].forEach(function(t){null!=i[e._RESULTS].get(t)&&n.add(t)}),Promise.resolve(new e.ContainsKeysResults(e,t,n))})},e.prototype.fetchByKeys=function(e){var i=this;this._generateKeysIfNeeded();var n,s=new Map,r=this._getKeys(),a=0;return e[this._KEYS].forEach(function(e){for(n=null,a=0;a<r.length;a++)if(t.Object.compareValues(r[a],e)){n=a;break}null!=n&&n>=0&&s.set(e,new i.Item(i,new i.ItemMetadata(i,e),i._getRowData()[n]))}),Promise.resolve(new this.FetchByKeysResults(this,e,s))},e.prototype.fetchByOffset=function(t){var e=this,i=null!=t?t[this._SIZE]:-1,n=null!=t?t[this._SORTCRITERIA]:null,s=null!=t&&t[this._OFFSET]>0?t[this._OFFSET]:0;this._generateKeysIfNeeded();var r=new this.FetchListParameters(this,i,n),a=this._fetchFrom(r,s),o=a[this._VALUE],h=a[this._DONE],u=o[this._DATA],l=o[this._METADATA].map(function(t){return t[e._KEY]}),_=u.map(function(t,i){return new e.Item(e,new e.ItemMetadata(e,l[i]),t)});return Promise.resolve(new this.FetchByOffsetResults(this,t,_,h))},e.prototype.fetchFirst=function(t){return new this.AsyncIterable(this,new this.AsyncIterator(this,this._fetchFrom.bind(this),t,0))},e.prototype.getCapability=function(t){return e.getCapability(t)},e.getCapability=function(t){return"sort"==t?{attributes:"multiple"}:"fetchByKeys"==t?{implementation:"lookup"}:"fetchByOffset"==t?{implementation:"randomAccess"}:null},e.prototype.getTotalSize=function(){return Promise.resolve(this._getRowData().length)},e.prototype.isEmpty=function(){return this._getRowData().length>0?"no":"yes"},e.prototype._getRowData=function(){return this[this._DATA]instanceof Array?this[this._DATA]:this[this._DATA]()},e.prototype._getKeys=function(){return null==this._keys||this._keys instanceof Array?this._keys:this._keys()},e.prototype._subscribeObservableArray=function(e){if(!(e instanceof Array)){if(!this._isObservableArray(e))throw new Error("Invalid data type. ArrayDataProvider only supports Array or observableArray.");var i=this;e.subscribe(function(e){var n,s,r=[],a=[],o=[],h=[],u=[],l=!1,_=!1,c=!1;for(n=0;n<e.length;n++)if("deleted"===e[n].status){l=!0;break}for(n=0;n<e.length;n++)if("added"===e[n].status){_=!0;break}if(_&&l&&(c=!0),l){for(n=0;n<e.length;n++)"deleted"===e[n].status&&(a.push(i._getKeys()[e[n].index]),r.push(e[n].value),o.push(e[n].index));if(a.length>0&&a.map(function(t){var e=i._getKeys().indexOf(t);i._keys.splice(e,1)}),a.length>0&&!c){h=a.map(function(t){return new i.ItemMetadata(i,t)});var f=new Set;a.map(function(t){f.add(t)});var p=new i.DataProviderOperationEventDetail(i,f,h,r,o),d=new i.DataProviderMutationEventDetail(i,null,p,null);i._mutationEvent=new t.DataProviderMutationEvent(d)}}if(_){for(n=0;n<e.length;n++)if("added"===e[n].status){i._generateKeysIfNeeded(),null==(s=i._getId(e[n].value))&&(s=i._getKeys()[e[n].index]),null==s&&(s=i._sequenceNum++,i._keys.splice(e[n].index,0,s)),-1==i._getKeys().indexOf(s)&&i._keys.splice(e[n].index,0,s),a.push(s);var y=i._getKeys()[e[n].index+1];y=null==y?"":y,u.push(y),r.push(e[n].value),o.push(e[n].index)}if(a.length>0&&!c){h=a.map(function(t){return new i.ItemMetadata(i,t)});var A=new Set;a.map(function(t){A.add(t)});var E=new Set;u.map(function(t){E.add(t)});p=new i.DataProviderAddOperationEventDetail(i,A,E,h,r,o),d=new i.DataProviderMutationEventDetail(i,p,null,null);i._mutationEvent=new t.DataProviderMutationEvent(d)}}},null,"arrayChange"),e.subscribe(function(e){i._mutationEvent?i.dispatchEvent(i._mutationEvent):i.dispatchEvent(new t.DataProviderRefreshEvent),i._mutationEvent=null},null,"change")}},e.prototype._isObservableArray=function(t){return i.isObservable(t)&&!(void 0===t.destroyAll)},e.prototype._generateKeysIfNeeded=function(){if(null==this._keys){var t=null!=this.options?this.options[this._IDATTRIBUTE]:null;this._keys=[];var e=this._getRowData(),i=void 0,n=0;for(n=0;n<e.length;n++)null!=(i=this._getId(e[n]))&&"@index"!=t||(i=this._sequenceNum++),this._keys[n]=i;return!0}return!1},e.prototype._getId=function(t){var e,i=null!=this.options?this.options[this._IDATTRIBUTE]:null;if(null!=i){var n;if(Array.isArray(i))for(e=[],n=0;n<i.length;n++)e[n]=this._getVal(t,i[n]);else e="@value"==i?this._getAllVals(t):this._getVal(t,i);return e}return null},e.prototype._getVal=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},e.prototype._getAllVals=function(t){var e=this;return Object.keys(t).map(function(i){return e._getVal(t,i)})},e.prototype._fetchFrom=function(t,e){var i=this;this._generateKeysIfNeeded();var n=null!=t?t[this._SORTCRITERIA]:null,s=this._getCachedIndexMap(n),r=s.map(function(t){return i._getRowData()[t]}),a=s.map(function(t){return i._getKeys()[t]}),o=null!=t?t[this._SIZE]>0?t[this._SIZE]:t[this._SIZE]<0?i._getKeys().length:25:25,h=r.slice(e,e+o),u=a.slice(e,e+o).map(function(t){return new i.ItemMetadata(i,t)}),l=e+o<r.length,_=this._mergeSortCriteria(n);null!=_&&((t=t||{})[this._SORTCRITERIA]=_);var c=new this.FetchListResult(this,t,h,u);return new this.AsyncIteratorResult(this,c,!l)},e.prototype._getCachedIndexMap=function(t){var e=this._getRowData().map(function(t,e){return e});return this._sortData(e,t)},e.prototype._sortData=function(t,e){var i=this,n=t.map(function(t){return{index:t,value:i._getRowData()[t]}});return null!=e&&n.sort(this._getSortComparator(e)),n.map(function(t){return t.index})},e.prototype._getSortComparator=function(t){var e=this;return function(i,n){var s,r,a,o,h=null!=e.options?e.options[e._SORTCOMPARATORS]:null;for(s=0;s<t.length;s++)if(r=t[s][e._DIRECTION],a=t[s][e._ATTRIBUTE],o=null,null!=h&&(o=h[e._COMPARATORS].get(a)),null!=o){var u="descending"==r?-1:1,l=o(i.value[a],n.value[a])*u;if(0!=l)return l}else{var _=0,c="string"==typeof i.value[a]?i.value[a]:new String(i.value[a]),f="string"==typeof n.value[a]?n.value[a]:new String(n.value[a]);if(0!=(_="ascending"==r?c.localeCompare(f,void 0,{numeric:!0,sensitivity:"base"}):f.localeCompare(c,void 0,{numeric:!0,sensitivity:"base"})))return _}return 0}},e.prototype._mergeSortCriteria=function(t){var e=null!=this.options?this.options[this._IMPLICITSORT]:null;if(null!=e){if(null==t)return e;var i=t.slice(0),n=void 0,s=void 0,r=void 0;for(n=0;n<e.length;n++){for(r=!1,s=0;s<i.length;s++)i[s][this._ATTRIBUTE]==e[n][this._ATTRIBUTE]&&(r=!0);r||i.push(e[n])}return i}return t},e}();t.ArrayDataProvider=n,t.EventTargetMixin.applyMixin(n)});