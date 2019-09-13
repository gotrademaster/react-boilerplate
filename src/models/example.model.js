const example = {
  state: {
    value: 0,
  },
  reducers: {
    increment(state, payload) {
      return { ...state, value: state.value + payload };
    },
  },
  effects: () => ({

  }),
};

export default example;
