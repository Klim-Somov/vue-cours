<template>
  <div class="home">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
     
      <add-payment-form />
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: false,
    };
  },
  
  methods: {
    
    fetchData() {
      return [
        {
          id: "1",
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: "2",
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: "3",
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.fetchData()
    // this.$store.dispatch('fetchData')
    // this.myMuttaion(this.fetchData())
    //this.$store.commit('setPamentsListData', this.fetchData())
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
</style>
