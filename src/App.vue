<template>
  <v-app>
    <v-main>
      <v-toolbar color="black">
        <v-toolbar-title class="headline text-uppercase">
          <span>ASSEMBLY65</span>
          <span class="font-weight-light">SIDIFY</span>
        </v-toolbar-title>
      </v-toolbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
