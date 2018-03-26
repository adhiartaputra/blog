<template>
  <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateModalLabel">WHAT'S IN YOUR HEAD?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                  <label for="title" class="col-form-label">Title:</label>
                  <input type="text" class="form-control" id="title" v-model='title' required>
                </div>
                <div class="form-group">
                  <label for="content" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="content" v-model='content' required></textarea>
                </div>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-outline-info" data-dismiss="modal" @click="updateArticle">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Update_Article',
  props: ['article'],
  data () {
    return {
      title: this.article.title,
      content: this.article.content,
      newtitle: '',
      newContent: ''
    }
  },
  methods: {
    updateArticle: function () {
      console.log(this.article._id, 'ID')
      console.log(this.article, 'Article')
      console.log(this.title, 'TITLE')
      console.log(this.content, 'CONTENT')
      axios.put({
        method: 'put',
        url: 'http://localhost:3000/blog',
        headers: this.article._id,
        data: {
          title: this.title,
          content: this.content
        }
      })
        .then()
        .catch()
    }
  }

}
</script>

<style>

</style>
