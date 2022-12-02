<template>
    <div class="tomato"></div>
</template>

<script>
export default {
    props: [change],
    setup(props) {
        if (props.change) {
            document.querySelector("tomato").style.opacity = document.querySelector("tomato").style.opacity + 0.1;
        }
    }
}
</script>

<style>
.tomato {
    opacity: 0.6;
    background-image: url("../assets/tomato.png");
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    margin: 0 auto;
}
</style>