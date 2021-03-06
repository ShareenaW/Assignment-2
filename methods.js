/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.
In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  console.log('myMap');

  const newArray = [];
  for(let i = 0; i < this.length; i++){
    newArray[i] = callbackFn(this[i], i);
  }

  return newArray;
  
};


// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    if (callbackFn(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};



// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i])){
      return true;
    }
  }
  return false;
};




// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    if (!callbackFn(this[i])) {
      return false;
    }
  }
  return true;
};



// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    accumulator = callbackFn(accumulator, this[i]);
  }

  return accumulator;
};



// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    if(this[i] == searchElement){
      return true;
    }
  }
  return false;
};




// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1; 
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  for(let i = this.length; i > 0; i--){
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let properties = [];
  for(const prop in object){
    properties.push(prop);
  }
  return properties;
};



// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  let values = [];
  for(const prop in object){
    values.push(object[prop]);
  }
  return values;
};

