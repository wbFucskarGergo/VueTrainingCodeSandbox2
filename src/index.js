console.log(Vue);
const app = new Vue({
  el: "#app",
  data: function() {
    return {
      name: "gergo"
    };
  },
  methods: {
    onClick: function() {
      this.name = "gyuszi";
    }
  },
  template: `
<div class="jani" @click="onClick()" >Hello {{name}}</div>
`
});
