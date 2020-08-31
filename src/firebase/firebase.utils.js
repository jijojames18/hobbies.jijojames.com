import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

export const firestore = firebase.firestore();

export const fetchDocumentsFromStore = async (collectionName, from, limit) => {
  const collection = firestore.collection(collectionName);

  const query = collection
    .where(firebase.firestore.FieldPath.documentId(), ">", from)
    .where(firebase.firestore.FieldPath.documentId(), "<=", limit);

  const snapshot = await query.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export default firebase;
