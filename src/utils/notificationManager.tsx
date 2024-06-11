// Util module for Notification Manager
import { toast, ToastOptions } from "react-hot-toast";

/**
 * Shows a success notification.
 * @param {string} message - Message to display in the notification.
 */

export const showSuccessNotification = (message: string) => {
  toast.success(message, {
    style: {
      background: "green",
      color: "white",
    },
  } as ToastOptions);
};

/**
 * Shows an error notification.
 * @param {string} message - Message to display in the notification.
 */

export const showErrorNotification = (message: string) => {
  toast.error(message, {
    style: {
      background: "red",
      color: "white",
    },
  } as ToastOptions);
};
