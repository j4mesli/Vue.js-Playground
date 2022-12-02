// logout from site method

import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
    error.value = null;
    try {
        await projectAuth.signOut();
    }
    catch(err) {
        error.value = err.message;
        console.log(err.message);
    }
};

const useLogout = () => {
    return { error, logout };
};

export default useLogout;