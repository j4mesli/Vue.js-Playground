<template>
    <div class="block" v-if="stopWait" @click="stopTimer">
        <p>CLICK HERE!</p>
    </div>
    <div class="block wait" v-if="showBlock">
        <p>WAIT FOR GREEN...</p>
    </div>
</template>

<script>
// receive 'delay' prop
export default {
    props: ['delay', 'last'],
    emits: ['end'],
    data() {
        return {
            showBlock: false,
            stopWait: false,
            startTime: null,
            reaction: null,
        }
    },
    methods: {
        startTimer() {
            this.startTime = Date.now();
        },
        stopTimer() {
            this.reaction = Date.now() - this.startTime;
            // emit 'end' event
            this.$emit('end', this.reaction);
        }
    },
    // mounted hook
    // fire only after 'block' component is mounted to DOM
    mounted() {
        this.showBlock = true; 
        // timeout of this.delay ms
        setTimeout(() => {
            this.showBlock = false; 
            this.stopWait = true;
            this.startTimer();
        }, this.delay);
    },
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        margin: 40px auto;
        padding: 100px 0;
    }
    .block.wait {
        background: #cc3300;
        color: #000000;
    }
</style>
