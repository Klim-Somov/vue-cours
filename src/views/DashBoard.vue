<template>
  <div class="home">
    <header>
      <div @click="toAbout">
        <b>To About</b>
      </div>
      <div class="title">My personal cost</div>
      TOTAL - {{ getFullPaymentValue }}
    </header>
    <main>
      <add-payment-form @addNewPayment="addPayment" />
      <payments-display :items="currentElements" />
      <pagination
        :length="paymentsList.length"
        :cur="curPage"
        :n="n"
        @paginate="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from "vuex";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      curPage: 1,
      n: 9,
    };
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    // getFPV() {
    //   return this.$store.getters.getFullPaymentValue
    // },
    currentElements() {
      return this.paymentsList.slice(
        this.n * (this.curPage - 1),
        this.n * (this.curPage - 1) + this.n
      );
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
  },
  methods: {
    toAbout() {
      this.$router.push({
        name: "About",
      });
    },
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions(["fetchData"]),
    addPayment(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
    onChangePage(page) {
      this.curPage = page;
    },
    // fetchData() {
    //   return [
    //     {
    //       id: "1",
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       id: "2",
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       id: "3",
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
  },
  created() {
    const { page } = this.$route.params;
    if (page) {
      this.curPage = Number(page);
    }
    this.fetchData();
    // this.$store.dispatch('fetchData')
    // this.myMutation(this.fetchData())
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
