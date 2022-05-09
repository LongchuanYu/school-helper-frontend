var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    initQrCode() {
      $('[data-toggle="tooltip"]').tooltip(); 
    }
  },
  mounted() {
    this.initQrCode();
  }
})
