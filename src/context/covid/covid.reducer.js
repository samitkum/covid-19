import { SEARCH_TEXT, FETCH_STATES } from "../types";
export default (state, action) => {
  switch (action.type) {
    case FETCH_STATES:
      return {
        ...state,
        states: action.payload.statewise,
        state: action.payload.statewise[0],
        dates: action.payload.cases_time_series,
        loading: false,
      };
    case SEARCH_TEXT:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};
