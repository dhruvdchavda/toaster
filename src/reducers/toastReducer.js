const initialState = {
  message: "",
};
const changeMessage = (state = initialState, action) => {
  switch (action.type) {
    case "SETMESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default changeMessage;
