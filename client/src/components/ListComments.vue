<template>
    <div id="comments">
        <h3 class="title is-3">Review negative Reddit comments</h3>
        <article class="message" v-for="comment in comments">
            <div class="message-header">
               <p>{{ comment.author }}</p>
               <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ comment.body }}
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ListComments',
    data () {
        return {
            comments: null
        }
    },
    mounted () {
        axios.get("http://localhost:3000/comments/")
        .then(response => (this.comments = response.data))
    }
}
</script>
