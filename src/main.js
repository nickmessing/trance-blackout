import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
document.body.innerHTML += `<script src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6805429465998678",
    enable_page_level_ads: true
  });
</script>`;

new Vue({
  render: h => h(App)
}).$mount("#app");
