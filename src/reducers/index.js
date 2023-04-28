import { combineReducers } from 'redux';

// Reducer for the counter
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'DECREMENT_COUNTER':
      return state - 1;
    default:
      return state;
  }
};

// Combine all reducers into a rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
