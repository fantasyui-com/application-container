const ApplicationContainer = require('.');

class BootstrapContainer extends ApplicationContainer {
  constructor(){
    super();
    this.html = `
      <div class="${this.classNames}">
      <span data-node="containerNode"></span>
      </div>
    `;
  }



}

const applicationContainer = new ApplicationContainer();

console.log(applicationContainer);
