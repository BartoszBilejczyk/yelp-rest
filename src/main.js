import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/axios.config';

Vue.config.productionTip = false
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_KEY,
    libraries: 'places',
  },
  installComponents: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
