<template>
    <p>Average Reaction Time: {{average}} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['overall'],
    data() {
        return {
            rank: null,
            average: null,
        }
    },
    methods: {
        avg(arr) {
            let output = null;
            for (let i = 0; i < arr.length; i++) {
                output += arr[i];
            }
            return Math.floor(output/arr.length);
        },
    },
    mounted() {
        this.average = this.avg(this.overall);
        if (this.average < 200) {
            this.rank = "Rapid";
        }
        else if (this.average < 273) {
            this.rank = "Above Average";
        }
        else {
            this.rank = "Below Average"
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4em;
    font-weight: bold;
}
</style>