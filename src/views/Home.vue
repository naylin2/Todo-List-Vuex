<template>
  <div class="home">
    <h1>Welcome</h1>
      <form v-if="showForm">
        <input class="message" type="text" v-model="formInput" placeholder="Type here" />
        <input class="button" type="submit" v-on:click.prevent="addTodo(formInput); clear();" value="Add"/>
        <input class="button" type="reset" v-on:click.prevent="clear()" value="Clear"/>
      </form>
      <p v-if="formInput">Click the add button to add " {{ formInput }} " to Todos.</p>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      formInput: '',
    }
  },
  computed: {
    showForm(){
      return this.$store.state.showForm
    }
  },
  methods: {
    ...mapActions([
        'addTodo'
    ]),
    clear(){
      this.formInput = ""
    },
  },
}
</script>

<style scoped>

p{
  padding: 20px;
  font-size: 14px;
  color: gainsboro;
}

.message{
  color: #cf837e;
  padding: 10px;
  background: beige;
  border: none;
  border-radius: 5px;
}
.message:focus{
  outline: none;
}
.button{
  transition: .25s;
  margin-left: 10px;
  color: #fff;
  padding: 10px;
  background: #de6e66;
  border: none;
  border-radius: 5px;
}
.button:hover{
  opacity: .6;
}

</style>
