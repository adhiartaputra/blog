<template>
  <div>
    <navbar></navbar>
    <div class="jumbotron">
      <h1>{{quotes.quote}}</h1>
      <p>{{quotes.author}}</p>
    </div>
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
      <UpdateArticle :edit='edit'></UpdateArticle>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UpdateArticle from '@/components/UpdateArticle'
import Navbar from '@/components/Navbar'

export default {
  name: 'Title',
  components: {
    UpdateArticle,
    Navbar
  },
  beforeCreate () {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login')
    } else {
      this.$router.push('/')
    }
  },
  created () {
    this.getData()
    this.getQuote()
  },
  data () {
    return {
      article: '',
      blog: [],
      url: 'http://localhost:3000/blog',
      edit: {
        title: '',
        content: ''
      },
      title: '',
      content: '',
      quotes: '',
      token: localStorage.getItem('token')
    }
  },
  methods: {
    getNewArticle: function (e) {
      this.title = e.title
      this.content = e.content
      console.log('ini home', e)
    },
    getQuote: function () {
      axios.get('https://quotes.rest/qod', {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(({data}) => {
          this.quotes = data.contents.quotes[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    getData: function () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/blog',
        headers: {
          token: this.token
        }
      })
        .then(({data}) => {
          this.blog = data.articles
          console.log('ga masuk error')
          console.log(data)
          // console.log('masuukkk 2')
        })
        .catch(err => {
          console.log('masuk error')
          console.log(err)
        })
    },
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
    update: function (article) {
      axios.put(this.url, {
        title: article.title,
        content: article.description
      }, {
        headers: {
          token: this.token,
          _id: article._id
        }
      })
        .then(data => {
          console.log(data)
          this.showTask()
        })
    },
    findArticle: function (article) {
      this.edit = article
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
