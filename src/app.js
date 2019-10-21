import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name:"Buy shopping"},
        {name: "Clean bathroom"},
        {name: "Car's MOT"}
      ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.todos.push({
          name: this.newToDo
        });
        this.newToDo = "";
      }
    }
  });
});
