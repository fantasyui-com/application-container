const ApplicationContainer = require('../application-container');

class BootstrapContainerFluid extends ApplicationContainer {
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

module.exports = BootstrapContainerFluid;
