<template>
  <div class="home">
    <header>
      <div class="title">My personal cost</div>
      TOTAL - {{ getFullPaymentValue }}
    </header>
    <main>
      <add-payment-form @addNewPayment="addPayment"/>
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    paymentsList() {
      return this.$store.getters.getPaymentList
    }
  },
  methods: {
    ...mapMutations({
     myMutatation:'setPaymentsListData'
    }),
    ...mapActions([
      'fetchData',
      
    ]
    ),
    addPayment(data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
   
  },
  created() {
      
       //ОБРАЩАЕМСЯ К ACTION
      //  this.$store.dispatch('fetchData')
    this.fetchData()
    // this.myMutatation(this.fetchData())
    // this.$store.commit('setPaymentsListData', this.fetchData())
    // this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>

.title {
  font-size: 57px;
  color: rgb(40, 17, 95);
   font-family: Montserrat;
   font-weight: 500;
}
</style>
