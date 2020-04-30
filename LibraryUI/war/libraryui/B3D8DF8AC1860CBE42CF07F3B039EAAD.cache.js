var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.libraryui;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = 'B3D8DF8AC1860CBE42CF07F3B039EAAD';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {5:1}, $intern_3 = {5:1, 18:1, 12:1}, $intern_4 = {20:1, 8:1, 5:1, 7:1, 6:1}, $intern_5 = {19:1, 8:1, 5:1, 7:1, 6:1}, $intern_6 = {8:1, 30:1, 5:1, 7:1, 6:1}, $intern_7 = {8:1, 48:1, 5:1, 7:1, 6:1}, $intern_8 = {8:1, 49:1, 5:1, 7:1, 6:1}, $intern_9 = {8:1, 50:1, 5:1, 7:1, 6:1}, $intern_10 = {29:1, 5:1, 7:1, 6:1}, $intern_11 = {10:1}, $intern_12 = {70:1, 5:1, 18:1, 12:1}, $intern_13 = {62:1, 5:1, 12:1}, $intern_14 = 4194303, $intern_15 = 1048575, $intern_16 = 4194304, $intern_17 = 17592186044416, $intern_18 = 524288, $intern_19 = -2147483648, $intern_20 = {114:1, 5:1}, $intern_21 = {16:1, 10:1, 14:1, 13:1, 15:1, 11:1, 9:1}, $intern_22 = {16:1, 10:1, 14:1, 13:1, 43:1, 15:1, 11:1, 9:1}, $intern_23 = {31:1, 194:1}, $intern_24 = {74:1, 45:1}, $intern_25 = {31:1, 500:1}, $intern_26 = 65536, $intern_27 = 131072, $intern_28 = 16777216, $intern_29 = 33554432, $intern_30 = 67108864, $intern_31 = {16:1, 10:1, 14:1, 13:1, 23:1, 15:1, 11:1, 9:1}, $intern_32 = {16:1, 10:1, 14:1, 13:1, 23:1, 15:1, 89:1, 11:1, 9:1}, $intern_33 = {53:1, 5:1, 7:1, 6:1}, $intern_34 = {87:1, 31:1}, $intern_35 = {142:1, 31:1}, $intern_36 = {191:1, 31:1}, $intern_37 = {64:1}, $intern_38 = {56:1}, $intern_39 = {5:1, 34:1, 190:1}, $intern_40 = {5:1, 7:1, 6:1, 61:1}, $intern_41 = {5:1, 189:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_6(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(144, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName_19(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_14(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 144);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration_0;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration_0;
    $onUpdate(this$static, (1 + $wnd.Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.container1.style['overflow'] = 'hidden';
    this$static.container2.style['overflow'] = 'hidden' , undefined;
    $onUpdate(this$static, 0);
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, true);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(186, 1, {});
_.duration_0 = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 186);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(454, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 454);
defineClass(540, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 540);
defineClass(140, 1, {140:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 140);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(485, 540, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 485);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(486, 140, {140:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 486);
function $cancelAnimationFrame(this$static, requestId){
  $remove_9(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {549:1, 5:1}, 141, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray(this$static.animationRequests, curAnimations), 549);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_9(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(487, 540, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_8(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 487);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(177, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 177);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(488, 177, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 488);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(141, 140, {140:1, 141:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 141);
function $onBrowserEvent(event_0){
  var eventType;
  eventType = event_0.type;
  $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined;
}

function AbstractCell(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents.length > 0) {
    events = new HashSet;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $putStringValue(events.map_0, event_0, events);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet(events)));
}

defineClass(455, 1, {});
var Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client', 'AbstractCell', 455);
function $render(data_0, sb){
  data_0 != null && $render_0(data_0 == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString(htmlEscape(data_0))), sb);
}

function AbstractSafeHtmlCell(renderer, consumedEvents){
  AbstractCell.call(this, consumedEvents);
  if (!renderer) {
    throw toJs(new IllegalArgumentException_0('renderer == null'));
  }
}

defineClass(456, 455, {});
var Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client', 'AbstractSafeHtmlCell', 456);
function Cell$Context(index_0, column){
  Cell$Context_0.call(this, index_0, column, 0);
}

function Cell$Context_0(index_0, column, subindex){
  this.index_0 = index_0;
  this.column = column;
  this.subindex = subindex;
}

defineClass(83, 1, {}, Cell$Context, Cell$Context_0);
_.column = 0;
_.index_0 = 0;
_.subindex = 0;
var Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client', 'Cell/Context', 83);
function $render_0(value_0, sb){
  !!value_0 && ($append_2(sb.sb, value_0.html_0) , sb);
}

function TextCell(){
  AbstractSafeHtmlCell.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer) , instance_2), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, []));
}

defineClass(187, 456, {}, TextCell);
var Lcom_google_gwt_cell_client_TextCell_2_classLit = createForClass('com.google.gwt.cell.client', 'TextCell', 187);
function Duration(){
  this.start_0 = now_1();
}

defineClass(152, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 152);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 57, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_2, 12, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 12, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(12, 1, {5:1, 12:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 12);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(67, 12, {5:1, 12:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 67);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(18, 67, $intern_3, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 18);
defineClass(117, 18, $intern_3);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 117);
defineClass(209, 117, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 209);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_6(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(65, 209, {65:1, 5:1, 18:1, 12:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 65);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw toJs(new IllegalArgumentException_0(message + '\n' + data_0));
}

defineClass(502, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 502);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
  TOP_WINDOW = $wnd;
}

function nativeSetText(element, scriptBody){
  $clinit_ScriptInjector();
  element.text = scriptBody;
}

var TOP_WINDOW;
function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = !this$static.window_0?($clinit_ScriptInjector() , window):this$static.window_0;
  doc = ($clinit_ScriptInjector() , wnd.document);
  scriptElement = doc.createElement('script');
  nativeSetText(scriptElement, this$static.scriptBody);
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
  this$static.removeTag && (scriptElement.parentNode.removeChild(scriptElement) , undefined);
  return scriptElement;
}

function $setRemoveTag(this$static, removeTag){
  this$static.removeTag = removeTag;
  return this$static;
}

function $setWindow(this$static, window_0){
  this$static.window_0 = window_0;
  return this$static;
}

function ScriptInjector$FromString(scriptBody){
  this.scriptBody = scriptBody;
}

defineClass(102, 1, {}, ScriptInjector$FromString);
_.removeTag = true;
var Lcom_google_gwt_core_client_ScriptInjector$FromString_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromString', 102);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 12)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_0(handler.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
    return;
  }
  reportToBrowser(instanceOf(e, 65)?castTo(e, 65).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 12)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(227, 502, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 227);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(228, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 228);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(229, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 229);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(514, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 514);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(210, 514, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 57, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 210);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(515, 514, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 57, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 515);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(211, 515, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 211);
function $html(this$static, html){
  $html_0(this$static.delegate_1, html);
  return this$static.returnBuilder;
}

defineClass(480, 1, {});
_.html_1 = function html_0(html){
  return $html(this, html);
}
;
_.isEndTagForbidden = false;
var Lcom_google_gwt_dom_builder_shared_AbstractElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'AbstractElementBuilderBase', 480);
defineClass(539, 1, {});
var Lcom_google_gwt_dom_builder_shared_ElementBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderFactory', 539);
function $assertCanAddStylePropertyImpl(this$static){
  $assertStartTagOpen(this$static, 'Style properties cannot be added after appending HTML or adding a child element.');
  if (this$static.isStyleClosed) {
    throw toJs(new IllegalStateException_0('Style properties must be added at the same time. If you already added style properties, you cannot add more after adding non-style attributes.'));
  }
  if (!this$static.isStyleOpen) {
    this$static.isStyleOpen = true;
    $append_2(this$static.sb, ' style="');
  }
}

function $assertEndTagNotForbidden(this$static, operation){
  if ($peek(this$static.stack_0).builder.isEndTagForbidden) {
    throw toJs(new UnsupportedOperationException_0($peek(this$static.stack_0).tagName_0 + ' does not support ' + operation));
  }
}

function $assertStartTagOpen(this$static, message){
  if (!this$static.isStartTagOpen) {
    throw toJs(new IllegalStateException_0(message));
  }
}

function $assertValidTagName(tagName){
  if (!$test(HTML_TAG_REGEX, tagName)) {
    throw toJs(new IllegalArgumentException_0('The specified tag name is invalid: ' + tagName));
  }
}

function $end(this$static){
  $endImpl(this$static, $peek(this$static.stack_0).tagName_0);
}

function $end_0(this$static, tagName){
  var topItem;
  topItem = $peek(this$static.stack_0).tagName_0;
  if (!$equalsIgnoreCase(topItem, tagName)) {
    throw toJs(new IllegalStateException_0('Specified tag "' + tagName + '" does not match the current element "' + topItem + '"'));
  }
  $endImpl(this$static, topItem);
}

function $endAllTags(this$static){
  while (this$static.stack_0.top_0) {
    $endImpl(this$static, $peek(this$static.stack_0).tagName_0);
  }
}

function $endImpl(this$static, tagName){
  $maybeCloseStartTag(this$static);
  $peek(this$static.stack_0).builder.isEndTagForbidden?$append_2(this$static.sb, ' />'):$append_2($append_2($append_2(this$static.sb, '<\/'), tagName), '>');
  this$static.isStartTagOpen = false;
  this$static.isStyleClosed = true;
  $pop(this$static.stack_0);
  this$static.isHtmlOrTextAdded = false;
}

function $endStyle(this$static){
  if (!this$static.isStyleOpen) {
    throw toJs(new IllegalStateException_0("Attempting to close a style attribute, but the style attribute isn't open"));
  }
  $maybeCloseStyleAttribute(this$static);
}

function $html_0(this$static, html){
  $assertStartTagOpen(this$static, 'html cannot be set on an element that already contains other content or elements.');
  $maybeCloseStartTag(this$static);
  $assertEndTagNotForbidden(this$static, 'html');
  this$static.isHtmlOrTextAdded = true;
  $append_2(this$static.sb, html.html_0);
}

function $maybeCloseStartTag(this$static){
  $maybeCloseStyleAttribute(this$static);
  if (this$static.isStartTagOpen) {
    this$static.isStartTagOpen = false;
    $peek(this$static.stack_0).builder.isEndTagForbidden || $append_2(this$static.sb, '>');
  }
}

function $maybeCloseStyleAttribute(this$static){
  if (this$static.isStyleOpen) {
    this$static.isStyleOpen = false;
    this$static.isStyleClosed = true;
    $append_2(this$static.sb, '"');
  }
}

function $onStart(this$static, tagName, builder){
  if (this$static.isEmpty) {
    this$static.isEmpty = false;
  }
   else if (!this$static.stack_0.top_0) {
    throw toJs(new IllegalStateException_0('You can only build one top level element.'));
  }
   else {
    $assertEndTagNotForbidden(this$static, 'child elements');
    if ($peek(this$static.stack_0).builder.isEndTagForbidden) {
      throw toJs(new UnsupportedOperationException_0($peek(this$static.stack_0).tagName_0 + ' does not support child elements.'));
    }
  }
  if (this$static.isHtmlOrTextAdded) {
    throw toJs(new IllegalStateException_0('Cannot append an element after setting text of html.'));
  }
  $assertValidTagName(tagName);
  $maybeCloseStartTag(this$static);
  $push_1(this$static.stack_0, builder, tagName);
  this$static.isStartTagOpen = true;
  this$static.isStyleOpen = false;
  this$static.isStyleClosed = false;
  this$static.isHtmlOrTextAdded = false;
}

defineClass(482, 1, {});
_.isEmpty = true;
_.isHtmlOrTextAdded = false;
_.isStartTagOpen = false;
_.isStyleClosed = false;
_.isStyleOpen = false;
var HTML_TAG_REGEX;
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl', 482);
function $assertNotEmpty(this$static){
  if (!this$static.top_0) {
    throw toJs(new IllegalStateException_0('There are no elements on the stack.'));
  }
}

function $peek(this$static){
  $assertNotEmpty(this$static);
  return this$static.top_0;
}

function $pop(this$static){
  var toRet;
  $assertNotEmpty(this$static);
  toRet = this$static.top_0;
  this$static.top_0 = this$static.top_0.next_0;
  --this$static.size_0;
  return toRet;
}

function $push_1(this$static, builder, tagName){
  var node;
  node = new ElementBuilderImpl$StackNode(tagName, builder);
  node.next_0 = this$static.top_0;
  this$static.top_0 = node;
  ++this$static.size_0;
}

function ElementBuilderImpl$FastPeekStack(){
}

defineClass(484, 1, {}, ElementBuilderImpl$FastPeekStack);
_.size_0 = 0;
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$FastPeekStack_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl/FastPeekStack', 484);
function ElementBuilderImpl$StackNode(tagName, builder){
  this.builder = builder;
  this.tagName_0 = tagName;
}

defineClass(483, 1, {}, ElementBuilderImpl$StackNode);
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$StackNode_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl/StackNode', 483);
function HtmlBuilderFactory(){
}

defineClass(138, 539, {}, HtmlBuilderFactory);
var instance_1;
var Lcom_google_gwt_dom_builder_shared_HtmlBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlBuilderFactory', 138);
function $asSafeHtml(this$static){
  $endAllTags(this$static);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString(this$static.sb.string);
}

function $attribute(this$static, name_0, value_0){
  $trustedAttribute(this$static, htmlEscape(name_0), value_0);
}

function $attribute_0(this$static, name_0, value_0){
  $trustedAttribute_0(this$static, htmlEscape(name_0), value_0);
}

function $startDiv(this$static){
  $trustedStart(this$static, 'div', this$static.divBuilder);
  return this$static.divBuilder;
}

function $startTD(this$static){
  $trustedStart(this$static, 'td', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTH(this$static){
  $trustedStart(this$static, 'th', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTR(this$static){
  $trustedStart(this$static, 'tr', this$static.tableRowBuilder);
  return this$static.tableRowBuilder;
}

function $startTableSection(this$static, tagName){
  !this$static.tableSectionBuilder && (this$static.tableSectionBuilder = new HtmlTableSectionBuilder(this$static));
  $trustedStart(this$static, tagName, this$static.tableSectionBuilder);
  return this$static.tableSectionBuilder;
}

function $styleProperty(this$static, style){
  $assertCanAddStylePropertyImpl(this$static);
  $append_2(this$static.sb, style.css_0);
  return this$static.stylesBuilder;
}

function $trustedAttribute(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_2($append_0($append_2($append_2($append_2(this$static.sb, ' '), name_0), '="'), value_0), '"');
}

function $trustedAttribute_0(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_2($append_2($append_2($append_2($append_2(this$static.sb, ' '), name_0), '="'), htmlEscape(value_0)), '"');
}

function $trustedStart(this$static, tagName, builder){
  $onStart(this$static, tagName, builder);
  $append_2($append_2(this$static.sb, '<'), tagName);
}

function HtmlBuilderImpl(){
  this.stack_0 = new ElementBuilderImpl$FastPeekStack;
  !HTML_TAG_REGEX && (HTML_TAG_REGEX = new RegExp('^[a-z][a-z0-9]*$', 'i'));
  this.divBuilder = new HtmlDivBuilder(this);
  new HtmlElementBuilder(this);
  new HtmlInputBuilder(this);
  new HtmlLIBuilder(this);
  new HtmlOptionBuilder(this);
  new HtmlSpanBuilder(this);
  this.stylesBuilder = new HtmlStylesBuilder(this);
  this.tableCellBuilder = new HtmlTableCellBuilder(this);
  this.tableRowBuilder = new HtmlTableRowBuilder(this);
  this.sb = new StringBuilder;
}

defineClass(139, 482, {}, HtmlBuilderImpl);
var Lcom_google_gwt_dom_builder_shared_HtmlBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlBuilderImpl', 139);
function $attribute_1(this$static, name_0, value_0){
  $attribute(this$static.delegate_0, name_0, value_0);
  return this$static.returnBuilder;
}

function $className(this$static, className){
  return $trustedAttribute_0(this$static.delegate_0, 'class', className) , this$static.returnBuilder;
}

function HtmlElementBuilderBase(delegate){
  HtmlElementBuilderBase_0.call(this, delegate, false);
}

function HtmlElementBuilderBase_0(delegate, isEndTagForbidden){
  this.delegate_1 = delegate;
  this.isEndTagForbidden = isEndTagForbidden;
  this.returnBuilder = this;
  this.delegate_0 = delegate;
}

defineClass(55, 480, {});
var Lcom_google_gwt_dom_builder_shared_HtmlElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlElementBuilderBase', 55);
function HtmlDivBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(490, 55, {}, HtmlDivBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlDivBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlDivBuilder', 490);
function HtmlElementBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(491, 55, {}, HtmlElementBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlElementBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlElementBuilder', 491);
function HtmlInputBuilder(delegate){
  HtmlElementBuilderBase_0.call(this, delegate, true);
}

defineClass(492, 55, {}, HtmlInputBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlInputBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlInputBuilder', 492);
function HtmlLIBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(493, 55, {}, HtmlLIBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlLIBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlLIBuilder', 493);
function HtmlOptionBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(494, 55, {}, HtmlOptionBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlOptionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlOptionBuilder', 494);
function HtmlSpanBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(495, 55, {}, HtmlSpanBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlSpanBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlSpanBuilder', 495);
function $marginTop(this$static, value_0){
  return $styleProperty(this$static.delegate_0, new SafeStylesString('margin-top:' + value_0 + 'px' + ';'));
}

function $paddingLeft(this$static, value_0){
  return $styleProperty(this$static.delegate_0, new SafeStylesString('padding-left:' + value_0 + 'px' + ';'));
}

function $paddingRight(this$static, value_0){
  return $styleProperty(this$static.delegate_0, new SafeStylesString('padding-right:' + value_0 + 'px' + ';'));
}

function $position(this$static, value_0){
  return $styleProperty(this$static.delegate_0, new SafeStylesString('position:' + value_0.getCssName() + ';'));
}

function $trustedProperty(this$static, name_0){
  name_0 = toHyphenatedForm(name_0);
  return $styleProperty(this$static.delegate_0, new SafeStylesString(name_0 + ':' + '1' + ';'));
}

function HtmlStylesBuilder(delegate){
  this.delegate_0 = delegate;
}

function toHyphenatedForm(name_0){
  var hyphenated, matches, word;
  if (!camelCaseWord) {
    camelCaseMap = new HashMap;
    camelCaseWord = new RegExp('([A-Za-z])([^A-Z]*)', 'g');
    caseWord = new RegExp('[A-Z]([^A-Z]*)');
  }
  if (name_0.indexOf('-') != -1) {
    return name_0;
  }
  hyphenated = castToString($getStringValue(camelCaseMap, name_0));
  if (hyphenated == null) {
    hyphenated = '';
    while (matches = $exec(camelCaseWord, name_0)) {
      word = matches[0];
      if (!$exec(caseWord, word)) {
        hyphenated += '' + word;
      }
       else {
        hyphenated += '-' + $toLowerCase(matches[1], ($clinit_Locale() , ROOT));
        matches.length > 1 && (hyphenated += '' + matches[2]);
      }
    }
    $putStringValue(camelCaseMap, name_0, hyphenated);
  }
  return hyphenated;
}

defineClass(496, 1, {}, HtmlStylesBuilder);
var camelCaseMap, camelCaseWord, caseWord;
var Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlStylesBuilder', 496);
function $colSpan(this$static, colSpan){
  return $trustedAttribute(this$static.delegate_0, 'colSpan', colSpan) , castTo(this$static.returnBuilder, 501);
}

function HtmlTableCellBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(497, 55, {501:1}, HtmlTableCellBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlTableCellBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableCellBuilder', 497);
function $html_1(){
  throw toJs(new UnsupportedOperationException_0('Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.'));
}

function HtmlTableRowBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(489, 55, {}, HtmlTableRowBuilder);
_.html_1 = function html_1(html){
  return $html_1();
}
;
var Lcom_google_gwt_dom_builder_shared_HtmlTableRowBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableRowBuilder', 489);
function $html_2(){
  throw toJs(new UnsupportedOperationException_0('Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.'));
}

function HtmlTableSectionBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(481, 55, {}, HtmlTableSectionBuilder);
_.html_1 = function html_2(html){
  return $html_2();
}
;
var Lcom_google_gwt_dom_builder_shared_HtmlTableSectionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableSectionBuilder', 481);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getChild(this$static, index_0){
  return this$static.childNodes[index_0];
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getAbsoluteLeft(this$static){
  return $getAbsoluteLeftImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getAbsoluteTop(this$static){
  return $getAbsoluteTopImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setId(this$static, id_0){
  this$static.id = id_0;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createButtonElement(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.type = type_0;
  return e;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getScrollLeft(elem){
  var geckoVersion, style;
  geckoVersion = getGeckoVersion();
  if (!(geckoVersion != -1 && geckoVersion >= 1009000) && (style = elem.ownerDocument.defaultView.getComputedStyle(elem, null) , style.direction == 'rtl')) {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_0(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getGeckoVersion(){
  var result = /rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length >= 3) {
    var version = parseInt(result[1]) * 1000000 + parseInt(result[2]) * 1000 + parseInt(result.length >= 5 && !isNaN(result[4])?result[4]:0);
    return version;
  }
  return -1;
}

function isGecko192OrBefore(){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  return geckoVersion != -1 && geckoVersion <= 1009002;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getViewportElement(this$static){
  return $equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {5:1, 7:1, 6:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 6));
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 6);
function $clinit_Style$Cursor(){
  $clinit_Style$Cursor = emptyMethod;
  DEFAULT = new Style$Cursor$1;
  AUTO = new Style$Cursor$2;
  CROSSHAIR = new Style$Cursor$3;
  POINTER = new Style$Cursor$4;
  MOVE = new Style$Cursor$5;
  E_RESIZE = new Style$Cursor$6;
  NE_RESIZE = new Style$Cursor$7;
  NW_RESIZE = new Style$Cursor$8;
  N_RESIZE = new Style$Cursor$9;
  SE_RESIZE = new Style$Cursor$10;
  SW_RESIZE = new Style$Cursor$11;
  S_RESIZE = new Style$Cursor$12;
  W_RESIZE = new Style$Cursor$13;
  TEXT = new Style$Cursor$14;
  WAIT = new Style$Cursor$15;
  HELP = new Style$Cursor$16;
  COL_RESIZE = new Style$Cursor$17;
  ROW_RESIZE = new Style$Cursor$18;
}

function Style$Cursor(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$Cursor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, 1), $intern_2, 20, 0, [DEFAULT, AUTO, CROSSHAIR, POINTER, MOVE, E_RESIZE, NE_RESIZE, NW_RESIZE, N_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, W_RESIZE, TEXT, WAIT, HELP, COL_RESIZE, ROW_RESIZE]);
}

defineClass(20, 6, $intern_4);
var AUTO, COL_RESIZE, CROSSHAIR, DEFAULT, E_RESIZE, HELP, MOVE, NE_RESIZE, NW_RESIZE, N_RESIZE, POINTER, ROW_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, TEXT, WAIT, W_RESIZE;
var Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor', 20, values_0);
function Style$Cursor$1(){
  Style$Cursor.call(this, 'DEFAULT', 0);
}

defineClass(289, 20, $intern_4, Style$Cursor$1);
_.getCssName = function getCssName(){
  return 'default';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/1', 289, null);
function Style$Cursor$10(){
  Style$Cursor.call(this, 'SE_RESIZE', 9);
}

defineClass(298, 20, $intern_4, Style$Cursor$10);
_.getCssName = function getCssName_0(){
  return 'se-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/10', 298, null);
function Style$Cursor$11(){
  Style$Cursor.call(this, 'SW_RESIZE', 10);
}

defineClass(299, 20, $intern_4, Style$Cursor$11);
_.getCssName = function getCssName_1(){
  return 'sw-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/11', 299, null);
function Style$Cursor$12(){
  Style$Cursor.call(this, 'S_RESIZE', 11);
}

defineClass(300, 20, $intern_4, Style$Cursor$12);
_.getCssName = function getCssName_2(){
  return 's-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/12', 300, null);
function Style$Cursor$13(){
  Style$Cursor.call(this, 'W_RESIZE', 12);
}

defineClass(301, 20, $intern_4, Style$Cursor$13);
_.getCssName = function getCssName_3(){
  return 'w-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/13', 301, null);
function Style$Cursor$14(){
  Style$Cursor.call(this, 'TEXT', 13);
}

defineClass(302, 20, $intern_4, Style$Cursor$14);
_.getCssName = function getCssName_4(){
  return 'text';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/14', 302, null);
function Style$Cursor$15(){
  Style$Cursor.call(this, 'WAIT', 14);
}

defineClass(303, 20, $intern_4, Style$Cursor$15);
_.getCssName = function getCssName_5(){
  return 'wait';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/15', 303, null);
function Style$Cursor$16(){
  Style$Cursor.call(this, 'HELP', 15);
}

defineClass(304, 20, $intern_4, Style$Cursor$16);
_.getCssName = function getCssName_6(){
  return 'help';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/16', 304, null);
function Style$Cursor$17(){
  Style$Cursor.call(this, 'COL_RESIZE', 16);
}

defineClass(305, 20, $intern_4, Style$Cursor$17);
_.getCssName = function getCssName_7(){
  return 'col-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/17', 305, null);
function Style$Cursor$18(){
  Style$Cursor.call(this, 'ROW_RESIZE', 17);
}

defineClass(306, 20, $intern_4, Style$Cursor$18);
_.getCssName = function getCssName_8(){
  return 'row-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/18', 306, null);
function Style$Cursor$2(){
  Style$Cursor.call(this, 'AUTO', 1);
}

defineClass(290, 20, $intern_4, Style$Cursor$2);
_.getCssName = function getCssName_9(){
  return 'auto';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/2', 290, null);
function Style$Cursor$3(){
  Style$Cursor.call(this, 'CROSSHAIR', 2);
}

defineClass(291, 20, $intern_4, Style$Cursor$3);
_.getCssName = function getCssName_10(){
  return 'crosshair';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/3', 291, null);
function Style$Cursor$4(){
  Style$Cursor.call(this, 'POINTER', 3);
}

defineClass(292, 20, $intern_4, Style$Cursor$4);
_.getCssName = function getCssName_11(){
  return 'pointer';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/4', 292, null);
function Style$Cursor$5(){
  Style$Cursor.call(this, 'MOVE', 4);
}

defineClass(293, 20, $intern_4, Style$Cursor$5);
_.getCssName = function getCssName_12(){
  return 'move';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/5', 293, null);
function Style$Cursor$6(){
  Style$Cursor.call(this, 'E_RESIZE', 5);
}

defineClass(294, 20, $intern_4, Style$Cursor$6);
_.getCssName = function getCssName_13(){
  return 'e-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/6', 294, null);
function Style$Cursor$7(){
  Style$Cursor.call(this, 'NE_RESIZE', 6);
}

defineClass(295, 20, $intern_4, Style$Cursor$7);
_.getCssName = function getCssName_14(){
  return 'ne-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/7', 295, null);
function Style$Cursor$8(){
  Style$Cursor.call(this, 'NW_RESIZE', 7);
}

defineClass(296, 20, $intern_4, Style$Cursor$8);
_.getCssName = function getCssName_15(){
  return 'nw-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/8', 296, null);
function Style$Cursor$9(){
  Style$Cursor.call(this, 'N_RESIZE', 8);
}

defineClass(297, 20, $intern_4, Style$Cursor$9);
_.getCssName = function getCssName_16(){
  return 'n-resize';
}
;
var Lcom_google_gwt_dom_client_Style$Cursor$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/9', 297, null);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
  FLEX = new Style$Display$18;
  INLINE_FLEX = new Style$Display$19;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Display();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 19, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL, FLEX, INLINE_FLEX]);
}

defineClass(19, 6, $intern_5);
var BLOCK, FLEX, INITIAL, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 19, values_1);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(307, 19, $intern_5, Style$Display$1);
_.getCssName = function getCssName_17(){
  return 'none';
}
;
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 307, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(316, 19, $intern_5, Style$Display$10);
_.getCssName = function getCssName_18(){
  return 'table-column-group';
}
;
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 316, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(317, 19, $intern_5, Style$Display$11);
_.getCssName = function getCssName_19(){
  return 'table-header-group';
}
;
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 317, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(318, 19, $intern_5, Style$Display$12);
_.getCssName = function getCssName_20(){
  return 'table-footer-group';
}
;
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 318, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(319, 19, $intern_5, Style$Display$13);
_.getCssName = function getCssName_21(){
  return 'table-row-group';
}
;
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 319, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(320, 19, $intern_5, Style$Display$14);
_.getCssName = function getCssName_22(){
  return 'table-cell';
}
;
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 320, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(321, 19, $intern_5, Style$Display$15);
_.getCssName = function getCssName_23(){
  return 'table-column';
}
;
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 321, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(322, 19, $intern_5, Style$Display$16);
_.getCssName = function getCssName_24(){
  return 'table-row';
}
;
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 322, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(323, 19, $intern_5, Style$Display$17);
_.getCssName = function getCssName_25(){
  return 'initial';
}
;
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 323, null);
function Style$Display$18(){
  Style$Display.call(this, 'FLEX', 17);
}

defineClass(324, 19, $intern_5, Style$Display$18);
_.getCssName = function getCssName_26(){
  return 'flex';
}
;
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 324, null);
function Style$Display$19(){
  Style$Display.call(this, 'INLINE_FLEX', 18);
}

defineClass(325, 19, $intern_5, Style$Display$19);
_.getCssName = function getCssName_27(){
  return 'inline-flex';
}
;
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 325, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(308, 19, $intern_5, Style$Display$2);
_.getCssName = function getCssName_28(){
  return 'block';
}
;
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 308, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(309, 19, $intern_5, Style$Display$3);
_.getCssName = function getCssName_29(){
  return 'inline';
}
;
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 309, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(310, 19, $intern_5, Style$Display$4);
_.getCssName = function getCssName_30(){
  return 'inline-block';
}
;
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 310, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(311, 19, $intern_5, Style$Display$5);
_.getCssName = function getCssName_31(){
  return 'inline-table';
}
;
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 311, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(312, 19, $intern_5, Style$Display$6);
_.getCssName = function getCssName_32(){
  return 'list-item';
}
;
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 312, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(313, 19, $intern_5, Style$Display$7);
_.getCssName = function getCssName_33(){
  return 'run-in';
}
;
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 313, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(314, 19, $intern_5, Style$Display$8);
_.getCssName = function getCssName_34(){
  return 'table';
}
;
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 314, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(315, 19, $intern_5, Style$Display$9);
_.getCssName = function getCssName_35(){
  return 'table-caption';
}
;
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 315, null);
function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = emptyMethod;
  NONE_0 = new Style$OutlineStyle$1;
  DASHED = new Style$OutlineStyle$2;
  DOTTED = new Style$OutlineStyle$3;
  DOUBLE = new Style$OutlineStyle$4;
  GROOVE = new Style$OutlineStyle$5;
  INSET = new Style$OutlineStyle$6;
  OUTSET = new Style$OutlineStyle$7;
  RIDGE = new Style$OutlineStyle$8;
  SOLID = new Style$OutlineStyle$9;
}

function Style$OutlineStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$OutlineStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, 1), $intern_2, 30, 0, [NONE_0, DASHED, DOTTED, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID]);
}

defineClass(30, 6, $intern_6);
var DASHED, DOTTED, DOUBLE, GROOVE, INSET, NONE_0, OUTSET, RIDGE, SOLID;
var Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle', 30, values_2);
function Style$OutlineStyle$1(){
  Style$OutlineStyle.call(this, 'NONE', 0);
}

defineClass(326, 30, $intern_6, Style$OutlineStyle$1);
_.getCssName = function getCssName_36(){
  return 'none';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/1', 326, null);
function Style$OutlineStyle$2(){
  Style$OutlineStyle.call(this, 'DASHED', 1);
}

defineClass(327, 30, $intern_6, Style$OutlineStyle$2);
_.getCssName = function getCssName_37(){
  return 'dashed';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/2', 327, null);
function Style$OutlineStyle$3(){
  Style$OutlineStyle.call(this, 'DOTTED', 2);
}

defineClass(328, 30, $intern_6, Style$OutlineStyle$3);
_.getCssName = function getCssName_38(){
  return 'dotted';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/3', 328, null);
function Style$OutlineStyle$4(){
  Style$OutlineStyle.call(this, 'DOUBLE', 3);
}

defineClass(329, 30, $intern_6, Style$OutlineStyle$4);
_.getCssName = function getCssName_39(){
  return 'double';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/4', 329, null);
function Style$OutlineStyle$5(){
  Style$OutlineStyle.call(this, 'GROOVE', 4);
}

defineClass(330, 30, $intern_6, Style$OutlineStyle$5);
_.getCssName = function getCssName_40(){
  return 'groove';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/5', 330, null);
function Style$OutlineStyle$6(){
  Style$OutlineStyle.call(this, 'INSET', 5);
}

defineClass(331, 30, $intern_6, Style$OutlineStyle$6);
_.getCssName = function getCssName_41(){
  return 'inset';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/6', 331, null);
function Style$OutlineStyle$7(){
  Style$OutlineStyle.call(this, 'OUTSET', 6);
}

defineClass(332, 30, $intern_6, Style$OutlineStyle$7);
_.getCssName = function getCssName_42(){
  return 'outset';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/7', 332, null);
function Style$OutlineStyle$8(){
  Style$OutlineStyle.call(this, 'RIDGE', 7);
}

defineClass(333, 30, $intern_6, Style$OutlineStyle$8);
_.getCssName = function getCssName_43(){
  return 'ridge';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/8', 333, null);
function Style$OutlineStyle$9(){
  Style$OutlineStyle.call(this, 'SOLID', 8);
}

defineClass(334, 30, $intern_6, Style$OutlineStyle$9);
_.getCssName = function getCssName_44(){
  return 'solid';
}
;
var Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/9', 334, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO_0 = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_2, 48, 0, [VISIBLE, HIDDEN, SCROLL, AUTO_0]);
}

defineClass(48, 6, $intern_7);
var AUTO_0, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 48, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(335, 48, $intern_7, Style$Overflow$1);
_.getCssName = function getCssName_45(){
  return 'visible';
}
;
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 335, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(336, 48, $intern_7, Style$Overflow$2);
_.getCssName = function getCssName_46(){
  return 'hidden';
}
;
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 336, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(337, 48, $intern_7, Style$Overflow$3);
_.getCssName = function getCssName_47(){
  return 'scroll';
}
;
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 337, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(338, 48, $intern_7, Style$Overflow$4);
_.getCssName = function getCssName_48(){
  return 'auto';
}
;
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 338, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_2, 49, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(49, 6, $intern_8);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 49, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(339, 49, $intern_8, Style$Position$1);
_.getCssName = function getCssName_49(){
  return 'static';
}
;
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 339, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(340, 49, $intern_8, Style$Position$2);
_.getCssName = function getCssName_50(){
  return 'relative';
}
;
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 340, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(341, 49, $intern_8, Style$Position$3);
_.getCssName = function getCssName_51(){
  return 'absolute';
}
;
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 341, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(342, 49, $intern_8, Style$Position$4);
_.getCssName = function getCssName_52(){
  return 'fixed';
}
;
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 342, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 50, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(50, 6, $intern_9);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 50, values_5);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(343, 50, $intern_9, Style$TextAlign$1);
_.getCssName = function getCssName_53(){
  return 'center';
}
;
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 343, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(344, 50, $intern_9, Style$TextAlign$2);
_.getCssName = function getCssName_54(){
  return 'justify';
}
;
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 344, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(345, 50, $intern_9, Style$TextAlign$3);
_.getCssName = function getCssName_55(){
  return 'left';
}
;
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 345, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(346, 50, $intern_9, Style$TextAlign$4);
_.getCssName = function getCssName_56(){
  return 'right';
}
;
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 346, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 29, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(29, 6, $intern_10);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 29, values_6);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(280, 29, $intern_10, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 280, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(281, 29, $intern_10, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 281, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(282, 29, $intern_10, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 282, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(283, 29, $intern_10, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 283, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(284, 29, $intern_10, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 284, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(285, 29, $intern_10, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 285, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(286, 29, $intern_10, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 286, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(287, 29, $intern_10, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 287, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(288, 29, $intern_10, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 288, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(217, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 217);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  IMPL = new StyleInjector$StyleInjectorImpl;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  style['language'] = 'text/css';
  style.textContent = contents || '';
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head_0) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head_0 = elt;
  }
  return this$static.head_0;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head_0.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl(){
}

defineClass(216, 1, {}, StyleInjector$StyleInjectorImpl);
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 216);
function $setColSpan(this$static, colSpan){
  this$static.colSpan = colSpan;
}

defineClass(523, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 523);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(524, 523, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 524);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 34);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_1(), 106);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(528, 524, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 528);
function $clinit_BlurEvent(){
  $clinit_BlurEvent = emptyMethod;
  TYPE = new DomEvent$Type('blur', new BlurEvent);
}

function BlurEvent(){
}

defineClass(372, 528, {}, BlurEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 191).onBlur(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'BlurEvent', 372);
defineClass(529, 528, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 529);
defineClass(530, 529, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 530);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(263, 530, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 87).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 263);
defineClass(250, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 250);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(37, 250, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 37);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 34);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(106, 37, {106:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 106);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(277, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 277);
function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_1) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(249, 524, {}, AttachEvent);
_.dispatch = function dispatch_1(handler){
  castTo(handler, 142).onAttachOrDetach(this);
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_1;
}
;
_.attached = false;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 249);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(279, 524, {}, CloseEvent_0);
_.dispatch = function dispatch_2(handler){
  castTo(handler, 542);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 279);
function ValueChangeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_3) {
    event_0 = new ValueChangeEvent;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(378, 524, {}, ValueChangeEvent);
_.dispatch = function dispatch_3(handler){
  $validate_0(castTo(handler, 545).$$outer_0, false);
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 378);
defineClass(527, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 527);
function $castFireEvent(this$static, event_0){
  var e;
  try {
    $doFire(this$static.real, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 70)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
}

defineClass(535, 527, $intern_11);
var Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'EventBus', 535);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 70)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(91, 1, $intern_11, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 91);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_8(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(castTo(handler, 31));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 12)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_0(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_2(handler);
  removed && l.isEmpty_0() && (sourceMap = castTo($get_1(this$static.map_0, type_0), 64) , castTo(sourceMap.remove_3(source), 34) , sourceMap.isEmpty_0() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_1(this$static.map_0, type_0), 64);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 34);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_1(this$static.map_0, type_0), 64);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(source), 34);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_4(c$iterator), 499);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this);
}

function SimpleEventBus_0(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(122, 527, {}, SimpleEventBus);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 122);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(){
  SimpleEventBus_0.call(this);
}

defineClass(256, 122, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 256);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(278, 1, {544:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 278);
function SimpleEventBus_1(){
  this.real = new SimpleEventBus;
}

defineClass(373, 535, $intern_11, SimpleEventBus_1);
var Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'SimpleEventBus', 373);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty_0()?null:castTo(causes.iterator().next_1(), 12));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 12);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_1(), 12);
    first?(first = false):(b.string += '; ' , b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(70, 18, $intern_12, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 70);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(119, 70, $intern_12, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 119);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(387, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 387);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(388, 177, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 388);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 65)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 65)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(130, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 130);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(386, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 386);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(97, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 97);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(62, 67, $intern_13, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 62);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(391, 62, $intern_13, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 391);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(399, 62, $intern_13, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 399);
defineClass(538, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 538);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(389, 538, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 389);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT_0;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT_0) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT_0 = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 92, 0, [RTL, LTR, DEFAULT_0]);
}

defineClass(92, 6, {92:1, 5:1, 7:1, 6:1}, HasDirection$Direction);
var DEFAULT_0, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 92, values_7);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_14;
  a1 = value_0 >> 22 & $intern_14;
  a2 = value_0 < 0?$intern_15:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function compare_0(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_17) {
    a2 = round_int(value_0 / $intern_17);
    value_0 -= a2 * $intern_17;
  }
  a1 = 0;
  if (value_0 >= $intern_16) {
    a1 = round_int(value_0 / $intern_16);
    value_0 -= a1 * $intern_16;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_14 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_14 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_15;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_14, res1 & $intern_14, res2 & $intern_15);
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (compare_0(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_14 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_14, $intern_14, 524287);
  MIN_VALUE = create0(0, 0, $intern_18);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 12)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_16;
  }
  if (a2 == $intern_15) {
    return big_0.l + big_0.m * $intern_16 - $intern_17;
  }
  return big_0;
}

function eq(a, b){
  return compare_1(a, b) == 0;
}

function fromDouble_0(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_17) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_17;
    a3 = $intern_15;
  }
  a1 = round_int(value_0 / $intern_16);
  a0 = round_int(value_0 - a1 * $intern_16);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var login;
  $onModuleLoad_0();
  $clinit_LogConfiguration();
  $onModuleLoad();
  $clinit_MaterialDesignBase();
  $load();
  !startupState && (startupState = new StartupState);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$jQueryExtInitializer() , jQueryExt), true, false);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$stickythInitializer() , stickyth), true, false);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$tableSubHeadersInitializer() , tableSubHeaders), true, false);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$greedyScrollInitializer() , greedyScroll), true, false);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateEventsInitializer() , mutateEvents), true, false);
  injectJs(($clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateInitializer() , mutate), true, false);
  $clinit_StyleInjector();
  $push_0(toInject, 'table.table tbody tr.subheader,th span{-webkit-touch-callout:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}table.table .cell,table.table .widget-cell{-o-text-overflow:ellipsis}table.table .cell,table.table .widget-cell,th span{text-overflow:ellipsis;white-space:nowrap}*{margin:0;padding:0}body,html{height:100%;padding:0}table{font-family:Roboto,sans-serif}section.table-container ::-webkit-scrollbar{-webkit-overflow-scrolling:auto;-webkit-appearance:none;width:8px}section.table-container ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.3);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5)}th{text-transform:uppercase;padding:12px 5px 4px 20px}th span{display:inline-block;overflow:hidden;max-width:100px;-webkit-user-select:none;user-select:none}tr{text-align:left}.selection-none table.table tbody tr.data-row,.selection-none table.table tbody tr.data-row td.hover,.selection-none table.table tbody tr.data-row.selected td,.selection-none table.table tbody tr.data-row:hover{background:0 0}thead{border-bottom:1px solid #E3E3E3!important;font-size:12px;color:rgba(0,0,0,.54);z-index:500}thead tr{height:56px;background-color:#fff}tbody{font-size:13px;color:rgba(0,0,0,.87)}.overflow-hidden{overflow:hidden!important}tbody [type=checkbox]+label:before{border-radius:0!important}tbody [type=checkbox]+label{top:2px}tbody [type=checkbox].filled-in+label{top:6px}table.table th#col0.selection.frozen-col,tbody .frozen-col,thead .frozen-col div{display:flex;align-items:center}.frozen-col{left:0;top:auto;position:absolute}.max-height{height:100%!important}.inner-shadow{-moz-box-shadow:inset 18px 0 20px -20px #aaa;-webkit-box-shadow:inset 18px 0 20px -20px #aaa;box-shadow:inset 18px 0 20px -20px #aaa}.inner-scroll{overflow-x:hidden;overflow-y:visible}.x-scroll{overflow-x:scroll;height:15px;width:100%;overflow-y:hidden}.table-container{height:100%;width:100%;background-color:#fff}.table-container.stretch{width:100%!important;height:100%!important;max-height:100%!important}.table-container .progress{height:3px;top:-.6rem;margin:0 0 -3px;z-index:9001}table.table .cell{overflow:hidden}table.table tbody td{border-radius:0;padding:0 5px 0 20px}table.table td#col0.selection{width:45px}table.table tbody tr.data-row #col0.frozen-col:not([data-title]){padding-top:0!important;padding-left:20px!important}table.table tbody tr.data-row #col0.frozen-col:not([data-title]) label{top:0}table.table #colex{text-align:center}table.table #colex i{width:100%}table.table tbody tr.subheader{cursor:pointer;background-color:#fff;width:100%;height:46px;left:0;right:0;z-index:2;position:absolute;border-bottom:1px solid #E3E3E3;-webkit-user-select:none;user-select:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}table.table thead tr th,tr.disabled *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-touch-callout:none;-khtml-user-select:none}table.table tbody tr.subheader.expanded{-webkit-box-shadow:0 10px 9px -12px rgba(0,0,0,.9);-moz-box-shadow:0 10px 9px -12px rgba(0,0,0,.9);box-shadow:0 10px 9px -12px rgba(0,0,0,.9)}table.table .table-header{width:100%;display:inline-block}table.table thead th.selected{color:#000}table.table tbody tr.subheader.fixed{position:fixed}table.table tbody tr.subheader td{padding:10px 5px!important}table.table tbody tr.subheader span{position:relative;top:2px}table.table tbody tr.subheader td,table.table tbody tr.subheader th{white-space:nowrap;padding-top:8px!important;padding-bottom:8px!important}table.table tbody tr.subheader td:first-child,table.table tbody tr.subheader th:first-child{padding-left:18px!important}table.table tbody tr.selected,table.table tbody tr.selected td{background-color:#F5F5F5}table.table .mask{position:absolute;width:100%;height:100%;top:0;opacity:.2;background-color:#000;z-index:9002}.table-body,.title,.top-panel{position:relative}div.tool-panel ul.dropdown-content li{padding-left:8px}div.tool-panel ul.dropdown-content li label{height:50px;width:100%;padding-top:12px}div.tool-panel ul.dropdown-content li label:after,div.tool-panel ul.dropdown-content li label:before{top:11px}div.tool-panel ul.dropdown-content li input.filled-in+label:after,div.tool-panel ul.dropdown-content li input.filled-in+label:before{top:14px}section.table-container div.tool-panel ul.dropdown-content{max-height:350px!important;overflow-y:auto;overflow-x:hidden}section.table-container div.tool-panel ul.dropdown-content li>span{padding:3px 5px}.top-panel{width:100%;height:64px;display:inline-block;background-color:#9E9E9E;border-bottom:3px solid #D3D3D3;padding:19px 12px 3px 16px;color:#fff;z-index:5}.tool-panel i{margin-left:5px}.info-panel{float:left}.tool-panel{float:right}.title{top:-6px;margin-left:10px;font-size:16px}.table-body{width:100%;height:100vh;overflow-y:auto;overflow-x:hidden}.table-body:focus{outline:0}.table-footer{width:100%}.table-footer span.footer-left{float:left;text-align:left;width:33.333%}.table-footer span.footer-center{display:inline-block;text-align:center;margin:0 auto;width:33.333%}.table-footer span.footer-right{float:right;text-align:right;width:33.333%}tr.disabled *{opacity:.7;background:#e9e9e9;cursor:not-allowed;user-select:none}tr.disabled:hover{color:rgba(0,0,0,.87);cursor:not-allowed;background-color:transparent!important}tr .numeric{text-align:right}table.table thead tr th{background-color:#fff;user-select:none;padding-left:20px}table.table thead tr th.sortable,tr.data-row{cursor:pointer}table.table tbody tr.data-row{border-bottom:1px solid #E6E6E6;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.table tbody tr.data-row td.hover,table.table tbody tr.data-row:hover{background:#EEE;color:#000}table.table thead tr th.sortable:hover{color:rgba(0,0,0,.87)}table.table tbody tr.expansion td{padding:0!important}table.table tbody tr.expansion td div.expanded{max-height:600px;overflow:hidden;border-bottom:1px solid #E6E6E6}table.table tbody tr.expansion td div.expanded section.overlay{position:absolute;background:#fff;opacity:.5;font-size:28px;width:100%}table.table tbody tr.expansion td div.expanded section.overlay i{position:relative;left:50%;top:calc(40% - 19px)}table.table tbody tr.expansion td>div{display:block;width:100%;max-height:0;line-height:150%;overflow-y:hidden;-webkit-transition:all .25s cubic-bezier(.35,0,.35,1);-moz-transition:all .25s cubic-bezier(.35,0,.35,1);-o-transition:all .25s cubic-bezier(.35,0,.35,1);-ms-transition:all .25s cubic-bezier(.35,0,.35,1);transition:all .25s cubic-bezier(.35,0,.35,1)}table.table tbody tr.expansion td div .content{width:100%;height:100%;display:block;float:left;overflow:auto;background:#f5f5f5}table.table tbody tr.expansion td div h3.expanded_header{margin:0 0 15px;padding:0;font-size:16px;font-weight:400;color:#000;text-shadow:0 1px 0 #fff}table.table tbody tr.expansion td div h4.expanded_header{margin:0;padding:8px;font-size:14px;font-weight:400;color:#000;text-shadow:0 1px 0 #fff;background:#f5f5f5}table.table tbody tr.expansion td>div p{margin:4px 0!important;padding:0!important}@media only screen and (max-width:520px),(min-device-width:0px) and (max-device-width:519px){table.table tbody,table.table td:not(tr.expansion),table.table thead,table.table tr{display:inline-block}table.table{display:block!important}.top-panel{height:64px;padding-top:20px;padding-bottom:20px}.top-panel i{margin-top:-4px!important}table.table thead{display:none}table.table tbody tr.subheader.fixed{margin-top:-2px}tr.data-row td:before{content:attr(data-title);color:#000;padding-right:8px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}table.table .cell{color:#00082}table.table tbody td>div,tr.data-row td:before{width:50%;display:inline-block;vertical-align:middle}table.table .numeric{text-align:left!important}table.table tbody tr.data-row td:first-child:before{padding-right:6px!important}table.table tbody tr.data-row td:first-child label{top:6px}table.table tbody{display:table;width:100%;background:#e9e9e9}.table-body{background:#fff;height:440px;top:-6px}.selection-none table.table tbody tr.data-row,table.table tbody tr.data-row{display:table;width:94%!important;margin:12px auto!important;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);background:#fff;position:relative}table.table tbody tr.data-row.disabled{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}table.table tbody tr.data-row.disabled td{border:1px solid #d7d7d7}table.table tbody tr.data-row.selected{position:relative;background:#fff!important}table.table tbody tr.expansion td{width:94%!important;padding-top:0!important;margin:-12px auto auto}table.table tbody tr.expansion td div.expanded{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}tbody tr td#colex:before{display:none}tbody tr td#colex #expand{cursor:pointer;width:100px!important;background:#e9e9e9;border-radius:20px}table.table tbody tr.data-row #col0:not([data-title]){width:40px!important;height:40px!important;background:#e9e9e9;border-radius:100%;position:absolute;z-index:1;right:6px;left:initial!important;top:2px;box-shadow:none!important;padding-left:0!important;padding-top:0!important}table.table tbody tr.data-row #col0:not([data-title]) label{padding:0!important;margin-left:-4px;margin-top:3px}table.table tbody tr.data-row:hover,table.table tbody tr.selected td,table.table tbody tr.selected td.hover{background:#fff}table.table tbody td{padding:12px!important;line-height:150%!important;border-top:1px solid #e9e9e9;position:relative;width:100%!important;display:block!important;left:0!important;height:auto!important;border-bottom:none!important}table.table tbody tr.data-row #col0.frozen-col:not([data-title]){padding-left:0!important}table.table tbody tr.subheader th{min-width:initial!important;max-width:initial!important}table.table tbody tr td .widget-cell .input-field{margin:0}.inner-scroll{margin-left:0!important}.x-scroll{display:none}}');
  schedule();
  $push_0(toInject, '.table-container .data-pager{width:100%;position:relative;color:#9e9e9e!important;font-size:.8em;border-top:1px solid #e9e9e9;margin-bottom:0;padding:4px 4px 8px}.data-pager .num-page-panel .input-field input[type=number]{width:50px;text-align:center;border-bottom:none;font-size:1em;margin-bottom:0;height:2em;margin-top:6px}.data-pager .num-page-panel>span{padding-top:12px;margin-right:8px;display:inline-block}.data-pager .action-page-panel i,.data-pager .action-page-panel>span,.data-pager .rows-per-page-panel>span{float:right;margin-right:8px;margin-top:12px}.data-pager .action-page-panel i{margin-top:4px}.data-pager .action-page-panel i.disabled{background:#fff!important;color:#e9e9e9!important}.data-pager .action-page-panel,.data-pager .num-page-panel,.data-pager .rows-per-page-panel{float:right}.data-pager .rows-per-page-panel{width:200px;margin-right:40px}.data-pager .select-wrapper{float:right;width:44px;max-width:64px;margin-left:32px}.data-pager .select-dropdown{border:none;margin-bottom:0;font-size:1em}.data-pager .input-field.listbox-wrapper{margin-top:0}.data-pager .num-page-panel .input-field{display:inline;text-align:right;margin-top:13px;margin-bottom:-13px}.data-pager .input-field .select-wrapper .caret:before{right:4px;bottom:6px}.data-pager .input-field .select-wrapper input.select-dropdown{height:1.6em;line-height:1.6em;margin-top:12px;margin-bottom:0;font-size:1em}@media only screen and (max-width:520px),(min-device-width:0px) and (max-device-width:519px){.table-container .data-pager{margin-top:-6px;border-top:1px solid #e9e9e9;text-align:center}.table-container .data-pager .action-page-panel{margin-top:0!important}.table-container .data-pager .action-page-panel .arrow-prev{float:left}.table-container .data-pager .action-page-panel span{display:inline-block;float:none}}');
  schedule();
  login = new LoginPresenter;
  $show(login);
}

function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(88, 1, {88:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 88);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(200, 88, {88:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || ($getLevel(this) , $intern_19 > record.level.intValue())) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level.intValue();
  val >= ($clinit_Level() , 1000)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 200);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(201, 88, {88:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 201);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl = new LogConfiguration$LogConfigurationImplSevere;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(199, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 199);
function $configureClientSideLogging(this$static){
  this$static.root = $ensureLogger(getLogManager(), '');
  this$static.root.useParentHandlers = false;
  $setLevels();
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $add_8(l.handlers, console_0);
  dev = new DevelopmentModeLogHandler;
  $add_8(l.handlers, dev);
}

function $setLevels(){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = castTo(listParamMap.get_0('logLevel'), 34) , !paramsForName?null:castToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:parse_0(levelParam);
  if (level)
  ;
  else {
    $clinit_Level();
  }
}

defineClass(503, 1, {});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 503);
function LogConfiguration$LogConfigurationImplSevere(){
}

defineClass(198, 503, {}, LogConfiguration$LogConfigurationImplSevere);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplSevere', 198);
defineClass(531, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 531);
defineClass(532, 531, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 532);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_2(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_2(s, $toString_2(date)) , s.string += ' ' , $append_2(s, event_0.loggerName) , s.string += '\n' , $append_2(s, event_0.level.getName()) , s.string += ': ' , s.string));
  $append_2(message, event_0.msg);
  if (this$static.showStackTraces && !!event_0.thrown) {
    message.string += '\n';
    $printStackTraceImpl(event_0.thrown, new StackTracePrintStream(message), '', '');
  }
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(154, 532, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 154);
defineClass(516, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 516);
function FilterOutputStream(out){
}

defineClass(147, 516, {}, FilterOutputStream);
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 147);
function PrintStream(out){
  FilterOutputStream.call(this, out);
}

defineClass(118, 147, {}, PrintStream);
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 118);
function StackTracePrintStream(builder){
  PrintStream.call(this, new FilterOutputStream(null));
  this.builder = builder;
}

defineClass(265, 118, {}, StackTracePrintStream);
_.println = function println_0(str){
  $append_2(this.builder, str);
  $append_2(this.builder, '\n');
}
;
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 265);
function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function ImageResourcePrototype(name_0, url_0, width_0, height){
  this.name_0 = name_0;
  this.left_0 = 0;
  this.top_0 = 0;
  this.height_0 = height;
  this.width_0 = width_0;
  this.url_0 = url_0;
}

defineClass(136, 1, {}, ImageResourcePrototype);
_.getName = function getName(){
  return this.name_0;
}
;
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 136);
function $append(this$static, styles){
  $append_2(this$static.sb, styles.css_0);
  return this$static;
}

function SafeStylesBuilder(){
  this.sb = new StringBuilder;
}

defineClass(478, 1, {}, SafeStylesBuilder);
var Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesBuilder', 478);
function SafeStylesString(css){
  verifySafeStylesConstraints(css);
  this.css_0 = css;
}

defineClass(33, 1, {548:1, 33:1, 5:1}, SafeStylesString);
_.equals_0 = function equals_1(obj){
  if (!instanceOf(obj, 33)) {
    return false;
  }
  return $equals(this.css_0, castTo(castTo(obj, 548), 33).css_0);
}
;
_.hashCode_0 = function hashCode_3(){
  return getHashCode_0(this.css_0);
}
;
var Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesString', 33);
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw toJs(new NullPointerException_0('css is null'));
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html_0 = html;
}

defineClass(22, 1, $intern_20, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html_0;
}
;
_.equals_0 = function equals_2(obj){
  if (!instanceOf(obj, 114)) {
    return false;
  }
  return $equals(this.html_0, castTo(obj, 114).asString());
}
;
_.hashCode_0 = function hashCode_4(){
  return getHashCode_0(this.html_0);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 22);
function SafeHtmlBuilder(){
  this.sb = new StringBuilder;
}

defineClass(86, 1, {}, SafeHtmlBuilder);
var Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlBuilder', 86);
function SafeHtmlString(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html_0 = html;
}

defineClass(66, 1, $intern_20, SafeHtmlString);
_.asString = function asString_0(){
  return this.html_0;
}
;
_.equals_0 = function equals_3(obj){
  if (!instanceOf(obj, 114)) {
    return false;
  }
  return $equals(this.html_0, castTo(obj, 114).asString());
}
;
_.hashCode_0 = function hashCode_5(){
  return getHashCode_0(this.html_0);
}
;
_.toString_0 = function toString_7(){
  return 'safe: "' + this.html_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 66);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  EMPTY_SAFE_HTML = new SafeHtmlString('');
  HTML_CHARS_RE = new RegExp('[&<>\'"]');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  if (!$test(HTML_CHARS_RE, s)) {
    return s;
  }
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, EMPTY_SAFE_HTML, GT_RE, HTML_CHARS_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(42, 1, {547:1, 42:1}, SafeUriString);
_.equals_0 = function equals_4(obj){
  if (!instanceOf(obj, 42)) {
    return false;
  }
  return $equals(this.uri_0, castTo(castTo(obj, 547), 42).uri_0);
}
;
_.hashCode_0 = function hashCode_6(){
  return getHashCode_0(this.uri_0);
}
;
_.toString_0 = function toString_8(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 42);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

defineClass(536, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 536);
function SimpleSafeHtmlRenderer(){
}

defineClass(462, 1, {}, SimpleSafeHtmlRenderer);
var instance_2;
var Lcom_google_gwt_text_shared_SimpleSafeHtmlRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'SimpleSafeHtmlRenderer', 462);
function PassthroughParser(){
}

defineClass(375, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 375);
function PassthroughRenderer(){
}

defineClass(374, 536, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 374);
function $get(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw toJs(new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.'));
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(21, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 21);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $doc.createElement('div');
    setVisible(hiddenDiv, false);
    $appendChild(($clinit_RootPanel() , $doc.body), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(347, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 347);
function $addStyleName(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $removeStyleName(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  $setClassName(($clinit_DOM() , this$static.element), style);
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(11, 1, {13:1, 11:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}
;
_.setVisible = function setVisible_0(visible){
  setVisible(($clinit_DOM() , this.element), visible);
}
;
_.toString_0 = function toString_9(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString_0(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 11);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents_1(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent_0(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 23)) {
    castTo(this$static.parent_0, 23).remove_0(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(9, 11, $intern_21);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent_0(this, event_0);
}
;
_.onDetach = function onDetach(){
  if (!this.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this.onUnload();
    fire_0(this, false);
  }
   finally {
    try {
      this.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      this.element.__listener = null;
      this.attached = false;
    }
  }
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.setParent = function setParent(parent_0){
  $setParent(this, parent_0);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 9);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  instanceOf(widget, 43) && castTo(widget, 43);
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.isAttached();
  }
  return false;
}

defineClass(518, 9, $intern_22);
_.isAttached = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_0(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget.onAttach();
  $clinit_DOM();
  this.element.__listener = this;
  this.doAttachChildren();
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent_0(this, event_0);
  this.widget.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    this.onUnload();
    this.doDetachChildren();
    fire_0(this, false);
  }
   finally {
    this.widget.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, this.widget.resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 518);
function $addCellPreviewHandler(this$static, handler){
  return $addCellPreviewHandler_0(this$static.presenter, handler);
}

function $cellConsumesEventType(cell, eventType){
  var consumedEvents;
  consumedEvents = cell.consumedEvents;
  return !!consumedEvents && consumedEvents.coll.contains_0(eventType);
}

function $checkRowBounds(this$static, row){
  if (!(row >= 0 && row < $getVisibleItemCount(this$static.presenter))) {
    throw toJs(new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + $getRowCount(this$static.presenter)));
  }
}

function $setFocusable(this$static, elem, focusable){
  var focusImpl;
  if (focusable) {
    focusImpl = ($clinit_FocusImpl() , $clinit_FocusImpl() , implWidget);
    $setTabIndex(elem, this$static.tabIndex_0);
    this$static.accessKey_0 != 0 && focusImpl.setAccessKey(elem, this$static.accessKey_0);
  }
   else {
    elem.tabIndex = -1;
    elem.removeAttribute('tabIndex');
    elem.removeAttribute('accessKey');
  }
}

function $setKeyboardSelectionHandler(this$static, keyboardSelectionReg){
  if (this$static.keyboardSelectionReg) {
    $removeHandler(this$static.keyboardSelectionReg.real);
    this$static.keyboardSelectionReg = null;
  }
  this$static.keyboardSelectionReg = $addCellPreviewHandler_0(this$static.presenter, keyboardSelectionReg);
}

function $setKeyboardSelectionPolicy(this$static, policy){
  $setKeyboardSelectionPolicy_0(this$static.presenter, policy);
}

function $setRowCount(this$static, count){
  $setRowCount_0(this$static.presenter, count, true);
}

function $setRowData(this$static, values){
  $setRowCount(this$static, values.array.length);
  $setVisibleRange(this$static, new Range_0(0, values.array.length));
  $setRowData_0(this$static.presenter, values);
}

function $setSelectionModel(this$static, selectionModel){
  $setSelectionModel_0(this$static.presenter, selectionModel);
}

function $setVisibleRange(this$static, range){
  $setVisibleRange_0(this$static.presenter, range, false);
}

function $showOrHide(element, show){
  if (!element) {
    return;
  }
  show?(element.style['display'] = '' , undefined):(element.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
}

function AbstractHasData(widget, pageSize){
  var eventTypes;
  $initWidget(this, widget);
  this.presenter = new HasDataPresenter(new AbstractHasData$View(this), pageSize);
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'focus', eventTypes);
  $putStringValue(eventTypes.map_0, 'blur', eventTypes);
  $putStringValue(eventTypes.map_0, 'keydown', eventTypes);
  $putStringValue(eventTypes.map_0, 'keyup', eventTypes);
  $putStringValue(eventTypes.map_0, 'click', eventTypes);
  $putStringValue(eventTypes.map_0, 'mousedown', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
  $addCellPreviewHandler(this, new DefaultSelectionEventManager);
  $setKeyboardSelectionHandler(this, new AbstractHasData$DefaultKeyboardSelectionHandler(this));
}

defineClass(181, 518, $intern_22);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var eventTarget, eventType, target;
  !impl_0 && (impl_0 = new CellBasedWidgetImplStandard);
  if (this.isRefreshing) {
    return;
  }
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  if (!$isOrHasChild(($clinit_DOM() , this.element), eventTarget)) {
    return;
  }
  $onBrowserEvent_0(this, event_0);
  this.widget.onBrowserEvent(event_0);
  eventType = event_0.type;
  if ($equals('focus', eventType)) {
    this.isFocused = true;
    $onFocus(this);
  }
   else if ($equals('blur', eventType)) {
    this.isFocused = false;
    $onBlur(this);
  }
   else 
    $equals('keydown', eventType)?(this.isFocused = true):$equals('mousedown', eventType) && $isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target) && (this.isFocused = true);
  $onBrowserEvent2(this, event_0);
}
;
_.onUnload = function onUnload_0(){
  this.isFocused = false;
}
;
_.accessKey_0 = 0;
_.isFocused = false;
_.isRefreshing = false;
_.tabIndex_0 = 0;
var Lcom_google_gwt_user_cellview_client_AbstractHasData_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData', 181);
function $addColumn(this$static, col, headerString){
  $insertColumn(this$static, this$static.columns.array.length, col, new TextHeader(headerString));
}

function $buildRowValues(this$static, values, start_0, isRebuildingAllRows){
  var end, i, length_0, tableSectionBuilder, value_0;
  length_0 = values.size_1();
  end = start_0 + length_0;
  $start(this$static.tableBuilder, isRebuildingAllRows);
  for (i = start_0; i < end; i++) {
    value_0 = values.get_1(i - start_0);
    $buildRow(this$static.tableBuilder, value_0, i);
  }
  $coalesceCellProperties(this$static);
  tableSectionBuilder = $finish(this$static.tableBuilder);
  return tableSectionToSafeHtml(tableSectionBuilder);
}

function $checkColumnBounds(this$static, col){
  if (col < 0 || col >= this$static.columns.array.length) {
    throw toJs(new IndexOutOfBoundsException_0('Column index is out of bounds: ' + col));
  }
}

function $coalesceCellProperties(this$static){
  var column, column$iterator, consumedEvents, entry, outerIter;
  this$static.handlesSelection = false;
  this$static.isInteractive = false;
  for (column$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.tableBuilder.idToCellMap)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); column$iterator.val$outerIter2.hasNext;) {
    column = (entry = $next_2(column$iterator.val$outerIter2) , castTo(entry.getValue_0(), 74));
    column.getCell();
    consumedEvents = column.getCell().consumedEvents;
    !!consumedEvents && consumedEvents.coll.size_1() > 0 && (this$static.isInteractive = true);
  }
}

function $createHeaders(this$static, isFooter){
  var section;
  section = isFooter?$buildFooter(this$static.footerBuilder):$buildHeader(this$static.headerBuilder);
  if (section) {
    $replaceAllRows(this$static, isFooter?this$static.tfoot:this$static.thead, tableSectionToSafeHtml(section));
    setVisible(isFooter?this$static.tfoot:this$static.thead, true);
  }
   else {
    setVisible(isFooter?this$static.tfoot:this$static.thead, false);
  }
}

function $fireEventToCell(this$static, event_0, eventType0, rowValue, column){
  var cell, col, consumedEvents, eventType;
  cell = column.getCell();
  consumedEvents = cell.consumedEvents;
  if (!(!!consumedEvents && consumedEvents.coll.contains_0(eventType0))) {
    return;
  }
  column.getValue(rowValue);
  if (instanceOf(column, 45)) {
    col = castTo(column, 45);
    $onBrowserEvent((col.getValue(rowValue) , event_0));
  }
   else {
    column.getFieldUpdater();
    eventType = event_0.type;
    $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined;
  }
  this$static.cellIsEditing = false;
}

function $getColumn(this$static, col){
  $checkColumnBounds(this$static, col);
  return castTo($get_2(this$static.columns, col), 45);
}

function $getFooter(this$static, index_0){
  return castTo($get_2(this$static.footers, index_0), 84);
}

function $getHeader(this$static, index_0){
  return castTo($get_2(this$static.headers, index_0), 84);
}

function $getKeyboardSelectedColumn(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
}

function $getKeyboardSelectedElement(td){
  var firstChild;
  if (!td) {
    return null;
  }
  if ($getCellId(td) != null) {
    return td;
  }
  firstChild = $getFirstChildElement(td);
  if (!!firstChild && td.childNodes.length == 1 && $equalsIgnoreCase('div', firstChild.tagName)) {
    return firstChild;
  }
  return td;
}

function $getKeyboardSelectedSubRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedSubrow;
}

function $getKeyboardSelectedTableCellElement(this$static){
  var cellCount, colIndex, column, rowIndex, tr;
  colIndex = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  if (colIndex < 0) {
    return null;
  }
  rowIndex = $getKeyboardSelectedRow(this$static.presenter);
  if (rowIndex < 0 || rowIndex >= this$static.tbody.rows.length) {
    return null;
  }
  tr = $getSubRowElement(this$static, rowIndex + $getVisibleRange(this$static.presenter).start_0, this$static.keyboardSelectedSubrow);
  if (tr) {
    cellCount = tr.cells.length;
    if (cellCount > 0) {
      column = colIndex < cellCount - 1?colIndex:cellCount - 1;
      return tr.cells[column];
    }
  }
  return null;
}

function $getSubRowElement(this$static, absRow, subrow){
  var curRow, domIndex, frameEnd, frameStart, offset, relRow, rowCount, rowValueIndex, rows_0, subrowIndex, subrowValueIndex;
  relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
  $checkRowBounds(this$static, relRow);
  rows_0 = this$static.tbody.rows;
  rowCount = rows_0.length;
  if (rowCount == 0) {
    return null;
  }
  frameStart = 0;
  frameEnd = rowCount - 1;
  domIndex = relRow < frameEnd?relRow:frameEnd;
  while (domIndex >= frameStart && domIndex <= frameEnd) {
    curRow = rows_0[domIndex];
    rowValueIndex = $getRowValueIndex(this$static.tableBuilder, curRow);
    if (rowValueIndex == absRow) {
      subrowValueIndex = $getSubrowValueIndex(curRow);
      if (subrow != subrowValueIndex) {
        offset = subrow - subrowValueIndex;
        subrowIndex = domIndex + offset;
        if (subrowIndex >= rows_0.length) {
          return null;
        }
        curRow = rows_0[subrowIndex];
        if ($getRowValueIndex(this$static.tableBuilder, curRow) != absRow) {
          return null;
        }
      }
      return curRow;
    }
     else 
      rowValueIndex > absRow?(frameEnd = domIndex - 1):(frameStart = domIndex + 1);
    domIndex = (frameStart + frameEnd) / 2 | 0;
  }
  return null;
}

function $insertColumn(this$static, beforeIndex, col, header){
  var cellEvents, consumedEvents, consumedEvents0, consumedEvents1, headerEvents;
  beforeIndex != this$static.columns.array.length && $checkColumnBounds(this$static, beforeIndex);
  $add_7(this$static.headers, beforeIndex, header);
  $add_7(this$static.footers, beforeIndex, null);
  $add_7(this$static.columns, beforeIndex, col);
  beforeIndex <= this$static.keyboardSelectedColumn && (this$static.keyboardSelectedColumn = min_0(this$static.keyboardSelectedColumn + 1, this$static.columns.array.length - 1));
  consumedEvents0 = col.cell.consumedEvents;
  !!consumedEvents0 && consumedEvents0.coll.size_1() > 0 && (this$static.keyboardSelectedColumn >= this$static.columns.array.length || (consumedEvents1 = castTo($get_2(this$static.columns, this$static.keyboardSelectedColumn), 74).getCell().consumedEvents , !(!!consumedEvents1 && consumedEvents1.coll.size_1() > 0))) && (this$static.keyboardSelectedColumn = beforeIndex);
  consumedEvents = new HashSet;
  cellEvents = col.cell.consumedEvents;
  !!cellEvents && $addAll(consumedEvents, cellEvents);
  headerEvents = header.cell.consumedEvents;
  !!headerEvents && $addAll(consumedEvents, headerEvents);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this$static, consumedEvents);
  this$static.headersDirty = true;
  this$static.columnWidthsDirty = true;
  $ensurePendingState(this$static.presenter).redrawRequired = true;
}

function $onBlur(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $removeClassName(td, 'E3JSEG-b-k');
    $setRowStyleName(tr, 'E3JSEG-b-l', 'E3JSEG-b-m', false);
  }
}

function $onBrowserEvent2(this$static, event_0){
  var absRow, cellParent, clientX, clientY, col, column, columnParent, context, cur, eventTarget, eventType, eventType0, footerColumnParent, footerParent, header, headerColumnParent, headerIndex, headerParent, isHeader, isSelect, isSelectionHandled, maybeTableCell, previewEvent, relRow, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, subrow, tagName, target, targetTableCell, targetTableRow, targetTableSection, tbody, tfoot, thead, unhover, value_0;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = event_0.target;
  tbody = this$static.tbody;
  tfoot = this$static.tfoot;
  thead = this$static.thead;
  targetTableSection = null;
  targetTableCell = null;
  cellParent = null;
  headerParent = null;
  headerColumnParent = null;
  footerParent = null;
  footerColumnParent = null;
  maybeTableCell = null;
  cur = target;
  $equalsIgnoreCase('td', target.tagName) && $getCellId($getFirstChildElement(target)) != null && (cur = $getFirstChildElement(target));
  while (!!cur && !targetTableSection) {
    if (cur == tbody || cur == tfoot || cur == thead) {
      targetTableSection = cur;
      if (maybeTableCell) {
        targetTableCell = maybeTableCell;
        break;
      }
    }
    tagName = cur.tagName;
    ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) && (maybeTableCell = cur);
    !cellParent && $getCellId(cur) != null && (cellParent = cur);
    !headerParent && $getElementAttribute(cur, '__gwt_header') != null && (headerParent = cur);
    !footerParent && $getElementAttribute(cur, '__gwt_header') != null && (footerParent = cur);
    !headerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (headerColumnParent = cur);
    !footerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (footerColumnParent = cur);
    cur = $getParentElement(cur);
  }
  if (!targetTableCell) {
    return;
  }
  this$static.legacyRenderRowValues && (cellParent = $getFirstChildElement(targetTableCell));
  targetTableRow = $getParentElement(targetTableCell);
  eventType0 = event_0.type;
  isSelect = $equals('click', eventType0) || $equals('keydown', eventType0) && (event_0.keyCode | 0) == 13;
  col = targetTableCell.cellIndex;
  if (targetTableSection == thead || targetTableSection == tfoot) {
    isHeader = targetTableSection == thead;
    headerParent = isHeader?headerParent:footerParent;
    columnParent = isHeader?headerColumnParent:footerColumnParent;
    if (headerParent) {
      header = isHeader?$getHeader_0(this$static.headerBuilder, headerParent):$getHeader_0(this$static.footerBuilder, footerParent);
      if (header) {
        headerIndex = isHeader?__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || ''):__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || '');
        new Cell$Context(headerIndex, col);
        $cellConsumesEventType(header.cell, eventType0) && (eventType = event_0.type , $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined);
      }
    }
    isSelect && !!columnParent && (isHeader?$getColumn_1(this$static.headerBuilder, columnParent):$getColumn_1(this$static.footerBuilder, columnParent));
  }
   else if (targetTableSection == tbody) {
    absRow = $getRowValueIndex(this$static.tableBuilder, targetTableRow);
    relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
    subrow = $getSubrowValueIndex(targetTableRow);
    if (!this$static.skipRowHoverCheck) {
      if ($equals('mouseover', eventType0)) {
        !!this$static.hoveringRow && $isOrHasChild(this$static.tbody, this$static.hoveringRow) && $setRowHover(this$static, this$static.hoveringRow, false);
        this$static.hoveringRow = targetTableRow;
        $setRowHover(this$static, this$static.hoveringRow, true);
      }
       else if ($equals('mouseout', eventType0) && !!this$static.hoveringRow) {
        unhover = true;
        if (!this$static.skipRowHoverFloatElementCheck) {
          clientX = ((event_0.clientX || 0) | 0) + $getScrollLeft_0($doc);
          clientY = ((event_0.clientY || 0) | 0) + $getScrollTop($doc);
          rowLeft = $getAbsoluteLeft(this$static.hoveringRow);
          rowTop = $getAbsoluteTop(this$static.hoveringRow);
          rowWidth = (this$static.hoveringRow.offsetWidth || 0) | 0;
          rowHeight = (this$static.hoveringRow.offsetHeight || 0) | 0;
          rowBottom = rowTop + rowHeight;
          rowRight = rowLeft + rowWidth;
          unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
        }
        if (unhover) {
          $setRowHover(this$static, this$static.hoveringRow, false);
          this$static.hoveringRow = null;
        }
      }
    }
    if (!(relRow >= 0 && relRow < $getCurrentState(this$static.presenter).rowData.array.length)) {
      return;
    }
    isSelectionHandled = this$static.handlesSelection || ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , BOUND_TO_SELECTION) == this$static.presenter.keyboardSelectionPolicy;
    value_0 = ($checkRowBounds(this$static, relRow) , $getVisibleItem(this$static.presenter, relRow));
    context = new Cell$Context_0(absRow, col, subrow);
    previewEvent = fire_3(this$static, event_0, this$static, context, value_0, this$static.cellIsEditing, isSelectionHandled);
    if (!!cellParent && !previewEvent.isCanceled) {
      this$static.legacyRenderRowValues?(column = castTo($get_2(this$static.columns, col), 74)):(column = $getColumn_0(this$static.tableBuilder, cellParent));
      !!column && $fireEventToCell(this$static, event_0, eventType0, value_0, column);
    }
  }
}

function $onFocus(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $addClassName(td, 'E3JSEG-b-k');
    $setRowStyleName(tr, 'E3JSEG-b-l', 'E3JSEG-b-m', true);
  }
}

function $refreshColumnWidths(this$static){
  var columnCount, i, width_0;
  columnCount = max_0(this$static.columns.array.length, 0);
  for (i = 0; i < columnCount; i++) {
    $doSetColumnWidth(this$static, i, (width_0 = null , this$static.columns.array.length > i && (width_0 = castToString($get_1(this$static.columnWidths, $get_2(this$static.columns, i)))) , width_0 == null && (width_0 = castToString($get_1(this$static.columnWidthsByIndex, valueOf(i)))) , width_0));
  }
}

function $refreshHeadersAndColumnsImpl(this$static){
  var wereHeadersDirty;
  if (this$static.columnWidthsDirty) {
    this$static.columnWidthsDirty = false;
    $refreshColumnWidths_0(this$static);
  }
  wereHeadersDirty = this$static.headersDirty;
  this$static.headersDirty = false;
  (wereHeadersDirty || !this$static.headerRefreshDisabled) && $createHeaders(this$static, false);
  (wereHeadersDirty || !this$static.footerRefreshDisabled) && $createHeaders(this$static, true);
}

function $replaceAllChildren(this$static, values, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0, true));
  $replaceAllRows(this$static, this$static.tbody, (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , html));
}

function $replaceChildren(this$static, values, start_0, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0 + start_0, false));
  $replaceChildren_0(TABLE_IMPL, this$static, this$static.tbody, (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , html), start_0, values.size_0);
}

function $resetFocusOnCell(this$static){
  var col, column, elem, row, value_0;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  if (!elem) {
    return false;
  }
  row = $getKeyboardSelectedRow(this$static.presenter);
  col = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  value_0 = ($checkRowBounds(this$static, row) , $getVisibleItem(this$static.presenter, row));
  new Cell$Context(row + $getVisibleRange(this$static.presenter).start_0, col);
  column = $getColumn_0(this$static.tableBuilder, elem);
  if (!column) {
    return false;
  }
  column.getValue(value_0);
  column.getCell();
  return false;
}

function $setKeyboardSelected(this$static, index_0, selected, stealFocus){
  var cells_0, focusable, i, isKeyboardSelected, keyboardColumn, subrow, td, tr, updatedSelection;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy || !(index_0 >= 0 && index_0 < $getCurrentState(this$static.presenter).rowData.array.length)) {
    return;
  }
  subrow = this$static.lastKeyboardSelectedSubrow;
  if (selected) {
    subrow = this$static.keyboardSelectedSubrow;
    this$static.lastKeyboardSelectedSubrow = this$static.keyboardSelectedSubrow;
  }
  tr = $getSubRowElement(this$static, index_0 + $getVisibleRange(this$static.presenter).start_0, subrow);
  if (!tr) {
    return;
  }
  updatedSelection = !selected || this$static.isFocused || stealFocus;
  $setRowStyleName(tr, 'E3JSEG-b-l', 'E3JSEG-b-m', selected);
  cells_0 = tr.cells;
  keyboardColumn = min_0(DISABLED == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn, cells_0.length - 1);
  for (i = 0; i < cells_0.length; i++) {
    td = cells_0[i];
    isKeyboardSelected = i == keyboardColumn;
    setStyleName(td, 'E3JSEG-b-k', updatedSelection && selected && isKeyboardSelected);
    focusable = $getKeyboardSelectedElement(td);
    $setFocusable(this$static, focusable, selected && isKeyboardSelected);
    selected && stealFocus && !this$static.cellIsEditing && isKeyboardSelected && (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , (new AbstractCellTable$2(focusable)).val$focusable2.focus() , undefined);
  }
}

function $setKeyboardSelectedColumn(this$static, column, stealFocus){
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardSelectedColumn = column;
  $setKeyboardSelectedRow(this$static, $getKeyboardSelectedRow(this$static.presenter), this$static.keyboardSelectedSubrow, stealFocus);
}

function $setKeyboardSelectedRow(this$static, row, subrow, stealFocus){
  this$static.keyboardSelectedSubrow = subrow;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setKeyboardSelectedRow_0(this$static, row, stealFocus){
  this$static.keyboardSelectedSubrow = 0;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setRowHover(this$static, tr, isHovering){
  this$static.skipRowHoverStyleUpdate || $setRowStyleName(tr, 'E3JSEG-b-i', 'E3JSEG-b-j', isHovering);
}

function $setRowStyleName(tr, rowStyle, cellStyle, add_0){
  var cells_0, i;
  setStyleName(tr, rowStyle, add_0);
  cells_0 = tr.cells;
  for (i = 0; i < cells_0.length; i++) {
    setStyleName(cells_0[i], cellStyle, add_0);
  }
}

function AbstractCellTable(elem, pageSize){
  var eventTypes;
  AbstractHasData.call(this, new AbstractHasData$1(elem), pageSize);
  this.columns = new ArrayList;
  this.columnWidths = new HashMap;
  this.columnWidthsByIndex = new HashMap;
  this.footers = new ArrayList;
  this.headers = new ArrayList;
  this.keyboardSelectedColumn = 0;
  this.keyboardSelectedSubrow = 0;
  this.lastKeyboardSelectedSubrow = 0;
  this.legacyRenderRowValues = true;
  this.sortList = new ColumnSortList;
  !TABLE_IMPL && (TABLE_IMPL = new AbstractCellTable$ImplMozilla);
  !template && (template = new AbstractCellTable_TemplateImpl);
  ($clinit_DOM() , this.element).className = 'E3JSEG-b-y';
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'mouseover', eventTypes);
  $putStringValue(eventTypes.map_0, 'mouseout', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
  this.tableBuilder = new DefaultCellTableBuilder(this);
  this.headerBuilder = new DefaultHeaderOrFooterBuilder(this, false);
  this.footerBuilder = new DefaultHeaderOrFooterBuilder(this, true);
  $setKeyboardSelectionHandler(this, new AbstractCellTable$CellTableKeyboardSelectionHandler(this));
}

function tableSectionToSafeHtml(section){
  var rawHtml;
  if (!section) {
    throw toJs(new IllegalArgumentException_0('Only HtmlTableSectionBuilder is supported at this time'));
  }
  rawHtml = $asSafeHtml(section.delegate_0).html_0;
  rawHtml = $substring_0(rawHtml, 7, rawHtml.length - 8);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString(rawHtml);
}

defineClass(434, 181, $intern_22);
_.cellIsEditing = false;
_.columnWidthsDirty = false;
_.footerRefreshDisabled = false;
_.handlesSelection = false;
_.headerRefreshDisabled = false;
_.headersDirty = false;
_.isInteractive = false;
_.keyboardSelectedColumn = 0;
_.keyboardSelectedSubrow = 0;
_.lastKeyboardSelectedSubrow = 0;
_.legacyRenderRowValues = false;
_.skipRowHoverCheck = false;
_.skipRowHoverFloatElementCheck = false;
_.skipRowHoverStyleUpdate = false;
var TABLE_IMPL, template;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable', 434);
function AbstractCellTable$2(val$focusable){
  this.val$focusable2 = val$focusable;
}

defineClass(439, 1, {}, AbstractCellTable$2);
_.execute_1 = function execute_4(){
  this.val$focusable2.focus();
}
;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/2', 439);
function $onCellPreview(this$static, event_0){
  var eventType, isFocusable, keyboardPagingPolicy, keyboardPagingPolicy0, nativeEvent, relRow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals('keydown', eventType) && !event_0.isCellEditing) {
    switch (nativeEvent.keyCode | 0) {
      case 40:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 38:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 34:
        keyboardPagingPolicy0 = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy0?$setKeyboardSelectedRow_1(this$static, $getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy0 && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 33:
        keyboardPagingPolicy = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy?$setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 36:
        $setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).start_0);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 35:
        $setKeyboardSelectedRow_1(this$static, $getRowCount(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 32:
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
    }
  }
   else if ($equals('click', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    target = event_0.nativeEvent.target;
    isFocusable = $isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target);
    $setKeyboardSelectedRow_0(this$static.display_0, relRow, !isFocusable);
  }
   else if ($equals('focus', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    if ($getKeyboardSelectedRow(this$static.display_0.presenter) != relRow) {
      $setKeyboardSelectedRow_0(this$static.display_0, relRow, false);
      return;
    }
  }
}

function $setKeyboardSelectedRow_1(this$static, row){
  $setKeyboardSelectedRow_0(this$static.display_0, row, true);
}

function AbstractHasData$DefaultKeyboardSelectionHandler(display){
  this.display_0 = display;
}

defineClass(182, 1, $intern_23, AbstractHasData$DefaultKeyboardSelectionHandler);
_.onCellPreview = function onCellPreview(event_0){
  $onCellPreview(this, event_0);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$DefaultKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/DefaultKeyboardSelectionHandler', 182);
function $findInteractiveColumn(this$static, start_0, reverse){
  var consumedEvents, i, i0;
  if (this$static.table.isInteractive) {
    if (reverse) {
      for (i0 = start_0 - 1; i0 >= 0; i0--) {
        consumedEvents = $getColumn(this$static.table, i0).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i0;
        }
      }
      for (i = this$static.table.columns.array.length - 1; i >= start_0; i--) {
        consumedEvents = $getColumn(this$static.table, i).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i;
        }
      }
    }
     else {
      for (i0 = start_0 + 1; i0 < this$static.table.columns.array.length; i0++) {
        consumedEvents = $getColumn(this$static.table, i0).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i0;
        }
      }
      for (i = 0; i <= start_0; i++) {
        consumedEvents = $getColumn(this$static.table, i).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i;
        }
      }
    }
  }
   else {
    return 0;
  }
  return 0;
}

function AbstractCellTable$CellTableKeyboardSelectionHandler(table){
  AbstractHasData$DefaultKeyboardSelectionHandler.call(this, table);
  this.table = table;
}

defineClass(436, 182, $intern_23, AbstractCellTable$CellTableKeyboardSelectionHandler);
_.onCellPreview = function onCellPreview_0(event_0){
  var col, eventType, keyCode, nativeEvent, nextColumn, oldColumn, oldRow, prevColumn, relRow, stealFocus, subrow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals('keydown', eventType) && !event_0.isCellEditing) {
    oldRow = $getKeyboardSelectedRow(this.table.presenter);
    oldColumn = $getKeyboardSelectedColumn(this.table);
    keyCode = nativeEvent.keyCode | 0;
    if (keyCode == 39) {
      nextColumn = $findInteractiveColumn(this, oldColumn, false);
      if (nextColumn <= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow + 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, nextColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, nextColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
     else if (keyCode == 37) {
      prevColumn = $findInteractiveColumn(this, oldColumn, true);
      if (prevColumn >= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow - 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, prevColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, prevColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
  }
   else if ($equals('click', eventType) || $equals('focus', eventType)) {
    col = event_0.context.column;
    relRow = event_0.context.index_0 - $getVisibleRange(this.table.presenter).start_0;
    subrow = event_0.context.subindex;
    if ($getKeyboardSelectedColumn(this.table) != col || $getKeyboardSelectedRow(this.table.presenter) != relRow || $getKeyboardSelectedSubRow(this.table) != subrow) {
      stealFocus = false;
      if ($equals('click', eventType)) {
        target = event_0.nativeEvent.target;
        stealFocus = !$isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target);
      }
      $setKeyboardSelectedRow(this.table, relRow, subrow, stealFocus);
      $setKeyboardSelectedColumn(this.table, col, stealFocus);
    }
    return;
  }
  $onCellPreview(this, event_0);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$CellTableKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/CellTableKeyboardSelectionHandler', 436);
function $convertToSectionElement(this$static, table, sectionTag, rowHtml){
  var tableElem, sb, sb_0, sb_1;
  $clinit_DOM();
  setEventListener(this$static.tmpElem, table);
  sectionTag = $toLowerCase(sectionTag, ($clinit_Locale() , ROOT));
  if ($equals('tbody', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb = new StringBuilder , sb.string += '<table><tbody>' , $append_2(sb, rowHtml.html_0) , sb.string += '<\/tbody><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0);
  }
   else if ($equals('thead', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_0 = new StringBuilder , sb_0.string += '<table><thead>' , $append_2(sb_0, rowHtml.html_0) , sb_0.string += '<\/thead><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0);
  }
   else if ($equals('tfoot', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_1 = new StringBuilder , sb_1.string += '<table><tfoot>' , $append_2(sb_1, rowHtml.html_0) , sb_1.string += '<\/tfoot><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0);
  }
   else {
    throw toJs(new IllegalArgumentException_0('Invalid table section tag: ' + sectionTag));
  }
  tableElem = $getFirstChildElement(this$static.tmpElem);
  this$static.tmpElem.__listener = null;
  if ($equals('tbody', sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if ($equals('thead', sectionTag)) {
    return tableElem.tHead;
  }
   else if ($equals('tfoot', sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw toJs(new IllegalArgumentException_0('Invalid table section tag: ' + sectionTag));
  }
}

function $replaceAllRows(table, section, html){
  var nextSection, parent_0;
  $isAttached(table) || ($clinit_DOM() , setEventListener(table.element, table));
  parent_0 = $getParentElement(section);
  nextSection = $getNextSiblingElement(section);
  $detachSectionElement(section);
  $setInnerHTML(section, html.html_0);
  $reattachSectionElement(parent_0, section, nextSection);
  $isAttached(table) || ($clinit_DOM() , table.element.__listener = null , undefined);
}

function $replaceChildren_0(this$static, table, section, html, startIndex, childCount){
  var absEndIndex, count, insertBefore, newChild, newSection, next, nextSection, parent_0;
  $isAttached(table) || ($clinit_DOM() , setEventListener(table.element, table));
  parent_0 = $getParentElement(section);
  nextSection = $getNextSiblingElement(section);
  $detachSectionElement(section);
  absEndIndex = $getVisibleRange(table.presenter).start_0 + startIndex + childCount;
  insertBefore = $getSubRowElement(table, startIndex + $getVisibleRange(table.presenter).start_0, 0);
  if (table.legacyRenderRowValues) {
    count = 0;
    while (!!insertBefore && count < childCount) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
      ++count;
    }
  }
   else {
    while (!!insertBefore && $getRowValueIndex(table.tableBuilder, insertBefore) < absEndIndex) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
    }
  }
  newSection = $convertToSectionElement(this$static, table, section.tagName, html);
  newChild = $getFirstChildElement(newSection);
  while (newChild) {
    next = $getNextSiblingElement(newChild);
    section.insertBefore(newChild, insertBefore);
    newChild = next;
  }
  $reattachSectionElement(parent_0, section, nextSection);
  $isAttached(table) || ($clinit_DOM() , table.element.__listener = null , undefined);
}

defineClass(437, 1, {});
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/Impl', 437);
function $detachSectionElement(section){
  var parent_0;
  if (isGecko192OrBefore()) {
    return;
  }
  parent_0 = $getParentElement(section);
  !!parent_0 && parent_0.removeChild(section);
}

function $reattachSectionElement(parent_0, section, nextSection){
  if (isGecko192OrBefore()) {
    return;
  }
  parent_0.insertBefore(section, nextSection);
}

function AbstractCellTable$ImplMozilla(){
  this.tmpElem = $doc.createElement('div');
}

defineClass(438, 437, {}, AbstractCellTable$ImplMozilla);
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$ImplMozilla_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/ImplMozilla', 438);
function $buildRow(this$static, rowValue, absRowIndex){
  this$static.rowIndex = absRowIndex;
  this$static.subrowIndex = 0;
  $buildRowImpl(this$static, rowValue, absRowIndex);
}

function $finish(this$static){
  while (this$static.tbody.delegate_1.stack_0.size_0 > 0) {
    $end_0(this$static.tbody.delegate_1, 'tbody');
  }
  return this$static.tbody;
}

function $getCellId(elem){
  var cellId;
  if (!elem) {
    return null;
  }
  cellId = elem.getAttribute('__gwt_cell') || '';
  return cellId == null || cellId.length == 0?null:cellId;
}

function $getColumn_0(this$static, elem){
  var cellId;
  return cellId = $getCellId(elem) , cellId == null?null:castTo($getStringValue(this$static.idToCellMap, cellId), 74);
}

function $getRowValueIndex(this$static, row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_row') || '');
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 69)) {
      return row.sectionRowIndex + $getVisibleRange(this$static.cellTable.presenter).start_0;
    }
     else 
      throw toJs($e0);
  }
}

function $getSubrowValueIndex(row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_subrow') || '');
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 69)) {
      return 0;
    }
     else 
      throw toJs($e0);
  }
}

function $renderCell(this$static, builder, column, rowValue){
  var cellBuilder, cellId;
  cellId = castToString($get_1(this$static.cellToIdMap, column));
  if (cellId == null) {
    cellId = 'cell-' + $createUniqueId($doc);
    $putStringValue(this$static.idToCellMap, cellId, column);
    $put_0(this$static.cellToIdMap, column, cellId);
  }
  $attribute_0(builder.delegate_0, '__gwt_cell', cellId);
  cellBuilder = new SafeHtmlBuilder;
  column?$render(column.getValue(rowValue), cellBuilder):$render(null.getValue(rowValue), cellBuilder);
  $html(builder, new SafeHtmlString(cellBuilder.sb.string));
}

function $start(this$static, isRebuildingAllRows){
  this$static.tbody = (!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'tbody'));
  if (isRebuildingAllRows) {
    $reset(this$static.cellToIdMap);
    $reset(this$static.idToCellMap);
  }
}

function $startRow(this$static){
  var row;
  while (this$static.tbody.delegate_1.stack_0.size_0 > 1) {
    $end(this$static.tbody.delegate_1);
  }
  if (this$static.tbody.delegate_1.stack_0.size_0 < 1) {
    throw toJs(new IllegalStateException_0('Cannot start a row.  Did you call TableRowBuilder.end() too many times?'));
  }
  row = $startTR(this$static.tbody.delegate_0);
  $attribute_1(row, '__gwt_row', this$static.rowIndex);
  $attribute_1(row, '__gwt_subrow', this$static.subrowIndex);
  ++this$static.subrowIndex;
  return row;
}

defineClass(473, 1, {});
_.rowIndex = 0;
_.subrowIndex = 0;
var Lcom_google_gwt_user_cellview_client_AbstractCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTableBuilder', 473);
function AbstractCellTable_TemplateImpl(){
}

defineClass(472, 1, {}, AbstractCellTable_TemplateImpl);
var Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable_TemplateImpl', 472);
function AbstractHasData$1(val$elem){
  this.val$elem1 = val$elem;
  $setElement(this, this.val$elem1);
}

defineClass(442, 9, $intern_21, AbstractHasData$1);
var Lcom_google_gwt_user_cellview_client_AbstractHasData$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/1', 442);
function $clinit_AbstractHasData$RedrawEvent(){
  $clinit_AbstractHasData$RedrawEvent = emptyMethod;
  TYPE_4 = new GwtEvent$Type;
}

function AbstractHasData$RedrawEvent(){
  $clinit_AbstractHasData$RedrawEvent();
}

defineClass(183, 524, {}, AbstractHasData$RedrawEvent);
_.dispatch = function dispatch_4(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$RedrawEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/RedrawEvent', 183);
function $addHandler_1(this$static, handler, type_0){
  return $addHandler_0(this$static.hasData, handler, type_0);
}

function $renderRowValues(this$static){
  var sb;
  try {
    sb = new SafeHtmlBuilder;
    this$static.hasData.legacyRenderRowValues = false;
    return new SafeHtmlString(sb.sb.string);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 26)) {
      return null;
    }
     else 
      throw toJs($e0);
  }
}

function $replaceAllChildren_0(this$static, values, stealFocus){
  var elem, html;
  html = $renderRowValues(($getVisibleRange(this$static.hasData.presenter) , this$static));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceAllChildren(this$static.hasData, values, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, ($getVisibleItems(this$static.hasData.presenter) , new AbstractHasData$View$2));
  $fireEvent_0(this$static.hasData, new AbstractHasData$RedrawEvent);
}

function $replaceChildren_1(this$static, values, start_0, stealFocus){
  var elem, html;
  html = $renderRowValues(($getVisibleRange(this$static.hasData.presenter).start_0 + start_0 , this$static));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceChildren(this$static.hasData, values, start_0, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, ($getVisibleItems(this$static.hasData.presenter) , new AbstractHasData$View$2));
  $fireEvent_0(this$static.hasData, new AbstractHasData$RedrawEvent);
}

function $resetFocus(this$static){
  this$static.wasFocused && (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , $execute_0(new AbstractHasData$View$1(this$static)));
}

function $setKeyboardSelected_0(this$static, index_0, seleted, stealFocus){
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  $setKeyboardSelected(this$static.hasData, index_0, seleted, stealFocus);
}

function $setLoadingState(this$static, state){
  this$static.hasData.isRefreshing = true;
  $onLoadingStateChanged(this$static.hasData, state);
  this$static.hasData.isRefreshing = false;
}

function AbstractHasData$View(hasData){
  this.hasData = hasData;
}

defineClass(440, 1, {}, AbstractHasData$View);
_.wasFocused = false;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View', 440);
function $execute_0(this$static){
  var elem;
  if (!$resetFocusOnCell(this$static.this$11.hasData)) {
    elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.this$11.hasData));
    !!elem && (elem.focus() , undefined);
  }
}

function AbstractHasData$View$1(this$1){
  this.this$11 = this$1;
}

defineClass(441, 1, {}, AbstractHasData$View$1);
_.execute_1 = function execute_5(){
  $execute_0(this);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View/1', 441);
function AbstractHasData$View$2(){
}

defineClass(184, 378, {}, AbstractHasData$View$2);
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View/2', 184);
function $buildFooter(this$static){
  if (!this$static.isFooter) {
    throw toJs(new UnsupportedOperationException_0('Cannot build footer because this builder is designated to build a header'));
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeader(this$static){
  if (this$static.isFooter) {
    throw toJs(new UnsupportedOperationException_0('Cannot build header because this builder is designated to build a footer'));
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeaderOrFooter(this$static){
  this$static.section = this$static.isFooter?(!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'tfoot')):(!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'thead'));
  $clear(this$static.idToHeaderMap);
  $reset(this$static.idToColumnMap);
  this$static.rowIndex = 0;
  if (!$buildHeaderOrFooterImpl(this$static)) {
    return null;
  }
  while (this$static.section.delegate_1.stack_0.size_0 > 0) {
    $end(this$static.section.delegate_1);
  }
  return this$static.section;
}

function $getColumn_1(this$static, elem){
  var cellId;
  cellId = $getElementAttribute(elem, '__gwt_column');
  return cellId == null?null:castTo($getStringValue(this$static.idToColumnMap, cellId), 45);
}

function $getElementAttribute(elem, attribute){
  var value_0;
  if (!elem) {
    return null;
  }
  value_0 = elem.getAttribute(attribute) || '';
  return value_0 == null || value_0.length == 0?null:value_0;
}

function $getHeader_0(this$static, elem){
  var headerId;
  headerId = $getElementAttribute(elem, '__gwt_header');
  return headerId == null?null:castTo($getValue(this$static.idToHeaderMap, headerId), 84);
}

function $getSortIcon(this$static){
  var proto;
  if (!this$static.sortDescIconHtml) {
    proto = create_0(($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending));
    this$static.sortDescIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString($getSafeHtml(proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html_0));
  }
  return this$static.sortDescIconHtml;
}

function $renderHeader(this$static, out, header){
  var headerId, sb;
  headerId = castToString($getKey(this$static.idToHeaderMap, header));
  if (headerId == null) {
    headerId = 'header-' + $createUniqueId($doc);
    $put(this$static.idToHeaderMap, headerId, header);
  }
  $attribute_0(out.delegate_0, '__gwt_header', headerId);
  sb = new SafeHtmlBuilder;
  $render(header.text_0, sb);
  out.html_1(new SafeHtmlString(sb.sb.string));
}

function $renderSortableHeader(this$static, out, header, isSorted){
  var halfHeight, headerContainer, iconWidth, imageHolder, lastArg, lastArg0, lastArg1, lastArg2, lastArg3, outerDiv, posRight, style;
  headerContainer = out;
  isSorted = isSorted && !this$static.isFooter;
  if (isSorted) {
    posRight = !this$static.isSortIconStartOfLine;
    iconWidth = this$static.sortDescIconWidth;
    halfHeight = this$static.sortDescIconHalfHeight;
    outerDiv = $startDiv(out.delegate_0);
    style = $trustedProperty($position(outerDiv.delegate_1.stylesBuilder, ($clinit_Style$Position() , RELATIVE)), 'zoom');
    posRight?$paddingRight(style, (lastArg0 = iconWidth , $clinit_Style$Unit() , lastArg0)):$paddingLeft(style, (lastArg1 = iconWidth , $clinit_Style$Unit() , lastArg1));
    $endStyle(style.delegate_0);
    imageHolder = $startDiv(outerDiv.delegate_0);
    style = $marginTop($styleProperty((lastArg3 = $styleProperty((lastArg2 = $position(outerDiv.delegate_1.stylesBuilder, ABSOLUTE) , $clinit_Style$Unit() , lastArg2).delegate_0, new SafeStylesString('top:50.0%;')) , $clinit_Style$Unit() , lastArg3).delegate_0, new SafeStylesString('line-height:0.0px;')), (lastArg = -halfHeight , lastArg));
    posRight?$styleProperty(style.delegate_0, new SafeStylesString('right:0.0px;')):$styleProperty(style.delegate_0, new SafeStylesString('left:0.0px;'));
    $endStyle(style.delegate_0);
    $html(imageHolder, $getSortIcon(this$static));
    $end_0(imageHolder.delegate_1, 'div');
    headerContainer = $startDiv(outerDiv.delegate_0);
  }
  $renderHeader(this$static, headerContainer, header);
  if (isSorted) {
    $end_0(headerContainer.delegate_1, 'div');
    $end_0(headerContainer.delegate_1, 'div');
  }
}

function $startRow_0(this$static){
  var row;
  while (this$static.section.delegate_1.stack_0.size_0 > 1) {
    $end(this$static.section.delegate_1);
  }
  if (this$static.section.delegate_1.stack_0.size_0 < 1) {
    throw toJs(new IllegalStateException_0('Cannot start a row.  Did you call TableRowBuilder.end() too many times?'));
  }
  row = $startTR(this$static.section.delegate_0);
  $attribute_1(row, '__gwt_header_row', this$static.rowIndex);
  ++this$static.rowIndex;
  return row;
}

function AbstractHeaderOrFooterBuilder(table, isFooter){
  var asc, desc;
  this.idToColumnMap = new HashMap;
  this.idToHeaderMap = new AbstractHeaderOrFooterBuilder$TwoWayHashMap;
  this.isFooter = isFooter;
  this.table = table;
  asc = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer() , cellTableSortAscending);
  desc = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending);
  !!asc && toInt(fromDouble_0($wnd.Math.round(asc.height_0 / 2)));
  if (desc) {
    this.sortDescIconWidth = desc.width_0 + 6;
    this.sortDescIconHalfHeight = toInt(fromDouble_0($wnd.Math.round(desc.height_0 / 2)));
  }
   else {
    this.sortDescIconWidth = 0;
    this.sortDescIconHalfHeight = 0;
  }
}

defineClass(475, 1, {});
_.isFooter = false;
_.isSortIconStartOfLine = true;
_.rowIndex = 0;
_.sortDescIconHalfHeight = 0;
_.sortDescIconWidth = 0;
var Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHeaderOrFooterBuilder', 475);
function $clear(this$static){
  $reset(this$static.keyToValue);
  $reset(this$static.valueToKey);
}

function $getKey(this$static, value_0){
  return $get_1(this$static.valueToKey, value_0);
}

function $getValue(this$static, key){
  return $getStringValue(this$static.keyToValue, key);
}

function $put(this$static, key, value_0){
  $putStringValue(this$static.keyToValue, key, value_0);
  $put_0(this$static.valueToKey, value_0, key);
}

function AbstractHeaderOrFooterBuilder$TwoWayHashMap(){
  this.keyToValue = new HashMap;
  this.valueToKey = new HashMap;
}

defineClass(476, 1, {}, AbstractHeaderOrFooterBuilder$TwoWayHashMap);
var Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder$TwoWayHashMap_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHeaderOrFooterBuilder/TwoWayHashMap', 476);
function $isFocusable(this$static, elem){
  return $contains_0(this$static.focusableTypes, $toLowerCase(elem.tagName, ($clinit_Locale() , ROOT))) || elem.tabIndex >= 0;
}

function $sinkEvents_0(this$static, widget, typeNames){
  var entry, eventsToSink, outerIter, typeInt, typeName, typeName$iterator;
  eventsToSink = 0;
  for (typeName$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(typeNames.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); typeName$iterator.val$outerIter2.hasNext;) {
    typeName = (entry = $next_2(typeName$iterator.val$outerIter2) , castToString(entry.getKey()));
    typeInt = $eventGetTypeInt(($clinit_DOM() , typeName));
    if (typeInt < 0) {
      $sinkBitlessEvent_0(widget.element, typeName);
    }
     else {
      typeInt = $sinkEvent(this$static, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(widget.element, eventsToSink | (widget.element.__eventBits || 0))):(widget.eventsToSink |= eventsToSink));
}

defineClass(461, 1, {});
var impl_0;
var Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellBasedWidgetImpl', 461);
function $initEventSystem(){
  dispatchNonBubblingEvent = $entry(function(evt){
    handleNonBubblingEvent(evt);
  }
  );
}

function $sinkEvent(this$static, widget, typeName){
  var elem;
  if ($contains_0(this$static.nonBubblingEvents, typeName)) {
    !dispatchNonBubblingEvent && $initEventSystem();
    elem = ($clinit_DOM() , widget.element);
    if (!$equals('true', elem.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '')) {
      elem.setAttribute('__gwtCellBasedWidgetImplDispatching' + typeName, 'true');
      elem.addEventListener(typeName, dispatchNonBubblingEvent, true);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(($clinit_DOM() , typeName));
  }
}

function CellBasedWidgetImplStandard(){
  this.focusableTypes = new HashSet;
  $add_9(this.focusableTypes, 'select');
  $add_9(this.focusableTypes, 'input');
  $add_9(this.focusableTypes, 'textarea');
  $add_9(this.focusableTypes, 'option');
  $add_9(this.focusableTypes, 'button');
  $add_9(this.focusableTypes, 'label');
  this.nonBubblingEvents = new HashSet;
  $add_9(this.nonBubblingEvents, 'focus');
  $add_9(this.nonBubblingEvents, 'blur');
  $add_9(this.nonBubblingEvents, 'load');
  $add_9(this.nonBubblingEvents, 'error');
}

function handleNonBubblingEvent(event_0){
  var eventTarget, listener, target, typeName;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  typeName = event_0.type;
  listener = ($clinit_DOM() , getEventListener(target));
  while (!!target && !listener) {
    target = $getParentElement(target);
    !!target && $equals('true', target.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '') && (listener = getEventListener(target));
  }
  !!listener && dispatchEvent_0(event_0, target, listener);
}

defineClass(41, 461, {}, CellBasedWidgetImplStandard);
var dispatchNonBubblingEvent;
var Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellBasedWidgetImplStandard', 41);
function $doSetColumnWidth(this$static, column, width_0){
  this$static.colGroupEnabled && (width_0 == null?($ensureTableColElement(this$static, column).style['width'] = '' , undefined):($ensureTableColElement(this$static, column).style['width'] = width_0 , undefined));
}

function $ensureTableColElement(this$static, index_0){
  var i;
  for (i = this$static.colgroup.childNodes.length; i <= index_0; i++) {
    $appendChild(this$static.colgroup, $doc.createElement('col'));
  }
  return $getChild(this$static.colgroup, index_0);
}

function $onLoadingStateChanged(this$static, state){
  var message;
  message = null;
  state == ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)?(message = this$static.loadingIndicatorContainer):state == LOADED && $isEmpty(this$static.presenter) && (message = this$static.emptyTableWidgetContainer);
  !!message && $showWidget(this$static.messagesPanel, $getWidgetIndex(this$static.messagesPanel, message));
  $setColSpan(this$static.tbodyLoadingCell, max_0(1, max_0(this$static.columns.array.length, 0)));
  $showOrHide(this$static.tbody, !message);
  $showOrHide(this$static.tbodyLoading, !!message);
  $fireEvent_0(this$static, new LoadingStateChangeEvent);
}

function $refreshColumnWidths_0(this$static){
  var colCount, i, i0, lastColumn;
  $refreshColumnWidths(this$static);
  if (this$static.colGroupEnabled) {
    colCount = this$static.colgroup.childNodes.length;
    lastColumn = max_0(this$static.columns.array.length, 0);
    for (i0 = 0; i0 < lastColumn; i0++) {
      $ensureTableColElement(this$static, i0).style['display'] = '';
    }
    for (i = colCount - 1; i >= lastColumn; i--) {
      this$static.colGroupEnabled && ($ensureTableColElement(this$static, i).style['width'] = '0px' , undefined);
      $ensureTableColElement(this$static, i).style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
}

function CellTable(){
  var loadingImg;
  !DEFAULT_RESOURCES && (DEFAULT_RESOURCES = new CellTable_Resources_default_InlineClientBundleGenerator);
  CellTable_0.call(this, (loadingImg = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer() , cellTableLoading) , !loadingImg?null:new Image_1(loadingImg)));
}

function CellTable_0(loadingIndicator){
  CellTable_1.call(this, loadingIndicator);
}

function CellTable_1(loadingIndicator){
  var eventTypes, tr;
  AbstractCellTable.call(this, $doc.createElement('table'), (new CellTable$ResourcesAdapter , 15));
  this.emptyTableWidgetContainer = new SimplePanel;
  this.loadingIndicatorContainer = new SimplePanel;
  this.messagesPanel = new DeckPanel;
  this.colGroupEnabled = true;
  this.style_0 = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer() , cellTableStyle);
  $ensureInjected(this.style_0);
  this.colGroupEnabled = true;
  this.table = ($clinit_DOM() , this.element);
  this.table.cellSpacing = 0;
  this.colgroup = $doc.createElement('colgroup');
  $appendChild(this.table, this.colgroup);
  this.thead = this.table.createTHead();
  if (this.table.tBodies.length > 0) {
    this.tbody = this.table.tBodies[0];
  }
   else {
    this.tbody = $doc.createElement('tbody');
    $appendChild(this.table, this.tbody);
  }
  this.tbodyLoading = $doc.createElement('tbody');
  $appendChild(this.table, this.tbodyLoading);
  this.tfoot = this.table.createTFoot();
  this.tbodyLoadingCell = $doc.createElement('td');
  tr = $doc.createElement('tr');
  $appendChild(this.tbodyLoading, tr);
  $appendChild(tr, this.tbodyLoadingCell);
  this.tbodyLoadingCell.align = 'center';
  $appendChild(this.tbodyLoadingCell, $getElement(this.messagesPanel));
  this.messagesPanel.setParent(this);
  $add_2(this.messagesPanel, this.emptyTableWidgetContainer);
  $add_2(this.messagesPanel, this.loadingIndicatorContainer);
  $setStyleName(this.loadingIndicatorContainer, 'E3JSEG-b-q');
  $setWidget(this.loadingIndicatorContainer, loadingIndicator);
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'mouseover', eventTypes);
  $putStringValue(eventTypes.map_0, 'mouseout', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
}

defineClass(82, 434, $intern_22, CellTable);
_.doAttachChildren = function doAttachChildren_0(){
  this.messagesPanel.onAttach();
}
;
_.doDetachChildren = function doDetachChildren_0(){
  this.messagesPanel.onDetach();
}
;
_.colGroupEnabled = false;
var DEFAULT_RESOURCES;
var Lcom_google_gwt_user_cellview_client_CellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable', 82);
function CellTable$ResourcesAdapter(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer();
}

defineClass(435, 1, {}, CellTable$ResourcesAdapter);
var Lcom_google_gwt_user_cellview_client_CellTable$ResourcesAdapter_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable/ResourcesAdapter', 435);
function CellTable_Resources_default_InlineClientBundleGenerator(){
}

defineClass(459, 1, {}, CellTable_Resources_default_InlineClientBundleGenerator);
var cellTableLoading, cellTableSortAscending, cellTableSortDescending, cellTableStyle;
var Lcom_google_gwt_user_cellview_client_CellTable_1Resources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable_Resources_default_InlineClientBundleGenerator', 459);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-b-g{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.E3JSEG-b-h{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.E3JSEG-b-a{padding:2px 15px;overflow:hidden}.E3JSEG-b-v{cursor:pointer;cursor:hand}.E3JSEG-b-v:hover{color:#6c6b6b}.E3JSEG-b-b{background:#fff}.E3JSEG-b-c{border:2px solid #fff}.E3JSEG-b-r{background:#f3f7fb}.E3JSEG-b-s{border:2px solid #f3f7fb}.E3JSEG-b-i{background:#eee}.E3JSEG-b-j{border:2px solid #eee}.E3JSEG-b-l{background:#ffc}.E3JSEG-b-m{border:2px solid #ffc}.E3JSEG-b-t{background:#628cd5;color:white;height:auto;overflow:auto}.E3JSEG-b-u{border:2px solid #628cd5}.E3JSEG-b-k{border:2px solid #d7dde8}.E3JSEG-b-q{margin:30px}');
    schedule();
    return true;
  }
  return false;
}

function CellTable_Resources_default_InlineClientBundleGenerator$1(){
}

defineClass(460, 1, {}, CellTable_Resources_default_InlineClientBundleGenerator$1);
_.getName = function getName_0(){
  return 'cellTableStyle';
}
;
_.injected = false;
var Lcom_google_gwt_user_cellview_client_CellTable_1Resources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable_Resources_default_InlineClientBundleGenerator/1', 460);
function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer = emptyMethod;
  cellTableLoading = new ImageResourcePrototype('cellTableLoading', ($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA=')), 43, 11);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer = emptyMethod;
  cellTableSortAscending = new ImageResourcePrototype('cellTableSortAscending', ($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mNgwALyKrumFRf3iDAQAvmVXVVAxf/zKjq341WYV95hk1fZ+R+MK8C4HqtCkLW5FZ2PQYpyK6AaKjv/5VV1OmIozq3s3AFR0AXFUNMrO5/lV7WKI6yv6mxCksSGDyTU13Mw5JV2qeaWd54FWn0BRAMlLgPZl/NAuBKMz+dWdF0H2hwCAPwcZIjfOFLHAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer = emptyMethod;
  cellTableSortDescending = new ImageResourcePrototype('cellTableSortDescending', ($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mPIrewMya3oup5X2XkeiC/nVXRezgViEDu3vPMskH0BROeVdqkyJNTXcwAlDgDxfwxcAaWrOpsYYCC/qlUcKPgMLlnZBcWd/4E272BAB0DdjkDJf2AFFRBTgfTj4uIeEQZsAKigHmE6EJd32DDgA0DF20FOyK/sqmIgBEDWAhVPwyYHAJAqZIiNwsHKAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer = emptyMethod;
  cellTableStyle = new CellTable_Resources_default_InlineClientBundleGenerator$1;
}

function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
function Column(cell){
  this.cell = cell;
}

defineClass(45, 1, $intern_24);
_.getCell = function getCell(){
  return this.cell;
}
;
_.getFieldUpdater = function getFieldUpdater(){
  return this.fieldUpdater;
}
;
var Lcom_google_gwt_user_cellview_client_Column_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'Column', 45);
function ColumnSortList(){
  this.infos = new ArrayList;
}

defineClass(113, 1, {113:1}, ColumnSortList);
_.equals_0 = function equals_5(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, 113)) {
    return false;
  }
  other = castTo(obj, 113);
  return $equals_0(this.infos, other.infos);
}
;
_.hashCode_0 = function hashCode_7(){
  return 31 * hashCode_20(this.infos) + 13;
}
;
var Lcom_google_gwt_user_cellview_client_ColumnSortList_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'ColumnSortList', 113);
function $buildRowImpl(this$static, rowValue, absRowIndex){
  var column, columnCount, curColumn, div, isEven, isSelected, lastArg, selectionModel, td, tdClasses, tr, trClasses;
  selectionModel = this$static.cellTable.presenter.selectionModel;
  isSelected = !(!selectionModel || rowValue == null) && $isSelected(selectionModel, rowValue);
  isEven = absRowIndex % 2 == 0;
  trClasses = new StringBuilder_0(isEven?this$static.evenRowStyle:this$static.oddRowStyle);
  isSelected && $append_2(trClasses, this$static.selectedRowStyle);
  tr = $startRow(this$static);
  $className(tr, trClasses.string);
  columnCount = this$static.cellTable.columns.array.length;
  for (curColumn = 0; curColumn < columnCount; curColumn++) {
    column = $getColumn(this$static.cellTable, curColumn);
    tdClasses = new StringBuilder_0(this$static.cellStyle);
    $append_2(tdClasses, isEven?this$static.evenCellStyle:this$static.oddCellStyle);
    curColumn == 0 && $append_2(tdClasses, this$static.firstColumnStyle);
    isSelected && $append_2(tdClasses, this$static.selectedCellStyle);
    curColumn == columnCount - 1 && $append_2(tdClasses, this$static.lastColumnStyle);
    new Cell$Context(absRowIndex, curColumn);
    td = $startTD(tr.delegate_0);
    $className(td, tdClasses.string);
    div = $startDiv(td.delegate_0);
    $endStyle($styleProperty((lastArg = div.delegate_1.stylesBuilder , $clinit_Style$OutlineStyle() , lastArg).delegate_0, new SafeStylesString('outline-style:none;')).delegate_0);
    $renderCell(this$static, div, column, rowValue);
    $end_0(div.delegate_1, 'div');
    $end_0(td.delegate_1, 'td');
  }
  $end_0(tr.delegate_1, 'tr');
}

function DefaultCellTableBuilder(cellTable){
  this.idToCellMap = new HashMap;
  this.cellToIdMap = new HashMap;
  this.cellTable = cellTable;
  this.evenRowStyle = 'E3JSEG-b-b';
  this.oddRowStyle = 'E3JSEG-b-r';
  this.selectedRowStyle = ' E3JSEG-b-t';
  this.cellStyle = 'E3JSEG-b-a';
  this.evenCellStyle = ' E3JSEG-b-c';
  this.oddCellStyle = ' E3JSEG-b-s';
  this.firstColumnStyle = ' E3JSEG-b-d';
  this.lastColumnStyle = ' E3JSEG-b-n';
  this.selectedCellStyle = ' E3JSEG-b-u';
}

defineClass(474, 473, {}, DefaultCellTableBuilder);
var Lcom_google_gwt_user_cellview_client_DefaultCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'DefaultCellTableBuilder', 474);
function $appendExtraStyles(header){
  if (!header) {
    return;
  }
}

function $buildHeaderOrFooterImpl(this$static){
  var className, classesBuilder, column, columnCount, curColumn, hasHeader, header, i, isFooter, prevColspan, prevHeader, sortList, table, tr;
  table = this$static.table;
  isFooter = this$static.isFooter;
  columnCount = table.columns.array.length;
  if (columnCount == 0) {
    return false;
  }
  hasHeader = false;
  for (i = 0; i < columnCount; i++) {
    if (this$static.isFooter?$getFooter(this$static.table, i):$getHeader(this$static.table, i)) {
      hasHeader = true;
      break;
    }
  }
  if (!hasHeader) {
    return false;
  }
  sortList = table.sortList;
  sortList.infos.array.length == 0?null:throwClassCastExceptionUnlessNull($get_2(sortList.infos, 0));
  className = this$static.isFooter?'E3JSEG-b-g':'E3JSEG-b-h';
  prevHeader = this$static.isFooter?$getFooter(this$static.table, 0):$getHeader(this$static.table, 0);
  column = $getColumn(this$static.table, 0);
  prevColspan = 1;
  classesBuilder = new StringBuilder_0(className);
  classesBuilder.string += ' ' + (isFooter?'E3JSEG-b-e':'E3JSEG-b-f');
  tr = $startRow_0(this$static);
  for (curColumn = 1; curColumn < columnCount; curColumn++) {
    header = this$static.isFooter?$getFooter(this$static.table, curColumn):$getHeader(this$static.table, curColumn);
    if (header != prevHeader) {
      $buildTableHeader(this$static, tr, column, prevHeader, false, false, classesBuilder, prevColspan, curColumn);
      prevHeader = header;
      prevColspan = 1;
      classesBuilder = new StringBuilder_0(className);
    }
     else {
      ++prevColspan;
    }
    column = ($checkColumnBounds(table, curColumn) , castTo($get_2(table.columns, curColumn), 45));
  }
  $append_2((classesBuilder.string += ' ' , classesBuilder), isFooter?'E3JSEG-b-o':'E3JSEG-b-p');
  $buildTableHeader(this$static, tr, column, prevHeader, false, false, classesBuilder, prevColspan, curColumn);
  $end_0(tr.delegate_1, 'tr');
  return true;
}

function $buildTableHeader(this$static, tr, column, header, isSortable, isSorted, classesBuilder, prevColspan, curColumn){
  var lastArg, th, columnId;
  isSortable && (classesBuilder.string += ' E3JSEG-b-v' , classesBuilder);
  isSorted && (classesBuilder.string += ' E3JSEG-b-x' , classesBuilder);
  $appendExtraStyles(header);
  th = castTo($className($colSpan($startTH(tr.delegate_0), prevColspan), classesBuilder.string), 501);
  columnId = 'column-' + $createUniqueId($doc);
  $putStringValue(this$static.idToColumnMap, columnId, column);
  $attribute_0(th.delegate_0, '__gwt_column', columnId);
  if (header) {
    new Cell$Context(0, (lastArg = curColumn - prevColspan , lastArg));
    if (isSortable) {
      $attribute_0(th.delegate_0, 'role', 'button');
      $trustedAttribute(th.delegate_0, 'tabIndex', -1);
    }
    $renderSortableHeader(this$static, th, header, isSorted);
  }
  $end_0(th.delegate_1, 'th');
}

function DefaultHeaderOrFooterBuilder(table, isFooter){
  AbstractHeaderOrFooterBuilder.call(this, table, isFooter);
}

defineClass(188, 475, {}, DefaultHeaderOrFooterBuilder);
var Lcom_google_gwt_user_cellview_client_DefaultHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'DefaultHeaderOrFooterBuilder', 188);
function $addCellPreviewHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7));
}

function $calculateModifiedRanges(modifiedRows, pageStart, pageEnd){
  var diff, i, index_0, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  sortJsArrayInteger(modifiedRows);
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (i = 0; i < modifiedRows.length; i++) {
    index_0 = modifiedRows[i];
    if (index_0 < pageStart || index_0 >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index_0;
      rangeEnd0 = index_0;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index_0 - rangeEnd0;
      rangeStart1 = index_0;
      rangeEnd1 = index_0;
    }
     else {
      diff = index_0 - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index_0;
        rangeEnd1 = index_0;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index_0;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new ArrayList;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    $add_8(toRet, new Range_0(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    $add_8(toRet, new Range_0(rangeStart1, rangeLength1));
  }
  return toRet;
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $ensurePendingState(this$static){
  !this$static.pendingState && (this$static.pendingState = new HasDataPresenter$PendingState(this$static.state));
  this$static.pendingStateCommand = new HasDataPresenter$2(this$static);
  $scheduleFinally_0(this$static.pendingStateCommand);
  return this$static.pendingState;
}

function $findIndexOfBestMatch(state, value_0, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value_0 == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = $intern_0;
  rowDataCount = state.rowData.array.length;
  for (i = 0; i < rowDataCount; i++) {
    curValue = $get_2(state.rowData, i);
    if (equals_Ljava_lang_Object__Z__devirtual$(value_0, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function $getCurrentState(this$static){
  return !this$static.pendingState?this$static.state:this$static.pendingState;
}

function $getKeyboardSelectedRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow;
}

function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $getVisibleItem(this$static, indexOnPage){
  return $getRowDataValue(!this$static.pendingState?this$static.state:this$static.pendingState, indexOnPage);
}

function $getVisibleItemCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length;
}

function $getVisibleItems(this$static){
  return unmodifiableList((!this$static.pendingState?this$static.state:this$static.pendingState).rowData);
}

function $getVisibleRange(this$static){
  return new Range_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $isEmpty(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount == 0;
}

function $resolvePendingState(this$static, modifiedRows){
  var absStart, bestMatchIndex, e, i, isSelected, keyboardRowChanged, length_0, modifiedRanges, newSelectedRow, newState, newValue, newValueWasSelected, newlySelectedRows, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, oldValue, oldValueWasSelected, pageEnd, pageSize, pageStart, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, rowValue, start_0, wasSelected, cacheSize, curPageSize;
  this$static.pendingStateCommand = null;
  if (this$static.isResolvingState) {
    return false;
  }
  this$static.isResolvingState = true;
  if (!this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    return false;
  }
  ++this$static.pendingStateLoop;
  if (this$static.pendingStateLoop > 10) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    throw toJs(new IllegalStateException_0('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.'));
  }
  oldState = this$static.state;
  newState = this$static.pendingState;
  this$static.state = this$static.pendingState;
  this$static.pendingState = null;
  !modifiedRows && (modifiedRows = []);
  pageStart = newState.pageStart;
  pageSize = newState.pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = newState.rowData.array.length;
  newState.keyboardSelectedRow = max_0(0, min_0(newState.keyboardSelectedRow, rowDataCount - 1));
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    newState.keyboardSelectedRow = 0;
    newState.keyboardSelectedRowValue = null;
  }
   else if (newState.keyboardSelectedRowChanged) {
    newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
  }
   else if (newState.keyboardSelectedRowValue != null) {
    bestMatchIndex = $findIndexOfBestMatch(newState, newState.keyboardSelectedRowValue, newState.keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      newState.keyboardSelectedRow = bestMatchIndex;
      newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
    }
     else {
      newState.keyboardSelectedRow = 0;
      newState.keyboardSelectedRowValue = null;
    }
  }
  try {
    if (BOUND_TO_SELECTION == this$static.keyboardSelectionPolicy && !!this$static.selectionModel && newState.viewTouched) {
      oldValue = oldState.selectedValue;
      newValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
      if (newValue != null) {
        oldValueWasSelected = oldValue != null && $isSelected(this$static.selectionModel, oldValue);
        newValueWasSelected = newValue != null && $isSelected(this$static.selectionModel, newValue);
        if (equals_Ljava_lang_Object__Z__devirtual$(newValue, oldValue)) {
          newValueWasSelected || (newState.selectedValue = null);
        }
         else {
          oldValueWasSelected && $setSelected(this$static.selectionModel, oldValue, false);
          newState.selectedValue = newValue;
          newValue != null && !newValueWasSelected && $setSelected(this$static.selectionModel, newValue, true);
        }
      }
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 18)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw toJs(e);
    }
     else 
      throw toJs($e0);
  }
  keyboardRowChanged = newState.keyboardSelectedRowChanged || oldState.keyboardSelectedRow != newState.keyboardSelectedRow || oldState.keyboardSelectedRowValue == null && newState.keyboardSelectedRowValue != null;
  newlySelectedRows = new HashSet;
  try {
    for (i = pageStart; i < pageStart + rowDataCount; i++) {
      rowValue = $get_2(newState.rowData, i - pageStart);
      isSelected = rowValue != null && !!this$static.selectionModel && $isSelected(this$static.selectionModel, rowValue);
      wasSelected = $contains_0(oldState.selectedRows, valueOf(i));
      if (isSelected) {
        $add_9(newState.selectedRows, valueOf(i));
        $add_9(newlySelectedRows, valueOf(i));
        wasSelected || (modifiedRows[modifiedRows.length] = i , undefined);
      }
       else 
        wasSelected && (modifiedRows[modifiedRows.length] = i , undefined);
    }
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 18)) {
      e = $e1;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw toJs(e);
    }
     else 
      throw toJs($e1);
  }
  replacedEmptyRange = false;
  for (replacedRange$iterator = new ArrayList$1(newState.replacedRanges); replacedRange$iterator.i < replacedRange$iterator.this$01.array.length;) {
    replacedRange = castTo($next_4(replacedRange$iterator), 38);
    start_0 = replacedRange.start_0;
    length_0 = replacedRange.length_0;
    length_0 == 0 && (replacedEmptyRange = true);
    for (i = start_0; i < start_0 + length_0; i++) {
      modifiedRows[modifiedRows.length] = i;
    }
  }
  if (modifiedRows.length > 0 && keyboardRowChanged) {
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
  }
  if (this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingState.selectedValue = newState.selectedValue;
    $addAll(this$static.pendingState.selectedRows, newlySelectedRows);
    keyboardRowChanged && (this$static.pendingState.keyboardSelectedRowChanged = true);
    newState.keyboardStealFocus && (this$static.pendingState.keyboardStealFocus = true);
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
    if ($resolvePendingState(this$static, modifiedRows)) {
      return true;
    }
  }
  modifiedRanges = $calculateModifiedRanges(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.array.length > 0?(checkCriticalElementIndex(0, modifiedRanges.array.length) , castTo(modifiedRanges.array[0], 38)):null;
  range1 = modifiedRanges.array.length > 1?(checkCriticalElementIndex(1, modifiedRanges.array.length) , castTo(modifiedRanges.array[1], 38)):null;
  replaceDiff = 0;
  for (range$iterator = new ArrayList$1(modifiedRanges); range$iterator.i < range$iterator.this$01.array.length;) {
    range = castTo($next_4(range$iterator), 38);
    replaceDiff += range.length_0;
  }
  oldPageStart = oldState.pageStart;
  oldPageSize = oldState.pageSize;
  oldRowDataCount = oldState.rowData.array.length;
  redrawRequired = newState.redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.start_0 == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  cacheSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length;
  curPageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact?min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart):(!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  cacheSize >= curPageSize?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADED)):cacheSize == 0?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)):$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , PARTIALLY_LOADED));
  try {
    if (redrawRequired) {
      new SafeHtmlBuilder;
      $replaceAllChildren_0(this$static.view, newState.rowData, newState.keyboardStealFocus);
      $resetFocus(this$static.view);
    }
     else if (range0) {
      absStart = range0.start_0;
      relStart = absStart - pageStart;
      new SafeHtmlBuilder;
      replaceValues = new AbstractList$SubList(newState.rowData, relStart, relStart + range0.length_0);
      $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      if (range1) {
        absStart = range1.start_0;
        relStart = absStart - pageStart;
        new SafeHtmlBuilder;
        replaceValues = new AbstractList$SubList(newState.rowData, relStart, relStart + range1.length_0);
        $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      }
      $resetFocus(this$static.view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, oldSelectedRow, false, false);
      newSelectedRow = newState.keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, newSelectedRow, true, newState.keyboardStealFocus);
    }
  }
   catch ($e2) {
    $e2 = toJava($e2);
    if (instanceOf($e2, 75)) {
      e = $e2;
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e2);
  }
   finally {
    this$static.isResolvingState = false;
  }
  $resolvePendingState(this$static, null);
  return true;
}

function $scheduleFinally_0(command){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), command);
}

function $setKeyboardSelectedRow_2(this$static, index_0, stealFocus, forceUpdate){
  var absIndex, newPageSize, newPageStart, pageSize, pageStart, pending, rowCount, shift_0;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = max_0(0, min_0(index_0, (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length - 1)));
  $ensurePendingState(this$static).viewTouched = true;
  if (!forceUpdate && (DISABLED == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow) == index_0 && (DISABLED == this$static.keyboardSelectionPolicy?null:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRowValue) != null) {
    return;
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  rowCount = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
  absIndex = pageStart + index_0;
  absIndex >= rowCount && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (absIndex = rowCount - 1);
  index_0 = (0 > absIndex?0:absIndex) - pageStart;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = 0 > (index_0 < pageSize - 1?index_0:pageSize - 1)?0:index_0 < pageSize - 1?index_0:pageSize - 1);
  newPageStart = pageStart;
  newPageSize = pageSize;
  pending = $ensurePendingState(this$static);
  pending.keyboardSelectedRow = 0;
  pending.keyboardSelectedRowValue = null;
  pending.keyboardSelectedRowChanged = true;
  if (index_0 >= 0 && index_0 < pageSize) {
    pending.keyboardSelectedRow = index_0;
    pending.keyboardSelectedRowValue = index_0 < pending.rowData.array.length?$getRowDataValue($ensurePendingState(this$static), index_0):null;
    pending.keyboardStealFocus = stealFocus;
    return;
  }
   else if (($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = pageSize < newPageStart?pageSize:newPageStart;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= pageSize) {
      newPageStart += pageSize;
      index_0 -= pageSize;
    }
  }
   else if (INCREASE_RANGE == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = 30 < newPageStart?30:newPageStart;
      newPageSize += shift_0;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= newPageSize) {
      newPageSize += 30;
    }
    if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
      newPageSize = newPageSize < rowCount - newPageStart?newPageSize:rowCount - newPageStart;
      index_0 >= rowCount && (index_0 = rowCount - 1);
    }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
    pending.keyboardSelectedRow = index_0;
    $setVisibleRange_0(this$static, new Range_0(newPageStart, newPageSize), false);
  }
}

function $setKeyboardSelectionPolicy_0(this$static, policy){
  if (!policy) {
    throw toJs(new NullPointerException_0('KeyboardSelectionPolicy cannot be null'));
  }
  this$static.keyboardSelectionPolicy = policy;
}

function $setRowCount_0(this$static, count, isExact){
  if (count == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && isExact == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
    return;
  }
  $ensurePendingState(this$static).rowCount = count;
  $ensurePendingState(this$static).rowCountIsExact = isExact;
  $updateCachedData(this$static);
}

function $setRowData_0(this$static, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, i0, pageEnd, pageStart, pending, value_0, valuesLength;
  valuesLength = values.array.length;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageEnd = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart + (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  boundedStart = 0 > pageStart?0:pageStart;
  boundedEnd = valuesLength < pageEnd?valuesLength:pageEnd;
  if (0 != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = $ensurePendingState(this$static);
  cacheOffset = max_0(0, boundedStart - pageStart - (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length);
  for (i0 = 0; i0 < cacheOffset; i0++) {
    $add_8(pending.rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; i++) {
    value_0 = (checkCriticalElementIndex(i, values.array.length) , values.array[i]);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length?$set(pending.rowData, dataIndex, value_0):$add_8(pending.rowData, value_0);
  }
  $add_8(pending.replacedRanges, new Range_0(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesLength > (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && $setRowCount_0(this$static, valuesLength, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact);
}

function $setSelectionModel_0(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1(this$static));
  $ensurePendingState(this$static);
}

function $setVisibleRange_0(this$static, range, clearData){
  var decrease, i, increase, length_0, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start_0;
  start_0 = range.start_0;
  length_0 = range.length_0;
  if (start_0 < 0) {
    throw toJs(new IllegalArgumentException_0('Range start cannot be less than 0'));
  }
  if (length_0 < 0) {
    throw toJs(new IllegalArgumentException_0('Range length cannot be less than 0'));
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  pageStartChanged = pageStart != start_0;
  if (pageStartChanged) {
    pending = $ensurePendingState(this$static);
    if (!clearData) {
      if (start_0 > pageStart) {
        increase = start_0 - pageStart;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length > increase) {
          for (i = 0; i < increase; i++) {
            $remove_8(pending.rowData, 0);
          }
        }
         else {
          pending.rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
        }
      }
       else {
        decrease = pageStart - start_0;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; i++) {
            $add_7(pending.rowData, 0, null);
          }
          $add_8(pending.replacedRanges, new Range_0(start_0, start_0 + decrease - start_0));
        }
         else {
          pending.rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
        }
      }
    }
    pending.pageStart = start_0;
  }
  pageSizeChanged = pageSize != length_0;
  pageSizeChanged && ($ensurePendingState(this$static).pageSize = length_0);
  clearData && ($ensurePendingState(this$static).rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1));
  $updateCachedData(this$static);
  (pageStartChanged || pageSizeChanged) && new Range_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $updateCachedData(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  expectedLastIndex = max_0(0, min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - pageStart));
  lastIndex = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length - 1;
  while (lastIndex >= expectedLastIndex) {
    $remove_8($ensurePendingState(this$static).rowData, lastIndex);
    --lastIndex;
  }
}

function HasDataPresenter(view, pageSize){
  this.keyboardPagingPolicy = ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE);
  this.keyboardSelectionPolicy = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , ENABLED);
  this.view = view;
  this.state = new HasDataPresenter$DefaultState(pageSize);
}

function sortJsArrayInteger(array){
  array.sort(function(x_0, y_0){
    return x_0 - y_0;
  }
  );
}

defineClass(444, 1, $intern_11, HasDataPresenter);
_.isResolvingState = false;
_.pendingStateLoop = 0;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter', 444);
function HasDataPresenter$1(this$0){
  this.this$01 = this$0;
}

defineClass(446, 1, $intern_25, HasDataPresenter$1);
_.onSelectionChange = function onSelectionChange(event_0){
  $ensurePendingState(this.this$01);
}
;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/1', 446);
function HasDataPresenter$2(this$0){
  this.this$01 = this$0;
}

defineClass(447, 1, {}, HasDataPresenter$2);
_.execute_1 = function execute_6(){
  this.this$01.pendingStateCommand == this && $resolvePendingState(this.this$01, null);
}
;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/2', 447);
function $getRowDataValue(this$static, index_0){
  return $get_2(this$static.rowData, index_0);
}

function HasDataPresenter$DefaultState(pageSize){
  this.rowData = new ArrayList;
  this.selectedRows = new HashSet;
  this.pageSize = pageSize;
}

defineClass(185, 1, {}, HasDataPresenter$DefaultState);
_.keyboardSelectedRow = 0;
_.keyboardSelectedRowValue = null;
_.pageSize = 0;
_.pageStart = 0;
_.rowCount = 0;
_.rowCountIsExact = false;
_.selectedValue = null;
_.viewTouched = false;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/DefaultState', 185);
function HasDataPresenter$PendingState(state){
  var i, rowDataSize;
  HasDataPresenter$DefaultState.call(this, state.pageSize);
  this.replacedRanges = new ArrayList;
  this.keyboardSelectedRow = state.keyboardSelectedRow;
  this.keyboardSelectedRowValue = state.keyboardSelectedRowValue;
  this.pageSize = state.pageSize;
  this.pageStart = state.pageStart;
  this.rowCount = state.rowCount;
  this.rowCountIsExact = state.rowCountIsExact;
  this.selectedValue = state.selectedValue;
  this.viewTouched = state.viewTouched;
  rowDataSize = state.rowData.array.length;
  for (i = 0; i < rowDataSize; i++) {
    $add_8(this.rowData, $get_2(state.rowData, i));
  }
}

defineClass(445, 185, {}, HasDataPresenter$PendingState);
_.keyboardSelectedRowChanged = false;
_.keyboardStealFocus = false;
_.redrawRequired = false;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/PendingState', 445);
function $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy = emptyMethod;
  CURRENT_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('CURRENT_PAGE', 0, true);
  CHANGE_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('CHANGE_PAGE', 1, false);
  INCREASE_RANGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('INCREASE_RANGE', 2, false);
}

function HasKeyboardPagingPolicy$KeyboardPagingPolicy(enum$name, enum$ordinal, isLimitedToRange){
  Enum.call(this, enum$name, enum$ordinal);
  this.isLimitedToRange = isLimitedToRange;
}

function values_8(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit, 1), $intern_2, 99, 0, [CURRENT_PAGE, CHANGE_PAGE, INCREASE_RANGE]);
}

defineClass(99, 6, {99:1, 5:1, 7:1, 6:1}, HasKeyboardPagingPolicy$KeyboardPagingPolicy);
_.isLimitedToRange = false;
var CHANGE_PAGE, CURRENT_PAGE, INCREASE_RANGE;
var Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client', 'HasKeyboardPagingPolicy/KeyboardPagingPolicy', 99, values_8);
function $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy = emptyMethod;
  DISABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy('DISABLED', 0);
  ENABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy('ENABLED', 1);
  BOUND_TO_SELECTION = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy('BOUND_TO_SELECTION', 2);
}

function HasKeyboardSelectionPolicy$KeyboardSelectionPolicy(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit, 1), $intern_2, 100, 0, [DISABLED, ENABLED, BOUND_TO_SELECTION]);
}

defineClass(100, 6, {100:1, 5:1, 7:1, 6:1}, HasKeyboardSelectionPolicy$KeyboardSelectionPolicy);
var BOUND_TO_SELECTION, DISABLED, ENABLED;
var Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client', 'HasKeyboardSelectionPolicy/KeyboardSelectionPolicy', 100, values_9);
function Header(cell){
  this.cell = cell;
}

defineClass(84, 1, {84:1});
var Lcom_google_gwt_user_cellview_client_Header_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'Header', 84);
function $clinit_LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent = emptyMethod;
  TYPE_5 = new GwtEvent$Type;
}

function LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent();
}

defineClass(463, 524, {}, LoadingStateChangeEvent);
_.dispatch = function dispatch_5(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'LoadingStateChangeEvent', 463);
function $clinit_LoadingStateChangeEvent$LoadingState(){
  $clinit_LoadingStateChangeEvent$LoadingState = emptyMethod;
  LOADING = new LoadingStateChangeEvent$DefaultLoadingState;
  PARTIALLY_LOADED = new LoadingStateChangeEvent$DefaultLoadingState;
  LOADED = new LoadingStateChangeEvent$DefaultLoadingState;
}

var LOADED, LOADING, PARTIALLY_LOADED;
function LoadingStateChangeEvent$DefaultLoadingState(){
}

defineClass(135, 1, {}, LoadingStateChangeEvent$DefaultLoadingState);
var Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'LoadingStateChangeEvent/DefaultLoadingState', 135);
function TextColumn(){
  Column.call(this, new TextCell);
}

defineClass(134, 45, $intern_24);
var Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'TextColumn', 134);
function TextHeader(text_0){
  Header.call(this, new TextCell);
  this.text_0 = text_0;
}

defineClass(457, 84, {84:1}, TextHeader);
var Lcom_google_gwt_user_cellview_client_TextHeader_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'TextHeader', 457);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents(elem){
  $clinit_DOM();
  $sinkEvents_1(elem, 32768);
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_6 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(255, 524, {}, Window$ClosingEvent);
_.dispatch = function dispatch_6(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 255);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 65))
          throw toJs($e0);
      }
      values = castTo(out.get_0(key), 34);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 25);
    entry.setValue(unmodifiableList(castTo(entry.getValue_0(), 34)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(153, 91, $intern_11, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 153);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_26;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_27;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_18;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_16;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_28;
    case 'gesturechange':
      return $intern_29;
    case 'gestureend':
      return $intern_30;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem_0();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 14)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $getChildIndex(parent_0, toFind){
  var count = 0, child = parent_0.firstChild;
  while (child) {
    if (child === toFind) {
      return count;
    }
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return -1;
}

function $initEventSystem_0(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_26 && (elem.onerror = bits & $intern_26?dispatchEvent_1:null);
  chMask & $intern_27 && (elem.onmousewheel = bits & $intern_27?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.onpaste = bits & $intern_18?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ontouchend = bits & $intern_16?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_28 && (elem.ongesturestart = bits & $intern_28?dispatchEvent_1:null);
  chMask & $intern_29 && (elem.ongesturechange = bits & $intern_29?dispatchEvent_1:null);
  chMask & $intern_30 && (elem.ongestureend = bits & $intern_30?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function $sinkEvents_1(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_27 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_1), false);
}

function $removeByElement(this$static, elem){
  var index_0, index_1;
  index_0 = (index_1 = elem['__uiObjectID'] , index_1 == null?-1:index_1);
  elem['__uiObjectID'] = null;
  $set(this$static.uiObjectList, index_0, null);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

defineClass(458, 1, {}, ElementMapperImpl);
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 458);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $clear_0(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.getChildren());
  while (it.index_0 < it.this$01.size_0) {
    $next_1(it);
    $remove_4(it);
  }
}

defineClass(519, 9, $intern_31);
_.doAttachChildren = function doAttachChildren_1(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_1(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 519);
function $add(this$static, child, container){
  $add_0(this$static, child, ($clinit_DOM() , container));
}

function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_5(this$static.getChildren(), child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForAccess(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.children_0.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children_0.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children_0, child);
}

function $insert(this$static, child, container){
  $insert_0(this$static, child, ($clinit_DOM() , container), 0);
}

function $insert_0(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_1(this$static.children_0, child, beforeIndex);
  insertChild(container, ($clinit_DOM() , child.element), beforeIndex);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_3(this$static.getChildren(), w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(77, 519, $intern_31);
_.getChildren = function getChildren(){
  return this.children_0;
}
;
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.getChildren());
}
;
_.remove_0 = function remove_0(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 77);
function $add_1(this$static, w){
  $add_0(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(220, 77, $intern_31);
_.remove_0 = function remove_1(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 220);
function create_0(resource){
  return new ClippedImagePrototype(resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

defineClass(541, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 541);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_1(), 9);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 12)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_0(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(224, 119, $intern_12, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 224);
function AttachDetachException$1(){
}

defineClass(225, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_7(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 225);
function AttachDetachException$2(){
}

defineClass(226, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_8(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 226);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(166, 9, $intern_21);
_.onAttach = function onAttach_1(){
  var tabIndex;
  $onAttach(this);
  tabIndex = ($clinit_DOM() , this.element).tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 166);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(409, 166, $intern_21);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 409);
function Button(){
  $clinit_FocusWidget();
  ButtonBase.call(this, $createButtonElement($doc, 'button'));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
}

defineClass(180, 409, $intern_21, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 180);
function $setCellHorizontalAlignment(td, align_0){
  ($clinit_DOM() , td)['align'] = align_0.textAlignString;
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  td.style['verticalAlign'] = align_0.verticalAlignString;
}

defineClass(348, 77, $intern_31);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 348);
function $add_2(this$static, w){
  var container, container_0, element;
  container = (container_0 = ($clinit_DOM() , $doc.createElement('div')) , container_0.style['width'] = '100%' , undefined , container_0.style['height'] = '0px' , undefined , container_0.style['padding'] = '0px' , undefined , container_0.style['margin'] = '0px' , undefined , container_0);
  $appendChild(this$static.element, resolve(container));
  $add_0(this$static, w, container);
  setVisible(container, false);
  container.style['height'] = '100%';
  element = w.element;
  $equals(element.style['width'], '') && (w.element.style['width'] = '100%' , undefined);
  $equals(element.style['height'], '') && (w.element.style['height'] = '100%' , undefined);
  setVisible(w.element, false);
}

function $showWidget(this$static, index_0){
  var oldWidget;
  $checkIndexBoundsForAccess(this$static, index_0);
  oldWidget = this$static.visibleWidget;
  this$static.visibleWidget = $get_0(this$static.children_0, index_0);
  if (this$static.visibleWidget != oldWidget) {
    !slideAnimation && (slideAnimation = new DeckPanel$SlideAnimation);
    $showWidget_0(slideAnimation, oldWidget, this$static.visibleWidget);
  }
}

function DeckPanel(){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , $doc.createElement('div')));
}

defineClass(452, 77, $intern_31, DeckPanel);
_.remove_0 = function remove_2(w){
  var container, removed;
  container = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  if (removed) {
    w.element.style['width'] = '';
    w.element.style['height'] = '';
    w.setVisible(true);
    $removeChild(this.element, container);
    this.visibleWidget == w && (this.visibleWidget = null);
  }
  return removed;
}
;
var slideAnimation;
var Lcom_google_gwt_user_client_ui_DeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel', 452);
function $onComplete(this$static){
  if (this$static.growing) {
    this$static.container1.style['height'] = '100%';
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, false);
    this$static.container2.style['height'] = '100%';
  }
   else {
    setVisible(this$static.container1, false);
    this$static.container1.style['height'] = '100%';
    this$static.container2.style['height'] = '100%';
    setVisible(this$static.container2, true);
  }
  this$static.container1.style['overflow'] = 'visible';
  this$static.container2.style['overflow'] = 'visible';
  this$static.container1 = null;
  this$static.container2 = null;
  this$static.oldWidget.setVisible(false);
  this$static.oldWidget = null;
}

function $onUpdate(this$static, progress){
  var height1, height2;
  this$static.growing || (progress = 1 - progress);
  if (this$static.fixedHeight == -1) {
    height1 = round_int(progress * $getPropertyInt(this$static.container1, 'scrollHeight'));
    height2 = round_int((1 - progress) * $getPropertyInt(this$static.container2, 'scrollHeight'));
  }
   else {
    height1 = round_int(progress * this$static.fixedHeight);
    height2 = this$static.fixedHeight - height1;
  }
  if (height1 == 0) {
    height1 = 1;
    height2 = 1 > height2 - 1?1:height2 - 1;
  }
   else if (height2 == 0) {
    height2 = 1;
    height1 = 1 > height1 - 1?1:height1 - 1;
  }
  this$static.container1.style['height'] = height1 + 'px';
  this$static.container2.style['height'] = height2 + 'px';
}

function $showWidget_0(this$static, oldWidget, newWidget){
  var newContainer, newIndex, oldContainer, oldIndex;
  $cancel(this$static);
  newContainer = ($clinit_DOM() , $clinit_DOM() , $getParentElement(newWidget.element));
  newIndex = $getChildIndex($getParentElement(newContainer), newContainer);
  if (!oldWidget) {
    setVisible(newContainer, true);
    newWidget.setVisible(true);
    return;
  }
  this$static.oldWidget = oldWidget;
  oldContainer = (null , $getParentElement(oldWidget.element));
  oldIndex = $getChildIndex($getParentElement(oldContainer), oldContainer);
  if (newIndex > oldIndex) {
    this$static.container1 = oldContainer;
    this$static.container2 = newContainer;
    this$static.growing = false;
  }
   else {
    this$static.container1 = newContainer;
    this$static.container2 = oldContainer;
    this$static.growing = true;
  }
  setVisible(this$static.container1, this$static.growing);
  setVisible(this$static.container2, !this$static.growing);
  this$static.container1 = null;
  this$static.container2 = null;
  this$static.oldWidget.setVisible(false);
  this$static.oldWidget = null;
  newWidget.setVisible(true);
}

function DeckPanel$SlideAnimation(){
  Animation.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

defineClass(453, 186, {}, DeckPanel$SlideAnimation);
_.container1 = null;
_.container2 = null;
_.fixedHeight = -1;
_.growing = false;
_.oldWidget = null;
var Lcom_google_gwt_user_client_ui_DeckPanel$SlideAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel/SlideAnimation', 453);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(354, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 354);
function $remove_0(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

defineClass(427, 519, $intern_31);
_.iterator = function iterator_1(){
  return new HTMLTable$1(this);
}
;
_.remove_0 = function remove_3(widget){
  return $remove_0(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 427);
function FlexTable(){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = ($clinit_DOM() , $doc.createElement('table'));
  this.bodyElem = $doc.createElement('tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

defineClass(428, 427, $intern_31, FlexTable);
var Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable', 428);
function $add_3(this$static, widget){
  $add_0(this$static, widget, ($clinit_DOM() , this$static.element));
}

function $addAndReplaceElement(this$static, widget, toReplace){
  $addAndReplaceElement_0(this$static, widget, ($clinit_DOM() , toReplace));
}

function $addAndReplaceElement_0(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children_0);
  while (children.index_0 < children.this$01.size_0) {
    next = $next_1(children);
    if ($isOrHasChild(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_4(children);
    }
  }
  $add_5(this$static.children_0, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(24, 77, $intern_31, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 24);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_2(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw toJs(new NoSuchElementException);
  }
  result = castTo($get_2(this$static.widgetList, this$static.nextIndex), 9);
  this$static.lastIndex = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(430, 1, {}, HTMLTable$1);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.remove_1 = function remove_4(){
  var w;
  if (this.lastIndex < 0) {
    throw toJs(new IllegalStateException);
  }
  w = castTo($get_2(this.widgetList, this.lastIndex), 9);
  $removeFromParent(w);
  this.lastIndex = -1;
}
;
_.lastIndex = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 430);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $doc.createElement('colgroup'));
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($doc.createElement('col')));
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(429, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 429);
defineClass(534, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 534);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(108, 534, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 108);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(123, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 123);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setUrl(this$static, url_0){
  !!this$static.state && (($clinit_DOM() , this$static.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_1(resource){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState_0(this, resource.url_0, resource.width_0, resource.height_0));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

defineClass(81, 9, $intern_21, Image_0, Image_1);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && (this.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent_0(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 81);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(425, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 425);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(426, 1, {}, Image$State$1);
_.execute_1 = function execute_9(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $getImageElement(this.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 426);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents(($clinit_DOM() , image.element));
  image.eventsToSink == -1?$sinkEvents_1(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

function Image$UnclippedState_0(image, url_0, width_0, height){
  Image$UnclippedState.call(this, image);
  !!image.state && (($clinit_DOM() , image.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
  $setWidth(image.element, width_0);
  $setHeight(image.element, height);
}

defineClass(112, 425, {}, Image$UnclippedState, Image$UnclippedState_0);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 112);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(162, 9, $intern_21);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 162);
function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
}

defineClass(51, 162, $intern_21, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 51);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_11(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = castTo($getStringValue(rootPanels, id_0), 89);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM() , rp.element == elem)) {
      return rp;
    }
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_9(widgetsToDetach, rp);
  return rp;
}

defineClass(89, 220, $intern_32, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 89);
function RootPanel$1(){
}

defineClass(222, 1, {}, RootPanel$1);
_.execute_2 = function execute_10(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 222);
function RootPanel$2(){
}

defineClass(223, 1, {542:1, 31:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 223);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(221, 89, $intern_32, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 221);
function $remove_1(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(($clinit_DOM() , this$static.element), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_1(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.element, resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(137, 519, $intern_31, SimplePanel);
_.iterator = function iterator_2(){
  return new SimplePanel$1(this);
}
;
_.remove_0 = function remove_5(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 137);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(464, 1, {}, SimplePanel$1);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasElement;
}
;
_.remove_1 = function remove_6(){
  !!this.returned && $remove_1(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 464);
function $getValueOrThrow(this$static){
  var parseResult, text_0;
  text_0 = $getPropertyString(($clinit_DOM() , this$static.element), 'value');
  parseResult = (checkCriticalNotNull(text_0) , text_0);
  if ($equals('', text_0)) {
    return null;
  }
  return parseResult;
}

function ValueBoxBase(elem){
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
}

defineClass(355, 166, $intern_21);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent_0(this, event_0):$onBrowserEvent_0(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 355);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(356, 355, $intern_21);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 356);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  ValueBoxBase.call(this, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , element));
  ($clinit_DOM() , this.element).className = 'gwt-TextBox';
}

defineClass(167, 356, $intern_21, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 167);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_2, 53, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(53, 6, $intern_33);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 53, values_10);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(357, 53, $intern_33, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 357, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(358, 53, $intern_33, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 358, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(359, 53, $intern_33, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 359, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(360, 53, $intern_33, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 360, null);
function $add_4(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add_0(this$static, w, td);
}

function VerticalPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(349, 348, $intern_31, VerticalPanel);
_.remove_0 = function remove_7(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 349);
function $add_5(this$static, w){
  $insert_1(this$static, w, this$static.size_0);
}

function $get_0(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_1(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 9, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_2(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_3(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_2(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 9, 4, 0, 1);
}

defineClass(264, 1, {}, WidgetCollection);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 264);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_4(this$static){
  if (!this$static.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this$static.this$01.parent_0.remove_0(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(107, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_1 = function remove_8(){
  $remove_4(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 107);
function $clinit_ClippedImageImpl(){
  var key, global;
  $clinit_ClippedImageImpl = emptyMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString(($clinit_Impl() , key = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , global = $wnd || self , global[key] || $moduleBase) + 'clear.cache.gif'));
}

function $getSafeHtml(url_0, left, top_0, width_0, height){
  var builder;
  builder = new SafeStylesBuilder;
  $append($append($append(builder, new SafeStylesString('width:' + width_0 + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString('height:' + height + 'px' + ';')), new SafeStylesString('background:' + ('url(' + url_0.uri_0 + ') ' + 'no-repeat ' + (-left + 'px ') + (-top_0 + 'px')) + ';'));
  return !template_0 && (template_0 = new ClippedImageImpl_TemplateImpl) , $image(clearImage, new SafeStylesString((new SafeStylesString(builder.sb.string)).css_0));
}

var clearImage, template_0;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='";
  $append_2(sb, htmlEscape(arg0.uri_0));
  sb.string += "' style='";
  $append_2(sb, htmlEscape(arg1.css_0));
  sb.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ClippedImageImpl_TemplateImpl(){
}

defineClass(479, 1, {}, ClippedImageImpl_TemplateImpl);
var Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImageImpl_TemplateImpl', 479);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function ClippedImagePrototype(url_0, left, top_0, width_0, height){
  $clinit_ClippedImagePrototype();
  this.url_0 = url_0;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width_0;
  this.height_0 = height;
}

defineClass(498, 541, {}, ClippedImagePrototype);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url_0 = null;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 498);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard;
  implWidget = implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(370, 1, {}, FocusImpl);
_.setAccessKey = function setAccessKey(elem, key){
  elem.accessKey = String.fromCharCode(key);
}
;
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 370);
function FocusImplStandard(){
}

defineClass(376, 370, {}, FocusImplStandard);
_.setAccessKey = function setAccessKey_0(elem, key){
  elem.firstChild.accessKey = String.fromCharCode(key);
}
;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 376);
function CellPreviewEvent(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  this.nativeEvent = nativeEvent;
  this.display_0 = display;
  this.context = context;
  this.value_0 = value_0;
  this.isCellEditing = isCellEditing;
  this.isSelectionHandled = isSelectionHandled;
}

function fire_3(source, nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  var event_0;
  event_0 = new CellPreviewEvent(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled);
  !!TYPE_7 && !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  return event_0;
}

defineClass(443, 524, {}, CellPreviewEvent);
_.dispatch = function dispatch_7(handler){
  castTo(handler, 194).onCellPreview(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.isCanceled = false;
_.isCellEditing = false;
_.isSelectionHandled = false;
var TYPE_7;
var Lcom_google_gwt_view_client_CellPreviewEvent_2_classLit = createForClass('com.google.gwt.view.client', 'CellPreviewEvent', 443);
function $handleSelectionEvent(event_0, action, selectionModel){
  var keyCode, nativeEvent, type_0, value_0;
  value_0 = event_0.value_0;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        $setSelected(selectionModel, value_0, true);
        return;
      case 2:
        $setSelected(selectionModel, value_0, false);
        return;
      case 3:
        $setSelected(selectionModel, value_0, !$isSelected(selectionModel, value_0));
        return;
    }
  }
  nativeEvent = event_0.nativeEvent;
  type_0 = nativeEvent.type;
  if ($equals('click', type_0)) {
    !!nativeEvent.ctrlKey || !!nativeEvent.metaKey?$setSelected(selectionModel, value_0, !$isSelected(selectionModel, value_0)):$setSelected(selectionModel, value_0, true);
  }
   else if ($equals('keyup', type_0)) {
    keyCode = nativeEvent.keyCode | 0;
    keyCode == 32 && $setSelected(selectionModel, value_0, !$isSelected(selectionModel, value_0));
  }
}

function DefaultSelectionEventManager(){
}

defineClass(477, 1, $intern_23, DefaultSelectionEventManager);
_.onCellPreview = function onCellPreview_1(event_0){
  var action, display, selectionModel;
  if (event_0.isCellEditing || event_0.isSelectionHandled) {
    return;
  }
  display = event_0.display_0;
  selectionModel = display.presenter.selectionModel;
  if (!selectionModel) {
    return;
  }
  action = ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_1);
  $handleSelectionEvent(event_0, action, selectionModel);
}
;
var Lcom_google_gwt_view_client_DefaultSelectionEventManager_2_classLit = createForClass('com.google.gwt.view.client', 'DefaultSelectionEventManager', 477);
function $clinit_DefaultSelectionEventManager$SelectAction(){
  $clinit_DefaultSelectionEventManager$SelectAction = emptyMethod;
  DEFAULT_1 = new DefaultSelectionEventManager$SelectAction('DEFAULT', 0);
  SELECT = new DefaultSelectionEventManager$SelectAction('SELECT', 1);
  DESELECT = new DefaultSelectionEventManager$SelectAction('DESELECT', 2);
  TOGGLE = new DefaultSelectionEventManager$SelectAction('TOGGLE', 3);
  IGNORE = new DefaultSelectionEventManager$SelectAction('IGNORE', 4);
}

function DefaultSelectionEventManager$SelectAction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_DefaultSelectionEventManager$SelectAction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit, 1), $intern_2, 73, 0, [DEFAULT_1, SELECT, DESELECT, TOGGLE, IGNORE]);
}

defineClass(73, 6, {73:1, 5:1, 7:1, 6:1}, DefaultSelectionEventManager$SelectAction);
var DEFAULT_1, DESELECT, IGNORE, SELECT, TOGGLE;
var Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForEnum('com.google.gwt.view.client', 'DefaultSelectionEventManager/SelectAction', 73, values_11);
function Range_0(start_0, length_0){
  this.start_0 = start_0;
  this.length_0 = length_0;
}

defineClass(38, 1, {38:1, 5:1}, Range_0);
_.equals_0 = function equals_6(o){
  var r;
  if (!instanceOf(o, 38)) {
    return false;
  }
  r = castTo(o, 38);
  return this.start_0 == r.start_0 && this.length_0 == r.length_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.length_0 * 31 ^ this.start_0;
}
;
_.toString_0 = function toString_10(){
  return 'Range(' + this.start_0 + ',' + this.length_0 + ')';
}
;
_.length_0 = 0;
_.start_0 = 0;
var Lcom_google_gwt_view_client_Range_2_classLit = createForClass('com.google.gwt.view.client', 'Range', 38);
function SelectionChangeEvent(){
}

function fire_4(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new SelectionChangeEvent;
    $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(421, 524, {}, SelectionChangeEvent);
_.dispatch = function dispatch_8(handler){
  castTo(handler, 500).onSelectionChange(this);
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_view_client_SelectionChangeEvent_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionChangeEvent', 421);
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler(this$static.handlerManager, (!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8), handler);
}

function $scheduleSelectionChangeEvent(this$static){
  this$static.isEventCancelled = false;
  if (!this$static.isEventScheduled) {
    this$static.isEventScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new SelectionModel$AbstractSelectionModel$1(this$static));
  }
}

defineClass(431, 1, $intern_11);
_.isEventCancelled = false;
_.isEventScheduled = false;
var Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionModel/AbstractSelectionModel', 431);
function SelectionModel$AbstractSelectionModel$1(this$1){
  this.this$11 = this$1;
}

defineClass(433, 1, {}, SelectionModel$AbstractSelectionModel$1);
_.execute_1 = function execute_11(){
  this.this$11.isEventScheduled = false;
  if (this.this$11.isEventCancelled) {
    this.this$11.isEventCancelled = false;
    return;
  }
  $fireSelectionChangeEvent(this.this$11);
}
;
var Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel$1_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionModel/AbstractSelectionModel/1', 433);
function $equalsOrBothNull(a, b){
  return a == null?b == null:equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function $fireSelectionChangeEvent(this$static){
  this$static.isEventScheduled && (this$static.isEventCancelled = true);
  $resolveChanges(this$static);
}

function $getSelectedObject(this$static){
  $resolveChanges(this$static);
  return this$static.curSelection;
}

function $isSelected(this$static, item_0){
  $resolveChanges(this$static);
  if (this$static.curSelection == null || this$static.curKey == null || item_0 == null) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(this$static.curKey, item_0);
}

function $resolveChanges(this$static){
  var changed, key, sameKey;
  if (!this$static.newSelectedPending) {
    return;
  }
  key = this$static.newSelectedItem;
  sameKey = $equalsOrBothNull(this$static.curKey, key);
  changed = false;
  if (this$static.newSelected) {
    changed = !sameKey;
    this$static.curSelection = this$static.newSelectedItem;
    this$static.curKey = key;
  }
   else if (sameKey) {
    changed = true;
    this$static.curSelection = null;
    this$static.curKey = null;
  }
  this$static.newSelectedItem = null;
  this$static.newSelectedPending = false;
  changed && fire_4(this$static);
}

function $setSelected(this$static, item_0, selected){
  var oldKey;
  if (!selected) {
    oldKey = this$static.newSelectedPending?this$static.newSelectedItem:this$static.curKey;
    if (!(oldKey == null?item_0 == null:equals_Ljava_lang_Object__Z__devirtual$(oldKey, item_0))) {
      return;
    }
  }
  this$static.newSelectedItem = item_0;
  this$static.newSelected = selected;
  this$static.newSelectedPending = true;
  $scheduleSelectionChangeEvent(this$static);
}

function SingleSelectionModel(){
  this.handlerManager = new HandlerManager(this);
}

defineClass(432, 431, $intern_11, SingleSelectionModel);
_.newSelected = false;
_.newSelectedItem = null;
_.newSelectedPending = false;
var Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit = createForClass('com.google.gwt.view.client', 'SingleSelectionModel', 432);
function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(257, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 257);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(258, 1, {499:1}, SimpleEventBus$2);
_.execute_1 = function execute_12(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 258);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(259, 1, {499:1}, SimpleEventBus$3);
_.execute_1 = function execute_13(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 259);
function $clinit_APICaller(){
  $clinit_APICaller = emptyMethod;
  logger_0 = $ensureLogger(getLogManager(), 'APICaller');
}

function call_0(url_0, callback){
  $clinit_APICaller();
  var builder, e;
  builder = new RequestBuilder(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', url_0) , encodeURI(url_0)));
  try {
    throwIfNull('callback', callback);
    $doSend(builder, callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 62)) {
      e = $e0;
      $log(logger_0, ($clinit_Level() , SEVERE), 'RequestException: ' + e);
      $printStackTraceImpl(e, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
}

var baseUrl = 'http://ec2-13-235-82-198.ap-south-1.compute.amazonaws.com:8888/library', logger_0;
function $clinit_EventType(){
  $clinit_EventType = emptyMethod;
  NAVIGATION = new EventType;
}

function EventType(){
  Enum.call(this, 'NAVIGATION', 0);
  this.value_0 = 'NAVIGATION';
}

function values_12(){
  $clinit_EventType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_texo_library_client_listeners_EventType_2_classLit, 1), $intern_2, 132, 0, [NAVIGATION]);
}

defineClass(132, 6, {132:1, 5:1, 7:1, 6:1}, EventType);
_.toString_0 = function toString_11(){
  return this.value_0;
}
;
var NAVIGATION;
var Lcom_texo_library_client_listeners_EventType_2_classLit = createForEnum('com.texo.library.client.listeners', 'EventType', 132, values_12);
function $clinit_ListenerFactory(){
  $clinit_ListenerFactory = emptyMethod;
  factory = new ListenerFactory;
}

function $register(this$static, event_0, listener){
  var existing;
  if (event_0.ordinal == 0) {
    existing = castTo($get_1(this$static.map_0, ($clinit_EventType() , NAVIGATION)), 34);
    if (!existing) {
      existing = new ArrayList;
      $put_0(this$static.map_0, NAVIGATION, existing);
    }
    existing.add_0(listener);
  }
}

function ListenerFactory(){
  this.map_0 = new HashMap;
}

defineClass(402, 1, {}, ListenerFactory);
var factory;
var Lcom_texo_library_client_listeners_ListenerFactory_2_classLit = createForClass('com.texo.library.client.listeners', 'ListenerFactory', 402);
function User(jsObject){
  this.id_0 = jsObject.id;
  this.name_0 = jsObject.name;
  this.email_0 = jsObject.email;
}

defineClass(85, 1, {85:1}, User);
var Lcom_texo_library_client_model_User_2_classLit = createForClass('com.texo.library.client.model', 'User', 85);
function $onLoginButtonClicked(this$static, name_0, password){
  var builder, callback, e, urlString;
  $log(this$static.logger, ($clinit_Level() , INFO_0), 'this is  message: ' + name_0);
  urlString = 'http://ec2-13-235-82-198.ap-south-1.compute.amazonaws.com:8888/library/user/login?email=' + name_0 + '&password=' + password;
  builder = new RequestBuilder(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', urlString) , encodeURI(urlString)));
  callback = new LoginPresenter$LoginCallback(this$static);
  try {
    throwIfNull('callback', callback);
    $doSend(builder, callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 62)) {
      e = $e0;
      $log(this$static.logger, SEVERE, 'RequestException: ' + e);
      $printStackTraceImpl(e, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
  $clinit_MaterialLoader();
  loading(true, ($clinit_RootPanel() , get_0(null)));
}

function $show(this$static){
  var mainContent;
  mainContent = ($clinit_RootPanel() , get_0(null));
  $clear_0(mainContent);
  $add_1(mainContent, this$static.view);
}

function LoginPresenter(){
  this.logger = $ensureLogger(getLogManager(), 'LoginPresenter');
  this.view = new LoginView(this);
}

defineClass(143, 1, {}, LoginPresenter);
var Lcom_texo_library_client_presenter_LoginPresenter_2_classLit = createForClass('com.texo.library.client.presenter', 'LoginPresenter', 143);
function LoginPresenter$LoginCallback(this$0){
  this.this$01 = this$0;
}

defineClass(212, 1, {}, LoginPresenter$LoginCallback);
_.onError = function onError(request, exception){
  $log(this.this$01.logger, ($clinit_Level() , SEVERE), 'onError: cause=' + exception.cause);
}
;
_.onResponseReceived = function onResponseReceived(request, response){
  var p, responseText, statusCode, mainContent, headerView;
  statusCode = valueOf(response.xmlHttpRequest.status);
  $log(this.this$01.logger, ($clinit_Level() , INFO_0), 'onResponseReceived: statusCode=' + statusCode);
  if (200 == statusCode.value_0) {
    $clinit_MaterialLoader();
    loading(false, ($clinit_RootPanel() , get_0(null)));
    responseText = response.xmlHttpRequest.responseText;
    $log(this.this$01.logger, INFO_0, 'responseText=' + responseText);
    if ($equalsIgnoreCase('logged in successfully', $trim(responseText))) {
      p = new AdminHomePresenter;
      mainContent = get_0(null);
      $clear_0(mainContent);
      $add_1(mainContent, p.view);
      headerView = p.adminHeaderPresenter.view;
      $addHeader(p.view, headerView);
      $addMiddleContent(p.view, p.adminMiddlePresenter.view);
      $show_0(p.adminMiddlePresenter);
      $addFooter(p.view, p.adminFooterPresenter.view);
    }
     else {
      $toast(new MaterialToast(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_2, 9, 0, [])), 'Invalid Credentials. Please try again', null);
    }
  }
}
;
var Lcom_texo_library_client_presenter_LoginPresenter$LoginCallback_2_classLit = createForClass('com.texo.library.client.presenter', 'LoginPresenter/LoginCallback', 212);
function AdminBooksPresenter(){
  this.view = new AdminBooksView;
}

defineClass(405, 1, {}, AdminBooksPresenter);
var Lcom_texo_library_client_presenter_admin_AdminBooksPresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminBooksPresenter', 405);
function AdminFooterPresenter(){
  this.view = new AdminFooterView;
}

defineClass(397, 1, {}, AdminFooterPresenter);
var Lcom_texo_library_client_presenter_admin_AdminFooterPresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminFooterPresenter', 397);
function AdminHeaderPresenter(){
  this.view = new AdminHeaderView;
}

defineClass(395, 1, {}, AdminHeaderPresenter);
var Lcom_texo_library_client_presenter_admin_AdminHeaderPresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminHeaderPresenter', 395);
function AdminHomePresenter(){
  $ensureLogger(getLogManager(), 'HomePresenter');
  this.adminHeaderPresenter = new AdminHeaderPresenter;
  this.adminMiddlePresenter = new AdminMiddlePresenter;
  this.adminFooterPresenter = new AdminFooterPresenter;
  this.view = new AdminHomeView;
}

defineClass(394, 1, {}, AdminHomePresenter);
var Lcom_texo_library_client_presenter_admin_AdminHomePresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminHomePresenter', 394);
function $refresh(this$static){
  var callback, url_0;
  callback = new AdminMembersPresenter$GetAllMembersAPICallback(this$static);
  url_0 = ($clinit_APICaller() , baseUrl) + '/user/getAll';
  $clinit_MaterialLoader();
  loading(true, ($clinit_RootPanel() , get_0(null)));
  call_0(url_0, callback);
}

function AdminMembersPresenter(){
  this.logger = $ensureLogger(getLogManager(), 'AdminMembersPresenter');
  this.view = new AdminMembersView;
}

defineClass(406, 1, {}, AdminMembersPresenter);
var Lcom_texo_library_client_presenter_admin_AdminMembersPresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminMembersPresenter', 406);
function AdminMembersPresenter$GetAllMembersAPICallback(this$0){
  this.this$01 = this$0;
}

defineClass(407, 1, {}, AdminMembersPresenter$GetAllMembersAPICallback);
_.onError = function onError_0(request, exception){
  $log(this.this$01.logger, ($clinit_Level() , INFO_0), 'onError: cause=' + exception.cause);
  $clinit_MaterialLoader();
  loading(false, ($clinit_RootPanel() , get_0(null)));
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var i, length_0, responseString, statusCode, user, userJSObject, users, usersArray;
  $clinit_MaterialLoader();
  loading(false, ($clinit_RootPanel() , get_0(null)));
  statusCode = valueOf(response.xmlHttpRequest.status);
  $log(this.this$01.logger, ($clinit_Level() , INFO_0), 'onResponseReceived: statusCode=' + statusCode);
  if (200 == statusCode.value_0) {
    users = new ArrayList;
    responseString = response.xmlHttpRequest.responseText;
    usersArray = safeEval(responseString);
    length_0 = usersArray.length;
    for (i = 0; i < length_0; i++) {
      userJSObject = usersArray[i];
      user = new User(userJSObject);
      users.array[users.array.length] = user;
    }
    $setMembersData(this.this$01.view, users);
  }
}
;
var Lcom_texo_library_client_presenter_admin_AdminMembersPresenter$GetAllMembersAPICallback_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminMembersPresenter/GetAllMembersAPICallback', 407);
function $show_0(this$static){
  $addNavigationPanel(this$static.view, this$static.navigationPresenter.view);
}

function AdminMiddlePresenter(){
  var instance;
  this.view = new AdminMiddleView;
  this.navigationPresenter = new AdminNavigationPresenter;
  this.bookPresenter = new AdminBooksPresenter;
  this.membersPresenter = new AdminMembersPresenter;
  instance = ($clinit_ListenerFactory() , $clinit_ListenerFactory() , factory);
  $register(instance, ($clinit_EventType() , NAVIGATION), this);
}

defineClass(396, 1, {193:1}, AdminMiddlePresenter);
var Lcom_texo_library_client_presenter_admin_AdminMiddlePresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminMiddlePresenter', 396);
function $onBooksClicked(){
  var l, l$iterator, navigationListeners;
  navigationListeners = castTo($get_1(($clinit_ListenerFactory() , $clinit_ListenerFactory() , factory).map_0, ($clinit_EventType() , NAVIGATION)), 34);
  for (l$iterator = navigationListeners.iterator(); l$iterator.hasNext_0();) {
    l = castTo(l$iterator.next_1(), 193);
    $changeMainView(l.view, l.bookPresenter.view);
  }
}

function $onDashboardClicked(){
  var l$iterator, navigationListeners;
  navigationListeners = castTo($get_1(($clinit_ListenerFactory() , $clinit_ListenerFactory() , factory).map_0, ($clinit_EventType() , NAVIGATION)), 34);
  for (l$iterator = navigationListeners.iterator(); l$iterator.hasNext_0();) {
    castTo(l$iterator.next_1(), 193);
    $toast(new MaterialToast(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_2, 9, 0, [])), 'onDashboardCicked', null);
  }
}

function $onMembersClicked(){
  var l, l$iterator, navigationListeners;
  navigationListeners = castTo($get_1(($clinit_ListenerFactory() , $clinit_ListenerFactory() , factory).map_0, ($clinit_EventType() , NAVIGATION)), 34);
  for (l$iterator = navigationListeners.iterator(); l$iterator.hasNext_0();) {
    l = castTo(l$iterator.next_1(), 193);
    $changeMainView(l.view, l.membersPresenter.view);
    $refresh(l.membersPresenter);
  }
}

function AdminNavigationPresenter(){
  this.view = new AdminNavigationView;
}

defineClass(404, 1, {}, AdminNavigationPresenter);
var Lcom_texo_library_client_presenter_admin_AdminNavigationPresenter_2_classLit = createForClass('com.texo.library.client.presenter.admin', 'AdminNavigationPresenter', 404);
function $onLoginButtonClicked_0(this$static){
  var password, username;
  username = $getPropertyString($getElement(this$static.usernameTextBox.valueBoxBase), 'value');
  if (username == null || $equals($trim(username), '')) {
    $setErrorText_0(this$static.usernameTextBox, 'Username can not be empty');
    return;
  }
  password = $getPropertyString($getElement(this$static.passwordTextBox.valueBoxBase), 'value');
  if (password == null || $equals($trim(password), '')) {
    $setErrorText_0(this$static.passwordTextBox, 'Password can not be empty');
    return;
  }
  $onLoginButtonClicked(this$static.presenter, username, password);
}

function LoginView(presenter){
  this.presenter = presenter;
  $initWidget(this, $build_f_HTMLPanel1(new LoginView_LoginViewUiBinderImpl$Widgets(this)));
  $addClickHandler(this.loginButton, new LoginView$1(this));
}

defineClass(218, 518, $intern_22, LoginView);
var Lcom_texo_library_client_views_LoginView_2_classLit = createForClass('com.texo.library.client.views', 'LoginView', 218);
function LoginView$1(this$0){
  this.this$01 = this$0;
}

defineClass(219, 1, $intern_34, LoginView$1);
_.onClick = function onClick(event_0){
  $onLoginButtonClicked_0(this.this$01);
}
;
var Lcom_texo_library_client_views_LoginView$1_2_classLit = createForClass('com.texo.library.client.views', 'LoginView/1', 219);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, f_VerticalPanel2, f_Label3, usernameTextBox, inputWidget, passwordTextBox, inputWidget_0, loginButton;
  f_HTMLPanel1 = new HTMLPanel($html1(this$static.domId0).html_0);
  ($clinit_DOM() , f_HTMLPanel1.element).className = 'E3JSEG-a-a';
  __attachRecord__ = attachToDom(f_HTMLPanel1.element);
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel , $add_4(f_VerticalPanel2, (f_Label3 = new Label , f_Label3.element.className = 'E3JSEG-a-b' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Welcome to Texo! A Complete Library Management System') , f_Label3)) , $add_4(f_VerticalPanel2, (usernameTextBox = new MaterialTextBox , $setAllowBlank(usernameTextBox) , (!usernameTextBox.validatorMixin && (usernameTextBox.validatorMixin = new ValidatorMixin(usernameTextBox, (!usernameTextBox.errorHandlerMixin && (usernameTextBox.errorHandlerMixin = new ErrorHandlerMixin(usernameTextBox)) , usernameTextBox.errorHandlerMixin).errorHandler)) , usernameTextBox.validatorMixin).validateOnBlur = true , inputWidget = (!usernameTextBox.validatorMixin && (usernameTextBox.validatorMixin = new ValidatorMixin(usernameTextBox, (!usernameTextBox.errorHandlerMixin && (usernameTextBox.errorHandlerMixin = new ErrorHandlerMixin(usernameTextBox)) , usernameTextBox.errorHandlerMixin).errorHandler)) , usernameTextBox.validatorMixin).inputWidget , inputWidget.attached?$registerHandler(usernameTextBox, $addBlurHandler(inputWidget, new AbstractValueWidget$lambda$1$Type(usernameTextBox))):$registerHandler(usernameTextBox, $addHandler_0(inputWidget, new AbstractValueWidget$lambda$0$Type(usernameTextBox, inputWidget), (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1))) , $setText_1(usernameTextBox.label_0, 'Username') , ($getElement(usernameTextBox.valueBoxBase).getAttribute('placeholder') || '').length == 0 || $setStyleName(usernameTextBox.label_0, 'active') , this$static.owner.usernameTextBox = usernameTextBox , usernameTextBox)) , $add_4(f_VerticalPanel2, (passwordTextBox = new MaterialTextBox , $setAllowBlank(passwordTextBox) , (!passwordTextBox.validatorMixin && (passwordTextBox.validatorMixin = new ValidatorMixin(passwordTextBox, (!passwordTextBox.errorHandlerMixin && (passwordTextBox.errorHandlerMixin = new ErrorHandlerMixin(passwordTextBox)) , passwordTextBox.errorHandlerMixin).errorHandler)) , passwordTextBox.validatorMixin).validateOnBlur = true , inputWidget_0 = (!passwordTextBox.validatorMixin && (passwordTextBox.validatorMixin = new ValidatorMixin(passwordTextBox, (!passwordTextBox.errorHandlerMixin && (passwordTextBox.errorHandlerMixin = new ErrorHandlerMixin(passwordTextBox)) , passwordTextBox.errorHandlerMixin).errorHandler)) , passwordTextBox.validatorMixin).inputWidget , inputWidget_0.attached?$registerHandler(passwordTextBox, $addBlurHandler(inputWidget_0, new AbstractValueWidget$lambda$1$Type(passwordTextBox))):$registerHandler(passwordTextBox, $addHandler_0(inputWidget_0, new AbstractValueWidget$lambda$0$Type(passwordTextBox, inputWidget_0), (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1))) , $setText_1(passwordTextBox.label_0, 'Password') , ($getElement(passwordTextBox.valueBoxBase).getAttribute('placeholder') || '').length == 0 || $setStyleName(passwordTextBox.label_0, 'active') , this$static.owner.passwordTextBox = passwordTextBox , passwordTextBox)) , $add_4(f_VerticalPanel2, (loginButton = new MaterialButton , $setWaves(loginButton, ($clinit_WavesType() , LIGHT)) , $setIconType(loginButton, ($clinit_IconType() , POLYMER)) , $setText_2(loginButton.span_0) , loginButton.span_0.attached || $add_6(loginButton, loginButton.span_0) , $setTextColor(loginButton, ($clinit_Color() , WHITE)) , this$static.owner.loginButton = loginButton , loginButton)) , f_VerticalPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function LoginView_LoginViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = ($clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected_0(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(262, 1, {}, LoginView_LoginViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_LoginView_1LoginViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views', 'LoginView_LoginViewUiBinderImpl/Widgets', 262);
var style_0;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-a-a{position:fixed;left:380px;top:90px;width:475px;background-color:aquamarin}.E3JSEG-a-b{font-size:x-large}');
    schedule();
    return true;
  }
  return false;
}

function LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(350, 1, {}, LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_1(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_LoginView_1LoginViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views', 'LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 350);
function $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_0 = new LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function AdminBooksView(){
  $initWidget(this, $build_f_HTMLPanel1_0(new AdminBooksView_AdminBooksViewUiBinderImpl$Widgets));
}

defineClass(415, 518, $intern_22, AdminBooksView);
var Lcom_texo_library_client_views_admin_AdminBooksView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminBooksView', 415);
function $build_f_HTMLPanel1_0(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, style, __attachRecord___0, f_Label3;
  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_0(this$static.domId1).html_0) , $setStyleName(f_HTMLPanel2, (style = ($clinit_AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1) , $ensureInjected_1(style) , 'E3JSEG-h-a')) , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (f_Label3 = new Label , $setTextOrHtml(f_Label3.directionalTextHelper, 'Books') , f_Label3), $get(this$static.domId1Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminBooksView_AdminBooksViewUiBinderImpl$Widgets(){
  var style;
  style = ($clinit_AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_1(style);
  this.domId1 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(450, 1, {}, AdminBooksView_AdminBooksViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminBooksView_1AdminBooksViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminBooksView_AdminBooksViewUiBinderImpl/Widgets', 450);
var style_1;
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-h-a{position:absolute;width:1100px;height:100%;padding:10px}');
    schedule();
    return true;
  }
  return false;
}

function AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(470, 1, {}, AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_2(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminBooksView_1AdminBooksViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 470);
function $clinit_AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_1 = new AdminBooksView_AdminBooksViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function AdminFooterView(){
  $initWidget(this, $build_f_HTMLPanel1_1(new AdminFooterView_AdminFooterViewUiBinderImpl$Widgets));
}

defineClass(408, 518, $intern_22, AdminFooterView);
var Lcom_texo_library_client_views_admin_AdminFooterView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminFooterView', 408);
function $build_f_HTMLPanel1_1(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, __attachRecord___0, f_Label3;
  f_HTMLPanel1 = new HTMLPanel($html2_0(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_1(this$static.domId1).html_0) , f_HTMLPanel2.element.className = 'E3JSEG-f-b' , undefined , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (f_Label3 = new Label , $setTextOrHtml(f_Label3.directionalTextHelper, 'Copyright') , f_Label3.element.className = 'E3JSEG-f-c' , f_Label3), $get(this$static.domId1Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminFooterView_AdminFooterViewUiBinderImpl$Widgets(){
  this.style_0 = ($clinit_AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_2);
  $ensureInjected_2(this.style_0);
  this.domId1 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(448, 1, {}, AdminFooterView_AdminFooterViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminFooterView_1AdminFooterViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminFooterView_AdminFooterViewUiBinderImpl/Widgets', 448);
var style_2;
function $ensureInjected_2(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-f-c{font-size:small;color:white;position:absolute;left:25px;top:10px}.E3JSEG-f-a{position:absolute;right:20px;top:10px}.E3JSEG-f-b{width:100%;position:absolute;background-color:#464646;padding:0;height:40px;top:560px}');
    schedule();
    return true;
  }
  return false;
}

function AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(468, 1, {}, AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_3(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminFooterView_1AdminFooterViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 468);
function $clinit_AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_2 = new AdminFooterView_AdminFooterViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html2_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function AdminHeaderView(){
  $initWidget(this, $build_f_HTMLPanel1_2(new AdminHeaderView_AdminHeaderViewUiBinderImpl$Widgets(this)));
  $addDomHandler(this.logoutButton, new AdminHeaderView$1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

defineClass(400, 518, $intern_22, AdminHeaderView);
var Lcom_texo_library_client_views_admin_AdminHeaderView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHeaderView', 400);
function AdminHeaderView$1(){
}

defineClass(401, 1, $intern_34, AdminHeaderView$1);
_.onClick = function onClick_0(event_0){
  $show(new LoginPresenter);
}
;
var Lcom_texo_library_client_views_admin_AdminHeaderView$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHeaderView/1', 401);
function $build_f_HTMLPanel1_2(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, __attachRecord___0, f_Label3, logoutButton;
  f_HTMLPanel1 = new HTMLPanel($html2_1(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_2(this$static.domId1, this$static.domId2).html_0) , f_HTMLPanel2.element.className = 'E3JSEG-d-b' , undefined , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , $get(this$static.domId2Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (f_Label3 = new Label , $setTextOrHtml(f_Label3.directionalTextHelper, 'Welcome Administrator') , f_Label3.element.className = 'E3JSEG-d-c' , f_Label3), $get(this$static.domId1Element)) , $addAndReplaceElement(f_HTMLPanel2, (logoutButton = new Button , logoutButton.element.className = 'E3JSEG-d-a' , logoutButton.element.textContent = 'Logout' , this$static.owner.logoutButton = logoutButton , logoutButton), $get(this$static.domId2Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminHeaderView_AdminHeaderViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = ($clinit_AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_3);
  $ensureInjected_3(this.style_0);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(423, 1, {}, AdminHeaderView_AdminHeaderViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminHeaderView_1AdminHeaderViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHeaderView_AdminHeaderViewUiBinderImpl/Widgets', 423);
var style_3;
function $ensureInjected_3(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-d-c{font-size:large;color:white;position:absolute;left:25px;top:16px}.E3JSEG-d-b{width:100%;position:absolute;background-color:#464646;padding:0;height:60px}.E3JSEG-d-a{position:absolute;right:23px;top:11px;background-color:#f44336;padding:2px 8px;color:white;border-radius:12px;width:90px;height:37px;font-size:medium}');
    schedule();
    return true;
  }
  return false;
}

function AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(466, 1, {}, AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_4(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminHeaderView_1AdminHeaderViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 466);
function $clinit_AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_3 = new AdminHeaderView_AdminHeaderViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_2(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html2_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $addFooter(this$static, view){
  $add_3(this$static.footerPanel, view);
}

function $addHeader(this$static, headerView){
  $add_3(this$static.headerPanel, headerView);
}

function $addMiddleContent(this$static, view){
  $add_3(this$static.middlePanel, view);
}

function AdminHomeView(){
  $initWidget(this, $build_f_HTMLPanel1_3(new AdminHomeView_AdminHomeViewUiBinderImpl$Widgets(this)));
}

defineClass(398, 518, $intern_22, AdminHomeView);
var Lcom_texo_library_client_views_admin_AdminHomeView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHomeView', 398);
function $build_f_HTMLPanel1_3(this$static){
  var __attachRecord__, f_HTMLPanel1, rootVerticalPanel, style, __attachRecord___0, headerPanel, sb, middlePanel, sb_0, footerPanel, sb_1;
  f_HTMLPanel1 = new HTMLPanel($html5(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (rootVerticalPanel = new HTMLPanel($html4(this$static.domId1, this$static.domId2, this$static.domId3).html_0) , $setStyleName(rootVerticalPanel, (style = ($clinit_AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_4) , $ensureInjected_4(style) , 'E3JSEG-c-d')) , __attachRecord___0 = attachToDom(rootVerticalPanel.element) , $get(this$static.domId1Element) , $get(this$static.domId2Element) , $get(this$static.domId3Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(rootVerticalPanel, (headerPanel = new HTMLPanel((sb = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , this$static.owner.headerPanel = headerPanel , headerPanel), $get(this$static.domId1Element)) , $addAndReplaceElement(rootVerticalPanel, (middlePanel = new HTMLPanel((sb_0 = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , this$static.owner.middlePanel = middlePanel , middlePanel), $get(this$static.domId2Element)) , $addAndReplaceElement(rootVerticalPanel, (footerPanel = new HTMLPanel((sb_1 = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , this$static.owner.footerPanel = footerPanel , footerPanel), $get(this$static.domId3Element)) , rootVerticalPanel), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminHomeView_AdminHomeViewUiBinderImpl$Widgets(owner){
  var style;
  this.owner = owner;
  style = ($clinit_AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_4);
  $ensureInjected_4(style);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(422, 1, {}, AdminHomeView_AdminHomeViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminHomeView_1AdminHomeViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHomeView_AdminHomeViewUiBinderImpl/Widgets', 422);
var style_4;
function $ensureInjected_4(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-c-d{padding:0}.E3JSEG-c-b{position:absolute;width:100%;height:60px}.E3JSEG-c-c{position:absolute;width:100%;height:500px;top:60px}.E3JSEG-c-a{position:absolute;width:100%;top:510px;height:40px}');
    schedule();
    return true;
  }
  return false;
}

function AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(465, 1, {}, AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_5(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminHomeView_1AdminHomeViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 465);
function $clinit_AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_4 = new AdminHomeView_AdminHomeViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html4(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg2));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html5(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $setMembersData(this$static, users){
  $setRowCount(this$static.cellTableOfUser, users.array.length);
  $setRowData(this$static.cellTableOfUser, users);
}

function AdminMembersView(){
  var columnFirstLine, columnSecondLine, emaiColumn, flexTable, flexTable0, selectionModel;
  $initWidget(this, $build_f_HTMLPanel1_4(new AdminMembersView_AdminMembersViewUiBinderImpl$Widgets(this)));
  flexTable0 = (flexTable = new FlexTable , flexTable);
  this.cellTableOfUser = new CellTable;
  $setKeyboardSelectionPolicy(this.cellTableOfUser, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , ENABLED));
  columnFirstLine = new AdminMembersView$1;
  $addColumn(this.cellTableOfUser, columnFirstLine, 'StudentID');
  columnSecondLine = new AdminMembersView$2;
  $addColumn(this.cellTableOfUser, columnSecondLine, 'Student Name');
  emaiColumn = new AdminMembersView$3;
  $addColumn(this.cellTableOfUser, emaiColumn, 'Email');
  selectionModel = new SingleSelectionModel;
  $setSelectionModel(this.cellTableOfUser, selectionModel);
  $addSelectionChangeHandler(selectionModel, new AdminMembersView$4(selectionModel));
  $add_3(this.membersTable, flexTable0);
  $add_3(this.membersTable, this.cellTableOfUser);
}

defineClass(416, 518, $intern_22, AdminMembersView);
var Lcom_texo_library_client_views_admin_AdminMembersView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView', 416);
function AdminMembersView$1(){
  TextColumn.call(this);
}

defineClass(417, 134, $intern_24, AdminMembersView$1);
_.getValue = function getValue(object){
  return '' + castTo(object, 85).id_0;
}
;
var Lcom_texo_library_client_views_admin_AdminMembersView$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView/1', 417);
function AdminMembersView$2(){
  TextColumn.call(this);
}

defineClass(418, 134, $intern_24, AdminMembersView$2);
_.getValue = function getValue_0(object){
  return castTo(object, 85).name_0;
}
;
var Lcom_texo_library_client_views_admin_AdminMembersView$2_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView/2', 418);
function AdminMembersView$3(){
  TextColumn.call(this);
}

defineClass(419, 134, $intern_24, AdminMembersView$3);
_.getValue = function getValue_1(object){
  return castTo(object, 85).email_0;
}
;
var Lcom_texo_library_client_views_admin_AdminMembersView$3_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView/3', 419);
function AdminMembersView$4(val$selectionModel){
  this.val$selectionModel2 = val$selectionModel;
}

defineClass(420, 1, $intern_25, AdminMembersView$4);
_.onSelectionChange = function onSelectionChange_0(event_0){
  var selectedUser;
  selectedUser = castTo($getSelectedObject(this.val$selectionModel2), 85);
  !!selectedUser && alert_0('Selected: Student: ' + selectedUser.name_0);
}
;
var Lcom_texo_library_client_views_admin_AdminMembersView$4_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView/4', 420);
function $build_f_HTMLPanel1_4(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, __attachRecord___0, f_Label3, addUserButton, f_HTMLPanel4, __attachRecord___1, membersTable, sb;
  f_HTMLPanel1 = new HTMLPanel($html4_0(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html3(this$static.domId1, this$static.domId2, this$static.domId3).html_0) , f_HTMLPanel2.element.className = 'E3JSEG-i-e' , undefined , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , $get(this$static.domId2Element) , $get(this$static.domId3Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (f_Label3 = new Label , $setTextOrHtml(f_Label3.directionalTextHelper, 'Members') , f_Label3.element.className = 'E3JSEG-i-c' , f_Label3), $get(this$static.domId1Element)) , $addAndReplaceElement(f_HTMLPanel2, (addUserButton = new Button , addUserButton.element.className = 'E3JSEG-i-a' , addUserButton.element.textContent = 'Add New User' , addUserButton), $get(this$static.domId2Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_HTMLPanel4 = new HTMLPanel($html2_2(this$static.domId4).html_0) , f_HTMLPanel4.element.className = 'E3JSEG-i-d' , __attachRecord___1 = attachToDom(f_HTMLPanel4.element) , $get(this$static.domId4Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement(f_HTMLPanel4, (membersTable = new HTMLPanel((sb = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , this$static.owner.membersTable = membersTable , membersTable), $get(this$static.domId4Element)) , f_HTMLPanel4), $get(this$static.domId3Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminMembersView_AdminMembersViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = ($clinit_AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_5);
  $ensureInjected_5(this.style_0);
  this.domId4 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId4Element = new LazyDomElement(this.domId4);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(451, 1, {}, AdminMembersView_AdminMembersViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminMembersView_1AdminMembersViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView_AdminMembersViewUiBinderImpl/Widgets', 451);
var style_5;
function $ensureInjected_5(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-i-e{position:absolute;width:1100px;height:100%;padding:10px}.E3JSEG-i-b{border-bottom:1px solid #ccc;text-align:left;margin-bottom:4px}.E3JSEG-i-c{font-size:large}.E3JSEG-i-d{position:absolute;top:60px;width:100%;height:100%}.E3JSEG-i-a{position:absolute;right:35px;top:15px;background-color:#54a7ff;padding-bottom:3px;padding-top:3px;padding-left:10px;padding-right:10px;color:white;font-size:medium}');
    schedule();
    return true;
  }
  return false;
}

function AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(471, 1, {}, AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_6(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminMembersView_1AdminMembersViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 471);
function $clinit_AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_5 = new AdminMembersView_AdminMembersViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html2_2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html3(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg2));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html4_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $addNavigationPanel(this$static, view){
  $add_3(this$static.adminNavigationPanel, view);
}

function $changeMainView(this$static, view){
  $clear_0(this$static.adminMainView);
  $add_3(this$static.adminMainView, view);
}

function AdminMiddleView(){
  $initWidget(this, $build_f_HTMLPanel1_5(new AdminMiddleView_AdminMiddleViewUiBinderImpl$Widgets(this)));
}

defineClass(403, 518, $intern_22, AdminMiddleView);
var Lcom_texo_library_client_views_admin_AdminMiddleView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMiddleView', 403);
function $build_f_HTMLPanel1_5(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, __attachRecord___0, adminNavigationPanel, sb, adminMainView, sb_0;
  f_HTMLPanel1 = new HTMLPanel($html4_1(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html3_0(this$static.domId1, this$static.domId2).html_0) , f_HTMLPanel2.element.className = 'E3JSEG-e-c' , undefined , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , $get(this$static.domId2Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (adminNavigationPanel = new HTMLPanel((sb = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , adminNavigationPanel.element.className = 'E3JSEG-e-b' , this$static.owner.adminNavigationPanel = adminNavigationPanel , adminNavigationPanel), $get(this$static.domId1Element)) , $addAndReplaceElement(f_HTMLPanel2, (adminMainView = new HTMLPanel((sb_0 = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , adminMainView.element.className = 'E3JSEG-e-a' , this$static.owner.adminMainView = adminMainView , adminMainView), $get(this$static.domId2Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminMiddleView_AdminMiddleViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = ($clinit_AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_6);
  $ensureInjected_6(this.style_0);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(424, 1, {}, AdminMiddleView_AdminMiddleViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminMiddleView_1AdminMiddleViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMiddleView_AdminMiddleViewUiBinderImpl/Widgets', 424);
var style_6;
function $ensureInjected_6(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-e-c{height:500px;position:absolute;top:60px;width:100%}.E3JSEG-e-b{position:absolute;width:200px;height:100%}.E3JSEG-e-a{position:absolute;width:1100px;left:200px;height:100%;overflow-y:scroll}');
    schedule();
    return true;
  }
  return false;
}

function AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(467, 1, {}, AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_7(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminMiddleView_1AdminMiddleViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 467);
function $clinit_AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_6 = new AdminMiddleView_AdminMiddleViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html3_0(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html4_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function AdminNavigationView(){
  $initWidget(this, $build_f_HTMLPanel1_6(new AdminNavigationView_AdminNavigationViewUiBinderImpl$Widgets(this)));
  $addDomHandler(this.dashboardLabel, new AdminNavigationView$1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $addDomHandler(this.booksLabel, new AdminNavigationView$2, (null , TYPE_0));
  $addDomHandler(this.membersLabel, new AdminNavigationView$3, (null , TYPE_0));
  $addHandler_0(this.membersImage, new AdminNavigationView$4, (null , TYPE_0));
}

defineClass(410, 518, $intern_22, AdminNavigationView);
var Lcom_texo_library_client_views_admin_AdminNavigationView_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView', 410);
function AdminNavigationView$1(){
}

defineClass(411, 1, $intern_34, AdminNavigationView$1);
_.onClick = function onClick_1(event_0){
  $onDashboardClicked();
}
;
var Lcom_texo_library_client_views_admin_AdminNavigationView$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView/1', 411);
function AdminNavigationView$2(){
}

defineClass(412, 1, $intern_34, AdminNavigationView$2);
_.onClick = function onClick_2(event_0){
  $onBooksClicked();
}
;
var Lcom_texo_library_client_views_admin_AdminNavigationView$2_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView/2', 412);
function AdminNavigationView$3(){
}

defineClass(413, 1, $intern_34, AdminNavigationView$3);
_.onClick = function onClick_3(event_0){
  $onMembersClicked();
}
;
var Lcom_texo_library_client_views_admin_AdminNavigationView$3_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView/3', 413);
function AdminNavigationView$4(){
}

defineClass(414, 1, $intern_34, AdminNavigationView$4);
_.onClick = function onClick_4(event_0){
  $onMembersClicked();
}
;
var Lcom_texo_library_client_views_admin_AdminNavigationView$4_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView/4', 414);
function $build_f_HTMLPanel1_6(this$static){
  var __attachRecord__, f_HTMLPanel1, f_HTMLPanel2, __attachRecord___0, dashboardPanel, __attachRecord___1, f_Image3, dashboardLabel, booksPanel, __attachRecord___2, f_Image4, booksLabel, packagesPanel, __attachRecord___3, f_Image5, packagesLabel, membersPanel, __attachRecord___4, membersImage, membersLabel, assignedPanel, __attachRecord___5, f_Image6, assignedLabel;
  f_HTMLPanel1 = new HTMLPanel($html7(this$static.domId0).html_0);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel2 = new HTMLPanel($html6(this$static.domId1, this$static.domId4, this$static.domId7, this$static.domId10, this$static.domId13).html_0) , f_HTMLPanel2.element.className = 'E3JSEG-g-h' , undefined , __attachRecord___0 = attachToDom(f_HTMLPanel2.element) , $get(this$static.domId1Element) , $get(this$static.domId4Element) , $get(this$static.domId7Element) , $get(this$static.domId10Element) , $get(this$static.domId13Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel2, (dashboardPanel = new HTMLPanel($html1_3(this$static.domId2, this$static.domId3).html_0) , dashboardPanel.element.className = 'E3JSEG-g-e' , __attachRecord___1 = attachToDom(dashboardPanel.element) , $get(this$static.domId2Element) , $get(this$static.domId3Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement(dashboardPanel, (f_Image3 = new Image_0 , f_Image3.element.className = 'E3JSEG-g-c' , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString('images/baseline_dashboard_white_18dp.png'))) , f_Image3), $get(this$static.domId2Element)) , $addAndReplaceElement(dashboardPanel, (dashboardLabel = new Label , $setTextOrHtml(dashboardLabel.directionalTextHelper, 'Dashboard') , dashboardLabel.element.className = 'E3JSEG-g-d' , this$static.owner.dashboardLabel = dashboardLabel , dashboardLabel), $get(this$static.domId3Element)) , dashboardPanel), $get(this$static.domId1Element)) , $addAndReplaceElement(f_HTMLPanel2, (booksPanel = new HTMLPanel($html2_3(this$static.domId5, this$static.domId6).html_0) , booksPanel.element.className = 'E3JSEG-g-b' , __attachRecord___2 = attachToDom(booksPanel.element) , $get(this$static.domId5Element) , $get(this$static.domId6Element) , __attachRecord___2.origParent?$insertBefore(__attachRecord___2.origParent, __attachRecord___2.element, __attachRecord___2.origSibling):orphan(__attachRecord___2.element) , $addAndReplaceElement(booksPanel, (f_Image4 = new Image_0 , f_Image4.element.className = 'E3JSEG-g-c' , $setUrl(f_Image4, new SafeUriString('images/baseline_menu_book_white_18dp.png')) , f_Image4), $get(this$static.domId5Element)) , $addAndReplaceElement(booksPanel, (booksLabel = new Label , $setTextOrHtml(booksLabel.directionalTextHelper, 'Books') , booksLabel.element.className = 'E3JSEG-g-d' , this$static.owner.booksLabel = booksLabel , booksLabel), $get(this$static.domId6Element)) , booksPanel), $get(this$static.domId4Element)) , $addAndReplaceElement(f_HTMLPanel2, (packagesPanel = new HTMLPanel($html3_1(this$static.domId8, this$static.domId9).html_0) , packagesPanel.element.className = 'E3JSEG-g-g' , __attachRecord___3 = attachToDom(packagesPanel.element) , $get(this$static.domId8Element) , $get(this$static.domId9Element) , __attachRecord___3.origParent?$insertBefore(__attachRecord___3.origParent, __attachRecord___3.element, __attachRecord___3.origSibling):orphan(__attachRecord___3.element) , $addAndReplaceElement(packagesPanel, (f_Image5 = new Image_0 , f_Image5.element.className = 'E3JSEG-g-c' , $setUrl(f_Image5, new SafeUriString('images/baseline_open_in_browser_white_18dp.png')) , f_Image5), $get(this$static.domId8Element)) , $addAndReplaceElement(packagesPanel, (packagesLabel = new Label , $setTextOrHtml(packagesLabel.directionalTextHelper, 'Packages') , packagesLabel.element.className = 'E3JSEG-g-d' , packagesLabel), $get(this$static.domId9Element)) , packagesPanel), $get(this$static.domId7Element)) , $addAndReplaceElement(f_HTMLPanel2, (membersPanel = new HTMLPanel($html4_2(this$static.domId11, this$static.domId12).html_0) , membersPanel.element.className = 'E3JSEG-g-f' , __attachRecord___4 = attachToDom(membersPanel.element) , $get(this$static.domId11Element) , $get(this$static.domId12Element) , __attachRecord___4.origParent?$insertBefore(__attachRecord___4.origParent, __attachRecord___4.element, __attachRecord___4.origSibling):orphan(__attachRecord___4.element) , $addAndReplaceElement(membersPanel, (membersImage = new Image_0 , membersImage.element.className = 'E3JSEG-g-c' , $setUrl(membersImage, new SafeUriString('images/baseline_supervisor_account_white_18dp.png')) , this$static.owner.membersImage = membersImage , membersImage), $get(this$static.domId11Element)) , $addAndReplaceElement(membersPanel, (membersLabel = new Label , $setTextOrHtml(membersLabel.directionalTextHelper, 'Members') , membersLabel.element.className = 'E3JSEG-g-d' , this$static.owner.membersLabel = membersLabel , membersLabel), $get(this$static.domId12Element)) , membersPanel), $get(this$static.domId10Element)) , $addAndReplaceElement(f_HTMLPanel2, (assignedPanel = new HTMLPanel($html5_0(this$static.domId14, this$static.domId15).html_0) , assignedPanel.element.className = 'E3JSEG-g-a' , __attachRecord___5 = attachToDom(assignedPanel.element) , $get(this$static.domId14Element) , $get(this$static.domId15Element) , __attachRecord___5.origParent?$insertBefore(__attachRecord___5.origParent, __attachRecord___5.element, __attachRecord___5.origSibling):orphan(__attachRecord___5.element) , $addAndReplaceElement(assignedPanel, (f_Image6 = new Image_0 , f_Image6.element.className = 'E3JSEG-g-c' , $setUrl(f_Image6, new SafeUriString('images/baseline_assignment_turned_in_white_18dp.png')) , f_Image6), $get(this$static.domId14Element)) , $addAndReplaceElement(assignedPanel, (assignedLabel = new Label , $setTextOrHtml(assignedLabel.directionalTextHelper, 'Assigned') , assignedLabel.element.className = 'E3JSEG-g-d' , assignedLabel), $get(this$static.domId15Element)) , assignedPanel), $get(this$static.domId13Element)) , f_HTMLPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AdminNavigationView_AdminNavigationViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = ($clinit_AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_7);
  $ensureInjected_7(this.style_0);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId5 = $createUniqueId($doc);
  this.domId6 = $createUniqueId($doc);
  this.domId8 = $createUniqueId($doc);
  this.domId9 = $createUniqueId($doc);
  this.domId11 = $createUniqueId($doc);
  this.domId12 = $createUniqueId($doc);
  this.domId14 = $createUniqueId($doc);
  this.domId15 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId4 = $createUniqueId($doc);
  this.domId7 = $createUniqueId($doc);
  this.domId10 = $createUniqueId($doc);
  this.domId13 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
  this.domId5Element = new LazyDomElement(this.domId5);
  this.domId6Element = new LazyDomElement(this.domId6);
  this.domId8Element = new LazyDomElement(this.domId8);
  this.domId9Element = new LazyDomElement(this.domId9);
  this.domId11Element = new LazyDomElement(this.domId11);
  this.domId12Element = new LazyDomElement(this.domId12);
  this.domId14Element = new LazyDomElement(this.domId14);
  this.domId15Element = new LazyDomElement(this.domId15);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId4Element = new LazyDomElement(this.domId4);
  this.domId7Element = new LazyDomElement(this.domId7);
  this.domId10Element = new LazyDomElement(this.domId10);
  this.domId13Element = new LazyDomElement(this.domId13);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(449, 1, {}, AdminNavigationView_AdminNavigationViewUiBinderImpl$Widgets);
var Lcom_texo_library_client_views_admin_AdminNavigationView_1AdminNavigationViewUiBinderImpl$Widgets_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView_AdminNavigationViewUiBinderImpl/Widgets', 449);
var style_7;
function $ensureInjected_7(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.E3JSEG-g-h{position:absolute;width:200px;height:100%;background-color:#464646}.E3JSEG-g-e{padding-bottom:4px;padding-top:4px;padding-left:10px;padding-right:10px;width:200px;background-color:#464646;position:absolute;height:60px;color:white;font-size:medium}.E3JSEG-g-c{position:absolute;top:10px}.E3JSEG-g-d{position:absolute;left:60px;top:17px}.E3JSEG-g-b{padding-bottom:4px;padding-top:4px;padding-left:10px;padding-right:10px;width:200px;background-color:#464646;position:absolute;height:60px;color:white;font-size:medium;top:60px}.E3JSEG-g-g{padding-bottom:4px;padding-top:4px;padding-left:10px;padding-right:10px;width:200px;background-color:#464646;position:absolute;height:60px;color:white;font-size:medium;top:120px}.E3JSEG-g-f{padding-bottom:4px;padding-top:4px;padding-left:10px;padding-right:10px;width:200px;background-color:#464646;position:absolute;height:60px;color:white;font-size:medium;top:180px}.E3JSEG-g-a{padding-bottom:4px;padding-top:4px;padding-left:10px;padding-right:10px;width:200px;background-color:#464646;position:absolute;height:60px;color:white;font-size:medium;top:240px}');
    schedule();
    return true;
  }
  return false;
}

function AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(469, 1, {}, AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_8(){
  return 'style';
}
;
_.injected = false;
var Lcom_texo_library_client_views_admin_AdminNavigationView_1AdminNavigationViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.texo.library.client.views.admin', 'AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 469);
function $clinit_AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_7 = new AdminNavigationView_AdminNavigationViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_3(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html2_3(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html3_1(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html4_2(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html5_0(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html6(arg0, arg1, arg2, arg3, arg4){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg2));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg3));
  sb.string += "'><\/span> <span id='";
  $append_2(sb, htmlEscape(arg4));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html7(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

var startupState;
function StartupState(){
}

defineClass(195, 1, {}, StartupState);
var Lgwt_material_design_addins_client_StartupState_2_classLit = createForClass('gwt.material.design.addins.client', 'StartupState', 195);
defineClass(517, 1, {});
var Lgwt_material_design_client_JQueryProvider_2_classLit = createForClass('gwt.material.design.client', 'JQueryProvider', 517);
function $jQuery(this$static){
  !this$static.resources && (this$static.resources = new WithJQueryResources_default_InlineClientBundleGenerator);
  return $clinit_WithJQueryResources_default_InlineClientBundleGenerator$jQueryInitializer() , jQuery;
}

function JQueryProvider$JQueryCompressed(){
}

defineClass(202, 517, {}, JQueryProvider$JQueryCompressed);
var Lgwt_material_design_client_JQueryProvider$JQueryCompressed_2_classLit = createForClass('gwt.material.design.client', 'JQueryProvider/JQueryCompressed', 202);
function $clinit_MaterialDesignBase(){
  $clinit_MaterialDesignBase = emptyMethod;
  jQueryProvider = new JQueryProvider$JQueryCompressed;
}

function $load(){
  var text_0;
  isjQueryLoaded() || (text_0 = ($jQuery(jQueryProvider) , $getText()) + '' , $inject($setRemoveTag($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString(text_0)), TOP_WINDOW), true)));
  isjQueryLoaded();
  if (!(typeof $wnd['Materialize'] !== 'undefined')) {
    injectJs(($clinit_MaterialResources_default_InlineClientBundleGenerator$materializeJsInitializer() , materializeJs), true, false);
    injectJs(($clinit_MaterialResources_default_InlineClientBundleGenerator$animationJsInitializer() , animationJs), true, false);
    injectJs(($clinit_MaterialResources_default_InlineClientBundleGenerator$appInstallerJsInitializer() , appInstallerJs), true, false);
  }
  $onModuleLoaded();
}

function $onModuleLoaded(){
  var res, res$iterator;
  if (futureResources) {
    for (res$iterator = new ArrayList$1(futureResources); res$iterator.i < res$iterator.this$01.array.length;) {
      res = castTo($next_4(res$iterator), 115);
      injectJs(res.resource, res.removeTag, res.sourceUrl);
    }
  }
}

function injectJs(resource, removeTag, sourceUrl){
  var text_0, text0, text1;
  if (!$equals(resource.getName(), 'jQuery') && !$equals(resource.getName(), 'jQueryDebug') && (isjQueryLoaded() || (sourceUrl?(text0 = ($jQuery(jQueryProvider) , $getText()) + '//# sourceURL=jQuery.js' , $inject($setRemoveTag($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString(text0)), TOP_WINDOW), false))):(text1 = ($jQuery(jQueryProvider) , $getText()) + '' , $inject($setRemoveTag($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString(text1)), TOP_WINDOW), true)))) , !isjQueryLoaded())) {
    !futureResources && (futureResources = new ArrayList);
    $add_8(futureResources, new MaterialDesignBase$FutureResource(resource, removeTag, sourceUrl));
  }
   else {
    text_0 = resource.getText() + (sourceUrl?'//# sourceURL=' + resource.getName() + '.js':'');
    $inject($setRemoveTag($setWindow(($clinit_ScriptInjector() , new ScriptInjector$FromString(text_0)), TOP_WINDOW), removeTag));
  }
}

function isjQueryLoaded(){
  return typeof $wnd['jQuery'] !== 'undefined';
}

var futureResources, jQueryProvider;
function MaterialDesignBase$FutureResource(resource, removeTag, sourceUrl){
  this.resource = resource;
  this.removeTag = removeTag;
  this.sourceUrl = sourceUrl;
}

defineClass(115, 1, {115:1}, MaterialDesignBase$FutureResource);
_.removeTag = false;
_.sourceUrl = false;
var Lgwt_material_design_client_MaterialDesignBase$FutureResource_2_classLit = createForClass('gwt.material.design.client', 'MaterialDesignBase/FutureResource', 115);
function $add_6(this$static, child){
  $add(this$static, child, ($clinit_DOM() , this$static.element));
}

function $addClickHandler(this$static, handler){
  return $addDomHandler(this$static, new MaterialWidget$lambda$2$Type(this$static, handler), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

function $insert_2(this$static, child){
  $insert(this$static, child, ($clinit_DOM() , this$static.element));
}

function $lambda$2(this$static, handler_1){
  !$getElement((!this$static.enabledMixin && (this$static.enabledMixin = new EnabledMixin(this$static)) , this$static.enabledMixin).uiObject).hasAttribute('disabled') && $onLoginButtonClicked_0(handler_1.this$01);
}

function $onLoad_0(this$static){
  var initial, initial$array, initial$index, initial$max;
  if (this$static.initialClasses != null) {
    for (initial$array = this$static.initialClasses , initial$index = 0 , initial$max = initial$array.length; initial$index < initial$max; ++initial$index) {
      initial = initial$array[initial$index];
      if (initial.length != 0) {
        setStyleName(($clinit_DOM() , this$static.element), initial, false);
        setStyleName(this$static.element, initial, true);
      }
    }
  }
}

function $registerHandler(this$static, handler){
  return !this$static.handlerRegistry && (this$static.handlerRegistry = new DefaultHandlerRegistry(this$static)) , $registerHandler_0(this$static.handlerRegistry, handler);
}

function $setTextColor(this$static, textColor){
  $setTextColor_0((!this$static.colorsMixin && (this$static.colorsMixin = new ColorsMixin(this$static)) , this$static.colorsMixin), textColor);
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $setWaves(this$static, waves){
  $setWaves_0((!this$static.wavesMixin && (this$static.wavesMixin = new WavesMixin(this$static)) , this$static.wavesMixin), waves);
}

function MaterialWidget(element){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , element));
}

function MaterialWidget_0(element, initialClass){
  MaterialWidget.call(this, element);
  this.initialClasses = initialClass;
}

defineClass(44, 77, $intern_31, MaterialWidget);
_.setVisible = function setVisible_1(visible){
  $setVisible(this, visible);
}
;
_.getChildren = function getChildren_0(){
  return this.children_0;
}
;
_.isEnabled = function isEnabled(){
  return !$getElement((!this.enabledMixin && (this.enabledMixin = new EnabledMixin(this)) , this.enabledMixin).uiObject).hasAttribute('disabled');
}
;
_.onLoad = function onLoad_2(){
  $onLoad_0(this);
}
;
_.onUnload = function onUnload_1(){
  !this.handlerRegistry && (this.handlerRegistry = new DefaultHandlerRegistry(this));
  $clearHandlers(this.handlerRegistry);
}
;
var Lgwt_material_design_client_base_MaterialWidget_2_classLit = createForClass('gwt.material.design.client.base', 'MaterialWidget', 44);
function AbstractButton(){
  ComplexPanel.call(this);
  this.span_0 = new Span;
  $setElement(this, this.createElement_0());
  ($clinit_DOM() , this.element).style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
}

function AbstractButton_0(initialClass){
  AbstractButton.call(this);
  this.initialClasses = initialClass;
}

defineClass(104, 44, $intern_31);
var Lgwt_material_design_client_base_AbstractButton_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractButton', 104);
function $setIconPosition(this$static, position){
  $setIconPosition_0(this$static.icon, position);
}

function $setIconType(this$static, iconType){
  $setIconType_0(this$static.icon, iconType);
  !!this$static.icon && !this$static.icon.attached && $insert_2(this$static, this$static.icon);
}

function AbstractIconButton(type_0){
  AbstractButton.call(this);
  $setType((!this.typeMixin && (this.typeMixin = new CssTypeMixin(this)) , this.typeMixin), type_0);
  this.icon = new MaterialIcon;
  $setIconPosition(this, ($clinit_IconPosition() , LEFT_1));
}

defineClass(251, 104, $intern_31);
var Lgwt_material_design_client_base_AbstractIconButton_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractIconButton', 251);
function $addValidator(this$static, validator){
  $addValidator_0((!this$static.validatorMixin && (this$static.validatorMixin = new ValidatorMixin(this$static, (!this$static.errorHandlerMixin && (this$static.errorHandlerMixin = new ErrorHandlerMixin(this$static)) , this$static.errorHandlerMixin).errorHandler)) , this$static.validatorMixin), validator);
}

function $lambda$0(this$static, inputWidget_1){
  return $registerHandler(this$static, $addBlurHandler(inputWidget_1, new AbstractValueWidget$lambda$4$Type(this$static)));
}

function $lambda$1(this$static){
  return $validate(this$static, (!this$static.validatorMixin && (this$static.validatorMixin = new ValidatorMixin(this$static, (!this$static.errorHandlerMixin && (this$static.errorHandlerMixin = new ErrorHandlerMixin(this$static)) , this$static.errorHandlerMixin).errorHandler)) , this$static.validatorMixin).validateOnBlur);
}

function $lambda$4(this$static){
  return $validate(this$static, (!this$static.validatorMixin && (this$static.validatorMixin = new ValidatorMixin(this$static, (!this$static.errorHandlerMixin && (this$static.errorHandlerMixin = new ErrorHandlerMixin(this$static)) , this$static.errorHandlerMixin).errorHandler)) , this$static.validatorMixin).validateOnBlur);
}

function $setAllowBlank(this$static){
  var inputWidget;
  !this$static.blankValidator && (this$static.blankValidator = new BlankValidator);
  inputWidget = (!this$static.validatorMixin && (this$static.validatorMixin = new ValidatorMixin(this$static, (!this$static.errorHandlerMixin && (this$static.errorHandlerMixin = new ErrorHandlerMixin(this$static)) , this$static.errorHandlerMixin).errorHandler)) , this$static.validatorMixin).inputWidget;
  inputWidget.attached?$registerHandler(this$static, $addBlurHandler(inputWidget, new AbstractValueWidget$lambda$1$Type(this$static))):$registerHandler(this$static, $addHandler_0(inputWidget, new AbstractValueWidget$lambda$0$Type(this$static, inputWidget), (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1)));
  $addValidator(this$static, this$static.blankValidator);
}

function $validate(this$static, show){
  return $validate_0((!this$static.validatorMixin && (this$static.validatorMixin = new ValidatorMixin(this$static, (!this$static.errorHandlerMixin && (this$static.errorHandlerMixin = new ErrorHandlerMixin(this$static)) , this$static.errorHandlerMixin).errorHandler)) , this$static.validatorMixin), show);
}

function AbstractValueWidget(element, initialClass){
  MaterialWidget_0.call(this, element, initialClass);
}

defineClass(163, 44, $intern_31);
var Lgwt_material_design_client_base_AbstractValueWidget_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractValueWidget', 163);
function AbstractValueWidget$lambda$0$Type($$outer_0, inputWidget_1){
  this.$$outer_0 = $$outer_0;
  this.inputWidget_1 = inputWidget_1;
}

defineClass(124, 1, $intern_35, AbstractValueWidget$lambda$0$Type);
_.onAttachOrDetach = function onAttachOrDetach(arg0){
  $lambda$0(this.$$outer_0, this.inputWidget_1);
}
;
var Lgwt_material_design_client_base_AbstractValueWidget$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractValueWidget/lambda$0$Type', 124);
function AbstractValueWidget$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(125, 1, $intern_36, AbstractValueWidget$lambda$1$Type);
_.onBlur = function onBlur(arg0){
  $lambda$1(this.$$outer_0);
}
;
var Lgwt_material_design_client_base_AbstractValueWidget$lambda$1$Type_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractValueWidget/lambda$1$Type', 125);
function AbstractValueWidget$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(352, 1, $intern_36, AbstractValueWidget$lambda$4$Type);
_.onBlur = function onBlur_0(arg0){
  $lambda$4(this.$$outer_0);
}
;
var Lgwt_material_design_client_base_AbstractValueWidget$lambda$4$Type_2_classLit = createForClass('gwt.material.design.client.base', 'AbstractValueWidget/lambda$4$Type', 352);
function MaterialWidget$lambda$2$Type($$outer_0, handler_1){
  this.$$outer_0 = $$outer_0;
  this.handler_1 = handler_1;
}

defineClass(248, 1, $intern_34, MaterialWidget$lambda$2$Type);
_.onClick = function onClick_5(arg0){
  $lambda$2(this.$$outer_0, this.handler_1);
}
;
var Lgwt_material_design_client_base_MaterialWidget$lambda$2$Type_2_classLit = createForClass('gwt.material.design.client.base', 'MaterialWidget/lambda$2$Type', 248);
function detectAndApply(widget){
  widget.attached?$wnd.Waves.displayEffect():$addHandler_0(widget, new Waves$lambda$0$Type, (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1));
}

function Waves$lambda$0$Type(){
}

defineClass(369, 1, $intern_35, Waves$lambda$0$Type);
_.onAttachOrDetach = function onAttachOrDetach_0(arg0){
  arg0.attached && $wnd.Waves.displayEffect();
}
;
var Lgwt_material_design_client_base_Waves$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.base', 'Waves/lambda$0$Type', 369);
function BasicEditorError(message){
  this.message_0 = message;
}

defineClass(131, 1, {546:1, 131:1}, BasicEditorError);
_.message_0 = null;
var Lgwt_material_design_client_base_error_BasicEditorError_2_classLit = createForClass('gwt.material.design.client.base.error', 'BasicEditorError', 131);
function $clearErrors(this$static){
  !!this$static.inputWidget && $clearStatusText_0(this$static.inputWidget);
}

function $findHelpBlock(this$static, widget){
  var w$iterator;
  if (widget) {
    if (instanceOf(widget, 23)) {
      for (w$iterator = castTo(widget, 23).iterator(); w$iterator.hasNext_0();) {
        castTo(w$iterator.next_1(), 9);
      }
    }
    return $findHelpBlock(this$static, widget.parent_0);
  }
  return null;
}

function $init(this$static){
  var parent_0;
  if (this$static.initialized) {
    return;
  }
  parent_0 = this$static.inputWidget.parent_0;
  while (!!parent_0 && !$equals($getName(parent_0.___clazz), 'com.google.gwt.user.client.ui.Widget')) {
    $findHelpBlock(this$static, this$static.inputWidget);
    parent_0 = parent_0.parent_0;
  }
  this$static.initialized = true;
}

function $lambda$0_0(this$static, event_0){
  event_0.attached && $init(this$static);
}

function $showErrors(this$static, errors){
  var errorMsg, index_0;
  $init(this$static);
  errorMsg = '';
  for (index_0 = 0; index_0 < errors.array.length; index_0++) {
    errorMsg = (checkCriticalElementIndex(0, errors.array.length) , castTo(castTo(errors.array[0], 546), 131)).message_0;
    index_0 + 1 < errors.array.length && (errorMsg += '; ');
  }
  !!this$static.inputWidget && $setErrorText_0(this$static.inputWidget, errorMsg);
}

function DefaultErrorHandler(widget){
  this.inputWidget = widget;
  $addHandler_0(this.inputWidget, new DefaultErrorHandler$lambda$0$Type(this), (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1));
}

defineClass(381, 1, {}, DefaultErrorHandler);
_.initialized = false;
var Lgwt_material_design_client_base_error_DefaultErrorHandler_2_classLit = createForClass('gwt.material.design.client.base.error', 'DefaultErrorHandler', 381);
function DefaultErrorHandler$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(382, 1, $intern_35, DefaultErrorHandler$lambda$0$Type);
_.onAttachOrDetach = function onAttachOrDetach_1(arg0){
  $lambda$0_0(this.$$outer_0, arg0);
}
;
var Lgwt_material_design_client_base_error_DefaultErrorHandler$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.base.error', 'DefaultErrorHandler/lambda$0$Type', 382);
function $setUiObject(this$static, uiObject){
  this$static.uiObject = uiObject;
}

function AbstractMixin(uiObject){
  this.setUiObject(uiObject);
}

defineClass(59, 1, {});
_.setUiObject = function setUiObject(uiObject){
  $setUiObject(this, uiObject);
}
;
var Lgwt_material_design_client_base_mixin_AbstractMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'AbstractMixin', 59);
function $ensureTextColorFormat(textColor){
  var formatted, mainColor, style, style$array, style$index, style$max, suffixlength;
  formatted = '';
  mainColor = true;
  for (style$array = $split(textColor, ' ', 0) , style$index = 0 , style$max = style$array.length; style$index < style$max; ++style$index) {
    style = style$array[style$index];
    if (mainColor) {
      suffixlength = '-text'.length;
      $equals(style.substr(style.length - suffixlength, suffixlength), '-text') || (style += '-text');
      mainColor = false;
    }
     else {
      $equals(style.substr(0, 5), 'text-') || (style = ' text-' + style);
    }
    formatted += style;
  }
  return formatted;
}

function $setTextColor_0(this$static, textColor){
  !!this$static.textColor && $removeStyleName(this$static.uiObject, $ensureTextColorFormat(this$static.textColor.cssClass));
  this$static.textColor = textColor;
  !!this$static.textColor && $addStyleName(this$static.uiObject, $ensureTextColorFormat(textColor.cssClass));
}

function ColorsMixin(widget){
  AbstractMixin.call(this, widget);
}

defineClass(366, 59, {}, ColorsMixin);
var Lgwt_material_design_client_base_mixin_ColorsMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'ColorsMixin', 366);
function $setStyle(this$static, style){
  this$static.style_0 != null && this$static.style_0.length != 0 && $removeStyleName(this$static.uiObject, this$static.style_0);
  this$static.style_0 = style;
  style != null && style.length != 0 && $addStyleName(this$static.uiObject, style);
}

defineClass(379, 59, {});
var Lgwt_material_design_client_base_mixin_StyleMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'StyleMixin', 379);
function CssNameMixin(widget){
  this.setUiObject(widget);
}

defineClass(173, 379, {}, CssNameMixin);
var Lgwt_material_design_client_base_mixin_CssNameMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'CssNameMixin', 173);
function $setType(this$static, type_0){
  !!this$static.type_0 && this$static.type_0.getCssName().length != 0 && (this$static.target_0?$removeStyleName(this$static.target_0, this$static.type_0.getCssName()):$removeStyleName(this$static.uiObject, this$static.type_0.getCssName()));
  this$static.type_0 = type_0;
  !!type_0 && type_0.getCssName().length != 0 && (this$static.target_0?$addStyleName(this$static.target_0, type_0.getCssName()):$addStyleName(this$static.uiObject, type_0.getCssName()));
}

function CssTypeMixin(widget){
  AbstractMixin.call(this, widget);
}

function CssTypeMixin_0(widget, target){
  AbstractMixin.call(this, widget);
  this.target_0 = target;
}

defineClass(172, 59, {}, CssTypeMixin, CssTypeMixin_0);
var Lgwt_material_design_client_base_mixin_CssTypeMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'CssTypeMixin', 172);
function EnabledMixin(widget){
  AbstractMixin.call(this, widget);
}

defineClass(171, 59, {}, EnabledMixin);
_.setUiObject = function setUiObject_0(uiObject){
  this.uiObject = uiObject;
}
;
var Lgwt_material_design_client_base_mixin_EnabledMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'EnabledMixin', 171);
function ErrorHandlerMixin(widget){
  this.inputWidget = widget;
  this.errorHandler = new DefaultErrorHandler(this.inputWidget);
}

defineClass(60, 1, {}, ErrorHandlerMixin);
_.inputWidget = null;
var Lgwt_material_design_client_base_mixin_ErrorHandlerMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'ErrorHandlerMixin', 60);
function FocusableMixin(uiObject){
  AbstractMixin.call(this, uiObject);
}

defineClass(368, 59, {}, FocusableMixin);
var Lgwt_material_design_client_base_mixin_FocusableMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'FocusableMixin', 368);
function $clearErrorText(this$static){
  if (this$static.textObject) {
    $setText_0(this$static.textObject, '');
    $setVisible(this$static.textObject, false);
    $removeStyleName(this$static.textObject, 'field-error-label');
  }
  !!this$static.target_0 && $removeStyleName(this$static.target_0, 'field-error');
  !!this$static.lblPlaceholder && $removeStyleName(this$static.lblPlaceholder, 'red-text');
}

function $clearHelperText(this$static){
  if (this$static.textObject) {
    $setText_0(this$static.textObject, '');
    $setVisible(this$static.textObject, false);
    $removeStyleName(this$static.textObject, 'field-helper-label');
  }
}

function $clearStatusText(this$static){
  $clearErrorText(this$static);
  $clearSuccessText(this$static);
}

function $clearSuccessText(this$static){
  if (this$static.textObject) {
    $setText_0(this$static.textObject, '');
    $setVisible(this$static.textObject, false);
    $removeStyleName(this$static.textObject, 'field-success-label');
  }
  !!this$static.target_0 && $removeStyleName(this$static.target_0, 'field-success');
  !!this$static.lblPlaceholder && $removeStyleName(this$static.lblPlaceholder, 'green-text');
}

function $setErrorText(this$static, errorText){
  $clearSuccessText(this$static);
  $clearHelperText(this$static);
  if (this$static.textObject) {
    $setVisible(this$static.textObject, true);
    $setText_0(this$static.textObject, errorText);
    $addStyleName(this$static.textObject, 'field-error-label');
  }
  !!this$static.target_0 && $addStyleName(this$static.target_0, 'field-error');
  if (this$static.lblPlaceholder) {
    $addStyleName(this$static.lblPlaceholder, 'red-text');
    errorText != null && errorText.length != 0 && $addStyleName(this$static.lblPlaceholder, 'active');
  }
}

function StatusTextMixin(widget, textObject, target, lblPlaceholder){
  this.setUiObject(widget);
  this.textObject = textObject;
  this.target_0 = target;
  this.lblPlaceholder = lblPlaceholder;
}

defineClass(127, 59, {}, StatusTextMixin);
var Lgwt_material_design_client_base_mixin_StatusTextMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'StatusTextMixin', 127);
function $setText(this$static, text_0){
  $setInnerText($getElement(this$static.uiObject), text_0);
}

function TextMixin(uiObject){
  AbstractMixin.call(this, uiObject);
}

defineClass(170, 59, {}, TextMixin);
var Lgwt_material_design_client_base_mixin_TextMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'TextMixin', 170);
function $addValidator_0(this$static, validator){
  $add_11(this$static.validators, new ValidatorWrapper(validator, this$static.validators.map_0.size_0));
}

function $validate_0(this$static, show){
  var entry, entryIterator, errors, oldValid, result, validator, wrapper, wrapper$iterator;
  oldValid = this$static.valid;
  this$static.valid = ($clinit_Boolean() , $clinit_Boolean() , true);
  if (!!this$static.errorHandler && this$static.validators.map_0.size_0 != 0) {
    errors = new ArrayList;
    for (wrapper$iterator = (entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet((new AbstractNavigableMap$NavigableKeySet(this$static.validators.map_0)).map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator)); $hasNext(wrapper$iterator.val$entryIterator2.iter);) {
      wrapper = (entry = $next_5(wrapper$iterator.val$entryIterator2) , castTo(entry.getKey(), 95));
      validator = wrapper.validator;
      result = $validate_1(validator, $getValue_0(this$static.inputWidget));
      if (result.array.length != 0) {
        $addAll_0(errors, result);
        this$static.valid = (null , false);
      }
    }
    show && (errors.array.length > 0?$showErrors(this$static.errorHandler, errors):$clearErrors(this$static.errorHandler));
  }
  this$static.valid != oldValid && $castFireEvent(this$static.eventBus, new ValidationChangedEvent(checkNotNull(this$static.valid)));
  return checkNotNull(this$static.valid);
}

function ValidatorMixin(inputWidget, errorHandler){
  this.validators = new TreeSet;
  this.inputWidget = inputWidget;
  this.errorHandler = errorHandler;
  this.eventBus = new SimpleEventBus_1;
  $addHandler_0(this.inputWidget, new ValidatorMixin$lambda$0$Type(this), (!TYPE_3 && (TYPE_3 = new GwtEvent$Type) , TYPE_3));
}

defineClass(58, 1, $intern_11, ValidatorMixin);
_.valid = null;
_.validateOnBlur = false;
var Lgwt_material_design_client_base_mixin_ValidatorMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'ValidatorMixin', 58);
function ValidatorMixin$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(362, 1, {545:1, 31:1}, ValidatorMixin$lambda$0$Type);
var Lgwt_material_design_client_base_mixin_ValidatorMixin$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'ValidatorMixin/lambda$0$Type', 362);
function $setWaves_0(this$static, waves){
  var enabled;
  $removeStyleName(this$static.uiObject, 'waves-effect');
  !!this$static.waves && $removeStyleName(this$static.uiObject, this$static.waves.cssClass);
  this$static.waves = waves;
  if (waves) {
    enabled = !this$static.uiObject || this$static.uiObject.isEnabled();
    enabled && $addStyleName(this$static.uiObject, 'waves-effect');
    $addStyleName(this$static.uiObject, waves.cssClass);
    enabled && detectAndApply(this$static.uiObject);
  }
}

function WavesMixin(widget){
  AbstractMixin.call(this, widget);
}

defineClass(364, 59, {}, WavesMixin);
_.setUiObject = function setUiObject_1(uiObject){
  this.uiObject = uiObject;
  $setWaves_0(this, this.waves);
}
;
var Lgwt_material_design_client_base_mixin_WavesMixin_2_classLit = createForClass('gwt.material.design.client.base.mixin', 'WavesMixin', 364);
function $getInvalidMessage(this$static, key){
  return $lookup_0(this$static.messageMixin, key, this$static.messageValueArgs);
}

function $validate_1(this$static, value_0){
  var result;
  result = new ArrayList;
  value_0 != null && !$equals('', value_0) || $add_8(result, new BasicEditorError($getInvalidMessage(this$static, this$static.messageKey)));
  return result;
}

function AbstractValidator(messageValueArgs){
  this.messageMixin = new DefaultValidatorMessageMixin;
  this.messageKey = 'gwt.material.design.validation.Blank.message';
  this.messageValueArgs = messageValueArgs;
}

defineClass(361, 1, {});
var Lgwt_material_design_client_base_validator_AbstractValidator_2_classLit = createForClass('gwt.material.design.client.base.validator', 'AbstractValidator', 361);
function $isValid(value_0){
  return value_0 != null && !$equals('', value_0);
}

function BlankValidator(){
  AbstractValidator.call(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1));
}

defineClass(168, 361, {}, BlankValidator);
var Lgwt_material_design_client_base_validator_BlankValidator_2_classLit = createForClass('gwt.material.design.client.base.validator', 'BlankValidator', 168);
function $lookup(this$static, key){
  try {
    return key == null?null:$getString(this$static.messages, $replaceAll(key, '\\.', '_'));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 133)) {
      return null;
    }
     else 
      throw toJs($e0);
  }
}

function $lookup_0(this$static, key, msgValues){
  var msg;
  msg = $lookup(this$static, key);
  msg != null && (msg = format(msg, msgValues));
  return msg;
}

function DefaultValidatorMessageMixin(){
  this.messages = new ValidationMessages_en;
}

defineClass(380, 1, {}, DefaultValidatorMessageMixin);
var Lgwt_material_design_client_base_validator_DefaultValidatorMessageMixin_2_classLit = createForClass('gwt.material.design.client.base.validator', 'DefaultValidatorMessageMixin', 380);
function format(pattern, arguments_0){
  var index_0, msg;
  msg = pattern;
  if (arguments_0 != null) {
    for (index_0 = 0; index_0 < arguments_0.length; index_0++) {
      msg = $replaceAll(msg, '\\{' + (index_0 + 1) + '\\}', arguments_0[index_0] == null?'null':toString_6(arguments_0[index_0]));
    }
  }
  return msg;
}

function $clinit_ValidationChangedEvent(){
  $clinit_ValidationChangedEvent = emptyMethod;
  TYPE_9 = new GwtEvent$Type;
}

function ValidationChangedEvent(valid){
  $clinit_ValidationChangedEvent();
  this.valid = valid;
}

defineClass(126, 524, {126:1}, ValidationChangedEvent);
_.dispatch = function dispatch_9(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.equals_0 = function equals_7(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lgwt_material_design_client_base_validator_ValidationChangedEvent_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 126);
  return this.valid == other.valid;
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.hashCode_0 = function hashCode_9(){
  var hashCode;
  hashCode = 851 + (checkNotNull(($clinit_Boolean() , this.valid?true:false))?1231:1237);
  return hashCode;
}
;
_.toString_0 = function toString_12(){
  return 'ValidationChangedEvent[' + this.valid + ']';
}
;
_.valid = false;
var TYPE_9;
var Lgwt_material_design_client_base_validator_ValidationChangedEvent_2_classLit = createForClass('gwt.material.design.client.base.validator', 'ValidationChangedEvent', 126);
function $getString(this$static, arg0){
  var target;
  target = castToString($getStringValue(this$static.cache, arg0));
  if (target != null) {
    return target;
  }
  if ($equals(arg0, 'gwt_material_design_validation_Blank_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_Blank_message', 'Field cannot be blank');
    return 'Field cannot be blank';
  }
  if ($equals(arg0, 'gwt_material_design_validation_DecimalMax_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_DecimalMax_message', 'Value must be less than or equal to {1}');
    return 'Value must be less than or equal to {1}';
  }
  if ($equals(arg0, 'gwt_material_design_validation_DecimalMin_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_DecimalMin_message', 'Value must be greater than or equal to {1}');
    return 'Value must be greater than or equal to {1}';
  }
  if ($equals(arg0, 'gwt_material_design_validation_FieldMatch_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_FieldMatch_message', '{1} do not match');
    return '{1} do not match';
  }
  if ($equals(arg0, 'gwt_material_design_validation_Future_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_Future_message', 'Value must be in the future');
    return 'Value must be in the future';
  }
  if ($equals(arg0, 'gwt_material_design_validation_Past_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_Past_message', 'Value must be in the past');
    return 'Value must be in the past';
  }
  if ($equals(arg0, 'gwt_material_design_validation_RegEx_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_RegEx_message', 'Must match regex');
    return 'Must match regex';
  }
  if ($equals(arg0, 'gwt_material_design_validation_Size_message')) {
    $putStringValue(this$static.cache, 'gwt_material_design_validation_Size_message', 'Size must be between {1} and {2}');
    return 'Size must be between {1} and {2}';
  }
  throw toJs(new MissingResourceException("Cannot find constant '" + arg0 + "'; expecting a method name"));
}

function ValidationMessages_en(){
  this.cache = new HashMap;
}

defineClass(390, 1, {}, ValidationMessages_en);
var Lgwt_material_design_client_base_validator_ValidationMessages_1en_2_classLit = createForClass('gwt.material.design.client.base.validator', 'ValidationMessages_en', 390);
function $compareTo_0(this$static, other){
  var result;
  if (this$static == other || $equals(this$static.name_0, other.name_0)) {
    return 0;
  }
  result = $compareTo_3(this$static.priority, other.priority);
  result == 0 && (result = $compareTo_3(this$static.insertionOrder, other.insertionOrder));
  return result;
}

function ValidatorWrapper(validator, insertionOrder){
  this.validator = validator;
  this.insertionOrder = valueOf(insertionOrder);
  this.name_0 = ($ensureNamesAreInitialized(Lgwt_material_design_client_base_validator_BlankValidator_2_classLit) , Lgwt_material_design_client_base_validator_BlankValidator_2_classLit.typeName);
  this.priority = valueOf(100);
}

defineClass(95, 1, {95:1, 7:1}, ValidatorWrapper);
_.compareTo = function compareTo_0(other){
  return $compareTo_0(this, castTo(other, 95));
}
;
_.equals_0 = function equals_8(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lgwt_material_design_client_base_validator_ValidatorWrapper_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 95);
  if (this.name_0 == null) {
    if (other.name_0 != null)
      return false;
  }
   else if (!$equals(this.name_0, other.name_0))
    return false;
  return true;
}
;
_.hashCode_0 = function hashCode_10(){
  var result;
  result = 31 + (this.name_0 == null?0:getHashCode_0(this.name_0));
  return result;
}
;
var Lgwt_material_design_client_base_validator_ValidatorWrapper_2_classLit = createForClass('gwt.material.design.client.base.validator', 'ValidatorWrapper', 95);
function $clinit_ButtonType(){
  $clinit_ButtonType = emptyMethod;
  LINK = new ButtonType('LINK', 0, '');
  RAISED = new ButtonType('RAISED', 1, 'btn');
  FLAT = new ButtonType('FLAT', 2, 'btn-flat');
  OUTLINED = new ButtonType('OUTLINED', 3, 'btn btn-outlined');
  FLOATING = new ButtonType('FLOATING', 4, 'btn-floating');
}

function ButtonType(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_13(){
  $clinit_ButtonType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_ButtonType_2_classLit, 1), $intern_2, 72, 0, [LINK, RAISED, FLAT, OUTLINED, FLOATING]);
}

defineClass(72, 6, {8:1, 72:1, 192:1, 101:1, 5:1, 7:1, 6:1}, ButtonType);
_.getCssName = function getCssName_57(){
  return this.cssClass;
}
;
var FLAT, FLOATING, LINK, OUTLINED, RAISED;
var Lgwt_material_design_client_constants_ButtonType_2_classLit = createForEnum('gwt.material.design.client.constants', 'ButtonType', 72, values_13);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  DEFAULT_2 = new Color('DEFAULT', 0, '');
  BLACK = new Color('BLACK', 1, 'black');
  WHITE = new Color('WHITE', 2, 'white');
  TRANSPARENT = new Color('TRANSPARENT', 3, 'transparent');
  BLUE_GREY_LIGHTEN_5 = new Color('BLUE_GREY_LIGHTEN_5', 4, 'blue-grey lighten-5');
  BLUE_GREY_LIGHTEN_4 = new Color('BLUE_GREY_LIGHTEN_4', 5, 'blue-grey lighten-4');
  BLUE_GREY_LIGHTEN_3 = new Color('BLUE_GREY_LIGHTEN_3', 6, 'blue-grey lighten-3');
  BLUE_GREY_LIGHTEN_2 = new Color('BLUE_GREY_LIGHTEN_2', 7, 'blue-grey lighten-2');
  BLUE_GREY_LIGHTEN_1 = new Color('BLUE_GREY_LIGHTEN_1', 8, 'blue-grey lighten-1');
  BLUE_GREY = new Color('BLUE_GREY', 9, 'blue-grey');
  BLUE_GREY_DARKEN_1 = new Color('BLUE_GREY_DARKEN_1', 10, 'blue-grey darken-1');
  BLUE_GREY_DARKEN_2 = new Color('BLUE_GREY_DARKEN_2', 11, 'blue-grey darken-2');
  BLUE_GREY_DARKEN_3 = new Color('BLUE_GREY_DARKEN_3', 12, 'blue-grey darken-3');
  BLUE_GREY_DARKEN_4 = new Color('BLUE_GREY_DARKEN_4', 13, 'blue-grey darken-4');
  GREY_LIGHTEN_5 = new Color('GREY_LIGHTEN_5', 14, 'grey lighten-5');
  GREY_LIGHTEN_4 = new Color('GREY_LIGHTEN_4', 15, 'grey lighten-4');
  GREY_LIGHTEN_3 = new Color('GREY_LIGHTEN_3', 16, 'grey lighten-3');
  GREY_LIGHTEN_2 = new Color('GREY_LIGHTEN_2', 17, 'grey lighten-2');
  GREY_LIGHTEN_1 = new Color('GREY_LIGHTEN_1', 18, 'grey lighten-1');
  GREY = new Color('GREY', 19, 'grey');
  GREY_DARKEN_1 = new Color('GREY_DARKEN_1', 20, 'grey darken-1');
  GREY_DARKEN_2 = new Color('GREY_DARKEN_2', 21, 'grey darken-2');
  GREY_DARKEN_3 = new Color('GREY_DARKEN_3', 22, 'grey darken-3');
  GREY_DARKEN_4 = new Color('GREY_DARKEN_4', 23, 'grey darken-4');
  BROWN_LIGHTEN_5 = new Color('BROWN_LIGHTEN_5', 24, 'brown lighten-5');
  BROWN_LIGHTEN_4 = new Color('BROWN_LIGHTEN_4', 25, 'brown lighten-4');
  BROWN_LIGHTEN_3 = new Color('BROWN_LIGHTEN_3', 26, 'brown lighten-3');
  BROWN_LIGHTEN_2 = new Color('BROWN_LIGHTEN_2', 27, 'brown lighten-2');
  BROWN_LIGHTEN_1 = new Color('BROWN_LIGHTEN_1', 28, 'brown lighten-1');
  BROWN = new Color('BROWN', 29, 'brown');
  BROWN_DARKEN_1 = new Color('BROWN_DARKEN_1', 30, 'brown darken-1');
  BROWN_DARKEN_2 = new Color('BROWN_DARKEN_2', 31, 'brown darken-2');
  BROWN_DARKEN_3 = new Color('BROWN_DARKEN_3', 32, 'brown darken-3');
  BROWN_DARKEN_4 = new Color('BROWN_DARKEN_4', 33, 'brown darken-4');
  DEEP_ORANGE_LIGHTEN_5 = new Color('DEEP_ORANGE_LIGHTEN_5', 34, 'deep-orange lighten-5');
  DEEP_ORANGE_LIGHTEN_4 = new Color('DEEP_ORANGE_LIGHTEN_4', 35, 'deep-orange lighten-4');
  DEEP_ORANGE_LIGHTEN_3 = new Color('DEEP_ORANGE_LIGHTEN_3', 36, 'deep-orange lighten-3');
  DEEP_ORANGE_LIGHTEN_2 = new Color('DEEP_ORANGE_LIGHTEN_2', 37, 'deep-orange lighten-2');
  DEEP_ORANGE_LIGHTEN_1 = new Color('DEEP_ORANGE_LIGHTEN_1', 38, 'deep-orange lighten-1');
  DEEP_ORANGE = new Color('DEEP_ORANGE', 39, 'deep-orange');
  DEEP_ORANGE_DARKEN_1 = new Color('DEEP_ORANGE_DARKEN_1', 40, 'deep-orange darken-1');
  DEEP_ORANGE_DARKEN_2 = new Color('DEEP_ORANGE_DARKEN_2', 41, 'deep-orange darken-2');
  DEEP_ORANGE_DARKEN_3 = new Color('DEEP_ORANGE_DARKEN_3', 42, 'deep-orange darken-3');
  DEEP_ORANGE_DARKEN_4 = new Color('DEEP_ORANGE_DARKEN_4', 43, 'deep-orange darken-4');
  DEEP_ORANGE_ACCENT_1 = new Color('DEEP_ORANGE_ACCENT_1', 44, 'deep-orange accent-1');
  DEEP_ORANGE_ACCENT_2 = new Color('DEEP_ORANGE_ACCENT_2', 45, 'deep-orange accent-2');
  DEEP_ORANGE_ACCENT_3 = new Color('DEEP_ORANGE_ACCENT_3', 46, 'deep-orange accent-3');
  DEEP_ORANGE_ACCENT_4 = new Color('DEEP_ORANGE_ACCENT_4', 47, 'deep-orange accent-4');
  ORANGE_LIGHTEN_5 = new Color('ORANGE_LIGHTEN_5', 48, 'orange lighten-5');
  ORANGE_LIGHTEN_4 = new Color('ORANGE_LIGHTEN_4', 49, 'orange lighten-4');
  ORANGE_LIGHTEN_3 = new Color('ORANGE_LIGHTEN_3', 50, 'orange lighten-3');
  ORANGE_LIGHTEN_2 = new Color('ORANGE_LIGHTEN_2', 51, 'orange lighten-2');
  ORANGE_LIGHTEN_1 = new Color('ORANGE_LIGHTEN_1', 52, 'orange lighten-1');
  ORANGE = new Color('ORANGE', 53, 'orange');
  ORANGE_DARKEN_1 = new Color('ORANGE_DARKEN_1', 54, 'orange darken-1');
  ORANGE_DARKEN_2 = new Color('ORANGE_DARKEN_2', 55, 'orange darken-2');
  ORANGE_DARKEN_3 = new Color('ORANGE_DARKEN_3', 56, 'orange darken-3');
  ORANGE_DARKEN_4 = new Color('ORANGE_DARKEN_4', 57, 'orange darken-4');
  ORANGE_ACCENT_1 = new Color('ORANGE_ACCENT_1', 58, 'orange accent-1');
  ORANGE_ACCENT_2 = new Color('ORANGE_ACCENT_2', 59, 'orange accent-2');
  ORANGE_ACCENT_3 = new Color('ORANGE_ACCENT_3', 60, 'orange accent-3');
  ORANGE_ACCENT_4 = new Color('ORANGE_ACCENT_4', 61, 'orange accent-4');
  AMBER_LIGHTEN_5 = new Color('AMBER_LIGHTEN_5', 62, 'amber lighten-5');
  AMBER_LIGHTEN_4 = new Color('AMBER_LIGHTEN_4', 63, 'amber lighten-4');
  AMBER_LIGHTEN_3 = new Color('AMBER_LIGHTEN_3', 64, 'amber lighten-3');
  AMBER_LIGHTEN_2 = new Color('AMBER_LIGHTEN_2', 65, 'amber lighten-2');
  AMBER_LIGHTEN_1 = new Color('AMBER_LIGHTEN_1', 66, 'amber lighten-1');
  AMBER = new Color('AMBER', 67, 'amber');
  AMBER_DARKEN_1 = new Color('AMBER_DARKEN_1', 68, 'amber darken-1');
  AMBER_DARKEN_2 = new Color('AMBER_DARKEN_2', 69, 'amber darken-2');
  AMBER_DARKEN_3 = new Color('AMBER_DARKEN_3', 70, 'amber darken-3');
  AMBER_DARKEN_4 = new Color('AMBER_DARKEN_4', 71, 'amber darken-4');
  AMBER_ACCENT_1 = new Color('AMBER_ACCENT_1', 72, 'amber accent-1');
  AMBER_ACCENT_2 = new Color('AMBER_ACCENT_2', 73, 'amber accent-2');
  AMBER_ACCENT_3 = new Color('AMBER_ACCENT_3', 74, 'amber accent-3');
  AMBER_ACCENT_4 = new Color('AMBER_ACCENT_4', 75, 'amber accent-4');
  YELLOW_LIGHTEN_5 = new Color('YELLOW_LIGHTEN_5', 76, 'yellow lighten-5');
  YELLOW_LIGHTEN_4 = new Color('YELLOW_LIGHTEN_4', 77, 'yellow lighten-4');
  YELLOW_LIGHTEN_3 = new Color('YELLOW_LIGHTEN_3', 78, 'yellow lighten-3');
  YELLOW_LIGHTEN_2 = new Color('YELLOW_LIGHTEN_2', 79, 'yellow lighten-2');
  YELLOW_LIGHTEN_1 = new Color('YELLOW_LIGHTEN_1', 80, 'yellow lighten-1');
  YELLOW = new Color('YELLOW', 81, 'yellow');
  YELLOW_DARKEN_1 = new Color('YELLOW_DARKEN_1', 82, 'yellow darken-1');
  YELLOW_DARKEN_2 = new Color('YELLOW_DARKEN_2', 83, 'yellow darken-2');
  YELLOW_DARKEN_3 = new Color('YELLOW_DARKEN_3', 84, 'yellow darken-3');
  YELLOW_DARKEN_4 = new Color('YELLOW_DARKEN_4', 85, 'yellow darken-4');
  YELLOW_ACCENT_1 = new Color('YELLOW_ACCENT_1', 86, 'yellow accent-1');
  YELLOW_ACCENT_2 = new Color('YELLOW_ACCENT_2', 87, 'yellow accent-2');
  YELLOW_ACCENT_3 = new Color('YELLOW_ACCENT_3', 88, 'yellow accent-3');
  YELLOW_ACCENT_4 = new Color('YELLOW_ACCENT_4', 89, 'yellow accent-4');
  LIME_LIGHTEN_5 = new Color('LIME_LIGHTEN_5', 90, 'lime lighten-5');
  LIME_LIGHTEN_4 = new Color('LIME_LIGHTEN_4', 91, 'lime lighten-4');
  LIME_LIGHTEN_3 = new Color('LIME_LIGHTEN_3', 92, 'lime lighten-3');
  LIME_LIGHTEN_2 = new Color('LIME_LIGHTEN_2', 93, 'lime lighten-2');
  LIME_LIGHTEN_1 = new Color('LIME_LIGHTEN_1', 94, 'lime lighten-1');
  LIME = new Color('LIME', 95, 'lime');
  LIME_DARKEN_1 = new Color('LIME_DARKEN_1', 96, 'lime darken-1');
  LIME_DARKEN_2 = new Color('LIME_DARKEN_2', 97, 'lime darken-2');
  LIME_DARKEN_3 = new Color('LIME_DARKEN_3', 98, 'lime darken-3');
  LIME_DARKEN_4 = new Color('LIME_DARKEN_4', 99, 'lime darken-4');
  LIME_ACCENT_1 = new Color('LIME_ACCENT_1', 100, 'lime accent-1');
  LIME_ACCENT_2 = new Color('LIME_ACCENT_2', 101, 'lime accent-2');
  LIME_ACCENT_3 = new Color('LIME_ACCENT_3', 102, 'lime accent-3');
  LIME_ACCENT_4 = new Color('LIME_ACCENT_4', 103, 'lime accent-4');
  LIGHT_GREEN_LIGHTEN_5 = new Color('LIGHT_GREEN_LIGHTEN_5', 104, 'light-green lighten-5');
  LIGHT_GREEN_LIGHTEN_4 = new Color('LIGHT_GREEN_LIGHTEN_4', 105, 'light-green lighten-4');
  LIGHT_GREEN_LIGHTEN_3 = new Color('LIGHT_GREEN_LIGHTEN_3', 106, 'light-green lighten-3');
  LIGHT_GREEN_LIGHTEN_2 = new Color('LIGHT_GREEN_LIGHTEN_2', 107, 'light-green lighten-2');
  LIGHT_GREEN_LIGHTEN_1 = new Color('LIGHT_GREEN_LIGHTEN_1', 108, 'light-green lighten-1');
  LIGHT_GREEN = new Color('LIGHT_GREEN', 109, 'light-green');
  LIGHT_GREEN_DARKEN_1 = new Color('LIGHT_GREEN_DARKEN_1', 110, 'light-green darken-1');
  LIGHT_GREEN_DARKEN_2 = new Color('LIGHT_GREEN_DARKEN_2', 111, 'light-green darken-2');
  LIGHT_GREEN_DARKEN_3 = new Color('LIGHT_GREEN_DARKEN_3', 112, 'light-green darken-3');
  LIGHT_GREEN_DARKEN_4 = new Color('LIGHT_GREEN_DARKEN_4', 113, 'light-green darken-4');
  LIGHT_GREEN_ACCENT_1 = new Color('LIGHT_GREEN_ACCENT_1', 114, 'light-green accent-1');
  LIGHT_GREEN_ACCENT_2 = new Color('LIGHT_GREEN_ACCENT_2', 115, 'light-green accent-2');
  LIGHT_GREEN_ACCENT_3 = new Color('LIGHT_GREEN_ACCENT_3', 116, 'light-green accent-3');
  LIGHT_GREEN_ACCENT_4 = new Color('LIGHT_GREEN_ACCENT_4', 117, 'light-green accent-4');
  GREEN_LIGHTEN_5 = new Color('GREEN_LIGHTEN_5', 118, 'green lighten-5');
  GREEN_LIGHTEN_4 = new Color('GREEN_LIGHTEN_4', 119, 'green lighten-4');
  GREEN_LIGHTEN_3 = new Color('GREEN_LIGHTEN_3', 120, 'green lighten-3');
  GREEN_LIGHTEN_2 = new Color('GREEN_LIGHTEN_2', 121, 'green lighten-2');
  GREEN_LIGHTEN_1 = new Color('GREEN_LIGHTEN_1', 122, 'green lighten-1');
  GREEN = new Color('GREEN', 123, 'green');
  GREEN_DARKEN_1 = new Color('GREEN_DARKEN_1', 124, 'green darken-1');
  GREEN_DARKEN_2 = new Color('GREEN_DARKEN_2', 125, 'green darken-2');
  GREEN_DARKEN_3 = new Color('GREEN_DARKEN_3', 126, 'green darken-3');
  GREEN_DARKEN_4 = new Color('GREEN_DARKEN_4', 127, 'green darken-4');
  GREEN_ACCENT_1 = new Color('GREEN_ACCENT_1', 128, 'green accent-1');
  GREEN_ACCENT_2 = new Color('GREEN_ACCENT_2', 129, 'green accent-2');
  GREEN_ACCENT_3 = new Color('GREEN_ACCENT_3', 130, 'green accent-3');
  GREEN_ACCENT_4 = new Color('GREEN_ACCENT_4', 131, 'green accent-4');
  TEAL_LIGHTEN_5 = new Color('TEAL_LIGHTEN_5', 132, 'teal lighten-5');
  TEAL_LIGHTEN_4 = new Color('TEAL_LIGHTEN_4', 133, 'teal lighten-4');
  TEAL_LIGHTEN_3 = new Color('TEAL_LIGHTEN_3', 134, 'teal lighten-3');
  TEAL_LIGHTEN_2 = new Color('TEAL_LIGHTEN_2', 135, 'teal lighten-2');
  TEAL_LIGHTEN_1 = new Color('TEAL_LIGHTEN_1', 136, 'teal lighten-1');
  TEAL = new Color('TEAL', 137, 'teal');
  TEAL_DARKEN_1 = new Color('TEAL_DARKEN_1', 138, 'teal darken-1');
  TEAL_DARKEN_2 = new Color('TEAL_DARKEN_2', 139, 'teal darken-2');
  TEAL_DARKEN_3 = new Color('TEAL_DARKEN_3', 140, 'teal darken-3');
  TEAL_DARKEN_4 = new Color('TEAL_DARKEN_4', 141, 'teal darken-4');
  TEAL_ACCENT_1 = new Color('TEAL_ACCENT_1', 142, 'teal accent-1');
  TEAL_ACCENT_2 = new Color('TEAL_ACCENT_2', 143, 'teal accent-2');
  TEAL_ACCENT_3 = new Color('TEAL_ACCENT_3', 144, 'teal accent-3');
  TEAL_ACCENT_4 = new Color('TEAL_ACCENT_4', 145, 'teal accent-4');
  CYAN_LIGHTEN_5 = new Color('CYAN_LIGHTEN_5', 146, 'cyan lighten-5');
  CYAN_LIGHTEN_4 = new Color('CYAN_LIGHTEN_4', 147, 'cyan lighten-4');
  CYAN_LIGHTEN_3 = new Color('CYAN_LIGHTEN_3', 148, 'cyan lighten-3');
  CYAN_LIGHTEN_2 = new Color('CYAN_LIGHTEN_2', 149, 'cyan lighten-2');
  CYAN_LIGHTEN_1 = new Color('CYAN_LIGHTEN_1', 150, 'cyan lighten-1');
  CYAN = new Color('CYAN', 151, 'cyan');
  CYAN_DARKEN_1 = new Color('CYAN_DARKEN_1', 152, 'cyan darken-1');
  CYAN_DARKEN_2 = new Color('CYAN_DARKEN_2', 153, 'cyan darken-2');
  CYAN_DARKEN_3 = new Color('CYAN_DARKEN_3', 154, 'cyan darken-3');
  CYAN_DARKEN_4 = new Color('CYAN_DARKEN_4', 155, 'cyan darken-4');
  CYAN_ACCENT_1 = new Color('CYAN_ACCENT_1', 156, 'cyan accent-1');
  CYAN_ACCENT_2 = new Color('CYAN_ACCENT_2', 157, 'cyan accent-2');
  CYAN_ACCENT_3 = new Color('CYAN_ACCENT_3', 158, 'cyan accent-3');
  CYAN_ACCENT_4 = new Color('CYAN_ACCENT_4', 159, 'cyan accent-4');
  LIGHT_BLUE_LIGHTEN_5 = new Color('LIGHT_BLUE_LIGHTEN_5', 160, 'light-blue lighten-5');
  LIGHT_BLUE_LIGHTEN_4 = new Color('LIGHT_BLUE_LIGHTEN_4', 161, 'light-blue lighten-4');
  LIGHT_BLUE_LIGHTEN_3 = new Color('LIGHT_BLUE_LIGHTEN_3', 162, 'light-blue lighten-3');
  LIGHT_BLUE_LIGHTEN_2 = new Color('LIGHT_BLUE_LIGHTEN_2', 163, 'light-blue lighten-2');
  LIGHT_BLUE_LIGHTEN_1 = new Color('LIGHT_BLUE_LIGHTEN_1', 164, 'light-blue lighten-1');
  LIGHT_BLUE = new Color('LIGHT_BLUE', 165, 'light-blue');
  LIGHT_BLUE_DARKEN_1 = new Color('LIGHT_BLUE_DARKEN_1', 166, 'light-blue darken-1');
  LIGHT_BLUE_DARKEN_2 = new Color('LIGHT_BLUE_DARKEN_2', 167, 'light-blue darken-2');
  LIGHT_BLUE_DARKEN_3 = new Color('LIGHT_BLUE_DARKEN_3', 168, 'light-blue darken-3');
  LIGHT_BLUE_DARKEN_4 = new Color('LIGHT_BLUE_DARKEN_4', 169, 'light-blue darken-4');
  LIGHT_BLUE_ACCENT_1 = new Color('LIGHT_BLUE_ACCENT_1', 170, 'light-blue accent-1');
  LIGHT_BLUE_ACCENT_2 = new Color('LIGHT_BLUE_ACCENT_2', 171, 'light-blue accent-2');
  LIGHT_BLUE_ACCENT_3 = new Color('LIGHT_BLUE_ACCENT_3', 172, 'light-blue accent-3');
  LIGHT_BLUE_ACCENT_4 = new Color('LIGHT_BLUE_ACCENT_4', 173, 'light-blue accent-4');
  BLUE_LIGHTEN_5 = new Color('BLUE_LIGHTEN_5', 174, 'blue lighten-5');
  BLUE_LIGHTEN_4 = new Color('BLUE_LIGHTEN_4', 175, 'blue lighten-4');
  BLUE_LIGHTEN_3 = new Color('BLUE_LIGHTEN_3', 176, 'blue lighten-3');
  BLUE_LIGHTEN_2 = new Color('BLUE_LIGHTEN_2', 177, 'blue lighten-2');
  BLUE_LIGHTEN_1 = new Color('BLUE_LIGHTEN_1', 178, 'blue lighten-1');
  BLUE = new Color('BLUE', 179, 'blue');
  BLUE_DARKEN_1 = new Color('BLUE_DARKEN_1', 180, 'blue darken-1');
  BLUE_DARKEN_2 = new Color('BLUE_DARKEN_2', 181, 'blue darken-2');
  BLUE_DARKEN_3 = new Color('BLUE_DARKEN_3', 182, 'blue darken-3');
  BLUE_DARKEN_4 = new Color('BLUE_DARKEN_4', 183, 'blue darken-4');
  BLUE_ACCENT_1 = new Color('BLUE_ACCENT_1', 184, 'blue accent-1');
  BLUE_ACCENT_2 = new Color('BLUE_ACCENT_2', 185, 'blue accent-2');
  BLUE_ACCENT_3 = new Color('BLUE_ACCENT_3', 186, 'blue accent-3');
  BLUE_ACCENT_4 = new Color('BLUE_ACCENT_4', 187, 'blue accent-4');
  INDIGO_LIGHTEN_5 = new Color('INDIGO_LIGHTEN_5', 188, 'indigo lighten-5');
  INDIGO_LIGHTEN_4 = new Color('INDIGO_LIGHTEN_4', 189, 'indigo lighten-4');
  INDIGO_LIGHTEN_3 = new Color('INDIGO_LIGHTEN_3', 190, 'indigo lighten-3');
  INDIGO_LIGHTEN_2 = new Color('INDIGO_LIGHTEN_2', 191, 'indigo lighten-2');
  INDIGO_LIGHTEN_1 = new Color('INDIGO_LIGHTEN_1', 192, 'indigo lighten-1');
  INDIGO = new Color('INDIGO', 193, 'indigo');
  INDIGO_DARKEN_1 = new Color('INDIGO_DARKEN_1', 194, 'indigo darken-1');
  INDIGO_DARKEN_2 = new Color('INDIGO_DARKEN_2', 195, 'indigo darken-2');
  INDIGO_DARKEN_3 = new Color('INDIGO_DARKEN_3', 196, 'indigo darken-3');
  INDIGO_DARKEN_4 = new Color('INDIGO_DARKEN_4', 197, 'indigo darken-4');
  INDIGO_ACCENT_1 = new Color('INDIGO_ACCENT_1', 198, 'indigo accent-1');
  INDIGO_ACCENT_2 = new Color('INDIGO_ACCENT_2', 199, 'indigo accent-2');
  INDIGO_ACCENT_3 = new Color('INDIGO_ACCENT_3', 200, 'indigo accent-3');
  INDIGO_ACCENT_4 = new Color('INDIGO_ACCENT_4', 201, 'indigo accent-4');
  DEEP_PURPLE_LIGHTEN_5 = new Color('DEEP_PURPLE_LIGHTEN_5', 202, 'deep-purple lighten-5');
  DEEP_PURPLE_LIGHTEN_4 = new Color('DEEP_PURPLE_LIGHTEN_4', 203, 'deep-purple lighten-4');
  DEEP_PURPLE_LIGHTEN_3 = new Color('DEEP_PURPLE_LIGHTEN_3', 204, 'deep-purple lighten-3');
  DEEP_PURPLE_LIGHTEN_2 = new Color('DEEP_PURPLE_LIGHTEN_2', 205, 'deep-purple lighten-2');
  DEEP_PURPLE_LIGHTEN_1 = new Color('DEEP_PURPLE_LIGHTEN_1', 206, 'deep-purple lighten-1');
  DEEP_PURPLE = new Color('DEEP_PURPLE', 207, 'deep-purple');
  DEEP_PURPLE_DARKEN_1 = new Color('DEEP_PURPLE_DARKEN_1', 208, 'deep-purple darken-1');
  DEEP_PURPLE_DARKEN_2 = new Color('DEEP_PURPLE_DARKEN_2', 209, 'deep-purple darken-2');
  DEEP_PURPLE_DARKEN_3 = new Color('DEEP_PURPLE_DARKEN_3', 210, 'deep-purple darken-3');
  DEEP_PURPLE_DARKEN_4 = new Color('DEEP_PURPLE_DARKEN_4', 211, 'deep-purple darken-4');
  DEEP_PURPLE_ACCENT_1 = new Color('DEEP_PURPLE_ACCENT_1', 212, 'deep-purple accent-1');
  DEEP_PURPLE_ACCENT_2 = new Color('DEEP_PURPLE_ACCENT_2', 213, 'deep-purple accent-2');
  DEEP_PURPLE_ACCENT_3 = new Color('DEEP_PURPLE_ACCENT_3', 214, 'deep-purple accent-3');
  DEEP_PURPLE_ACCENT_4 = new Color('DEEP_PURPLE_ACCENT_4', 215, 'deep-purple accent-4');
  PURPLE_LIGHTEN_5 = new Color('PURPLE_LIGHTEN_5', 216, 'purple lighten-5');
  PURPLE_LIGHTEN_4 = new Color('PURPLE_LIGHTEN_4', 217, 'purple lighten-4');
  PURPLE_LIGHTEN_3 = new Color('PURPLE_LIGHTEN_3', 218, 'purple lighten-3');
  PURPLE_LIGHTEN_2 = new Color('PURPLE_LIGHTEN_2', 219, 'purple lighten-2');
  PURPLE_LIGHTEN_1 = new Color('PURPLE_LIGHTEN_1', 220, 'purple lighten-1');
  PURPLE = new Color('PURPLE', 221, 'purple');
  PURPLE_DARKEN_1 = new Color('PURPLE_DARKEN_1', 222, 'purple darken-1');
  PURPLE_DARKEN_2 = new Color('PURPLE_DARKEN_2', 223, 'purple darken-2');
  PURPLE_DARKEN_3 = new Color('PURPLE_DARKEN_3', 224, 'purple darken-3');
  PURPLE_DARKEN_4 = new Color('PURPLE_DARKEN_4', 225, 'purple darken-4');
  PURPLE_ACCENT_1 = new Color('PURPLE_ACCENT_1', 226, 'purple accent-1');
  PURPLE_ACCENT_2 = new Color('PURPLE_ACCENT_2', 227, 'purple accent-2');
  PURPLE_ACCENT_3 = new Color('PURPLE_ACCENT_3', 228, 'purple accent-3');
  PURPLE_ACCENT_4 = new Color('PURPLE_ACCENT_4', 229, 'purple accent-4');
  PINK_LIGHTEN_5 = new Color('PINK_LIGHTEN_5', 230, 'pink lighten-5');
  PINK_LIGHTEN_4 = new Color('PINK_LIGHTEN_4', 231, 'pink lighten-4');
  PINK_LIGHTEN_3 = new Color('PINK_LIGHTEN_3', 232, 'pink lighten-3');
  PINK_LIGHTEN_2 = new Color('PINK_LIGHTEN_2', 233, 'pink lighten-2');
  PINK_LIGHTEN_1 = new Color('PINK_LIGHTEN_1', 234, 'pink lighten-1');
  PINK = new Color('PINK', 235, 'pink');
  PINK_DARKEN_1 = new Color('PINK_DARKEN_1', 236, 'pink darken-1');
  PINK_DARKEN_2 = new Color('PINK_DARKEN_2', 237, 'pink darken-2');
  PINK_DARKEN_3 = new Color('PINK_DARKEN_3', 238, 'pink darken-3');
  PINK_DARKEN_4 = new Color('PINK_DARKEN_4', 239, 'pink darken-4');
  PINK_ACCENT_1 = new Color('PINK_ACCENT_1', 240, 'pink accent-1');
  PINK_ACCENT_2 = new Color('PINK_ACCENT_2', 241, 'pink accent-2');
  PINK_ACCENT_3 = new Color('PINK_ACCENT_3', 242, 'pink accent-3');
  PINK_ACCENT_4 = new Color('PINK_ACCENT_4', 243, 'pink accent-4');
  RED_LIGHTEN_5 = new Color('RED_LIGHTEN_5', 244, 'red lighten-5');
  RED_LIGHTEN_4 = new Color('RED_LIGHTEN_4', 245, 'red lighten-4');
  RED_LIGHTEN_3 = new Color('RED_LIGHTEN_3', 246, 'red lighten-3');
  RED_LIGHTEN_2 = new Color('RED_LIGHTEN_2', 247, 'red lighten-2');
  RED_LIGHTEN_1 = new Color('RED_LIGHTEN_1', 248, 'red lighten-1');
  RED = new Color('RED', 249, 'red');
  RED_DARKEN_1 = new Color('RED_DARKEN_1', 250, 'red darken-1');
  RED_DARKEN_2 = new Color('RED_DARKEN_2', 251, 'red darken-2');
  RED_DARKEN_3 = new Color('RED_DARKEN_3', 252, 'red darken-3');
  RED_DARKEN_4 = new Color('RED_DARKEN_4', 253, 'red darken-4');
  RED_ACCENT_1 = new Color('RED_ACCENT_1', 254, 'red accent-1');
  RED_ACCENT_2 = new Color('RED_ACCENT_2', 255, 'red accent-2');
  RED_ACCENT_3 = new Color('RED_ACCENT_3', 256, 'red accent-3');
  RED_ACCENT_4 = new Color('RED_ACCENT_4', 257, 'red accent-4');
}

function Color(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_14(){
  $clinit_Color();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_Color_2_classLit, 1), $intern_2, 4, 0, [DEFAULT_2, BLACK, WHITE, TRANSPARENT, BLUE_GREY_LIGHTEN_5, BLUE_GREY_LIGHTEN_4, BLUE_GREY_LIGHTEN_3, BLUE_GREY_LIGHTEN_2, BLUE_GREY_LIGHTEN_1, BLUE_GREY, BLUE_GREY_DARKEN_1, BLUE_GREY_DARKEN_2, BLUE_GREY_DARKEN_3, BLUE_GREY_DARKEN_4, GREY_LIGHTEN_5, GREY_LIGHTEN_4, GREY_LIGHTEN_3, GREY_LIGHTEN_2, GREY_LIGHTEN_1, GREY, GREY_DARKEN_1, GREY_DARKEN_2, GREY_DARKEN_3, GREY_DARKEN_4, BROWN_LIGHTEN_5, BROWN_LIGHTEN_4, BROWN_LIGHTEN_3, BROWN_LIGHTEN_2, BROWN_LIGHTEN_1, BROWN, BROWN_DARKEN_1, BROWN_DARKEN_2, BROWN_DARKEN_3, BROWN_DARKEN_4, DEEP_ORANGE_LIGHTEN_5, DEEP_ORANGE_LIGHTEN_4, DEEP_ORANGE_LIGHTEN_3, DEEP_ORANGE_LIGHTEN_2, DEEP_ORANGE_LIGHTEN_1, DEEP_ORANGE, DEEP_ORANGE_DARKEN_1, DEEP_ORANGE_DARKEN_2, DEEP_ORANGE_DARKEN_3, DEEP_ORANGE_DARKEN_4, DEEP_ORANGE_ACCENT_1, DEEP_ORANGE_ACCENT_2, DEEP_ORANGE_ACCENT_3, DEEP_ORANGE_ACCENT_4, ORANGE_LIGHTEN_5, ORANGE_LIGHTEN_4, ORANGE_LIGHTEN_3, ORANGE_LIGHTEN_2, ORANGE_LIGHTEN_1, ORANGE, ORANGE_DARKEN_1, ORANGE_DARKEN_2, ORANGE_DARKEN_3, ORANGE_DARKEN_4, ORANGE_ACCENT_1, ORANGE_ACCENT_2, ORANGE_ACCENT_3, ORANGE_ACCENT_4, AMBER_LIGHTEN_5, AMBER_LIGHTEN_4, AMBER_LIGHTEN_3, AMBER_LIGHTEN_2, AMBER_LIGHTEN_1, AMBER, AMBER_DARKEN_1, AMBER_DARKEN_2, AMBER_DARKEN_3, AMBER_DARKEN_4, AMBER_ACCENT_1, AMBER_ACCENT_2, AMBER_ACCENT_3, AMBER_ACCENT_4, YELLOW_LIGHTEN_5, YELLOW_LIGHTEN_4, YELLOW_LIGHTEN_3, YELLOW_LIGHTEN_2, YELLOW_LIGHTEN_1, YELLOW, YELLOW_DARKEN_1, YELLOW_DARKEN_2, YELLOW_DARKEN_3, YELLOW_DARKEN_4, YELLOW_ACCENT_1, YELLOW_ACCENT_2, YELLOW_ACCENT_3, YELLOW_ACCENT_4, LIME_LIGHTEN_5, LIME_LIGHTEN_4, LIME_LIGHTEN_3, LIME_LIGHTEN_2, LIME_LIGHTEN_1, LIME, LIME_DARKEN_1, LIME_DARKEN_2, LIME_DARKEN_3, LIME_DARKEN_4, LIME_ACCENT_1, LIME_ACCENT_2, LIME_ACCENT_3, LIME_ACCENT_4, LIGHT_GREEN_LIGHTEN_5, LIGHT_GREEN_LIGHTEN_4, LIGHT_GREEN_LIGHTEN_3, LIGHT_GREEN_LIGHTEN_2, LIGHT_GREEN_LIGHTEN_1, LIGHT_GREEN, LIGHT_GREEN_DARKEN_1, LIGHT_GREEN_DARKEN_2, LIGHT_GREEN_DARKEN_3, LIGHT_GREEN_DARKEN_4, LIGHT_GREEN_ACCENT_1, LIGHT_GREEN_ACCENT_2, LIGHT_GREEN_ACCENT_3, LIGHT_GREEN_ACCENT_4, GREEN_LIGHTEN_5, GREEN_LIGHTEN_4, GREEN_LIGHTEN_3, GREEN_LIGHTEN_2, GREEN_LIGHTEN_1, GREEN, GREEN_DARKEN_1, GREEN_DARKEN_2, GREEN_DARKEN_3, GREEN_DARKEN_4, GREEN_ACCENT_1, GREEN_ACCENT_2, GREEN_ACCENT_3, GREEN_ACCENT_4, TEAL_LIGHTEN_5, TEAL_LIGHTEN_4, TEAL_LIGHTEN_3, TEAL_LIGHTEN_2, TEAL_LIGHTEN_1, TEAL, TEAL_DARKEN_1, TEAL_DARKEN_2, TEAL_DARKEN_3, TEAL_DARKEN_4, TEAL_ACCENT_1, TEAL_ACCENT_2, TEAL_ACCENT_3, TEAL_ACCENT_4, CYAN_LIGHTEN_5, CYAN_LIGHTEN_4, CYAN_LIGHTEN_3, CYAN_LIGHTEN_2, CYAN_LIGHTEN_1, CYAN, CYAN_DARKEN_1, CYAN_DARKEN_2, CYAN_DARKEN_3, CYAN_DARKEN_4, CYAN_ACCENT_1, CYAN_ACCENT_2, CYAN_ACCENT_3, CYAN_ACCENT_4, LIGHT_BLUE_LIGHTEN_5, LIGHT_BLUE_LIGHTEN_4, LIGHT_BLUE_LIGHTEN_3, LIGHT_BLUE_LIGHTEN_2, LIGHT_BLUE_LIGHTEN_1, LIGHT_BLUE, LIGHT_BLUE_DARKEN_1, LIGHT_BLUE_DARKEN_2, LIGHT_BLUE_DARKEN_3, LIGHT_BLUE_DARKEN_4, LIGHT_BLUE_ACCENT_1, LIGHT_BLUE_ACCENT_2, LIGHT_BLUE_ACCENT_3, LIGHT_BLUE_ACCENT_4, BLUE_LIGHTEN_5, BLUE_LIGHTEN_4, BLUE_LIGHTEN_3, BLUE_LIGHTEN_2, BLUE_LIGHTEN_1, BLUE, BLUE_DARKEN_1, BLUE_DARKEN_2, BLUE_DARKEN_3, BLUE_DARKEN_4, BLUE_ACCENT_1, BLUE_ACCENT_2, BLUE_ACCENT_3, BLUE_ACCENT_4, INDIGO_LIGHTEN_5, INDIGO_LIGHTEN_4, INDIGO_LIGHTEN_3, INDIGO_LIGHTEN_2, INDIGO_LIGHTEN_1, INDIGO, INDIGO_DARKEN_1, INDIGO_DARKEN_2, INDIGO_DARKEN_3, INDIGO_DARKEN_4, INDIGO_ACCENT_1, INDIGO_ACCENT_2, INDIGO_ACCENT_3, INDIGO_ACCENT_4, DEEP_PURPLE_LIGHTEN_5, DEEP_PURPLE_LIGHTEN_4, DEEP_PURPLE_LIGHTEN_3, DEEP_PURPLE_LIGHTEN_2, DEEP_PURPLE_LIGHTEN_1, DEEP_PURPLE, DEEP_PURPLE_DARKEN_1, DEEP_PURPLE_DARKEN_2, DEEP_PURPLE_DARKEN_3, DEEP_PURPLE_DARKEN_4, DEEP_PURPLE_ACCENT_1, DEEP_PURPLE_ACCENT_2, DEEP_PURPLE_ACCENT_3, DEEP_PURPLE_ACCENT_4, PURPLE_LIGHTEN_5, PURPLE_LIGHTEN_4, PURPLE_LIGHTEN_3, PURPLE_LIGHTEN_2, PURPLE_LIGHTEN_1, PURPLE, PURPLE_DARKEN_1, PURPLE_DARKEN_2, PURPLE_DARKEN_3, PURPLE_DARKEN_4, PURPLE_ACCENT_1, PURPLE_ACCENT_2, PURPLE_ACCENT_3, PURPLE_ACCENT_4, PINK_LIGHTEN_5, PINK_LIGHTEN_4, PINK_LIGHTEN_3, PINK_LIGHTEN_2, PINK_LIGHTEN_1, PINK, PINK_DARKEN_1, PINK_DARKEN_2, PINK_DARKEN_3, PINK_DARKEN_4, PINK_ACCENT_1, PINK_ACCENT_2, PINK_ACCENT_3, PINK_ACCENT_4, RED_LIGHTEN_5, RED_LIGHTEN_4, RED_LIGHTEN_3, RED_LIGHTEN_2, RED_LIGHTEN_1, RED, RED_DARKEN_1, RED_DARKEN_2, RED_DARKEN_3, RED_DARKEN_4, RED_ACCENT_1, RED_ACCENT_2, RED_ACCENT_3, RED_ACCENT_4]);
}

defineClass(4, 6, {8:1, 4:1, 192:1, 101:1, 5:1, 7:1, 6:1}, Color);
_.getCssName = function getCssName_58(){
  return this.cssClass;
}
;
var AMBER, AMBER_ACCENT_1, AMBER_ACCENT_2, AMBER_ACCENT_3, AMBER_ACCENT_4, AMBER_DARKEN_1, AMBER_DARKEN_2, AMBER_DARKEN_3, AMBER_DARKEN_4, AMBER_LIGHTEN_1, AMBER_LIGHTEN_2, AMBER_LIGHTEN_3, AMBER_LIGHTEN_4, AMBER_LIGHTEN_5, BLACK, BLUE, BLUE_ACCENT_1, BLUE_ACCENT_2, BLUE_ACCENT_3, BLUE_ACCENT_4, BLUE_DARKEN_1, BLUE_DARKEN_2, BLUE_DARKEN_3, BLUE_DARKEN_4, BLUE_GREY, BLUE_GREY_DARKEN_1, BLUE_GREY_DARKEN_2, BLUE_GREY_DARKEN_3, BLUE_GREY_DARKEN_4, BLUE_GREY_LIGHTEN_1, BLUE_GREY_LIGHTEN_2, BLUE_GREY_LIGHTEN_3, BLUE_GREY_LIGHTEN_4, BLUE_GREY_LIGHTEN_5, BLUE_LIGHTEN_1, BLUE_LIGHTEN_2, BLUE_LIGHTEN_3, BLUE_LIGHTEN_4, BLUE_LIGHTEN_5, BROWN, BROWN_DARKEN_1, BROWN_DARKEN_2, BROWN_DARKEN_3, BROWN_DARKEN_4, BROWN_LIGHTEN_1, BROWN_LIGHTEN_2, BROWN_LIGHTEN_3, BROWN_LIGHTEN_4, BROWN_LIGHTEN_5, CYAN, CYAN_ACCENT_1, CYAN_ACCENT_2, CYAN_ACCENT_3, CYAN_ACCENT_4, CYAN_DARKEN_1, CYAN_DARKEN_2, CYAN_DARKEN_3, CYAN_DARKEN_4, CYAN_LIGHTEN_1, CYAN_LIGHTEN_2, CYAN_LIGHTEN_3, CYAN_LIGHTEN_4, CYAN_LIGHTEN_5, DEEP_ORANGE, DEEP_ORANGE_ACCENT_1, DEEP_ORANGE_ACCENT_2, DEEP_ORANGE_ACCENT_3, DEEP_ORANGE_ACCENT_4, DEEP_ORANGE_DARKEN_1, DEEP_ORANGE_DARKEN_2, DEEP_ORANGE_DARKEN_3, DEEP_ORANGE_DARKEN_4, DEEP_ORANGE_LIGHTEN_1, DEEP_ORANGE_LIGHTEN_2, DEEP_ORANGE_LIGHTEN_3, DEEP_ORANGE_LIGHTEN_4, DEEP_ORANGE_LIGHTEN_5, DEEP_PURPLE, DEEP_PURPLE_ACCENT_1, DEEP_PURPLE_ACCENT_2, DEEP_PURPLE_ACCENT_3, DEEP_PURPLE_ACCENT_4, DEEP_PURPLE_DARKEN_1, DEEP_PURPLE_DARKEN_2, DEEP_PURPLE_DARKEN_3, DEEP_PURPLE_DARKEN_4, DEEP_PURPLE_LIGHTEN_1, DEEP_PURPLE_LIGHTEN_2, DEEP_PURPLE_LIGHTEN_3, DEEP_PURPLE_LIGHTEN_4, DEEP_PURPLE_LIGHTEN_5, DEFAULT_2, GREEN, GREEN_ACCENT_1, GREEN_ACCENT_2, GREEN_ACCENT_3, GREEN_ACCENT_4, GREEN_DARKEN_1, GREEN_DARKEN_2, GREEN_DARKEN_3, GREEN_DARKEN_4, GREEN_LIGHTEN_1, GREEN_LIGHTEN_2, GREEN_LIGHTEN_3, GREEN_LIGHTEN_4, GREEN_LIGHTEN_5, GREY, GREY_DARKEN_1, GREY_DARKEN_2, GREY_DARKEN_3, GREY_DARKEN_4, GREY_LIGHTEN_1, GREY_LIGHTEN_2, GREY_LIGHTEN_3, GREY_LIGHTEN_4, GREY_LIGHTEN_5, INDIGO, INDIGO_ACCENT_1, INDIGO_ACCENT_2, INDIGO_ACCENT_3, INDIGO_ACCENT_4, INDIGO_DARKEN_1, INDIGO_DARKEN_2, INDIGO_DARKEN_3, INDIGO_DARKEN_4, INDIGO_LIGHTEN_1, INDIGO_LIGHTEN_2, INDIGO_LIGHTEN_3, INDIGO_LIGHTEN_4, INDIGO_LIGHTEN_5, LIGHT_BLUE, LIGHT_BLUE_ACCENT_1, LIGHT_BLUE_ACCENT_2, LIGHT_BLUE_ACCENT_3, LIGHT_BLUE_ACCENT_4, LIGHT_BLUE_DARKEN_1, LIGHT_BLUE_DARKEN_2, LIGHT_BLUE_DARKEN_3, LIGHT_BLUE_DARKEN_4, LIGHT_BLUE_LIGHTEN_1, LIGHT_BLUE_LIGHTEN_2, LIGHT_BLUE_LIGHTEN_3, LIGHT_BLUE_LIGHTEN_4, LIGHT_BLUE_LIGHTEN_5, LIGHT_GREEN, LIGHT_GREEN_ACCENT_1, LIGHT_GREEN_ACCENT_2, LIGHT_GREEN_ACCENT_3, LIGHT_GREEN_ACCENT_4, LIGHT_GREEN_DARKEN_1, LIGHT_GREEN_DARKEN_2, LIGHT_GREEN_DARKEN_3, LIGHT_GREEN_DARKEN_4, LIGHT_GREEN_LIGHTEN_1, LIGHT_GREEN_LIGHTEN_2, LIGHT_GREEN_LIGHTEN_3, LIGHT_GREEN_LIGHTEN_4, LIGHT_GREEN_LIGHTEN_5, LIME, LIME_ACCENT_1, LIME_ACCENT_2, LIME_ACCENT_3, LIME_ACCENT_4, LIME_DARKEN_1, LIME_DARKEN_2, LIME_DARKEN_3, LIME_DARKEN_4, LIME_LIGHTEN_1, LIME_LIGHTEN_2, LIME_LIGHTEN_3, LIME_LIGHTEN_4, LIME_LIGHTEN_5, ORANGE, ORANGE_ACCENT_1, ORANGE_ACCENT_2, ORANGE_ACCENT_3, ORANGE_ACCENT_4, ORANGE_DARKEN_1, ORANGE_DARKEN_2, ORANGE_DARKEN_3, ORANGE_DARKEN_4, ORANGE_LIGHTEN_1, ORANGE_LIGHTEN_2, ORANGE_LIGHTEN_3, ORANGE_LIGHTEN_4, ORANGE_LIGHTEN_5, PINK, PINK_ACCENT_1, PINK_ACCENT_2, PINK_ACCENT_3, PINK_ACCENT_4, PINK_DARKEN_1, PINK_DARKEN_2, PINK_DARKEN_3, PINK_DARKEN_4, PINK_LIGHTEN_1, PINK_LIGHTEN_2, PINK_LIGHTEN_3, PINK_LIGHTEN_4, PINK_LIGHTEN_5, PURPLE, PURPLE_ACCENT_1, PURPLE_ACCENT_2, PURPLE_ACCENT_3, PURPLE_ACCENT_4, PURPLE_DARKEN_1, PURPLE_DARKEN_2, PURPLE_DARKEN_3, PURPLE_DARKEN_4, PURPLE_LIGHTEN_1, PURPLE_LIGHTEN_2, PURPLE_LIGHTEN_3, PURPLE_LIGHTEN_4, PURPLE_LIGHTEN_5, RED, RED_ACCENT_1, RED_ACCENT_2, RED_ACCENT_3, RED_ACCENT_4, RED_DARKEN_1, RED_DARKEN_2, RED_DARKEN_3, RED_DARKEN_4, RED_LIGHTEN_1, RED_LIGHTEN_2, RED_LIGHTEN_3, RED_LIGHTEN_4, RED_LIGHTEN_5, TEAL, TEAL_ACCENT_1, TEAL_ACCENT_2, TEAL_ACCENT_3, TEAL_ACCENT_4, TEAL_DARKEN_1, TEAL_DARKEN_2, TEAL_DARKEN_3, TEAL_DARKEN_4, TEAL_LIGHTEN_1, TEAL_LIGHTEN_2, TEAL_LIGHTEN_3, TEAL_LIGHTEN_4, TEAL_LIGHTEN_5, TRANSPARENT, WHITE, YELLOW, YELLOW_ACCENT_1, YELLOW_ACCENT_2, YELLOW_ACCENT_3, YELLOW_ACCENT_4, YELLOW_DARKEN_1, YELLOW_DARKEN_2, YELLOW_DARKEN_3, YELLOW_DARKEN_4, YELLOW_LIGHTEN_1, YELLOW_LIGHTEN_2, YELLOW_LIGHTEN_3, YELLOW_LIGHTEN_4, YELLOW_LIGHTEN_5;
var Lgwt_material_design_client_constants_Color_2_classLit = createForEnum('gwt.material.design.client.constants', 'Color', 4, values_14);
function $clinit_IconPosition(){
  $clinit_IconPosition = emptyMethod;
  NONE_1 = new IconPosition('NONE', 0, '');
  LEFT_1 = new IconPosition('LEFT', 1, 'left');
  RIGHT_1 = new IconPosition('RIGHT', 2, 'right');
}

function IconPosition(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_15(){
  $clinit_IconPosition();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_IconPosition_2_classLit, 1), $intern_2, 94, 0, [NONE_1, LEFT_1, RIGHT_1]);
}

defineClass(94, 6, {8:1, 94:1, 5:1, 7:1, 6:1}, IconPosition);
_.getCssName = function getCssName_59(){
  return this.cssClass;
}
;
var LEFT_1, NONE_1, RIGHT_1;
var Lgwt_material_design_client_constants_IconPosition_2_classLit = createForEnum('gwt.material.design.client.constants', 'IconPosition', 94, values_15);
function $clinit_IconType(){
  $clinit_IconType = emptyMethod;
  DEFAULT_3 = new IconType('DEFAULT', 0, '');
  ROTATION_3D = new IconType('ROTATION_3D', 1, '3d_rotation');
  AC_UNIT = new IconType('AC_UNIT', 2, 'ac_unit');
  ACCESS_ALARM = new IconType('ACCESS_ALARM', 3, 'access_alarm');
  ACCESS_ALARMS = new IconType('ACCESS_ALARMS', 4, 'access_alarms');
  ACCESS_TIME = new IconType('ACCESS_TIME', 5, 'access_time');
  ACCESSIBILITY = new IconType('ACCESSIBILITY', 6, 'accessibility');
  ACCESSIBLE = new IconType('ACCESSIBLE', 7, 'accessible');
  ACCOUNT_BALANCE = new IconType('ACCOUNT_BALANCE', 8, 'account_balance');
  ACCOUNT_BALANCE_WALLET = new IconType('ACCOUNT_BALANCE_WALLET', 9, 'account_balance_wallet');
  ACCOUNT_BOX = new IconType('ACCOUNT_BOX', 10, 'account_box');
  ACCOUNT_CIRCLE = new IconType('ACCOUNT_CIRCLE', 11, 'account_circle');
  ADB = new IconType('ADB', 12, 'adb');
  ADD = new IconType('ADD', 13, 'add');
  ADD_A_PHOTO = new IconType('ADD_A_PHOTO', 14, 'add_a_photo');
  ADD_ALARM = new IconType('ADD_ALARM', 15, 'add_alarm');
  ADD_ALERT = new IconType('ADD_ALERT', 16, 'add_alert');
  ADD_BOX = new IconType('ADD_BOX', 17, 'add_box');
  ADD_CIRCLE = new IconType('ADD_CIRCLE', 18, 'add_circle');
  ADD_CIRCLE_OUTLINE = new IconType('ADD_CIRCLE_OUTLINE', 19, 'add_circle_outline');
  ADD_LOCATION = new IconType('ADD_LOCATION', 20, 'add_location');
  ADD_SHOPPING_CART = new IconType('ADD_SHOPPING_CART', 21, 'add_shopping_cart');
  ADD_TO_PHOTOS = new IconType('ADD_TO_PHOTOS', 22, 'add_to_photos');
  ADD_TO_QUEUE = new IconType('ADD_TO_QUEUE', 23, 'add_to_queue');
  ADJUST = new IconType('ADJUST', 24, 'adjust');
  AIRLINE_SEAT_FLAT = new IconType('AIRLINE_SEAT_FLAT', 25, 'airline_seat_flat');
  AIRLINE_SEAT_FLAT_ANGLED = new IconType('AIRLINE_SEAT_FLAT_ANGLED', 26, 'airline_seat_flat_angled');
  AIRLINE_SEAT_INDIVIDUAL_SUITE = new IconType('AIRLINE_SEAT_INDIVIDUAL_SUITE', 27, 'airline_seat_individual_suite');
  AIRLINE_SEAT_LEGROOM_EXTRA = new IconType('AIRLINE_SEAT_LEGROOM_EXTRA', 28, 'airline_seat_legroom_extra');
  AIRLINE_SEAT_LEGROOM_NORMAL = new IconType('AIRLINE_SEAT_LEGROOM_NORMAL', 29, 'airline_seat_legroom_normal');
  AIRLINE_SEAT_LEGROOM_REDUCED = new IconType('AIRLINE_SEAT_LEGROOM_REDUCED', 30, 'airline_seat_legroom_reduced');
  AIRLINE_SEAT_RECLINE_EXTRA = new IconType('AIRLINE_SEAT_RECLINE_EXTRA', 31, 'airline_seat_recline_extra');
  AIRLINE_SEAT_RECLINE_NORMAL = new IconType('AIRLINE_SEAT_RECLINE_NORMAL', 32, 'airline_seat_recline_normal');
  AIRPLANEMODE_ACTIVE = new IconType('AIRPLANEMODE_ACTIVE', 33, 'airplanemode_active');
  AIRPLANEMODE_INACTIVE = new IconType('AIRPLANEMODE_INACTIVE', 34, 'airplanemode_inactive');
  AIRPLAY = new IconType('AIRPLAY', 35, 'airplay');
  AIRPORT_SHUTTLE = new IconType('AIRPORT_SHUTTLE', 36, 'airport_shuttle');
  ALARM = new IconType('ALARM', 37, 'alarm');
  ALARM_ADD = new IconType('ALARM_ADD', 38, 'alarm_add');
  ALARM_OFF = new IconType('ALARM_OFF', 39, 'alarm_off');
  ALARM_ON = new IconType('ALARM_ON', 40, 'alarm_on');
  ALBUM = new IconType('ALBUM', 41, 'album');
  ALL_INCLUSIVE = new IconType('ALL_INCLUSIVE', 42, 'all_inclusive');
  ALL_OUT = new IconType('ALL_OUT', 43, 'all_out');
  ANDROID = new IconType('ANDROID', 44, 'android');
  ANNOUNCEMENT = new IconType('ANNOUNCEMENT', 45, 'announcement');
  APPS = new IconType('APPS', 46, 'apps');
  ARCHIVE = new IconType('ARCHIVE', 47, 'archive');
  ARROW_BACK = new IconType('ARROW_BACK', 48, 'arrow_back');
  ARROW_DOWNWARD = new IconType('ARROW_DOWNWARD', 49, 'arrow_downward');
  ARROW_DROP_DOWN = new IconType('ARROW_DROP_DOWN', 50, 'arrow_drop_down');
  ARROW_DROP_DOWN_CIRCLE = new IconType('ARROW_DROP_DOWN_CIRCLE', 51, 'arrow_drop_down_circle');
  ARROW_DROP_UP = new IconType('ARROW_DROP_UP', 52, 'arrow_drop_up');
  ARROW_FORWARD = new IconType('ARROW_FORWARD', 53, 'arrow_forward');
  ARROW_UPWARD = new IconType('ARROW_UPWARD', 54, 'arrow_upward');
  ART_TRACK = new IconType('ART_TRACK', 55, 'art_track');
  ASPECT_RATIO = new IconType('ASPECT_RATIO', 56, 'aspect_ratio');
  ASSESSMENT = new IconType('ASSESSMENT', 57, 'assessment');
  ASSIGNMENT = new IconType('ASSIGNMENT', 58, 'assignment');
  ASSIGNMENT_IND = new IconType('ASSIGNMENT_IND', 59, 'assignment_ind');
  ASSIGNMENT_LATE = new IconType('ASSIGNMENT_LATE', 60, 'assignment_late');
  ASSIGNMENT_RETURN = new IconType('ASSIGNMENT_RETURN', 61, 'assignment_return');
  ASSIGNMENT_RETURNED = new IconType('ASSIGNMENT_RETURNED', 62, 'assignment_returned');
  ASSIGNMENT_TURNED_IN = new IconType('ASSIGNMENT_TURNED_IN', 63, 'assignment_turned_in');
  ASSISTANT = new IconType('ASSISTANT', 64, 'assistant');
  ASSISTANT_PHOTO = new IconType('ASSISTANT_PHOTO', 65, 'assistant_photo');
  ATTACH_FILE = new IconType('ATTACH_FILE', 66, 'attach_file');
  ATTACH_MONEY = new IconType('ATTACH_MONEY', 67, 'attach_money');
  ATTACHMENT = new IconType('ATTACHMENT', 68, 'attachment');
  AUDIOTRACK = new IconType('AUDIOTRACK', 69, 'audiotrack');
  AUTORENEW = new IconType('AUTORENEW', 70, 'autorenew');
  AV_TIMER = new IconType('AV_TIMER', 71, 'av_timer');
  BACKSPACE = new IconType('BACKSPACE', 72, 'backspace');
  BACKUP = new IconType('BACKUP', 73, 'backup');
  BATTERY_ALERT = new IconType('BATTERY_ALERT', 74, 'battery_alert');
  BATTERY_CHARGING_FULL = new IconType('BATTERY_CHARGING_FULL', 75, 'battery_charging_full');
  BATTERY_FULL = new IconType('BATTERY_FULL', 76, 'battery_full');
  BATTERY_STD = new IconType('BATTERY_STD', 77, 'battery_std');
  BATTERY_UNKNOWN = new IconType('BATTERY_UNKNOWN', 78, 'battery_unknown');
  BEACH_ACCESS = new IconType('BEACH_ACCESS', 79, 'beach_access');
  BEENHERE = new IconType('BEENHERE', 80, 'beenhere');
  BLOCK_0 = new IconType('BLOCK', 81, 'block');
  BLUETOOTH = new IconType('BLUETOOTH', 82, 'bluetooth');
  BLUETOOTH_AUDIO = new IconType('BLUETOOTH_AUDIO', 83, 'bluetooth_audio');
  BLUETOOTH_CONNECTED = new IconType('BLUETOOTH_CONNECTED', 84, 'bluetooth_connected');
  BLUETOOTH_DISABLED = new IconType('BLUETOOTH_DISABLED', 85, 'bluetooth_disabled');
  BLUETOOTH_SEARCHING = new IconType('BLUETOOTH_SEARCHING', 86, 'bluetooth_searching');
  BLUR_CIRCULAR = new IconType('BLUR_CIRCULAR', 87, 'blur_circular');
  BLUR_LINEAR = new IconType('BLUR_LINEAR', 88, 'blur_linear');
  BLUR_OFF = new IconType('BLUR_OFF', 89, 'blur_off');
  BLUR_ON = new IconType('BLUR_ON', 90, 'blur_on');
  BOOK = new IconType('BOOK', 91, 'book');
  BOOKMARK = new IconType('BOOKMARK', 92, 'bookmark');
  BOOKMARK_BORDER = new IconType('BOOKMARK_BORDER', 93, 'bookmark_border');
  BORDER_ALL = new IconType('BORDER_ALL', 94, 'border_all');
  BORDER_BOTTOM = new IconType('BORDER_BOTTOM', 95, 'border_bottom');
  BORDER_CLEAR = new IconType('BORDER_CLEAR', 96, 'border_clear');
  BORDER_COLOR = new IconType('BORDER_COLOR', 97, 'border_color');
  BORDER_HORIZONTAL = new IconType('BORDER_HORIZONTAL', 98, 'border_horizontal');
  BORDER_INNER = new IconType('BORDER_INNER', 99, 'border_inner');
  BORDER_LEFT = new IconType('BORDER_LEFT', 100, 'border_left');
  BORDER_OUTER = new IconType('BORDER_OUTER', 101, 'border_outer');
  BORDER_RIGHT = new IconType('BORDER_RIGHT', 102, 'border_right');
  BORDER_STYLE = new IconType('BORDER_STYLE', 103, 'border_style');
  BORDER_TOP = new IconType('BORDER_TOP', 104, 'border_top');
  BORDER_VERTICAL = new IconType('BORDER_VERTICAL', 105, 'border_vertical');
  BRANDING_WATERMARK = new IconType('BRANDING_WATERMARK', 106, 'branding_watermark');
  BRIGHTNESS_1 = new IconType('BRIGHTNESS_1', 107, 'brightness_1');
  BRIGHTNESS_2 = new IconType('BRIGHTNESS_2', 108, 'brightness_2');
  BRIGHTNESS_3 = new IconType('BRIGHTNESS_3', 109, 'brightness_3');
  BRIGHTNESS_4 = new IconType('BRIGHTNESS_4', 110, 'brightness_4');
  BRIGHTNESS_5 = new IconType('BRIGHTNESS_5', 111, 'brightness_5');
  BRIGHTNESS_6 = new IconType('BRIGHTNESS_6', 112, 'brightness_6');
  BRIGHTNESS_7 = new IconType('BRIGHTNESS_7', 113, 'brightness_7');
  BRIGHTNESS_AUTO = new IconType('BRIGHTNESS_AUTO', 114, 'brightness_auto');
  BRIGHTNESS_HIGH = new IconType('BRIGHTNESS_HIGH', 115, 'brightness_high');
  BRIGHTNESS_LOW = new IconType('BRIGHTNESS_LOW', 116, 'brightness_low');
  BRIGHTNESS_MEDIUM = new IconType('BRIGHTNESS_MEDIUM', 117, 'brightness_medium');
  BROKEN_IMAGE = new IconType('BROKEN_IMAGE', 118, 'broken_image');
  BRUSH = new IconType('BRUSH', 119, 'brush');
  BUBBLE_CHART = new IconType('BUBBLE_CHART', 120, 'bubble_chart');
  BUG_REPORT = new IconType('BUG_REPORT', 121, 'bug_report');
  BUILD = new IconType('BUILD', 122, 'build');
  BURST_MODE = new IconType('BURST_MODE', 123, 'burst_mode');
  BUSINESS = new IconType('BUSINESS', 124, 'business');
  BUSINESS_CENTER = new IconType('BUSINESS_CENTER', 125, 'business_center');
  CACHED = new IconType('CACHED', 126, 'cached');
  CAKE = new IconType('CAKE', 127, 'cake');
  CALL = new IconType('CALL', 128, 'call');
  CALL_END = new IconType('CALL_END', 129, 'call_end');
  CALL_MADE = new IconType('CALL_MADE', 130, 'call_made');
  CALL_MERGE = new IconType('CALL_MERGE', 131, 'call_merge');
  CALL_MISSED = new IconType('CALL_MISSED', 132, 'call_missed');
  CALL_MISSED_OUTGOING = new IconType('CALL_MISSED_OUTGOING', 133, 'call_missed_outgoing');
  CALL_RECEIVED = new IconType('CALL_RECEIVED', 134, 'call_received');
  CALL_SPLIT = new IconType('CALL_SPLIT', 135, 'call_split');
  CALL_TO_ACTION = new IconType('CALL_TO_ACTION', 136, 'call_to_action');
  CAMERA = new IconType('CAMERA', 137, 'camera');
  CAMERA_ALT = new IconType('CAMERA_ALT', 138, 'camera_alt');
  CAMERA_ENHANCE = new IconType('CAMERA_ENHANCE', 139, 'camera_enhance');
  CAMERA_FRONT = new IconType('CAMERA_FRONT', 140, 'camera_front');
  CAMERA_REAR = new IconType('CAMERA_REAR', 141, 'camera_rear');
  CAMERA_ROLL = new IconType('CAMERA_ROLL', 142, 'camera_roll');
  CANCEL = new IconType('CANCEL', 143, 'cancel');
  CARD_GIFTCARD = new IconType('CARD_GIFTCARD', 144, 'card_giftcard');
  CARD_MEMBERSHIP = new IconType('CARD_MEMBERSHIP', 145, 'card_membership');
  CARD_TRAVEL = new IconType('CARD_TRAVEL', 146, 'card_travel');
  CASINO = new IconType('CASINO', 147, 'casino');
  CAST = new IconType('CAST', 148, 'cast');
  CAST_CONNECTED = new IconType('CAST_CONNECTED', 149, 'cast_connected');
  CENTER_FOCUS_STRONG = new IconType('CENTER_FOCUS_STRONG', 150, 'center_focus_strong');
  CENTER_FOCUS_WEAK = new IconType('CENTER_FOCUS_WEAK', 151, 'center_focus_weak');
  CHANGE_HISTORY = new IconType('CHANGE_HISTORY', 152, 'change_history');
  CHAT = new IconType('CHAT', 153, 'chat');
  CHAT_BUBBLE = new IconType('CHAT_BUBBLE', 154, 'chat_bubble');
  CHAT_BUBBLE_OUTLINE = new IconType('CHAT_BUBBLE_OUTLINE', 155, 'chat_bubble_outline');
  CHECK = new IconType('CHECK', 156, 'check');
  CHECK_BOX = new IconType('CHECK_BOX', 157, 'check_box');
  CHECK_BOX_OUTLINE_BLANK = new IconType('CHECK_BOX_OUTLINE_BLANK', 158, 'check_box_outline_blank');
  CHECK_CIRCLE = new IconType('CHECK_CIRCLE', 159, 'check_circle');
  CHEVRON_LEFT = new IconType('CHEVRON_LEFT', 160, 'chevron_left');
  CHEVRON_RIGHT = new IconType('CHEVRON_RIGHT', 161, 'chevron_right');
  CHILD_CARE = new IconType('CHILD_CARE', 162, 'child_care');
  CHILD_FRIENDLY = new IconType('CHILD_FRIENDLY', 163, 'child_friendly');
  CHROME_READER_MODE = new IconType('CHROME_READER_MODE', 164, 'chrome_reader_mode');
  CLASS = new IconType('CLASS', 165, 'class');
  CLEAR = new IconType('CLEAR', 166, 'clear');
  CLEAR_ALL = new IconType('CLEAR_ALL', 167, 'clear_all');
  CLOSE = new IconType('CLOSE', 168, 'close');
  CLOSED_CAPTION = new IconType('CLOSED_CAPTION', 169, 'closed_caption');
  CLOUD = new IconType('CLOUD', 170, 'cloud');
  CLOUD_CIRCLE = new IconType('CLOUD_CIRCLE', 171, 'cloud_circle');
  CLOUD_DONE = new IconType('CLOUD_DONE', 172, 'cloud_done');
  CLOUD_DOWNLOAD = new IconType('CLOUD_DOWNLOAD', 173, 'cloud_download');
  CLOUD_OFF = new IconType('CLOUD_OFF', 174, 'cloud_off');
  CLOUD_QUEUE = new IconType('CLOUD_QUEUE', 175, 'cloud_queue');
  CLOUD_UPLOAD = new IconType('CLOUD_UPLOAD', 176, 'cloud_upload');
  CODE = new IconType('CODE', 177, 'code');
  COLLECTIONS = new IconType('COLLECTIONS', 178, 'collections');
  COLLECTIONS_BOOKMARK = new IconType('COLLECTIONS_BOOKMARK', 179, 'collections_bookmark');
  COLOR_LENS = new IconType('COLOR_LENS', 180, 'color_lens');
  COLORIZE = new IconType('COLORIZE', 181, 'colorize');
  COMMENT = new IconType('COMMENT', 182, 'comment');
  COMPARE = new IconType('COMPARE', 183, 'compare');
  COMPARE_ARROWS = new IconType('COMPARE_ARROWS', 184, 'compare_arrows');
  COMPUTER = new IconType('COMPUTER', 185, 'computer');
  CONFIRMATION_NUMBER = new IconType('CONFIRMATION_NUMBER', 186, 'confirmation_number');
  CONTACT_MAIL = new IconType('CONTACT_MAIL', 187, 'contact_mail');
  CONTACT_PHONE = new IconType('CONTACT_PHONE', 188, 'contact_phone');
  CONTACTS = new IconType('CONTACTS', 189, 'contacts');
  CONTENT_COPY = new IconType('CONTENT_COPY', 190, 'content_copy');
  CONTENT_CUT = new IconType('CONTENT_CUT', 191, 'content_cut');
  CONTENT_PASTE = new IconType('CONTENT_PASTE', 192, 'content_paste');
  CONTROL_POINT = new IconType('CONTROL_POINT', 193, 'control_point');
  CONTROL_POINT_DUPLICATE = new IconType('CONTROL_POINT_DUPLICATE', 194, 'control_point_duplicate');
  COPYRIGHT = new IconType('COPYRIGHT', 195, 'copyright');
  CREATE = new IconType('CREATE', 196, 'create');
  CREATE_NEW_FOLDER = new IconType('CREATE_NEW_FOLDER', 197, 'create_new_folder');
  CREDIT_CARD = new IconType('CREDIT_CARD', 198, 'credit_card');
  CROP = new IconType('CROP', 199, 'crop');
  CROP_16_9 = new IconType('CROP_16_9', 200, 'crop_16_9');
  CROP_3_2 = new IconType('CROP_3_2', 201, 'crop_3_2');
  CROP_5_4 = new IconType('CROP_5_4', 202, 'crop_5_4');
  CROP_7_5 = new IconType('CROP_7_5', 203, 'crop_7_5');
  CROP_DIN = new IconType('CROP_DIN', 204, 'crop_din');
  CROP_FREE = new IconType('CROP_FREE', 205, 'crop_free');
  CROP_LANDSCAPE = new IconType('CROP_LANDSCAPE', 206, 'crop_landscape');
  CROP_ORIGINAL = new IconType('CROP_ORIGINAL', 207, 'crop_original');
  CROP_PORTRAIT = new IconType('CROP_PORTRAIT', 208, 'crop_portrait');
  CROP_ROTATE = new IconType('CROP_ROTATE', 209, 'crop_rotate');
  CROP_SQUARE = new IconType('CROP_SQUARE', 210, 'crop_square');
  DASHBOARD = new IconType('DASHBOARD', 211, 'dashboard');
  DATA_USAGE = new IconType('DATA_USAGE', 212, 'data_usage');
  DATE_RANGE = new IconType('DATE_RANGE', 213, 'date_range');
  DEHAZE = new IconType('DEHAZE', 214, 'dehaze');
  DELETE = new IconType('DELETE', 215, 'delete');
  DELETE_FOREVER = new IconType('DELETE_FOREVER', 216, 'delete_forever');
  DELETE_SWEEP = new IconType('DELETE_SWEEP', 217, 'delete_sweep');
  DESCRIPTION = new IconType('DESCRIPTION', 218, 'description');
  DESKTOP_MAC = new IconType('DESKTOP_MAC', 219, 'desktop_mac');
  DESKTOP_WINDOWS = new IconType('DESKTOP_WINDOWS', 220, 'desktop_windows');
  DETAILS = new IconType('DETAILS', 221, 'details');
  DEVELOPER_BOARD = new IconType('DEVELOPER_BOARD', 222, 'developer_board');
  DEVELOPER_MODE = new IconType('DEVELOPER_MODE', 223, 'developer_mode');
  DEVICE_HUB = new IconType('DEVICE_HUB', 224, 'device_hub');
  DEVICES = new IconType('DEVICES', 225, 'devices');
  DEVICES_OTHER = new IconType('DEVICES_OTHER', 226, 'devices_other');
  DIALER_SIP = new IconType('DIALER_SIP', 227, 'dialer_sip');
  DIALPAD = new IconType('DIALPAD', 228, 'dialpad');
  DIRECTIONS = new IconType('DIRECTIONS', 229, 'directions');
  DIRECTIONS_BIKE = new IconType('DIRECTIONS_BIKE', 230, 'directions_bike');
  DIRECTIONS_BOAT = new IconType('DIRECTIONS_BOAT', 231, 'directions_boat');
  DIRECTIONS_BUS = new IconType('DIRECTIONS_BUS', 232, 'directions_bus');
  DIRECTIONS_CAR = new IconType('DIRECTIONS_CAR', 233, 'directions_car');
  DIRECTIONS_RAILWAY = new IconType('DIRECTIONS_RAILWAY', 234, 'directions_railway');
  DIRECTIONS_RUN = new IconType('DIRECTIONS_RUN', 235, 'directions_run');
  DIRECTIONS_SUBWAY = new IconType('DIRECTIONS_SUBWAY', 236, 'directions_subway');
  DIRECTIONS_TRANSIT = new IconType('DIRECTIONS_TRANSIT', 237, 'directions_transit');
  DIRECTIONS_WALK = new IconType('DIRECTIONS_WALK', 238, 'directions_walk');
  DISC_FULL = new IconType('DISC_FULL', 239, 'disc_full');
  DNS = new IconType('DNS', 240, 'dns');
  DO_NOT_DISTURB = new IconType('DO_NOT_DISTURB', 241, 'do_not_disturb');
  DO_NOT_DISTURB_ALT = new IconType('DO_NOT_DISTURB_ALT', 242, 'do_not_disturb_alt');
  DO_NOT_DISTURB_OFF = new IconType('DO_NOT_DISTURB_OFF', 243, 'do_not_disturb_off');
  DO_NOT_DISTURB_ON = new IconType('DO_NOT_DISTURB_ON', 244, 'do_not_disturb_on');
  DOCK = new IconType('DOCK', 245, 'dock');
  DOMAIN = new IconType('DOMAIN', 246, 'domain');
  DONE = new IconType('DONE', 247, 'done');
  DONE_ALL = new IconType('DONE_ALL', 248, 'done_all');
  DONUT_LARGE = new IconType('DONUT_LARGE', 249, 'donut_large');
  DONUT_SMALL = new IconType('DONUT_SMALL', 250, 'donut_small');
  DRAFTS = new IconType('DRAFTS', 251, 'drafts');
  DRAG_HANDLE = new IconType('DRAG_HANDLE', 252, 'drag_handle');
  DRIVE_ETA = new IconType('DRIVE_ETA', 253, 'drive_eta');
  DVR = new IconType('DVR', 254, 'dvr');
  EDIT = new IconType('EDIT', 255, 'edit');
  EDIT_LOCATION = new IconType('EDIT_LOCATION', 256, 'edit_location');
  EJECT = new IconType('EJECT', 257, 'eject');
  EMAIL = new IconType('EMAIL', 258, 'email');
  ENHANCED_ENCRYPTION = new IconType('ENHANCED_ENCRYPTION', 259, 'enhanced_encryption');
  EQUALIZER = new IconType('EQUALIZER', 260, 'equalizer');
  ERROR = new IconType('ERROR', 261, 'error');
  ERROR_OUTLINE = new IconType('ERROR_OUTLINE', 262, 'error_outline');
  EURO_SYMBOL = new IconType('EURO_SYMBOL', 263, 'euro_symbol');
  EV_STATION = new IconType('EV_STATION', 264, 'ev_station');
  EVENT = new IconType('EVENT', 265, 'event');
  EVENT_AVAILABLE = new IconType('EVENT_AVAILABLE', 266, 'event_available');
  EVENT_BUSY = new IconType('EVENT_BUSY', 267, 'event_busy');
  EVENT_NOTE = new IconType('EVENT_NOTE', 268, 'event_note');
  EVENT_SEAT = new IconType('EVENT_SEAT', 269, 'event_seat');
  EXIT_TO_APP = new IconType('EXIT_TO_APP', 270, 'exit_to_app');
  EXPAND_LESS = new IconType('EXPAND_LESS', 271, 'expand_less');
  EXPAND_MORE = new IconType('EXPAND_MORE', 272, 'expand_more');
  EXPLICIT = new IconType('EXPLICIT', 273, 'explicit');
  EXPLORE = new IconType('EXPLORE', 274, 'explore');
  EXPOSURE = new IconType('EXPOSURE', 275, 'exposure');
  EXPOSURE_NEG_1 = new IconType('EXPOSURE_NEG_1', 276, 'exposure_neg_1');
  EXPOSURE_NEG_2 = new IconType('EXPOSURE_NEG_2', 277, 'exposure_neg_2');
  EXPOSURE_PLUS_1 = new IconType('EXPOSURE_PLUS_1', 278, 'exposure_plus_1');
  EXPOSURE_PLUS_2 = new IconType('EXPOSURE_PLUS_2', 279, 'exposure_plus_2');
  EXPOSURE_ZERO = new IconType('EXPOSURE_ZERO', 280, 'exposure_zero');
  EXTENSION = new IconType('EXTENSION', 281, 'extension');
  FACE = new IconType('FACE', 282, 'face');
  FAST_FORWARD = new IconType('FAST_FORWARD', 283, 'fast_forward');
  FAST_REWIND = new IconType('FAST_REWIND', 284, 'fast_rewind');
  FAVORITE = new IconType('FAVORITE', 285, 'favorite');
  FAVORITE_BORDER = new IconType('FAVORITE_BORDER', 286, 'favorite_border');
  FEATURED_PLAY_LIST = new IconType('FEATURED_PLAY_LIST', 287, 'featured_play_list');
  FEATURED_VIDEO = new IconType('FEATURED_VIDEO', 288, 'featured_video');
  FEEDBACK = new IconType('FEEDBACK', 289, 'feedback');
  FIBER_DVR = new IconType('FIBER_DVR', 290, 'fiber_dvr');
  FIBER_MANUAL_RECORD = new IconType('FIBER_MANUAL_RECORD', 291, 'fiber_manual_record');
  FIBER_NEW = new IconType('FIBER_NEW', 292, 'fiber_new');
  FIBER_PIN = new IconType('FIBER_PIN', 293, 'fiber_pin');
  FIBER_SMART_RECORD = new IconType('FIBER_SMART_RECORD', 294, 'fiber_smart_record');
  FILE_DOWNLOAD = new IconType('FILE_DOWNLOAD', 295, 'file_download');
  FILE_UPLOAD = new IconType('FILE_UPLOAD', 296, 'file_upload');
  FILTER = new IconType('FILTER', 297, 'filter');
  FILTER_1 = new IconType('FILTER_1', 298, 'filter_1');
  FILTER_2 = new IconType('FILTER_2', 299, 'filter_2');
  FILTER_3 = new IconType('FILTER_3', 300, 'filter_3');
  FILTER_4 = new IconType('FILTER_4', 301, 'filter_4');
  FILTER_5 = new IconType('FILTER_5', 302, 'filter_5');
  FILTER_6 = new IconType('FILTER_6', 303, 'filter_6');
  FILTER_7 = new IconType('FILTER_7', 304, 'filter_7');
  FILTER_8 = new IconType('FILTER_8', 305, 'filter_8');
  FILTER_9 = new IconType('FILTER_9', 306, 'filter_9');
  FILTER_9_PLUS = new IconType('FILTER_9_PLUS', 307, 'filter_9_plus');
  FILTER_B_AND_W = new IconType('FILTER_B_AND_W', 308, 'filter_b_and_w');
  FILTER_CENTER_FOCUS = new IconType('FILTER_CENTER_FOCUS', 309, 'filter_center_focus');
  FILTER_DRAMA = new IconType('FILTER_DRAMA', 310, 'filter_drama');
  FILTER_FRAMES = new IconType('FILTER_FRAMES', 311, 'filter_frames');
  FILTER_HDR = new IconType('FILTER_HDR', 312, 'filter_hdr');
  FILTER_LIST = new IconType('FILTER_LIST', 313, 'filter_list');
  FILTER_NONE = new IconType('FILTER_NONE', 314, 'filter_none');
  FILTER_TILT_SHIFT = new IconType('FILTER_TILT_SHIFT', 315, 'filter_tilt_shift');
  FILTER_VINTAGE = new IconType('FILTER_VINTAGE', 316, 'filter_vintage');
  FIND_IN_PAGE = new IconType('FIND_IN_PAGE', 317, 'find_in_page');
  FIND_REPLACE = new IconType('FIND_REPLACE', 318, 'find_replace');
  FINGERPRINT = new IconType('FINGERPRINT', 319, 'fingerprint');
  FIRST_PAGE = new IconType('FIRST_PAGE', 320, 'first_page');
  FITNESS_CENTER = new IconType('FITNESS_CENTER', 321, 'fitness_center');
  FLAG = new IconType('FLAG', 322, 'flag');
  FLARE = new IconType('FLARE', 323, 'flare');
  FLASH_AUTO = new IconType('FLASH_AUTO', 324, 'flash_auto');
  FLASH_OFF = new IconType('FLASH_OFF', 325, 'flash_off');
  FLASH_ON = new IconType('FLASH_ON', 326, 'flash_on');
  FLIGHT = new IconType('FLIGHT', 327, 'flight');
  FLIGHT_LAND = new IconType('FLIGHT_LAND', 328, 'flight_land');
  FLIGHT_TAKEOFF = new IconType('FLIGHT_TAKEOFF', 329, 'flight_takeoff');
  FLIP = new IconType('FLIP', 330, 'flip');
  FLIP_TO_BACK = new IconType('FLIP_TO_BACK', 331, 'flip_to_back');
  FLIP_TO_FRONT = new IconType('FLIP_TO_FRONT', 332, 'flip_to_front');
  FOLDER = new IconType('FOLDER', 333, 'folder');
  FOLDER_OPEN = new IconType('FOLDER_OPEN', 334, 'folder_open');
  FOLDER_SHARED = new IconType('FOLDER_SHARED', 335, 'folder_shared');
  FOLDER_SPECIAL = new IconType('FOLDER_SPECIAL', 336, 'folder_special');
  FONT_DOWNLOAD = new IconType('FONT_DOWNLOAD', 337, 'font_download');
  FORMAT_ALIGN_CENTER = new IconType('FORMAT_ALIGN_CENTER', 338, 'format_align_center');
  FORMAT_ALIGN_JUSTIFY = new IconType('FORMAT_ALIGN_JUSTIFY', 339, 'format_align_justify');
  FORMAT_ALIGN_LEFT = new IconType('FORMAT_ALIGN_LEFT', 340, 'format_align_left');
  FORMAT_ALIGN_RIGHT = new IconType('FORMAT_ALIGN_RIGHT', 341, 'format_align_right');
  FORMAT_BOLD = new IconType('FORMAT_BOLD', 342, 'format_bold');
  FORMAT_CLEAR = new IconType('FORMAT_CLEAR', 343, 'format_clear');
  FORMAT_COLOR_FILL = new IconType('FORMAT_COLOR_FILL', 344, 'format_color_fill');
  FORMAT_COLOR_RESET = new IconType('FORMAT_COLOR_RESET', 345, 'format_color_reset');
  FORMAT_COLOR_TEXT = new IconType('FORMAT_COLOR_TEXT', 346, 'format_color_text');
  FORMAT_INDENT_DECREASE = new IconType('FORMAT_INDENT_DECREASE', 347, 'format_indent_decrease');
  FORMAT_INDENT_INCREASE = new IconType('FORMAT_INDENT_INCREASE', 348, 'format_indent_increase');
  FORMAT_ITALIC = new IconType('FORMAT_ITALIC', 349, 'format_italic');
  FORMAT_LINE_SPACING = new IconType('FORMAT_LINE_SPACING', 350, 'format_line_spacing');
  FORMAT_LIST_BULLETED = new IconType('FORMAT_LIST_BULLETED', 351, 'format_list_bulleted');
  FORMAT_LIST_NUMBERED = new IconType('FORMAT_LIST_NUMBERED', 352, 'format_list_numbered');
  FORMAT_PAINT = new IconType('FORMAT_PAINT', 353, 'format_paint');
  FORMAT_QUOTE = new IconType('FORMAT_QUOTE', 354, 'format_quote');
  FORMAT_SHAPES = new IconType('FORMAT_SHAPES', 355, 'format_shapes');
  FORMAT_SIZE = new IconType('FORMAT_SIZE', 356, 'format_size');
  FORMAT_STRIKETHROUGH = new IconType('FORMAT_STRIKETHROUGH', 357, 'format_strikethrough');
  FORMAT_TEXTDIRECTION_L_TO_R = new IconType('FORMAT_TEXTDIRECTION_L_TO_R', 358, 'format_textdirection_l_to_r');
  FORMAT_TEXTDIRECTION_R_TO_L = new IconType('FORMAT_TEXTDIRECTION_R_TO_L', 359, 'format_textdirection_r_to_l');
  FORMAT_UNDERLINED = new IconType('FORMAT_UNDERLINED', 360, 'format_underlined');
  FORUM = new IconType('FORUM', 361, 'forum');
  FORWARD = new IconType('FORWARD', 362, 'forward');
  FORWARD_10 = new IconType('FORWARD_10', 363, 'forward_10');
  FORWARD_30 = new IconType('FORWARD_30', 364, 'forward_30');
  FORWARD_5 = new IconType('FORWARD_5', 365, 'forward_5');
  FREE_BREAKFAST = new IconType('FREE_BREAKFAST', 366, 'free_breakfast');
  FULLSCREEN = new IconType('FULLSCREEN', 367, 'fullscreen');
  FULLSCREEN_EXIT = new IconType('FULLSCREEN_EXIT', 368, 'fullscreen_exit');
  FUNCTIONS = new IconType('FUNCTIONS', 369, 'functions');
  G_TRANSLATE = new IconType('G_TRANSLATE', 370, 'g_translate');
  GAMEPAD = new IconType('GAMEPAD', 371, 'gamepad');
  GAMES = new IconType('GAMES', 372, 'games');
  GAVEL = new IconType('GAVEL', 373, 'gavel');
  GESTURE = new IconType('GESTURE', 374, 'gesture');
  GET_APP = new IconType('GET_APP', 375, 'get_app');
  GIF = new IconType('GIF', 376, 'gif');
  GOLF_COURSE = new IconType('GOLF_COURSE', 377, 'golf_course');
  GPS_FIXED = new IconType('GPS_FIXED', 378, 'gps_fixed');
  GPS_NOT_FIXED = new IconType('GPS_NOT_FIXED', 379, 'gps_not_fixed');
  GPS_OFF = new IconType('GPS_OFF', 380, 'gps_off');
  GRADE = new IconType('GRADE', 381, 'grade');
  GRADIENT = new IconType('GRADIENT', 382, 'gradient');
  GRAIN = new IconType('GRAIN', 383, 'grain');
  GRAPHIC_EQ = new IconType('GRAPHIC_EQ', 384, 'graphic_eq');
  GRID_OFF = new IconType('GRID_OFF', 385, 'grid_off');
  GRID_ON = new IconType('GRID_ON', 386, 'grid_on');
  GROUP = new IconType('GROUP', 387, 'group');
  GROUP_ADD = new IconType('GROUP_ADD', 388, 'group_add');
  GROUP_WORK = new IconType('GROUP_WORK', 389, 'group_work');
  HD = new IconType('HD', 390, 'hd');
  HDR_OFF = new IconType('HDR_OFF', 391, 'hdr_off');
  HDR_ON = new IconType('HDR_ON', 392, 'hdr_on');
  HDR_STRONG = new IconType('HDR_STRONG', 393, 'hdr_strong');
  HDR_WEAK = new IconType('HDR_WEAK', 394, 'hdr_weak');
  HEADSET = new IconType('HEADSET', 395, 'headset');
  HEADSET_MIC = new IconType('HEADSET_MIC', 396, 'headset_mic');
  HEALING = new IconType('HEALING', 397, 'healing');
  HEARING = new IconType('HEARING', 398, 'hearing');
  HELP_0 = new IconType('HELP', 399, 'help');
  HELP_OUTLINE = new IconType('HELP_OUTLINE', 400, 'help_outline');
  HIGH_QUALITY = new IconType('HIGH_QUALITY', 401, 'high_quality');
  HIGHLIGHT = new IconType('HIGHLIGHT', 402, 'highlight');
  HIGHLIGHT_OFF = new IconType('HIGHLIGHT_OFF', 403, 'highlight_off');
  HISTORY = new IconType('HISTORY', 404, 'history');
  HOME = new IconType('HOME', 405, 'home');
  HOT_TUB = new IconType('HOT_TUB', 406, 'hot_tub');
  HOTEL = new IconType('HOTEL', 407, 'hotel');
  HOURGLASS_EMPTY = new IconType('HOURGLASS_EMPTY', 408, 'hourglass_empty');
  HOURGLASS_FULL = new IconType('HOURGLASS_FULL', 409, 'hourglass_full');
  HTTP = new IconType('HTTP', 410, 'http');
  HTTPS = new IconType('HTTPS', 411, 'https');
  IMAGE = new IconType('IMAGE', 412, 'image');
  IMAGE_ASPECT_RATIO = new IconType('IMAGE_ASPECT_RATIO', 413, 'image_aspect_ratio');
  IMPORT_CONTACTS = new IconType('IMPORT_CONTACTS', 414, 'import_contacts');
  IMPORT_EXPORT = new IconType('IMPORT_EXPORT', 415, 'import_export');
  IMPORTANT_DEVICES = new IconType('IMPORTANT_DEVICES', 416, 'important_devices');
  INBOX = new IconType('INBOX', 417, 'inbox');
  INDETERMINATE_CHECK_BOX = new IconType('INDETERMINATE_CHECK_BOX', 418, 'indeterminate_check_box');
  INFO = new IconType('INFO', 419, 'info');
  INFO_OUTLINE = new IconType('INFO_OUTLINE', 420, 'info_outline');
  INPUT = new IconType('INPUT', 421, 'input');
  INSERT_CHART = new IconType('INSERT_CHART', 422, 'insert_chart');
  INSERT_COMMENT = new IconType('INSERT_COMMENT', 423, 'insert_comment');
  INSERT_DRIVE_FILE = new IconType('INSERT_DRIVE_FILE', 424, 'insert_drive_file');
  INSERT_EMOTICON = new IconType('INSERT_EMOTICON', 425, 'insert_emoticon');
  INSERT_INVITATION = new IconType('INSERT_INVITATION', 426, 'insert_invitation');
  INSERT_LINK = new IconType('INSERT_LINK', 427, 'insert_link');
  INSERT_PHOTO = new IconType('INSERT_PHOTO', 428, 'insert_photo');
  INVERT_COLORS = new IconType('INVERT_COLORS', 429, 'invert_colors');
  INVERT_COLORS_OFF = new IconType('INVERT_COLORS_OFF', 430, 'invert_colors_off');
  ISO = new IconType('ISO', 431, 'iso');
  KEYBOARD = new IconType('KEYBOARD', 432, 'keyboard');
  KEYBOARD_ARROW_DOWN = new IconType('KEYBOARD_ARROW_DOWN', 433, 'keyboard_arrow_down');
  KEYBOARD_ARROW_LEFT = new IconType('KEYBOARD_ARROW_LEFT', 434, 'keyboard_arrow_left');
  KEYBOARD_ARROW_RIGHT = new IconType('KEYBOARD_ARROW_RIGHT', 435, 'keyboard_arrow_right');
  KEYBOARD_ARROW_UP = new IconType('KEYBOARD_ARROW_UP', 436, 'keyboard_arrow_up');
  KEYBOARD_BACKSPACE = new IconType('KEYBOARD_BACKSPACE', 437, 'keyboard_backspace');
  KEYBOARD_CAPSLOCK = new IconType('KEYBOARD_CAPSLOCK', 438, 'keyboard_capslock');
  KEYBOARD_HIDE = new IconType('KEYBOARD_HIDE', 439, 'keyboard_hide');
  KEYBOARD_RETURN = new IconType('KEYBOARD_RETURN', 440, 'keyboard_return');
  KEYBOARD_TAB = new IconType('KEYBOARD_TAB', 441, 'keyboard_tab');
  KEYBOARD_VOICE = new IconType('KEYBOARD_VOICE', 442, 'keyboard_voice');
  KITCHEN = new IconType('KITCHEN', 443, 'kitchen');
  LABEL = new IconType('LABEL', 444, 'label');
  LABEL_OUTLINE = new IconType('LABEL_OUTLINE', 445, 'label_outline');
  LANDSCAPE = new IconType('LANDSCAPE', 446, 'landscape');
  LANGUAGE = new IconType('LANGUAGE', 447, 'language');
  LAPTOP = new IconType('LAPTOP', 448, 'laptop');
  LAPTOP_CHROMEBOOK = new IconType('LAPTOP_CHROMEBOOK', 449, 'laptop_chromebook');
  LAPTOP_MAC = new IconType('LAPTOP_MAC', 450, 'laptop_mac');
  LAPTOP_WINDOWS = new IconType('LAPTOP_WINDOWS', 451, 'laptop_windows');
  LAST_PAGE = new IconType('LAST_PAGE', 452, 'last_page');
  LAUNCH = new IconType('LAUNCH', 453, 'launch');
  LAYERS = new IconType('LAYERS', 454, 'layers');
  LAYERS_CLEAR = new IconType('LAYERS_CLEAR', 455, 'layers_clear');
  LEAK_ADD = new IconType('LEAK_ADD', 456, 'leak_add');
  LEAK_REMOVE = new IconType('LEAK_REMOVE', 457, 'leak_remove');
  LENS = new IconType('LENS', 458, 'lens');
  LIBRARY_ADD = new IconType('LIBRARY_ADD', 459, 'library_add');
  LIBRARY_BOOKS = new IconType('LIBRARY_BOOKS', 460, 'library_books');
  LIBRARY_MUSIC = new IconType('LIBRARY_MUSIC', 461, 'library_music');
  LIGHTBULB_OUTLINE = new IconType('LIGHTBULB_OUTLINE', 462, 'lightbulb_outline');
  LINE_STYLE = new IconType('LINE_STYLE', 463, 'line_style');
  LINE_WEIGHT = new IconType('LINE_WEIGHT', 464, 'line_weight');
  LINEAR_SCALE = new IconType('LINEAR_SCALE', 465, 'linear_scale');
  LINK_0 = new IconType('LINK', 466, 'link');
  LINKED_CAMERA = new IconType('LINKED_CAMERA', 467, 'linked_camera');
  LIST = new IconType('LIST', 468, 'list');
  LIVE_HELP = new IconType('LIVE_HELP', 469, 'live_help');
  LIVE_TV = new IconType('LIVE_TV', 470, 'live_tv');
  LOCAL_ACTIVITY = new IconType('LOCAL_ACTIVITY', 471, 'local_activity');
  LOCAL_AIRPORT = new IconType('LOCAL_AIRPORT', 472, 'local_airport');
  LOCAL_ATM = new IconType('LOCAL_ATM', 473, 'local_atm');
  LOCAL_BAR = new IconType('LOCAL_BAR', 474, 'local_bar');
  LOCAL_CAFE = new IconType('LOCAL_CAFE', 475, 'local_cafe');
  LOCAL_CAR_WASH = new IconType('LOCAL_CAR_WASH', 476, 'local_car_wash');
  LOCAL_CONVENIENCE_STORE = new IconType('LOCAL_CONVENIENCE_STORE', 477, 'local_convenience_store');
  LOCAL_DINING = new IconType('LOCAL_DINING', 478, 'local_dining');
  LOCAL_DRINK = new IconType('LOCAL_DRINK', 479, 'local_drink');
  LOCAL_FLORIST = new IconType('LOCAL_FLORIST', 480, 'local_florist');
  LOCAL_GAS_STATION = new IconType('LOCAL_GAS_STATION', 481, 'local_gas_station');
  LOCAL_GROCERY_STORE = new IconType('LOCAL_GROCERY_STORE', 482, 'local_grocery_store');
  LOCAL_HOSPITAL = new IconType('LOCAL_HOSPITAL', 483, 'local_hospital');
  LOCAL_HOTEL = new IconType('LOCAL_HOTEL', 484, 'local_hotel');
  LOCAL_LAUNDRY_SERVICE = new IconType('LOCAL_LAUNDRY_SERVICE', 485, 'local_laundry_service');
  LOCAL_LIBRARY = new IconType('LOCAL_LIBRARY', 486, 'local_library');
  LOCAL_MALL = new IconType('LOCAL_MALL', 487, 'local_mall');
  LOCAL_MOVIES = new IconType('LOCAL_MOVIES', 488, 'local_movies');
  LOCAL_OFFER = new IconType('LOCAL_OFFER', 489, 'local_offer');
  LOCAL_PARKING = new IconType('LOCAL_PARKING', 490, 'local_parking');
  LOCAL_PHARMACY = new IconType('LOCAL_PHARMACY', 491, 'local_pharmacy');
  LOCAL_PHONE = new IconType('LOCAL_PHONE', 492, 'local_phone');
  LOCAL_PIZZA = new IconType('LOCAL_PIZZA', 493, 'local_pizza');
  LOCAL_PLAY = new IconType('LOCAL_PLAY', 494, 'local_play');
  LOCAL_POST_OFFICE = new IconType('LOCAL_POST_OFFICE', 495, 'local_post_office');
  LOCAL_PRINTSHOP = new IconType('LOCAL_PRINTSHOP', 496, 'local_printshop');
  LOCAL_SEE = new IconType('LOCAL_SEE', 497, 'local_see');
  LOCAL_SHIPPING = new IconType('LOCAL_SHIPPING', 498, 'local_shipping');
  LOCAL_TAXI = new IconType('LOCAL_TAXI', 499, 'local_taxi');
  LOCATION_CITY = new IconType('LOCATION_CITY', 500, 'location_city');
  LOCATION_DISABLED = new IconType('LOCATION_DISABLED', 501, 'location_disabled');
  LOCATION_OFF = new IconType('LOCATION_OFF', 502, 'location_off');
  LOCATION_ON = new IconType('LOCATION_ON', 503, 'location_on');
  LOCATION_SEARCHING = new IconType('LOCATION_SEARCHING', 504, 'location_searching');
  LOCK = new IconType('LOCK', 505, 'lock');
  LOCK_OPEN = new IconType('LOCK_OPEN', 506, 'lock_open');
  LOCK_OUTLINE = new IconType('LOCK_OUTLINE', 507, 'lock_outline');
  LOOKS = new IconType('LOOKS', 508, 'looks');
  LOOKS_3 = new IconType('LOOKS_3', 509, 'looks_3');
  LOOKS_4 = new IconType('LOOKS_4', 510, 'looks_4');
  LOOKS_5 = new IconType('LOOKS_5', 511, 'looks_5');
  LOOKS_6 = new IconType('LOOKS_6', 512, 'looks_6');
  LOOKS_ONE = new IconType('LOOKS_ONE', 513, 'looks_one');
  LOOKS_TWO = new IconType('LOOKS_TWO', 514, 'looks_two');
  LOOP = new IconType('LOOP', 515, 'loop');
  LOUPE = new IconType('LOUPE', 516, 'loupe');
  LOW_PRIORITY = new IconType('LOW_PRIORITY', 517, 'low_priority');
  LOYALTY = new IconType('LOYALTY', 518, 'loyalty');
  MAIL = new IconType('MAIL', 519, 'mail');
  MAIL_OUTLINE = new IconType('MAIL_OUTLINE', 520, 'mail_outline');
  MAP = new IconType('MAP', 521, 'map');
  MARKUNREAD = new IconType('MARKUNREAD', 522, 'markunread');
  MARKUNREAD_MAILBOX = new IconType('MARKUNREAD_MAILBOX', 523, 'markunread_mailbox');
  MEMORY = new IconType('MEMORY', 524, 'memory');
  MENU = new IconType('MENU', 525, 'menu');
  MERGE_TYPE = new IconType('MERGE_TYPE', 526, 'merge_type');
  MESSAGE = new IconType('MESSAGE', 527, 'message');
  MIC = new IconType('MIC', 528, 'mic');
  MIC_NONE = new IconType('MIC_NONE', 529, 'mic_none');
  MIC_OFF = new IconType('MIC_OFF', 530, 'mic_off');
  MMS = new IconType('MMS', 531, 'mms');
  MODE_COMMENT = new IconType('MODE_COMMENT', 532, 'mode_comment');
  MODE_EDIT = new IconType('MODE_EDIT', 533, 'mode_edit');
  MONETIZATION_ON = new IconType('MONETIZATION_ON', 534, 'monetization_on');
  MONEY_OFF = new IconType('MONEY_OFF', 535, 'money_off');
  MONOCHROME_PHOTOS = new IconType('MONOCHROME_PHOTOS', 536, 'monochrome_photos');
  MOOD = new IconType('MOOD', 537, 'mood');
  MOOD_BAD = new IconType('MOOD_BAD', 538, 'mood_bad');
  MORE = new IconType('MORE', 539, 'more');
  MORE_HORIZ = new IconType('MORE_HORIZ', 540, 'more_horiz');
  MORE_VERT = new IconType('MORE_VERT', 541, 'more_vert');
  MOTORCYCLE = new IconType('MOTORCYCLE', 542, 'motorcycle');
  MOUSE = new IconType('MOUSE', 543, 'mouse');
  MOVE_TO_INBOX = new IconType('MOVE_TO_INBOX', 544, 'move_to_inbox');
  MOVIE = new IconType('MOVIE', 545, 'movie');
  MOVIE_CREATION = new IconType('MOVIE_CREATION', 546, 'movie_creation');
  MOVIE_FILTER = new IconType('MOVIE_FILTER', 547, 'movie_filter');
  MULTILINE_CHART = new IconType('MULTILINE_CHART', 548, 'multiline_chart');
  MUSIC_NOTE = new IconType('MUSIC_NOTE', 549, 'music_note');
  MUSIC_VIDEO = new IconType('MUSIC_VIDEO', 550, 'music_video');
  MY_LOCATION = new IconType('MY_LOCATION', 551, 'my_location');
  NATURE = new IconType('NATURE', 552, 'nature');
  NATURE_PEOPLE = new IconType('NATURE_PEOPLE', 553, 'nature_people');
  NAVIGATE_BEFORE = new IconType('NAVIGATE_BEFORE', 554, 'navigate_before');
  NAVIGATE_NEXT = new IconType('NAVIGATE_NEXT', 555, 'navigate_next');
  NAVIGATION_0 = new IconType('NAVIGATION', 556, 'navigation');
  NEAR_ME = new IconType('NEAR_ME', 557, 'near_me');
  NETWORK_CELL = new IconType('NETWORK_CELL', 558, 'network_cell');
  NETWORK_CHECK = new IconType('NETWORK_CHECK', 559, 'network_check');
  NETWORK_LOCKED = new IconType('NETWORK_LOCKED', 560, 'network_locked');
  NETWORK_WIFI = new IconType('NETWORK_WIFI', 561, 'network_wifi');
  NEW_RELEASES = new IconType('NEW_RELEASES', 562, 'new_releases');
  NEXT_WEEK = new IconType('NEXT_WEEK', 563, 'next_week');
  NFC = new IconType('NFC', 564, 'nfc');
  NO_ENCRYPTION = new IconType('NO_ENCRYPTION', 565, 'no_encryption');
  NO_SIM = new IconType('NO_SIM', 566, 'no_sim');
  NOT_INTERESTED = new IconType('NOT_INTERESTED', 567, 'not_interested');
  NOTE = new IconType('NOTE', 568, 'note');
  NOTE_ADD = new IconType('NOTE_ADD', 569, 'note_add');
  NOTIFICATIONS = new IconType('NOTIFICATIONS', 570, 'notifications');
  NOTIFICATIONS_ACTIVE = new IconType('NOTIFICATIONS_ACTIVE', 571, 'notifications_active');
  NOTIFICATIONS_NONE = new IconType('NOTIFICATIONS_NONE', 572, 'notifications_none');
  NOTIFICATIONS_OFF = new IconType('NOTIFICATIONS_OFF', 573, 'notifications_off');
  NOTIFICATIONS_PAUSED = new IconType('NOTIFICATIONS_PAUSED', 574, 'notifications_paused');
  OFFLINE_PIN = new IconType('OFFLINE_PIN', 575, 'offline_pin');
  ONDEMAND_VIDEO = new IconType('ONDEMAND_VIDEO', 576, 'ondemand_video');
  OPACITY = new IconType('OPACITY', 577, 'opacity');
  OPEN_IN_BROWSER = new IconType('OPEN_IN_BROWSER', 578, 'open_in_browser');
  OPEN_IN_NEW = new IconType('OPEN_IN_NEW', 579, 'open_in_new');
  OPEN_WITH = new IconType('OPEN_WITH', 580, 'open_with');
  PAGES = new IconType('PAGES', 581, 'pages');
  PAGEVIEW = new IconType('PAGEVIEW', 582, 'pageview');
  PALETTE = new IconType('PALETTE', 583, 'palette');
  PAN_TOOL = new IconType('PAN_TOOL', 584, 'pan_tool');
  PANORAMA = new IconType('PANORAMA', 585, 'panorama');
  PANORAMA_FISH_EYE = new IconType('PANORAMA_FISH_EYE', 586, 'panorama_fish_eye');
  PANORAMA_HORIZONTAL = new IconType('PANORAMA_HORIZONTAL', 587, 'panorama_horizontal');
  PANORAMA_VERTICAL = new IconType('PANORAMA_VERTICAL', 588, 'panorama_vertical');
  PANORAMA_WIDE_ANGLE = new IconType('PANORAMA_WIDE_ANGLE', 589, 'panorama_wide_angle');
  PARTY_MODE = new IconType('PARTY_MODE', 590, 'party_mode');
  PAUSE = new IconType('PAUSE', 591, 'pause');
  PAUSE_CIRCLE_FILLED = new IconType('PAUSE_CIRCLE_FILLED', 592, 'pause_circle_filled');
  PAUSE_CIRCLE_OUTLINE = new IconType('PAUSE_CIRCLE_OUTLINE', 593, 'pause_circle_outline');
  PAYMENT = new IconType('PAYMENT', 594, 'payment');
  PEOPLE = new IconType('PEOPLE', 595, 'people');
  PEOPLE_OUTLINE = new IconType('PEOPLE_OUTLINE', 596, 'people_outline');
  PERM_CAMERA_MIC = new IconType('PERM_CAMERA_MIC', 597, 'perm_camera_mic');
  PERM_CONTACT_CALENDAR = new IconType('PERM_CONTACT_CALENDAR', 598, 'perm_contact_calendar');
  PERM_DATA_SETTING = new IconType('PERM_DATA_SETTING', 599, 'perm_data_setting');
  PERM_DEVICE_INFORMATION = new IconType('PERM_DEVICE_INFORMATION', 600, 'perm_device_information');
  PERM_IDENTITY = new IconType('PERM_IDENTITY', 601, 'perm_identity');
  PERM_MEDIA = new IconType('PERM_MEDIA', 602, 'perm_media');
  PERM_PHONE_MSG = new IconType('PERM_PHONE_MSG', 603, 'perm_phone_msg');
  PERM_SCAN_WIFI = new IconType('PERM_SCAN_WIFI', 604, 'perm_scan_wifi');
  PERSON = new IconType('PERSON', 605, 'person');
  PERSON_ADD = new IconType('PERSON_ADD', 606, 'person_add');
  PERSON_OUTLINE = new IconType('PERSON_OUTLINE', 607, 'person_outline');
  PERSON_PIN = new IconType('PERSON_PIN', 608, 'person_pin');
  PERSON_PIN_CIRCLE = new IconType('PERSON_PIN_CIRCLE', 609, 'person_pin_circle');
  PERSONAL_VIDEO = new IconType('PERSONAL_VIDEO', 610, 'personal_video');
  PETS = new IconType('PETS', 611, 'pets');
  PHONE = new IconType('PHONE', 612, 'phone');
  PHONE_ANDROID = new IconType('PHONE_ANDROID', 613, 'phone_android');
  PHONE_BLUETOOTH_SPEAKER = new IconType('PHONE_BLUETOOTH_SPEAKER', 614, 'phone_bluetooth_speaker');
  PHONE_FORWARDED = new IconType('PHONE_FORWARDED', 615, 'phone_forwarded');
  PHONE_IN_TALK = new IconType('PHONE_IN_TALK', 616, 'phone_in_talk');
  PHONE_IPHONE = new IconType('PHONE_IPHONE', 617, 'phone_iphone');
  PHONE_LOCKED = new IconType('PHONE_LOCKED', 618, 'phone_locked');
  PHONE_MISSED = new IconType('PHONE_MISSED', 619, 'phone_missed');
  PHONE_PAUSED = new IconType('PHONE_PAUSED', 620, 'phone_paused');
  PHONELINK = new IconType('PHONELINK', 621, 'phonelink');
  PHONELINK_ERASE = new IconType('PHONELINK_ERASE', 622, 'phonelink_erase');
  PHONELINK_LOCK = new IconType('PHONELINK_LOCK', 623, 'phonelink_lock');
  PHONELINK_OFF = new IconType('PHONELINK_OFF', 624, 'phonelink_off');
  PHONELINK_RING = new IconType('PHONELINK_RING', 625, 'phonelink_ring');
  PHONELINK_SETUP = new IconType('PHONELINK_SETUP', 626, 'phonelink_setup');
  PHOTO = new IconType('PHOTO', 627, 'photo');
  PHOTO_ALBUM = new IconType('PHOTO_ALBUM', 628, 'photo_album');
  PHOTO_CAMERA = new IconType('PHOTO_CAMERA', 629, 'photo_camera');
  PHOTO_FILTER = new IconType('PHOTO_FILTER', 630, 'photo_filter');
  PHOTO_LIBRARY = new IconType('PHOTO_LIBRARY', 631, 'photo_library');
  PHOTO_SIZE_SELECT_ACTUAL = new IconType('PHOTO_SIZE_SELECT_ACTUAL', 632, 'photo_size_select_actual');
  PHOTO_SIZE_SELECT_LARGE = new IconType('PHOTO_SIZE_SELECT_LARGE', 633, 'photo_size_select_large');
  PHOTO_SIZE_SELECT_SMALL = new IconType('PHOTO_SIZE_SELECT_SMALL', 634, 'photo_size_select_small');
  PICTURE_AS_PDF = new IconType('PICTURE_AS_PDF', 635, 'picture_as_pdf');
  PICTURE_IN_PICTURE = new IconType('PICTURE_IN_PICTURE', 636, 'picture_in_picture');
  PICTURE_IN_PICTURE_ALT = new IconType('PICTURE_IN_PICTURE_ALT', 637, 'picture_in_picture_alt');
  PIE_CHART = new IconType('PIE_CHART', 638, 'pie_chart');
  PIE_CHART_OUTLINED = new IconType('PIE_CHART_OUTLINED', 639, 'pie_chart_outlined');
  PIN_DROP = new IconType('PIN_DROP', 640, 'pin_drop');
  PLACE = new IconType('PLACE', 641, 'place');
  PLAY_ARROW = new IconType('PLAY_ARROW', 642, 'play_arrow');
  PLAY_CIRCLE_FILLED = new IconType('PLAY_CIRCLE_FILLED', 643, 'play_circle_filled');
  PLAY_CIRCLE_OUTLINE = new IconType('PLAY_CIRCLE_OUTLINE', 644, 'play_circle_outline');
  PLAY_FOR_WORK = new IconType('PLAY_FOR_WORK', 645, 'play_for_work');
  PLAYLIST_ADD = new IconType('PLAYLIST_ADD', 646, 'playlist_add');
  PLAYLIST_ADD_CHECK = new IconType('PLAYLIST_ADD_CHECK', 647, 'playlist_add_check');
  PLAYLIST_PLAY = new IconType('PLAYLIST_PLAY', 648, 'playlist_play');
  PLUS_ONE = new IconType('PLUS_ONE', 649, 'plus_one');
  POLL = new IconType('POLL', 650, 'poll');
  POLYMER = new IconType('POLYMER', 651, 'polymer');
  POOL = new IconType('POOL', 652, 'pool');
  PORTABLE_WIFI_OFF = new IconType('PORTABLE_WIFI_OFF', 653, 'portable_wifi_off');
  PORTRAIT = new IconType('PORTRAIT', 654, 'portrait');
  POWER = new IconType('POWER', 655, 'power');
  POWER_INPUT = new IconType('POWER_INPUT', 656, 'power_input');
  POWER_SETTINGS_NEW = new IconType('POWER_SETTINGS_NEW', 657, 'power_settings_new');
  PREGNANT_WOMAN = new IconType('PREGNANT_WOMAN', 658, 'pregnant_woman');
  PRESENT_TO_ALL = new IconType('PRESENT_TO_ALL', 659, 'present_to_all');
  PRINT = new IconType('PRINT', 660, 'print');
  PRIORITY_HIGH = new IconType('PRIORITY_HIGH', 661, 'priority_high');
  PUBLIC = new IconType('PUBLIC', 662, 'public');
  PUBLISH = new IconType('PUBLISH', 663, 'publish');
  QUERY_BUILDER = new IconType('QUERY_BUILDER', 664, 'query_builder');
  QUESTION_ANSWER = new IconType('QUESTION_ANSWER', 665, 'question_answer');
  QUEUE = new IconType('QUEUE', 666, 'queue');
  QUEUE_MUSIC = new IconType('QUEUE_MUSIC', 667, 'queue_music');
  QUEUE_PLAY_NEXT = new IconType('QUEUE_PLAY_NEXT', 668, 'queue_play_next');
  RADIO = new IconType('RADIO', 669, 'radio');
  RADIO_BUTTON_CHECKED = new IconType('RADIO_BUTTON_CHECKED', 670, 'radio_button_checked');
  RADIO_BUTTON_UNCHECKED = new IconType('RADIO_BUTTON_UNCHECKED', 671, 'radio_button_unchecked');
  RATE_REVIEW = new IconType('RATE_REVIEW', 672, 'rate_review');
  RECEIPT = new IconType('RECEIPT', 673, 'receipt');
  RECENT_ACTORS = new IconType('RECENT_ACTORS', 674, 'recent_actors');
  RECORD_VOICE_OVER = new IconType('RECORD_VOICE_OVER', 675, 'record_voice_over');
  REDEEM = new IconType('REDEEM', 676, 'redeem');
  REDO = new IconType('REDO', 677, 'redo');
  REFRESH = new IconType('REFRESH', 678, 'refresh');
  REMOVE = new IconType('REMOVE', 679, 'remove');
  REMOVE_CIRCLE = new IconType('REMOVE_CIRCLE', 680, 'remove_circle');
  REMOVE_CIRCLE_OUTLINE = new IconType('REMOVE_CIRCLE_OUTLINE', 681, 'remove_circle_outline');
  REMOVE_FROM_QUEUE = new IconType('REMOVE_FROM_QUEUE', 682, 'remove_from_queue');
  REMOVE_RED_EYE = new IconType('REMOVE_RED_EYE', 683, 'remove_red_eye');
  REMOVE_SHOPPING_CART = new IconType('REMOVE_SHOPPING_CART', 684, 'remove_shopping_cart');
  REORDER = new IconType('REORDER', 685, 'reorder');
  REPEAT = new IconType('REPEAT', 686, 'repeat');
  REPEAT_ONE = new IconType('REPEAT_ONE', 687, 'repeat_one');
  REPLAY = new IconType('REPLAY', 688, 'replay');
  REPLAY_10 = new IconType('REPLAY_10', 689, 'replay_10');
  REPLAY_30 = new IconType('REPLAY_30', 690, 'replay_30');
  REPLAY_5 = new IconType('REPLAY_5', 691, 'replay_5');
  REPLY = new IconType('REPLY', 692, 'reply');
  REPLY_ALL = new IconType('REPLY_ALL', 693, 'reply_all');
  REPORT = new IconType('REPORT', 694, 'report');
  REPORT_PROBLEM = new IconType('REPORT_PROBLEM', 695, 'report_problem');
  RESTAURANT = new IconType('RESTAURANT', 696, 'restaurant');
  RESTAURANT_MENU = new IconType('RESTAURANT_MENU', 697, 'restaurant_menu');
  RESTORE = new IconType('RESTORE', 698, 'restore');
  RESTORE_PAGE = new IconType('RESTORE_PAGE', 699, 'restore_page');
  RING_VOLUME = new IconType('RING_VOLUME', 700, 'ring_volume');
  ROOM = new IconType('ROOM', 701, 'room');
  ROOM_SERVICE = new IconType('ROOM_SERVICE', 702, 'room_service');
  ROTATE_90_DEGREES_CCW = new IconType('ROTATE_90_DEGREES_CCW', 703, 'rotate_90_degrees_ccw');
  ROTATE_LEFT = new IconType('ROTATE_LEFT', 704, 'rotate_left');
  ROTATE_RIGHT = new IconType('ROTATE_RIGHT', 705, 'rotate_right');
  ROUNDED_CORNER = new IconType('ROUNDED_CORNER', 706, 'rounded_corner');
  ROUTER = new IconType('ROUTER', 707, 'router');
  ROWING = new IconType('ROWING', 708, 'rowing');
  RSS_FEED = new IconType('RSS_FEED', 709, 'rss_feed');
  RV_HOOKUP = new IconType('RV_HOOKUP', 710, 'rv_hookup');
  SATELLITE = new IconType('SATELLITE', 711, 'satellite');
  SAVE = new IconType('SAVE', 712, 'save');
  SCANNER = new IconType('SCANNER', 713, 'scanner');
  SCHEDULE = new IconType('SCHEDULE', 714, 'schedule');
  SCHOOL = new IconType('SCHOOL', 715, 'school');
  SCREEN_LOCK_LANDSCAPE = new IconType('SCREEN_LOCK_LANDSCAPE', 716, 'screen_lock_landscape');
  SCREEN_LOCK_PORTRAIT = new IconType('SCREEN_LOCK_PORTRAIT', 717, 'screen_lock_portrait');
  SCREEN_LOCK_ROTATION = new IconType('SCREEN_LOCK_ROTATION', 718, 'screen_lock_rotation');
  SCREEN_ROTATION = new IconType('SCREEN_ROTATION', 719, 'screen_rotation');
  SCREEN_SHARE = new IconType('SCREEN_SHARE', 720, 'screen_share');
  SD_CARD = new IconType('SD_CARD', 721, 'sd_card');
  SD_STORAGE = new IconType('SD_STORAGE', 722, 'sd_storage');
  SEARCH = new IconType('SEARCH', 723, 'search');
  SECURITY = new IconType('SECURITY', 724, 'security');
  SELECT_ALL = new IconType('SELECT_ALL', 725, 'select_all');
  SEND = new IconType('SEND', 726, 'send');
  SENTIMENT_DISSATISFIED = new IconType('SENTIMENT_DISSATISFIED', 727, 'sentiment_dissatisfied');
  SENTIMENT_NEUTRAL = new IconType('SENTIMENT_NEUTRAL', 728, 'sentiment_neutral');
  SENTIMENT_SATISFIED = new IconType('SENTIMENT_SATISFIED', 729, 'sentiment_satisfied');
  SENTIMENT_VERY_DISSATISFIED = new IconType('SENTIMENT_VERY_DISSATISFIED', 730, 'sentiment_very_dissatisfied');
  SENTIMENT_VERY_SATISFIED = new IconType('SENTIMENT_VERY_SATISFIED', 731, 'sentiment_very_satisfied');
  SETTINGS = new IconType('SETTINGS', 732, 'settings');
  SETTINGS_APPLICATIONS = new IconType('SETTINGS_APPLICATIONS', 733, 'settings_applications');
  SETTINGS_BACKUP_RESTORE = new IconType('SETTINGS_BACKUP_RESTORE', 734, 'settings_backup_restore');
  SETTINGS_BLUETOOTH = new IconType('SETTINGS_BLUETOOTH', 735, 'settings_bluetooth');
  SETTINGS_BRIGHTNESS = new IconType('SETTINGS_BRIGHTNESS', 736, 'settings_brightness');
  SETTINGS_CELL = new IconType('SETTINGS_CELL', 737, 'settings_cell');
  SETTINGS_ETHERNET = new IconType('SETTINGS_ETHERNET', 738, 'settings_ethernet');
  SETTINGS_INPUT_ANTENNA = new IconType('SETTINGS_INPUT_ANTENNA', 739, 'settings_input_antenna');
  SETTINGS_INPUT_COMPONENT = new IconType('SETTINGS_INPUT_COMPONENT', 740, 'settings_input_component');
  SETTINGS_INPUT_COMPOSITE = new IconType('SETTINGS_INPUT_COMPOSITE', 741, 'settings_input_composite');
  SETTINGS_INPUT_HDMI = new IconType('SETTINGS_INPUT_HDMI', 742, 'settings_input_hdmi');
  SETTINGS_INPUT_SVIDEO = new IconType('SETTINGS_INPUT_SVIDEO', 743, 'settings_input_svideo');
  SETTINGS_OVERSCAN = new IconType('SETTINGS_OVERSCAN', 744, 'settings_overscan');
  SETTINGS_PHONE = new IconType('SETTINGS_PHONE', 745, 'settings_phone');
  SETTINGS_POWER = new IconType('SETTINGS_POWER', 746, 'settings_power');
  SETTINGS_REMOTE = new IconType('SETTINGS_REMOTE', 747, 'settings_remote');
  SETTINGS_SYSTEM_DAYDREAM = new IconType('SETTINGS_SYSTEM_DAYDREAM', 748, 'settings_system_daydream');
  SETTINGS_VOICE = new IconType('SETTINGS_VOICE', 749, 'settings_voice');
  SHARE = new IconType('SHARE', 750, 'share');
  SHOP = new IconType('SHOP', 751, 'shop');
  SHOP_TWO = new IconType('SHOP_TWO', 752, 'shop_two');
  SHOPPING_BASKET = new IconType('SHOPPING_BASKET', 753, 'shopping_basket');
  SHOPPING_CART = new IconType('SHOPPING_CART', 754, 'shopping_cart');
  SHORT_TEXT = new IconType('SHORT_TEXT', 755, 'short_text');
  SHOW_CHART = new IconType('SHOW_CHART', 756, 'show_chart');
  SHUFFLE = new IconType('SHUFFLE', 757, 'shuffle');
  SIGNAL_CELLULAR_4_BAR = new IconType('SIGNAL_CELLULAR_4_BAR', 758, 'signal_cellular_4_bar');
  SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR = new IconType('SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR', 759, 'signal_cellular_connected_no_internet_4_bar');
  SIGNAL_CELLULAR_NO_SIM = new IconType('SIGNAL_CELLULAR_NO_SIM', 760, 'signal_cellular_no_sim');
  SIGNAL_CELLULAR_NULL = new IconType('SIGNAL_CELLULAR_NULL', 761, 'signal_cellular_null');
  SIGNAL_CELLULAR_OFF = new IconType('SIGNAL_CELLULAR_OFF', 762, 'signal_cellular_off');
  SIGNAL_WIFI_4_BAR = new IconType('SIGNAL_WIFI_4_BAR', 763, 'signal_wifi_4_bar');
  SIGNAL_WIFI_4_BAR_LOCK = new IconType('SIGNAL_WIFI_4_BAR_LOCK', 764, 'signal_wifi_4_bar_lock');
  SIGNAL_WIFI_OFF = new IconType('SIGNAL_WIFI_OFF', 765, 'signal_wifi_off');
  SIM_CARD = new IconType('SIM_CARD', 766, 'sim_card');
  SIM_CARD_ALERT = new IconType('SIM_CARD_ALERT', 767, 'sim_card_alert');
  SKIP_NEXT = new IconType('SKIP_NEXT', 768, 'skip_next');
  SKIP_PREVIOUS = new IconType('SKIP_PREVIOUS', 769, 'skip_previous');
  SLIDESHOW = new IconType('SLIDESHOW', 770, 'slideshow');
  SLOW_MOTION_VIDEO = new IconType('SLOW_MOTION_VIDEO', 771, 'slow_motion_video');
  SMARTPHONE = new IconType('SMARTPHONE', 772, 'smartphone');
  SMOKE_FREE = new IconType('SMOKE_FREE', 773, 'smoke_free');
  SMOKING_ROOMS = new IconType('SMOKING_ROOMS', 774, 'smoking_rooms');
  SMS = new IconType('SMS', 775, 'sms');
  SMS_FAILED = new IconType('SMS_FAILED', 776, 'sms_failed');
  SNOOZE = new IconType('SNOOZE', 777, 'snooze');
  SORT = new IconType('SORT', 778, 'sort');
  SORT_BY_ALPHA = new IconType('SORT_BY_ALPHA', 779, 'sort_by_alpha');
  SPA = new IconType('SPA', 780, 'spa');
  SPACE_BAR = new IconType('SPACE_BAR', 781, 'space_bar');
  SPEAKER = new IconType('SPEAKER', 782, 'speaker');
  SPEAKER_GROUP = new IconType('SPEAKER_GROUP', 783, 'speaker_group');
  SPEAKER_NOTES = new IconType('SPEAKER_NOTES', 784, 'speaker_notes');
  SPEAKER_NOTES_OFF = new IconType('SPEAKER_NOTES_OFF', 785, 'speaker_notes_off');
  SPEAKER_PHONE = new IconType('SPEAKER_PHONE', 786, 'speaker_phone');
  SPELLCHECK = new IconType('SPELLCHECK', 787, 'spellcheck');
  STAR = new IconType('STAR', 788, 'star');
  STAR_BORDER = new IconType('STAR_BORDER', 789, 'star_border');
  STAR_HALF = new IconType('STAR_HALF', 790, 'star_half');
  STARS = new IconType('STARS', 791, 'stars');
  STAY_CURRENT_LANDSCAPE = new IconType('STAY_CURRENT_LANDSCAPE', 792, 'stay_current_landscape');
  STAY_CURRENT_PORTRAIT = new IconType('STAY_CURRENT_PORTRAIT', 793, 'stay_current_portrait');
  STAY_PRIMARY_LANDSCAPE = new IconType('STAY_PRIMARY_LANDSCAPE', 794, 'stay_primary_landscape');
  STAY_PRIMARY_PORTRAIT = new IconType('STAY_PRIMARY_PORTRAIT', 795, 'stay_primary_portrait');
  STOP = new IconType('STOP', 796, 'stop');
  STOP_SCREEN_SHARE = new IconType('STOP_SCREEN_SHARE', 797, 'stop_screen_share');
  STORAGE = new IconType('STORAGE', 798, 'storage');
  STORE = new IconType('STORE', 799, 'store');
  STORE_MALL_DIRECTORY = new IconType('STORE_MALL_DIRECTORY', 800, 'store_mall_directory');
  STRAIGHTEN = new IconType('STRAIGHTEN', 801, 'straighten');
  STREETVIEW = new IconType('STREETVIEW', 802, 'streetview');
  STRIKETHROUGH_S = new IconType('STRIKETHROUGH_S', 803, 'strikethrough_s');
  STYLE = new IconType('STYLE', 804, 'style');
  SUBDIRECTORY_ARROW_LEFT = new IconType('SUBDIRECTORY_ARROW_LEFT', 805, 'subdirectory_arrow_left');
  SUBDIRECTORY_ARROW_RIGHT = new IconType('SUBDIRECTORY_ARROW_RIGHT', 806, 'subdirectory_arrow_right');
  SUBJECT = new IconType('SUBJECT', 807, 'subject');
  SUBSCRIPTIONS = new IconType('SUBSCRIPTIONS', 808, 'subscriptions');
  SUBTITLES = new IconType('SUBTITLES', 809, 'subtitles');
  SUBWAY = new IconType('SUBWAY', 810, 'subway');
  SUPERVISOR_ACCOUNT = new IconType('SUPERVISOR_ACCOUNT', 811, 'supervisor_account');
  SURROUND_SOUND = new IconType('SURROUND_SOUND', 812, 'surround_sound');
  SWAP_CALLS = new IconType('SWAP_CALLS', 813, 'swap_calls');
  SWAP_HORIZ = new IconType('SWAP_HORIZ', 814, 'swap_horiz');
  SWAP_VERT = new IconType('SWAP_VERT', 815, 'swap_vert');
  SWAP_VERTICAL_CIRCLE = new IconType('SWAP_VERTICAL_CIRCLE', 816, 'swap_vertical_circle');
  SWITCH_CAMERA = new IconType('SWITCH_CAMERA', 817, 'switch_camera');
  SWITCH_VIDEO = new IconType('SWITCH_VIDEO', 818, 'switch_video');
  SYNC = new IconType('SYNC', 819, 'sync');
  SYNC_DISABLED = new IconType('SYNC_DISABLED', 820, 'sync_disabled');
  SYNC_PROBLEM = new IconType('SYNC_PROBLEM', 821, 'sync_problem');
  SYSTEM_UPDATE = new IconType('SYSTEM_UPDATE', 822, 'system_update');
  SYSTEM_UPDATE_ALT = new IconType('SYSTEM_UPDATE_ALT', 823, 'system_update_alt');
  TAB = new IconType('TAB', 824, 'tab');
  TAB_UNSELECTED = new IconType('TAB_UNSELECTED', 825, 'tab_unselected');
  TABLET = new IconType('TABLET', 826, 'tablet');
  TABLET_ANDROID = new IconType('TABLET_ANDROID', 827, 'tablet_android');
  TABLET_MAC = new IconType('TABLET_MAC', 828, 'tablet_mac');
  TAG_FACES = new IconType('TAG_FACES', 829, 'tag_faces');
  TAP_AND_PLAY = new IconType('TAP_AND_PLAY', 830, 'tap_and_play');
  TERRAIN = new IconType('TERRAIN', 831, 'terrain');
  TEXT_FIELDS = new IconType('TEXT_FIELDS', 832, 'text_fields');
  TEXT_FORMAT = new IconType('TEXT_FORMAT', 833, 'text_format');
  TEXTSMS = new IconType('TEXTSMS', 834, 'textsms');
  TEXTURE = new IconType('TEXTURE', 835, 'texture');
  THEATERS = new IconType('THEATERS', 836, 'theaters');
  THUMB_DOWN = new IconType('THUMB_DOWN', 837, 'thumb_down');
  THUMB_UP = new IconType('THUMB_UP', 838, 'thumb_up');
  THUMBS_UP_DOWN = new IconType('THUMBS_UP_DOWN', 839, 'thumbs_up_down');
  TIME_TO_LEAVE = new IconType('TIME_TO_LEAVE', 840, 'time_to_leave');
  TIMELAPSE = new IconType('TIMELAPSE', 841, 'timelapse');
  TIMELINE = new IconType('TIMELINE', 842, 'timeline');
  TIMER = new IconType('TIMER', 843, 'timer');
  TIMER_10 = new IconType('TIMER_10', 844, 'timer_10');
  TIMER_3 = new IconType('TIMER_3', 845, 'timer_3');
  TIMER_OFF = new IconType('TIMER_OFF', 846, 'timer_off');
  TITLE = new IconType('TITLE', 847, 'title');
  TOC = new IconType('TOC', 848, 'toc');
  TODAY = new IconType('TODAY', 849, 'today');
  TOLL = new IconType('TOLL', 850, 'toll');
  TONALITY = new IconType('TONALITY', 851, 'tonality');
  TOUCH_APP = new IconType('TOUCH_APP', 852, 'touch_app');
  TOYS = new IconType('TOYS', 853, 'toys');
  TRACK_CHANGES = new IconType('TRACK_CHANGES', 854, 'track_changes');
  TRAFFIC = new IconType('TRAFFIC', 855, 'traffic');
  TRAIN = new IconType('TRAIN', 856, 'train');
  TRAM = new IconType('TRAM', 857, 'tram');
  TRANSFER_WITHIN_A_STATION = new IconType('TRANSFER_WITHIN_A_STATION', 858, 'transfer_within_a_station');
  TRANSFORM = new IconType('TRANSFORM', 859, 'transform');
  TRANSLATE = new IconType('TRANSLATE', 860, 'translate');
  TRENDING_DOWN = new IconType('TRENDING_DOWN', 861, 'trending_down');
  TRENDING_FLAT = new IconType('TRENDING_FLAT', 862, 'trending_flat');
  TRENDING_UP = new IconType('TRENDING_UP', 863, 'trending_up');
  TUNE = new IconType('TUNE', 864, 'tune');
  TURNED_IN = new IconType('TURNED_IN', 865, 'turned_in');
  TURNED_IN_NOT = new IconType('TURNED_IN_NOT', 866, 'turned_in_not');
  TV = new IconType('TV', 867, 'tv');
  UNARCHIVE = new IconType('UNARCHIVE', 868, 'unarchive');
  UNDO = new IconType('UNDO', 869, 'undo');
  UNFOLD_LESS = new IconType('UNFOLD_LESS', 870, 'unfold_less');
  UNFOLD_MORE = new IconType('UNFOLD_MORE', 871, 'unfold_more');
  UPDATE = new IconType('UPDATE', 872, 'update');
  USB = new IconType('USB', 873, 'usb');
  VERIFIED_USER = new IconType('VERIFIED_USER', 874, 'verified_user');
  VERTICAL_ALIGN_BOTTOM = new IconType('VERTICAL_ALIGN_BOTTOM', 875, 'vertical_align_bottom');
  VERTICAL_ALIGN_CENTER = new IconType('VERTICAL_ALIGN_CENTER', 876, 'vertical_align_center');
  VERTICAL_ALIGN_TOP = new IconType('VERTICAL_ALIGN_TOP', 877, 'vertical_align_top');
  VIBRATION = new IconType('VIBRATION', 878, 'vibration');
  VIDEO_CALL = new IconType('VIDEO_CALL', 879, 'video_call');
  VIDEO_LABEL = new IconType('VIDEO_LABEL', 880, 'video_label');
  VIDEO_LIBRARY = new IconType('VIDEO_LIBRARY', 881, 'video_library');
  VIDEOCAM = new IconType('VIDEOCAM', 882, 'videocam');
  VIDEOCAM_OFF = new IconType('VIDEOCAM_OFF', 883, 'videocam_off');
  VIDEOGAME_ASSET = new IconType('VIDEOGAME_ASSET', 884, 'videogame_asset');
  VIEW_AGENDA = new IconType('VIEW_AGENDA', 885, 'view_agenda');
  VIEW_ARRAY = new IconType('VIEW_ARRAY', 886, 'view_array');
  VIEW_CAROUSEL = new IconType('VIEW_CAROUSEL', 887, 'view_carousel');
  VIEW_COLUMN = new IconType('VIEW_COLUMN', 888, 'view_column');
  VIEW_COMFY = new IconType('VIEW_COMFY', 889, 'view_comfy');
  VIEW_COMPACT = new IconType('VIEW_COMPACT', 890, 'view_compact');
  VIEW_DAY = new IconType('VIEW_DAY', 891, 'view_day');
  VIEW_HEADLINE = new IconType('VIEW_HEADLINE', 892, 'view_headline');
  VIEW_LIST = new IconType('VIEW_LIST', 893, 'view_list');
  VIEW_MODULE = new IconType('VIEW_MODULE', 894, 'view_module');
  VIEW_QUILT = new IconType('VIEW_QUILT', 895, 'view_quilt');
  VIEW_STREAM = new IconType('VIEW_STREAM', 896, 'view_stream');
  VIEW_WEEK = new IconType('VIEW_WEEK', 897, 'view_week');
  VIGNETTE = new IconType('VIGNETTE', 898, 'vignette');
  VISIBILITY = new IconType('VISIBILITY', 899, 'visibility');
  VISIBILITY_OFF = new IconType('VISIBILITY_OFF', 900, 'visibility_off');
  VOICE_CHAT = new IconType('VOICE_CHAT', 901, 'voice_chat');
  VOICEMAIL = new IconType('VOICEMAIL', 902, 'voicemail');
  VOLUME_DOWN = new IconType('VOLUME_DOWN', 903, 'volume_down');
  VOLUME_MUTE = new IconType('VOLUME_MUTE', 904, 'volume_mute');
  VOLUME_OFF = new IconType('VOLUME_OFF', 905, 'volume_off');
  VOLUME_UP = new IconType('VOLUME_UP', 906, 'volume_up');
  VPN_KEY = new IconType('VPN_KEY', 907, 'vpn_key');
  VPN_LOCK = new IconType('VPN_LOCK', 908, 'vpn_lock');
  WALLPAPER = new IconType('WALLPAPER', 909, 'wallpaper');
  WARNING = new IconType('WARNING', 910, 'warning');
  WATCH = new IconType('WATCH', 911, 'watch');
  WATCH_LATER = new IconType('WATCH_LATER', 912, 'watch_later');
  WB_AUTO = new IconType('WB_AUTO', 913, 'wb_auto');
  WB_CLOUDY = new IconType('WB_CLOUDY', 914, 'wb_cloudy');
  WB_INCANDESCENT = new IconType('WB_INCANDESCENT', 915, 'wb_incandescent');
  WB_IRIDESCENT = new IconType('WB_IRIDESCENT', 916, 'wb_iridescent');
  WB_SUNNY = new IconType('WB_SUNNY', 917, 'wb_sunny');
  WC = new IconType('WC', 918, 'wc');
  WEB = new IconType('WEB', 919, 'web');
  WEB_ASSET = new IconType('WEB_ASSET', 920, 'web_asset');
  WEEKEND = new IconType('WEEKEND', 921, 'weekend');
  WHATSHOT = new IconType('WHATSHOT', 922, 'whatshot');
  WIDGETS = new IconType('WIDGETS', 923, 'widgets');
  WIFI = new IconType('WIFI', 924, 'wifi');
  WIFI_LOCK = new IconType('WIFI_LOCK', 925, 'wifi_lock');
  WIFI_TETHERING = new IconType('WIFI_TETHERING', 926, 'wifi_tethering');
  WORK = new IconType('WORK', 927, 'work');
  WRAP_TEXT = new IconType('WRAP_TEXT', 928, 'wrap_text');
  YOUTUBE_SEARCHED_FOR = new IconType('YOUTUBE_SEARCHED_FOR', 929, 'youtube_searched_for');
  ZOOM_IN = new IconType('ZOOM_IN', 930, 'zoom_in');
  ZOOM_OUT = new IconType('ZOOM_OUT', 931, 'zoom_out');
  ZOOM_OUT_MAP = new IconType('ZOOM_OUT_MAP', 932, 'zoom_out_map');
}

function IconType(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_16(){
  $clinit_IconType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_IconType_2_classLit, 1), $intern_2, 3, 0, [DEFAULT_3, ROTATION_3D, AC_UNIT, ACCESS_ALARM, ACCESS_ALARMS, ACCESS_TIME, ACCESSIBILITY, ACCESSIBLE, ACCOUNT_BALANCE, ACCOUNT_BALANCE_WALLET, ACCOUNT_BOX, ACCOUNT_CIRCLE, ADB, ADD, ADD_A_PHOTO, ADD_ALARM, ADD_ALERT, ADD_BOX, ADD_CIRCLE, ADD_CIRCLE_OUTLINE, ADD_LOCATION, ADD_SHOPPING_CART, ADD_TO_PHOTOS, ADD_TO_QUEUE, ADJUST, AIRLINE_SEAT_FLAT, AIRLINE_SEAT_FLAT_ANGLED, AIRLINE_SEAT_INDIVIDUAL_SUITE, AIRLINE_SEAT_LEGROOM_EXTRA, AIRLINE_SEAT_LEGROOM_NORMAL, AIRLINE_SEAT_LEGROOM_REDUCED, AIRLINE_SEAT_RECLINE_EXTRA, AIRLINE_SEAT_RECLINE_NORMAL, AIRPLANEMODE_ACTIVE, AIRPLANEMODE_INACTIVE, AIRPLAY, AIRPORT_SHUTTLE, ALARM, ALARM_ADD, ALARM_OFF, ALARM_ON, ALBUM, ALL_INCLUSIVE, ALL_OUT, ANDROID, ANNOUNCEMENT, APPS, ARCHIVE, ARROW_BACK, ARROW_DOWNWARD, ARROW_DROP_DOWN, ARROW_DROP_DOWN_CIRCLE, ARROW_DROP_UP, ARROW_FORWARD, ARROW_UPWARD, ART_TRACK, ASPECT_RATIO, ASSESSMENT, ASSIGNMENT, ASSIGNMENT_IND, ASSIGNMENT_LATE, ASSIGNMENT_RETURN, ASSIGNMENT_RETURNED, ASSIGNMENT_TURNED_IN, ASSISTANT, ASSISTANT_PHOTO, ATTACH_FILE, ATTACH_MONEY, ATTACHMENT, AUDIOTRACK, AUTORENEW, AV_TIMER, BACKSPACE, BACKUP, BATTERY_ALERT, BATTERY_CHARGING_FULL, BATTERY_FULL, BATTERY_STD, BATTERY_UNKNOWN, BEACH_ACCESS, BEENHERE, BLOCK_0, BLUETOOTH, BLUETOOTH_AUDIO, BLUETOOTH_CONNECTED, BLUETOOTH_DISABLED, BLUETOOTH_SEARCHING, BLUR_CIRCULAR, BLUR_LINEAR, BLUR_OFF, BLUR_ON, BOOK, BOOKMARK, BOOKMARK_BORDER, BORDER_ALL, BORDER_BOTTOM, BORDER_CLEAR, BORDER_COLOR, BORDER_HORIZONTAL, BORDER_INNER, BORDER_LEFT, BORDER_OUTER, BORDER_RIGHT, BORDER_STYLE, BORDER_TOP, BORDER_VERTICAL, BRANDING_WATERMARK, BRIGHTNESS_1, BRIGHTNESS_2, BRIGHTNESS_3, BRIGHTNESS_4, BRIGHTNESS_5, BRIGHTNESS_6, BRIGHTNESS_7, BRIGHTNESS_AUTO, BRIGHTNESS_HIGH, BRIGHTNESS_LOW, BRIGHTNESS_MEDIUM, BROKEN_IMAGE, BRUSH, BUBBLE_CHART, BUG_REPORT, BUILD, BURST_MODE, BUSINESS, BUSINESS_CENTER, CACHED, CAKE, CALL, CALL_END, CALL_MADE, CALL_MERGE, CALL_MISSED, CALL_MISSED_OUTGOING, CALL_RECEIVED, CALL_SPLIT, CALL_TO_ACTION, CAMERA, CAMERA_ALT, CAMERA_ENHANCE, CAMERA_FRONT, CAMERA_REAR, CAMERA_ROLL, CANCEL, CARD_GIFTCARD, CARD_MEMBERSHIP, CARD_TRAVEL, CASINO, CAST, CAST_CONNECTED, CENTER_FOCUS_STRONG, CENTER_FOCUS_WEAK, CHANGE_HISTORY, CHAT, CHAT_BUBBLE, CHAT_BUBBLE_OUTLINE, CHECK, CHECK_BOX, CHECK_BOX_OUTLINE_BLANK, CHECK_CIRCLE, CHEVRON_LEFT, CHEVRON_RIGHT, CHILD_CARE, CHILD_FRIENDLY, CHROME_READER_MODE, CLASS, CLEAR, CLEAR_ALL, CLOSE, CLOSED_CAPTION, CLOUD, CLOUD_CIRCLE, CLOUD_DONE, CLOUD_DOWNLOAD, CLOUD_OFF, CLOUD_QUEUE, CLOUD_UPLOAD, CODE, COLLECTIONS, COLLECTIONS_BOOKMARK, COLOR_LENS, COLORIZE, COMMENT, COMPARE, COMPARE_ARROWS, COMPUTER, CONFIRMATION_NUMBER, CONTACT_MAIL, CONTACT_PHONE, CONTACTS, CONTENT_COPY, CONTENT_CUT, CONTENT_PASTE, CONTROL_POINT, CONTROL_POINT_DUPLICATE, COPYRIGHT, CREATE, CREATE_NEW_FOLDER, CREDIT_CARD, CROP, CROP_16_9, CROP_3_2, CROP_5_4, CROP_7_5, CROP_DIN, CROP_FREE, CROP_LANDSCAPE, CROP_ORIGINAL, CROP_PORTRAIT, CROP_ROTATE, CROP_SQUARE, DASHBOARD, DATA_USAGE, DATE_RANGE, DEHAZE, DELETE, DELETE_FOREVER, DELETE_SWEEP, DESCRIPTION, DESKTOP_MAC, DESKTOP_WINDOWS, DETAILS, DEVELOPER_BOARD, DEVELOPER_MODE, DEVICE_HUB, DEVICES, DEVICES_OTHER, DIALER_SIP, DIALPAD, DIRECTIONS, DIRECTIONS_BIKE, DIRECTIONS_BOAT, DIRECTIONS_BUS, DIRECTIONS_CAR, DIRECTIONS_RAILWAY, DIRECTIONS_RUN, DIRECTIONS_SUBWAY, DIRECTIONS_TRANSIT, DIRECTIONS_WALK, DISC_FULL, DNS, DO_NOT_DISTURB, DO_NOT_DISTURB_ALT, DO_NOT_DISTURB_OFF, DO_NOT_DISTURB_ON, DOCK, DOMAIN, DONE, DONE_ALL, DONUT_LARGE, DONUT_SMALL, DRAFTS, DRAG_HANDLE, DRIVE_ETA, DVR, EDIT, EDIT_LOCATION, EJECT, EMAIL, ENHANCED_ENCRYPTION, EQUALIZER, ERROR, ERROR_OUTLINE, EURO_SYMBOL, EV_STATION, EVENT, EVENT_AVAILABLE, EVENT_BUSY, EVENT_NOTE, EVENT_SEAT, EXIT_TO_APP, EXPAND_LESS, EXPAND_MORE, EXPLICIT, EXPLORE, EXPOSURE, EXPOSURE_NEG_1, EXPOSURE_NEG_2, EXPOSURE_PLUS_1, EXPOSURE_PLUS_2, EXPOSURE_ZERO, EXTENSION, FACE, FAST_FORWARD, FAST_REWIND, FAVORITE, FAVORITE_BORDER, FEATURED_PLAY_LIST, FEATURED_VIDEO, FEEDBACK, FIBER_DVR, FIBER_MANUAL_RECORD, FIBER_NEW, FIBER_PIN, FIBER_SMART_RECORD, FILE_DOWNLOAD, FILE_UPLOAD, FILTER, FILTER_1, FILTER_2, FILTER_3, FILTER_4, FILTER_5, FILTER_6, FILTER_7, FILTER_8, FILTER_9, FILTER_9_PLUS, FILTER_B_AND_W, FILTER_CENTER_FOCUS, FILTER_DRAMA, FILTER_FRAMES, FILTER_HDR, FILTER_LIST, FILTER_NONE, FILTER_TILT_SHIFT, FILTER_VINTAGE, FIND_IN_PAGE, FIND_REPLACE, FINGERPRINT, FIRST_PAGE, FITNESS_CENTER, FLAG, FLARE, FLASH_AUTO, FLASH_OFF, FLASH_ON, FLIGHT, FLIGHT_LAND, FLIGHT_TAKEOFF, FLIP, FLIP_TO_BACK, FLIP_TO_FRONT, FOLDER, FOLDER_OPEN, FOLDER_SHARED, FOLDER_SPECIAL, FONT_DOWNLOAD, FORMAT_ALIGN_CENTER, FORMAT_ALIGN_JUSTIFY, FORMAT_ALIGN_LEFT, FORMAT_ALIGN_RIGHT, FORMAT_BOLD, FORMAT_CLEAR, FORMAT_COLOR_FILL, FORMAT_COLOR_RESET, FORMAT_COLOR_TEXT, FORMAT_INDENT_DECREASE, FORMAT_INDENT_INCREASE, FORMAT_ITALIC, FORMAT_LINE_SPACING, FORMAT_LIST_BULLETED, FORMAT_LIST_NUMBERED, FORMAT_PAINT, FORMAT_QUOTE, FORMAT_SHAPES, FORMAT_SIZE, FORMAT_STRIKETHROUGH, FORMAT_TEXTDIRECTION_L_TO_R, FORMAT_TEXTDIRECTION_R_TO_L, FORMAT_UNDERLINED, FORUM, FORWARD, FORWARD_10, FORWARD_30, FORWARD_5, FREE_BREAKFAST, FULLSCREEN, FULLSCREEN_EXIT, FUNCTIONS, G_TRANSLATE, GAMEPAD, GAMES, GAVEL, GESTURE, GET_APP, GIF, GOLF_COURSE, GPS_FIXED, GPS_NOT_FIXED, GPS_OFF, GRADE, GRADIENT, GRAIN, GRAPHIC_EQ, GRID_OFF, GRID_ON, GROUP, GROUP_ADD, GROUP_WORK, HD, HDR_OFF, HDR_ON, HDR_STRONG, HDR_WEAK, HEADSET, HEADSET_MIC, HEALING, HEARING, HELP_0, HELP_OUTLINE, HIGH_QUALITY, HIGHLIGHT, HIGHLIGHT_OFF, HISTORY, HOME, HOT_TUB, HOTEL, HOURGLASS_EMPTY, HOURGLASS_FULL, HTTP, HTTPS, IMAGE, IMAGE_ASPECT_RATIO, IMPORT_CONTACTS, IMPORT_EXPORT, IMPORTANT_DEVICES, INBOX, INDETERMINATE_CHECK_BOX, INFO, INFO_OUTLINE, INPUT, INSERT_CHART, INSERT_COMMENT, INSERT_DRIVE_FILE, INSERT_EMOTICON, INSERT_INVITATION, INSERT_LINK, INSERT_PHOTO, INVERT_COLORS, INVERT_COLORS_OFF, ISO, KEYBOARD, KEYBOARD_ARROW_DOWN, KEYBOARD_ARROW_LEFT, KEYBOARD_ARROW_RIGHT, KEYBOARD_ARROW_UP, KEYBOARD_BACKSPACE, KEYBOARD_CAPSLOCK, KEYBOARD_HIDE, KEYBOARD_RETURN, KEYBOARD_TAB, KEYBOARD_VOICE, KITCHEN, LABEL, LABEL_OUTLINE, LANDSCAPE, LANGUAGE, LAPTOP, LAPTOP_CHROMEBOOK, LAPTOP_MAC, LAPTOP_WINDOWS, LAST_PAGE, LAUNCH, LAYERS, LAYERS_CLEAR, LEAK_ADD, LEAK_REMOVE, LENS, LIBRARY_ADD, LIBRARY_BOOKS, LIBRARY_MUSIC, LIGHTBULB_OUTLINE, LINE_STYLE, LINE_WEIGHT, LINEAR_SCALE, LINK_0, LINKED_CAMERA, LIST, LIVE_HELP, LIVE_TV, LOCAL_ACTIVITY, LOCAL_AIRPORT, LOCAL_ATM, LOCAL_BAR, LOCAL_CAFE, LOCAL_CAR_WASH, LOCAL_CONVENIENCE_STORE, LOCAL_DINING, LOCAL_DRINK, LOCAL_FLORIST, LOCAL_GAS_STATION, LOCAL_GROCERY_STORE, LOCAL_HOSPITAL, LOCAL_HOTEL, LOCAL_LAUNDRY_SERVICE, LOCAL_LIBRARY, LOCAL_MALL, LOCAL_MOVIES, LOCAL_OFFER, LOCAL_PARKING, LOCAL_PHARMACY, LOCAL_PHONE, LOCAL_PIZZA, LOCAL_PLAY, LOCAL_POST_OFFICE, LOCAL_PRINTSHOP, LOCAL_SEE, LOCAL_SHIPPING, LOCAL_TAXI, LOCATION_CITY, LOCATION_DISABLED, LOCATION_OFF, LOCATION_ON, LOCATION_SEARCHING, LOCK, LOCK_OPEN, LOCK_OUTLINE, LOOKS, LOOKS_3, LOOKS_4, LOOKS_5, LOOKS_6, LOOKS_ONE, LOOKS_TWO, LOOP, LOUPE, LOW_PRIORITY, LOYALTY, MAIL, MAIL_OUTLINE, MAP, MARKUNREAD, MARKUNREAD_MAILBOX, MEMORY, MENU, MERGE_TYPE, MESSAGE, MIC, MIC_NONE, MIC_OFF, MMS, MODE_COMMENT, MODE_EDIT, MONETIZATION_ON, MONEY_OFF, MONOCHROME_PHOTOS, MOOD, MOOD_BAD, MORE, MORE_HORIZ, MORE_VERT, MOTORCYCLE, MOUSE, MOVE_TO_INBOX, MOVIE, MOVIE_CREATION, MOVIE_FILTER, MULTILINE_CHART, MUSIC_NOTE, MUSIC_VIDEO, MY_LOCATION, NATURE, NATURE_PEOPLE, NAVIGATE_BEFORE, NAVIGATE_NEXT, NAVIGATION_0, NEAR_ME, NETWORK_CELL, NETWORK_CHECK, NETWORK_LOCKED, NETWORK_WIFI, NEW_RELEASES, NEXT_WEEK, NFC, NO_ENCRYPTION, NO_SIM, NOT_INTERESTED, NOTE, NOTE_ADD, NOTIFICATIONS, NOTIFICATIONS_ACTIVE, NOTIFICATIONS_NONE, NOTIFICATIONS_OFF, NOTIFICATIONS_PAUSED, OFFLINE_PIN, ONDEMAND_VIDEO, OPACITY, OPEN_IN_BROWSER, OPEN_IN_NEW, OPEN_WITH, PAGES, PAGEVIEW, PALETTE, PAN_TOOL, PANORAMA, PANORAMA_FISH_EYE, PANORAMA_HORIZONTAL, PANORAMA_VERTICAL, PANORAMA_WIDE_ANGLE, PARTY_MODE, PAUSE, PAUSE_CIRCLE_FILLED, PAUSE_CIRCLE_OUTLINE, PAYMENT, PEOPLE, PEOPLE_OUTLINE, PERM_CAMERA_MIC, PERM_CONTACT_CALENDAR, PERM_DATA_SETTING, PERM_DEVICE_INFORMATION, PERM_IDENTITY, PERM_MEDIA, PERM_PHONE_MSG, PERM_SCAN_WIFI, PERSON, PERSON_ADD, PERSON_OUTLINE, PERSON_PIN, PERSON_PIN_CIRCLE, PERSONAL_VIDEO, PETS, PHONE, PHONE_ANDROID, PHONE_BLUETOOTH_SPEAKER, PHONE_FORWARDED, PHONE_IN_TALK, PHONE_IPHONE, PHONE_LOCKED, PHONE_MISSED, PHONE_PAUSED, PHONELINK, PHONELINK_ERASE, PHONELINK_LOCK, PHONELINK_OFF, PHONELINK_RING, PHONELINK_SETUP, PHOTO, PHOTO_ALBUM, PHOTO_CAMERA, PHOTO_FILTER, PHOTO_LIBRARY, PHOTO_SIZE_SELECT_ACTUAL, PHOTO_SIZE_SELECT_LARGE, PHOTO_SIZE_SELECT_SMALL, PICTURE_AS_PDF, PICTURE_IN_PICTURE, PICTURE_IN_PICTURE_ALT, PIE_CHART, PIE_CHART_OUTLINED, PIN_DROP, PLACE, PLAY_ARROW, PLAY_CIRCLE_FILLED, PLAY_CIRCLE_OUTLINE, PLAY_FOR_WORK, PLAYLIST_ADD, PLAYLIST_ADD_CHECK, PLAYLIST_PLAY, PLUS_ONE, POLL, POLYMER, POOL, PORTABLE_WIFI_OFF, PORTRAIT, POWER, POWER_INPUT, POWER_SETTINGS_NEW, PREGNANT_WOMAN, PRESENT_TO_ALL, PRINT, PRIORITY_HIGH, PUBLIC, PUBLISH, QUERY_BUILDER, QUESTION_ANSWER, QUEUE, QUEUE_MUSIC, QUEUE_PLAY_NEXT, RADIO, RADIO_BUTTON_CHECKED, RADIO_BUTTON_UNCHECKED, RATE_REVIEW, RECEIPT, RECENT_ACTORS, RECORD_VOICE_OVER, REDEEM, REDO, REFRESH, REMOVE, REMOVE_CIRCLE, REMOVE_CIRCLE_OUTLINE, REMOVE_FROM_QUEUE, REMOVE_RED_EYE, REMOVE_SHOPPING_CART, REORDER, REPEAT, REPEAT_ONE, REPLAY, REPLAY_10, REPLAY_30, REPLAY_5, REPLY, REPLY_ALL, REPORT, REPORT_PROBLEM, RESTAURANT, RESTAURANT_MENU, RESTORE, RESTORE_PAGE, RING_VOLUME, ROOM, ROOM_SERVICE, ROTATE_90_DEGREES_CCW, ROTATE_LEFT, ROTATE_RIGHT, ROUNDED_CORNER, ROUTER, ROWING, RSS_FEED, RV_HOOKUP, SATELLITE, SAVE, SCANNER, SCHEDULE, SCHOOL, SCREEN_LOCK_LANDSCAPE, SCREEN_LOCK_PORTRAIT, SCREEN_LOCK_ROTATION, SCREEN_ROTATION, SCREEN_SHARE, SD_CARD, SD_STORAGE, SEARCH, SECURITY, SELECT_ALL, SEND, SENTIMENT_DISSATISFIED, SENTIMENT_NEUTRAL, SENTIMENT_SATISFIED, SENTIMENT_VERY_DISSATISFIED, SENTIMENT_VERY_SATISFIED, SETTINGS, SETTINGS_APPLICATIONS, SETTINGS_BACKUP_RESTORE, SETTINGS_BLUETOOTH, SETTINGS_BRIGHTNESS, SETTINGS_CELL, SETTINGS_ETHERNET, SETTINGS_INPUT_ANTENNA, SETTINGS_INPUT_COMPONENT, SETTINGS_INPUT_COMPOSITE, SETTINGS_INPUT_HDMI, SETTINGS_INPUT_SVIDEO, SETTINGS_OVERSCAN, SETTINGS_PHONE, SETTINGS_POWER, SETTINGS_REMOTE, SETTINGS_SYSTEM_DAYDREAM, SETTINGS_VOICE, SHARE, SHOP, SHOP_TWO, SHOPPING_BASKET, SHOPPING_CART, SHORT_TEXT, SHOW_CHART, SHUFFLE, SIGNAL_CELLULAR_4_BAR, SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR, SIGNAL_CELLULAR_NO_SIM, SIGNAL_CELLULAR_NULL, SIGNAL_CELLULAR_OFF, SIGNAL_WIFI_4_BAR, SIGNAL_WIFI_4_BAR_LOCK, SIGNAL_WIFI_OFF, SIM_CARD, SIM_CARD_ALERT, SKIP_NEXT, SKIP_PREVIOUS, SLIDESHOW, SLOW_MOTION_VIDEO, SMARTPHONE, SMOKE_FREE, SMOKING_ROOMS, SMS, SMS_FAILED, SNOOZE, SORT, SORT_BY_ALPHA, SPA, SPACE_BAR, SPEAKER, SPEAKER_GROUP, SPEAKER_NOTES, SPEAKER_NOTES_OFF, SPEAKER_PHONE, SPELLCHECK, STAR, STAR_BORDER, STAR_HALF, STARS, STAY_CURRENT_LANDSCAPE, STAY_CURRENT_PORTRAIT, STAY_PRIMARY_LANDSCAPE, STAY_PRIMARY_PORTRAIT, STOP, STOP_SCREEN_SHARE, STORAGE, STORE, STORE_MALL_DIRECTORY, STRAIGHTEN, STREETVIEW, STRIKETHROUGH_S, STYLE, SUBDIRECTORY_ARROW_LEFT, SUBDIRECTORY_ARROW_RIGHT, SUBJECT, SUBSCRIPTIONS, SUBTITLES, SUBWAY, SUPERVISOR_ACCOUNT, SURROUND_SOUND, SWAP_CALLS, SWAP_HORIZ, SWAP_VERT, SWAP_VERTICAL_CIRCLE, SWITCH_CAMERA, SWITCH_VIDEO, SYNC, SYNC_DISABLED, SYNC_PROBLEM, SYSTEM_UPDATE, SYSTEM_UPDATE_ALT, TAB, TAB_UNSELECTED, TABLET, TABLET_ANDROID, TABLET_MAC, TAG_FACES, TAP_AND_PLAY, TERRAIN, TEXT_FIELDS, TEXT_FORMAT, TEXTSMS, TEXTURE, THEATERS, THUMB_DOWN, THUMB_UP, THUMBS_UP_DOWN, TIME_TO_LEAVE, TIMELAPSE, TIMELINE, TIMER, TIMER_10, TIMER_3, TIMER_OFF, TITLE, TOC, TODAY, TOLL, TONALITY, TOUCH_APP, TOYS, TRACK_CHANGES, TRAFFIC, TRAIN, TRAM, TRANSFER_WITHIN_A_STATION, TRANSFORM, TRANSLATE, TRENDING_DOWN, TRENDING_FLAT, TRENDING_UP, TUNE, TURNED_IN, TURNED_IN_NOT, TV, UNARCHIVE, UNDO, UNFOLD_LESS, UNFOLD_MORE, UPDATE, USB, VERIFIED_USER, VERTICAL_ALIGN_BOTTOM, VERTICAL_ALIGN_CENTER, VERTICAL_ALIGN_TOP, VIBRATION, VIDEO_CALL, VIDEO_LABEL, VIDEO_LIBRARY, VIDEOCAM, VIDEOCAM_OFF, VIDEOGAME_ASSET, VIEW_AGENDA, VIEW_ARRAY, VIEW_CAROUSEL, VIEW_COLUMN, VIEW_COMFY, VIEW_COMPACT, VIEW_DAY, VIEW_HEADLINE, VIEW_LIST, VIEW_MODULE, VIEW_QUILT, VIEW_STREAM, VIEW_WEEK, VIGNETTE, VISIBILITY, VISIBILITY_OFF, VOICE_CHAT, VOICEMAIL, VOLUME_DOWN, VOLUME_MUTE, VOLUME_OFF, VOLUME_UP, VPN_KEY, VPN_LOCK, WALLPAPER, WARNING, WATCH, WATCH_LATER, WB_AUTO, WB_CLOUDY, WB_INCANDESCENT, WB_IRIDESCENT, WB_SUNNY, WC, WEB, WEB_ASSET, WEEKEND, WHATSHOT, WIDGETS, WIFI, WIFI_LOCK, WIFI_TETHERING, WORK, WRAP_TEXT, YOUTUBE_SEARCHED_FOR, ZOOM_IN, ZOOM_OUT, ZOOM_OUT_MAP]);
}

defineClass(3, 6, {8:1, 192:1, 3:1, 101:1, 5:1, 7:1, 6:1}, IconType);
_.getCssName = function getCssName_60(){
  return this.cssClass;
}
;
var ACCESSIBILITY, ACCESSIBLE, ACCESS_ALARM, ACCESS_ALARMS, ACCESS_TIME, ACCOUNT_BALANCE, ACCOUNT_BALANCE_WALLET, ACCOUNT_BOX, ACCOUNT_CIRCLE, AC_UNIT, ADB, ADD, ADD_ALARM, ADD_ALERT, ADD_A_PHOTO, ADD_BOX, ADD_CIRCLE, ADD_CIRCLE_OUTLINE, ADD_LOCATION, ADD_SHOPPING_CART, ADD_TO_PHOTOS, ADD_TO_QUEUE, ADJUST, AIRLINE_SEAT_FLAT, AIRLINE_SEAT_FLAT_ANGLED, AIRLINE_SEAT_INDIVIDUAL_SUITE, AIRLINE_SEAT_LEGROOM_EXTRA, AIRLINE_SEAT_LEGROOM_NORMAL, AIRLINE_SEAT_LEGROOM_REDUCED, AIRLINE_SEAT_RECLINE_EXTRA, AIRLINE_SEAT_RECLINE_NORMAL, AIRPLANEMODE_ACTIVE, AIRPLANEMODE_INACTIVE, AIRPLAY, AIRPORT_SHUTTLE, ALARM, ALARM_ADD, ALARM_OFF, ALARM_ON, ALBUM, ALL_INCLUSIVE, ALL_OUT, ANDROID, ANNOUNCEMENT, APPS, ARCHIVE, ARROW_BACK, ARROW_DOWNWARD, ARROW_DROP_DOWN, ARROW_DROP_DOWN_CIRCLE, ARROW_DROP_UP, ARROW_FORWARD, ARROW_UPWARD, ART_TRACK, ASPECT_RATIO, ASSESSMENT, ASSIGNMENT, ASSIGNMENT_IND, ASSIGNMENT_LATE, ASSIGNMENT_RETURN, ASSIGNMENT_RETURNED, ASSIGNMENT_TURNED_IN, ASSISTANT, ASSISTANT_PHOTO, ATTACHMENT, ATTACH_FILE, ATTACH_MONEY, AUDIOTRACK, AUTORENEW, AV_TIMER, BACKSPACE, BACKUP, BATTERY_ALERT, BATTERY_CHARGING_FULL, BATTERY_FULL, BATTERY_STD, BATTERY_UNKNOWN, BEACH_ACCESS, BEENHERE, BLOCK_0, BLUETOOTH, BLUETOOTH_AUDIO, BLUETOOTH_CONNECTED, BLUETOOTH_DISABLED, BLUETOOTH_SEARCHING, BLUR_CIRCULAR, BLUR_LINEAR, BLUR_OFF, BLUR_ON, BOOK, BOOKMARK, BOOKMARK_BORDER, BORDER_ALL, BORDER_BOTTOM, BORDER_CLEAR, BORDER_COLOR, BORDER_HORIZONTAL, BORDER_INNER, BORDER_LEFT, BORDER_OUTER, BORDER_RIGHT, BORDER_STYLE, BORDER_TOP, BORDER_VERTICAL, BRANDING_WATERMARK, BRIGHTNESS_1, BRIGHTNESS_2, BRIGHTNESS_3, BRIGHTNESS_4, BRIGHTNESS_5, BRIGHTNESS_6, BRIGHTNESS_7, BRIGHTNESS_AUTO, BRIGHTNESS_HIGH, BRIGHTNESS_LOW, BRIGHTNESS_MEDIUM, BROKEN_IMAGE, BRUSH, BUBBLE_CHART, BUG_REPORT, BUILD, BURST_MODE, BUSINESS, BUSINESS_CENTER, CACHED, CAKE, CALL, CALL_END, CALL_MADE, CALL_MERGE, CALL_MISSED, CALL_MISSED_OUTGOING, CALL_RECEIVED, CALL_SPLIT, CALL_TO_ACTION, CAMERA, CAMERA_ALT, CAMERA_ENHANCE, CAMERA_FRONT, CAMERA_REAR, CAMERA_ROLL, CANCEL, CARD_GIFTCARD, CARD_MEMBERSHIP, CARD_TRAVEL, CASINO, CAST, CAST_CONNECTED, CENTER_FOCUS_STRONG, CENTER_FOCUS_WEAK, CHANGE_HISTORY, CHAT, CHAT_BUBBLE, CHAT_BUBBLE_OUTLINE, CHECK, CHECK_BOX, CHECK_BOX_OUTLINE_BLANK, CHECK_CIRCLE, CHEVRON_LEFT, CHEVRON_RIGHT, CHILD_CARE, CHILD_FRIENDLY, CHROME_READER_MODE, CLASS, CLEAR, CLEAR_ALL, CLOSE, CLOSED_CAPTION, CLOUD, CLOUD_CIRCLE, CLOUD_DONE, CLOUD_DOWNLOAD, CLOUD_OFF, CLOUD_QUEUE, CLOUD_UPLOAD, CODE, COLLECTIONS, COLLECTIONS_BOOKMARK, COLORIZE, COLOR_LENS, COMMENT, COMPARE, COMPARE_ARROWS, COMPUTER, CONFIRMATION_NUMBER, CONTACTS, CONTACT_MAIL, CONTACT_PHONE, CONTENT_COPY, CONTENT_CUT, CONTENT_PASTE, CONTROL_POINT, CONTROL_POINT_DUPLICATE, COPYRIGHT, CREATE, CREATE_NEW_FOLDER, CREDIT_CARD, CROP, CROP_16_9, CROP_3_2, CROP_5_4, CROP_7_5, CROP_DIN, CROP_FREE, CROP_LANDSCAPE, CROP_ORIGINAL, CROP_PORTRAIT, CROP_ROTATE, CROP_SQUARE, DASHBOARD, DATA_USAGE, DATE_RANGE, DEFAULT_3, DEHAZE, DELETE, DELETE_FOREVER, DELETE_SWEEP, DESCRIPTION, DESKTOP_MAC, DESKTOP_WINDOWS, DETAILS, DEVELOPER_BOARD, DEVELOPER_MODE, DEVICES, DEVICES_OTHER, DEVICE_HUB, DIALER_SIP, DIALPAD, DIRECTIONS, DIRECTIONS_BIKE, DIRECTIONS_BOAT, DIRECTIONS_BUS, DIRECTIONS_CAR, DIRECTIONS_RAILWAY, DIRECTIONS_RUN, DIRECTIONS_SUBWAY, DIRECTIONS_TRANSIT, DIRECTIONS_WALK, DISC_FULL, DNS, DOCK, DOMAIN, DONE, DONE_ALL, DONUT_LARGE, DONUT_SMALL, DO_NOT_DISTURB, DO_NOT_DISTURB_ALT, DO_NOT_DISTURB_OFF, DO_NOT_DISTURB_ON, DRAFTS, DRAG_HANDLE, DRIVE_ETA, DVR, EDIT, EDIT_LOCATION, EJECT, EMAIL, ENHANCED_ENCRYPTION, EQUALIZER, ERROR, ERROR_OUTLINE, EURO_SYMBOL, EVENT, EVENT_AVAILABLE, EVENT_BUSY, EVENT_NOTE, EVENT_SEAT, EV_STATION, EXIT_TO_APP, EXPAND_LESS, EXPAND_MORE, EXPLICIT, EXPLORE, EXPOSURE, EXPOSURE_NEG_1, EXPOSURE_NEG_2, EXPOSURE_PLUS_1, EXPOSURE_PLUS_2, EXPOSURE_ZERO, EXTENSION, FACE, FAST_FORWARD, FAST_REWIND, FAVORITE, FAVORITE_BORDER, FEATURED_PLAY_LIST, FEATURED_VIDEO, FEEDBACK, FIBER_DVR, FIBER_MANUAL_RECORD, FIBER_NEW, FIBER_PIN, FIBER_SMART_RECORD, FILE_DOWNLOAD, FILE_UPLOAD, FILTER, FILTER_1, FILTER_2, FILTER_3, FILTER_4, FILTER_5, FILTER_6, FILTER_7, FILTER_8, FILTER_9, FILTER_9_PLUS, FILTER_B_AND_W, FILTER_CENTER_FOCUS, FILTER_DRAMA, FILTER_FRAMES, FILTER_HDR, FILTER_LIST, FILTER_NONE, FILTER_TILT_SHIFT, FILTER_VINTAGE, FIND_IN_PAGE, FIND_REPLACE, FINGERPRINT, FIRST_PAGE, FITNESS_CENTER, FLAG, FLARE, FLASH_AUTO, FLASH_OFF, FLASH_ON, FLIGHT, FLIGHT_LAND, FLIGHT_TAKEOFF, FLIP, FLIP_TO_BACK, FLIP_TO_FRONT, FOLDER, FOLDER_OPEN, FOLDER_SHARED, FOLDER_SPECIAL, FONT_DOWNLOAD, FORMAT_ALIGN_CENTER, FORMAT_ALIGN_JUSTIFY, FORMAT_ALIGN_LEFT, FORMAT_ALIGN_RIGHT, FORMAT_BOLD, FORMAT_CLEAR, FORMAT_COLOR_FILL, FORMAT_COLOR_RESET, FORMAT_COLOR_TEXT, FORMAT_INDENT_DECREASE, FORMAT_INDENT_INCREASE, FORMAT_ITALIC, FORMAT_LINE_SPACING, FORMAT_LIST_BULLETED, FORMAT_LIST_NUMBERED, FORMAT_PAINT, FORMAT_QUOTE, FORMAT_SHAPES, FORMAT_SIZE, FORMAT_STRIKETHROUGH, FORMAT_TEXTDIRECTION_L_TO_R, FORMAT_TEXTDIRECTION_R_TO_L, FORMAT_UNDERLINED, FORUM, FORWARD, FORWARD_10, FORWARD_30, FORWARD_5, FREE_BREAKFAST, FULLSCREEN, FULLSCREEN_EXIT, FUNCTIONS, GAMEPAD, GAMES, GAVEL, GESTURE, GET_APP, GIF, GOLF_COURSE, GPS_FIXED, GPS_NOT_FIXED, GPS_OFF, GRADE, GRADIENT, GRAIN, GRAPHIC_EQ, GRID_OFF, GRID_ON, GROUP, GROUP_ADD, GROUP_WORK, G_TRANSLATE, HD, HDR_OFF, HDR_ON, HDR_STRONG, HDR_WEAK, HEADSET, HEADSET_MIC, HEALING, HEARING, HELP_0, HELP_OUTLINE, HIGHLIGHT, HIGHLIGHT_OFF, HIGH_QUALITY, HISTORY, HOME, HOTEL, HOT_TUB, HOURGLASS_EMPTY, HOURGLASS_FULL, HTTP, HTTPS, IMAGE, IMAGE_ASPECT_RATIO, IMPORTANT_DEVICES, IMPORT_CONTACTS, IMPORT_EXPORT, INBOX, INDETERMINATE_CHECK_BOX, INFO, INFO_OUTLINE, INPUT, INSERT_CHART, INSERT_COMMENT, INSERT_DRIVE_FILE, INSERT_EMOTICON, INSERT_INVITATION, INSERT_LINK, INSERT_PHOTO, INVERT_COLORS, INVERT_COLORS_OFF, ISO, KEYBOARD, KEYBOARD_ARROW_DOWN, KEYBOARD_ARROW_LEFT, KEYBOARD_ARROW_RIGHT, KEYBOARD_ARROW_UP, KEYBOARD_BACKSPACE, KEYBOARD_CAPSLOCK, KEYBOARD_HIDE, KEYBOARD_RETURN, KEYBOARD_TAB, KEYBOARD_VOICE, KITCHEN, LABEL, LABEL_OUTLINE, LANDSCAPE, LANGUAGE, LAPTOP, LAPTOP_CHROMEBOOK, LAPTOP_MAC, LAPTOP_WINDOWS, LAST_PAGE, LAUNCH, LAYERS, LAYERS_CLEAR, LEAK_ADD, LEAK_REMOVE, LENS, LIBRARY_ADD, LIBRARY_BOOKS, LIBRARY_MUSIC, LIGHTBULB_OUTLINE, LINEAR_SCALE, LINE_STYLE, LINE_WEIGHT, LINK_0, LINKED_CAMERA, LIST, LIVE_HELP, LIVE_TV, LOCAL_ACTIVITY, LOCAL_AIRPORT, LOCAL_ATM, LOCAL_BAR, LOCAL_CAFE, LOCAL_CAR_WASH, LOCAL_CONVENIENCE_STORE, LOCAL_DINING, LOCAL_DRINK, LOCAL_FLORIST, LOCAL_GAS_STATION, LOCAL_GROCERY_STORE, LOCAL_HOSPITAL, LOCAL_HOTEL, LOCAL_LAUNDRY_SERVICE, LOCAL_LIBRARY, LOCAL_MALL, LOCAL_MOVIES, LOCAL_OFFER, LOCAL_PARKING, LOCAL_PHARMACY, LOCAL_PHONE, LOCAL_PIZZA, LOCAL_PLAY, LOCAL_POST_OFFICE, LOCAL_PRINTSHOP, LOCAL_SEE, LOCAL_SHIPPING, LOCAL_TAXI, LOCATION_CITY, LOCATION_DISABLED, LOCATION_OFF, LOCATION_ON, LOCATION_SEARCHING, LOCK, LOCK_OPEN, LOCK_OUTLINE, LOOKS, LOOKS_3, LOOKS_4, LOOKS_5, LOOKS_6, LOOKS_ONE, LOOKS_TWO, LOOP, LOUPE, LOW_PRIORITY, LOYALTY, MAIL, MAIL_OUTLINE, MAP, MARKUNREAD, MARKUNREAD_MAILBOX, MEMORY, MENU, MERGE_TYPE, MESSAGE, MIC, MIC_NONE, MIC_OFF, MMS, MODE_COMMENT, MODE_EDIT, MONETIZATION_ON, MONEY_OFF, MONOCHROME_PHOTOS, MOOD, MOOD_BAD, MORE, MORE_HORIZ, MORE_VERT, MOTORCYCLE, MOUSE, MOVE_TO_INBOX, MOVIE, MOVIE_CREATION, MOVIE_FILTER, MULTILINE_CHART, MUSIC_NOTE, MUSIC_VIDEO, MY_LOCATION, NATURE, NATURE_PEOPLE, NAVIGATE_BEFORE, NAVIGATE_NEXT, NAVIGATION_0, NEAR_ME, NETWORK_CELL, NETWORK_CHECK, NETWORK_LOCKED, NETWORK_WIFI, NEW_RELEASES, NEXT_WEEK, NFC, NOTE, NOTE_ADD, NOTIFICATIONS, NOTIFICATIONS_ACTIVE, NOTIFICATIONS_NONE, NOTIFICATIONS_OFF, NOTIFICATIONS_PAUSED, NOT_INTERESTED, NO_ENCRYPTION, NO_SIM, OFFLINE_PIN, ONDEMAND_VIDEO, OPACITY, OPEN_IN_BROWSER, OPEN_IN_NEW, OPEN_WITH, PAGES, PAGEVIEW, PALETTE, PANORAMA, PANORAMA_FISH_EYE, PANORAMA_HORIZONTAL, PANORAMA_VERTICAL, PANORAMA_WIDE_ANGLE, PAN_TOOL, PARTY_MODE, PAUSE, PAUSE_CIRCLE_FILLED, PAUSE_CIRCLE_OUTLINE, PAYMENT, PEOPLE, PEOPLE_OUTLINE, PERM_CAMERA_MIC, PERM_CONTACT_CALENDAR, PERM_DATA_SETTING, PERM_DEVICE_INFORMATION, PERM_IDENTITY, PERM_MEDIA, PERM_PHONE_MSG, PERM_SCAN_WIFI, PERSON, PERSONAL_VIDEO, PERSON_ADD, PERSON_OUTLINE, PERSON_PIN, PERSON_PIN_CIRCLE, PETS, PHONE, PHONELINK, PHONELINK_ERASE, PHONELINK_LOCK, PHONELINK_OFF, PHONELINK_RING, PHONELINK_SETUP, PHONE_ANDROID, PHONE_BLUETOOTH_SPEAKER, PHONE_FORWARDED, PHONE_IN_TALK, PHONE_IPHONE, PHONE_LOCKED, PHONE_MISSED, PHONE_PAUSED, PHOTO, PHOTO_ALBUM, PHOTO_CAMERA, PHOTO_FILTER, PHOTO_LIBRARY, PHOTO_SIZE_SELECT_ACTUAL, PHOTO_SIZE_SELECT_LARGE, PHOTO_SIZE_SELECT_SMALL, PICTURE_AS_PDF, PICTURE_IN_PICTURE, PICTURE_IN_PICTURE_ALT, PIE_CHART, PIE_CHART_OUTLINED, PIN_DROP, PLACE, PLAYLIST_ADD, PLAYLIST_ADD_CHECK, PLAYLIST_PLAY, PLAY_ARROW, PLAY_CIRCLE_FILLED, PLAY_CIRCLE_OUTLINE, PLAY_FOR_WORK, PLUS_ONE, POLL, POLYMER, POOL, PORTABLE_WIFI_OFF, PORTRAIT, POWER, POWER_INPUT, POWER_SETTINGS_NEW, PREGNANT_WOMAN, PRESENT_TO_ALL, PRINT, PRIORITY_HIGH, PUBLIC, PUBLISH, QUERY_BUILDER, QUESTION_ANSWER, QUEUE, QUEUE_MUSIC, QUEUE_PLAY_NEXT, RADIO, RADIO_BUTTON_CHECKED, RADIO_BUTTON_UNCHECKED, RATE_REVIEW, RECEIPT, RECENT_ACTORS, RECORD_VOICE_OVER, REDEEM, REDO, REFRESH, REMOVE, REMOVE_CIRCLE, REMOVE_CIRCLE_OUTLINE, REMOVE_FROM_QUEUE, REMOVE_RED_EYE, REMOVE_SHOPPING_CART, REORDER, REPEAT, REPEAT_ONE, REPLAY, REPLAY_10, REPLAY_30, REPLAY_5, REPLY, REPLY_ALL, REPORT, REPORT_PROBLEM, RESTAURANT, RESTAURANT_MENU, RESTORE, RESTORE_PAGE, RING_VOLUME, ROOM, ROOM_SERVICE, ROTATE_90_DEGREES_CCW, ROTATE_LEFT, ROTATE_RIGHT, ROTATION_3D, ROUNDED_CORNER, ROUTER, ROWING, RSS_FEED, RV_HOOKUP, SATELLITE, SAVE, SCANNER, SCHEDULE, SCHOOL, SCREEN_LOCK_LANDSCAPE, SCREEN_LOCK_PORTRAIT, SCREEN_LOCK_ROTATION, SCREEN_ROTATION, SCREEN_SHARE, SD_CARD, SD_STORAGE, SEARCH, SECURITY, SELECT_ALL, SEND, SENTIMENT_DISSATISFIED, SENTIMENT_NEUTRAL, SENTIMENT_SATISFIED, SENTIMENT_VERY_DISSATISFIED, SENTIMENT_VERY_SATISFIED, SETTINGS, SETTINGS_APPLICATIONS, SETTINGS_BACKUP_RESTORE, SETTINGS_BLUETOOTH, SETTINGS_BRIGHTNESS, SETTINGS_CELL, SETTINGS_ETHERNET, SETTINGS_INPUT_ANTENNA, SETTINGS_INPUT_COMPONENT, SETTINGS_INPUT_COMPOSITE, SETTINGS_INPUT_HDMI, SETTINGS_INPUT_SVIDEO, SETTINGS_OVERSCAN, SETTINGS_PHONE, SETTINGS_POWER, SETTINGS_REMOTE, SETTINGS_SYSTEM_DAYDREAM, SETTINGS_VOICE, SHARE, SHOP, SHOPPING_BASKET, SHOPPING_CART, SHOP_TWO, SHORT_TEXT, SHOW_CHART, SHUFFLE, SIGNAL_CELLULAR_4_BAR, SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR, SIGNAL_CELLULAR_NO_SIM, SIGNAL_CELLULAR_NULL, SIGNAL_CELLULAR_OFF, SIGNAL_WIFI_4_BAR, SIGNAL_WIFI_4_BAR_LOCK, SIGNAL_WIFI_OFF, SIM_CARD, SIM_CARD_ALERT, SKIP_NEXT, SKIP_PREVIOUS, SLIDESHOW, SLOW_MOTION_VIDEO, SMARTPHONE, SMOKE_FREE, SMOKING_ROOMS, SMS, SMS_FAILED, SNOOZE, SORT, SORT_BY_ALPHA, SPA, SPACE_BAR, SPEAKER, SPEAKER_GROUP, SPEAKER_NOTES, SPEAKER_NOTES_OFF, SPEAKER_PHONE, SPELLCHECK, STAR, STARS, STAR_BORDER, STAR_HALF, STAY_CURRENT_LANDSCAPE, STAY_CURRENT_PORTRAIT, STAY_PRIMARY_LANDSCAPE, STAY_PRIMARY_PORTRAIT, STOP, STOP_SCREEN_SHARE, STORAGE, STORE, STORE_MALL_DIRECTORY, STRAIGHTEN, STREETVIEW, STRIKETHROUGH_S, STYLE, SUBDIRECTORY_ARROW_LEFT, SUBDIRECTORY_ARROW_RIGHT, SUBJECT, SUBSCRIPTIONS, SUBTITLES, SUBWAY, SUPERVISOR_ACCOUNT, SURROUND_SOUND, SWAP_CALLS, SWAP_HORIZ, SWAP_VERT, SWAP_VERTICAL_CIRCLE, SWITCH_CAMERA, SWITCH_VIDEO, SYNC, SYNC_DISABLED, SYNC_PROBLEM, SYSTEM_UPDATE, SYSTEM_UPDATE_ALT, TAB, TABLET, TABLET_ANDROID, TABLET_MAC, TAB_UNSELECTED, TAG_FACES, TAP_AND_PLAY, TERRAIN, TEXTSMS, TEXTURE, TEXT_FIELDS, TEXT_FORMAT, THEATERS, THUMBS_UP_DOWN, THUMB_DOWN, THUMB_UP, TIMELAPSE, TIMELINE, TIMER, TIMER_10, TIMER_3, TIMER_OFF, TIME_TO_LEAVE, TITLE, TOC, TODAY, TOLL, TONALITY, TOUCH_APP, TOYS, TRACK_CHANGES, TRAFFIC, TRAIN, TRAM, TRANSFER_WITHIN_A_STATION, TRANSFORM, TRANSLATE, TRENDING_DOWN, TRENDING_FLAT, TRENDING_UP, TUNE, TURNED_IN, TURNED_IN_NOT, TV, UNARCHIVE, UNDO, UNFOLD_LESS, UNFOLD_MORE, UPDATE, USB, VERIFIED_USER, VERTICAL_ALIGN_BOTTOM, VERTICAL_ALIGN_CENTER, VERTICAL_ALIGN_TOP, VIBRATION, VIDEOCAM, VIDEOCAM_OFF, VIDEOGAME_ASSET, VIDEO_CALL, VIDEO_LABEL, VIDEO_LIBRARY, VIEW_AGENDA, VIEW_ARRAY, VIEW_CAROUSEL, VIEW_COLUMN, VIEW_COMFY, VIEW_COMPACT, VIEW_DAY, VIEW_HEADLINE, VIEW_LIST, VIEW_MODULE, VIEW_QUILT, VIEW_STREAM, VIEW_WEEK, VIGNETTE, VISIBILITY, VISIBILITY_OFF, VOICEMAIL, VOICE_CHAT, VOLUME_DOWN, VOLUME_MUTE, VOLUME_OFF, VOLUME_UP, VPN_KEY, VPN_LOCK, WALLPAPER, WARNING, WATCH, WATCH_LATER, WB_AUTO, WB_CLOUDY, WB_INCANDESCENT, WB_IRIDESCENT, WB_SUNNY, WC, WEB, WEB_ASSET, WEEKEND, WHATSHOT, WIDGETS, WIFI, WIFI_LOCK, WIFI_TETHERING, WORK, WRAP_TEXT, YOUTUBE_SEARCHED_FOR, ZOOM_IN, ZOOM_OUT, ZOOM_OUT_MAP;
var Lgwt_material_design_client_constants_IconType_2_classLit = createForEnum('gwt.material.design.client.constants', 'IconType', 3, values_16);
function $clinit_InputType(){
  $clinit_InputType = emptyMethod;
  PASSWORD = new InputType('PASSWORD', 0, 'password');
  DATETIME = new InputType('DATETIME', 1, 'datetime');
  DATETIME_LOCAL = new InputType('DATETIME_LOCAL', 2, 'datetime-local');
  DATE = new InputType('DATE', 3, 'date');
  MONTH = new InputType('MONTH', 4, 'month');
  TIME = new InputType('TIME', 5, 'time');
  WEEK = new InputType('WEEK', 6, 'week');
  NUMBER = new InputType('NUMBER', 7, 'number');
  EMAIL_0 = new InputType('EMAIL', 8, 'email');
  FILE = new InputType('FILE', 9, 'file');
  URL_0 = new InputType('URL', 10, 'url');
  SEARCH_0 = new InputType('SEARCH', 11, 'search');
  TEL = new InputType('TEL', 12, 'tel');
  TEXT_0 = new InputType('TEXT', 13, 'text');
  COLOR = new InputType('COLOR', 14, 'color');
  CHECKBOX = new InputType('CHECKBOX', 15, 'checkbox');
  RANGE = new InputType('RANGE', 16, 'range');
}

function InputType(enum$name, enum$ordinal, type_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.type_0 = type_0;
}

function values_17(){
  $clinit_InputType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_InputType_2_classLit, 1), $intern_2, 32, 0, [PASSWORD, DATETIME, DATETIME_LOCAL, DATE, MONTH, TIME, WEEK, NUMBER, EMAIL_0, FILE, URL_0, SEARCH_0, TEL, TEXT_0, COLOR, CHECKBOX, RANGE]);
}

defineClass(32, 6, {32:1, 101:1, 5:1, 7:1, 6:1}, InputType);
var CHECKBOX, COLOR, DATE, DATETIME, DATETIME_LOCAL, EMAIL_0, FILE, MONTH, NUMBER, PASSWORD, RANGE, SEARCH_0, TEL, TEXT_0, TIME, URL_0, WEEK;
var Lgwt_material_design_client_constants_InputType_2_classLit = createForEnum('gwt.material.design.client.constants', 'InputType', 32, values_17);
function $clinit_ProgressType(){
  $clinit_ProgressType = emptyMethod;
  INDETERMINATE = new ProgressType('INDETERMINATE', 0, 'indeterminate');
  DETERMINATE = new ProgressType('DETERMINATE', 1, 'determinate');
}

function ProgressType(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_18(){
  $clinit_ProgressType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_ProgressType_2_classLit, 1), $intern_2, 111, 0, [INDETERMINATE, DETERMINATE]);
}

defineClass(111, 6, {8:1, 192:1, 111:1, 101:1, 5:1, 7:1, 6:1}, ProgressType);
_.getCssName = function getCssName_61(){
  return this.cssClass;
}
;
var DETERMINATE, INDETERMINATE;
var Lgwt_material_design_client_constants_ProgressType_2_classLit = createForEnum('gwt.material.design.client.constants', 'ProgressType', 111, values_18);
function $clinit_SpinnerColor(){
  $clinit_SpinnerColor = emptyMethod;
  BLUE_0 = new SpinnerColor('BLUE', 0, 'spinner-blue');
  BLUE_ONLY = new SpinnerColor('BLUE_ONLY', 1, 'spinner-blue-only');
  RED_0 = new SpinnerColor('RED', 2, 'spinner-red');
  RED_ONLY = new SpinnerColor('RED_ONLY', 3, 'spinner-red-only');
  YELLOW_0 = new SpinnerColor('YELLOW', 4, 'spinner-yellow');
  YELLOW_ONLY = new SpinnerColor('YELLOW_ONLY', 5, 'spinner-yellow-only');
  GREEN_0 = new SpinnerColor('GREEN', 6, 'spinner-green');
  GREEN_ONLY = new SpinnerColor('GREEN_ONLY', 7, 'spinner-green-only');
}

function SpinnerColor(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_19(){
  $clinit_SpinnerColor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_SpinnerColor_2_classLit, 1), $intern_2, 54, 0, [BLUE_0, BLUE_ONLY, RED_0, RED_ONLY, YELLOW_0, YELLOW_ONLY, GREEN_0, GREEN_ONLY]);
}

defineClass(54, 6, {8:1, 54:1, 101:1, 5:1, 7:1, 6:1}, SpinnerColor);
_.getCssName = function getCssName_62(){
  return this.cssClass;
}
;
var BLUE_0, BLUE_ONLY, GREEN_0, GREEN_ONLY, RED_0, RED_ONLY, YELLOW_0, YELLOW_ONLY;
var Lgwt_material_design_client_constants_SpinnerColor_2_classLit = createForEnum('gwt.material.design.client.constants', 'SpinnerColor', 54, values_19);
function $clinit_WavesType(){
  $clinit_WavesType = emptyMethod;
  DEFAULT_4 = new WavesType('DEFAULT', 0, 'waves-default');
  LIGHT = new WavesType('LIGHT', 1, 'waves-light');
  RED_1 = new WavesType('RED', 2, 'waves-red');
  YELLOW_1 = new WavesType('YELLOW', 3, 'waves-yellow');
  ORANGE_0 = new WavesType('ORANGE', 4, 'waves-orange');
  PURPLE_0 = new WavesType('PURPLE', 5, 'waves-purple');
  GREEN_1 = new WavesType('GREEN', 6, 'waves-green');
  TEAL_0 = new WavesType('TEAL', 7, 'waves-teal');
}

function WavesType(enum$name, enum$ordinal, cssClass){
  Enum.call(this, enum$name, enum$ordinal);
  this.cssClass = cssClass;
}

function values_20(){
  $clinit_WavesType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_WavesType_2_classLit, 1), $intern_2, 52, 0, [DEFAULT_4, LIGHT, RED_1, YELLOW_1, ORANGE_0, PURPLE_0, GREEN_1, TEAL_0]);
}

defineClass(52, 6, {8:1, 101:1, 52:1, 5:1, 7:1, 6:1}, WavesType);
_.getCssName = function getCssName_63(){
  return this.cssClass;
}
;
var DEFAULT_4, GREEN_1, LIGHT, ORANGE_0, PURPLE_0, RED_1, TEAL_0, YELLOW_1;
var Lgwt_material_design_client_constants_WavesType_2_classLit = createForEnum('gwt.material.design.client.constants', 'WavesType', 52, values_20);
function $clearHandlers(this$static){
  var handler, handler$iterator;
  if (this$static.handlers) {
    for (handler$iterator = new ArrayList$1(this$static.handlers); handler$iterator.i < handler$iterator.this$01.array.length;) {
      handler = castTo($next_4(handler$iterator), 544);
      !!handler && $removeHandler(handler.real);
    }
    this$static.handlers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  }
}

function $lambda$0_1(this$static, event_0){
  this$static.clearOnUnload && !event_0.attached && $clearHandlers(this$static);
}

function $registerHandler_0(this$static, handler){
  !this$static.handlers && (this$static.handlers = new ArrayList);
  $add_8(this$static.handlers, handler);
  return handler;
}

function DefaultHandlerRegistry(widget){
  this.widget = widget;
  this.clearOnUnload = true;
  $addHandler_0(this.widget, new DefaultHandlerRegistry$lambda$0$Type(this), (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1));
}

defineClass(109, 1, {15:1}, DefaultHandlerRegistry);
_.clearOnUnload = true;
var Lgwt_material_design_client_events_DefaultHandlerRegistry_2_classLit = createForClass('gwt.material.design.client.events', 'DefaultHandlerRegistry', 109);
function DefaultHandlerRegistry$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(371, 1, $intern_35, DefaultHandlerRegistry$lambda$0$Type);
_.onAttachOrDetach = function onAttachOrDetach_2(arg0){
  $lambda$0_1(this.$$outer_0, arg0);
}
;
var Lgwt_material_design_client_events_DefaultHandlerRegistry$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.events', 'DefaultHandlerRegistry/lambda$0$Type', 371);
var animationJs, appInstallerJs, materializeJs;
function MaterialResources_default_InlineClientBundleGenerator$1(){
}

defineClass(245, 1, {}, MaterialResources_default_InlineClientBundleGenerator$1);
_.getName = function getName_9(){
  return 'animationJs';
}
;
_.getText = function getText(){
  return 'function showGrid(e,i){applyGridAnimation(e,i,!0)}function closeGrid(e,i){applyGridAnimation(e,i,!1)}function applyGridAnimation(e,i,t){var s=$(e),n=s.offset();s.each(function(){$(this).children().each(function(){var e=$(this).offset(),i=e.top-n.top,s=.5*e.left+i,a=parseFloat(s/900).toFixed(2);$(this).css("-webkit-transition-delay",a+"s").css("-o-transition-delay",a+"s").css("transition-delay",a+"s"),t?$(this).removeClass("closed").addClass("animated"):$(this).removeClass("animated").addClass("closed")})})}var swipeLeft=!1,swipeRight=!1;function initDismissableCollection(){$(".dismissable").each(function(){$(this).hammer({prevent_default:!1}).bind("pan",function(e){if("touch"===e.gesture.pointerType){var i=$(this),t=e.gesture.direction,s=e.gesture.deltaX,n=e.gesture.velocityX;i.velocity({translateX:s},{duration:50,queue:!1,easing:"easeOutQuad"}),4===t&&(s>i.innerWidth()/2||n<-.75)&&(swipeLeft=!0),2===t&&(s<-1*i.innerWidth()/2||n>.75)&&(swipeRight=!0)}}).bind("panend",function(e){if(Math.abs(e.gesture.deltaX)<$(this).innerWidth()/2&&(swipeRight=!1,swipeLeft=!1),"touch"===e.gesture.pointerType){var i,t=$(this);if(swipeLeft||swipeRight)i=swipeLeft?t.innerWidth():-1*t.innerWidth(),t.velocity({translateX:i},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){t.css("border","none"),t.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t.remove()}})}});else t.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});swipeLeft=!1,swipeRight=!1}})})}';
}
;
var Lgwt_material_design_client_resources_MaterialResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialResources_default_InlineClientBundleGenerator/1', 245);
function MaterialResources_default_InlineClientBundleGenerator$2(){
}

defineClass(246, 1, {}, MaterialResources_default_InlineClientBundleGenerator$2);
_.getName = function getName_10(){
  return 'appInstallerJs';
}
;
_.getText = function getText_0(){
  return 'function AppInstaller(n){window.install.canPrompt(n).then(function(){})["catch"](function(t){n.call(t)}),this.prompt=function(){window.install.prompt().then(function(n){})["catch"](function(t){n.call(t)})},this.isLaunched=function(n){return window.matchMedia("(display-mode: "+n+")").matches}}!function(){var n,t,e=!1,o=new Promise(function(n,e){t=n});window.addEventListener("beforeinstallprompt",function(o){return e=!0,o.preventDefault(),n=o,t(),!1});var i={};Object.defineProperty(i,"isAvailable",{get:function(){return e}}),i.canPrompt=function(){return o},i.prompt=function(){return new Promise(function(t,o){e===!1&&o("User Agent decided not to prompt"),n.prompt().then(function(){return n.userChoice}).then(function(n){t(n.outcome)})["catch"](function(n){o(n)})})},window.install=i}();';
}
;
var Lgwt_material_design_client_resources_MaterialResources_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialResources_default_InlineClientBundleGenerator/2', 246);
function MaterialResources_default_InlineClientBundleGenerator$3(){
}

defineClass(247, 1, {}, MaterialResources_default_InlineClientBundleGenerator$3);
_.getName = function getName_11(){
  return 'materializeJs';
}
;
_.getText = function getText_1(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jQuery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(-Math.pow(2,-10*e/a)+1)+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o))+i},easeOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/o)+n+i},easeInOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(2==(e/=a/2))return i+n;if(o||(o=a*(.3*1.5)),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o))+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*.5+n+i},easeInBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*(e/=a)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*((e=e/a-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?n/2*(e*e*(((r*=1.525)+1)*e-r))+i:n/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+i:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return a/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(t){function e(t){var e=t.length,n=i.type(t);return"function"===n||i.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?a[o.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!r.call(t,"constructor")&&!r.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}for(e in t);return void 0===e||r.call(t,e)},i.each=function(t,i,n){var a,r=0,o=t.length,s=e(t);if(n){if(s)for(;o>r&&(a=i.apply(t[r],n),a!==!1);r++);else for(r in t)if(a=i.apply(t[r],n),a===!1)break}else if(s)for(;o>r&&(a=i.call(t[r],r,t[r]),a!==!1);r++);else for(r in t)if(a=i.call(t[r],r,t[r]),a===!1)break;return t},i.data=function(t,e,a){if(void 0===a){var r=t[i.expando],o=r&&n[r];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=a,a}},i.removeData=function(t,e){var a=t[i.expando],r=a&&n[a];r&&i.each(e,function(t,e){delete r[e]})},i.extend=function(){var t,e,n,a,r,o,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(r=arguments[l]))for(a in r)t=s[a],n=r[a],s!==n&&(c&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,o=t&&i.isArray(t)?t:[]):o=t&&i.isPlainObject(t)?t:{},s[a]=i.extend(c,o,n)):void 0!==n&&(s[a]=n));return s},i.queue=function(t,n,a){function r(t,i){var n=i||[];return null!=t&&(e(Object(t))?!function(t,e){for(var i=+e.length,n=0,a=t.length;i>n;)t[a++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[a++]=e[n++];return t.length=a,t}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}if(t){n=(n||"fx")+"queue";var o=i.data(t,n);return a?(!o||i.isArray(a)?o=i.data(t,n,r(a)):o.push(a),o):o||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var a=i.queue(n,e),r=a.shift();"inprogress"===r&&(r=a.shift()),r&&("fx"===e&&a.unshift("inprogress"),r.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),a=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(a.top+=parseFloat(t.style.borderTopWidth)||0,a.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-a.top,left:n.left-a.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var a={},r=a.hasOwnProperty,o=a.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)a["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function a(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var a=t[e];a&&n.push(a)}return n}function r(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function o(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,a){function r(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((r(e,i)*t+o(e,i))*t+s(e))*t}function u(t,e,i){return 3*r(e,i)*t*t+2*o(e,i)*t+s(e)}function c(e,i){for(var a=0;v>a;++a){var r=u(i,t,n);if(0===r)return i;var o=l(i,t,n)-e;i-=o/r}return i}function d(){for(var e=0;b>e;++e)k[e]=l(e*w,t,n)}function p(e,i,a){var r,o,s=0;do o=i+(a-i)/2,r=l(o,t,n)-e,r>0?a=o:i=o;while(Math.abs(r)>m&&++s<y);return o}function f(e){for(var i=0,a=1,r=b-1;a!=r&&k[a]<=e;++a)i+=w;--a;var o=(e-k[a])/(k[a+1]-k[a]),s=i+o*w,l=u(s,t,n);return l>=g?c(e,s):0==l?s:p(e,i,i+w)}function h(){T=!0,(t!=i||n!=a)&&d()}var v=4,g=.001,m=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in e;if(4!==arguments.length)return!1;for(var C=0;4>C;++C)if("number"!=typeof arguments[C]||isNaN(arguments[C])||!isFinite(arguments[C]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var k=x?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||h(),t===i&&n===a?e:0===e?0:1===e?1:l(f(e),i,a)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:a}]};var O="generateBezier("+[t,i,n,a]+")";return S.toString=function(){return O},S}function u(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):v.isArray(t)&&4===t.length?l.apply(null,t):!1,i===!1&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function c(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=a(b.State.calls));for(var r=0;i>r;r++)if(b.State.calls[r]){var s=b.State.calls[r],l=s[0],u=s[2],f=s[3],h=!!f,g=null;f||(f=b.State.calls[r][3]=e-16);for(var m=Math.min((e-f)/u.duration,1),y=0,w=l.length;w>y;y++){var C=l[y],T=C.element;if(o(T)){var S=!1;if(u.display!==n&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var O=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(O,function(t,e){x.setPropertyValue(T,"display",e)})}x.setPropertyValue(T,"display",u.display)}u.visibility!==n&&"hidden"!==u.visibility&&x.setPropertyValue(T,"visibility",u.visibility);for(var P in C)if("element"!==P){var E,A=C[P],q=v.isString(A.easing)?b.Easings[A.easing]:A.easing;if(1===m)E=A.endValue;else{var M=A.endValue-A.startValue;if(E=A.startValue+M*q(m,u,M),!h&&E===A.currentValue)continue}if(A.currentValue=E,"tween"===P)g=E;else{if(x.Hooks.registered[P]){var _=x.Hooks.getRoot(P),I=o(T).rootPropertyValueCache[_];I&&(A.rootPropertyValue=I)}var V=x.setPropertyValue(T,P,A.currentValue+(0===parseFloat(E)?"":A.unitType),A.rootPropertyValue,A.scrollData);x.Hooks.registered[P]&&(o(T).rootPropertyValueCache[_]=x.Normalizations.registered[_]?x.Normalizations.registered[_]("extract",null,V[1]):V[1]),"transform"===V[0]&&(S=!0)}}u.mobileHA&&o(T).transformCache.translate3d===n&&(o(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(T)}}u.display!==n&&"none"!==u.display&&(b.State.calls[r][2].display=!1),u.visibility!==n&&"hidden"!==u.visibility&&(b.State.calls[r][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],m,Math.max(0,f+u.duration-e),f,g),1===m&&d(r)}}b.State.isTicking&&k(c)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],a=b.State.calls[t][1],r=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,u=0,c=i.length;c>u;u++){var d=i[u].element;if(e||r.loop||("none"===r.display&&x.setPropertyValue(d,"display",r.display),"hidden"===r.visibility&&x.setPropertyValue(d,"visibility",r.visibility)),r.loop!==!0&&(p.queue(d)[1]===n||!/\\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&o(d)){o(d).isAnimating=!1,o(d).rootPropertyValueCache={};var f=!1;p.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,a=o(d).transformCache[e];o(d).transformCache[e]!==n&&new RegExp("^\\\\("+i+"[^.]").test(a)&&(f=!0,delete o(d).transformCache[e])}),r.mobileHA&&(f=!0,delete o(d).transformCache.translate3d),f&&x.flushTransformCache(d),x.Values.removeClass(d,"velocity-animating")}if(!e&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(a,a)}catch(h){setTimeout(function(){throw h},1)}s&&r.loop!==!0&&s(a),o(d)&&r.loop===!0&&!e&&(p.each(o(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:r.delay})),r.queue!==!1&&p.dequeue(d,r.queue)}b.State.calls[t]=!1;for(var v=0,g=b.State.calls.length;g>v;v++)if(b.State.calls[v]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,f=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="<!--[if IE "+t+"]><span><\/span><![endif]-->",e.getElementsByTagName("span").length)return e=null,t}return n}(),h=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\\[object (HTMLCollection|NodeList|Object)\\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(p=t,g=!0):p=e.Velocity.Utilities,8>=f&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\\.3\\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var a={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:a.v,dv:t(a)}}function i(i,n){var a={dx:i.v,dv:t(i)},r=e(i,.5*n,a),o=e(i,.5*n,r),s=e(i,n,o),l=1/6*(a.dx+2*(r.dx+o.dx)+s.dx),u=1/6*(a.dv+2*(r.dv+o.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+u*n,i}return function n(t,e,a){var r,o,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,d=1e-4,p=.016;for(t=parseFloat(t)||500,e=parseFloat(e)||20,a=a||null,l.tension=t,l.friction=e,r=null!==a,r?(c=n(t,e),o=c/a*p):o=p;s=i(s||l,o),u.push(1+s.x),c+=16,Math.abs(s.x)>d&&Math.abs(s.v)>d;);return r?function(t){return u[t*(u.length-1)|0]}:c}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.0';
  builder.string += '4,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\\((.*)\\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<x.Lists.colors.length;t++){var e="color"===x.Lists.colors[t]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,a;if(f)for(i in x.Hooks.templates){n=x.Hooks.templates[i],a=n[0].split(" ");var r=n[1].match(x.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),x.Hooks.templates[i]=[a.join(" "),r.join(" ")])}for(i in x.Hooks.templates){n=x.Hooks.templates[i],a=n[0].split(" ");for(var t in a){var o=i+a[t],s=t;x.Hooks.registered[o]=[i,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],a=i[1];return e=x.Hooks.cleanRootPropertyValue(n,e),e.toString().match(x.RegEx.valueSplit)[a]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var a,r,o=n[0],s=n[1];return i=x.Hooks.cleanRootPropertyValue(o,i),a=i.toString().match(x.RegEx.valueSplit),a[s]=e,r=a.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(x.RegEx.valueUnwrap),n=n?n[1].replace(/,(\\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var a=i.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);n=a?a[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=f)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\\(opacity=(.*)\\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":return i;case"inject":return i}}},register:function(){9>=f||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return"transform";case"extract":return o(i)===n||o(i).transformCache[e]===n?/^scale/i.test(e)?1:0:o(i).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\\d)$/i.test(a);break;case"scal":case"scale":b.State.isAndroid&&o(i).transformCache[e]===n&&1>a&&(a=1),r=!/(\\d)$/i.test(a);break;case"skew":r=!/(deg|\\d)$/i.test(a);break;case"rotate":r=!/(deg|\\d)$/i.test(a)}return r||(o(i).transformCache[e]="("+a+")"),o(i).transformCache[e]}}}();for(var t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return e;case"extract":var r;if(x.RegEx.wrappedValueAlreadyExtracted.test(a))r=a;else{var o,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?o=s[a]!==n?s[a]:s.black:x.RegEx.isHex.test(a)?o="rgb("+x.Values.hexToRgb(a).join(" ")+")":/^rgba?\\(/i.test(a)||(o=s.black),r=(o||a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g," ")}return 8>=f||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return 8>=f?4===a.split(" ").length&&(a=a.split(/\\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=f?"rgb":"rgba")+"("+a.replace(/\\s+/g,",").replace(/\\.(\\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var a;if(a=0===i?t:e[i]+t.replace(/^\\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[t]=a,[a,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,n=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\\\s)"+e.split(" ").join("|")+"(\\\\s|$)","gi")," ")}},getPropertyValue:function(t,i,a,r){function s(t,i){function a(){u&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=f)l=p.css(t,i);else{var u=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(u=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!r){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var c=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return a(),c}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return a(),d}}var h;h=o(t)===n?e.getComputedStyle(t,null):o(t).computedStyle?o(t).computedStyle:o(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),l=9===f&&"filter"===i?h.getPropertyValue(i):h[i],(""===l||null===l)&&(l=t.style[i]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var u=i,c=x.Hooks.getRoot(u);a===n&&(a=x.getPropertyValue(t,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(a=x.Normalizations.registered[c]("extract",t,a)),l=x.Hooks.extractValue(u,a)}else if(x.Normalizations.registered[i]){var d,h;d=x.Normalizations.registered[i]("name",t),"transform"!==d&&(h=s(t,x.Names.prefixCheck(d)[0]),x.Values.isCSSNullValue(h)&&x.Hooks.templates[i]&&(h=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,h)}if(!/^[\\d-]/.test(l))if(o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(v){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,a,r){var s=i;if("scroll"===i)r.container?r.container["scroll"+r.direction]=n:"Left"===r.direction?e.scrollTo(n,r.alternateValue):e.scrollTo(r.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=o(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,u=x.Hooks.getRoot(i);a=a||x.getPropertyValue(t,u),n=x.Hooks.injectValue(l,n,a),i=u}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=f)try{t.style[s]=n}catch(c){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((f||b.State.isAndroid&&!b.State.isChrome)&&o(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(o(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var a,r;p.each(o(t).transformCache,function(e){return a=o(t).transformCache[e],"transformPerspective"===e?(r=a,!0):(9===f&&"rotateZ"===e&&(e="rotate"),void(i+=e+a+" "))}),r&&(i="perspective"+r+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var a=n;return t=r(t),p.each(t,function(t,r){if(o(r)===n&&b.init(r),i===n)a===n&&(a=b.CSS.getPropertyValue(r,e));else{var s=b.CSS.setPropertyValue(r,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(r),a=s}}),a};var C=function(){function t(){return s?P.promise||null:l}function a(){function t(){function t(t,e){var i=n,a=n,o=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\\d-]/.test(t[1])||v.isFunction(t[1])||x.RegEx.isHex.test(t[1])?o=t[1]:(v.isString(t[1])&&!x.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(a=e?t[1]:u(t[1],s.duration),t[2]!==n&&(o=t[2]))):i=t,e||(a=a||s.easing),v.isFunction(i)&&(i=i.call(r,T,k)),v.isFunction(o)&&(o=o.call(r,T,k)),[i||0,a,o]}function d(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}function f(){var t={myParent:r.parentNode||i.body,position:x.getPropertyValue(r,"position"),fontSize:x.getPropertyValue(r,"fontSize")},n=t.position===V.lastPosition&&t.myParent===V.lastParent,a=t.fontSize===V.lastFontSize;V.lastParent=t.myParent,V.lastPosition=t.position,V.lastFontSize=t.fontSize;var s=100,l={};if(a&&n)l.emToPx=V.lastEmToPx,l.percentToPxWidth=V.lastPercentToPxWidth,l.percentToPxHeight=V.lastPercentToPxHeight;else{var u=o(r).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(u),t.myParent.appendChild(u),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(u,e,"hidden")}),b.CSS.setPropertyValue(u,"position",t.position),b.CSS.setPropertyValue(u,"fontSize",t.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(u,e,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=V.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=V.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=V.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,t.myParent.removeChild(u)}return null===V.remToPx&&(V.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===V.vwToPx&&(V.vwToPx=parseFloat(e.innerWidth)/100,V.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=V.remToPx,l.vwToPx=V.vwToPx,l.vhToPx=V.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),r),l}if(s.begin&&0===T)try{s.begin.call(h,h)}catch(m){setTimeout(function(){throw m},1)}if("scroll"===E){var w,C,S,O=/^x$/i.test(s.axis)?"Left":"Top",A=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,w=s.container["scroll"+O],S=w+p(r).position()[O.toLowerCase()]+A):s.container=null:(w=b.State.scrollAnchor[b.State["scrollProperty"+O]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===O?"Top":"Left")]],S=p(r).offset()[O.toLowerCase()]+A),l={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:S,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:O,alternateValue:C}},element:r},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,r)}else if("reverse"===E){if(!o(r).tweensContainer)return void p.dequeue(r,s.queue);"none"===o(r).opts.display&&(o(r).opts.display="auto"),"hidden"===o(r).opts.visibility&&(o(r).opts.visibility="visible"),o(r).opts.loop=!1,o(r).opts.begin=null,o(r).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},o(r).opts,s);var q=p.extend(!0,{},o(r).tweensContainer);for(var M in q)if("element"!==M){var _=q[M].startValue;q[M].startValue=q[M].currentValue=q[M].endValue,q[M].endValue=_,v.isEmptyObject(y)||(q[M].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+M+"): "+JSON.stringify(q[M]),r)}l=q}else if("start"===E){var q;o(r).tweensContainer&&o(r).isAnimating===!0&&(q=o(r).tweensContainer),p.each(g,function(e,i){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var a=t(i,!0),r=a[0],o=a[1],s=a[2];if(x.RegEx.isHex.test(r)){for(var l=["Red","Green","Blue"],u=x.Values.hexToRgb(r),c=s?x.Values.hexToRgb(s):n,d=0;d<l.length;d++){var p=[u[d]];o&&p.push(o),c!==n&&p.push(c[d]),g[e+l[d]]=p}delete g[e]}}});for(var I in g){var D=t(g[I]),z=D[0],Q=D[1],L=D[2];I=x.Names.camelCase(I);var N=x.Hooks.getRoot(I),F=!1;if(o(r).isSVG||"tween"===N||x.Names.prefixCheck(N)[1]!==!1||x.Normalizations.registered[N]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(I)&&!L&&0!==z&&(L=0),s._cacheValues&&q&&q[I]?(L===n&&(L=q[I].endValue+q[I].unitType),F=o(r).rootPropertyValueCache[N]):x.Hooks.registered[I]?L===n?(F=x.getPropertyValue(r,N),L=x.getPropertyValue(r,I,F)):F=x.Hooks.templates[N][1]:L===n&&(L=x.getPropertyValue(r,I));var W,$,R,X=!1;if(W=d(I,L),L=W[0],R=W[1],W=d(I,z),z=W[0].replace(/^([+-\\/*])=/,function(t,e){return X=e,""}),$=W[1],L=parseFloat(L)||0,z=parseFloat(z)||0,"%"===$&&(/^(fontSize|lineHeight)$/.test(I)?(z/=100,$="em"):/^scale/.test(I)?(z/=100,$=""):/(Red|Green|Blue)$/i.test(I)&&(z=z/100*255,$="")),/[\\/*]/.test(X))$=R;else if(R!==$&&0!==L)if(0===z)$=R;else{a=a||f();var H=/margin|padding|left|right|width|text|word|letter/i.test(I)||/X$/.test(I)||"x"===I?"x":"y";\r\nswitch(R){case"%":L*="x"===H?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:L*=a[R+"ToPx"]}switch($){case"%":L*=1/("x"===H?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:L*=1/a[$+"ToPx"]}}switch(X){case"+":z=L+z;break;case"-":z=L-z;break;case"*":z=L*z;break;case"/":z=L/z}l[I]={rootPropertyValue:F,startValue:L,currentValue:L,endValue:z,unitType:$,easing:Q},b.debug&&console.log("tweensContainer ("+I+"): "+JSON.stringify(l[I]),r)}else b.debug&&console.log("Skipping ["+N+"] due to a lack of browser support.")}l.element=r}l.element&&(x.Values.addClass(r,"velocity-animating"),j.push(l),""===s.queue&&(o(r).tweensContainer=l,o(r).opts=s),o(r).isAnimating=!0,T===k';
  builder.string += '-1?(b.State.calls.push([j,h,s,null,P.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):T++)}var a,r=this,s=p.extend({},b.defaults,y),l={};switch(o(r)===n&&b.init(r),parseFloat(s.delay)&&s.queue!==!1&&p.queue(r,s.queue,function(t){b.velocityQueueEntryFlag=!0,o(r).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(r))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(t,s.delay):t():p.queue(r,s.queue,function(e,i){return i===!0?(P.promise&&P.resolver(h),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(r)[0]||p.dequeue(r)}var s,l,f,h,g,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,f=0,h=this,l=this):(s=!0,f=1,h=w?arguments[0].elements||arguments[0].e:arguments[0]),h=r(h)){w?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[f],y=arguments[f+1]);var k=h.length,T=0;if(!/^(stop|finish)$/i.test(g)&&!p.isPlainObject(y)){var S=f+1;y={};for(var O=S;O<arguments.length;O++)v.isArray(arguments[O])||!/^(fast|normal|slow)$/i.test(arguments[O])&&!/^\\d/.test(arguments[O])?v.isString(arguments[O])||v.isArray(arguments[O])?y.easing=arguments[O]:v.isFunction(arguments[O])&&(y.complete=arguments[O]):y.duration=arguments[O]}var P={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var E;switch(g){case"scroll":E="scroll";break;case"reverse":E="reverse";break;case"finish":case"stop":p.each(h,function(t,e){o(e)&&o(e).delayTimer&&(clearTimeout(o(e).delayTimer.setTimeout),o(e).delayTimer.next&&o(e).delayTimer.next(),delete o(e).delayTimer)});var A=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,a){var r=y===n?"":y;return r===!0||e[2].queue===r||y===n&&e[2].queue===!1?void p.each(h,function(i,n){n===a&&((y===!0||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===g?(o(n)&&o(n).tweensContainer&&r!==!1&&p.each(o(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),A.push(t)):"finish"===g&&(e[2].duration=1))}):!0})}),"stop"===g&&(p.each(A,function(t,e){d(e,!0)}),P.promise&&P.resolver(h)),t();default:if(!p.isPlainObject(g)||v.isEmptyObject(g)){if(v.isString(g)&&b.Redirects[g]){var q=p.extend({},y),M=q.duration,_=q.delay||0;return q.backwards===!0&&(h=p.extend(!0,[],h).reverse()),p.each(h,function(t,e){parseFloat(q.stagger)?q.delay=_+parseFloat(q.stagger)*t:v.isFunction(q.stagger)&&(q.delay=_+q.stagger.call(e,t,k)),q.drag&&(q.duration=parseFloat(M)||(/^(callout|transition)/.test(g)?1e3:m),q.duration=Math.max(q.duration*(q.backwards?1-t/k:(t+1)/k),.75*q.duration,200)),b.Redirects[g].call(e,e,q||{},t,k,h,P.promise?P:n)}),t()}var I="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(I)):console.log(I),t()}E="start"}var V={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},j=[];p.each(h,function(t,e){v.isNode(e)&&a.call(e)});var D,q=p.extend({},b.defaults,y);if(q.loop=parseInt(q.loop),D=2*q.loop-1,q.loop)for(var z=0;D>z;z++){var Q={delay:q.delay,progress:q.progress};z===D-1&&(Q.display=q.display,Q.visibility=q.visibility,Q.complete=q.complete),C(h,"reverse",Q)}return t()}};b=p.extend(C,b),b.animate=C;var k=e.requestAnimationFrame||h;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},c()):k=e.requestAnimationFrame||h}),t.Velocity=b,t!==e&&(t.fn.velocity=C,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,a,r,o,s){var l=p.extend({},i),u=l.begin,c=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(o,o);for(var i in d){f[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)t.style[e]=f[e];c&&c.call(o,o),s&&s.resolver(o)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,a,r,o,s){var l=p.extend({},i),u={opacity:"In"===e?1:0},c=l.complete;l.complete=a!==r-1?l.begin=null:function(){c&&c.call(o,o),s&&s.resolver(o)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)})),!function(t,e,i,n){"use strict";function a(t,e,i){return setTimeout(c(t,i),e)}function r(t,e,i){return Array.isArray(t)?(o(t,i[e],i),!0):!1}function o(t,e,i){var a;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(a=0;a<t.length;)e.call(i,t[a],a,t),a++;else for(a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function s(t,e,i){for(var a=Object.keys(e),r=0;r<a.length;)(!i||i&&t[a[r]]===n)&&(t[a[r]]=e[a[r]]),r++;return t}function l(t,e){return s(t,e,!0)}function u(t,e,i){var n,a=e.prototype;n=t.prototype=Object.create(a),n.constructor=t,n._super=a,i&&s(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ct?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function f(t,e,i){o(m(e),function(e){t.addEventListener(e,i,!1)})}function h(t,e,i){o(m(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],a=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];y(a,o)<0&&n.push(t[r]),a[r]=o,r++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,a,r=e[0].toUpperCase()+e.slice(1),o=0;o<lt.length;){if(i=lt[o],a=i?i+r:e,a in t)return a;o++}return n}function C(){return ht++}function k(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e,i=t.options.inputClass;return new(e=i?i:mt?L:yt?W:gt?R:Q)(t,O)}function O(t,e,i){var n=i.pointers.length,a=i.changedPointers.length,r=e&Tt&&0===n-a,o=e&(Ot|Pt)&&0===n-a;i.isFirst=!!r,i.isFinal=!!o,r&&(t.session={}),i.eventType=e,P(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function P(t,e){var i=t.session,n=e.pointers,a=n.length;i.firstInput||(i.firstInput=q(e)),a>1&&!i.firstMultiple?i.firstMultiple=q(e):1===a&&(i.firstMultiple=!1);var r=i.firstInput,o=i.firstMultiple,s=o?o.center:r.center,l=e.center=M(n);e.timeStamp=ft(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=j(s,l),e.distance=V(s,l),E(i,e),e.offsetDirection=I(e.deltaX,e.deltaY),e.scale=o?z(o.pointers,n):1,e.rotation=o?D(o.pointers,n):0,A(i,e);var u=t.element;v(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function E(t,e){var i=e.center,n=t.offsetDelta||{},a=t.prevDelta||{},r=t.prevInput||{};(e.eventType===Tt||r.eventType===Ot)&&(a=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=a.x+(i.x-n.x),e.deltaY=a.y+(i.y-n.y)}function A(t,e){var i,a,r,o,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=Pt&&(l>kt||s.velocity===n)){var u=s.deltaX-e.deltaX,c=s.deltaY-e.deltaY,d=_(l,u,c);a=d.x,r=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,o=I(u,c),t.lastInterval=e}else i=s.velocity,a=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=i,e.velocityX=a,e.velocityY=r,e.direction=o}function q(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ft(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,a=0;e>a;)i+=t[a].clientX,n+=t[a].clientY,a++;return{x:dt(i/e),y:dt(n/e)}}function _(t,e,i){return{x:e/t||0,y:i/t||0}}function I(t,e){return t===e?Et:pt(t)>=pt(e)?t>0?At:qt:e>0?Mt:_t}function V(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return Math.sqrt(n*n+a*a)}function j(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return 180*Math.atan2(a,n)/Math.PI}function D(t,e){return j(e[1],e[0],zt)-j(t[1],t[0],zt)}function z(t,e){return V(e[0],e[1],zt)/V(t[0],t[1],zt)}function Q(){this.evEl=Lt,this.evWin=Nt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function L(){this.evEl=$t,this.evWin=Rt,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Ht,this.evWin=Yt,this.started=!1,T.apply(this,arguments)}function F(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Ot|Pt)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function W(){this.evTarget=Gt,this.targetIds={},T.apply(this,arguments)}function $(t,e){var i=b(t.touches),n=this.targetIds;if(e&(Tt|St)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var a,r,o=b(t.changedTouches),s=[],l=this.target;if(r=i.filter(function(t){return v(t.target,l)}),e===Tt)for(a=0;a<r.length;)n[r[a].identifier]=!0,a++;for(a=0;a<o.length;)n[o[a].identifier]&&s.push(o[a]),e&(Ot|Pt)&&delete n[o[a].identifier],a++;return s.length?[w(r.concat(s),"identifier",!0),s]:void 0}function R(){T.apply(this,arguments);var t=c(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new Q(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function H(t){if(g(t,ee))return ee;var e=g(t,ie),i=g(t,ne);return e&&i?ie+" "+ne:e||i?e?ie:ne:g(t,te)?te:Kt}function Y(t){this.id=C(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ae,this.simultaneous={},this.requireFail=[]}function B(t){return t&ue?"cancel":t&se?"end":t&oe?"move":t&re?"start":""}function G(t){return t==_t?"down":t==Mt?"up":t==At?"left":t==qt?"right":""}function U(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function at(t,e){return e=e||{},e.recognizers=p(e.recognizers,at.defaults.preset),new rt(t,e)}function rt(t,e){e=e||{},this.options=l(e,at.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),ot(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ot(t,e){var i=t.element;o(t.options.cssProps,function(t,n){i.style[x(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ut=e.createElement("div"),ct="function",dt=Math.round,pt=Math.abs,ft=Date.now,ht=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in t,mt=x(t,"PointerEvent")!==n,yt=gt&&vt.test(navigator.userAgent),bt="touch",wt="pen",xt="mouse",Ct="kinect",kt=25,Tt=1,St=2,Ot=4,Pt=8,Et=1,At=2,qt=4,Mt=8,_t=16,It=At|qt,Vt=Mt|_t,jt=It|Vt,Dt=["x","y"],zt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(k(this.element),this.evWin,this.domHandler)}};var Qt={mousedown:Tt,mousemove:St,mouseup:Ot},Lt="mousedown",Nt="mousemove mouseup";u(Q,T,{handler:function(t){var e=Qt[t.type];e&Tt&&0===t.button&&(this.pressed=!0),e&St&&1!==t.which&&(e=Ot),this.pressed&&this.allow&&(e&Ot&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var Ft={pointerdown:Tt,pointermove:St,pointerup:Ot,pointercancel:Pt,pointerout:Pt},Wt={2:bt,3:wt,4:xt,5:Ct},$t="pointerdown",Rt="pointermove pointerup pointercancel";t.MSPointerEvent&&($t="MSPointerDown",Rt="MSPointerMove MSPointerUp MSPointerCancel"),u(L,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),a=Ft[n],r=Wt[t.pointerType]||t.pointerType,o=r==bt,s=y(e,t.pointerId,"pointerId");a&Tt&&(0===t.button||o)?0>s&&(e.push(t),s=e.length-1):a&(Ot|Pt)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,a,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(s,1))}});var Xt={touchstart:Tt,touchmove:St,touchend:Ot,touchcancel:Pt},Ht="touchstart",Yt="touchstart touchmove touchend touchcancel";u(N,T,{handler:function(t){var e=Xt[t.type];if(e===Tt&&(this.started=!0),this.started){var i=F.call(this,t,e);e&(Ot|Pt)&&0===i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Bt={touchstart:Tt,touchmove:St,touchend:Ot,touchcancel:Pt},Gt="touchstart touchmove touchend touchcancel";u(W,T,{handler:function(t){var e=Bt[t.type],i=$.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),u(R,T,{handler:function(t,e,i){var n=i.pointerType==bt,a=i.pointerType==xt;if(n)this.mouse.allow=!1;else if(a&&!this.mouse.allow)return;e&(Ot|Pt)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ut=x(ut.style,"touchAction"),Zt=Ut!==n,Jt="compute",Kt="auto",te="manipulation",ee="none",ie="pan-x",ne="pan-y";X.prototype={set:function(t){t==Jt&&(t=this.compute()),Zt&&(this.manager.element.style[Ut]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),H(t.join(" "))},preventDefaults:function(t){if(!Zt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,a=g(n,ee),r=g(n,ne),o=g(n,ie);return a||r&&i&It||o&&i&Vt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ae=1,re=2,oe=4,se=8,le=se,ue=16,ce=32;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(r(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=U(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return r(t,"dropRecognizeWith",this)?this:(t=U(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(r(t,"requireFailure",this))return this;var e=this.requireFail;return t=U(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(r(t,"dropRequireFailure",this))return this;t=U(t,this);';
  builder.string += 'var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;se>n&&e(!0),e(),n>=se&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=ce)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(ce|ae)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(le|ue|ce)&&(this.state=ae),this.state=this.process(e),void(this.state&(re|oe|se|ue)&&this.tryEmit(e))):(this.reset(),void(this.state=ce))},process:function(){},getTouchAction:function(){},reset:function(){}},u(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(re|oe),a=this.attrTest(t);return n&&(i&Pt||!a)?e|ue:n||a?i&Ot?e|se:e&re?e|oe:re:ce}}),u(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(ne),t&Vt&&e.push(ie),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,a=t.direction,r=t.deltaX,o=t.deltaY;return a&e.direction||(e.direction&It?(a=0===r?Et:0>r?At:qt,i=r!=this.pX,n=Math.abs(t.deltaX)):(a=0===o?Et:0>o?Mt:_t,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=a,i&&n>e.threshold&&a&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&re||!(this.state&re)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),u(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&re)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),u(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Ot|Pt)&&!r)this.reset();else if(t.eventType&Tt)this.reset(),this._timer=a(function(){this.state=le,this.tryEmit()},e.time,this);else if(t.eventType&Ot)return le;return ce},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===le&&(t&&t.eventType&Ot?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ft(),this.manager.emit(this.options.event,this._input)))}}),u(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&re)}}),u(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:It|Vt,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|Vt)?e=t.velocity:i&It?e=t.velocityX:i&Vt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Ot},emit:function(t){var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),u(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[te]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Tt&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=Ot)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,s=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=a(function(){this.state=le,this.tryEmit()},e.interval,this),re):le}return ce},failTimeout:function(){return this._timer=a(function(){this.state=ce},this.options.interval,this),ce},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==le&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),at.VERSION="2.0.4",at.defaults={domEvents:!1,touchAction:Jt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:It}],[J,{direction:It},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var de=1,pe=2;rt.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?pe:de},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,a=e.curRecognizer;(!a||a&&a.state&le)&&(a=e.curRecognizer=null);for(var r=0;r<n.length;)i=n[r],e.stopped===pe||a&&i!=a&&!i.canRecognizeWith(a)?i.reset():i.recognize(t),!a&&i.state&(re|oe|se)&&(a=e.curRecognizer=i),r++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(r(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(r(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(m(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(at,{INPUT_START:Tt,INPUT_MOVE:St,INPUT_END:Ot,INPUT_CANCEL:Pt,STATE_POSSIBLE:ae,STATE_BEGAN:re,STATE_CHANGED:oe,STATE_ENDED:se,STATE_RECOGNIZED:le,STATE_CANCELLED:ue,STATE_FAILED:ce,DIRECTION_NONE:Et,DIRECTION_LEFT:At,DIRECTION_RIGHT:qt,DIRECTION_UP:Mt,DIRECTION_DOWN:_t,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:Vt,DIRECTION_ALL:jt,Manager:rt,Input:T,TouchAction:X,TouchInput:W,MouseInput:Q,PointerEventInput:L,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:f,off:h,each:o,merge:l,extend:s,inherit:u,bindFn:c,prefixed:x}),typeof define==ct&&define.amd?define(function(){return at}):"undefined"!=typeof module&&module.exports?module.exports=at:t[i]=at}(window,document,"Hammer"),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var a=t(i);a.data("hammer")||a.data("hammer",new e(a[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){return"fixed"===$(this).css("position")?(n=!0,!1):void 0}),n};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(t){t.fn.collapsible=function(e){var i={accordion:void 0};return e=t.extend(i,e),this.each(function(){function i(e){s=o.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),s.not(e).removeClass("active").parent().removeClass("active"),s.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function n(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function a(t){var e=r(t);return e.length>0}function r(t){return t.closest("li > .collapsible-header")}var o=t(this),s=t(this).find("> li > .collapsible-header"),l=o.data("collapsible");o.off("click.collapse","> li > .collapsible-header"),s.off("click.collapse"),o.on("click.collapse","> li > .collapsible-header",function(o){var s=t(this),u=t(o.target);a(u)&&(u=r(u)),u.toggleClass("active"),e.accordion||"accordion"===l||void 0===l?i(u):(n(u),s.hasClass("active")&&n(s))});var s=o.find("> li > .collapsible-header");e.accordion||"accordion"===l||void 0===l?i(s.filter(".active").first()):s.filter(".active").each(function(){n(t(this))})})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function n(){void 0!==o.data("induration")&&(s.inDuration=o.data("inDuration")),void 0!==o.data("outduration")&&(s.outDuration=o.data("outDuration")),void 0!==o.data("constrainwidth")&&(s.constrain_width=o.data("constrainwidth")),void 0!==o.data("hover")&&(s.hover=o.data("hover")),void 0!==o.data("gutter")&&(s.gutter=o.data("gutter")),void 0!==o.data("beloworigin")&&(s.belowOrigin=o.data("beloworigin")),void 0!==o.data("alignment")&&(s.alignment=o.data("alignment"))}function a(e){"focus"===e&&(l=!0),n(),u.addClass("active"),o.addClass("active"),s.constrain_width===!0?u.css("width",o.outerWidth()):u.css("white-space","nowrap");var i,a=window.innerHeight,r=o.innerHeight(),c=o.offset().left,d=o.offset().top-t(window).scrollTop(),p=s.alignment,f=0;if(s.belowOrigin===!0&&(f=r),c+u.innerWidth()>t(window).width()?p="right":c-u.innerWidth()+o.innerWidth()<0&&(p="left"),d+u.innerHeight()>a)if(d+r-u.innerHeight()<0){var h=a-d-f;u.css("max-height",h)}else f||(f+=r),f-=u.innerHeight();if("left"===p)i=s.gutter,leftPosition=o.position().left+i;else if("right"===p){var v=o.position().left+o.outerWidth()-u.outerWidth();i=-s.gutter,leftPosition=v+i}u.css({position:"absolute",top:o.position().top+f,left:leftPosition}),u.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"})}function r(){l=!1,u.fadeOut(s.outDuration),u.removeClass("active"),o.removeClass("active"),setTimeout(function(){u.css("max-height","")},s.outDuration)}var o=t(this),s=t.extend({},i,e),l=!1,u=t("#"+o.attr("data-activates"));if(n(),o.after(u),s.hover){var c=!1;o.unbind("click."+o.attr("id")),o.on("mouseenter",function(){c===!1&&(a(),c=!0)}),o.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(u)||(u.stop(!0,!0),r(),c=!1)}),u.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(o)||(u.stop(!0,!0),r(),c=!1)})}else o.unbind("click."+o.attr("id")),o.bind("click."+o.attr("id"),function(e){l||(o[0]!=e.currentTarget||o.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?o.hasClass("active")&&(r(),t(document).unbind("click."+u.attr("id")+" touchstart."+u.attr("id"))):(e.preventDefault(),a("click")),u.hasClass("active")&&t(document).bind("click."+u.attr("id")+" touchstart."+u.attr("id"),function(e){u.is(e.target)||o.is(e.target)||o.find(e.target).length||(r(),t(document).unbind("click."+u.attr("id")+" touchstart."+u.attr("id")))}))});o.on("open",function(t,e){a(e)}),o.on("close",r)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t){var e=0,i=0,n=function(){return i++,"materialize-lean-overlay-"+i};t.fn.extend({openModal:function(i){t("body").css("overflow","hidden");var a={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},r=n(),o=t(this),s=t(\'<div class="lean-overlay"><\/div>\'),l=++e;s.attr("id",r).css("z-index",1e3+2*l),o.data("overlay-id",r).css("z-index",1e3+2*l+1),t("body").append(s),i=t.extend(a,i),i.dismissible&&(s.click(function(){o.closeModal(i)}),t(document).on("keyup.leanModal"+r,function(t){27===t.keyCode&&o.closeModal(i)})),o.find(".modal-close").on("click.close",function(){o.closeModal(i)}),s.css({display:"block",opacity:0}),o.css({display:"block",opacity:0}),s.velocity({opacity:i.opacity},{duration:i.in_duration,queue:!1,ease:"easeOutCubic"}),o.data("associated-overlay",s[0]),o.hasClass("bottom-sheet")?o.velocity({bottom:"0",opacity:1},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}):(t.Velocity.hook(o,"scaleX",.7),o.css({top:i.starting_top}),o.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}))}}),t.fn.extend({closeModal:function(i){var n={out_duration:250,complete:void 0},a=t(this),r=a.data("overlay-id"),o=t("#"+r);i=t.extend(n,i),t("body").css("overflow",""),a.find(".modal-close").off("click.close"),t(document).off("keyup.leanModal"+r),o.velocity({opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutQuart"}),a.hasClass("bottom-sheet")?a.velocity({bottom:"-100%",opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){\r\no.css({display:"none"}),"function"==typeof i.complete&&i.complete(),o.remove(),e--}}):a.velocity({top:i.starting_top,opacity:0,scaleX:.7},{duration:i.out_duration,complete:function(){t(this).css("display","none"),"function"==typeof i.complete&&i.complete(),o.remove(),e--}})}}),t.fn.extend({leanModal:function(e){return this.each(function(){var i={starting_top:"4%"},n=t.extend(i,e);t(this).click(function(e){n.starting_top=(t(this).offset().top-t(window).scrollTop())/1.15;var i=t(this).attr("href")||"#"+t(this).data("target");t(i).openModal(n),e.preventDefault()})})}})}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){r=!1;var e=l.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,l.data("width")),o=l.data("height");l.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t("#materialbox-overlay").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){a=!1,t(this).remove()}}),l.velocity({width:n,height:o,left:0,top:0},{duration:s,queue:!1,easing:"easeOutQuad"}),t(".materialbox-caption").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),l.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),l.removeClass("active"),r=!0,t(this).remove(),i.css("overflow","")}})}if(!t(this).hasCla';
  builder.string += 'ss("initialized")){t(this).addClass("initialized");var i,n,a=!1,r=!0,o=275,s=200,l=t(this),u=t("<div><\/div>").addClass("material-placeholder");l.wrap(u),l.on("click",function(){var s=l.parent(".material-placeholder"),u=window.innerWidth,c=window.innerHeight,d=l.width(),p=l.height();if(r===!1)return e(),!1;if(a&&r===!0)return e(),!1;r=!1,l.addClass("active"),a=!0,s.css({width:s[0].getBoundingClientRect().width,height:s[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=s[0].parentNode;for(;null!==n&&!t(n).is(document);){var f=t(n);"hidden"===f.css("overflow")&&(f.css("overflow","visible"),i=void 0===i?f:i.add(f)),n=n.parentNode}l.css({position:"absolute","z-index":1e3}).data("width",d).data("height",p);var h=t(\'<div id="materialbox-overlay"><\/div>\').css({opacity:0}).click(function(){r===!0&&e()});if(t("body").append(h),h.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"}),""!==l.data("caption")){var v=t(\'<div class="materialbox-caption"><\/div>\');v.text(l.data("caption")),t("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"})}var g=0,m=d/u,y=p/c,b=0,w=0;m>y?(g=p/d,b=.9*u,w=.9*u*g):(g=d/p,b=.9*c*g,w=.9*c),l.hasClass("responsive-img")?l.velocity({"max-width":b,width:d},{duration:0,queue:!1,complete:function(){l.css({left:0,top:0}).velocity({height:w,width:b,left:t(document).scrollLeft()+u/2-l.parent(".material-placeholder").offset().left-b/2,top:t(document).scrollTop()+c/2-l.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){r=!0}})}}):l.css("left",0).css("top",0).velocity({height:w,width:b,left:t(document).scrollLeft()+u/2-l.parent(".material-placeholder").offset().left-b/2,top:t(document).scrollTop()+c/2-l.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){r=!0}})}),t(window).scroll(function(){a&&e()}),t(document).keyup(function(t){27===t.keyCode&&r===!0&&a&&e()})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(){function i(i){var a;a=601>e?n.height()>0?n.height():n.children("img").height():n.height()>0?n.height():500;var r=n.children("img").first(),o=r.height(),s=o-a,l=n.offset().top+a,u=n.offset().top,c=t(window).scrollTop(),d=window.innerHeight,p=c+d,f=(p-u)/(a+d),h=Math.round(s*f);i&&r.css("display","block"),l>c&&c+d>u&&r.css("transform","translate3D(-50%,"+h+"px, 0)")}var n=t(this);n.addClass("parallax"),n.children("img").one("load",function(){i(!0)}).each(function(){this.complete&&t(this).load()}),t(window).scroll(function(){e=t(window).width(),i(!1)}),t(window).resize(function(){e=t(window).width(),i(!1)})})}}(jQuery),function(t){var e={init:function(){return this.each(function(){var e=t(this);t(window).width();e.width("100%");var i,n,a=e.find("li.tab a"),r=e.width(),o=e.find("li").first().outerWidth(),s=0;i=t(a.filter(\'[href="\'+location.hash+\'"]\')),0===i.length&&(i=t(this).find("li.tab a.active").first()),0===i.length&&(i=t(this).find("li.tab a").first()),i.addClass("active"),s=a.index(i),0>s&&(s=0),n=t(i[0].hash),e.append(\'<div class="indicator"><\/div>\');var l=e.find(".indicator");e.is(":visible")&&(l.css({right:r-(s+1)*o}),l.css({left:s*o})),t(window).resize(function(){r=e.width(),o=e.find("li").first().outerWidth(),0>s&&(s=0),0!==o&&0!==r&&(l.css({right:r-(s+1)*o}),l.css({left:s*o}))}),a.not(i).each(function(){t(this.hash).hide()}),e.on("click","a",function(u){if(t(this).parent().hasClass("disabled"))return void u.preventDefault();r=e.width(),o=e.find("li").first().outerWidth(),i.removeClass("active"),n.hide(),i=t(this),n=t(this.hash),a=e.find("li.tab a"),i.addClass("active");var c=s;s=a.index(t(this)),0>s&&(s=0),n.show(),s-c>=0?(l.velocity({right:r-(s+1)*o},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({left:s*o},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(l.velocity({left:s*o},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({right:r-(s+1)*o},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),u.preventDefault()})})},select_tab:function(t){this.find(\'a[href="#\'+t+\'"]\').trigger("click")}};t.fn.tabs=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery),function(t){t.fn.tooltip=function(i){var n=5,a={delay:350};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(a,i),this.each(function(){var a=Materialize.guid(),r=t(this);r.attr("data-tooltip-id",a);var o=t("<span><\/span>").text(r.attr("data-tooltip")),s=t("<div><\/div>");s.addClass("material-tooltip").append(o).appendTo(t("body")).attr("id",a);var l=t("<div><\/div>").addClass("backdrop");l.appendTo(s),l.css({top:0,left:0}),r.off("mouseenter.tooltip mouseleave.tooltip");var u,c=!1;r.on({"mouseenter.tooltip":function(){var t=r.attr("data-delay");t=void 0===t||""===t?i.delay:t,u=setTimeout(function(){c=!0,s.velocity("stop"),l.velocity("stop"),s.css({display:"block",left:"0px",top:"0px"}),s.children("span").text(r.attr("data-tooltip"));var t,i,a,o=r.outerWidth(),u=r.outerHeight(),d=r.attr("data-position"),p=s.outerHeight(),f=s.outerWidth(),h="0px",v="0px",g=8;"top"===d?(t=r.offset().top-p-n,i=r.offset().left+o/2-f/2,a=e(i,t,f,p),h="-10px",l.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:p,marginLeft:f/2-l.width()/2})):"left"===d?(t=r.offset().top+u/2-p/2,i=r.offset().left-f-n,a=e(i,t,f,p),v="-10px",l.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:p/2,marginLeft:f})):"right"===d?(t=r.offset().top+u/2-p/2,i=r.offset().left+o+n,a=e(i,t,f,p),v="+10px",l.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:p/2,marginLeft:"0px"})):(t=r.offset().top+r.outerHeight()+n,i=r.offset().left+o/2-f/2,a=e(i,t,f,p),h="+10px",l.css({marginLeft:f/2-l.width()/2})),s.css({top:a.y,left:a.x}),g=f/8,8>g&&(g=8),("right"===d||"left"===d)&&(g=f/10,6>g&&(g=6)),s.velocity({marginTop:h,marginLeft:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:g},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},t)},"mouseleave.tooltip":function(){c=!1,clearTimeout(u),setTimeout(function(){1!=c&&(s.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),l.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){l.css("display","none"),s.css("display","none"),c=!1}}))},225)}})}))};var e=function(e,i,n,a){var r=e,o=i;return 0>r?r=4:r+n>window.innerWidth&&(r-=r+n-window.innerWidth),0>o?o=4:o+a>window.innerHeight+t(window).scrollTop&&(o-=o+a-window.innerHeight),{x:r,y:o}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,a={top:0,left:0},r=t&&t.ownerDocument;return e=r.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(a=t.getBoundingClientRect()),n=i(r),{top:a.top+n.pageYOffset-e.clientTop,left:a.left+n.pageXOffset-e.clientLeft}}function a(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function r(t){if(c.allowEvent(t)===!1)return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(!(i instanceof SVGElement||-1===i.className.indexOf("waves-effect"))){e=i;break}if(i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}function o(e){var i=r(e);null!==i&&(u.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",u.hide,!1),i.addEventListener("touchcancel",u.hide,!1)),i.addEventListener("mouseup",u.hide,!1),i.addEventListener("mouseleave",u.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),u={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,r=document.createElement("div");r.className="waves-ripple",i.appendChild(r);var o=n(i),s=t.pageY-o.top,l=t.pageX-o.left,c="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-o.top,l=t.touches[0].pageX-o.left),r.setAttribute("data-hold",Date.now()),r.setAttribute("data-scale",c),r.setAttribute("data-x",l),r.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};r.className=r.className+" waves-notransition",r.setAttribute("style",a(d)),r.className=r.className.replace("waves-notransition",""),d["-webkit-transform"]=c,d["-moz-transform"]=c,d["-ms-transform"]=c,d["-o-transform"]=c,d.transform=c,d.opacity="1",d["-webkit-transition-duration"]=u.duration+"ms",d["-moz-transition-duration"]=u.duration+"ms",d["-o-transition-duration"]=u.duration+"ms",d["transition-duration"]=u.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",r.setAttribute("style",a(d))},hide:function(t){c.touchup(t);var e=this,i=(1.4*e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;i=n[n.length-1];var r=i.getAttribute("data-x"),o=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=Date.now()-Number(i.getAttribute("data-hold")),d=350-l;0>d&&(d=0),setTimeout(function(){var t={top:o+"px",left:r+"px",opacity:"0","-webkit-transition-duration":u.duration+"ms","-moz-transition-duration":u.duration+"ms","-o-transition-duration":u.duration+"ms","transition-duration":u.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",a(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},u.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var a=document.createElement("i");a.className=i.className+" waves-input-wrapper";var r=i.getAttribute("style");r||(r=""),a.setAttribute("style",r),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(a,i),a.appendChild(i)}}}},c={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?c.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){c.touches>0&&(c.touches-=1)},500):"mousedown"===t.type&&c.touches>0&&(e=!1),e},touchup:function(t){c.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(u.duration=e.duration),u.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",o,!1),document.body.addEventListener("mousedown",o,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(u.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",o,!1),e.addEventListener("mousedown",o,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),Materialize.toast=function(t,e,i,n){function a(t){var e=document.createElement("div");if(e.classList.add("toast"),i)for(var a=i.split(" "),r=0,o=a.length;o>r;r++)e.classList.add(a[r]);("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)?e.appendChild(t):t instanceof jQuery?e.appendChild(t[0]):e.innerHTML=t;var s=new Hammer(e,{prevent_default:!1});return s.on("pan",function(t){var i=t.deltaX,n=80;e.classList.contains("panning")||e.classList.add("panning");var a=1-Math.abs(i/n);0>a&&(a=0),Vel(e,{left:i,opacity:a},{duration:50,queue:!1,easing:"easeOutQuad"})}),s.on("panend",function(t){var i=t.deltaX,a=80;Math.abs(i)>a?Vel(e,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),e.parentNode.removeChild(e)}}):(e.classList.remove("panning"),Vel(e,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),e}i=i||"";var r=document.getElementById("toast-container");null===r&&(r=document.createElement("div"),r.id="toast-container",document.body.appendChild(r));var o=a(t);t&&r.appendChild(o),o.style.top="35px",o.style.opacity=0,Vel(o,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var s=e,l=setInterval(function(){null===o.parentNode&&window.clearInterval(l),o.classList.contains("panning")||(s-=20),0>=s&&(Vel(o,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(l))},20)},function(t){var e={init:function(e){var i={menuWidth:240,edge:"left",closeOnClick:!1};e=t.extend(i,e),t(this).each(function(){function i(i,l){n.trigger("side-nav-closing"),o=!1,s=!1,t("body").css("overflow",""),l?t("#sidenav-overlay").remove():t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(r.css({width:"",right:"",left:"0"}),l?(a.css("left",-1*(e.menuWidth+10)+"px"),i===!0&&a.css("width",e.menuWidth),n.trigger("side-nav-closed")):a.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&a.css("width",e.menuWidth),n.trigger("side-nav-closed")}})):(r.css({width:"",right:"0",left:""}),l?(enu_id.css("right",-1*(e.menuWidth+10)+"px"),i===!0&&a.css("width",e.menuWidth),n.trigger("side-nav-closed")):a.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&a.css("width",e.menuWidth),n.trigger("side-nav-closed")}}))}var n=t(this),a=t("#"+n.attr("data-activates"));240!=e.menuWidth&&a.css("width",e.menuWidth);var r=t(\'<div class="drag-target"><\/div>\');t("body").append(r),"left"==e.edge?(a.css("left",-1*(e.menuWidth+10)),r.css({left:0})):(a.addClass("right-aligned").css("right",-1*(e.menuWidth+10)).css("left",""),r.css({right:0})),a.hasClass("fixed")&&window.innerWidth>992&&a.css("left",0),a.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").css("opacity")&&s?i(!0):(a.css("left",""),a.css("width",e.menuWidth)):s===!1&&("left"===e.edge?a.css("left",-1*(e.menuWidth+10)):a.css("right",-1*(e.menuWidth+10)))}),e.closeOnClick===!0&&a.on("click.itemclick","a:not(.collapsible-header)",function(){i()});var o=!1,s=!1;r.on("click",function(){i()}),r.hammer({prevent_default:!1}).bind("pan",function(r){if("touch"==r.gesture.pointerType){var o=(r.gesture.direction,r.gesture.center.x);r.gesture.center.y,r.gesture.velocityX;if(t("body").css("overflow","hidden"),0===t("#sidenav-overlay").length){var l=t(\'<div id="sidenav-overlay"><\/div>\');l.css("opacity",0).click(function(){i()}),t("body").append(l)}if("left"===e.edge&&(o>e.menuWidth?o=e.menuWidth:0>o&&(o=0)),"left"===e.edge)o<e.menuWidth/2?(s=!1,n.trigger("side-nav-closed")):o>=e.menuWidth/2&&(s=!0,n.trigger("side-nav-opened")),a.css("left",o-e.menuWidth);else{o<window.innerWidth-e.menuWidth/2?(s=!0,n.trigger("side-nav-opened")):o>=window.innerWidth-e.menuWidth/2&&(s=!1,n.trigger("side-nav-closed"));var u=-1*(o-e.menuWidth/2);u>0&&(u=0),a.css("right",u)}var c;"left"===e.edge?(c=o/e.menuWidth,t("#sidenav-overlay").velocity({opacity:c},{duration:50,queue:!1,easing:"easeOutQuad"})):(c=Math.abs((o-window.innerWidth)/e.menuWidth),t("#sidenav-overlay").velocity({opacity:c},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(i){if("touch"==i.gesture.pointerType){var n=i.gesture.velocityX;o=!1,"left"===e.edge?s&&.3>=n||-.5>n?(a.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),r.css({width:"50%",right:0,left:""})):(!s||n>.3)&&(t("body").css("overflow",""),a.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),r.css({width:"10px",right:"",left:0})):s&';
  builder.string += '&n>=-.3||n>.5?(a.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),r.css({width:"50%",right:"",left:0})):(!s||-.3>n)&&(t("body").css("overflow",""),a.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),r.css({width:"10px",right:0,left:""}))}});var l=function(l){n.trigger("side-nav-opening"),t("body").css("overflow","hidden"),t("body").append(r),"left"===e.edge?(r.css({width:"50%",right:0,left:""}),l?a.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}):a.css("left","0")):(r.css({width:"50%",right:"",left:0}),l?a.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}):a.css("right","0"),a.css("left",""));var u=t(\'<div id="sidenav-overlay"><\/div>\');u.css("opacity",0).click(function(){s=!1,o=!1,i(),l?u.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}):u.remove()}),t("body").append(u),l?u.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){s=!0,o=!1,n.trigger("side-nav-opened")}}):(u.css("opacity","1"),s=!0,o=!1,n.trigger("side-nav-opened"))},u=function(t){s=!1,o=!1,i(!1,!t)};n.click(function(){return s===!0?u(!0):l(!0),!1}),n.on("menu-out",l),n.on("menu-in",u)})},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")},menuOut:function(){this.trigger("menu-out")},menuIn:function(){this.trigger("menu-in")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,a){var r=t();return t.each(o,function(t,o){if(o.height()>0){var s=o.offset().top,l=o.offset().left,u=l+o.width(),c=s+o.height(),d=!(l>i||a>u||s>n||e>c);d&&r.push(o)}}),r}function i(){++u;var i=r.scrollTop(),n=r.scrollLeft(),a=n+r.width(),o=i+r.height(),l=e(i+c.top+200,a+c.right,o+c.bottom,n+c.left);t.each(l,function(t,e){var i=e.data("scrollSpy:ticks");"number"!=typeof i&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",u)}),t.each(s,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==u&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),s=l}function n(){r.trigger("scrollSpy:winSize")}function a(t,e,i){var n,a,r,o=null,s=0;i||(i={});var l=function(){s=i.leading===!1?0:d(),o=null,r=t.apply(n,a),n=a=null};return function(){var u=d();s||i.leading!==!1||(s=u);var c=e-(u-s);return n=this,a=arguments,0>=c?(clearTimeout(o),o=null,s=u,r=t.apply(n,a),n=a=null):o||i.trailing===!1||(o=setTimeout(l,c)),r}}var r=t(window),o=[],s=[],l=!1,u=0,c={top:0,right:0,bottom:0,left:0},d=Date.now||function(){return(new Date).getTime()};t.scrollSpy=function(e,n){var s=[];e=t(e),e.each(function(e,i){o.push(t(i)),t(i).data("scrollSpy:id",e),t("a[href=#"+t(i).attr("id")+"]").click(function(e){e.preventDefault();var i=t(this.hash).offset().top+1;t("html, body").animate({scrollTop:i-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),n=n||{throttle:100},c.top=n.offsetTop||0,c.right=n.offsetRight||0,c.bottom=n.offsetBottom||0,c.left=n.offsetLeft||0;var u=a(i,n.throttle||100),d=function(){t(document).ready(u)};return l||(r.on("scroll",d),r.on("resize",d),l=!0),setTimeout(d,0),e.on("scrollSpy:enter",function(){s=t.grep(s,function(t){return 0!=t.height()});var e=t(this);s[0]?(t("a[href=#"+s[0].attr("id")+"]").removeClass("active"),e.data("scrollSpy:id")<s[0].data("scrollSpy:id")?s.unshift(t(this)):s.push(t(this))):s.push(t(this)),t("a[href=#"+s[0].attr("id")+"]").addClass("active")}),e.on("scrollSpy:exit",function(){if(s=t.grep(s,function(t){return 0!=t.height()}),s[0]){t("a[href=#"+s[0].attr("id")+"]").removeClass("active");var e=t(this);s=t.grep(s,function(t){return t.attr("id")!=e.attr("id")}),s[0]&&t("a[href=#"+s[0].attr("id")+"]").addClass("active")}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return r},e=e||{throttle:100},r.on("resize",a(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),a=e.css("font-size");a&&n.css("font-size",a),i&&n.css("font-family",i),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\\n");var r=n.html().replace(/\\n/g,"<br>");n.html(r),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.css("height",n.height())}Materialize.updateTextFields=function(){var e="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(e).each(function(e,i){t(i).val().length>0||i.autofocus||void 0!==t(this).attr("placeholder")||t(i)[0].validity.badInput===!0?t(this).siblings("label, i").addClass("active"):t(this).siblings("label, i").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){(0!==t(this).val().length||void 0!==t(this).attr("placeholder"))&&t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, i").addClass("active")}),t(document).on("blur",i,function(){var e=t(this);0===e.val().length&&e[0].validity.badInput!==!0&&void 0===e.attr("placeholder")&&e.siblings("label, i").removeClass("active"),0===e.val().length&&e[0].validity.badInput!==!0&&void 0!==e.attr("placeholder")&&e.siblings("i").removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("length"),i=parseInt(t.attr("length")),n=t.val().length;0===t.val().length&&t[0].validity.badInput===!1?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&i>=n||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};var n=t(".hiddendiv").first();n.length||(n=t(\'<div class="hiddendiv common"><\/div>\'),t("body").append(n));var a=".materialize-textarea";t(a).each(function(){var i=t(this);i.val().length&&e(i)}),t("body").on("keyup keydown autoresize",a,function(){e(t(this))}),t(document).on("change",\'.file-field input[type="file"]\',function(){for(var e=t(this).closest(".file-field"),i=e.find("input.file-path"),n=t(this)[0].files,a=[],r=0;r<n.length;r++)a.push(n[r].name);i.val(a.join(", ")),i.trigger("change")});var r,o="input[type=range]",s=!1;t(o).each(function(){var e=t(\'<span class="thumb"><span class="value"><\/span><\/span>\');t(this).after(e)});var l=".range-field";t(document).on("change",o,function(){var e=t(this).siblings(".thumb");e.find(".value").html(t(this).val())}),t(document).on("input mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb"),n=t(this).outerWidth();i.length<=0&&(i=t(\'<span class="thumb"><span class="value"><\/span><\/span>\'),t(this).after(i)),i.find(".value").html(t(this).val()),s=!0,t(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==e.type&&(r=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left,0>r?r=0:r>n&&(r=n),i.addClass("active").css("left",r)),i.find(".value").html(t(this).val())}),t(document).on("mouseup touchend",l,function(){s=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",l,function(e){var i,n=t(this).children(".thumb");if(s){n.hasClass("active")||n.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),i=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var a=t(this).outerWidth();0>i?i=0:i>a&&(i=a),n.addClass("active").css("left",i),n.find(".value").html(n.siblings(o).val())}}),t(document).on("mouseout touchleave",l,function(){if(!s){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}})}),t.fn.material_select=function(e){function i(t,e,i){var a=t.indexOf(e),r=-1===a;return r?t.push(e):t.splice(a,1),i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",r),n(t,i),r}function n(t,e){for(var i="",n=0,a=t.length;a>n;n++){var r=e.find("option").eq(t[n]).text();i+=0===n?r:", "+r}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var a=n.attr("multiple")?!0:!1,r=n.data("select-id");if(r&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+r).remove()),"destroy"===e)return void n.data("select-id",null).removeClass("initialized");var o=Materialize.guid();n.data("select-id",o);var s=t(\'<div class="select-wrapper"><\/div>\');s.addClass(n.attr("class"));var l=t(\'<ul id="select-options-\'+o+\'" class="dropdown-content select-dropdown \'+(a?"multiple-select-dropdown":"")+\'"><\/ul>\'),u=n.children("option, optgroup"),c=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",f=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",r=i.data("icon"),o=i.attr("class");if(r){var s="";return o&&(s=\' class="\'+o+\'"\'),"multiple"===n?l.append(t(\'<li class="\'+a+\'"><img src="\'+r+\'"\'+s+\'><span><input type="checkbox"\'+a+"/><label><\/label>"+i.html()+"<\/span><\/li>")):l.append(t(\'<li class="\'+a+\'"><img src="\'+r+\'"\'+s+"><span>"+i.html()+"<\/span><\/li>")),!0}"multiple"===n?l.append(t(\'<li class="\'+a+\'"><span><input type="checkbox"\'+a+"/><label><\/label>"+i.html()+"<\/span><\/li>")):l.append(t(\'<li class="\'+a+\'"><span>\'+i.html()+"<\/span><\/li>"))};u.length&&u.each(function(){if(t(this).is("option"))a?f(n,t(this),"multiple"):f(n,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t(\'<li class="optgroup"><span>\'+t(this).attr("label")+"<\/span><\/li>")),e.each(function(){f(n,t(this))})}}),l.find("li:not(.optgroup)").each(function(r){t(this).click(function(o){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;a?(t(\'input[type="checkbox"]\',this).prop("checked",function(t,e){return!e}),s=i(c,t(this).index(),n),g.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),g.val(t(this).text())),activateOption(l,t(this)),n.find("option").eq(r).prop("selected",s),n.trigger("change"),"undefined"!=typeof e&&e()}o.stopPropagation()})}),n.wrap(s);var h=t(\'<span class="caret">&#9660;<\/span>\');n.is(":disabled")&&h.addClass("disabled");var v=p.replace(/"/g,"&quot;"),g=t(\'<input type="text" class="select-dropdown" readonly="true" \'+(n.is(":disabled")?"disabled":"")+\' data-activates="select-options-\'+o+\'" value="\'+v+\'"/>\');n.before(g),g.before(h),g.after(l),n.is(":disabled")||g.dropdown({hover:!1,closeOnClick:!1}),n.attr("tabindex")&&t(g[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),g.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val(),i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];activateOption(l,i)}},click:function(t){t.stopPropagation()}}),g.on("blur",function(){a||t(this).trigger("close"),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),t(window).on({click:function(){a&&(d||g.trigger("close"))}}),a&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(c,e,n),l.find("li").eq(e).find(":checkbox").prop("checked",!0)}),activateOption=function(e,i){if(i){e.find("li.selected").removeClass("selected");var n=t(i);n.addClass("selected"),l.scrollTo(n)}};var m=[],y=function(e){if(9==e.which)return void g.trigger("close");if(40==e.which&&!l.is(":visible"))return void g.trigger("open");if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){m.push(i);var r=m.join(""),o=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(r)})[0];o&&activateOption(l,o)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),a||g.trigger("close"))}40==e.which&&(o=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],activateOption(l,o)),27==e.which&&g.trigger("close"),38==e.which&&(o=l.find("li.selected").prev("li:not(.disabled)")[0],o&&activateOption(l,o)),setTimeout(function(){m=[]},1e3)}};g.on("keydown",y)}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=u.length?t=0:0>t&&(t=u.length-1),c=l.find(".active").index(),c!=t&&(a=u.eq(c),$caption=a.find(".caption"),a.removeClass("active"),a.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){u.not(".active").velocity({opacity:0,\r\ntranslateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&r.eq(c).removeClass("active"),u.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).addClass("active"),e.indicators&&r.eq(t).addClass("active"))}var a,r,o,s=t(this),l=s.find("ul.slides").first(),u=l.find("li"),c=l.find(".active").index();-1!=c&&(a=u.eq(c)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),u.find(".caption").each(function(){i(t(this),0)}),u.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src")!==e&&(t(this).css("background-image","url("+t(this).attr("src")+")"),t(this).attr("src",e))}),e.indicators&&(r=t(\'<ul class="indicators"><\/ul>\'),u.each(function(){var i=t(\'<li class="indicator-item"><\/li>\');i.click(function(){var i=l.parent(),a=i.find(t(this)).index();n(a),clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval)}),r.append(i)}),s.append(r),r=s.find("ul.indicators").find("li.indicator-item")),a?a.show():(u.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c=0,a=u.eq(c),e.indicators&&r.eq(c).addClass("active")),a.find("img").each(function(){a.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),o=setInterval(function(){c=l.find(".active").index(),n(c+1)},e.transition+e.interval);var d=!1,p=!1,f=!1;s.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(o);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX;$curr_slide=l.find(".active"),$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||-.65>n)?f=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(a=$curr_slide.next(),0===a.length&&(a=u.first()),a.velocity({opacity:1},{duration:300,queue:!1,ea';
  builder.string += 'sing:"easeOutQuad"})),f&&(a=$curr_slide.prev(),0===a.length&&(a=u.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),f||p?p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):f&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),p=!1,f=!1,clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(o)}),s.on("sliderStart",function(){clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval)}),s.on("sliderNext",function(){c=l.find(".active").index(),n(c+1)}),s.on("sliderPrev",function(){c=l.find(".active").index(),n(c-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){t(this).find("> .card-reveal").length&&(t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(t(e.target).closest(".card").css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))),t(".card-reveal").closest(".card").css("overflow","hidden")})})}(jQuery),function(t){t(document).ready(function(){t(document).on("click.chip",".chip .material-icons",function(){t(this).parent().remove()})})}(jQuery),function(t){t(document).ready(function(){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,a){n.each(function(){e.top<=a&&e.bottom>=a&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),a<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),a>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-o))})}var a=Materialize.guid(),r=t(this),o=t(this).offset().top;n(r,t(window).scrollTop()),t(window).on("scroll."+a,function(){var i=t(window).scrollTop()+e.offset;n(r,i)})})}})}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(){var i=t(this);e(i)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(){var e=t(this);i(e)}),t(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(){var n=t(this),a=n.parent();a.hasClass("active")?i(a):e(a)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))}});var e=function(e){if($this=e,$this.hasClass("active")===!1){var i,n,a=$this.hasClass("horizontal");a===!0?n=40:i=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:i+"px",translateX:n+"px"},{duration:0});var r=0;$this.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:r}),r+=40})}},i=function(t){$this=t;var e,i,n=$this.hasClass("horizontal");n===!0?i=40:e=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i=t(e);i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,a=150-(100-e)/1.75;100>a&&(a=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+a+"%)",filter:"grayscale("+n+")brightness("+a+"%)"})}})},Materialize.showStaggeredList=function(e){var i=0;t(e).find("li").velocity({translateX:"-100px"},{duration:0}),t(e).find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:i,easing:[60,10]}),i+=120})},t(document).ready(function(){var e=!1,i=!1;t(".dismissable").each(function(){t(this).hammer({prevent_default:!1}).bind("pan",function(n){if("touch"===n.gesture.pointerType){var a=t(this),r=n.gesture.direction,o=n.gesture.deltaX,s=n.gesture.velocityX;a.velocity({translateX:o},{duration:50,queue:!1,easing:"easeOutQuad"}),4===r&&(o>a.innerWidth()/2||-.75>s)&&(e=!0),2===r&&(o<-1*a.innerWidth()/2||s>.75)&&(i=!0)}}).bind("panend",function(n){if(Math.abs(n.gesture.deltaX)<t(this).innerWidth()/2&&(i=!1,e=!1),"touch"===n.gesture.pointerType){var a=t(this);if(e||i){var r;r=e?a.innerWidth():-1*a.innerWidth(),a.velocity({translateX:r},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){a.css("border","none"),a.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a.remove()}})}})}else a.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,i=!1}})})})}(jQuery),function(){Materialize.scrollFire=function(t){var e=!1;window.addEventListener("scroll",function(){e=!0}),setInterval(function(){if(e){e=!1;for(var i=window.pageYOffset+window.innerHeight,n=0;n<t.length;n++){var a=t[n],r=a.selector,o=a.offset,s=a.callback,l=document.querySelector(r);if(null!==l){var u=l.getBoundingClientRect().top+window.pageYOffset;if(i>u+o&&a.done!==!0){var c=new Function(s);c(),a.done=!0}}}}},100)}}(jQuery),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){function e(r,o,l,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),x.box),x.wrap),x.frame),x.holder)}function f(){C.data(o,T).addClass(x.input).attr("tabindex",-1).val(C.data("value")?T.get("select",w.format):r.value),w.editable||C.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root[0].focus()}).on("keydown."+b.id,g),a(r,{haspopup:!0,expanded:!1,readonly:!1,owns:r.id+"_root"})}function h(){T.$root.on({keydown:g,focusin:function(t){T.$root.removeClass(x.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root[0].focus()))}}).on({focus:function(){C.addClass(x.target)},blur:function(){C.removeClass(x.target)}}).on("focus.toOpen",m).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(x.navDisabled)||e.hasClass(x.disabled),a=s();a=a&&(a.type||a.href),(n||a&&!t.contains(T.$root[0],a))&&T.$root[0].focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?T.set("select",i.pick):i.clear?T.clear().close(!0):i.close&&T.close(!0)}),a(T.$root[0],"hidden",!0)}function v(){var e;w.hiddenName===!0?(e=r.name,r.name=""):(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"],e=e[0]+r.name+e[1]),T._hidden=t(\'<input type=hidden name="\'+e+\'"\'+(C.data("value")||r.value?\' value="\'+T.get("select",w.formatSubmit)+\'"\':"")+">")[0],C.on("change."+b.id,function(){T._hidden.value=r.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):C.after(T._hidden)}function g(t){var e=t.keyCode,i=/^(8|46)$/.test(e);return 27==e?(T.close(),!1):void((32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open()))}function m(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(x.focused),T.open()}if(!r)return e;var y=!1,b={id:r.id||"P"+Math.abs(~~(Math.random()*new Date))},w=l?t.extend(!0,{},l.defaults,d):d||{},x=t.extend({},e.klasses(),w.klass),C=t(r),k=function(){return this.start()},T=k.prototype={constructor:k,$node:C,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=r.type,r.autofocus=r==s(),r.readOnly=!w.editable,r.id=r.id||b.id,"text"!=r.type&&(r.type="text"),T.component=new l(T,w),T.$root=t(e._.node("div",p(),x.picker,\'id="\'+r.id+\'_root" tabindex="0"\')),h(),w.formatSubmit&&v(),f(),w.container?t(w.container).append(T.$root):C.after(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),r.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+x.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),C.removeClass(x.input).removeData(o),setTimeout(function(){C.off("."+b.id)},0),r.type=b.type,r.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(C.addClass(x.active),a(r,"expanded",!0),setTimeout(function(){T.$root.addClass(x.opened),a(T.$root[0],"hidden",!1)},0),i!==!1&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root[0].focus(),u.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=r&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,a=T.component.key[n],r=i.target;27==n?T.close(!0):r!=T.$root[0]||!a&&13!=n?t.contains(T.$root[0],r)&&13==n&&(i.preventDefault(),r.click()):(i.preventDefault(),a?e._.trigger(T.component.key.go,T,[e._.trigger(a)]):T.$root.find("."+x.highlighted).hasClass(x.disabled)||T.set("select",T.component.item.highlight).close())})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){T.$root.on("focus.toOpen",m)},0)),C.removeClass(x.active),a(r,"expanded",!1),setTimeout(function(){T.$root.removeClass(x.opened+" "+x.focused),a(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),u.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var a,r,o=t.isPlainObject(e),s=o?e:{};if(n=o&&t.isPlainObject(i)?i:n||{},e){o||(s[e]=i);for(a in s)r=s[a],a in T.component.item&&(void 0===r&&(r=null),T.component.set(a,r,n)),("select"==a||"clear"==a)&&C.val("clear"==a?"":T.get(a,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return r.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var a,r,o=t.isPlainObject(e),s=o?e:{};if(e){o||(s[e]=i);for(a in s)r=s[a],n&&(a="_"+a),b.methods[a]=b.methods[a]||[],b.methods[a].push(r)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)e=i[t],e in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new k}function i(t){var e,i="position";return t.currentStyle?e=t.currentStyle[i]:window.getComputedStyle&&(e=getComputedStyle(t)[i]),"fixed"==e}function n(){if(c.height()<=l.height())return 0;var e=t(\'<div style="visibility:hidden;width:100px" />\').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t(\'<div style="width:100%" />\').appendTo(e),a=n[0].offsetWidth;return e.remove(),i-a}function a(e,i,n){if(t.isPlainObject(i))for(var a in i)r(e,a,i[a]);else r(e,i,n)}function r(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function o(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var a=("role"==n?"":"aria-")+n,r=e[n];i+=null==r?"":a+\'="\'+e[n]+\'"\'}return i}function s(){try{return document.activeElement}catch(t){}}var l=t(window),u=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",a=e._.trigger(t.min,t);a<=e._.trigger(t.max,t,[a]);a+=t.i)i=e._.trigger(t.item,t,[a]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,a){return i?(i=t.isArray(i)?i.join(""):i,n=n?\' class="\'+n+\'"\':"",a=a?" "+a:"","<"+e+n+a+">"+i+"<\/"+e+">"):""},lead:function(t){return(10>t?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1===0},ariaAttr:o},e.extend=function(i,n){t.fn[i]=function(a,r){var o=this.data(i);return"picker"==a?o:o&&"string"==typeof a?e._.trigger(o[a],o,[r]):this.each(function(){var r=t(this);r.data(i)||new e(this,i,n,a)})},t.fn[i].defaults=n.defaults},e}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],a=n.value,r=t.$node.data("value"),o=r||a,s=r?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return t[0]===!0?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),o?i.set("select",o,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=7,a=6,r=t._;i.prototype.set=function(t,e,i){var n=this,a=n.item;return null===e?("clear"==t&&(t="select"),a[t]=e,n):(a["enable"==t?"disable":"flip"==t?"enable":t]=n.qu';
  builder.string += 'eue[t].split(" ").map(function(a){return e=n[a](t,e,i)}).pop(),"select"==t?n.set("highlight",a.select,i):"highlight"==t?n.set("view",a.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(a.select&&n.disabled(a.select)&&n.set("select",a.select,i),a.highlight&&n.disabled(a.highlight)&&n.set("highlight",a.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,n){var a,o=this;return i=void 0===i?t:i,i==-(1/0)||i==1/0?a=i:e.isPlainObject(i)&&r.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=r.isDate(i)?i:o.create().obj):i=r.isInteger(i)||r.isDate(i)?o.normalize(new Date(i),n):o.now(t,i,n),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},i.prototype.createRange=function(t,i){var n=this,a=function(t){return t===!0||e.isArray(t)||r.isDate(t)?n.create(t):t};return r.isInteger(t)||(t=a(t)),r.isInteger(i)||(i=a(i)),r.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:r.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var a,r,o,s,l=e.isArray(i),u=e.isPlainObject(i),c=this.item.view;if(l||u){for(u?(r=i.year,o=i.month,s=i.date):(r=+i[0],o=+i[1],s=+i[2]),n&&n.nav&&c&&c.month!==o&&(r=c.year,o=c.month),a=new Date(r,o+(n&&n.nav?n.nav:0),1),r=a.getFullYear(),o=a.getMonth();new Date(r,o,s).getMonth()!==o;)s-=1;i=[r,o,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):r.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-(1/0):1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,n){var a,o,s,l,u=this,c=i,d=n&&n.interval?n.interval:1,p=-1===u.item.enable,f=u.item.min,h=u.item.max,v=p&&u.item.disable.filter(function(t){if(e.isArray(t)){var n=u.create(t).pick;n<i.pick?a=!0:n>i.pick&&(o=!0)}return r.isInteger(t)}).length;if((!n||!n.nav)&&(!p&&u.disabled(i)||p&&u.disabled(i)&&(v||a||o)||!p&&(i.pick<=f.pick||i.pick>=h.pick)))for(p&&!v&&(!o&&d>0||!a&&0>d)&&(d*=-1);u.disabled(i)&&(Math.abs(d)>1&&(i.month<c.month||i.month>c.month)&&(i=c,d=d>0?1:-1),i.pick<=f.pick?(s=!0,d=1,i=u.create([f.year,f.month,f.date+(i.pick===f.pick?0:-1)])):i.pick>=h.pick&&(l=!0,d=-1,i=u.create([h.year,h.month,h.date+(i.pick===h.pick?0:1)])),!s||!l);)i=u.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,n=i.item.disable.filter(function(n){return r.isInteger(n)?t.day===(i.settings.firstDay?n:n-1)%7:e.isArray(n)||r.isDate(n)?t.pick===i.create(n).pick:e.isPlainObject(n)?i.withinRange(n,t):void 0});return n=n.length&&!n.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!n:n||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var n=this,a={};return e&&"string"==typeof e?(i&&i.format||(i=i||{},i.format=n.settings.format),n.formats.toArray(i.format).map(function(t){var i=n.formats[t],o=i?r.trigger(i,n,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,o)),e=e.substr(o)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\\w+/)[0].length}return{d:function(t,e){return t?r.digits(t):e.date},dd:function(t,e){return t?2:r.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?r.digits(t):e.month+1},mm:function(t,e){return t?2:r.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return r.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var n=this;return r.isInteger(t)&&r.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(r.isDate(t)||e.isArray(t))&&(r.isDate(i)||e.isArray(i))?n.create(t).pick===n.create(i).pick:e.isPlainObject(t)&&e.isPlainObject(i)?n.isDateExact(t.from,i.from)&&n.isDateExact(t.to,i.to):!1},i.prototype.isDateOverlap=function(t,i){var n=this,a=n.settings.firstDay?1:0;return r.isInteger(t)&&(r.isDate(i)||e.isArray(i))?(t=t%7+a,t===n.create(i).day+1):r.isInteger(i)&&(r.isDate(t)||e.isArray(t))?(i=i%7+a,i===n.create(t).day+1):e.isPlainObject(t)&&e.isPlainObject(i)?n.overlapRanges(t,i):!1},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var n=this,a=n.item.disable.slice(0);return"flip"==i?n.flipEnable():i===!1?(n.flipEnable(1),a=[]):i===!0?(n.flipEnable(-1),a=[]):i.map(function(t){for(var i,o=0;o<a.length;o+=1)if(n.isDateExact(t,a[o])){i=!0;break}i||(r.isInteger(t)||r.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},i.prototype.activate=function(t,i){var n=this,a=n.item.disable,o=a.length;return"flip"==i?n.flipEnable():i===!0?(n.flipEnable(1),a=[]):i===!1?(n.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,u;for(l=0;o>l;l+=1){if(s=a[l],n.isDateExact(s,t)){i=a[l]=null,u=!0;break}if(n.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t,i[3]||i.push("inverted")):r.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;o>l;l+=1)if(n.isDateExact(a[l],t)){a[l]=null;break}if(u)for(l=0;o>l;l+=1)if(n.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,o=e.item,s=o.now,l=o.select,u=o.highlight,c=o.view,d=o.disable,p=o.min,f=o.max,h=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),r.node("thead",r.node("tr",r.group({min:0,max:n-1,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,\'scope=col title="\'+e[n]+\'"\']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),v=function(t){return r.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&c.year>=f.year&&c.month>=f.month||!t&&c.year<=p.year&&c.month<=p.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+r.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+\' title="\'+(t?i.labelMonthNext:i.labelMonthPrev)+\'"\')},g=function(n){var a=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==n&&(a=i.monthsShort),i.selectMonths&&void 0==n?r.node("select",r.group({min:0,max:11,i:1,node:"option",item:function(t){return[a[t],0,"value="+t+(c.month==t?" selected":"")+(c.year==p.year&&t<p.month||c.year==f.year&&t>f.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+r.ariaAttr({controls:e.$node[0].id+"_table"})+\' title="\'+i.labelMonthSelect+\'"\'):"short_months"==n?null!=l?r.node("div",a[l.month]):r.node("div",a[c.month]):r.node("div",a[c.month],i.klass.month)},m=function(n){var a=c.year,o=i.selectYears===!0?5:~~(i.selectYears/2);if(o){var s=p.year,l=f.year,u=a-o,d=a+o;if(s>u&&(d+=s-u,u=s),d>l){var h=u-s,v=d-l;u-=h>v?v:h,d=l}if(i.selectYears&&void 0==n)return r.node("select",r.group({min:u,max:d,i:1,node:"option",item:function(t){return[t,0,"value="+t+(a==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+r.ariaAttr({controls:e.$node[0].id+"_table"})+\' title="\'+i.labelYearSelect+\'"\')}return"raw"==n?r.node("div",a):r.node("div",a,i.klass.year)};return createDayLabel=function(){return null!=l?r.node("div",l.date):r.node("div",s.date)},createWeekdayLabel=function(){var t;t=null!=l?l.day:s.day;var e=i.weekdaysFull[t];return e},r.node("div",r.node("div",createWeekdayLabel(),"picker__weekday-display")+r.node("div",g("short_months"),i.klass.month_display)+r.node("div",createDayLabel(),i.klass.day_display)+r.node("div",m("raw"),i.klass.year_display),i.klass.date_display)+r.node("div",r.node("div",(i.selectYears?g()+m():g()+m())+v()+v(1),i.klass.header)+r.node("table",h+r.node("tbody",r.group({min:0,max:a-1,i:1,node:"tr",item:function(t){var a=i.firstDay&&0===e.create([c.year,c.month,1]).day?-7:0;return[r.group({min:n*t-c.day+a+1,max:function(){return this.min+n-1},i:1,node:"td",item:function(t){t=e.create([c.year,c.month,t+(i.firstDay?1:0)]);var n=l&&l.pick==t.pick,a=u&&u.pick==t.pick,o=d&&e.disabled(t)||t.pick<p.pick||t.pick>f.pick,h=r.trigger(e.formats.toString,e,[i.format,t]);return[r.node("div",t.date,function(e){return e.push(c.month==t.month?i.klass.infocus:i.klass.outfocus),s.pick==t.pick&&e.push(i.klass.now),n&&e.push(i.klass.selected),a&&e.push(i.klass.highlighted),o&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+r.ariaAttr({role:"gridcell",label:h,selected:n&&e.$node.val()===h?!0:null,activedescendant:a?!0:null,disabled:o?!0:null})),"",r.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,\'id="\'+e.$node[0].id+\'_table" \'+r.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+r.node("div",r.node("button",i.today,"btn-flat picker__today","type=button data-pick="+s.pick+(t&&!e.disabled(s)?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id}))+r.node("button",i.clear,"btn-flat picker__clear","type=button data-clear=1"+(t?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id}))+r.node("button",i.close,"btn-flat picker__close","type=button data-close=true "+(t?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id})),i.klass.footer)},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(t){function e(){var e=+t(this).attr("length"),i=+t(this).val().length,n=e>=i;t(this).parent().find(\'span[class="character-counter"]\').html(i+"/"+e),a(n,t(this))}function i(e){var i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);e.parent().append(i)}function n(){t(this).parent().find(\'span[class="character-counter"]\').html("")}function a(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var a=void 0!==t(this).attr("length");a&&(t(this).on("input",e),t(this).on("focus",e),t(this).on("blur",n),i(t(this)))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){var e={init:function(e){var i={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1};return e=t.extend(i,e),this.each(function(){function i(){"undefined"!=typeof window.ontouchstart&&(M[0].addEventListener("touchstart",c),M[0].addEventListener("touchmove",d),M[0].addEventListener("touchend",p)),M[0].addEventListener("mousedown",c),M[0].addEventListener("mousemove",d),M[0].addEventListener("mouseup",p),M[0].addEventListener("click",u)}function n(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function a(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function r(t){return t>=b?t%b:0>t?r(b+t%b):t}function o(t){var i,n,a,o,s,l,u;for(h="number"==typeof t?t:h,v=Math.floor((h+m/2)/m),a=h-v*m,o=0>a?1:-1,s=-o*a*2/m,e.full_width?u="translateX(0)":(u="translateX("+(M[0].clientWidth-item_width)/2+"px) ",u+="translateY("+(M[0].clientHeight-item_width)/2+"px)"),l=f[r(v)],l.style[S]=u+" translateX("+-a/2+"px) translateX("+o*e.shift*s*i+"px) translateZ("+e.dist*s+"px)",l.style.zIndex=0,e.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*s,\r\nl.style.opacity=tweenedOpacity,n=b>>1,i=1;n>=i;++i)e.full_width?(zTranslation=e.dist,tweenedOpacity=i===n&&0>a?1-s:1):(zTranslation=e.dist*(2*i+s*o),tweenedOpacity=1-.2*(2*i+s*o)),l=f[r(v+i)],l.style[S]=u+" translateX("+(e.shift+(m*i-a)/2)+"px) translateZ("+zTranslation+"px)",l.style.zIndex=-i,l.style.opacity=tweenedOpacity,e.full_width?(zTranslation=e.dist,tweenedOpacity=i===n&&a>0?1-s:1):(zTranslation=e.dist*(2*i-s*o),tweenedOpacity=1-.2*(2*i-s*o)),l=f[r(v-i)],l.style[S]=u+" translateX("+(-e.shift+(-m*i-a)/2)+"px) translateZ("+zTranslation+"px)",l.style.zIndex=-i,l.style.opacity=tweenedOpacity;l=f[r(v)],l.style[S]=u+" translateX("+-a/2+"px) translateX("+o*e.shift*s+"px) translateZ("+e.dist*s+"px)",l.style.zIndex=0,e.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*s,l.style.opacity=tweenedOpacity}function s(){var t,e,i,n;t=Date.now(),e=t-P,P=t,i=h-O,O=h,n=1e3*i/(1+e),T=.8*n+.2*T}function l(){var t,i;C&&(t=Date.now()-P,i=C*Math.exp(-t/e.time_constant),i>2||-2>i?(o(k-i),requestAnimationFrame(l)):o(k))}function u(i){if(A)return i.preventDefault(),i.stopPropagation(),!1;if(!e.full_width){var n=t(i.target).closest(".carousel-item").index(),a=v%b-n;0>a?Math.abs(a+b)<Math.abs(a)&&(a+=b):a>0&&Math.abs(a-b)<a&&(a-=b),0>a?t(this).trigger("carouselNext",[Math.abs(a)]):a>0&&t(this).trigger("carouselPrev",[a])}}function c(t){g=!0,A=!1,q=!1,w=n(t),x=a(t),T=C=0,O=h,P=Date.now(),clearInterval(E),E=setInterval(s,100)}function d(t){var e,i,r;if(g)if(e=n(t),y=a(t),i=w-e,r=Math.abs(x-y),30>r&&!q)(i>2||-2>i)&&(A=!0,w=e,o(h+i));else{if(A)return t.preventDefault(),t.stopPropagation(),!1;q=!0}return A?(t.preventDefault(),t.stopPropagation(),!1):void 0}function p(t){return g=!1,clearInterval(E),k=h,(T>10||-10>T)&&(C=.9*T,k=h+C),k=Math.round(k/m)*m,C=k-h,P=Date.now(),requestAnimationFrame(l),t.preventDefault(),t.stopPropagation(),!1}var f,h,v,g,m,b,w,x,C,k,T,S,O,P,E,A,q,M=t(this);return M.hasClass("initialized")?!0:(e.full_width&&(e.dist=0,imageHeight=M.find(".carousel-item img").first().load(function(){M.css("height",t(this).height())})),M.addClass("initialized"),g=!1,h=k=0,f=[],item_width=M.find(".carousel-item").first().innerWidth(),m=2*item_width+e.padding,M.find(".carousel-item").each(function(){f.push(t(this)[0])}),b=f.length,S="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return"undefined"!=typeof document.body.style[e]?(S=e,!1):!0}),window.onresize=o,i(),o(h),t(this).on("carouselNext",function(t,e){void 0===e&&(e=1),k=h+m*e,h!==k&&(C=k-h,P=Date.now(),requestAnimationFrame(l))}),void t(this).on("carouselPrev",function(t,e){void 0===e&&(e=1),k=h-m*e,h!==k&&(C=k-h,P=Date.now(),requestAnimationFrame(l))}))})},next:function(e){t(this).trigger("carouselNext",[e])},prev:function(e){t(this).trigger("carouselPrev",[e])}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not e';
  builder.string += 'xist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery);\r\n';
  return builder.string;
}
;
var Lgwt_material_design_client_resources_MaterialResources_1default_1InlineClientBundleGenerator$3_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialResources_default_InlineClientBundleGenerator/3', 247);
function $clinit_MaterialResources_default_InlineClientBundleGenerator$animationJsInitializer(){
  $clinit_MaterialResources_default_InlineClientBundleGenerator$animationJsInitializer = emptyMethod;
  animationJs = new MaterialResources_default_InlineClientBundleGenerator$1;
}

function $clinit_MaterialResources_default_InlineClientBundleGenerator$appInstallerJsInitializer(){
  $clinit_MaterialResources_default_InlineClientBundleGenerator$appInstallerJsInitializer = emptyMethod;
  appInstallerJs = new MaterialResources_default_InlineClientBundleGenerator$2;
}

function $clinit_MaterialResources_default_InlineClientBundleGenerator$materializeJsInitializer(){
  $clinit_MaterialResources_default_InlineClientBundleGenerator$materializeJsInitializer = emptyMethod;
  materializeJs = new MaterialResources_default_InlineClientBundleGenerator$3;
}

var greedyScroll, jQueryExt, mutate, mutateEvents, stickyth, tableSubHeaders;
function MaterialTableBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(239, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$1);
_.getName = function getName_12(){
  return 'greedyScroll';
}
;
_.getText = function getText_2(){
  return '!function(o,n){"use strict";function t(t,i){var d=this;d.$el=o(t),d.el=t,d.id=e++,d.$window=o(n),d.$body=o("body"),d.locked=[],d.$el.bind("destroyed",o.proxy(d.teardown,d)),d.init=function(){d.options=o.extend({},r,i),d.$el.attr("tabindex",0),d.bind()},d.destroy=function(){d.$el.unbind("destroyed",d.teardown),d.teardown()},d.teardown=function(){o.removeData(d.el,"plugin_"+l),d.unbind(),d.el=null,d.$el=null},d.bind=function(){d.$el.on("focus."+l,d.lockParents).on("blur."+l,d.unlockParents).on("scroll."+l,o.throttle(100,d.scroll))},d.unbind=function(){d.$el.off("."+l)},d.scroll=function(){var n=o(this);n.isScrollEnd()||n.isScrollStart()?n.is(":focus")||d.unlockParents():d.lockParents()},d.lockParents=function(){if(d.options.topScrollOnFocus){var n=d.$el.offset().top,t=d.$body.scrollTop();t>n&&d.$body.scrollTop(n-d.options.topScrollMargin)}d.$body.addClass("overflow-hidden"),o(this).parents().each(function(n){var t=o(this);t.hasScrollBar()&&(d.locked[n]=t,t.addClass("overflow-hidden"))})},d.unlockParents=function(){d.$body.removeClass("overflow-hidden");for(var o in d.locked)d.locked[o].removeClass("overflow-hidden")},d.init()}var l="greedyScroll",e=0,r={topScrollOnFocus:!0,topScrollMargin:3};o.fn[l]=function(n){return this.each(function(){var e=o.data(this,"plugin_"+l);e?"string"==typeof n?e[n].apply(e):e.updateOptions(n):"destroy"!==n&&o.data(this,"plugin_"+l,new t(this,n))})}}(jQuery,window);\r\n';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/1', 239);
function MaterialTableBundle_default_InlineClientBundleGenerator$2(){
}

defineClass(240, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$2);
_.getName = function getName_13(){
  return 'jQueryExt';
}
;
_.getText = function getText_3(){
  return '!function(t,e){var n,i=t.jQuery||t.Cowboy||(t.Cowboy={});i.throttle=n=function(t,n,r,o){function s(){function i(){a=+new Date,r.apply(c,d)}function s(){l=e}var c=this,u=+new Date-a,d=arguments;o&&!l&&i(),l&&clearTimeout(l),o===e&&u>t?i():n!==!0&&(l=setTimeout(o?s:i,o===e?t-u:t))}var l,a=0;return"boolean"!=typeof n&&(o=r,r=n,n=e),i.guid&&(s.guid=r.guid=r.guid||i.guid++),s},i.debounce=function(t,i,r){return r===e?n(t,i,!1):n(t,r,i!==!1)}}(this),function(t){t.fn.forceRedraw=function(){var t=this[0],e=document.createTextNode(" "),n=t.style.display;return t.appendChild(e),t.style.display="none",setTimeout(function(){t.style.display=n,e.parentNode.removeChild(e)},10),this},t.fn.insertAt=function(t,e){var n=this.children().size();return 0>t&&(t=Math.max(0,n+1+t)),this.append(e),n>t&&this.children().eq(t).before(this.children().last()),this},t.fn.longpress=function(e,n,i){return"undefined"==typeof i&&(i=500),this.each(function(){function r(n){l=(new Date).getTime();var r=t(this);a=setTimeout(function(){"function"==typeof e?e.call(r,n):t.error("Callback required for long press. You provided: "+typeof e)},i)}function o(e){var r=(new Date).getTime()-l;i>r&&(clearTimeout(a),"function"==typeof n?n.call(t(this),e):"undefined"==typeof n||t.error("Optional callback for short press should be a function."))}function s(){clearTimeout(a)}var l,a,c=t(this);return c.on("mousedown",r),c.on("mouseup",o),c.on("mousemove",s),c.on("touchstart",r),c.on("touchend",o),c.on("touchmove",s),this})},t.fn.hasVerticalScrollBar=function(){return this.get(0)?this.get(0).scrollHeight>this.innerHeight():!1},t.fn.hasHorizontalScrollBar=function(){return this.get(0)?this.get(0).scrollWidth>this.innerWidth():!1},t.fn.hasScrollBar=function(){return this.hasVerticalScrollBar()||this.hasHorizontalScrollBar()},t.scrollBarWidth=function(t){(null===t||"undefined"==typeof t)&&(t=document.body);var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var n=document.createElement("div");n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.visibility="hidden",n.style.width="200px",n.style.height="150px",n.style.overflow="hidden",n.appendChild(e),t.appendChild(n);var i=e.offsetWidth;n.style.overflow="scroll";var r=e.offsetWidth;return i===r&&(r=n.clientWidth),t.removeChild(n),i-r},t.fn.isScrollEnd=function(){return this.scrollTop()>=this[0].scrollHeight-this.outerHeight()},t.fn.isScrollStart=function(){return this.scrollTop()<=this[0].scrollHeight-this.outerHeight()},t.fn.scrollHandler=function(e,n,i){var r=this,o={x:0,y:0};return r.on("scroll."+n,function(n){var r=t(this),s=r.scrollTop(),l=r.scrollLeft(),a={dirs:[],isUp:function(){return t.inArray("up",this.dirs)>-1},isDown:function(){return t.inArray("down",this.dirs)>-1},isLeft:function(){return t.inArray("left",this.dirs)>-1},isRight:function(){return t.inArray("right",this.dirs)>-1},isX:function(){return this.isLeft()||this.isRight()},isY:function(){return this.isUp()||this.isDown()}},c=0;if(o.y>s?a.dirs[c++]="up":o.y!==s&&(a.dirs[c++]="down"),o.x>l?a.dirs[c++]="left":o.x!==l&&(a.dirs[c++]="right"),e)if(t.isArray(e)){for(var u in a.dirs)if(t.inArray(a.dirs[u],e)>-1){i(n,a);break}}else("any"===e||t.inArray(e,a.dirs)>-1)&&i(n,a);else i(n,a);o={x:l,y:s}})},t.fn.smartScroll=function(t,e){return this.scrollHandler("any",t,e)},t.fn.scrollY=function(t,e){return this.scrollHandler(["up","down"],t,e)},t.fn.scrollX=function(t,e){return this.scrollHandler(["left","right"],t,e)},t.fn.onScrollUp=function(t,e){return this.scrollHandler("up",t,e)},t.fn.onScrollDown=function(t,e){return this.scrollHandler("down",t,e)},t.fn.onScrollLeft=function(t,e){return this.scrollHandler("left",t,e)},t.fn.onScrollRight=function(t,e){return this.scrollHandler("right",t,e)}}(jQuery);\r\n';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/2', 240);
function MaterialTableBundle_default_InlineClientBundleGenerator$3(){
}

defineClass(241, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$3);
_.getName = function getName_14(){
  return 'mutate';
}
;
_.getText = function getText_4(){
  return '/* @license ! jQuery-mutate - v0.0.1 -\r\n * Licensed under the MIT license\r\n * http://www.opensource.org/licenses/mit-license.php\r\n * Date: 2015-04-19 */\r\n\r\n!function(a){function b(){var c=mutate;"undefined"!=c.event_stack&&c.event_stack.length&&a.each(c.event_stack,function(a,b){mutate.add_event(b)}),c.event_stack=[],a.each(c.stack,function(b,d){a(d.selector).each(function(a,b){c.events[d.event_name](b)===!0?d.callback&&d.callback(b,d):d.false_callback&&d.false_callback(b,d)})}),setTimeout(b,mutate.speed)}mutate={speed:100,event_stack:mutate_event_stack,stack:[],events:{},add_event:function(a){mutate.events[a.name]=a.handler},add:function(a,b,c,d){mutate.stack[mutate.stack.length]={event_name:a,selector:b,callback:c,false_callback:d}}},b(),a.fn.extend({mutate:function(){var b=!1,c=arguments[1],d=this,e=arguments[2]?arguments[2]:function(){};return"extend"==arguments[0].toLowerCase()?(mutate.add_event(c),this):(a.each(a.trim(arguments[0]).split(" "),function(a,f){b=f,mutate.add(b,d,c,e)}),this)}})}(jQuery);';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$3_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/3', 241);
function MaterialTableBundle_default_InlineClientBundleGenerator$4(){
}

defineClass(242, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$4);
_.getName = function getName_15(){
  return 'mutateEvents';
}
;
_.getText = function getText_5(){
  return '/* @license ! jQuery-mutate - v0.0.2 -\r\n * Licensed under the MIT license\r\n * http://www.opensource.org/licenses/mit-license.php\r\n * Date: 2015-04-19 */\r\n\r\n!function(t){mutate_event_stack=[{name:"width",handler:function(a){var e=t(a);return e.data("mutate-width")||e.data("mutate-width",e.width()),e.data("mutate-width")&&e.width()!=e.data("mutate-width")?(e.data("mutate-width",e.width()),!0):!1}},{name:"height",handler:function(a){var e=t(a);return e.data("mutate-height")||e.data("mutate-height",e.height()),e.data("mutate-height")&&e.height()!=e.data("mutate-height")?(e.data("mutate-height",e.height()),!0):void 0}},{name:"top",handler:function(a){var e=t(a);return e.data("mutate-top")||e.data("mutate-top",e.css("top")),e.data("mutate-top")&&e.css("top")!=e.data("mutate-top")?(e.data("mutate-top",e.css("top")),!0):void 0}},{name:"bottom",handler:function(a){var e=t(a);return e.data("mutate-bottom")||e.data("mutate-bottom",e.css("bottom")),e.data("mutate-bottom")&&e.css("bottom")!=e.data("mutate-bottom")?(e.data("mutate-bottom",e.css("bottom")),!0):void 0}},{name:"right",handler:function(a){var e=t(a);return e.data("mutate-right")||e.data("mutate-right",e.css("right")),e.data("mutate-right")&&e.css("right")!=e.data("mutate-right")?(e.data("mutate-right",e.css("right")),!0):void 0}},{name:"left",handler:function(a){var e=t(a);return e.data("mutate-left")||e.data("mutate-left",e.css("left")),e.data("mutate-left")&&e.css("left")!=e.data("mutate-left")?(e.data("mutate-left",e.css("left")),!0):void 0}},{name:"hide",handler:function(a){var e=t(a),r=e.is(":hidden"),d=void 0==e.data("prev-hidden")?r:e.data("prev-hidden");return e.data("prev-hidden",r),r&&r!=d?!0:void 0}},{name:"show",handler:function(a){var e=t(a),r=e.is(":visible"),d=void 0==e.data("prev-visible")?r:e.data("prev-visible");return e.data("prev-visible",r),r&&r!=d?!0:void 0}},{name:"scrollHeight",handler:function(a){var e=t(a);return e.data("prev-scrollHeight")||e.data("prev-scrollHeight",e[0].scrollHeight),e.data("prev-scrollHeight")&&e[0].scrollHeight!=e.data("prev-scrollHeight")?(e.data("prev-scrollHeight",e[0].scrollHeight),!0):void 0}},{name:"scrollWidth",handler:function(a){var e=t(a);return e.data("prev-scrollWidth")||e.data("prev-scrollWidth",e[0].scrollWidth),e.data("prev-scrollWidth")&&e[0].scrollWidth!=e.data("prev-scrollWidth")?(e.data("prev-scrollWidth",e[0].scrollWidth),!0):void 0}},{name:"scrollTop",handler:function(a){var e=t(a);return e.data("prev-scrollTop")||e.data("prev-scrollTop",e[0].scrollTop()),e.data("prev-scrollTop")&&e[0].scrollTop()!=e.data("prev-scrollTop")?(e.data("prev-scrollTop",e[0].scrollTop()),!0):void 0}},{name:"scrollLeft",handler:function(a){var e=t(a);return e.data("prev-scrollLeft")||e.data("prev-scrollLeft",e[0].scrollLeft()),e.data("prev-scrollLeft")&&e[0].scrollLeft()!=e.data("prev-scrollLeft")?(e.data("prev-scrollLeft",e[0].scrollLeft()),!0):void 0}}]}(jQuery);';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$4_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/4', 242);
function MaterialTableBundle_default_InlineClientBundleGenerator$5(){
}

defineClass(243, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$5);
_.getName = function getName_16(){
  return 'stickyth';
}
;
_.getText = function getText_6(){
  return '!function(e,t){"use strict";function i(i,r){var a=this;a.$el=e(i),a.el=i,a.id=l++,a.name=a.name+a.id,a.$window=e(t),a.$document=e(document),a.$el.bind("destroyed",e.proxy(a.teardown,a)),a.$clonedHeader=null,a.$originalHeader=null,a.isSticky=!1,a.hasBeenSticky=!1,a.leftOffset=null,a.topOffset=null,a.scrollBarWidth=13,a.init=function(){a.$el.each(function(){var t=e(this);t.css("padding",0),a.$originalHeader=e("thead:first",this),a.$clonedHeader=a.$originalHeader.clone(),t.trigger("clonedHeader."+o,[a.$clonedHeader]),a.$clonedHeader.addClass("tableFloatingHeader"),a.$clonedHeader.css("display","none"),a.$originalHeader.addClass("tableFloatingHeaderOriginal"),a.$originalHeader.after(a.$clonedHeader),a.$clonedHeader.find(".stickyExclude").remove(),a.$printStyle=e(\'<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}<\/style>\'),e("head").append(a.$printStyle)}),a.setOptions(r),a.updateWidth(),a.toggleHeaders(),a.bind()},a.destroy=function(){a.$el.unbind("destroyed",a.teardown),a.teardown()},a.teardown=function(){a.isSticky&&a.$originalHeader.css("position","static"),e.removeData(a.el,"plugin_"+o),a.unbind(),a.$clonedHeader.remove(),a.$originalHeader.removeClass("tableFloatingHeaderOriginal"),a.$originalHeader.css("visibility","visible"),a.$printStyle.remove(),a.el=null,a.$el=null},a.bind=function(){a.$scrollableArea.on("scroll."+o,a.toggleHeaders),a.$scrollableArea.find(".inner-scroll").on("scroll."+o,a.toggleHeaders),a.isWindowScrolling||(a.$window.on("scroll."+o+a.id,a.setPositionValues),a.$window.on("resize."+o+a.id,a.toggleHeaders)),a.$scrollableArea.on("resize."+o,a.toggleHeaders),a.$scrollableArea.on("resize."+o,a.updateWidth),a.$window.on("resize."+o,a.updateWidth),a.detectOuterScrolls()},a.unbind=function(){a.$scrollableArea.off("."+o,a.toggleHeaders),a.isWindowScrolling||(a.$window.off("."+o+a.id,a.setPositionValues),a.$window.off("."+o+a.id,a.toggleHeaders)),a.$scrollableArea.off("."+o,a.updateWidth),a.$window.off("."+o+a.id,a.updateWidth),a.$scrollableArea.parents().each(function(){e(this).off("."+o)})},a.detectOuterScrolls=function(){a.$scrollableArea.parents().each(function(){var t=e(this);t.off("."+o),t.hasScrollBar()&&t.on("scroll."+o,a.toggleHeaders)})},a.toggleHeaders=function(){a.$el&&a.$el.each(function(){var t,i=e(this),o=a.isWindowScrolling?isNaN(a.options.fixedOffset)?a.options.fixedOffset.outerHeight():a.options.fixedOffset:a.$scrollableArea.offset().top+(isNaN(a.options.fixedOffset)?0:a.options.fixedOffset),l=a.$scrollableArea.find(".inner-scroll"),n=i.offset(),r=l.scrollTop()+o,s=(l.scrollLeft(),a.isWindowScrolling?r>n.top:o>n.top);(a.isWindowScrolling?r:0)<n.top+i.height()-a.$clonedHeader.height()-(a.isWindowScrolling?0:o);s?(t=n.left+a.options.leftOffset,a.$originalHeader.css({position:"fixed","margin-top":a.options.marginTop,left:t,"z-index":3}),a.leftOffset=t,a.topOffset=o,a.$clonedHeader.css("display",""),a.isSticky||(a.isSticky=!0,a.updateWidth(),a.$el.trigger("sticky-change",[!0])),a.setPositionValues()):a.isSticky&&(a.$originalHeader.css("position","static"),a.$clonedHeader.css("display","none"),a.isSticky=!1,a.resetWidths(e("td,th",a.$clonedHeader),e("td,th",a.$originalHeader)),a.$el.trigger("sticky-change",[!1]))})},a.setPositionValues=function(){var t=a.$window.scrollTop(),i=a.$window.scrollLeft();if(!(!a.isSticky||0>i||i+a.$window.width()>a.$document.width())){a.detectOuterScrolls(),a.scrollBarWidth=e.scrollBarWidth(a.el);var o=a.$scrollableArea.find(".inner-scroll").scrollLeft(),l=o+a.getOuterScrollLeft(),n=Math.max(a.getOuterScrollTop()-a.$scrollableArea.position().top-a.options.marginTop,0),r=a.$originalHeader.outerHeight();a.$originalHeader.css({top:a.topOffset-(a.isWindowScrolling?0:t),left:a.leftOffset-(a.isWindowScrolling?0:i),clip:"rect("+n+"px, "+(a.$scrollableArea.outerWidth()+o-a.scrollBarWidth)+"px, "+(r+50)+"px, "+l+"px)"})}},a.updateWidth=function(){if(a.isSticky){a.$originalHeaderCells||(a.$originalHeaderCells=e(\'tr:not(".stickyExclude") th,td\',a.$originalHeader)),a.$clonedHeaderCells||(a.$clonedHeaderCells=e(\'tr:not(".stickyExclude") th,td\',a.$clonedHeader));var t=a.getWidths(a.$clonedHeaderCells);a.setWidths(t,a.$clonedHeaderCells,a.$originalHeaderCells),a.$originalHeader.css("width",a.$clonedHeader.width())}},a.getWidths=function(i){var o=[];return i.each(function(i){var l,n=e(this);if("border-box"===n.css("box-sizing"))l=n[0].getBoundingClientRect().width;else{var r=e("th",a.$originalHeader);if("collapse"===r.css("border-collapse"))if(t.getComputedStyle)l=parseFloat(t.getComputedStyle(this,null).width);else{var s=parseFloat(n.css("padding-left")),d=parseFloat(n.css("padding-right")),c=parseFloat(n.css("border-width"));l=n.outerWidth()-s-d-c}else l=n.width()}o[i]=l}),o},a.setWidths=function(e,t,i){t.each(function(t){var o=e[t];i.eq(t).css({"min-width":o,"max-width":o})})},a.resetWidths=function(t,i){t.each(function(t){var o=e(this);i.eq(t).css({"min-width":o.css("min-width"),"max-width":o.css("max-width")})})},a.getOuterScrollTop=function(){var t=0;return a.$scrollableArea.parents(":not(body,html)").each(function(){t+=e(this).scrollTop()}),t},a.getOuterScrollLeft=function(){var t=0;return a.$scrollableArea.parents(":not(body)").each(function(){t+=e(this).scrollLeft()}),t},a.setOptions=function(i){a.options=e.extend({},n,i),a.$scrollableArea=e(a.options.scrollableArea),a.isWindowScrolling=a.$scrollableArea[0]===t},a.updateOptions=function(e){a.setOptions(e),a.unbind(),a.bind(),a.updateWidth(),a.toggleHeaders()},a.init()}var o="stickyTableHeaders",l=0,n={fixedOffset:0,leftOffset:0,marginTop:0,scrollableArea:t};e.fn[o]=function(t){return this.each(function(){var l=e.data(this,"plugin_"+o);l?"string"==typeof t?l[t].apply(l):l.updateOptions(t):"destroy"!==t&&e.data(this,"plugin_"+o,new i(this,t))})}}(jQuery,window);\r\n';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$5_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/5', 243);
function MaterialTableBundle_default_InlineClientBundleGenerator$7(){
}

defineClass(244, 1, {}, MaterialTableBundle_default_InlineClientBundleGenerator$7);
_.getName = function getName_17(){
  return 'tableSubHeaders';
}
;
_.getText = function getText_7(){
  return 'function TableSubHeaders(e,t){TableSubHeaders.id++;var i=this,o=$(i);i.name="subheaders"+TableSubHeaders.id,i.$window=$(window),i.$document=$(document),i.$tableBody=e.find("tbody"),i.$tableParents=e.parents(),i.$stickies=null,i.options=[],i.cache=[],i.loaded=!1,i.scrollBarWidth=13,i.debug={enabled:!1,smartScroll:{table:0,window:0,outer:0},touchmove:{table:0,window:0,outer:0},resize:{table:0,window:0}};var a={marginTop:0,marginLeft:0,scrollThrottle:10,resizeThrottle:100};i.load=function(e){i.options=$.extend({},a,e),i.bind(),i.detect(),i.recalculate(!0),i.loaded=!0},i.unload=function(){i.options=[],i.unbind(),i.$stickies.each(function(){var t=$(this);t.removeClass("fixed").removeClass("passed").removeAttr("style"),t.unwrap(),e.scrollTop(0)}),i.loaded=!1},i.reload=function(){i.unload(),i.load()},i.detect=function(){if(i.$stickies=$(t,e),!(i.$stickies.length<1)){i.$stickies.off("."+i.name),i.$stickies.on("tap."+i.name+" click."+i.name,function(){i.toggle($(this))});var o=$(t,e).filter(function(){return $(this).parent().is(":not(div)")}),a=i.isChrome();o.each(function(){$(this).wrap("<div style=\'width:100%;z-index:2;cursor:pointer;background-color:#fff;"+(a?"":"display:table-row;")+"\'/>")})}},i.bind=function(){i.unbind();var t=i.options.scrollThrottle,o=i.options.resizeThrottle;e.smartScroll(i.name,$.throttle(t,function(e,t){i.debug.enabled&&i.debug.smartScroll.table++,i.scroll(e,t)})),e.find(".inner-scroll").smartScroll(i.name,$.throttle(t,function(e,t){i.debug.enabled&&i.debug.smartScroll.table++,i.scroll(e,t)})),e.on("resize."+i.name,$.debounce(o,function(){i.debug.enabled&&i.resize.table++,i.recalculate(!0)})),i.$window.smartScroll(i.name,$.throttle(t,function(e,t){i.debug.enabled&&i.debug.smartScroll.window++,i.alignment(t)})),i.$window.on("resize."+i.name,$.debounce(o,function(){i.debug.enabled&&i.debug.resize.window++,i.recalculate(!0)})),i.detectOuterScrolls()},i.unbind=function(){e.off("."+i.name),i.$window.off("."+i.name),i.$stickies&&i.$stickies.off("."+i.name),i.$tableParents.each(function(){$(this).off("."+i.name)})},i.detectOuterScrolls=function(){var e=i.options.scrollThrottle;i.$tableParents.off("."+i.name),i.$tableParents.filter(function(){return $(this).hasScrollBar()}).smartScroll(i.name,$.throttle(e,function(e,t){i.debug.enabled&&i.debug.smartScroll.outer++,i.alignment(t)}))},i.toggle=function(e){e.hasClass("expanded")?i.close(e):i.open(e)},i.open=function(e){e.addClass("expanded"),o.trigger("opening",[e]);var t=e.find("i");if(null!==t){var a=e.attr("data-close-icon");void 0===a&&(a="remove"),t.text(a)}var n=e.parent(),s=n.nextUntil("div","tr");$.when(s.show(200)).then(function(){i.recalculate(!0),e.trigger("opened",[e])})},i.close=function(e){e.removeClass("expanded"),o.trigger("closing",[e]);var t=e.find("i");if(null!==t){var a=e.attr("data-open-icon");void 0===a&&(a="add"),t.text(a)}var n=e.parent().nextUntil("div");$.when(n.hide(200)).then(function(){i.recalculate(!0),e.trigger("closed",[e])})},i.recalculate=function(t){if(!(i.$stickies.length<1)){t&&o.trigger("before-recalculate"),i.scrollBarWidth=$.scrollBarWidth(i.$tableBody.get(0)),i.detectOuterScrolls(),i.updateHeights();var a=e.scrollTop(),n=i.getOuterScrollTop(),s=i.$tableBody.outerWidth();i.$stickies.each(function(){var e=$(this);e.removeClass("fixed").removeClass("passed").removeAttr("style"),$.data(this,"pos",e.offset().top+n+a+1),i.updateWidth(e,s-2)}),t&&o.trigger("after-recalculate"),i.scroll()}},i.scroll=function(t,o){var a=e.offset(),n=e.innerWidth(),s=i.$tableBody.outerWidth(),l=a.top+i.options.marginTop,r=e.scrollTop()+i.getOuterScrollTop(),c=i.$window.scrollTop(),d=a.left+i.options.marginLeft,u=e.find(".inner-scroll").scrollLeft(),f=i.getOuterScrollLeft();i.$stickies.each(function(e){var t=$(this),a=!1;if(!o||o.isY()){var h=i.$stickies.eq(e+1),p=i.$stickies.eq(e-1),g=$.data(this,"pos");if(r+l>=g)i.emulateYScroll(t,l,c,r),t.hasClass("passed")||(t.hasClass("fixed")||(t.addClass("fixed"),a=o&&!o.isX()),i.updateWidth(t,s),p.css("display","none"),t.css({display:""}),h.length>0&&r+l>=g-p.outerHeight()&&t.addClass("passed"));else{t.outerWidth();t.removeClass("fixed").removeAttr("style"),p.css({display:""}),p.length>0&&r+l<=g-p.outerHeight()&&p.removeClass("passed")}}(!o||o.isX()||a)&&t.hasClass("fixed")&&i.emulateXScroll(t,n,d,u,f)}),i.$stickies.filter(".passed").each(function(e){var t=$(this),o=i.$stickies.eq(e+1),a=$.data(o[0],"pos")-r-t.outerHeight()-c;t.data("push-back",parseInt(t.css("top").replace("px","")-a)),t.css({top:a})})},i.emulateYScroll=function(t,o,a,n,s){var l=(e.offset(),t.outerHeight()+50),r=(s?s:i.getOuterScrollTop())-i.options.marginTop-e.position().top,c=r+"px",d=l+"px",u=t.data("clip-right"),f=t.data("clip-left");if(t.hasClass("passed")){var h=t.data("push-back");c=Math.max(h,r+h)+"px"}t.data("clip-top",c).data("clip-bottom",d),t.css({top:o-a,clip:"rect("+c+", "+u+", "+d+", "+f+")"})},i.emulateXScroll=function(e,t,o,a,n){var s=a+(n?n:i.getOuterScrollLeft())+"px",l=t+a-i.scrollBarWidth+"px",r=e.data("clip-top")||"auto",c=e.data("clip-bottom")||"auto";e.data("clip-left",s).data("clip-right",l),e.css({left:o-a-i.$window.scrollLeft(),clip:"rect("+r+", "+l+", "+c+", "+s+")"})},i.alignment=function(t){if(!(i.$stickies.length<1)){var o=e.offset(),a=e.innerWidth(),n=i.$tableBody.outerWidth(),s=!t||t.isX(),l=!t||t.isY(),r=l?i.$window.scrollTop():0,c=l?o.top+i.options.marginTop:0,d=l?e.scrollTop()+i.getOuterScrollTop():0,u=s?o.left+i.options.marginLeft:0,f=s?e.find(".inner-scroll").scrollLeft():0,h=s?i.getOuterScrollLeft():0;i.$stickies.filter(".fixed").each(function(e){var o=$(this);if(!t||t.isY()){var l=c;if(o.hasClass("passed")){var p=i.$stickies.eq(e+1);l=$.data(p[0],"pos")-d-o.outerHeight()}i.emulateYScroll(o,l,r,d),i.updateWidth(o,n)}s&&i.emulateXScroll(o,a,u,f,h)})}},i.getOuterScrollTop=function(){var e=0;return i.$tableParents.filter(":not(body,html)").each(function(){e+=$(this).scrollTop()}),e},i.getOuterScrollLeft=function(){var e=0;return i.$tableParents.filter(":not(body,html)").each(function(){e+=$(this).scrollLeft()}),e},i.updateCellWidths=function(t){var o=i.getCellWidths($("th,td",$("thead",e)));i.setCellWidths(o,t)},i.setCellWidths=function(e,t){t.find("th,td").each(function(t){var i=$(this),o=e[t];i.css({"min-width":o,"max-width":o})})},i.getCellWidths=function(e){var t=[];return e.each(function(e){var o,a=$(this);if("border-box"===a.css("box-sizing"))o=this.getBoundingClientRect().width;else{var n=$("th",i.$originalHeader);if("collapse"===n.css("border-collapse"))if(window.getComputedStyle)o=parseFloat(window.getComputedStyle(this,null).width);else{var s=parseFloat(a.css("padding-left")),l=parseFloat(a.css("padding-right")),r=parseFloat(a.css("border-width"));o=a.outerWidth()-s-l-r}else o=a.width()}t[e]=o}),t},i.updateWidth=function(e){i.updateCellWidths(e)},i.updateWidths=function(){i.$stickies.each(function(){i.updateWidth($(this))})},i.updateHeights=function(){i.$stickies.each(function(){var e=$(this),t=e.attr("data-height");"undefined"==typeof t&&(t=e.outerHeight()),e.parent().height(t+1)})},i.updateHeight=function(e,t){$.contains(i.$stickies,$(e))&&$(e).parent().height(t)},i.setMarginTop=function(e){i.options.marginTop=e},i.setMarginLeft=function(e){i.options.marginLeft=e},i.isLoaded=function(){return i.loaded},i.getDebugInfo=function(){return i.debug},i.isChrome=function(){return!!window.chrome&&!i.isOpera()},i.isOpera=function(){return!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0}}TableSubHeaders.id=0,TableSubHeaders.newInstance=function(e,t){return new TableSubHeaders(e,t)};\r\n';
}
;
var Lgwt_material_design_client_resources_MaterialTableBundle_1default_1InlineClientBundleGenerator$7_2_classLit = createForClass('gwt.material.design.client.resources', 'MaterialTableBundle_default_InlineClientBundleGenerator/7', 244);
function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$greedyScrollInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$greedyScrollInitializer = emptyMethod;
  greedyScroll = new MaterialTableBundle_default_InlineClientBundleGenerator$1;
}

function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$jQueryExtInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$jQueryExtInitializer = emptyMethod;
  jQueryExt = new MaterialTableBundle_default_InlineClientBundleGenerator$2;
}

function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateEventsInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateEventsInitializer = emptyMethod;
  mutateEvents = new MaterialTableBundle_default_InlineClientBundleGenerator$4;
}

function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$mutateInitializer = emptyMethod;
  mutate = new MaterialTableBundle_default_InlineClientBundleGenerator$3;
}

function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$stickythInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$stickythInitializer = emptyMethod;
  stickyth = new MaterialTableBundle_default_InlineClientBundleGenerator$5;
}

function $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$tableSubHeadersInitializer(){
  $clinit_MaterialTableBundle_default_InlineClientBundleGenerator$tableSubHeadersInitializer = emptyMethod;
  tableSubHeaders = new MaterialTableBundle_default_InlineClientBundleGenerator$7;
}

function WithJQueryResources_default_InlineClientBundleGenerator(){
}

defineClass(260, 1, {}, WithJQueryResources_default_InlineClientBundleGenerator);
var jQuery;
var Lgwt_material_design_client_resources_WithJQueryResources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.client.resources', 'WithJQueryResources_default_InlineClientBundleGenerator', 260);
function $getText(){
  var builder;
  builder = new StringBuilder;
  builder.string += '/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */\r\n!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",N="(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+",O=N.replace("w","w#"),P="\\\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+O+"))|)"+M+"*\\\\]",Q=":("+N+")(?:\\\\(((\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+P+")*)|.*)\\\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\\\]\'\\"]*?)"+M+"*\\\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+M+"*(even|odd|(([+-]|)(\\\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\\\d+)|))"+M+"*\\\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+M+"*((?:-\\\\d)?\\\\d*)"+M+"*\\\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\\d$/i,$=/^[^{]+\\{\\s*\\[native \\w/,_=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,ab=/[+~]/,bb=/\'|\\\\/g,cb=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\\\$&"):b.setAttribute("id",s),s="[id=\'"+s+"\'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class=\'a\'><\/div><div class=\'a i\'><\/div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=\'\'><option selected=\'\'><\/option><\/select>",a.querySelectorAll("[msallowclip^=\'\']").length&&q.push("[*^$]="+M+"*(?:\'\'|\\"\\")"),a.querySelectorAll("[selected]").length||q.push("\\\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!=\'\']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"=\'$1\']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1=';
  builder.string += '==b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href=\'#\'><\/a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,w=/^.[^:#\\[\\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)\r\n},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M';
  builder.string += '.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x<\/textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\\\.)"+p.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\\\.)"+r.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,bb=/<([\\w:]+)/,cb=/<|&#?\\w+;/,db=/<(?:script|style|link)/i,eb=/checked\\s*(?:[^=]|=\\s*.checked.)/i,fb=/^$|\\/(?:java|ecma)script/i,gb=/^true\\/(.*)/,hb=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,ib={option:[1,"<select multiple=\'multiple\'>","<\/select>"],thead:[1,"<table>","<\/table>"],col:[2,"<table><colgroup>","<\/colgroup><\/table>"],tr:[2,"<table><tbody>","<\/tbody><\/table>"],td:[3,"<table><tbody><tr>","<\/tr><\/tbody><\/table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1><\/$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1><\/$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)';
  builder.string += 'h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))\r\n},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["ta';
  builder.string += 'bIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\\t\\r\\n\\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\\/\\//,mc=/^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\\[\\]$/,yc=/\\r?\\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\\r\\n")}}):{name:b.name,value:c.replace(yc,"\\r\\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunctio';
  builder.string += 'n(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});\r\n';
  return builder.string;
}

function WithJQueryResources_default_InlineClientBundleGenerator$1(){
}

defineClass(261, 1, {}, WithJQueryResources_default_InlineClientBundleGenerator$1);
_.getName = function getName_18(){
  return 'jQuery';
}
;
_.getText = function getText_8(){
  return $getText();
}
;
var Lgwt_material_design_client_resources_WithJQueryResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.client.resources', 'WithJQueryResources_default_InlineClientBundleGenerator/1', 261);
function $clinit_WithJQueryResources_default_InlineClientBundleGenerator$jQueryInitializer(){
  $clinit_WithJQueryResources_default_InlineClientBundleGenerator$jQueryInitializer = emptyMethod;
  jQuery = new WithJQueryResources_default_InlineClientBundleGenerator$1;
}

function MaterialButton(){
  AbstractIconButton.call(this, ($clinit_ButtonType() , RAISED));
}

defineClass(252, 251, $intern_31, MaterialButton);
_.createElement_0 = function createElement(){
  return $createButtonElement($doc, 'button');
}
;
var Lgwt_material_design_client_ui_MaterialButton_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialButton', 252);
function $setIconPosition_0(this$static, position){
  $setStyle((!this$static.positionMixin && (this$static.positionMixin = new CssNameMixin(this$static)) , this$static.positionMixin), position.cssClass);
}

function $setIconType_0(this$static, icon){
  $setInnerText(($clinit_DOM() , this$static.element), icon.cssClass);
}

function MaterialIcon(){
  AbstractButton_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['material-icons']));
}

defineClass(169, 104, $intern_31, MaterialIcon);
_.createElement_0 = function createElement_0(){
  return $doc.createElement('i');
}
;
var Lgwt_material_design_client_ui_MaterialIcon_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialIcon', 169);
function $setText_0(this$static, text_0){
  $setText((!this$static.textMixin && (this$static.textMixin = new TextMixin(this$static)) , this$static.textMixin), text_0);
  fire_2(this$static);
}

function MaterialLabel(){
  AbstractValueWidget.call(this, $doc.createElement('span'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['material-label']));
}

defineClass(367, 163, $intern_31, MaterialLabel);
var Lgwt_material_design_client_ui_MaterialLabel_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialLabel', 367);
function $clinit_MaterialLoader(){
  $clinit_MaterialLoader = emptyMethod;
  loader = new MaterialLoader;
}

function $hide(this$static){
  $removeFromParent(this$static.div);
  this$static.scrollDisabled && ($getElement(($clinit_RootPanel() , get_0(null))).style['overflow'] = ($clinit_Style$Overflow() , 'auto') , undefined);
  this$static.type_0 == 0?$removeFromParent(this$static.preLoader):this$static.type_0 == 1 && $removeFromParent(this$static.progress_0);
}

function $setContainer(this$static, container){
  this$static.container = container;
}

function $show_1(this$static){
  if (!this$static.container) {
    $getElement(this$static.container).style['position'] = ($clinit_Style$Position() , 'relative');
    $getElement(this$static.div).style['position'] = 'absolute';
  }
  this$static.scrollDisabled && ($getElement(($clinit_RootPanel() , get_0(null))).style['overflow'] = ($clinit_Style$Overflow() , 'hidden') , undefined);
  if (this$static.type_0 == 0) {
    $setStyleName(this$static.div, 'valign-wrapper loader-wrapper');
    $add_6(this$static.div, this$static.preLoader);
  }
   else if (this$static.type_0 == 1) {
    $setStyleName(this$static.div, 'valign-wrapper progress-wrapper');
    $getElement(this$static.progress_0).style['margin'] = 'auto';
    $add_6(this$static.div, this$static.progress_0);
  }
  $add_1(this$static.container, this$static.div);
}

function MaterialLoader(){
  this.div = new Div;
  this.preLoader = new MaterialPreLoader;
  this.progress_0 = new MaterialProgress;
  this.container = ($clinit_RootPanel() , get_0(null));
  $setStyleName(this.div, 'valign-wrapper loader-wrapper');
  $getElement(this.preLoader).style['margin'] = 'auto';
  $add_6(this.preLoader, new MaterialSpinner(($clinit_SpinnerColor() , BLUE_0)));
  $add_6(this.preLoader, new MaterialSpinner(RED_0));
  $add_6(this.preLoader, new MaterialSpinner(YELLOW_0));
  $add_6(this.preLoader, new MaterialSpinner(GREEN_0));
  this.type_0 = 0;
}

function loading(visible, container){
  $clinit_MaterialLoader();
  loader.type_0 = 0;
  $setContainer(loader, container);
  visible?$show_1(loader):$hide(loader);
}

defineClass(178, 1, {}, MaterialLoader);
_.scrollDisabled = false;
_.type_0 = 0;
var loader;
var Lgwt_material_design_client_ui_MaterialLoader_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialLoader', 178);
function MaterialPreLoader(){
  MaterialWidget_0.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['preloader-wrapper', 'active']));
}

defineClass(392, 44, $intern_31, MaterialPreLoader);
var Lgwt_material_design_client_ui_MaterialPreLoader_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialPreLoader', 392);
function Div(){
  MaterialWidget.call(this, $doc.createElement('div'));
}

function Div_0(initialClass){
  MaterialWidget_0.call(this, $doc.createElement('div'), initialClass);
}

defineClass(63, 44, $intern_31, Div);
var Lgwt_material_design_client_ui_html_Div_2_classLit = createForClass('gwt.material.design.client.ui.html', 'Div', 63);
function $setType_0(this$static, type_0){
  $setType((!this$static.typeMixin && (this$static.typeMixin = new CssTypeMixin_0(this$static, this$static.fillContainer)) , this$static.typeMixin), type_0);
}

function MaterialProgress(){
  Div_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['progress']));
  this.fillContainer = new Div;
  ($clinit_DOM() , this.element).style['margin'] = ($clinit_Style$Unit() , '0.0px');
  $add_6(this, this.fillContainer);
  $setType_0(this, ($clinit_ProgressType() , INDETERMINATE));
}

defineClass(393, 63, $intern_31, MaterialProgress);
var Lgwt_material_design_client_ui_MaterialProgress_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialProgress', 393);
function MaterialSpinner(spinnerColor){
  MaterialWidget_0.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['spinner-layer']));
  this.circleClipperLeft = new Div;
  this.circleClipperRight = new Div;
  this.circle1 = new Div;
  this.circle2 = new Div;
  this.circle3 = new Div;
  this.gapPatch = new Div;
  $setStyle((!this.spinnerColorMixin && (this.spinnerColorMixin = new CssNameMixin(this)) , this.spinnerColorMixin), spinnerColor.cssClass);
}

defineClass(98, 44, $intern_31, MaterialSpinner);
_.onLoad = function onLoad_3(){
  $onLoad_0(this);
  $add_6(this, this.circleClipperLeft);
  $add_6(this.circleClipperLeft, this.circle1);
  $add_6(this, this.gapPatch);
  $add_6(this.gapPatch, this.circle2);
  $add_6(this, this.circleClipperRight);
  $add_6(this.circleClipperRight, this.circle3);
  $setStyleName(this.circleClipperLeft, 'circle-clipper left');
  $setStyleName(this.gapPatch, 'gap-patch');
  $setStyleName(this.circleClipperRight, 'circle-clipper right');
  $setStyleName(this.circle1, 'circle');
  $setStyleName(this.circle2, 'circle');
  $setStyleName(this.circle3, 'circle');
}
;
var Lgwt_material_design_client_ui_MaterialSpinner_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSpinner', 98);
function $addBlurHandler(this$static, handler){
  return $addDomHandler(this$static.valueBoxBase, new MaterialValueBox$lambda$14$Type(this$static, handler), ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
}

function $clearStatusText_0(this$static){
  $clearStatusText((!this$static.statusTextMixin && (this$static.statusTextMixin = new StatusTextMixin(this$static, this$static.errorLabel, this$static.valueBoxBase, this$static.label_0)) , this$static.statusTextMixin));
  $removeClassName($getElement(this$static.valueBoxBase), 'valid');
  $removeClassName($getElement(this$static.valueBoxBase), 'invalid');
}

function $getValue_0(this$static){
  var raw, raw0;
  if (this$static.returnBlankAsNull && !$isValid((new BlankValidator , raw0 = $getValueOrThrow(this$static.valueBoxBase) , raw0 == null?'':raw0))) {
    return null;
  }
  return raw = $getValueOrThrow(this$static.valueBoxBase) , raw == null?'':raw;
}

function $lambda$14(this$static, handler_1, event_1){
  !$getElement(this$static.valueBoxBase)['disabled'] && handler_1.onBlur(event_1);
}

function $setErrorText_0(this$static, errorText){
  $setErrorText((!this$static.statusTextMixin && (this$static.statusTextMixin = new StatusTextMixin(this$static, this$static.errorLabel, this$static.valueBoxBase, this$static.label_0)) , this$static.statusTextMixin), errorText);
  $removeClassName($getElement(this$static.valueBoxBase), 'valid');
  $removeClassName($getElement(this$static.valueBoxBase), 'invalid');
  $addClassName($getElement(this$static.valueBoxBase), 'invalid');
}

function $setType_1(this$static, type_0){
  this$static.type_0 = type_0;
  $setAttribute($getElement(this$static.valueBoxBase), 'type', type_0.type_0);
  if (this$static.type_0 != ($clinit_InputType() , SEARCH_0)) {
    $add_6(this$static, this$static.label_0);
    $setVisible(this$static.errorLabel, false);
    $add_6(this$static, this$static.errorLabel);
  }
}

function MaterialValueBox(tValueBox){
  AbstractValueWidget.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['input-field']));
  this.type_0 = ($clinit_InputType() , TEXT_0);
  this.label_0 = new Label_0;
  this.errorLabel = new MaterialLabel;
  new MaterialIcon;
  this.valueBoxBase = tValueBox;
  $add_6(this, this.valueBoxBase);
}

defineClass(164, 163, $intern_31);
_.isEnabled = function isEnabled_0(){
  return !$getElement(this.valueBoxBase)['disabled'];
}
;
_.onLoad = function onLoad_4(){
  var id_0;
  $onLoad_0(this);
  id_0 = ($clinit_DOM() , $createUniqueId($doc));
  $setId($getElement(this.valueBoxBase), id_0);
  $setAttribute($getElement(this.label_0), 'for', id_0);
  !this.focusableMixin && (this.focusableMixin = new FocusableMixin(new MaterialWidget($getElement(this.valueBoxBase))));
  $setUiObject(this.focusableMixin, new MaterialWidget($getElement(this.valueBoxBase)));
}
;
_.returnBlankAsNull = false;
var Lgwt_material_design_client_ui_MaterialValueBox_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialValueBox', 164);
function MaterialTextBox(){
  MaterialValueBox.call(this, new TextBox);
  $setType_1(this, ($clinit_InputType() , TEXT_0));
}

defineClass(165, 164, $intern_31, MaterialTextBox);
var Lgwt_material_design_client_ui_MaterialTextBox_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialTextBox', 165);
function $toast(this$static, msg, className){
  var duration, id_0, toast, widget, widget$array, widget$index, widget$max;
  this$static.element != null?(id_0 = castToString(this$static.element.attr('id'))):(id_0 = ($clinit_DOM() , $createUniqueId($doc)));
  className == null?(className = id_0):(className += ' ' + id_0);
  duration = valueOf(4000);
  $wnd.Materialize.toast(msg, duration, className, makeLambdaFunction(MaterialToast$lambda$0$Type.prototype.call_0, MaterialToast$lambda$0$Type, []));
  this$static.element = $wnd.$('.toast.' + id_0);
  this$static.element.attr('id', id_0);
  if (this$static.widgets != null) {
    toast = get_0(id_0);
    for (widget$array = this$static.widgets , widget$index = 0 , widget$max = widget$array.length; widget$index < widget$max; ++widget$index) {
      widget = widget$array[widget$index];
      ($clinit_DOM() , widget.element).style['paddingLeft'] = ($clinit_Style$Unit() , '20.0px');
      $add_0(toast, widget, toast.element);
    }
  }
}

function MaterialToast(widgets){
  this.widgets = widgets;
}

defineClass(179, 1, {}, MaterialToast);
var Lgwt_material_design_client_ui_MaterialToast_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialToast', 179);
function MaterialToast$lambda$0$Type(){
}

defineClass(559, $wnd.Function, {}, MaterialToast$lambda$0$Type);
_.call_0 = function call_1(){
}
;
function MaterialValueBox$lambda$14$Type($$outer_0, handler_1){
  this.$$outer_0 = $$outer_0;
  this.handler_1 = handler_1;
}

defineClass(351, 1, $intern_36, MaterialValueBox$lambda$14$Type);
_.onBlur = function onBlur_1(arg0){
  $lambda$14(this.$$outer_0, this.handler_1, arg0);
}
;
var Lgwt_material_design_client_ui_MaterialValueBox$lambda$14$Type_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialValueBox/lambda$14$Type', 351);
function $setText_1(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function Label_0(){
  MaterialWidget.call(this, ($clinit_DOM() , $doc.createElement('label')));
}

defineClass(363, 44, $intern_31, Label_0);
var Lgwt_material_design_client_ui_html_Label_2_classLit = createForClass('gwt.material.design.client.ui.html', 'Label', 363);
function $setText_2(this$static){
  $setText((!this$static.textMixin && (this$static.textMixin = new TextMixin(this$static)) , this$static.textMixin), 'Login');
}

function Span(){
  MaterialWidget.call(this, $doc.createElement('span'));
}

defineClass(365, 44, $intern_31, Span);
var Lgwt_material_design_client_ui_html_Span_2_classLit = createForClass('gwt.material.design.client.ui.html', 'Span', 365);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(145, 1, {197:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 145);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(213, 18, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 213);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = ($clinit_Boolean() , false);
}

function $compareTo_1(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_4(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_2(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo_1(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {5:1, 203:1, 7:1};
var FALSE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 203);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(205, 18, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 205);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_19;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(116, 1, {5:1, 116:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 116);
function $compareTo_2(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {5:1, 7:1, 204:1, 116:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 204);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(36, 18, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 36);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(28, 18, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 28);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(46, 18, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 46);
function $compareTo_3(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(68, 116, {5:1, 7:1, 68:1, 116:1}, Integer);
_.compareTo = function compareTo_1(b){
  return $compareTo_3(this, castTo(b, 68));
}
;
_.equals_0 = function equals_9(o){
  return instanceOf(o, 68) && castTo(o, 68).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_11(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 68);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 68, 256, 0, 1);
}

var boxedValues;
function compare_5(x_0, y_0){
  return compare_1(x_0, y_0) < 0?-1:compare_1(x_0, y_0) > 0?1:0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(47, 117, $intern_3, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 47);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(69, 36, {5:1, 69:1, 18:1, 12:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 69);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(57, 1, {5:1, 57:1}, StackTraceElement);
_.equals_0 = function equals_10(other){
  var st;
  if (instanceOf(other, 57)) {
    st = castTo(other, 57);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_18(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_16(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 57);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $compareTo_4(this$static, other){
  return compare_6((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other));
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals(this$static.toLowerCase(), other.toLowerCase());
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_2, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toLowerCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleLowerCase():this$static.toLowerCase();
}

function $toUpperCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleUpperCase():this$static.toUpperCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_26) {
    hiSurrogate = 55296 + (codePoint - $intern_26 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_26 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

stringCastMap = {5:1, 197:1, 7:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(17, 145, {197:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 17);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream(null);
  new PrintStream(null);
}

defineClass(574, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(26, 18, {5:1, 18:1, 12:1, 26:1}, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 26);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | (old = $put_0(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_1();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(520, 1, {});
_.add_0 = function add_1(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty_0 = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_9(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_17(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_10(joiner, e === this?'(this Collection)':e == null?'null':toString_6(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 520);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 25);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue_0());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_6(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(525, 1, $intern_37);
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_11(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 64)) {
    return false;
  }
  otherMap = castTo(obj, 64);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 25);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_19(this.entrySet_0());
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_3 = function remove_10(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_1(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_18(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 25);
    $add_10(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue_0()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 525);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 25);
    if ($equals_1(value_0, entry.getValue_0())) {
      return true;
    }
  }
  return false;
}

function $get_1(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_3(this$static.stringMap, key);
}

function $put_0(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):$put_2(this$static.stringMap, key, value_0);
}

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_12(this$static.hashCodeMap, null):$remove_13(this$static.stringMap, key):$remove_12(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(253, 525, $intern_37);
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_3 = function remove_11(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 253);
defineClass(526, 520, $intern_38);
_.equals_0 = function equals_12(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 56)) {
    return false;
  }
  other = castTo(o, 56);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_19(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 526);
function $contains(this$static, o){
  if (instanceOf(o, 25)) {
    return $containsEntry(this$static.this$01, castTo(o, 25));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(78, 526, $intern_38, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_2 = function remove_12(entry){
  var key;
  if ($contains(this, entry)) {
    key = castTo(entry, 25).getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 78);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_2(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last_0 = this$static.current;
  rv = castTo(this$static.current.next_1(), 25);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_6(this$static){
  var modCount;
  checkCriticalState(!!this$static.last_0);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last_0.remove_1();
  this$static.last_0 = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(79, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_3(){
  return $next_2(this);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.hasNext;
}
;
_.remove_1 = function remove_13(){
  $remove_6(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 79);
function $equals_0(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 34)) {
    return false;
  }
  other = castTo(o, 34);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

defineClass(521, 520, {34:1});
_.add_1 = function add_2(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_3(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_13(o){
  return $equals_0(this, o);
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_20(this);
}
;
_.iterator = function iterator_5(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_4 = function remove_14(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 521);
function $hasNext(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_1(this$static.last_0 = this$static.i++);
}

function $remove_7(this$static){
  checkCriticalState(this$static.last_0 != -1);
  this$static.this$01_0.remove_4(this$static.last_0);
  this$static.i = this$static.last_0;
  this$static.last_0 = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(148, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_3(){
  return $hasNext(this);
}
;
_.next_1 = function next_4(){
  return $next_3(this);
}
;
_.remove_1 = function remove_15(){
  $remove_7(this);
}
;
_.i = 0;
_.last_0 = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 148);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(120, 148, {}, AbstractList$ListIteratorImpl);
_.remove_1 = function remove_16(){
  $remove_7(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(this.last_0 = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 120);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.array.length);
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(149, 521, {34:1}, AbstractList$SubList);
_.add_1 = function add_4(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  $add_7(this.wrapped, this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.get_1 = function get_3(index_0){
  checkCriticalElementIndex(index_0, this.size_0);
  return $get_2(this.wrapped, this.fromIndex + index_0);
}
;
_.remove_4 = function remove_17(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = $remove_8(this.wrapped, this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.size_1 = function size_4(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 149);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(150, 526, $intern_38, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_2 = function remove_18(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 150);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(121, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_4(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_5(){
  var entry;
  return entry = $next_2(this.val$outerIter2) , entry.getKey();
}
;
_.remove_1 = function remove_19(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 121);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(254, 520, {}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 254);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(151, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_5(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_6(){
  var entry;
  return entry = $next_2(this.val$outerIter2) , entry.getValue_0();
}
;
_.remove_1 = function remove_20(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 151);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(105, 1, {105:1, 25:1});
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 25)) {
    return false;
  }
  entry = castTo(other, 25);
  return equals_21(this.key, entry.getKey()) && equals_21(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue_2(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_16(){
  return hashCode_26(this.key) ^ hashCode_26(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_19(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 105);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(90, 105, {105:1, 90:1, 25:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 90);
defineClass(533, 1, {25:1});
_.equals_0 = function equals_15(other){
  var entry;
  if (!instanceOf(other, 25)) {
    return false;
  }
  entry = castTo(other, 25);
  return equals_21(this.val$entry2.value[0], entry.getKey()) && equals_21($getValue_1(this), entry.getValue_0());
}
;
_.hashCode_0 = function hashCode_17(){
  return hashCode_26(this.val$entry2.value[0]) ^ hashCode_26($getValue_1(this));
}
;
_.toString_0 = function toString_20(){
  return this.val$entry2.value[0] + '=' + $getValue_1(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 533);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key);
  return !!lookupEntry && equals_21(lookupEntry.value_0, entry.getValue_0());
}

function $containsKey_0(this$static, k){
  return !!$getEntry_0(this$static, k);
}

defineClass(537, 525, $intern_37);
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return $containsKey_0(this, k);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_0 = function get_4(k){
  return getEntryValueOrNull($getEntry_0(this, k));
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 537);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(175, 526, $intern_38, AbstractNavigableMap$EntrySet);
_.contains_0 = function contains_3(o){
  return instanceOf(o, 25) && $containsEntry_0(this.this$01, castTo(o, 25));
}
;
_.iterator = function iterator_8(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.remove_2 = function remove_21(o){
  var entry;
  if (instanceOf(o, 25)) {
    entry = castTo(o, 25);
    return $removeEntry(this.this$01, entry);
  }
  return false;
}
;
_.size_1 = function size_7(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 175);
function AbstractNavigableMap$NavigableKeySet(map_0){
  this.map_0 = map_0;
}

defineClass(176, 526, $intern_38, AbstractNavigableMap$NavigableKeySet);
_.contains_0 = function contains_4(o){
  return $containsKey_0(this.map_0, o);
}
;
_.iterator = function iterator_9(){
  var entryIterator;
  return entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet(this.map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}
;
_.remove_2 = function remove_22(o){
  if ($containsKey_0(this.map_0, o)) {
    $remove_14(this.map_0, o);
    return true;
  }
  return false;
}
;
_.size_1 = function size_8(){
  return this.map_0.size_0;
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet', 176);
function AbstractNavigableMap$NavigableKeySet$1(val$entryIterator){
  this.val$entryIterator2 = val$entryIterator;
}

defineClass(129, 1, {}, AbstractNavigableMap$NavigableKeySet$1);
_.hasNext_0 = function hasNext_6(){
  return $hasNext(this.val$entryIterator2.iter);
}
;
_.next_1 = function next_7(){
  var entry;
  return entry = $next_5(this.val$entryIterator2) , entry.getKey();
}
;
_.remove_1 = function remove_23(){
  $remove_15(this.val$entryIterator2);
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet$1_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet/1', 129);
function $add_7(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_8(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = clone(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get_2(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_21(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_8(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i, 1);
  return true;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

defineClass(27, 521, $intern_39, ArrayList);
_.add_1 = function add_5(index_0, o){
  $add_7(this, index_0, o);
}
;
_.add_0 = function add_6(o){
  return $add_8(this, o);
}
;
_.contains_0 = function contains_5(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_5(index_0){
  return $get_2(this, index_0);
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_10(){
  return new ArrayList$1(this);
}
;
_.remove_4 = function remove_24(index_0){
  return $remove_8(this, index_0);
}
;
_.remove_2 = function remove_25(o){
  return $remove_9(this, o);
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 27);
function $next_4(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last_0 = this$static.i++;
  return this$static.this$01.array[this$static.last_0];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(76, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_7(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_8(){
  return $next_4(this);
}
;
_.remove_1 = function remove_26(){
  checkCriticalState(this.last_0 != -1);
  $remove_8(this.this$01, this.i = this.last_0);
  this.last_0 = -1;
}
;
_.i = 0;
_.last_0 = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 76);
function hashCode_18(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_19(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_20(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 190)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(266, 521, $intern_39, Collections$EmptyList);
_.contains_0 = function contains_6(object){
  return false;
}
;
_.get_1 = function get_6(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_11(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 266);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(267, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_8(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_9(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_1 = function remove_27(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 267);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(155, 1, {});
_.add_0 = function add_7(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.contains_0 = function contains_7(o){
  return this.coll.contains_0(o);
}
;
_.isEmpty_0 = function isEmpty_2(){
  return this.coll.isEmpty_0();
}
;
_.iterator = function iterator_12(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove_2 = function remove_28(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_11(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_21(){
  return toString_6(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 155);
function $remove_10(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(158, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_9(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_10(){
  return this.it.next_1();
}
;
_.remove_1 = function remove_29(){
  $remove_10();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 158);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(156, 155, {34:1}, Collections$UnmodifiableList);
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_1 = function get_7(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode_0 = function hashCode_21(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty_0 = function isEmpty_3(){
  return this.list.isEmpty_0();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 156);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(159, 158, {}, Collections$UnmodifiableListIterator);
_.remove_1 = function remove_30(){
  $remove_10();
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 159);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(268, 1, $intern_37, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_0 = function get_8(key){
  return this.map_0.get_0(key);
}
;
_.hashCode_0 = function hashCode_22(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.isEmpty_0 = function isEmpty_4(){
  return this.map_0.isEmpty_0();
}
;
_.put = function put_1(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_3 = function remove_31(key){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_22(){
  return toString_6(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 268);
function Collections$UnmodifiableSet(set_0){
  Collections$UnmodifiableCollection.call(this, set_0);
}

defineClass(157, 155, $intern_38, Collections$UnmodifiableSet);
_.equals_0 = function equals_18(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_23(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 157);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableSet.call(this, s);
}

defineClass(269, 157, $intern_38, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.contains_0 = function contains_8(o){
  return this.coll.contains_0(o);
}
;
_.iterator = function iterator_13(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 269);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(272, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_11(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(this.val$it2.next_1(), 25));
}
;
_.hasNext_0 = function hasNext_10(){
  return this.val$it2.hasNext_0();
}
;
_.remove_1 = function remove_32(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 272);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(270, 1, {25:1}, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_19(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue_0 = function getValue_3(){
  return this.entry.getValue_0();
}
;
_.hashCode_0 = function hashCode_24(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_0(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_23(){
  return toString_6(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 270);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(271, 156, {34:1, 190:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 271);
function $compare(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function $compare_0(a, b){
  return $compare(castTo(a, 7), castTo(b, 7));
}

function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(353, 18, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 353);
function $compareTo_5(this$static, other){
  return compare_5(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(other.jsdate.getTime()));
}

function $toString_2(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(93, 1, {5:1, 7:1, 93:1}, Date_0);
_.compareTo = function compareTo_2(other){
  return $compareTo_5(this, castTo(other, 93));
}
;
_.equals_0 = function equals_20(obj){
  return instanceOf(obj, 93) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 93).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_25(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_24(){
  return $toString_2(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 93);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

defineClass(35, 253, {5:1, 64:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 35);
function $add_9(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_11(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(40, 526, {5:1, 56:1}, HashSet);
_.add_0 = function add_8(o){
  return $add_9(this, o);
}
;
_.contains_0 = function contains_9(o){
  return $contains_0(this, o);
}
;
_.isEmpty_0 = function isEmpty_5(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_14(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_2 = function remove_33(o){
  return $remove_11(this, o);
}
;
_.size_1 = function size_13(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 40);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_1(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_12(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(275, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_15(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 275);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(161, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_12(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_11(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_1 = function remove_34(){
  $remove_12(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 161);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_3(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_13(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(273, 1, {}, InternalStringMap);
_.iterator = function iterator_16(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 273);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(160, 1, {}, InternalStringMap$1);
_.next_1 = function next_13(){
  return this.last_0 = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last_0, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_12(){
  return !this.current.done;
}
;
_.remove_1 = function remove_35(){
  $remove_13(this.this$01, this.last_0.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 160);
function $getValue_1(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_3(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(274, 533, {25:1}, InternalStringMap$2);
_.getKey = function getKey_1(){
  return this.val$entry2.value[0];
}
;
_.getValue_0 = function getValue_4(){
  return $getValue_1(this);
}
;
_.setValue = function setValue_1(object){
  return $put_2(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 274);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(513, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 513);
function Locale$1(){
}

defineClass(207, 513, {}, Locale$1);
_.toString_0 = function toString_25(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 207);
function Locale$4(){
}

defineClass(208, 513, {}, Locale$4);
_.toString_0 = function toString_26(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 208);
function MissingResourceException(s){
  RuntimeException_0.call(this, s);
}

defineClass(133, 18, {5:1, 18:1, 12:1, 133:1}, MissingResourceException);
var Ljava_util_MissingResourceException_2_classLit = createForClass('java.util', 'MissingResourceException', 133);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(71, 18, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 71);
function equals_21(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_26(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_10(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_2(this$static.builder, this$static.delimiter);
  $append_1(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(146, 1, {}, StringJoiner);
_.toString_0 = function toString_27(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 146);
function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare_0(key, tree.key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare0;
  if (type_0.fromKeyValid() && (compare0 = $compare(castTo(key, 7), castTo(fromKey, 7)) , compare0 < 0 || !fromInclusive && compare0 == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare = $compare(castTo(key, 7), castTo(toKey, 7)) , compare > 0 || !toInclusive && compare == 0)) {
    return false;
  }
  return true;
}

function $insert_3(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare_0(newNode.key, tree.key);
    if (c == 0) {
      state.value_0 = $setValue(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_3(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = $rotateDouble(tree, 1 - childNum));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_3(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_3(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $remove_14(this$static, k){
  var state;
  state = new TreeMap$State;
  $removeWithState(this$static, k, state);
  return state.value_0;
}

function $removeEntry(this$static, entry){
  var state;
  state = new TreeMap$State;
  state.matchValue = true;
  state.value_0 = entry.getValue_0();
  return $removeWithState(this$static, entry.getKey(), state);
}

function $removeWithState(this$static, key, state){
  var c, dir_0, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling;
  if (!this$static.root) {
    return false;
  }
  found = null;
  parent_0 = null;
  head = new TreeMap$Node(null, null);
  dir_0 = 1;
  head.child[1] = this$static.root;
  node = head;
  while (node.child[dir_0]) {
    last = dir_0;
    grandparent = parent_0;
    parent_0 = node;
    node = node.child[dir_0];
    c = $compare_0(key, node.key);
    dir_0 = c < 0?0:1;
    c == 0 && (!state.matchValue || equals_21(node.value_0, state.value_0)) && (found = node);
    if (!(!!node && node.isRed) && !$isRed(node.child[dir_0])) {
      if ($isRed(node.child[1 - dir_0])) {
        parent_0 = parent_0.child[last] = $rotateSingle(node, dir_0);
      }
       else if (!$isRed(node.child[1 - dir_0])) {
        sibling = parent_0.child[1 - last];
        if (sibling) {
          if (!$isRed(sibling.child[1 - last]) && !$isRed(sibling.child[last])) {
            parent_0.isRed = false;
            sibling.isRed = true;
            node.isRed = true;
          }
           else {
            dir2 = grandparent.child[1] == parent_0?1:0;
            $isRed(sibling.child[last])?(grandparent.child[dir2] = $rotateDouble(parent_0, last)):$isRed(sibling.child[1 - last]) && (grandparent.child[dir2] = $rotateSingle(parent_0, last));
            node.isRed = grandparent.child[dir2].isRed = true;
            grandparent.child[dir2].child[0].isRed = false;
            grandparent.child[dir2].child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.found = true;
    state.value_0 = found.value_0;
    if (node != found) {
      newNode = new TreeMap$Node(node.key, node.value_0);
      $replaceNode_0(head, found, newNode);
      parent_0 == found && (parent_0 = newNode);
    }
    parent_0.child[parent_0.child[1] == node?1:0] = node.child[!node.child[0]?1:0];
    --this$static.size_0;
  }
  this$static.root = head.child[1];
  !!this$static.root && (this$static.root.isRed = false);
  return state.found;
}

function $replaceNode_0(head, node, newNode){
  var direction, parent_0;
  parent_0 = head;
  direction = parent_0.key == null || $compare_0(node.key, parent_0.key) > 0?1:0;
  while (parent_0.child[direction] != node) {
    parent_0 = parent_0.child[direction];
    direction = $compare_0(node.key, parent_0.key) > 0?1:0;
  }
  parent_0.child[direction] = newNode;
  newNode.isRed = node.isRed;
  newNode.child[0] = node.child[0];
  newNode.child[1] = node.child[1];
  node.child[0] = null;
  node.child[1] = null;
}

function $rotateDouble(tree, rotateDirection){
  var otherChildDir;
  otherChildDir = 1 - rotateDirection;
  tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir);
  return $rotateSingle(tree, rotateDirection);
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(){
  this.root = null;
}

defineClass(174, 537, {5:1, 64:1}, TreeMap);
_.entrySet_0 = function entrySet_2(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_2(key, value_0){
  return $put_3(this, key, value_0);
}
;
_.remove_3 = function remove_36(k){
  return $remove_14(this, k);
}
;
_.size_1 = function size_14(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 174);
function $next_5(this$static){
  return this$static.last_0 = castTo($next_3(this$static.iter), 25);
}

function $remove_15(this$static){
  $remove_7(this$static.iter);
  $removeEntry(this$static.this$01, this$static.last_0);
  this$static.last_0 = null;
}

function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  this.this$01 = this$0;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(96, 1, {}, TreeMap$EntryIterator);
_.next_1 = function next_14(){
  return $next_5(this);
}
;
_.hasNext_0 = function hasNext_13(){
  return $hasNext(this.iter);
}
;
_.remove_1 = function remove_37(){
  $remove_15(this);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 96);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(110, 175, $intern_38, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 110);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initUnidimensionalArray(Ljava_util_TreeMap$Node_2_classLit, $intern_2, 80, 2, 0, 1);
  this.isRed = true;
}

defineClass(80, 90, {105:1, 90:1, 25:1, 80:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 80);
function TreeMap$State(){
}

defineClass(128, 1, {}, TreeMap$State);
_.toString_0 = function toString_28(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done_0 + ' found=' + this.found;
}
;
_.done_0 = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 128);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_1 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_TreeMap$SubMapType();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_2, 61, 0, [All, Head, Range_1, Tail]);
}

defineClass(61, 6, $intern_40, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_1, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 61, values_21);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(383, 61, $intern_40, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 383, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(384, 61, $intern_40, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 384, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(385, 61, $intern_40, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 385, null);
function $add_11(this$static, o){
  return $put_3(this$static.map_0, o, ($clinit_Boolean() , FALSE)) == null;
}

function TreeSet(){
  this.map_0 = new TreeMap;
}

defineClass(377, 526, {5:1, 56:1}, TreeSet);
_.add_0 = function add_9(o){
  return $add_11(this, o);
}
;
_.contains_0 = function contains_10(o){
  return $containsKey_0(this.map_0, o);
}
;
_.iterator = function iterator_17(){
  var entryIterator;
  return entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet((new AbstractNavigableMap$NavigableKeySet(this.map_0)).map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}
;
_.remove_2 = function remove_38(o){
  return $remove_14(this.map_0, o) != null;
}
;
_.size_1 = function size_15(){
  return this.map_0.size_0;
}
;
var Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', 377);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO_0 = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING_0 = new Level$LevelWarning;
}

function parse_0(name_0){
  $clinit_Level();
  var value_0;
  value_0 = $toUpperCase(name_0, ($clinit_Locale() , ROOT));
  switch (value_0) {
    case 'ALL':
      return ALL;
    case 'CONFIG':
      return CONFIG;
    case 'FINE':
      return FINE;
    case 'FINER':
      return FINER;
    case 'FINEST':
      return FINEST;
    case 'INFO':
      return INFO_0;
    case 'OFF':
      return OFF;
    case 'SEVERE':
      return SEVERE;
    case 'WARNING':
      return WARNING_0;
    default:throw toJs(new IllegalArgumentException_0('Invalid level "' + name_0 + '"'));
  }
}

defineClass(522, 1, $intern_2);
_.getName = function getName_20(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString_0 = function toString_29(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO_0, OFF, SEVERE, WARNING_0;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 522);
function Level$LevelAll(){
}

defineClass(230, 522, $intern_2, Level$LevelAll);
_.getName = function getName_21(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return $intern_19;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 230);
function Level$LevelConfig(){
}

defineClass(231, 522, $intern_2, Level$LevelConfig);
_.getName = function getName_22(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 231);
function Level$LevelFine(){
}

defineClass(232, 522, $intern_2, Level$LevelFine);
_.getName = function getName_23(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 232);
function Level$LevelFiner(){
}

defineClass(233, 522, $intern_2, Level$LevelFiner);
_.getName = function getName_24(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 233);
function Level$LevelFinest(){
}

defineClass(234, 522, $intern_2, Level$LevelFinest);
_.getName = function getName_25(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 234);
function Level$LevelInfo(){
}

defineClass(235, 522, $intern_2, Level$LevelInfo);
_.getName = function getName_26(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 235);
function Level$LevelOff(){
}

defineClass(236, 522, $intern_2, Level$LevelOff);
_.getName = function getName_27(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 236);
function Level$LevelSevere(){
}

defineClass(237, 522, $intern_2, Level$LevelSevere);
_.getName = function getName_28(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 237);
function Level$LevelWarning(){
}

defineClass(238, 522, $intern_2, Level$LevelWarning);
_.getName = function getName_29(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 238);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 103);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.name_0;
    parentName = $substring_0(name_1, 0, max_0(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_0(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $clinit_Level();
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(215, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 215);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  this.millis = ($clinit_System() , fromDouble_0(now_2()));
}

defineClass(276, 1, $intern_2, LogRecord);
_.loggerName = '';
_.millis = 0;
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 276);
function $actuallyLog(this$static, level, msg, thrown){
  var record;
  record = new LogRecord(level, msg);
  record.thrown = thrown;
  $setLoggerName(record, this$static.name_0);
  $actuallyLog_0(this$static, record);
}

function $actuallyLog_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = castTo($toArray(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_41, 88, this$static.handlers.array.length, 0, 1)), 189) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    handler = handler$array0[handler$index0];
    handler.publish(record);
  }
  logger = this$static.useParentHandlers?this$static.parent_0:null;
  while (logger) {
    for (handler$array = castTo($toArray(logger.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_41, 88, logger.handlers.array.length, 0, 1)), 189) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      handler = handler$array[handler$index];
      handler.publish(record);
    }
    logger = logger.useParentHandlers?logger.parent_0:null;
  }
}

function $log(this$static, level, msg){
  level.intValue() >= ($clinit_Level() , 1000) && $actuallyLog(this$static, level, msg, null);
}

function $log_0(this$static, level, msg, thrown){
  $clinit_Level();
  $actuallyLog(this$static, level, msg, thrown);
}

function $setParent_0(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

function Logger(name_0){
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(103, 1, {103:1}, Logger);
_.useParentHandlers = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 103);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, end;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, 0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function now_2(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function compare_6(a, b){
  return a == b?0:a < b?-1:1;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=libraryui-0.js

