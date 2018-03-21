<template>

  <div class="container my-3">
    <div class="row">
      <div class="col-sm-3 align-self-start">
        <ul class="list-group" v-for="(title, index) in blog" :key=index>
          <li class="list-group-item">
            <router-link :to="{path: '/'+title.id }">{{ title.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ['blog'],
  name: 'Title',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
