"use strict";(self.webpackChunkfandaqapp=self.webpackChunkfandaqapp||[]).push([[4582],{4582:(et,x,s)=>{s.r(x),s.d(x,{BookModule:()=>tt});var p=s(32427),m=s(11411),r=s(88762),_=s(69670),g=s(65765),f=s(86123),t=s(19212),L=s(32181),k=s(94664),C=s(64716);let Z=(()=>{class e{constructor(o){this.restService=o,this.apiName="Default",this.create=(i,n)=>this.restService.request({method:"POST",url:"/api/app/books",body:i},{apiName:this.apiName,...n}),this.delete=(i,n)=>this.restService.request({method:"DELETE",url:`/api/app/books/${i}`},{apiName:this.apiName,...n}),this.get=(i,n)=>this.restService.request({method:"GET",url:`/api/app/books/${i}`},{apiName:this.apiName,...n}),this.getDownloadToken=i=>this.restService.request({method:"GET",url:"/api/app/books/download-token"},{apiName:this.apiName,...i}),this.getList=(i,n)=>this.restService.request({method:"GET",url:"/api/app/books",params:{filterText:i.filterText,sorting:i.sorting,skipCount:i.skipCount,maxResultCount:i.maxResultCount,name:i.name,publishDateMin:i.publishDateMin,publishDateMax:i.publishDateMax,priceMin:i.priceMin,priceMax:i.priceMax,type:i.type}},{apiName:this.apiName,...n}),this.getListAsExcelFile=(i,n)=>this.restService.request({method:"GET",responseType:"blob",url:"/api/app/books/as-excel-file",params:{downloadToken:i.downloadToken,filterText:i.filterText,name:i.name}},{apiName:this.apiName,...n}),this.update=(i,n,c)=>this.restService.request({method:"PUT",url:`/api/app/books/${i}`,body:n},{apiName:this.apiName,...c})}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(r.vgb))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();class B{constructor(){this.proxyService=(0,t.f3M)(Z),this.confirmationService=(0,t.f3M)(_.YP),this.list=(0,t.f3M)(r.XNV),this.isExportToExcelBusy=!1,this.data={items:[],totalCount:0},this.filters={}}delete(a){this.confirmationService.warn("::DeleteConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,L.h)(o=>o===_.Tv.Status.confirm),(0,k.w)(()=>this.proxyService.delete(a.id))).subscribe(this.list.get)}hookToQuery(){this.list.hookToQuery(i=>this.proxyService.getList({...i,...this.filters,filterText:i.filter})).subscribe(i=>this.data=i)}clearFilters(){this.filters={},this.list.get()}exportToExcel(){this.isExportToExcelBusy=!0,this.proxyService.getDownloadToken().pipe((0,k.w)(({token:a})=>this.proxyService.getListAsExcelFile({downloadToken:a,filterText:this.list.filter,...this.filters})),(0,C.x)(()=>this.isExportToExcelBusy=!1)).subscribe(a=>{(0,r.lmu)(a,"Book.xlsx")})}}let M=(()=>{class e extends B{static#t=this.\u0275fac=(()=>{let o;return function(n){return(o||(o=t.n5z(e)))(n||e)}})();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var l=s(60095),N=s(99397),y=function(e){return e[e.Undefined=0]="Undefined",e[e.Adventure=1]="Adventure",e[e.Biography=2]="Biography",e[e.Dystopia=3]="Dystopia",e[e.Fantastic=4]="Fantastic",e[e.Horror=5]="Horror",e[e.Science=6]="Science",e[e.ScienceFiction=7]="ScienceFiction",e[e.Poetry=8]="Poetry",e}(y||{});const T=(0,r.Uoq)(y);class F{constructor(){this.fb=(0,t.f3M)(l.qu),this.track=(0,t.f3M)(r.vR3),this.proxyService=(0,t.f3M)(Z),this.list=(0,t.f3M)(r.XNV),this.bookTypeOptions=T,this.isBusy=!1,this.isVisible=!1,this.selected={}}buildForm(){const{name:a,publishDate:o,price:i,type:n}=this.selected||{};this.form=this.fb.group({name:[a??null,[]],publishDate:[o?new Date(o):null,[]],price:[i??null,[]],type:[n??null,[]]})}showForm(){this.buildForm(),this.isVisible=!0}create(){this.selected=void 0,this.showForm()}update(a){this.selected=a,this.showForm()}hideForm(){this.isVisible=!1,this.form.reset()}submitForm(){this.form.invalid||(this.isBusy=!0,this.createRequest().pipe((0,C.x)(()=>this.isBusy=!1),(0,N.b)(()=>this.hideForm())).subscribe(this.list.get))}createRequest(){return this.selected?this.proxyService.update(this.selected.id,{...this.form.value,concurrencyStamp:this.selected.concurrencyStamp}):this.proxyService.create(this.form.value)}changeVisible(a){this.isVisible=a}}let h=(()=>{class e extends F{static#t=this.\u0275fac=(()=>{let o;return function(n){return(o||(o=t.n5z(e)))(n||e)}})();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var b=s(96814);function J(e,a){if(1&e&&(t.TgZ(0,"h3"),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,o.service.selected?"AbpUi::Edit":"::NewBook")," ")}}function w(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",20)(1,"button",21),t.NdJ("click",function(){t.CHM(o),t.oxw();const n=t.MAs(14);return n.writeValue(null),t.KtG(n.manualDateChange(null,!0))}),t.ALo(2,"abpLocalization"),t._UZ(3,"i",22),t.qZA()()}2&e&&(t.xp6(1),t.Q6J("title",t.lcZ(2,1,"AbpUi::Clear")))}function U(e,a){if(1&e&&(t.TgZ(0,"option",18),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()),2&e){const o=a.$implicit;t.Q6J("ngValue",o.value),t.xp6(1),t.hij(" ",t.lcZ(2,2,"::Enum:BookType."+o.value)," ")}}function q(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"form",4),t.NdJ("ngSubmit",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.service.submitForm())}),t.TgZ(1,"div",5)(2,"div",6)(3,"label",7),t._uU(4),t.ALo(5,"abpLocalization"),t.qZA(),t._UZ(6,"input",8),t.qZA(),t.TgZ(7,"div",6)(8,"label",9),t._uU(9),t.ALo(10,"abpLocalization"),t.qZA(),t.TgZ(11,"div",10)(12,"input",11,12),t.NdJ("click",function(){t.CHM(o);const n=t.MAs(14);return t.KtG(n.open())})("keyup.space",function(){t.CHM(o);const n=t.MAs(14);return t.KtG(n.open())}),t.qZA(),t.YNc(15,w,4,3,"div",13),t.qZA()(),t.TgZ(16,"div",6)(17,"label",14),t._uU(18),t.ALo(19,"abpLocalization"),t.qZA(),t._UZ(20,"input",15),t.qZA(),t.TgZ(21,"div",6)(22,"label",16),t._uU(23),t.ALo(24,"abpLocalization"),t.qZA(),t.TgZ(25,"select",17),t._UZ(26,"option",18),t.YNc(27,U,3,4,"option",19),t.qZA()()()()}if(2&e){const o=t.MAs(13),i=t.oxw();t.Q6J("formGroup",i.service.form),t.xp6(4),t.hij(" ",t.lcZ(5,9,"::Name")," "),t.xp6(5),t.hij(" ",t.lcZ(10,11,"::PublishDate")," "),t.xp6(6),t.Q6J("ngIf",o.value),t.xp6(3),t.hij(" ",t.lcZ(19,13,"::Price")," "),t.xp6(5),t.hij(" ",t.lcZ(24,15,"::Type")," "),t.xp6(3),t.Q6J("ngValue",null),t.xp6(1),t.Q6J("ngForOf",i.service.bookTypeOptions)("ngForTrackBy",i.service.track.by("key"))}}function z(e,a){1&e&&(t.TgZ(0,"button",23),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA(),t.TgZ(3,"abp-button",24),t._uU(4),t.ALo(5,"abpLocalization"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,2,"AbpUi::Cancel")," "),t.xp6(3),t.hij(" ",t.lcZ(5,4,"AbpUi::Save")," "))}let E=(()=>{class e{constructor(){this.service=(0,t.f3M)(h)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-book-detail-modal"]],standalone:!0,features:[t._Bn([{provide:p.DO,useClass:_._A}]),t.jDz],decls:7,vars:2,consts:[[3,"busy","visible","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["id","book","validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2","fade-in-top"],[1,"mb-3"],["for","book-name",1,"form-label"],["id","book-name","formControlName","name","autofocus","",1,"form-control"],["for","book-publish-date",1,"form-label"],["validationTarget","",1,"input-group"],["readonly","","id","book-publish-date","formControlName","publishDate","ngbDatepicker","",1,"form-control",3,"click","keyup.space"],["publishDateInput","","publishDateDatepicker","ngbDatepicker"],["class","input-group-append",4,"ngIf"],["for","book-price",1,"form-label"],["type","number","id","book-price","formControlName","price",1,"form-control"],["for","book-type",1,"form-label"],["id","book-type","formControlName","type",1,"form-select","form-control"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],[1,"input-group-append"],["type","button",1,"btn","btn-link","px-2",3,"title","click"],["aria-hidden","true",1,"fa","fa-times"],["type","button","abpClose","",1,"btn","btn-secondary"],["iconClass","fa fa-check","buttonType","submit","formName","book"]],template:function(i,n){1&i&&(t.TgZ(0,"abp-modal",0),t.NdJ("visibleChange",function(u){return n.service.isVisible=u}),t.YNc(1,J,3,3,"ng-template",null,1,t.W1O)(3,q,28,17,"ng-template",null,2,t.W1O)(5,z,6,6,"ng-template",null,3,t.W1O),t.qZA()),2&i&&t.Q6J("busy",n.service.isBusy)("visible",n.service.isVisible)},dependencies:[r.IR2,b.sg,b.O5,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.sg,l.u,r.fuE,r.Uqp,r.YzZ,_.e2,m.hL,m.kG,m.J5,_.r0,_.zS,_.YM,f.vv,l.UX,p.M,p.J4,p.Oz],encapsulation:2})}return e})(),S=(()=>{class e{constructor(){this.list=(0,t.f3M)(r.XNV),this.track=(0,t.f3M)(r.vR3),this.service=(0,t.f3M)(M),this.serviceDetail=(0,t.f3M)(h),this.title="::Books",this.bookTypeOptions=T}ngOnInit(){this.service.hookToQuery()}clearFilters(){this.service.clearFilters()}showForm(){this.serviceDetail.showForm()}create(){this.serviceDetail.selected=void 0,this.serviceDetail.showForm()}update(o){this.serviceDetail.update(o)}delete(o){this.service.delete(o)}exportToExcel(){this.service.exportToExcel()}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275dir=t.lG2({type:e,standalone:!0})}return e})();var v=s(89364);function O(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.create())}),t._UZ(1,"i",17),t._uU(2),t.ALo(3,"abpLocalization"),t.qZA()}2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"::NewBook")," "))}function j(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",45)(1,"button",46),t.NdJ("click",function(){t.CHM(o),t.oxw();const n=t.MAs(18);return n.writeValue(null),t.KtG(n.manualDateChange(null,!0))}),t.ALo(2,"abpLocalization"),t._UZ(3,"i",47),t.qZA()()}2&e&&(t.xp6(1),t.Q6J("title",t.lcZ(2,1,"AbpUi::Clear")))}function G(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",45)(1,"button",46),t.NdJ("click",function(){t.CHM(o),t.oxw();const n=t.MAs(28);return n.writeValue(null),t.KtG(n.manualDateChange(null,!0))}),t.ALo(2,"abpLocalization"),t._UZ(3,"i",47),t.qZA()()}2&e&&(t.xp6(1),t.Q6J("title",t.lcZ(2,1,"AbpUi::Clear")))}function P(e,a){if(1&e&&(t.TgZ(0,"option",39),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()),2&e){const o=a.$implicit;t.Q6J("ngValue",o.value),t.xp6(1),t.hij(" ",t.lcZ(2,2,"::Enum:BookType."+o.value)," ")}}const d=()=>({standalone:!0});function Q(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"abp-advanced-entity-filters-form")(1,"form",18,19),t.NdJ("keyup.enter",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.list.get())}),t.TgZ(3,"div",20)(4,"div",21)(5,"div",22)(6,"label",23),t._uU(7),t.ALo(8,"abpLocalization"),t.qZA(),t.TgZ(9,"input",24),t.NdJ("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.name=n)}),t.qZA()()(),t.TgZ(10,"div",21)(11,"div",22)(12,"label",25),t._uU(13),t.ALo(14,"abpLocalization"),t.qZA(),t.TgZ(15,"div",26)(16,"input",27,28),t.NdJ("click",function(){t.CHM(o);const n=t.MAs(18);return t.KtG(n.toggle())})("keyup.space",function(){t.CHM(o);const n=t.MAs(18);return t.KtG(n.toggle())})("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.publishDateMin=n)}),t.qZA(),t.YNc(19,j,4,3,"div",29),t.qZA()()(),t.TgZ(20,"div",21)(21,"div",22)(22,"label",30),t._uU(23),t.ALo(24,"abpLocalization"),t.qZA(),t.TgZ(25,"div",26)(26,"input",31,32),t.NdJ("click",function(){t.CHM(o);const n=t.MAs(28);return t.KtG(n.toggle())})("keyup.space",function(){t.CHM(o);const n=t.MAs(28);return t.KtG(n.toggle())})("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.publishDateMax=n)}),t.qZA(),t.YNc(29,G,4,3,"div",29),t.qZA()()(),t.TgZ(30,"div",21)(31,"div",22)(32,"label",33),t._uU(33),t.ALo(34,"abpLocalization"),t.qZA(),t.TgZ(35,"input",34),t.NdJ("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.priceMin=n)}),t.qZA()()(),t.TgZ(36,"div",21)(37,"div",22)(38,"label",35),t._uU(39),t.ALo(40,"abpLocalization"),t.qZA(),t.TgZ(41,"input",36),t.NdJ("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.priceMax=n)}),t.qZA()()(),t.TgZ(42,"div",21)(43,"div",22)(44,"label",37),t._uU(45),t.ALo(46,"abpLocalization"),t.qZA(),t.TgZ(47,"select",38),t.NdJ("ngModelChange",function(n){const u=t.CHM(o).ngIf;return t.KtG(u.type=n)}),t._UZ(48,"option",39),t.YNc(49,P,3,4,"option",40),t.qZA()()(),t.TgZ(50,"div",41)(51,"div",20)(52,"div",42)(53,"button",43),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.clearFilters())}),t.TgZ(54,"span"),t._uU(55),t.ALo(56,"abpLocalization"),t.qZA()()(),t.TgZ(57,"div",42)(58,"button",44),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.list.get())}),t.TgZ(59,"span"),t._uU(60),t.ALo(61,"abpLocalization"),t.qZA()()()()()()()()}if(2&e){const o=a.ngIf,i=t.MAs(17),n=t.MAs(27),c=t.oxw();t.xp6(7),t.hij(" ",t.lcZ(8,25,"::Name")," "),t.xp6(2),t.Q6J("ngModel",o.name)("ngModelOptions",t.DdM(41,d)),t.xp6(4),t.hij(" ",t.lcZ(14,27,"::MinPublishDate")," "),t.xp6(3),t.Q6J("ngModel",o.publishDateMin)("ngModelOptions",t.DdM(42,d)),t.xp6(3),t.Q6J("ngIf",i.value),t.xp6(4),t.hij(" ",t.lcZ(24,29,"::MaxPublishDate")," "),t.xp6(3),t.Q6J("ngModel",o.publishDateMax)("ngModelOptions",t.DdM(43,d)),t.xp6(3),t.Q6J("ngIf",n.value),t.xp6(4),t.hij(" ",t.lcZ(34,31,"::MinPrice")," "),t.xp6(2),t.Q6J("ngModel",o.priceMin)("ngModelOptions",t.DdM(44,d)),t.xp6(4),t.hij(" ",t.lcZ(40,33,"::MaxPrice")," "),t.xp6(2),t.Q6J("ngModel",o.priceMax)("ngModelOptions",t.DdM(45,d)),t.xp6(4),t.hij(" ",t.lcZ(46,35,"::Type")," "),t.xp6(2),t.Q6J("ngModel",o.type)("ngModelOptions",t.DdM(46,d)),t.xp6(1),t.Q6J("ngValue",null),t.xp6(1),t.Q6J("ngForOf",c.bookTypeOptions)("ngForTrackBy",c.track.by("value")),t.xp6(6),t.Oqu(t.lcZ(56,37,"AbpUi::Clear")),t.xp6(5),t.Oqu(t.lcZ(61,39,"AbpUi::Refresh"))}}function V(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",53),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().row,c=t.oxw();return t.KtG(c.update(n))}),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()}2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"AbpUi::Edit")," "))}function H(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",53),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().row,c=t.oxw();return t.KtG(c.delete(n))}),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()}2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"AbpUi::Delete")," "))}function I(e,a){1&e&&(t.TgZ(0,"div",48)(1,"button",49),t._UZ(2,"i",50),t._uU(3),t.ALo(4,"abpLocalization"),t.qZA(),t.TgZ(5,"div",51),t.YNc(6,V,3,3,"button",52)(7,H,3,3,"button",52),t.qZA()()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,3,"AbpUi::Actions")," "),t.xp6(3),t.Q6J("abpPermission","fandaqapp.Books.Edit"),t.xp6(1),t.Q6J("abpPermission","fandaqapp.Books.Delete"))}function K(e,a){1&e&&t._uU(0),2&e&&t.hij(" ",a.row.name," ")}function Y(e,a){1&e&&(t._uU(0),t.ALo(1,"date")),2&e&&t.hij(" ",t.lcZ(1,1,a.row.publishDate)," ")}function R(e,a){1&e&&t._uU(0),2&e&&t.hij(" ",a.row.price," ")}function X(e,a){if(1&e&&(t._uU(0),t.ALo(1,"abpLocalization")),2&e){const o=a.row;t.hij(" ",null!==o.type?t.lcZ(1,1,"::Enum:BookType."+o.type):""," ")}}let A=(()=>{class e extends S{static#t=this.\u0275fac=(()=>{let o;return function(n){return(o||(o=t.n5z(e)))(n||e)}})();static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-book"]],standalone:!0,features:[t._Bn([r.XNV,M,h,{provide:p.DO,useClass:_._A}]),t.qOj,t.jDz],decls:29,vars:31,consts:[[3,"title"],[1,"col"],[1,"text-lg-end","pt-2"],["type","button",1,"btn","btn-primary","btn-sm","mx-2",3,"disabled","click"],["class","btn btn-primary btn-sm","type","button",3,"click",4,"abpPermission"],["localizationSourceName","",3,"list"],[4,"ngIf"],[1,"card"],[1,"card-body"],["default","",3,"rows","count","list"],[3,"name","maxWidth","width","sortable"],["ngx-datatable-cell-template",""],["prop","name",3,"name"],["prop","publishDate",3,"name"],["prop","price",3,"name"],["prop","type",3,"name"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-plus","me-1"],[3,"keyup.enter"],["filterForm",""],[1,"row"],[1,"col-12","col-sm-auto"],[1,"mb-3"],["for","nameFilter",1,"form-label"],["id","nameFilter",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","minPublishDate",1,"form-label"],["validationTarget","",1,"input-group"],["id","minPublishDate","name","minPublishDate","ngbDatepicker","","container","body","readonly","",1,"form-control",3,"ngModel","ngModelOptions","click","keyup.space","ngModelChange"],["minPublishDateInput","","minPublishDateDatepicker","ngbDatepicker"],["class","input-group-append",4,"ngIf"],["for","maxPublishDate",1,"form-label"],["id","maxPublishDate","name","maxPublishDate","ngbDatepicker","","readonly","",1,"form-control",3,"ngModel","ngModelOptions","click","keyup.space","ngModelChange"],["maxPublishDateInput","","maxPublishDateDatepicker","ngbDatepicker"],["for","minPrice",1,"form-label"],["id","minPrice","type","number",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","maxPrice",1,"form-label"],["id","maxPrice","type","number",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","typeFilter",1,"form-label"],["id","typeFilter",1,"form-select","form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-12","col-sm-auto","align-self-end","mb-3"],[1,"col-6","col-sm-auto","d-grid"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"input-group-append"],["type","button",1,"btn","btn-link","px-2",3,"title","click"],["aria-hidden","true",1,"fa","fa-times"],["ngbDropdown","","container","body",1,"d-inline-block"],["data-toggle","dropdown","aria-haspopup","true","ngbDropdownToggle","",1,"btn","btn-primary","btn-sm","dropdown-toggle"],["aria-hidden","true",1,"fa","fa-cog","me-1"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"click",4,"abpPermission"],["ngbDropdownItem","",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"abp-page",0),t.ALo(1,"abpLocalization"),t.TgZ(2,"abp-page-toolbar-container",1)(3,"div",2)(4,"button",3),t.NdJ("click",function(){return n.exportToExcel()}),t._uU(5),t.ALo(6,"abpLocalization"),t.qZA(),t.YNc(7,O,4,3,"button",4),t.qZA()(),t.TgZ(8,"abp-advanced-entity-filters",5),t.YNc(9,Q,62,47,"abp-advanced-entity-filters-form",6),t.qZA(),t.TgZ(10,"div",7)(11,"div",8)(12,"ngx-datatable",9)(13,"ngx-datatable-column",10),t.ALo(14,"abpLocalization"),t.YNc(15,I,8,5,"ng-template",11),t.qZA(),t.TgZ(16,"ngx-datatable-column",12),t.ALo(17,"abpLocalization"),t.YNc(18,K,1,1,"ng-template",11),t.qZA(),t.TgZ(19,"ngx-datatable-column",13),t.ALo(20,"abpLocalization"),t.YNc(21,Y,2,3,"ng-template",11),t.qZA(),t.TgZ(22,"ngx-datatable-column",14),t.ALo(23,"abpLocalization"),t.YNc(24,R,1,1,"ng-template",11),t.qZA(),t.TgZ(25,"ngx-datatable-column",15),t.ALo(26,"abpLocalization"),t.YNc(27,X,2,3,"ng-template",11),t.qZA()()()()(),t._UZ(28,"app-book-detail-modal")),2&i&&(t.Q6J("title",t.lcZ(1,17,n.title)),t.xp6(4),t.Q6J("disabled",n.service.isExportToExcelBusy),t.xp6(1),t.hij(" ",t.lcZ(6,19,"::ExportToExcel")," "),t.xp6(2),t.Q6J("abpPermission","fandaqapp.Books.Create"),t.xp6(1),t.Q6J("list",n.list),t.xp6(1),t.Q6J("ngIf",n.service.filters),t.xp6(3),t.Q6J("rows",n.service.data.items)("count",n.service.data.totalCount)("list",n.list),t.xp6(1),t.Q6J("name",t.lcZ(14,21,"AbpUi::Actions"))("maxWidth",150)("width",150)("sortable",!1),t.xp6(3),t.s9C("name",t.lcZ(17,23,"::Name")),t.xp6(3),t.s9C("name",t.lcZ(20,25,"::PublishDate")),t.xp6(3),t.s9C("name",t.lcZ(23,27,"::Price")),t.xp6(3),t.s9C("name",t.lcZ(26,29,"::Type")))},dependencies:[p.lQ,p.M,p.J4,p.XC,p.jt,p.iD,p.Vi,p.TH,p.oY,m.h2,m.kG,g.BG,g.II,g.Kv,r.IR2,b.sg,b.O5,b.uU,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.On,l.F,r.fuE,r.l97,_.e2,v.nE,v.UC,v.vq,_.j3,_.x7,f.vv,f.hE,f.Ii,E],styles:[".datatable-row-detail{background:transparent!important}"]})}return e})();var D=s(23758);const W=[{path:"",component:A,canActivate:[r.p2e,r.zaK]}];let $=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[D.Bz.forChild(W),D.Bz]})}return e})(),tt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[A,$]})}return e})()}}]);