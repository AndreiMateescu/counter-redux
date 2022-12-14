const INITIAL_STATE = {
  counter: 0,
};

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
