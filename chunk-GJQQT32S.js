import{a as xe,b as Ce,c as ze,d as ve}from"./chunk-7WTKAVUC.js";import{c as J,d as Q,e as X,f as Y}from"./chunk-6P3OELNY.js";import{G as ge,H as de,I as fe,a as $,b as R,c as P,d as A,f as B,g as W}from"./chunk-MA55HPIN.js";import{a as ae,e as se}from"./chunk-BYIRSHGR.js";import{a as Z,b as te,c as ne}from"./chunk-PMOQXB34.js";import"./chunk-7AV76BIW.js";import{a as ce,b as me}from"./chunk-6Q35NKAP.js";import{b as ee}from"./chunk-UAFHGYMD.js";import{$a as ie,Bb as pe,Eb as ue,Fb as _e,Tb as ye,cb as oe,fb as re,pb as le}from"./chunk-2GO6JF4Z.js";import{$b as D,Ba as p,Ca as u,Dd as j,Gd as K,Hb as f,Hd as q,Ia as N,Id as H,Jb as r,Jd as U,Kd as T,Ld as b,Od as G,Xb as c,Yb as s,Yd as C,Zb as x,_b as L,bc as y,ec as _,gc as l,gd as h,hb as O,lb as t,mb as z,od as k,pc as m,qc as S,rc as g,tb as v,vc as w,wc as I,xc as V,zd as F}from"./chunk-R5XL6RYM.js";function be(i,a){if(i&1&&(c(0,"p",4),m(1),c(2,"a",5),m(3),s()()),i&2){let e=l(2);t(),g(" ",e.$t("_getToken"),""),t(2),g(" ",e.$t("_readDoc"),"")}}function Me(i,a){if(i&1){let e=y();L(0),c(1,"p"),m(2),s(),c(3,"input",2),V("ngModelChange",function(n){p(e);let d=l();return I(d.token,n)||(d.token=n),u(n)}),_("keyup",function(n){p(e);let d=l();return u(d.onKey(n))}),s(),f(4,be,4,2,"p",3),D()}if(i&2){let e=l();t(2),S(e.$t("_inputTokenMsg")),t(),w("ngModel",e.token),t(),r("ngIf",!e.isSelfDevelop)}}var M=class i{constructor(a){this.message=a}visible=!1;onCancel=new N;$t=C;isSelfDevelop=b;token="";submiting=!1;ngOnInit(){}ngAfterViewInit(){this.inputFocus()}hanldeCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{document.getElementById("loginInput")?.focus?.()},300)}onKey(a){a.code==="Enter"&&this.login()}login(){if(!this.token)return this.message.error(C("_pleaseInputToken"));let a=this.token.trim();this.submiting=!0,pe(a).then(()=>{K(a),_e({message:"auth",path:".navauth",content:"OK"}).then(()=>{ue("image").finally(()=>{this.message.success(C("_tokenVerSuc")),H().finally(()=>{window.location.reload()})})}).catch(()=>{q(),this.submiting=!1})}).catch(()=>{this.submiting=!1})}static \u0275fac=function(e){return new(e||i)(z(ye))};static \u0275cmp=v({type:i,selectors:[["app-login"]],inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["id","loginInput","autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel"],["style","margin-top: 15px",4,"ngIf"],[2,"margin-top","15px"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(c(0,"nz-modal",0),V("nzVisibleChange",function(d){return I(o.visible,d)||(o.visible=d),d}),_("nzOnCancel",function(){return o.hanldeCancel()})("nzOnOk",function(){return o.login()}),f(1,Me,5,3,"ng-container",1),s()),e&2&&(w("nzVisible",o.visible),r("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submiting))},dependencies:[k,h,le,ie,oe,re,fe,de,ge,se,ae],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function we(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=l(2);return u(n.goRoute("/system/component"))}),m(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="component"),t(),g(" ",e.$t("_components")," ")}}function Ie(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=l(2);return u(n.goRoute("/system/bookmarkExport"))}),m(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="bookmarkExport"),t(),g(" ",e.$t("_bookmarkExport")," ")}}function Ve(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=l(2);return u(n.goRoute("/system/collect"))}),m(1),s()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="collect"),t(),g(" ",e.$t("_userCollect")," ")}}function Te(i,a){if(i&1&&(c(0,"span",17),m(1),s()),i&2){let e=l(2);t(),S(e.date)}}function Ee(i,a){i&1&&x(0,"nz-spin",18),i&2&&r("nzSize","large")}function Ne(i,a){if(i&1){let e=y();c(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3)(3,"ul",4)(4,"li",5)(5,"ul")(6,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/web"))}),m(7),s(),c(8,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/setting"))}),m(9),s(),c(10,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/tag"))}),m(11),s(),c(12,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/bookmark"))}),m(13),s(),c(14,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/search"))}),m(15),s(),f(16,we,2,2,"li",7)(17,Ie,2,2,"li",7)(18,Ve,2,2,"li",7),c(19,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/vip"))}),m(20),s(),c(21,"li",6),_("click",function(){p(e);let n=l();return u(n.goRoute("/system/info"))}),m(22),s()()()()(),c(23,"nz-layout",8)(24,"nz-content",9)(25,"div")(26,"button",10),_("click",function(){p(e);let n=l();return u(n.goBack())}),m(27),s(),c(28,"button",11),_("click",function(){p(e);let n=l();return u(n.logout())}),m(29),s(),x(30,"img",12),c(31,"a",13),x(32,"img",14),s(),f(33,Te,2,1,"span",15),s(),f(34,Ee,1,1,"nz-spin",16),x(35,"router-outlet"),s()()()()}if(i&2){let e=l();t(6),r("nzSelected",e.currentMenu==="web"),t(),g(" ",e.$t("_websiteMang")," "),t(),r("nzSelected",e.currentMenu==="setting"),t(),g(" ",e.$t("_systemSet")," "),t(),r("nzSelected",e.currentMenu==="tag"),t(),g(" ",e.$t("_tagSettings")," "),t(),r("nzSelected",e.currentMenu==="bookmark"),t(),g(" ",e.$t("_bookmarkImport")," "),t(),r("nzSelected",e.currentMenu==="search"),t(),g(" ",e.$t("_searchEngines")," "),t(),r("ngIf",e.isAuthz||e.isSelfDevelop),t(),r("ngIf",e.isAuthz),t(),r("ngIf",e.isAuthz||e.isSelfDevelop),t(),r("nzSelected",e.currentMenu==="vip"),t(),g(" ",e.$t("_vipAuth")," "),t(),r("nzSelected",e.currentMenu==="info"),t(),g(" ",e.$t("_webInfo")," "),t(5),g(" ",e.$t("_backHome")," "),t(2),g(" ",e.$t("_logout")," "),t(),r("src",e.currentVersionSrc,O),t(3),r("ngIf",!e.isSelfDevelop),t(),r("ngIf",e.pageLoading)}}var E=class i{constructor(a){this.router=a;G(),this.router.events.subscribe(e=>{e instanceof $?this.pageLoading=!0:(e instanceof R||e instanceof P||e instanceof A)&&(this.pageLoading=!1)})}isSelfDevelop=b;$t=C;isLogin=T;showLoginModal=!T;currentMenu="";date=document.getElementById("META-NAV")?.dataset?.date||"";currentVersionSrc=`https://img.shields.io/badge/current-v${F}-red.svg?longCache=true&style=flat-square`;isAuthz=!!j();pageLoading=!1;ngOnInit(){let a=window.location.href.split("/");this.currentMenu=a.at(-1)}goBack(){this.router.navigate(["/"])}goRoute(a,e=!1){e||this.router.navigate([a])}logout(){U(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(z(W))};static \u0275cmp=v({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light",1,"sidebar"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-submenu","","nzOpen","","nzTitle","System"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],["nz-button","",2,"margin-bottom","15px",3,"click"],["nz-button","",2,"margin-left","15px",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],["nzSimple","","class","fixed-center",3,"nzSize",4,"ngIf"],[1,"ml-2.5"],["nzSimple","",1,"fixed-center",3,"nzSize"]],template:function(e,o){e&1&&(f(0,Ne,36,22,"nz-layout",0),x(1,"app-login",1)),e&2&&(r("ngIf",o.isLogin),t(),r("visible",o.showLoginModal))},dependencies:[k,h,ve,ze,xe,Ce,Y,X,J,Q,ne,te,Z,ee,M,B,me,ce],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{z-index:3;position:fixed;top:0;left:0;bottom:0;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:170px}.system-layout[_ngcontent-%COMP%]   .fixed-center[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}"]})};export{E as default};