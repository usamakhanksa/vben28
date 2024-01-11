"use strict";(self.webpackChunkfandaqapp=self.webpackChunkfandaqapp||[]).push([[2083],{2083:(G,h,o)=>{o.r(h),o.d(h,{DashboardModule:()=>S});var g=o(32427),l=o(40381),u=o(65765),m=o(48340),D=o(56208),f=o(23758),t=o(19212),c=o(88762),r=o(60095),b=o(11411),v=o(86123);const T=["errorRateWidget"],Z=["averageExecutionDurationWidget"],C=["editionsUsageWidget"],A=["latestTenantsWidget"];function x(a,d){1&a&&(t.TgZ(0,"div",13),t._UZ(1,"abp-error-rate-widget",14,15),t.qZA()),2&a&&(t.xp6(1),t.Q6J("height",250))}function W(a,d){1&a&&(t.TgZ(0,"div",13),t._UZ(1,"abp-average-execution-duration-widget",14,16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("height",250))}function y(a,d){1&a&&(t.TgZ(0,"div",13),t._UZ(1,"abp-editions-usage-widget",14,17),t.qZA()),2&a&&(t.xp6(1),t.Q6J("height",250))}function J(a,d){1&a&&(t.TgZ(0,"div",13),t._UZ(1,"abp-latest-tenants-widget",18,19),t.qZA()),2&a&&(t.xp6(1),t.Q6J("minHeight",250))}const p=new Date,L=new Date(p.getFullYear(),p.getMonth()-1,p.getDate());let U=(()=>{class a{constructor(){this.fb=(0,t.f3M)(r.qu),this.toDate=p,this.fromDate=L,this.formFilters=this.fb.group({times:[{fromDate:this.fromDate,toDate:this.toDate}]})}ngAfterViewInit(){this.refresh()}refresh(){const{fromDate:n,toDate:e}={...this.formFilters.value.times},i=this.convertToString(n),s=this.convertToString(e);this.errorRateWidget?.draw({startDate:i,endDate:s}),this.averageExecutionDurationWidget?.draw({startDate:i,endDate:s}),this.editionsUsageWidget?.draw(),this.latestTenantsWidget?.draw()}convertToString(n){return n.toLocalISOString()}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-host-dashboard"]],viewQuery:function(e,i){if(1&e&&(t.Gf(T,5),t.Gf(Z,5),t.Gf(C,5),t.Gf(A,5)),2&e){let s;t.iGM(s=t.CRH())&&(i.errorRateWidget=s.first),t.iGM(s=t.CRH())&&(i.averageExecutionDurationWidget=s.first),t.iGM(s=t.CRH())&&(i.editionsUsageWidget=s.first),t.iGM(s=t.CRH())&&(i.latestTenantsWidget=s.first)}},features:[t._Bn([{provide:g.DO,useClass:g.s5}])],decls:21,vars:14,consts:[[3,"title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],["id","datepicker",1,"input-daterange","row","align-items-center","justify-content-center"],[1,"col-12","col-lg-auto","col-md-6","mb-3","mb-lg-0"],["formControlName","times","id","times","startDateProp","fromDate","endDateProp","toDate",3,"labelText"],[1,"col-12","col-lg-2","col-md-12"],["type","submit",1,"btn","btn-primary","btn-block"],["aria-hidden","true",1,"fa","fa-refresh","me-1"],["id","DashboardWidgetsArea"],[1,"row"],["class","col col-md-12 col-lg-6",4,"abpPermission"],[1,"col","col-md-12","col-lg-6"],[3,"height"],["errorRateWidget",""],["averageExecutionDurationWidget",""],["editionsUsageWidget",""],[3,"minHeight"],["latestTenantsWidget",""]],template:function(e,i){1&e&&(t.TgZ(0,"abp-page",0),t.ALo(1,"abpLocalization"),t.TgZ(2,"div",1)(3,"div",2)(4,"form",3),t.NdJ("ngSubmit",function(){return i.refresh()}),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"abp-date-range-picker",6),t.ALo(8,"abpLocalization"),t.qZA(),t.TgZ(9,"div",7)(10,"button",8),t._UZ(11,"i",9),t.TgZ(12,"span"),t._uU(13),t.ALo(14,"abpLocalization"),t.qZA()()()()()()(),t.TgZ(15,"div",10)(16,"div",11),t.YNc(17,x,3,1,"div",12)(18,W,3,1,"div",12)(19,y,3,1,"div",12)(20,J,3,1,"div",12),t.qZA()()()),2&e&&(t.Q6J("title",t.lcZ(1,8,"::Menu:Dashboard")),t.xp6(4),t.Q6J("formGroup",i.formFilters),t.xp6(3),t.Q6J("labelText",t.lcZ(8,10,"::Date")),t.xp6(6),t.Oqu(t.lcZ(14,12,"AbpAuditLogging::Refresh")),t.xp6(4),t.Q6J("abpPermission","AuditLogging.AuditLogs"),t.xp6(1),t.Q6J("abpPermission","AuditLogging.AuditLogs"),t.xp6(1),t.Q6J("abpPermission","Saas.Tenants"),t.xp6(1),t.Q6J("abpPermission","Saas.Tenants"))},dependencies:[r._Y,r.JJ,r.JL,r.sg,r.u,c.YzZ,c.l97,b.hL,b.J5,v.C_,l.ErrorRateWidgetComponent,l.AverageExecutionDurationWidgetComponent,m.EditionsUsageWidgetComponent,m.LatestTenantsWidgetComponent,u.II,c.fuE]})}return a})(),_=(()=>{class a{ngOnDestroy(){}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-tenant-dashboard"]],decls:5,vars:0,consts:[[1,"row","entry-row"],[1,"col"],[1,"card"],[1,"card-body"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4," Add your Tenant related charts/widgets to this page ! "),t.qZA()()()())}})}return a})();function H(a,d){1&a&&t._UZ(0,"app-host-dashboard")}function Q(a,d){1&a&&t._UZ(0,"app-tenant-dashboard")}const M=[{path:"",component:(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],decls:2,vars:2,consts:[[4,"abpPermission"]],template:function(e,i){1&e&&t.YNc(0,H,1,0,"app-host-dashboard",0)(1,Q,1,0,"app-tenant-dashboard",0),2&e&&(t.Q6J("abpPermission","fandaqapp.Dashboard.Host"),t.xp6(1),t.Q6J("abpPermission","fandaqapp.Dashboard.Tenant"))},dependencies:[c.l97,U,_],encapsulation:2})}return a})()}];let w=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(M),f.Bz]})}return a})(),S=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[D.m,w,g.M,l.AuditLoggingModule,m.SaasModule,u.BG,v.C8,r.UX]})}return a})()}}]);