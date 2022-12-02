// composable to send message to server
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

// this intakes a collection into this function to identify which database to store the messages to
const useCollection = (collection) => {
    const error = ref(null);

    const addDoc = async (message) => {
        error.value = null;
        
        try {
            const res = await projectFirestore.collection(collection).add(message);
        }
        catch(err) {
            console.log(err.message);
            error.value = err.message;
        }
    };

    return { error, addDoc };
};

export default useCollection;