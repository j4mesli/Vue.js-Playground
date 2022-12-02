// signup to site method

import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('HTTP CODE 500: SIGNUP COULDN\'T BE COMPLETED');
        }
        // update profile after creation to add a username, as firebase doesn't allow for displayName creation
        await res.user.updateProfile({ displayName });
        error.value = null;
        return res;
    }
    catch(err) {
        console.log(error.value);
        error.value = 'ERROR: ' + err.message.replace('Firebase: ','');
    }
};

const useSignup = () => {
    return { error, signup };
};

export default useSignup;