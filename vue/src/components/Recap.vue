<template>
    <div class="recap">
        <p id="order-confirmation">All good, order is on the way. Thank you!!</p>
        <p id="recap-content">
            <ul>
                <li v-for="item in cartItems" :key="item.title">
                    1x, {{ item.title }}, {{ item.author }}
                </li>
            </ul>
        </p>
        <button @click="navigateToHome()">Shop more</button>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            cartItems: []
        }
    },
    methods: {
    navigateToCheckout: function() {
      this.$router.push({ path: `/checkout` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    },
    navigateToHome: function() {
      this.$router.push({ path: `/` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    }
  },
  mounted() {
    const myStorage = window.localStorage;
    const cartContentJson = myStorage.getItem("cartContent")
    this.cartItems = JSON.parse(cartContentJson);
  } 
}
</script>
<style scoped>
.recap {
  width: 97%;
  border-radius: 4pt;
  border: 2px solid #a8dadc;
  background: #d3edee;
  position: fixed;
  font-size: 0.85em;
  padding: 5pt 10pt;
  margin-top: 10pt;
}
</style>