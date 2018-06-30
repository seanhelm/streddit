<template>
  <div id="listComments">
    <h3 class="title is-3">Review negative Reddit comments:</h3>

    <article v-for="(comment, index) in comments" class="message">
      <div class="message-header">
        <p>{{ comment.author }}</p>
        
        <button @click="deleteComment(index)" class="delete" aria-label="delete"></button>
      </div>
      
      <div class="message-body">
        {{ comment.body }}
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListComments",
  data() {
    return {
      comments: null
    };
  },
  methods: {
    deleteComment (index) {
      axios
        .delete("http://localhost:3000/comments/" + this.comments[index]._id)
        .then(response => (console.log("Deleted comment.")))

      this.comments.splice(index, 1)
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/comments/")
      .then(response => (this.comments = response.data))
  }
};
</script>
