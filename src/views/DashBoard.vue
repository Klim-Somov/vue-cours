<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="title text-h5 text-sm-h3 mb-9 mb-xs-2">
          My personal costs
        </div>

        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on }">
            <v-btn class="mb-6" color="teal" dark v-on="on">
              Add new cost <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <add-payment-form @onAdd="dialog = false" />
          </v-card>
        </v-dialog>
        <payments-display :items="paymentsList" />
        <pagination
          :length="paymentsList.length"
          :cur="curPage"
          :n="n"
          @paginate="onChangePage"
        />
      </v-col>
      <v-col>
      
        <PieChart :items="paymentsList" />
      </v-col>
    </v-row>
  </v-container>

  <!-- <div class="home">
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
  </div> -->
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import { Pie } from 'vue-chartjs'
export default {
  name: "Home",
  extends: Pie,
  components: {
    PaymentsDisplay: () => import("../components/PaymentsDisplay.vue"),
    Pagination: () => import("../components/Pagination.vue"),
    AddPaymentForm: () => import("../components/AddPaymentForm.vue"),
    PieChart: () => import("../components/PieChart.vue"),
  },
  data() {
    return {
   
   
      dialog: false,
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
    ...mapGetters(["getFullPaymentValue", "getCategoryList"]),

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
    ...mapActions(["fetchData", "LoadCategories"]),
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
   mounted() {
    

  },
  created() {
    
    const { page } = this.$route.params;
    if (page) {
      this.curPage = Number(page);
    }
    this.fetchData();
    
    //  this.$store.dispatch('LoadCategories')
    // this.myMutation(this.fetchData())
    // this.$store.commit('setPaymentsListData', this.fetchData())
    // this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: rgb(6, 4, 7);
  font-family: Montserrat;
  font-weight: 700;
}
</style>
