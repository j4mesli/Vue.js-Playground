import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue';
import chatroom from '@/views/chatroom.vue';
import { projectAuth } from '@/firebase/config';

// auth/route guard for chatroom
const verifyAuth = (to, from, next) => {
  // not getUser() method, but currentUser property as we don't want to listen to any changes, just get who's logged in
  let user = projectAuth.currentUser;

  // DEBUG
  // console.log('current user in auth guard: ', user);
  if (!user) {
    // if user is null, redirect to home page
    next({ name: 'welcome' });
  }
  else {
    // continue loading the page '/chatroom'
    next();
  }
};

// auth/route guard for welcome
const noAuth = (to, from, next) => {
  // not getUser() method, but currentUser property as we don't want to listen to any changes, just get who's logged in
  let user = projectAuth.currentUser;
  if (user) {
    // if user is already logged in, redirect to chatroom page
    next({ name: 'chatroom' });
  }
  else {
    // continue loading the page '/welcome'
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter: noAuth,
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: chatroom,
    // before routing to the page, execute this function
    beforeEnter: verifyAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
