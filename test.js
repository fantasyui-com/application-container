const ApplicationContainer = require('.');
const BootstrapContainer = require('./class/bootstrap-container');
const BootstrapContainerFluid = require('./class/bootstrap-container-fluid');



class BootstrapRow extends ApplicationContainer {
  constructor(){
    super();

    this.classNames.add('container-fluid')
    this.html = `
      <div class="${Array.from(this.classNames).join(" ")}">
      <span data-node="containerNode"></span>
      </div>
    `;
  }
}

const applicationContainer = new ApplicationContainer();

console.log(applicationContainer);
