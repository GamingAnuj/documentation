(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{250:function(e,s,t){"use strict";t.r(s);t(90);var n={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:s,themeConfig:t}=this.$site,n=t.searchMaxSuggestions||5,o=this.$localePath,i=s=>s.title&&s.title.toLowerCase().indexOf(e)>-1,u=[];for(let e=0;e<s.length&&!(u.length>=n);e++){const t=s[e];if(this.getPageLocalePath(t)===o)if(i(t))u.push(t);else if(t.headers)for(let e=0;e<t.headers.length&&!(u.length>=n);e++){const s=t.headers[e];i(s)&&u.push(Object.assign({},t,{path:t.path+"#"+s.slug,header:s}))}}return u},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(e){for(const s in this.$site.locales||{})if("/"!==s&&0===e.path.indexOf(s))return s;return"/"},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},o=t(15),i=Object(o.a)(n,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"search-box"},[s("input",{attrs:{"aria-label":"Search",placeholder:"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(s){e.query=s.target.value},focus:function(s){e.focused=!0},blur:function(s){e.focused=!1},keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.go(e.focusIndex)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?s("div",{staticClass:"suggestion-container",on:{mouseleave:e.unfocus}},[s("div",{staticClass:"suggestion-padding"}),e._v(" "),s("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight}},e._l(e.suggestions,(function(t,n){return s("li",{staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(s){return e.go(n)},mouseenter:function(s){return e.focus(n)}}},[s("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[s("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?s("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0)]):e._e()])}),[],!1,null,null,null);s.default=i.exports}}]);