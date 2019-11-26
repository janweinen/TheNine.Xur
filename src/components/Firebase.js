import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRVpJJYpLK-rfh_felc9vDNr8u3K_8WI0",
  authDomain: "theix-3b6ee.firebaseapp.com",
  databaseURL: "https://theix-3b6ee.firebaseio.com",
  projectId: "theix-3b6ee",
  storageBucket: "theix-3b6ee.appspot.com",
  messagingSenderId: "739280273977",
  appId: "1:739280273977:web:d0adee2748cd5460"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export const firestoreRequest = async (collection, doc) => {
  const request = await database.collection(collection).doc(doc);
  const snapshot = await request.get();
  return snapshot.data();
};

export const firestoreSave = async (collection, doc, data) => {
  const store = await database.collection(collection).doc(doc);
  store.set({ data });
};
