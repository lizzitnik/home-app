import React from 'react';
import {shallow} from 'enzyme';

import {Weather} from './weather-app';

describe('<Weather />', () => {
    it('Renders without crashing', () => {
        shallow(<Weather />);
    });

});
