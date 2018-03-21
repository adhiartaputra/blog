<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <ul class="list-group">
          <li class="list-group-item">
            {{detailBlog.content}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      data: [],
      detailBlog: null,
      blogsss: [{
        id: 1,
        title: "Here's your title",
        content: 'DESC',
        comment: 'COMMENT'
      }, {
        id: 2,
        title: "Here's other title",
        content: `OTHER DESC
        AND OTHER AND OTHER AND ENTER
        THIS IS AFTER ENTER`,
        comment: 'OTHER COMMENT'
      }, {
        id: 3,
        title: "Here's other than other title",
        content: 'OTHER OTHER DESC',
        comment: 'OTHER OTHER COMMENT'
      }]
    }
  },
  watch: {
    id () {
      let self = this
      self.blogsss.map((v,c) => {
        if (v.id === +this.id) {
          self.detailBlog = v
        }
      })
    }
  }
}
</script>

<style>

</style>
