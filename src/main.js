import Vue from 'vue'
import TodoList from './App.vue'
import store from './store'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(TodoList)
})
