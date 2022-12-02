<template>
  <h1>The Pomodoro Method</h1>
  <About />
  <Tomato :change="change" v-if="start"/>
  <Buttons />
</template>

<script>
import Tomato from '@/components/Tomato.vue';
import About from '@/components/About.vue';
import Buttons from '@/components/Buttons.vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    Tomato, About, Buttons,
  },
  setup() {
    const start = ref(true);
    const change = ref(false);

    return { start };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
