var e="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,a){b!=Array.prototype&&b!=Object.prototype&&(b[c]=a.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,h=function(b,c){if(c){var a=f;b=b.split(".");for(var d=0;d<b.length-1;d++){var g=b[d];g in a||(a[g]={});a=a[g]}b=b[b.length-1];d=a[b];c=c(d);c!=d&&null!=c&&e(a,b,{configurable:!0,writable:!0,value:c})}};
h("Object.is",function(b){return b?b:function(c,a){return c===a?0!==c||1/c===1/a:c!==c&&a!==a}});h("Array.prototype.includes",function(b){return b?b:function(c,a){var d=this;d instanceof String&&(d=String(d));var g=d.length;a=a||0;for(0>a&&(a=Math.max(a+g,0));a<g;a++){var p=d[a];if(p===c||Object.is(p,c))return!0}return!1}});/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var t=document.createElement("script");

    t.src="/bundle.js"
    console.log("Using "+t.src);
    document.body.appendChild(t);
