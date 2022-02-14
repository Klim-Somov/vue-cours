<template>
  <div>
    <h1>About page</h1>
    <button @click="onShowModalAuth">Auth</button>
    <router-link to="/add/payment/Sports?value=200">Sports 200</router-link>
    <br />
    <router-link to="/add/payment/Transport?value=50">Transport 50</router-link>
    <br />
    <router-link to="/add/payment/Entertainment?value=2000"
      >Entertainment 2000</router-link
    >
  </div>
</template>
<script>

export default {
  name: "About",
  data() {
    return {
      modalShow: true,
      settings: {
        header: "Auth Form",
        content: "Auth",
      },
    };
  },
  methods: {
    onShowModalAuth() {
      this.$modal.show("Auth", this.settings )
    },
  },
};
</script>


<style>
</style>










