<template>
    <nav v-if="user">
        <div>
            <p>Hiya, <strong>{{ user.displayName }}</strong>!</p>
            <p class="email">User '{{ user.email }}' is currently signed in.</p>
        </div>
        <button title="Log out here!" @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const { error, logout } = useLogout();
        const { user } = getUser();
        const router = useRouter();

        const handleClick = async () => {
            await logout();
            if (!error.value) {
                console.log('user logged out!');
                router.push({ name: 'welcome' });
            } 
        };
        return { error, logout, handleClick, user };
    }
}
</script>

<style>

</style>