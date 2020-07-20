<template>
  <div id="app">
    <div id="top-special-offer">
      <h3>
        SPECIAL OFFER: 20% OFF BOOKS WITH <i>WORDS</i> IN THEM!!! LIMITED TIME
        ONLY!
      </h3>
    </div>
    <component-topbar></component-topbar>
    <hr />
    <div id="app-content">
      <div class="main-container">
        <router-view name="componentShop" :key="$route.fullPath"></router-view>
        <router-view name="componentDetail"></router-view>
        <router-view name="componentSidebar"></router-view>
        <router-view name="componentCart"></router-view>
        <router-view name="componentCheckout"></router-view>
        <router-view name="componentRecap"></router-view>
        <router-view name="componentAccount"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Shop from "./components/Shop"
import Sidebar from "./components/Sidebar"
import Detail from "./components/Detail"
import TopBar from "./components/Topbar"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Recap from "./components/Recap"
import Account from "./components/Account"

export default {
  name: "App",
  data: function() {
    return {
    };
  },
  methods: {
  },
  components: {
    "component-sidebar": Sidebar,
    "component-shop": Shop,
    "component-detail": Detail,
    "component-topbar": TopBar,
    "component-cart": Cart,
    "component-checkout": Checkout,
    "component-recap": Recap
  }
};
</script>

<style>
.main-container {
  display: flex;
}
.account-buttons {
  align-self: center;
  margin-left: 20pt;
  align-content: center;
}
#app-content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
}
body {
  margin: 0;
}
#top-special-offer {
  background-color: #1d3557;
  padding: 10pt 0;
  margin-bottom: 7pt;
}
h3 {
  text-align: center;
  color: #fff;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
button {
  border: none;
  background: #1d3557;
  color: #ffffff !important;
  padding: 10pt;
  text-transform: uppercase;
  margin-right: 10pt;
}
.call-to-action {
  background: #e63946;
}
</style>
