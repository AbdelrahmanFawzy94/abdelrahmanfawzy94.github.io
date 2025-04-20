importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-analytics.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyBGalYUR7d3PXiTatEmiwfL9R2nYyfKagg",
  authDomain: "sender-8a053.firebaseapp.com",
  databaseURL: "https://sender-8a053.firebaseio.com",
  projectId: "sender-8a053",
  storageBucket: "sender-8a053.appspot.com",
  messagingSenderId: "754345651373",
  appId: "1:754345651373:web:e35246ef7b605fa113ea24",
  measurementId: "G-ZRL55ZQ7FW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BIc1loTDxmmw3e4gfpdLEMMKuYlFVFGWhN_Nh7Luv1oaWcHIVbP_H6j1Yso1zkjgl3VcCYFXfCO-gsq2oX9lSms");
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('src/firebase-messaging-sw.js')
    .then(function(registration) {
      console.log("Service Worker Registered");
      messaging.useServiceWorker(registration);
    });
}
