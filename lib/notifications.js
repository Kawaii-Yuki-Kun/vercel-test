import { messaging } from "../firebase.config";

export const requestNotificationPermission = async () => {
  if (!messaging) return null;

  try {
    // Request permission to display notifications
    await Notification.requestPermission();
    if (Notification.permission === "granted") {
      // Get the token
      const token = await messaging.getToken({
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY, // VAPID key from "Cloud Messaging" settings
      });
      return token;
    } else {
      console.log("Notification permission not granted");
      return null;
    }
  } catch (error) {
    console.error("Error requesting permission or getting token:", error);
    return null;
  }
};