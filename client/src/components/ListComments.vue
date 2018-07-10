<template>
  <div id="listComments">
    <h1 class="title">Reddit Sentiment Analysis</h1>
    <h2 class="subtitle">Review negative Reddit comments in real-time</h2>

    <div class="columns is-multiline">
      <div v-for="(comment, index) in comments" class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ comment.author }}
            </p>
          </header>
          <div class="card-content">
            <p>
              {{ comment.body }}
            </p>
            <i>
              {{ new Date(comment.created).toLocaleTimeString() }} - {{ new Date(comment.created).toLocaleDateString() }}
            </i>
          </div>
          <footer class="card-footer">
            <a :href="'http://reddit.com/' + comment.permalink" class="card-footer-item">Permalink</a>
            <a @click="deleteComment(index)" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </div>
  
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
        .then(response => (console.log("Deleted comment.")));

      this.comments.splice(index, 1);
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/comments/")
      .then(response => (this.comments = response.data));
  }
};
</script>
