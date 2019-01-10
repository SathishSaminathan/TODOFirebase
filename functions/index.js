const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello, from Sathish Saminathan!");
// });

const createNotification = (notification, event) => {
  console.log("working");
  return admin
    .database()
    .ref("notification")
    .push()
    .set(notification)
    .then(() => {
      console.log("success");
    });
};

exports.messageAdded = functions.database
  .ref("messages/{messagesId}")
  .onCreate(event => {
    const notification = {
      addedBy: event._data.user.name,
      message: event._data.content
    };

    return createNotification(notification, event);
  });
