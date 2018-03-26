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
                <label for="title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title" v-model='title' @input='newArticle' required>
              </div>
              <div class="form-group">
                <label for="content" class="col-form-label">Description:</label>
                <textarea class="form-control" id="content" v-model='content' @input='newArticle' required></textarea>
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
import swal from 'sweetalert2'
export default {
  name: 'Post_Article',
  data () {
    return {
      title: null,
      content: null,
      newBlog: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      let self = this
      axios({
        method: 'get',
        url: 'http://localhost:3000/blog'
      })
        .then(({data}) => {
          // console.log(self.newBlog, 'get data before')
          self.newBblog = data.articles
          // console.log(self.newBlog, 'get data After')
        })
        .catch(err => {
          console.log(err)
        })
    },
    postBlog: function () {
      swal({
        title: 'Are you sure?',
        text: 'This article will be read by millions people in the world',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Posted!',
            'Your Article has been posted.',
            'success'
          )
          let self = this
          axios.post('http://localhost:3000/blog', {
            title: this.title,
            content: this.content
          })
            .then(data => {
              // console.log(data)
              self.newBblog.push(data)
              self.getData()
              this.$router.push('/')
            })
            .catch(err => {
              console.log(err)
            })
        }
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
