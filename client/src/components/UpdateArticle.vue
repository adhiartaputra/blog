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
                  <input type="text" class="form-control" id="title" v-model='edit.title' value='edit.title' required>
                </div>
                <div class="form-group">
                  <label for="content" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="content" v-model='edit.content' value='edit.content' required></textarea>
                </div>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-outline-info" data-dismiss="modal" @click="update(edit)">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Update_Article',
  props: ['edit'],
  data () {
    return {
      title: this.article.title,
      content: this.article.content,
      newtitle: '',
      newContent: '',
      url: 'http://localhost:3000/blog'
    }
  },
  methods: {
    update: function (article) {
      console.log(article)
      axios.put('http://localhost:3000/blog', {
        title: article.title,
        content: article.content
      }, {
        headers: {
          token: this.token,
          _id: article._id
        }
      })
        .then(data => {
          console.log(data)
        })
    }
  }

}
</script>

<style>

</style>
