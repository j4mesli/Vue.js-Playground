<template>
    <div class="chat-window">
        <div class="error" v-if="error">
            {{ error }}
        </div>
        <div class="messages" v-if="documents" ref="messages">
            <!-- bind the id property to each element in formatedDocuments to distinguish each object -->
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt }} ago</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, ref, onUpdated } from 'vue';

export default {
    setup() {
        // pass in the collection of messages' name (messages)
        const { error, documents } = getCollection('messages');

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate()); 
                    // spread old doc object and overwrite the old createdAt property with new 'time'
                    return { ...doc, createdAt: time };
                });
            }
        });

        // automatically scroll window
        const messages = ref(null);
        // utilize onUpdated lifecycle hook to automatically scroll for each new message 
        onUpdated(() => {
            if (messages.value.scrollHeight) {
                messages.value.scrollTop = messages.value.scrollHeight;
            }
        });

        return { error, documents, formattedDocuments, messages };
    }
}
</script>

<style>
.chat-window {
    background-color: #fafafa;
    padding: 30px 20px;
}
.single {
    margin: 18px 0;
    transition: 1s ease-in-out;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}
.messages {
    overflow: auto;
    max-height: 400px;
    scroll-behavior: smooth;
}
</style>