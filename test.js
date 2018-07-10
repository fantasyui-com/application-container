const ApplicationContainer = require('.');
const BootstrapContainer = require('./class/bootstrap-container');
const BootstrapContainerFluid = require('./class/bootstrap-container-fluid');



class BootstrapRow extends ApplicationContainer {

  constructor(){
    super();

    this.classNames.add('container-fluid')

  }

  createNodes(){
    // if does not exist create
    if(this.nodes.get('root')){
      const document = this.document;
      const rootNode = document.createElement("div");
      const bodyNode = document.createElement("div");
      rootNode.appendChild(bodyNode);
      this.nodes.add('root', rootNode)
      this.nodes.add('body', bodyNode)
    }
  }

  updateNodes(data){
    // if does not exist create
    if(this.nodes.get('root')){
      const document = this.document;
      const rootNode = document.createElement("div");
      const bodyNode = document.createElement("div");

      rootNode.appendChild(bodyNode);
      this.nodes.add('root', rootNode)
      this.nodes.add('body', bodyNode)
    }
  }
  destroyNodes(){
    // if does not exist create
    if(this.nodes.get('root')){
      const document = this.document;
      const rootNode = document.createElement("div");
      const bodyNode = document.createElement("div");
      rootNode.appendChild(bodyNode);
      this.nodes.add('root', rootNode)
      this.nodes.add('body', bodyNode)
    }
  }

}



// Create Application Structure
const bootstrapColumn1 = new BootstrapColumn();
bootstrapColumn1.addChild(/* .. */);

const bootstrapColumn2 = new BootstrapColumn();
bootstrapColumn2.addChild(/* .. */);

const bootstrapRow = new BootstrapRow();
bootstrapRow.addChild(bootstrapColumn1);
bootstrapRow.addChild(bootstrapColumn2);

const bootstrapContainer = new BootstrapContainer();
bootstrapContainer.addChild(bootstrapRow)

// Create Root
const applicationContainer = new ApplicationContainer();
applicationContainer.addChild( bootstrapContainer );

// mount
applicationContainer.parentNode(document.body);

// start
window.onload = function() {
  applicationContainer.start()
}

window.addEventListener('unload', function(event) {
  applicationContainer.stop();
});
