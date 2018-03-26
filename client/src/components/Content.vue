<template>
  <div class="col-sm-7">
      <div class="card">
        <div class="card-header bg-dark">
          <h5>{{detailBlog.title}}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">{{detailBlog.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['_id', 'blog'],
  data () {
    return {
      detailBlog: null
    }
  },
  methods: {
    // getContent: function () {
    //   this.blog.map((v, c) => {
    //     if (v._id === this._id) {
    //       return 'true'
    //     } else {
    //       return 'false'
    //     }
    //   })
    // }
  },
  watch: {
    immediate: true,
    _id () {
      let self = this
      self.blog.map((v, c) => {
        if (v._id === self._id) {
          self.detailBlog = v
        }
      })
    }
  }
}
</script>

<style>

div.card-body
{
  text-align: justify;
}

.card-header
{
  color: whitesmoke;
}

</style>
