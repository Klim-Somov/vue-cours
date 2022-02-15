<template>
  <div class="home">
    <header>
      <div @click="toAbout">
        <b>To About</b>
      </div>
      <div class="title">My personal cost</div>
    </header>
    <main>
      TOTAL - {{ getFullPaymentValue }}
      <br />
      <button @click="onShowModal">showModal</button>
      <hr />
<add-payment-form />
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
// import AddPaymentForm from "../components/AddPaymentForm.vue";

// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from "vuex";



export default {
  name: "Home",
  components: {
    PaymentsDisplay: ()=> import('../components/PaymentsDisplay.vue'),
    Pagination: ()=> import('../components/Pagination.vue'),
    AddPaymentForm: ()=> import('../components/AddPaymentForm.vue'),
    
    
    
  },
  data() {
    return {
      curPage: 1,
      n: 10,
      modalShow: false,
      settings: {
        header: "Add payment Form",
        content: "AddPaymentForm",
      },
    };
  },
  computed: {
    ...mapGetters([
      "getFullPaymentValue"
      ]),

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
    ...mapMutations([
      "setPaymentsListData",
      
    ]),
    ...mapActions(["fetchData"]),
    onShowModal() {
      
      this.$modal.show("AddPaymentForm", {
        header: "Add payment form",
        content: "AddPaymentForm",
      });
    },
    

    addPayment(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
    onChangePage(page) {
      this.curPage = page;
    },
  },
  created() {
    const { page } = this.$route.params;
    if (page) {
      this.curPage = Number(page);
    }
    // this.fetchData();
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
