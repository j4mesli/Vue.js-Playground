<template>
    <!-- prevents default method of reloading form -->
    <form @submit.prevent="handleSubmit">
        <label>Title: </label>
        <input type="text" required v-model="title">
        <label>Details: </label>
        <textarea required v-model="details"></textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            // v-model="" tracks these and puts values here
            title: '',
            details: '',
        }
    },
    methods: {
        handleSubmit() {
            let project = {
                title: this.title,
                details: this.details,
                complete: false,
            };
            // POST request to upload this to the json database
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(project),
            })
                // uses $router property to redirect user to home after blog was created
                .then(res => this.$router.push({ name: 'home' }))
                .catch(err => console.log(err));
        }
    },
}
</script>

<style>
form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}
label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea {
    padding: 10px;
    height: 100px;
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
form button {
    display: block;
    background-color: #1cb985;
    margin: 20px auto 0;
    color: #f2f2f2;
    font-size: 16px;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    opacity: .9;
}
form button:hover {
    transform: translateY(1px);
    background-color: #00ce89;
    color: white;
    opacity: 1;
}
</style>