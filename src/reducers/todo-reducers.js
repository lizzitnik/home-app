import * as actions from '../actions'

const initialState = {
  items: [{
    value: 'Clean the gutters',
    completed: false
  }, {
    value: 'Water the plants',
    completed: false
  }, {
    value: 'Feed the dog',
    completed: false
  }]
}

export const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          value: action.value,
          completed: false
        }
      ]

    default:
      return state;
  }
}
