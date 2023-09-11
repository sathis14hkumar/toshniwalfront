import NotificationManager from 'react-hot-toast';
// Toast
export const Toast = ({ type = 'success', message, duration = 4000 }) => {
  if (Array.isArray(message)) {
    let item;

    for (item of message) {
      NotificationManager[type](item.message, { duration });
    }
  } else {
    NotificationManager[type](message, { duration });
  }
};
