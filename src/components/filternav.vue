<template>
    <nav class="filter-nav">
        <!-- only applies class 'active' if the prop 'filter === all' -->
        <button @click="updateFilter('all')" :class="{ active: filter === 'all' }">View All</button>
        <button @click="updateFilter('completed')" :class="{ active: filter === 'completed' }">Completed</button>
        <button @click="updateFilter('ongoing')" :class="{ active: filter === 'ongoing' }">Ongoing</button>
    </nav>
</template>

<script>
export default {
    events: ['filterChange'],
    props: ['filter'],
    data() {
        return {

        }
    },
    methods: {
        updateFilter(str) {
            this.$emit('filterChange', str);
        },
    }
}
</script>

<style>
.filter-nav {
    border-bottom: 1px solid #bbb;
}
.filter-nav button {
    background: none;
    border: none;
    outline: none;
    color: #bbb;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    margin-right: 10px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: .1s ease-out;
}
.filter-nav button:hover {
    border-radius: 13px;
    background: white;
}
.filter-nav button.active {
    color: #555;
}
</style>