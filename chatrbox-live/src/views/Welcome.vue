<template>
    <div class="welcome container">
        <img src="../../public/chatrbox_logo.png">
        <div v-if="showLogin">
            <h2>Log In</h2>
            <LoginFormVue @login="enterChat" />
            <p>No account yet? <span @click="(showLogin = false)">Sign Up Here!</span></p>
        </div>
        <div v-else>
            <h2>Sign Up</h2>
            <SignupFormVue @signup="enterChat" />
            <p>Already have an account? <span @click="(showLogin = true)">Log In Here!</span></p>
        </div>
    </div>
</template>

<script>
import SignupFormVue from '@/components/SignupForm.vue';
import LoginFormVue from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';

export default {
    components: { SignupFormVue, LoginFormVue },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();

        // redirects to chatroom on successful signup/login event reception
        const enterChat = () => {
            router.push({ name: 'chatroom' });
        };

        return { showLogin, enterChat };
    },
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome img {
    width: 35%;
    height: 35%;
    transform: translateY(-10px);
}
/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    margin: 10px auto;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: #41aebd;
}
.welcome button {
    margin: 20px auto;
}
</style>