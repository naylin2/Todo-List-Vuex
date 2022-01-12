<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to=" {name: 'Todos'} ">Todos</router-link>
  </div>
  <router-view/>
</template>


<script>

import Home from './views/Home.vue'
import Todos from './views/Todos.vue'
export default {
  components: {
    Home,
    Todos,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1920px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  color: gainsboro;
}

#nav a {
  font-size: 22px;
  padding: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  color: gainsboro;
  transition: .2s;
}

#nav a.router-link-exact-active {
  color: #de6e66;
}
</style>
