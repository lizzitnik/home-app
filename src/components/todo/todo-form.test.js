import React from 'react';
import {shallow} from 'enzyme';

import {TodoForm} from './todo-form';

describe('<TodoForm />', () => {
    it('Renders without crashing', () => {
        shallow(<TodoForm />);
    });

});
