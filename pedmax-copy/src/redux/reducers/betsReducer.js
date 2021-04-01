const initialState = [];

const betsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BETS":
      return [
        ...state,
        {
          id: action.id,
          data: action.data,
        },
      ];

    case "REMOVE_BETS":
      const removeId = state.findIndex((t) => t.id === action.id);
      const copy = [...state];
      copy.splice(removeId, 1);
      return copy;

    case "EDIT_BETS":
      const editId = state.findIndex((t) => t.id === action.id);
      const info = state[editId];
      info.data.inputVal = action.inputVal;
      const copyInfo = [...state];
      copyInfo.splice(editId, 1, info);
      return copyInfo;


    default:
      return state;
  }
};

export default betsReducer;
