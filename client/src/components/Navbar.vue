<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#" style="font-family:futura;font-style:italic;"><strong>BLOG!!</strong></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:whitesmoke!important;">
                    CATEGORY
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul class="dropdown-item pl-1">
                    <a class="dropdown-item" href="#">Something</a>
                  </ul>
                  <!-- <div class="dropdown-divider"></div> -->
                </div>
              </li>
              <li class="nav-item">
                <a  class="btn" data-toggle="modal" data-target="#exampleModal" style="color:whitesmoke!important;">
                  POST BLOG
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  USER</a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Other</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" style="background-color:red;" >Logout</a>
                  </div>
              </li>
            </ul>
          </div>
        </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      category: "here's your category"
    }
  }
}
</script>

<style>

</style>
