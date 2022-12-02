<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Email:" required v-model="email">
        <input type="password" placeholder="Password:" required v-model="password">
        <div class="error">
            {{ error }}
        </div>
        <button>Log in</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useLogin } from '@/composables/useLogin';

export default {
    setup(props, context) {
        // properties
        const email = ref('');
        const password = ref('');
        const { error, login } = useLogin();

        // methods
        const handleSubmit = async () => {
            const res = await login(email.value, password.value);
            if (error.value === null) {
                [password.value, email.value] = ['','',''];
                // event emitter via Composition API
                context.emit('login');
            }
        };

        return { email, password, handleSubmit, error };
    }
}
</script>

<style>

</style>