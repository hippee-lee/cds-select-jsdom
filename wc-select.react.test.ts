import {WcSelect} from './wc-select.react';
import { shallow } from 'enzyme';

describe('awesome-button', () => {

    it('renders', () => {
        const wrapper = shallow(
                `<WcSelect>
                    <label>Label</label>
                    <select>
                        <option>Option 1</option>
                    </select>
                </WcSelect>`
        );
        const renderedComponent = wrapper.find(WcSelect);
        expect(renderedComponent.at(0).html()).toMatch(/2/);
        expect(renderedComponent.at(1).html()).toMatch(/1/);
    });
});
