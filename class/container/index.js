const uuid = require('uuid/v4');

class Model {

  createElement(name){
  }

}

class ApplicationContainer extends Model {

  constructor(){
    super();


    this.uuid = uuid();
    this.classNames = new Set();
    this.nodes = new Map(); // get/set map of elements stored in AC

  }

  render(parent){
    this.parent = parent;

  }

}

module.exports = ApplicationContainer;
