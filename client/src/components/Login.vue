<template>
  <div class="login">
    <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <h2>WELOCME TO JUST BLOG IT!!</h2>
              <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group has-danger">
                <label class="sr-only" for="email">E-Mail Address</label>
                <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                  <input type="text" v-model='email' name="email" class="form-control" id="email" placeholder="you@example.com" required autofocus>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="sr-only" for="password">Password</label>
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                <input type="password" v-model='password' name="password" class="form-control" id="password" placeholder="Password" required>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="padding-top: 1rem">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <button type="submit" class="btn btn-success" @click="login"><i class="fa fa-sign-in"></i> Login</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      token: ''
    }
  },
  beforeCreate () {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login')
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    login: function () {
      let url = 'http://localhost:3000/user/signin'
      axios({
        method: 'post',
        url: url,
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({data}) => {
          localStorage.setItem('token', data.token)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
.login
{
  padding-top: 60px;
}
</style>
