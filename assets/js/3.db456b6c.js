(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{479:function(t,e,i){},481:function(t,e,i){"use strict";i(479)},482:function(t,e,i){"use strict";i(480),i(43),i(111);var a={data:function(){return{path:"",localePath:"",mainNav:[],secondaryNav:[],extraNav:[],languageLabel:"",languages:[],defLanguage:"",mouseEnter:!1,mouseLeave:!1,isMobile:!1,showMobileMenu:!1,showSidebarMenu:!1,showMobileLangList:!1}},components:{SearchBox:i(484).a},created:function(){this.path=this.$route.path.replace("/en/","/").substr(1),this.localePath=this.$localePath;var t=this.$site.themeConfig.locales[this.localePath];for(var e in this.mainNav=t.main_nav,this.secondaryNav=t.secondary_nav,this.extraNav=t.extra_nav,this.languageLabel=t.selectText,this.defLanguage=t.label,this.$site.themeConfig.locales)this.languages.push({label:this.$site.themeConfig.locales[e].label,path:e})},mounted:function(){var t=this;this.isMobile=document.body.clientWidth<=991,window.onresize=function(){document.body.clientWidth<=991?t.isMobile=!0:(t.isMobile=!1,document.querySelector(".sider-container").style.cssText="")}},methods:{mouseEnterLang:function(t){this.mouseLeave=!1,this.mouseEnter=!0},mouseLeaveLang:function(t){var e=this;this.mouseEnter=!1,this.mouseLeave=!0,document.getElementById("sub-menu").addEventListener("webkitAnimationEnd",(function(t){"slideUpOut"==t.animationName&&(e.mouseLeave=!1,e.mouseEnter=!1)}))},toggleMenu:function(){this.showMobileMenu=!this.showMobileMenu},toggleSidebar:function(){this.showSidebarMenu=!this.showSidebarMenu,document.querySelector(".sider-container").style.cssText=this.showSidebarMenu?"transform: translateX(0)":"transform: translateX(-100%)"},showLangList:function(t){this.showMobileLangList=!this.showMobileLangList;var e=t.currentTarget.parentNode;this.showMobileLangList?e.querySelector("ul").style.height=e.querySelector("li").offsetHeight*this.languages.length+"px":e.querySelector("ul").style.height=0}}},s=(i(481),i(42)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header-container",class:{"mobile-header-container":t.isMobile}},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:t.localePath}},[i("span",[i("img",{attrs:{src:t.$withBase("/logo.png")}})]),t._v(" "),i("h1",[t._v(t._s(this.$site.locales[t.localePath].title))])])],1),t._v(" "),i("div",{staticClass:"nav pc-nav"},[i("div",{staticClass:"main-nav"},t._l(t.mainNav,(function(e){return void 0===e.show||!1!==e.show?i("router-link",{class:{active:e.link.startsWith(t.localePath+t.path.split("/")[0]+"/")},attrs:{to:e.link}},[t._v(t._s(e.text))]):t._e()})),1),t._v(" "),i("div",{staticClass:"nav-extra"},[i("div",{staticClass:"search-container"},[i("SearchBox")],1),t._v(" "),i("div",{staticClass:"secondary-nav"},[t._l(t.secondaryNav,(function(e){return[e.link.startsWith("http://")||e.link.startsWith("https://")?[void 0===e.show||!1!==e.show?i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))]):t._e()]:[void 0===e.show||!1!==e.show?i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))]):t._e()]]}))],2),t._v(" "),i("div",{staticClass:"switch-lang",on:{mouseenter:t.mouseEnterLang,mouseleave:t.mouseLeaveLang}},[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.languageLabel)),i("span",{staticClass:"triangle"})]),t._v(" "),i("div",{staticClass:"sub-menu",class:{"menu-hidden":!t.mouseEnter&&!t.mouseLeave,"slide-up-enter slide-up-enter-active":t.mouseEnter,"slide-up-leave slide-up-leave-active":t.mouseLeave},attrs:{id:"sub-menu"}},[i("ul",t._l(t.languages,(function(e){return i("li",{class:{active:e.path==t.localePath}},[i("router-link",{attrs:{to:e.path+t.path}},[t._v(t._s(e.label))])],1)})),0)])]),t._v(" "),i("div",{staticClass:"login-register"},t._l(t.extraNav,(function(e){return void 0===e.show||!1!==e.show?i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))]):t._e()})),0)])]),t._v(" "),i("div",{staticClass:"mobile-nav"},[t.showMobileMenu?[i("img",{attrs:{src:t.$withBase("/icon-close.png")},on:{click:t.toggleMenu}})]:[i("img",{attrs:{src:t.$withBase("/icon-menu.png")},on:{click:t.toggleMenu}})]],2)]),t._v(" "),t.isMobile&&!t.showMobileMenu?i("div",{staticClass:"m-header-search"},[t.path.startsWith("api/")?t._e():i("div",{staticClass:"sidebar-menu"},[t.showSidebarMenu?[i("img",{attrs:{src:t.$withBase("/icon-close.png")},on:{click:t.toggleSidebar}})]:[i("img",{attrs:{src:t.$withBase("/icon-sidebar.png")},on:{click:t.toggleSidebar}})]],2),t._v(" "),i("div",{staticClass:"search-container"},[i("SearchBox")],1)]):t._e(),t._v(" "),t.showMobileMenu?i("div",{staticClass:"mobile-nav-list"},[i("ul",[t._l(t.mainNav,(function(e){return void 0===e.show||!1!==e.show?i("li",[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1):t._e()})),t._v(" "),t._l(t.secondaryNav,(function(e){return void 0===e.show||!1!==e.show?i("li",[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1):t._e()})),t._v(" "),t._l(t.extraNav,(function(e){return void 0===e.show||!1!==e.show?i("li",[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1):t._e()})),t._v(" "),i("li",{staticClass:"switch-lang",class:{open:t.showMobileLangList}},[i("a",{on:{click:t.showLangList}},[t._v(t._s(t.languageLabel))]),t._v(" "),i("ul",t._l(t.languages,(function(e){return i("li",{class:{active:e.path==t.localePath}},[i("router-link",{attrs:{to:e.path+t.path}},[t._v(t._s(e.label))])],1)})),0)])],2)]):t._e()])}),[],!1,null,null,null);e.a=n.exports},485:function(t,e,i){"use strict";var a={data:function(){return{toTopHide:!0}},mounted:function(){document.querySelector(".description-container").scrollTop=0;var t=document.querySelector(".table-of-contents"),e=this;if(t){var i=t.querySelector("ul").querySelector("li");if(i){i.classList.add("active");var a=t.querySelectorAll("li"),s=t.querySelectorAll('a[href^="#"]');document.querySelector(".description-container").onscroll=function(){for(var t=0;t<s.length;t++)if(document.querySelector(s[t].getAttribute("href"))&&this.scrollTop>=document.querySelector(s[t].getAttribute("href")).offsetTop-10){for(var i=0;i<a.length;i++)a[i].classList.remove("active");s[t].parentNode.classList.add("active")}e.toTopHide=!(this.scrollTop>=500)}}}},methods:{backToTop:function(){document.querySelector(".description-container").scrollTo({top:0,behavior:"smooth"})}}},s=i(42),n=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Content"),this._v(" "),e("div",{staticClass:"back-to-top",class:{hidden:this.toTopHide},on:{click:this.backToTop}})],1)}),[],!1,null,null,null);e.a=n.exports},486:function(t,e,i){"use strict";i(259),i(43),i(111),i(480),i(483),i(257),i(258);var a={props:["all"],data:function(){return{rootPath:"",localePath:"",path:"",uri:"",root:"",language:"",version:"",file:"",enter:!1,leave:!1,platformShow:!1,platform:[],default_platform:{}}},created:function(){this.rootPath=this.$site.base,this.localePath=this.$localePath,this.uri=this.$page.path,this.platformShow=!(!this.uri.startsWith(this.localePath+"document/")&&!this.uri.startsWith(this.localePath+"api/"));var t=this.$site.themeConfig.locales[this.localePath];this.platform=t.platform;var e=this.$route.path.replace("/en/","/");this.path=e.substr(0,e.lastIndexOf("/")+1);var i=e.split("/");this.file=i[i.length-1],i.splice(i.length-1,1,""),this.root=i[1]?i[1]:"",this.language=i[2]?i[2]:"",this.version=i[3]?i[3]:"";for(var a=0;a<this.platform.length;a++)for(var s=0;s<this.platform[a].children.length;s++)if(this.platform[a].children[s].key===this.language){this.default_platform=this.platform[a].children[s];break}},mounted:function(){var t=this;window.onclick=function(e){t.platformToggleUp(e)}},methods:{platformClick:function(t){this.enter?this.platformToggleUp(t):this.platformToggleDown(t)},platformToggleUp:function(t){var e=this;this.enter&&!this.leave&&(this.enter=!1,this.leave=!0,document.getElementById("platform-list").addEventListener("webkitAnimationEnd",(function(t){"slideUpOut"==t.animationName&&(e.enter=!1,e.leave=!1)})),t.stopPropagation())},platformToggleDown:function(t){this.leave=!1,this.enter=!0,t.stopPropagation()},switchPlatform:function(t){var e=t.currentTarget.getAttribute("data-key"),i=this.$site.pages,a="";if("api"===this.root)a=this.localePath+this.root+"/"+e+"/";else{for(var s=0;s<i.length;s++)if(i[s].regularPath===this.localePath+this.root+"/"+e+"/"+this.file){a=i[s].regularPath;break}if(!a)for(var n=this.$site.themeConfig.locales[this.localePath].platform,o=0;o<n.length;o++)for(var l=0;l<n[o].children.length;l++)if(n[o].children[l].key==e){a=this.localePath+this.root+"/"+e+"/"+n[o].children[l].uri;break}}this.$router.push(a)},handleMouseEnter:function(t){t.target.classList.add("active")},handleMouseLeave:function(t){t.target.classList.remove("active")}}},s=i(42),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.platformShow,expression:"platformShow"}],staticClass:"platform"},[i("div",{staticClass:"platform-input",on:{click:t.platformClick}},[i("div",{staticClass:"platform-text"},[i("img",{attrs:{src:t.rootPath+t.default_platform.hover_icon,alt:""}}),t._v(" "),i("span",[t._v(t._s(t.default_platform.title))])]),t._v(" "),i("div",{staticClass:"select-icon"},[i("i",{staticClass:"icon-arrow",class:{open:t.enter&&!t.leave}})])]),t._v(" "),i("div",{staticClass:"platform-list",class:{"menu-hidden":!t.enter&&!t.leave,"slide-up-enter slide-up-enter-active":t.enter,"slide-up-leave slide-up-leave-active":t.leave},attrs:{id:"platform-list"},on:{click:t.platformToggleDown}},t._l(t.platform,(function(e){return void 0!==e.show&&!1===e.show||!(!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.root)||e.except&&-1===e.except.indexOf(t.root))?t._e():i("div",{staticClass:"group"},[i("div",{staticClass:"group-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"options"},t._l(e.children,(function(e){return void 0!==e.show&&!1===e.show||!(!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.root)||e.except&&-1===e.except.indexOf(t.root))?t._e():i("div",{staticClass:"option-item",attrs:{"data-key":e.key},on:{click:t.switchPlatform,mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[i("img",{staticClass:"default",attrs:{src:t.rootPath+e.icon,alt:""}}),t._v(" "),i("img",{staticClass:"active",attrs:{src:t.rootPath+e.hover_icon,alt:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])])})),0)])})),0)])}),[],!1,null,null,null);e.a=n.exports},491:function(t,e,i){},492:function(t,e,i){},493:function(t,e,i){},511:function(t,e,i){"use strict";i(491)},512:function(t,e){t.exports=function(t){return null==t}},513:function(t,e,i){"use strict";i(492)},514:function(t,e,i){"use strict";i(493)},518:function(t,e,i){"use strict";i.r(e);var a=i(482),s=(i(43),i(111),i(257),i(258),i(163),i(486)),n=(i(268),{props:["menu"],data:function(){return{path:"",file:""}},created:function(){var t=this.$route.path.replace("/en/","/").split("/");t.splice(t.length-1,1,""),this.root=t[1]?t[1]:"",this.language=t[2]?t[2]:"",this.version=t[3]?t[3]:"",this.path=this.$localePath+this.root+"/"+(this.language?this.language+"/":""),t=this.$page.regularPath.split("/"),this.file=t[t.length-1],this.menu.active=!1;for(var e=0;e<this.menu.children.length;e++)this.menu.children[e].link==this.file&&(this.menu.active=!0)},methods:{toggleSub:function(t){if(t.target.querySelector(".icon-arrow").classList.contains("open"))t.target.querySelector(".icon-arrow").classList.remove("open"),t.target.nextElementSibling.style.display="none";else{document.querySelector(".open")&&document.querySelector(".open").classList.remove("open");for(var e=document.querySelectorAll(".collapsable"),i=0;i<e.length;i++)e[i].style.display="none";t.target.querySelector(".icon-arrow").classList.add("open"),t.target.nextElementSibling.style.display="block"}t.stopPropagation()}}}),o=i(42),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.menu.collapsable?[i("a",{attrs:{href:"javascript:;"},on:{click:t.toggleSub}},[t._v(t._s(t.menu.text)),i("i",{staticClass:"icon-arrow",class:{open:t.menu.active}})])]:[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.menu.text))])],t._v(" "),i("ul",{staticClass:"sider-menu-sub",class:{collapsable:t.menu.collapsable,"menu-hidden":!t.menu.active}},t._l(t.menu.children,(function(e){return void 0!==e.show&&!1===e.show||!(!t.language||!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.language)||e.except&&-1===e.except.indexOf(t.language))?t._e():i("li",{class:{active:e.link==t.file}},[i("router-link",{attrs:{to:t.path+e.link}},[t._v(t._s(e.text))])],1)})),0)],2)}),[],!1,null,null,null).exports,r={data:function(){return{localePath:"",path:"",uri:"",root:"",language:"",version:"",file:"",sidebar:[]}},components:{Platform:s.a,SiderChild:l},created:function(){this.localePath=this.$localePath,this.uri=this.$page.path;var t=this.$site.themeConfig.locales[this.localePath],e=this.$route.path.replace("/en/","/").split("/");if(e.splice(e.length-1,1,""),this.root=e[1]?e[1]:"",this.language=e[2]?e[2]:"",this.version=e[3]?e[3]:"",this.sidebar=t.sidebar[e.join("/")],this.path=this.$localePath+this.root+"/"+(this.language?this.language+"/":""),e=this.$page.regularPath.split("/"),this.file=e[e.length-1],!this.sidebar)for(var i=e.length-2;i>0;i--){for(var a="/",s=1;s<=i;s++)a+=e[s]+"/";if(this.sidebar=t.sidebar[a],this.sidebar)break}}},c=(i(511),Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sider-container"},[i("Platform",{key:t.uri}),t._v(" "),i("div",{staticClass:"sider-menu"},t._l(t.sidebar,(function(e){return void 0!==e.show&&!1===e.show||!(!t.language||!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.language)||e.except&&-1===e.except.indexOf(t.language))?t._e():i("div",{staticClass:"item"},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.children,(function(e){return void 0!==e.show&&!1===e.show||!(!t.language||!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.language)||e.except&&-1===e.except.indexOf(t.language))?t._e():i("li",{class:{active:e.link==t.file}},[e.children?[i("SiderChild",{key:e.children[0].link+"sider-child",attrs:{menu:e}})]:[void 0!==e.show&&!1===e.show||!(!t.language||!e.only&&!e.except||e.only&&-1!==e.only.indexOf(t.language)||e.except&&-1===e.except.indexOf(t.language))?t._e():i("router-link",{attrs:{to:t.path+e.link}},[t._v(t._s(e.text))])]],2)})),0)])})),0)],1)}),[],!1,null,null,null).exports),h=i(485),u=(i(115),i(512)),d=i.n(u),v=/^[a-z]+:/i,p=/\/$/,g={computed:{editLink:function(){var t=d()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,i=e.repo,a=e.docsDir,s=void 0===a?"":a,n=e.docsBranch,o=void 0===n?"master":n,l=e.docsRepo,r=void 0===l?i:l;return t&&r&&this.$page.relativePath?this.createEditLink(i,r,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,a,s){if(/bitbucket.org/.test(e))return e.replace(p,"")+"/src"+"/".concat(a,"/")+(i?i.replace(p,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(p,"")+"/-/edit"+"/".concat(a,"/")+(i?i.replace(p,"")+"/":"")+s:(v.test(e)?e:"https://github.com/".concat(e)).replace(p,"")+"/edit"+"/".concat(a,"/")+(i?i.replace(p,"")+"/":"")+s}}},f=(i(513),Object(o.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),this.$page.lastUpdated?i("div",{staticClass:"last-updated"},[t._v(t._s(this.$site.themeConfig.locales[this.$localePath].lastUpdated)+t._s(this.$page.lastUpdated))]):t._e()])}),[],!1,null,null,null).exports),m={components:{Header:a.a,Sider:c,Markdown:h.a,PageEdit:f}},_=(i(514),Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container"},[e("Header",{key:this.$route.path+"header"}),this._v(" "),e("div",{staticClass:"content-container"},[e("Sider",{key:this.$route.path+"sider"}),this._v(" "),e("div",{staticClass:"description-container",attrs:{"data-key":this.$page.key}},[e("Markdown",{key:this.$route.path}),this._v(" "),e("PageEdit",{key:this.$route.path+"page-edit"})],1)],1),this._v(" "),e("link",{attrs:{id:"code-theme",rel:"stylesheet"}})],1)}),[],!1,null,null,null));e.default=_.exports}}]);