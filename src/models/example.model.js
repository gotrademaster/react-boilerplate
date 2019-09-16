import when from '../utils/when';

const example = {
  state: {
    value: 0,
  },
  reducers: {
    increment(state, payload) {
      return { ...state, value: state.value + payload };
    },
    click(state, payload) {
      return { ...state, value: state.value + payload };
    },
  },
  effects: () => ({

  }),
  logics: [
    when(['example/click'], (dispatch) => dispatch.example.increment(1)),
  ],
};

export default example;
