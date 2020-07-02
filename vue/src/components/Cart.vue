<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>
    <p v-if="!cartItems">Your shopping cart is empty. Go buy some books!</p>
    <ul>
      <li v-for="item in cartItems" :key="item.title">
        1x, {{ item.title }}, {{ item.author }}, ${{ item.price }}
      </li>
    </ul>
    <button @click="navigateToCheckout()" class="call-to-action">Checkout</button>
    <button @click="emptyCart()">Empty Cart</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    navigateToCheckout: function() {
      this.$router.push({ path: `/checkout` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    },
    emptyCart: function() {
      const myStorage = window.localStorage
      localStorage.removeItem('cartContent')
      this.cartItems = []
    }
  },
  mounted() {
    const myStorage = window.localStorage;
    const cartContentJson = myStorage.getItem("cartContent")
    this.cartItems = JSON.parse(cartContentJson);
  }
};
</script>
<style scoped>
.cart {
  width: 97%;
  border-radius: 4pt;
  border: 2px solid #a8dadc;
  background: #d3edee;
  position: fixed;
  font-size: 0.85em;
  padding: 5pt 10pt;
  margin-top: 10pt;
}
h1,
h2 {
  font-weight: normal;
  padding: 0 5pt;
  margin-block-start: 0.25em;
  margin-block-end: 0.5em;
}
ul {
  background: #fff;
  list-style-type: none;
  border-radius: 0 4pt 4pt 4pt;
  padding: 5pt;
  margin-block-start: -1em;
}
li {
  border: 2px solid #e5f0fd;
  padding: 3pt;
}
a {
  color: #457b9d; 
}
</style>
