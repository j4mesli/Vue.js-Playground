import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

// sets user ref to projectAuth current user property
const user = ref(projectAuth.currentUser);

// method to listen for authentication changes (fires everytime someone signs up / logs in / logs out)
projectAuth.onAuthStateChanged(currUser => {
    // console.log('User state change: Current user is: ', currUser);
    user.value = currUser;
});

const getUser = () => {
    return { user };
};

export default getUser;