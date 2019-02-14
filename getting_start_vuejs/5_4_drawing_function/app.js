var MyButton = {
  props: ['href', 'tag'],
  template: '#my-button'
}

new Vue({
  el: '#app',
  components: {
    MyButton: MyButton
  }
})
