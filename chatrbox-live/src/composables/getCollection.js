// composable to get messages from server and updated UI of all users in real time
import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

// intakes collection from function call
const getCollection = (collection) => {
    const error = ref(null);
    const documents = ref(null);
    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

    // on each update to the database, all data and messages to results array
    const screensnap = collectionRef.onSnapshot(
        // first callback function from listener of new snapshots to create messages and push to all users in realtime
        snap => {
            let results = [];
            snap.docs.forEach(doc => {
                // add doc.data().createdAt because we don't want local times and snapshots, we want the ones created on the server
                doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
            });
            documents.value = results;
            error.value = null;
        }, 
        // second callback function from listener to process all, if any, errors
        err => {
            console.log(err.message);
            documents.value = null;
            error.value = 'Error: Couldn\'t fetch any data!';
        }
    );

    // removes possibility of multiple snapshots at once (may be deprecated by Vue3)
    watchEffect(onInvalidate => {
        // unsubscribe from all listeners whenever listener activity is ceased by calling 
        onInvalidate(() => screensnap());
    });

    return { error, documents };
};

export default getCollection;