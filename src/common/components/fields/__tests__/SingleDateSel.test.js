import React from 'react';
import renderer from 'react-test-renderer'
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import SingleDateSel from '../SingleDateSel.jsx';

configure({ adapter: new Adapter() })

describe('test suite', () => {
    const wrapper = shallow(<SingleDateSel />);
    // Focused state should be equal to false after mounting the component
    it('should set "state" false', () => {
        expect(wrapper.state('focused')).toBe(false);
    });
    
    // Negative case id as props not equal to null
    it('props id not equal to null', () => {
        let wrapper = shallow(<SingleDateSel id="date"/>);
        expect(wrapper.props().id).not.toBe(null);
    });
    // Negative case focused is not equal to null
    it('props focused not equal to null', () => {
        let wrapper = shallow(<SingleDateSel focused="date"/>);
        expect(wrapper.props().focused).not.toBe(null);
    });

    // id as props should be equal to date which is from API
    it('props id equal to string', () => {
        let wrapper = shallow(<SingleDateSel id="date"/>);
        expect(wrapper.props().id).toBe('date');
    });
    // Props as disabled is equal to false
    it('props focused equal to string disabled', () => {
        let wrapper = shallow(<SingleDateSel disabled="false"/>);
        expect(wrapper.props().disabled).toBe(false);
    });
    // Props as required is equal to false
    it('props focused equal to string required', () => {
        let wrapper = shallow(<SingleDateSel required="false"/>);
        expect(wrapper.props().required).toBe(false);
    });
});