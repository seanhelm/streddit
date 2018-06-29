<template>
    <div id="comments">
        <li v-for="comment in comments">
            {{ comment.body }}, {{ comment.author }}
        </li>
    </div>
</template>

<script>
export default {
    name: 'ListComments',
    data () {
        return {
            comments: [
                {
                    body: "Henlo lizer",
                    author: "James123"
                },
                {
                    body: "How are you today im fine thank you",
                    author: "23aas43"
                }
            ]
        }
    }
}
</script>
