<template>
  <div id="app">
    <AppNav />
    <div class="content">
      <div class="container">
        <AppHeader/>
        <div class="main">
          <Map/>
          <Results/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import Map from '@/components/Map.vue'
  import Results from '@/components/Results.vue'

  export default {
    name: 'App',
    components: {
      AppNav,
      AppHeader,
      Map,
      Results
    },
    mounted() {
      this.$store.dispatch('getInitialResults');
      this.$store.dispatch('getCategories');
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
  }

  .container {
    width: calc(100% - 2 * 60px);
    margin: 0 auto;
    position: relative;
  }

  .content {
    width: calc(100vw - 100px);
    margin-left: 100px;
    height: 100vh;
    background: #CFCFE6;
  }

  .main {
    display: flex;
    position: relative;
  }
</style>
