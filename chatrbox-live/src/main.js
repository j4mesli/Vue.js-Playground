import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

// import firebase auth service
import { projectAuth } from './firebase/config';
let app;

// if the page is reloaded/refreshed in any way, it'll check if the user is logged in and mounts App.vue if it exists (logged in already)
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .mount('#app');
    };
});


