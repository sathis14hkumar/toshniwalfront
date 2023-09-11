import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { api } from '../service/api';
import { Toast } from '../service/toast';

import { reducers } from '../redux/reducer';

export const initStore = () => {
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument({ api, Toast }))
  );
};

export const wrapper = createWrapper(initStore);
