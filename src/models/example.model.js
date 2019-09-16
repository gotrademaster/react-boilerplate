import Immutable from 'seamless-immutable';
import when from '../utils/when';

const example = {
  state: Immutable({
    value: 0,
  }),
  reducers: {
    increment: (state, payload) => state.merge({ value: state.value + payload }),
    click: (state, payload) => state.merge({ value: state.value + payload }),
  },
  effects: () => ({

  }),
  logics: [
    when(['example/click'], (dispatch) => dispatch.example.increment(1)),
  ],
};

export default example;
