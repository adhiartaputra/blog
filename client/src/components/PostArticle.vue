<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">WHAT'S IN YOUR HEAD?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Title:</label>
                  <input type="text" class="form-control" id="title" v-model='title' required>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="content" v-model='content' required></textarea>
                </div>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-outline-success" data-dismiss="modal" @click="postBlog">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Post_Article',
  data () {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    postBlog: function () {
      axios.post('http://localhost:3000/blog', {
        title: this.title,
        content: this.content
      })
        .then(data => {
          // console.log(data)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    newArticle: function (obj) {
      console.log(obj)
      this.$emit('postblog', {
        title: this.title,
        content: this.content
      })
    }
  }
}
</script>

<style>

</style>
