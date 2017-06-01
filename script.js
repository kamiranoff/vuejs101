new Vue({
  el: '#exercise',
  data: {
    name: 'Kevin',
    age: 20, // yep, lets say I am 20 again.
    imageLink: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Marvelwolverine.jpg',
    counter: 0,
    x: 0,
    y: 0,
    inputValue: null,
  },
  methods: {
    multiplyAgeBy: function(factor) {
      return this.age * factor;
    },
    generateRandomNum: function(base, top) {
      return Math.floor((Math.random() * top) + base);
    },
    increment: function() {
      this.counter++;
    },
    getMouseCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    displayAlert: function(msg) {
      alert(msg);
    },
    getInputValue: function(event) {
      if (event.keyCode === 13) {
        this.inputValue = event.target.value;
      }
    }
  }
});