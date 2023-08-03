const jsxParser = (code) => {
  const result = [];
  const componentStack = [];

  const componentRegex = /<(\/|)(\w+)\s*([^>]*)\s*\/?>/g;
  const attributeRegex = /(\w+\:|)(\w+)\s*=\s*("([^"]*)"|\{([^}]*)\})/g;
  const attributeRegexTrue = /(\w+\:|\{|)(\w+)\s*(\}|=|)\s/g;
  const spreadPropsRegex = /\{...\{([^}]+)\}\}/;

  let match;

  while ((match = componentRegex.exec(code))) {
    const [full, close, type, attributeString] = match;
    let params = {};
    const children = [];

    var addAttr = (attrKind, attributeName, attributeValue, isvar, onlyifnull) => {
      if(isvar ) attributeValue = '${'+attributeValue+'}';
      if(attrKind){
        attrKind = attrKind.split(':')[0];
        if(!params[attrKind]) params[attrKind] = {};
        if(onlyifnull && params[attrKind][attributeName]) return;
        params[attrKind][attributeName] = attributeValue;
      } else {
        if(onlyifnull && params[attributeName]) return;
        params[attributeName] = attributeValue;
      }
    }

    if(spreadPropsRegex.test(attributeString)){
      var f = spreadPropsRegex.exec(attributeString) || [];
      params = '${'+f[1]+'}';
    } else {
      let attributeMatch;
      while ((attributeMatch = attributeRegex.exec(attributeString))) {
        let [, attrKind, attributeName, sep2, attributeValue, attributeVar] = attributeMatch;
        var v = false;
        if(attributeVar) v = true, attributeValue = attributeVar;

        addAttr(attrKind, attributeName, attributeValue, v);
      }
      while ((attributeMatch = attributeRegexTrue.exec(attributeString))) {
        let [, attrKind, attributeName] = attributeMatch;
        var val = true;
        if(attrKind == '{'){
          attrKind = null;
          val = attributeName;
        }
        addAttr(attrKind, attributeName, val, !(val === true), val === true);
      }
    }

    const component = {
      type,
      params,
      children
    };

    if (componentStack.length > 0) {
      const parentComponent = componentStack[componentStack.length - 1];
      if(!close) parentComponent.children.push(component);
    } else {
      if(!close) result.push(component);
    }

    if (!full.endsWith("/>")) {
      if(!close) componentStack.push(component);
    }

    if (full.endsWith(`</${type}>`) && close) {
      componentStack.pop();
    }
  }

  return result;
}

function JSXtoNested(jsx){
  
  	let nested = ``;
  
  	function paramType(param){
    	if(!isNaN(parseFloat(param))){
        	return param;  
        } else if(param == true || param == false) {
        	return param;
        } else if(param.match(/\$\{(.+)\}/)) {
        	return param.match(/\$\{(.+)\}/)[1];
        } else {
        	try{
            	JSON.parse(param);
              	return param;
            } catch(e){
            	return '"'+param+'"';
            }
        }
    }
  
  	function objectProperty(key, value){
      	let val = paramType(value);
    	return key == val ? key : `${key}: ${val}`;
    }
  
	function refactorChild(child){
    	let component = `new ${child.type}({`;
    	
      	for(var i in child.params){
        	component += objectProperty(i, child.params[i]);
            if(i != Object.keys(child.params).pop()) component += ',';
        }
      	
      	if(child.children.length){
          if(!component.endsWith(',')) component += ',';
          component += `children: [`; 
          child.children.forEach((child, index) => component += refactorChild(child)+(index == child.children.length ? '' : ','));
          component += "]";	
        }
      
      	component += "})";
      	return component;
    }
  
  	jsx.forEach(child => nested += refactorChild(child));
  
  	return nested;
}


console.log(JSXtoNested(jsxParser(`<Container id="fucjk" name={items} >
	<Button text="Hello"/>
</Container>`)));
