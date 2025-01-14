"use client";

import { useEffect, useState } from "react";
import { requestNotificationPermission } from "../lib/notifications";
import { getToken } from "firebase/messaging";
import { messaging } from "@/firebase.config";

export default function Home() {
  const [fcmToken, setFcmToken] = useState("");

  const handleRequestPermission = async () => {
    console.log("hiiiiiiiiiiiiiiiii");
    const token = await requestNotificationPermission();
    if (token) {
      setFcmToken(token);
      console.log("FCM Token:", token);
    }
  };

  useEffect(() => {
    async function requestPermissions() {
      if (messaging) {
        const token = await getToken(messaging, {
          vapidKey:
            "BFpp9y96fdhrElm3etRhyE6of81T4Re38WUz2V0RJ21h0UFXflUjB1lV5dMi8A4Q9Ueb_kXjPCpmahmkPTJfuyw",
        });
        setFcmToken(token);
      } else {
        console.log("Firebase messaging is not supported in this environment.");
      }
    }

    requestPermissions();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleRequestPermission}>Request Notification Permission</button>
      {fcmToken && <p>FCM Token: {fcmToken}</p>}
    </div>
  );
}