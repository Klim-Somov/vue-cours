<template>
   <div>
       <button @click="onClick">Clicked {{ counter }} times</button>
       </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
    onMouseOver() {
      console.log("Hovered on button");
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("Component root element: ", this.$el);
  },
  mounted() {
    const btn = this.$el.querySelector("button");
    if (!btn) return;
    btn.addEventListener("mouseover", this.onMouseOver);
    console.log("Component root element: ", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    const btn = this.$el.querySelector("button");
    if (!btn) return;
    btn.removeEventListener("mouseover", this.onMouseOver);
  },
  destroyed() {
      
  },
};
</script>

<style>
</style>