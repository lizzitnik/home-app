import React from 'react';
import {shallow} from 'enzyme';

import CurrentDate from './date';

describe('<CurrentDate />', () => {
    it('Renders without crashing', () => {
        shallow(<CurrentDate />);
    });
});
