<template>
    <article class="message">
        <div class="message-header">
            <p>{{ author }}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
</template>

<script>
export default {
    name: 'Comment',
    props: ['author', 'body']
}
</script>
