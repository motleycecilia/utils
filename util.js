let util={
  disHide:function(doc){
    doc.className.indexOf('hide') === -1 ?
    (doc.className = doc.className+' hide') :
    false;
  },
  disShow: function(doc){
    doc.className = doc.className.replace(' hide','');
  },
  toogleShowOrHide: function(doc){
    // doc.className.indexOf('hide') >-1 ?
    // this.disShow(doc) :
    // this.disHide(doc);
    this.toogleClass(doc,'hide');
  },
  toogleClass: function(doc,className){
    let docClasName=doc.className;
    doc.className = docClasName.indexOf(className) > -1 ?
    docClasName.replace(className,'') :
    (docClasName.trim() + " " + className);
  },
  addClass:function(doc,className){
    let docClasName=doc.className;
    doc.className = docClasName.indexOf(className) > -1 ?
    docClasName :
    docClasName+' '+className;
  },
  removeClass:function(doc,className){
    let docClasName=doc.className;
    doc.className = docClasName.indexOf(className) > -1 ?
    docClasName.replace(className,'') :
    docClasName;
  },
  setAttr: function(doc,attr,val){
    doc.attr ? doc.attr=val : doc.attributes[attr].value = val;
  },
  getAttr: function(doc,attr){
    return doc.attr ? doc.attr : doc.attributes[attr].value;
  },
  arrayPlayFnc:function(arrays, func){
    [].forEach.call(arrays,function(val){
      func(val);
    })
  },
  onEvent: function(doc,Event,fn){
    doc.addEventListener(Event,fn);
  },
  getNowDate : function() {
    let s = 1
    let startFill = (f) => ('' + f).length === 1 ? ('0' + f) : f
    let d = new Date()
    return `${d.getFullYear()}-${startFill((1 + d.getMonth()))}-${startFill(d.getDate())}`
  },
  getNonempty: function(val1, val2) {
    return !!val1 ? val1 : val2;
  },
  looding: function(){
    document.getElementsByClassName("looding")[0].innerHTML =
    `<div class="mask"></div>
      <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
    </div>`;
  }
};
export default util
