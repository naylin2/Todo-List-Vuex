<template>
  <div class="todos">
    <p>Alt + Click to delete todos.</p>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            <span v-on:click.alt.prevent="deleteTodo(index)">{{ todo }}</span>
        </li>
    </ul>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'Todos',
  computed: {
    todos(){
      return this.$store.state.todos
    }
  },
  methods: {
    ...mapActions([
        'deleteTodo'
    ]),
  },
}
</script>

<style scoped>
.todos{
  text-align: center;
}
p{
  font-size: 14px;
  color: gainsboro;
}
ul{
  width: 20%;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}
span{
  display: inline-block;
  font-weight: bold;
  padding: 10px 50px;
  margin: 15px 0;
  background: bisque;
  text-align: center;
  border-radius: 5px;
  color: #cf837e;
  transition: .25s;
}
span:hover{
  background: #de6e66;
  color: #fff;
  cursor: pointer;
}
</style>
