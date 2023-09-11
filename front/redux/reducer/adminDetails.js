import { adminDetails } from '../actionType/actionType';

const initialState = {
  sourceOptions: [],
  geographyOptions: [],
  statusOptions: [],
  accessDetails: [],
};

export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case adminDetails.sourceOptions:
      return {
        ...state,
        sourceOptions: payload,
      };
    case adminDetails.geographyOptions:
      return {
        ...state,
        geographyOptions: payload,
      };
    case adminDetails.statusOptions:
      return {
        ...state,
        statusOptions: payload,
      };
    default:
      return state;
  }
};
