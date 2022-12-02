<template>
    <div class="logodiv">
        <img src="../../public/chatrbox_logo.png">
    </div>
    <div class="container chatbox">
        <NavbarVue />
        <ChatWindowVue />
        <NewChatFormVue />
    </div>
</template>

<script>
import NavbarVue from '@/components/Navbar.vue';
import NewChatFormVue from '@/components/NewChatForm.vue';
import ChatWindowVue from '@/components/ChatWindow.vue';
import getUser from '@/composables/getUser';
import router from '@/router';
import { watch } from 'vue';

export default {
    components: { NavbarVue, NewChatFormVue, ChatWindowVue },
    setup() {
        const { user } = getUser();
        
        // watches the value 'user' and fires function on change of value
        watch(user, () => {
            if (!user) {
                router.push({ name: 'welcome' });
            }
        });
    },
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    color: #999;
    font-size: 14px;
}
.logodiv {
    text-align: center;
    margin: 0;
}
.logodiv img {
    width: 20%;
    height: 20%;
    padding: 20px 0 0 0;
    min-width: 120px;
    min-height: 80px;
    max-width: 270px;
    max-height: 180px;
}
.container.chatbox {
    margin: 40px auto 80px auto;
}

</style>