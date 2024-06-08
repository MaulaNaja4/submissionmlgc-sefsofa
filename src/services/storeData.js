const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore();

  const predictionsCollection = db.collection('predictions');
  const docData = {
    id: id,
    result: data.result,
    suggestion: data.suggestion,
    createdAt: Firestore.Timestamp.now()
  };

  return predictionsCollection.doc(id).set(docData);
}

module.exports = storeData;
