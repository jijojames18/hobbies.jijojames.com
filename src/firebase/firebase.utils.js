import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

export const firestore = firebase.firestore();

export const fetchDocumentsFromStore = async (collectionName, from, limit) => {
  let storeData = {};

  const totalSnapshot = await firestore
    .collection(`total`)
    .doc(collectionName)
    .get();
  const totalData = totalSnapshot.data()["total"];

  if (from === 0) {
    storeData = { total: totalData };
  }

  const startAt = totalData - from;
  const endAt = startAt - limit + 1;

  const collection = firestore.collection(collectionName);
  const query = collection.orderBy("id", "desc").startAt(startAt).endAt(endAt);
  const querySnapshot = await query.get();

  let data = [];
  querySnapshot.forEach(function (doc) {
    data.push(doc.data());
  });

  return {
    ...storeData,
    videos: data,
  };
};

export default firebase;
