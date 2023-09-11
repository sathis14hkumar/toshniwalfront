/**
 * Extract the right error message from react-hook-form error object
 *
 * @param {object} errors Errors object from react-hook-form
 * @param {object} fieldArrayError  { index, fieldName: "date", arrayName: "callLogs", }
 * @param {string} name
 */

export const ToastError = (message) => {
  return ToastError({ type: 'error', message: message || 'Error' });
};