<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Email:" required v-model="email">
        <input type="text" placeholder="Username:" required v-model="displayName">
        <input type="password" placeholder="Password:" required v-model="password">
        <div class="error">
            {{ error }}
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
    setup(props, context) {
        const { error, signup } = useSignup();

        // properties
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        // methods
        const handleSubmit = async () => {
            // await the completion of the signup
            const user = await signup(email.value, password.value, displayName.value);
            if (error.value === null) {
                // clear signup form
                [displayName.value, password.value, email.value] = ['','',''];
                // event emitter via Composition API
                context.emit('signup');
            }
        };

        return { displayName, email, password, handleSubmit, error };
    }
}
</script>

<style>

</style>