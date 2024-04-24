import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let userRef = firestore.doc(`users/${userAuth.uid}`);

  let snapshot = await userRef.get();
  if (!snapshot.exists) {
    let { displayName, email } = userAuth;
    let createdAt = new Date();
    let data = { displayName, email, createdAt, ...additionalData };

    try {
      await userRef.set(data);
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const convertCollectionSnapshopToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  const collectionMap = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );

  return collectionMap;
};

export const siginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
