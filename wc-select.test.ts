import {LitElement} from 'lit';

describe('awesome-button', () => {

    it('displays button text', async () => {
        const wcSelectElement = window.document.createElement('wc-select') as LitElement;
        const label = window.document.createElement('label');
        label.textContent = "label";
        const select = window.document.createElement('select');
        const option = window.document.createElement('option');
        option.textContent = 'option 1';
        select.appendChild(option);
        wcSelectElement.appendChild(label);
        wcSelectElement.appendChild(select);
        window.document.body.appendChild(wcSelectElement);
        await wcSelectElement.updateComplete;

        const wcSelectRender = window.document.querySelector('wc-select');
        expect(wcSelectRender).toBeTruthy();
    });
});
