import {html, LitElement} from "lit";
import {customElement, property} from 'lit/decorators';
@customElement('awesome-button')
export class Button extends LitElement {

    @property()
    buttonText = '';

    render() {
        return html`<button id="custom-button">${this.buttonText}</button>`;
    }

    // This disables the shadow-dom, uncomment to pass
    createRenderRoot() {
        return this;
    }
}
