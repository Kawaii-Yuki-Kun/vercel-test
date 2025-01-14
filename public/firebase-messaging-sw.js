/* global self, firebase */
// Give your service worker access to Firebase
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// This config should match your firebase-config
firebase.initializeApp({
  apiKey: "AIzaSyDJVzMVJBESM_mf7pVPBPTI4V3iKWCFgCc",
  authDomain: "notification-service-eurisko.firebaseapp.com",
  projectId: "notification-service-eurisko",
  storageBucket: "notification-service-eurisko.firebasestorage.app",
  messagingSenderId: "282214631900",
  appId: "1:282214631900:web:daea41822b702195cf6719",
});

const messaging = firebase.messaging();

// Optional: If you want to customize how notifications are displayed when
// the app is in the background, you can override setBackgroundMessageHandler.
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon, actions, data, etc.
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
