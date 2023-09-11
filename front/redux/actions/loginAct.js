import { authApi } from 'service/apiVariables';

// login
export const login =
  (body) =>
  (dispatch, getState, { api, Toast }) => {
    return new Promise((resolve, reject) => {
      api({ ...authApi.loginApi, body })
        .then((data) => {
          Toast({ type: 'success', message: data.message });
          localStorage.setItem('loginDetails', JSON.stringify(data.data));
          resolve(data);
        })
        .catch(({ message }) => reject(Toast({ type: 'error', message })));
    });
  };
