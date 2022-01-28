<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input type="text" name="operand1" v-model="operand1" />
    <input type="text" name="operand2" v-model="operand2" />
    = {{ result }}
    <br />
    <!-- <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result == ''"></template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else-if="result === 'не делится'"></template>

      <template v-else>Получилось слишком большое число</template>
    </div> -->
    <hr />
    

    <button
      v-for="op in operations"
      :key="op"
      @click="calculate(op)"
      :name="op"
    >
      {{ op }}
    </button>

    <button @click="cell(operand1, operand2)">//</button>
    <hr />
    <label>
      <input v-model="showkeyboard" type="checkbox" />отобразить клавиатуру
    </label>

    <hr />
    <div v-if="showkeyboard">
      <button v-for="btn in 10" :key="btn" @click="addNumbers(btn - 1)">
        {{ btn - 1 }}
      </button>
    </div>
    <label><input type="radio" value="1" v-model="operch" name="operand" /> Операнд 1</label>
    <label><input type="radio" value="2" v-model="operch" name="operand" /> Операнд 2</label>

  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    msg: String,
  },
  data() {
    return {
      showkeyboard: true,
      message: "vue-Калькулятор!",
      operand1: 0,
      operand2: 0,
      operch:'',
      result: 0,
      operations: ["+", "-", "*", "/", "степень"],
    };
  },
  methods: {
       calculate(op) {
      const operand1 = this.operand1;
      const operand2 = this.operand2;
      const calcOperations = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "/": () => operand1 / operand2,
        "*": () => operand1 * operand2,
      };
      this.result = calcOperations[op]();
      },
       addNumbers(i) {
      const {operch} = this
      const input = operch === '1' ? "operand1": "operand2";
      this[input] = +(this[input] += String(i))
    },
  
    },

    // cell(op1, op2) {
    //   this.operand2 === 0
    //     ? (this.error = " не делится")
    //     : (this.result = Math.trunc(op1 / op2));
    // },
    // degre() {
    //   this.operand2 === 0
    //     ? (this.result = 0)
    //     : (this.result = Math.pow(this.operand1, this.operand2));
    // },
    // mult() {
    //   this.result = this.operand1 * this.operand2;
    // },
    // div() {
    //   this.operand2 === 0
    //     ? (this.result = "не делится")
    //     : (this.result = this.operand1 / this.operand2);
    // },
    // plus() {
    //   this.result = this.operand1 + this.operand2;
    // },
    // minus() {
    //   this.result = this.operand1 - this.operand2;
    // },

    // someMethodOnclick(event) {
    //   console.log("click", event);
    // },
    // someMethodKeyup() {
    //   console.log("keyUp");
    // },
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
