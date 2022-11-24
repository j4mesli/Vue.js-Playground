<template>
  <h1>Reaction Timer</h1>
  <button @click="start" v-if="!isPlaying && showButton">Start Game</button>
  <p v-if="isPlaying">{{5 - this.overall.length}} guesses left!</p>
  <block v-if="isPlaying" :last="last" :delay="delay" @end="endGame" />
  <cont v-if="contGame" :score="score" @contGameClick="contGameClick" />
  <results v-if="showResults" :overall="overall" />
</template>

<script>
import block from './components/block.vue'
import cont from './components/cont.vue'
import results from './components/results.vue'

export default {
  name: 'App',
  // define external 'block' component here
  components: { block, results, cont },
  data() {
    return {
      overall: [],
      isPlaying: false,
      showButton: true,
      delay: null, // delay in ms
      last: false,
      score: null,
      contGame: false,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 1500 + Math.floor(Math.random() * 3000);
      this.isPlaying = true;
      this.showResults = false;
      this.showButton = false;
      if (this.overall.length === 5) {
        this.overall = [];
      }
    },
    endGame(time) {
      this.overall.push(time);
      this.score = time;
      this.isPlaying = false;
      this.contGame = true;
      if (this.overall.length >= 5) {
        this.contGame = false;
        this.showResults = true;
        this.showButton = true;
      }
    },
    contGameClick() {
      this.contGame = false;
      this.isPlaying = true;
      this.start();
    },
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }
  button {
    background-color: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
  p {
    color: #d3d3d3;
    font-weight: bold;
  }
</style>
