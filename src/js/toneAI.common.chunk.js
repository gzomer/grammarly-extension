(self.webpackChunk=self.webpackChunk||[]).push([[725],{60797:(e,t,i)=>{i.d(t,{cp:()=>a,oA:()=>u});var n=i(5114),s=i(66310),r=i(40151),l=i(76974),o=i(28043);function a(e){return s.w(n.fold((function(){return r.E}),e))}var u=a(l.of);o.x((function(e,t){return n.isNone(e)&&n.isNone(t)||n.isSome(e)&&n.isSome(t)}))},72311:(e,t,i)=>{i.r(t),i.d(t,{ToneAIFeature:()=>w});var n=i(40327),s=i(17404),r=i(90361),l=i(40018),o=i(44586),a=i(14601),u=i(85985),d=i(77176),A=i(78674),p=i(93508),c=i(16118),g=i(41398),T=i(60797),h=i(17594),_=i(15646),b=i(77610),I=i(35416),v=i(83078),U=i(5114);class w{constructor(e,t,i){this._alertStateService=e,this._getSessionUuid=t,this._gnar=i}initCardActionsProcessing(e,t,i,r,l){return new o.y((()=>{const o=new a.w;o.add(this._alertStateService.newlyHighlightedAlerts.pipe(u.h(s.S.isToneAIAlert)).subscribe((e=>this._gnar.toneAIAlertUnderlineShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),o.add(w._getToneAIAlertObservable(r.pipe(u.h(b.C.isToneAIItem),d.U((e=>e.activeAlert.id))),t).subscribe((e=>this._gnar.toneAIAssistantMiniCardShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),o.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertCardShow),d.U((e=>e.alertId))),t).pipe(A.b(300)).subscribe((e=>this._gnar.toneAIAssistantFullCardShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),o.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertApplyAction),d.U((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardReplacementApply(this._getSessionUuidValue(),w._getToneRewriteType(e))))),w._subscribeToMuteOrUndoMuteButtonClick(o,e,i,t,_.lY.isMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardMuteButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e)))),w._subscribeToMuteOrUndoMuteButtonClick(o,e,i,t,_.lY.isUndoMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardUndoMuteButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e)))),o.add(w._getToneAIAlertObservable(l.pipe(u.h(h.$.isToneAI),d.U((e=>e.id))),t).subscribe((e=>this._gnar.toneAIAlertUnderlineClick(this._getSessionUuidValue(),w._getToneRewriteType(e)))));const T=e.pipe(u.h(_.lY.isToneAIChangeToneAlternativeAction));return o.add(T.pipe(p.O(null),c.G(),u.h((([e,t])=>(null==e?void 0:e.selectedToneAlternativeIdx)!==(null==t?void 0:t.selectedToneAlternativeIdx))),d.U((([e,t])=>{var i,n;return{oldToneAlternativeIdx:null!==(i=null==e?void 0:e.selectedToneAlternativeIdx)&&void 0!==i?i:null,newToneAlternativeIdx:null!==(n=null==t?void 0:t.selectedToneAlternativeIdx)&&void 0!==n?n:null}})),g.M(w._getToneAIAlertObservable(T.pipe(d.U((e=>e.alertId))),t))).subscribe((([{oldToneAlternativeIdx:e,newToneAlternativeIdx:t},i])=>(0,n.pipe)(i.extraProperties.toneAI,v.bw((n=>{this._gnar.toneAIAssistantFullCardSliderMove(null!==t?n.toneAlternatives[t].name:"",null!==e?n.toneAlternatives[e].name:"",this._getSessionUuidValue(),w._getToneRewriteType(i))})))))),o.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertIgnoreAction),d.U((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardDismissButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e))))),()=>o.unsubscribe()}))}_getSessionUuidValue(){return(0,n.pipe)(this._getSessionUuid(),U.getOrElse((()=>"")))}static _getToneRewriteType(e){return`${e.patternName.split("/").slice(2).join("/")}${e.patternNameQualifier?`_${e.patternNameQualifier}`:""}`}static _subscribeToMuteOrUndoMuteButtonClick(e,t,i,s,l,o){e.add(w._getToneAIAlertObservable(t.pipe(u.h(l),g.M(i),d.U((([e,t])=>I.nL.hasItems(t)?(0,n.pipe)(t.currentLens.items.get(e.id),U.fold((()=>null),(e=>e.value))):null)),u.h(r.fQ),u.h(b.C.isToneAIItem),d.U((e=>e.activeAlert.id))),s).subscribe(o))}static _getToneAIAlertObservable(e,t){return e.pipe(d.U(t.getById),T.oA,u.h(l.bZ.isToneAI))}}}}]);