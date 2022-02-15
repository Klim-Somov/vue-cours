<template>
  <div class="wrapper">
    <button class="toggle-btn" @click="toggleVisible()">Aad cost +</button>
    <div v-if="elVisible" class="form">
      <input type="number" placeholder="Сумма" v-model.number="value" />
      <select v-model="category">
        <option v-for="(option, idx) in options" :key="idx">
          {{ option }}
        </option>
      </select>
      <input type="date" placeholder="Дата" v-model="date" />
      <button class="save-btn" @click="onSaveClick">Save</button>
    </div>
  </div>
</template>
<script>
import { mapGetters} from "vuex"
export default {
  name: "AddPaymentForm",
  data() {
    return {
      elVisible: false,
      id: "",
      value: "",
      category: "",
      date: "",
    };
  },
  props: {
    item: Number
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    options() {
      return this.$store.getters.getCategoryList;
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    toggleVisible() {
      this.elVisible = !this.elVisible;
    },
    onSaveClick() {
      const data = {
        id: Date.now(),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      // this.$emit('addNewPayment', data)
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
  async created() {
    if (!this.options.lenght) {
      await this.$store.dispatch("LoadCategories");
    }
    // this.category = this.options[0]
  },

  mounted() {
    if (this.id) {
      const item = this.getPaymentsList.find(p => p.id== this.id)
      if (item) {
        this.date = item.date 
        this.category = item.category 
        this.value = item.value 
      }
    }

    if (this.$route.params.category) {
      this.category = this.$route.params.category;
    }

    if (this.$route.query.value) {
      this.value = +this.$route.query.value;
    }
    if (this.value && this.category) {
      this.date = this.getCurrentDate
      this.onSaveClick();
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.save-btn {
  border: none;
  color: antiquewhite;
  background-color: rgb(17, 163, 119);
  padding: 8px 22px;
  cursor: pointer;
  border-radius: 3px;
}
.toggle-btn {
  border: none;
  color: antiquewhite;
  background-color: rgb(17, 163, 119);
  padding: 12px 30px;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 40px;
}
div {
  font-family: Montserrat;
}
</style>