export const countUpAsync = () => {
  return { type: "COUNT_UP", value: 1, loading: false };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const countUp = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(countUpAsync(val));
    }, 2000);
  };
};

export const countDown = () => {
  return { type: "COUNT_DOWN", value: 1 };
};
