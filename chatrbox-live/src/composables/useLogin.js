// login to site method

import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('HTTP CODE 500: LOGIN COULDN\'T BE COMPLETED');
        }
        error.value = null;
        return res;
    }
    catch(err) {
        console.log(error.value);
        error.value = 'ERROR: USERNAME OR PASSWORD IS INCORRECT!';
    }
};

const useLogin = () => {
    return { error, login };
};

export { useLogin };