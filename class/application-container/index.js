class Model {
  createElement(name){
  }
}

class ApplicationContainer extends Model {

  constructor(){
    super();



    this.classNames = new Set();
    this.nodes = new Map(); // get/set map of elements stored in AC

  }

  render(parent){
    this.parent = parent;

  }

}

module.exports = ApplicationContainer;
