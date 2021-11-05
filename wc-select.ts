import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators';

@customElement('wc-select')
export class WcSelect extends LitElement {
    render() {
        return html`
            <div class="" private-host>
                <slot name="label"></slot>
                <slot name="select"></slot>
            </div>
        `;
    }
}
