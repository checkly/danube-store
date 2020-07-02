<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <h2>buy those books already...</h2>
    <p>Address:</p>
    <p>Billing:</p>
    <button class="call-to-action" @click="navigateToRecap()">Buy</button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToRecap: function() {
      this.$router.push({ path: `/recap` }).catch(err => {});
    }
  }
};
</script>
<style scoped>
.checkout {
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
