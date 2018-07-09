const ApplicationContainer = require('../application-container');

class BootstrapContainer extends ApplicationContainer {
  constructor(){
    super();

    this.classNames.add('container')
    this.html = `
      <div class="${Array.from(this.classNames).join(" ")}">
      <span data-node="containerNode"></span>
      </div>
    `;
  }
}

module.exports = BootstrapContainer;
