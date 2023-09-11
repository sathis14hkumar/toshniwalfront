import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import adminDetails from './adminDetails';

const combinedReducer = combineReducers({
  adminDetails,
});

export const reducers = (state, action) => {
  if (action.type === HYDRATE) {
    // REMOVING INITAL DATAS (inital Data from the redux store has "init" as a value)

    const incomingNewData = { ...action.payload };

    const cachedData = { ...state };

    Object.keys(incomingNewData).forEach((data) =>
      Object.keys(incomingNewData[data]).forEach((rData) => {
        if (incomingNewData[data][rData] === 'init') {
          incomingNewData[data][rData] = cachedData[data][rData];
        }
      })
    );

    return {
      ...cachedData, // use previous state
      ...incomingNewData, // apply delta from hydration
    };
  }
  return combinedReducer(state, action);
};
