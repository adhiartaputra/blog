<template>
  <div id="app">
    <navbar :title="title" :content="content" v-on:postblog='getNewArticle'></navbar>
    <!-- <img src="./assets/logo.png"> -->
    <div class="jumbotron">
      <h1>{{quote.quote}}</h1>
      <p>{{quote.author}}</p>
    </div>
    <router-view :blog="blog"/>
  </div>
</template>

<script>
// step 1 import component yang mau di pake
// step 2 register component yang di import
import Navbar from '@/components/Navbar'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created () {
    this.getData()
    this.getQuote()
  },
  data () {
    return {
      blog: [],
      quote: '',
      title: '',
      content: ''
    }
  },
  methods: {
    getNewArticle: function (e) {
      this.title = e.title
      this.content = e.content
      console.log('ini APP vue', e)
    },
    getQuote: function () {
      axios.get('https://quotes.rest/qod', {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(({data}) => {
          this.quote = data.contents.quotes[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    getData: function () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/blog'
      })
        .then(({data}) => {
          this.blog = data.articles
          console.log(data)
          // console.log('masuukkk 2')
        })
        .catch(err => {
          console.log('masuk error')
          console.log(err)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.jumbotron
{
  height: 15rem;
}
</style>
