import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('delete item', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.addTodo()
    vm._watcher.run()
    expect(vm.index).to.equal(1)
  })
})
