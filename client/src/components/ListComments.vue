<template>
    <div id="comments">
        <h3 class="title is-3">Review negative Reddit comments</h3>
        <Comment v-for="comment in comments" 
            :key="comment._id"
            :body="comment.body"
            :author="comment.author" />
    </div>
</template>

<script>
import axios from 'axios'
import Comment from './Comment'

export default {
    name: 'ListComments',
    data () {
        return {
            comments: null
        }
    },
    components: {
        Comment
    },
    mounted () {
        axios.get("http://localhost:3000/comments/")
        .then(response => (this.comments = response.data))
    }
}
</script>
