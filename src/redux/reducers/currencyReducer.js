import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol: "AED",
  currencyName: "Dirhams",
  currencyRate: 1
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;
    
    if (currencyName === "Dirhams") {
      return {
        ...state,
        currencySymbol: "AED",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
  }

  return state;
};

export default currencyReducer;
