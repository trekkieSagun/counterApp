const initialState = {
  count: 20,
  history: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case "COUNT_UP":
      // newState.count++;
      return {
        ...state,
        count: state.count + action.value,
        loading: action.loading,
        history: state.history.concat({
          id: Math.random(),
          count: state.count + action.value,
        }),
      };

    case "COUNT_DOWN":
      // newState.count--;
      return {
        ...state,
        count: state.count - action.value,
        history: state.history.concat({
          id: Math.random(),
          count: state.count - action.value,
        }),
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter((item) => item.id !== action.key),
      };

    default:
  }

  return newState;
};

export default reducer;
