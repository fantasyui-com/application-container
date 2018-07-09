class Model {
  createElement(name){
  }
}

class ApplicationContainer extends Model {

  constructor(){
    super();

    this.classNames = new Map();
    this.elements = new Map(); // get/set map of elements stored in AC

  }

}

module.exports = ApplicationContainer;
