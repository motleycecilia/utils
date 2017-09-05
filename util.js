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
  }
};
export default util
