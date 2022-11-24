<template>
    <p>Reaction time: {{score}} ms</p>
    <div class="block continue" v-if="!continueG" @click="continueGame">
        <p>CLICK HERE TO CONTINUE!</p>
    </div>
</template>

<script>
export default {
    props: ['score'],
    emits: ['contGameClick'],
    data() {
        return {
            continueG: false,
        }
    },
    methods: {
        continueGame() {
            this.continueG = true;
            this.$emit('contGameClick');
        },
    },
}
</script>

<style scoped>
    .block.continue {
        background: rgb(127, 197, 255);
    }
    .continue p {
        color: #202b38;
        font-weight: bold;
    }
</style>
