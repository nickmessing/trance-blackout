import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
document.body.innerHTML += `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119246242-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119246242-1');
</script>
`;

new Vue({
  render: h => h(App)
}).$mount("#app");
