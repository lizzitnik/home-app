import React from 'react';
import {shallow} from 'enzyme';

import {Daily} from './daily-weather';

describe('<Daily />', () => {
    it('Renders without crashing', () => {
        shallow(<Daily />);
    });

});
