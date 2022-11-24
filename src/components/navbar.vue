<template>
    <nav class="main-nav">
        <router-link :to="{ name: 'home' }">Projects</router-link>
        <router-link :to="{ name: 'addproject' }">Add Project</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav {
    text-align: center;
    margin: 40px auto;
}
.main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}
a.router-link-active {
    border-bottom: 2px solid #00c389;
    padding-bottom: 4px;
}
</style>