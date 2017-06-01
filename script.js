new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    marvelEncyclodpediaLink: 'http://dev.kevinamiranoff.com'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      return this.title;
    }
  }
});
