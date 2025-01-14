// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDJVzMVJBESM_mf7pVPBPTI4V3iKWCFgCc",
  authDomain: "notification-service-eurisko.firebaseapp.com",
  projectId: "notification-service-eurisko",
  storageBucket: "notification-service-eurisko.firebasestorage.app",
  messagingSenderId: "282214631900",
  appId: "1:282214631900:web:daea41822b702195cf6719",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

let messaging;
if (typeof window !== "undefined" && isSupported()) {
  messaging = getMessaging(app);
}

export { messaging };