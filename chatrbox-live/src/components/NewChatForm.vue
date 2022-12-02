<template>
    <div class="messageField">
        <h4>Type your message and hit 'Enter' to submit!</h4>
        <a @click.prevent="handleSubmit" title="Submit your message!">Send</a>
        <form>
            <!-- @keypress.enter.prevent="handleSubmit" detects enter keypress -->
            <textarea placeholder="Enter your message here..." v-model="message" @keypress.enter.prevent="handleSubmit"></textarea>
            <div class="error" v-if="error">
                {{error}}
            </div>
        </form>
    </div>
</template>

<script>
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import Filter from 'bad-words';

export default {
    setup() {
        const filter = new Filter();
        const { user } = getUser();
        const message = ref('');
        // NEED TO PASS IN COLLECTION NAME TO useCollection COMPOSABLE
        const { error, addDoc } = useCollection('messages');
        const handleSubmit = async () => {
            // verifies that the message isn't all whitespace and that message exists using regex
            if (message.value && message.value.replace(/^\s+|\s+$/g, '') != '') {
                const chat = {
                    message: filter.clean(message.value),
                    name: user.value.displayName,
                    createdAt: timestamp(),
                };
                await addDoc(chat);
                if (!error.value) {
                    message.value = '';
                };
            }
        };

        return { message, handleSubmit, error };
    },
}
</script>

<style>
.messageField form {
    margin: 10px;
    border-top: 1px dashed #999;
}
.messageField textarea {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 10px;
    font-family: inherit;
    outline: none;
    border: 0;
    border-radius: 20px;
}
.messageField h4 {
    padding: 12px 10px 5px 12px;
    margin: 0;
    display: inline-block;
    width: 70%;
}
.messageField a {
    text-align: right; 
    float: right; 
    padding: 14px 20px 5px 12px; 
    font-weight: bold; 
    cursor: pointer; 
    width: 10%;
    text-decoration: none; 
    color: #24a0ed;
    transition: 1s ease-in-out;
}
.messageField a:hover {
    text-decoration: underline;
}

</style>