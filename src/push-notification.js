import firebase from "firebase";

export const initializeFirebase = () => {
  navigator.serviceWorker.register("/my-sw.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("User Token:", token);

    return token;
  } catch (error) {
    console.error("eroorrrr",error);
  }
};
