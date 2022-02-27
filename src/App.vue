<template>
  <v-app>
    <v-app-bar flat app>
      <v-btn to="/dashboard" plain :reaple="false">Dashboard</v-btn>
      <v-btn to="/about" plain :reaple="false">About</v-btn>
      <v-btn  to="/calc">Calc</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
