"use strict";(self.webpackChunktbconline=self.webpackChunktbconline||[]).push([[443],{3443:(E,m,r)=>{r.r(m),r.d(m,{ViaphonenumberModule:()=>A});var h=r(6895),u=r(433),l=r(1135),s=r(8505),a=r(262),g=r(9646),n=r(8256),p=r(8958),b=r(4698);function f(e,i){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=n.oxw().ngIf;n.xp6(1),n.Oqu("geo"==t?"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8 \u10db\u10dd\u10d1\u10d8\u10da\u10e3\u10e0\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8":"Wrong mobile number")}}const d=function(e){return{checked:e}};function C(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",6),n._UZ(1,"img",7),n.TgZ(2,"h1"),n._uU(3),n.qZA(),n.TgZ(4,"button",8),n.NdJ("click",function(){n.CHM(t);const c=n.oxw(2);return n.KtG(c.nextClick())}),n._uU(5),n.qZA()()}if(2&e){const t=i.ngIf,o=n.oxw().ngIf,c=n.oxw();n.Q6J("ngClass",n.VKq(4,d,c.checked)),n.xp6(3),n.AsE("",t.name," ",t.surname,""),n.xp6(2),n.hij(" ","geo"==o?"\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8":"Next"," ")}}function D(e,i){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=n.oxw().ngIf;n.xp6(1),n.Oqu("geo"==t?"\u10d0\u10e0\u10d0\u10e1\u10d0\u10d9\u10db\u10d0\u10e0\u10d8\u10e1\u10d8 \u10d7\u10d0\u10dc\u10ee\u10d0 \u10d0\u10dc\u10d2\u10d0\u10e0\u10d8\u10e8\u10d6\u10d4":"You don't have enough amount")}}const x=function(e,i){return{checked:e,next:i}},M=function(e){return{"not-allowed":e}};function P(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"main")(1,"div",1)(2,"h1"),n._uU(3),n.qZA(),n._UZ(4,"input",2),n.TgZ(5,"h6"),n.YNc(6,f,2,1,"span",0),n.qZA()(),n.YNc(7,C,6,6,"div",3),n.ALo(8,"async"),n.TgZ(9,"div",4)(10,"h1"),n._uU(11),n.qZA(),n._UZ(12,"input",2),n.TgZ(13,"h6"),n.YNc(14,D,2,1,"span",0),n.qZA(),n.TgZ(15,"button",5),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.transfer())}),n._uU(16),n.qZA()()()}if(2&e){const t=i.ngIf,o=n.oxw();n.xp6(3),n.hij(" ","geo"==t?"\u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4\u10d7 \u10db\u10d8\u10db\u10e6\u10d4\u10d1\u10d8\u10e1 \u10db\u10dd\u10d1\u10d8\u10da\u10e3\u10e0\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8":"Enter the recipient's mobile number"," "),n.xp6(1),n.Q6J("formControl",o.inputMobile),n.xp6(2),n.Q6J("ngIf",o.wrongMobileNumber),n.xp6(1),n.Q6J("ngIf",n.lcZ(8,11,o.receiverData)),n.xp6(2),n.Q6J("ngClass",n.WLB(13,x,o.checked,o.next)),n.xp6(2),n.Oqu("geo"==t?"\u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4\u10d7 \u10d7\u10d0\u10dc\u10ee\u10d0":"Enter Amoount"),n.xp6(1),n.Q6J("formControl",o.inputAmount),n.xp6(2),n.Q6J("ngIf",o.enoughAmount),n.xp6(1),n.Q6J("disabled",o.enoughAmount||o.inputAmount.invalid)("ngClass",n.VKq(16,M,o.enoughAmount||o.inputAmount.invalid)),n.xp6(1),n.hij(" ","geo"==t?"\u10d2\u10d0\u10d3\u10d0\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0":"Transfer"," ")}}let O=(()=>{class e{constructor(t,o){this.loginServ=t,this.http=o,this.loggedUserId="",this.lang=new l.X("geo"),this.checked=!1,this.next=!1,this.wrongMobileNumber=!1,this.enoughAmount=!1,this.inputAmount=new u.NI("",[u.kI.required,u.kI.min(1)]),this.inputMobile=new u.NI("",[u.kI.required,u.kI.pattern("^[0-9]{11}$")]),this.getDate=new Date,this.today=`${this.getDate.getDate()}/${this.getDate.getMonth()}/${this.getDate.getFullYear()}`,this.receiverId="",this.transferrorAccount={account:"",amount:"",id:""},this.transferrorTransactions=[],this.usersData=[],this.receiverAccount={account:"",amount:"",id:""},this.receiverData=new l.X({name:"",surname:"",personalNumber:"",phoneNumber:"",username:"",password:"",id:""}),this.receiverTransactions=[],this.loginServ.loggedUserId.subscribe(c=>{this.loggedUserId=c}),this.loginServ.language.subscribe(c=>{this.lang.next(c)})}ngOnInit(){this.getTransferrorAccount(),this.getUsersData(),this.getTransferrorTransactions(),this.inputMobile.valueChanges.subscribe(t=>{this.wrongMobileNumber=!0,this.checked=!1,this.next=!1,this.usersData.forEach(o=>{o.phoneNumber==t&&(this.wrongMobileNumber=!1,this.receiverId=o.id,this.receiverData.next(o),this.checked=!0,this.getReceiverAccount(),this.getReceiverTransactions())})}),this.inputAmount.valueChanges.subscribe(t=>{this.enoughAmount=!1,Number(t)>Number(this.transferrorAccount.amount)&&(this.enoughAmount=!0)})}getTransferrorAccount(){this.http.getAccount(this.loggedUserId).pipe((0,s.b)(t=>{this.transferrorAccount=t}),(0,a.K)(t=>(console.log(t.message),(0,g.of)("error")))).subscribe()}getTransferrorTransactions(){this.http.getTransaction(this.loggedUserId).pipe((0,s.b)(t=>{this.transferrorTransactions=t.transactions}),(0,a.K)(t=>(console.log(t.message),(0,g.of)("error")))).subscribe()}getUsersData(){this.http.getUsers().pipe((0,s.b)(t=>{this.usersData=t}),(0,a.K)(t=>(console.log(t.message),(0,g.of)("error")))).subscribe()}getReceiverAccount(){this.http.getAccount(this.receiverId).pipe((0,s.b)(t=>{this.receiverAccount=t}),(0,a.K)(t=>(console.log(t.message),(0,g.of)("error")))).subscribe()}getReceiverTransactions(){this.http.getTransaction(this.receiverId).pipe((0,s.b)(t=>{this.receiverTransactions=t.transactions}),(0,a.K)(t=>(console.log(t.message),(0,g.of)("error")))).subscribe()}nextClick(){this.next=!0}transfer(){this.transferrorAccount.amount=String(Number(this.transferrorAccount.amount)-Number(this.inputAmount.value)),this.receiverAccount.amount=String(Number(this.receiverAccount.amount)+Number(this.inputAmount.value)),this.transferrorTransactions.push({date:this.today,receiver:this.receiverAccount.account,transferror:this.transferrorAccount.account,amount:Number(this.inputAmount.value)}),this.receiverTransactions.push({date:this.today,receiver:this.receiverAccount.account,transferror:this.transferrorAccount.account,amount:Number(this.inputAmount.value)}),this.http.updateTransactions(this.transferrorTransactions,this.loggedUserId).subscribe(),this.http.updateTransactions(this.receiverTransactions,this.receiverId).subscribe(),this.http.updateAccount(this.receiverAccount).subscribe(),this.http.updateAccount(this.transferrorAccount).subscribe(),this.inputMobile.reset(),this.inputAmount.reset(),this.wrongMobileNumber=!1,this.checked=!1,this.next=!1}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(p.r),n.Y36(b.f))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-phonenumber"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"check-box"],["type","number",3,"formControl"],["class","user-box",3,"ngClass",4,"ngIf"],[1,"confirm-box",3,"ngClass"],[3,"disabled","ngClass","click"],[1,"user-box",3,"ngClass"],["src","../../../../../../../assets/main-page/userlogo.png","alt",""],[3,"click"]],template:function(t,o){1&t&&(n.YNc(0,P,17,18,"main",0),n.ALo(1,"async")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,o.lang))},dependencies:[h.mk,h.O5,u.Fj,u.wV,u.JJ,u.oH,h.Ov],styles:["main[_ngcontent-%COMP%]{width:1280px;height:300px;margin:50px auto;overflow:hidden;position:relative}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]{width:33%;height:100%;background-color:#005a96;position:absolute;top:0;left:0;border-radius:25px;transition:.5s linear;animation:start .5s linear}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px;color:#fff}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 30px;border:0;font-size:25px;background-color:#92278f;border-radius:10px;color:#fff}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#6a1c68;cursor:pointer}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]{z-index:3;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:50px 0}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{width:300px;height:25px;text-align:center;color:#fff}main[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   .not-allowed[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]   .not-allowed[_ngcontent-%COMP%]:hover{cursor:not-allowed}main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]{z-index:2;padding-bottom:30px;display:flex;flex-direction:column;justify-content:space-around;align-items:center}main[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}main[_ngcontent-%COMP%]   .confirm-box[_ngcontent-%COMP%]{z-index:1}main[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]{left:33.5%}main[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{left:67%}@keyframes start{0%{left:-33%}to{left:0}}"],changeDetection:0}),e})();var _=r(7590),v=r(346);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[h.ez,_.m,v.Bz.forChild([{path:"",component:O}])]}),e})()}}]);