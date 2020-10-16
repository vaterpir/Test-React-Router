import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components/App';
import { Provider, connect } from 'react-redux';
import { bindActionCreators, createStore } from 'redux';
/* import rootReducer from './reducers/reducers'; */

const initialState = {
  tasks: [],
  newTask: '',
};

const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: text,
});
const changeNewTask = (text) => ({
  type: 'CHANGE_NEW_TASK',
  payload: text,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'CHANGE_NEW_TASK':
      return { ...state, newTask: state.payload };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);

const putStateToProps = (state) => {
  console.log(state);
  return {
    tasks: state.tasks,
    newTask: state.newTask,
  };
};

const putActionToProps = (dispatch) => ({
  addTask: bindActionCreators(addTask, dispatch),
  changeNewTask: bindActionCreators(changeNewTask, dispatch),
});

console.log(store.getState());

const WrapperApp = connect(putStateToProps, putActionToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
