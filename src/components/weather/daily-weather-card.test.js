import React from 'react';
import {shallow} from 'enzyme';

import DailyCard from './daily-weather-card';

describe('<DailyCard />', () => {
    it('Renders without crashing', () => {
        shallow(<DailyCard />);
    });

});
