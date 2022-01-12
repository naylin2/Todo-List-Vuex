import { createStore } from 'vuex'

export default createStore({
  state: {
    showForm: true,
    todos: ["Do the dishes", "Chore"],
  },

  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload)
    },
    toggle(state) {
      state.showForm = !state.showForm
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1)
    },
  },

  actions: {
    addTodo(context, payload){
      if (payload.length > 0){
        context.commit('addTodo', payload)
      }
    },
    toggle(context){
      context.commit('toggle')
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo')
    },

  },

  modules: {
  }
})
