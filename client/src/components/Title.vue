<template>
  <div class="container my-3">
    <div class="row header">
      <div class="col-sm-2 align-self-start">
        Action
      </div>
      <div class="col-sm-3">
        Title
      </div>
      <div class="col-sm-7">
        Content
      </div>
    </div>
    <div class="row body">
      <div class="col-sm-5 align-self-start">
        <ul class="list-group list-group-flush" v-for="(article, index) in blog" :key=index>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-5 action">
                <button class="btn btn-outline-danger" @click=deleteArticle(article)><i class="fas fa-eraser fa-1x"></i></button>
                <button class="btn btn-outline-info" data-toggle="modal" data-target="#updateModal" @click=findArticle(article)><i class="fas fa-edit fa-1x"></i></button>
              </div>
              <div class="col-sm-7 title">
                <router-link :to="{path: '/' + article._id }">{{ article.title }}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    <router-view :blog='blog'/>
    </div>
    <UpdateArticle :article='article'></UpdateArticle>
  </div>
</template>

<script>
import axios from 'axios'
import UpdateArticle from '@/components/UpdateArticle'

export default {
  props: ['blog'],
  name: 'Title',
  components: {
    UpdateArticle
  },
  data () {
    return {
      article: ''
    }
  },
  methods: {
    deleteArticle: function (article) {
      axios({
        method: 'delete',
        url: 'http://localhost:3000/blog',
        headers: {
          _id: article._id
        }
      })
        .then(data => {
          this.$router.push('/')
          // console.log(data)
        })
        .catch(data => {
          console.log(data)
        })
    },
    findArticle: function (article) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/blog/find',
        headers: {
          _id: article._id
        }
      })
        .then(({data}) => {
          console.log(data.data)
          this.article = data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
router-link
.header
{
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
}
.body
{
  padding-top: 10px;
}
ul.list-group
{
  text-align: left;
  color:black!important;
}
.action
{
  margin: 0 0;
}
</style>
