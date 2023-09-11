import {
  axiosInstance,
  cancelTokenSource,
  statusHelper,
  getServiceUrl,
} from './utilities';

/**
 *  Customized axios function for api calls.
 * @returns {Promise} that contains the api data's response
 */

export const api = async function ({
  method = 'get',
  api: apiURL,
  body,
  status = false,
  baseURL = 'user',
  configObj = {},
}) {
  const tempConfigObj = { ...configObj };
  tempConfigObj.cancelToken = cancelTokenSource.token;
  let userDetails = JSON.parse(localStorage.getItem('loginDetails'));
  return await new Promise((resolve, reject) => {
    if (userDetails?.token) {
      axiosInstance.defaults.headers.common.Authorization = userDetails.token;
    }
    axiosInstance[method](
      `${getServiceUrl(baseURL)}${apiURL}`,
      body || '',
      tempConfigObj
    )
      .then((data) => resolve(statusHelper(status, data)))
      .catch((error) => {
        try {
          if (error.response) {
            reject(statusHelper(status, error.response));
          } else {
            reject(error);
          }
        } catch (err) {
          reject(err);
        }
      });
  });
};
