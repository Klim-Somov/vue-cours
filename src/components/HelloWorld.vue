<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input type="text" v-model.number="operand1" />
    <input type="text" v-model.number="operand2" />
    {{ result }}
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="dev">/</button>
    <button @click="degre(operand1, operand2)">степень</button>
    <button @click="mult(operand1, operand2)">*</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      dis: true,
      message: "vue-Калькулятор!",
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    degre(op1, op2) {
       this.operand2 === 0 ? (this.result = 0) : this.result = Math.pow(op1, op2);
    },

    mult(op1, op2) {
      this.result = op1 * op2;
    },
    dev() {
      this.operand2 === 0
        ? (this.result = "не делится")
        : (this.result = this.operand1 / this.operand2);
    },
    plus() {
      this.result = this.operand1 + this.operand2;
    },
    minus() {
      this.result = this.operand1 - this.operand2;
    },

    someMethodOnclick(event) {
      console.log("click", event);
    },
    someMethodKeyup() {
      console.log("keyUp");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
