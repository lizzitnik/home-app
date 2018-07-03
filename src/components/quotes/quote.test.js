import React from 'react';
import {shallow} from 'enzyme';

import {Quote} from './quote';

describe('<Quote />', () => {
    it('Renders without crashing', () => {
        shallow(<Quote />);
    });

});
