export default (state = {}, action) => {
  switch (action.type) {
    case "BEGIN_SEARCH":
      return {
        ...state,
        term: action.term,
        images: [],
        status: "searching"
      };
    case "DONE_SEARCH":
      return {
        ...state,
        images: action.images,
        status: "done"
      };
    case "ERROR_SEARCH":
      return {
        ...state,
        status: "error"
      };
    default:
      return state;
  }
};
