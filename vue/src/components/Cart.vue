<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>
    <p v-if="!cartItems">Your shopping cart is empty. Go buy some books!</p>
    <ul>
      <li v-for="item in cartItems" :key="item.title">
        1x, {{ item.title }}, {{ item.author }}, ${{ item.price }}
      </li>
    </ul>
    Total: $<div id="total-price">{{ totalPrice }}</div>

    <input
      type="checkbox"
      id="billing-coupon"
      v-model="billingCoupon"
      name="billing-coupon"
    />

    <label for="billing-coupon">I have a coupon for this order</label><br />

    <div v-if="billingCoupon">
      <input
        id="coupon"
        type="text"
        v-model="coupon"
        placeholder="Coupon"
        class="textfield-modal"
      />

      <button @click="applyCoupon">Apply</button>
      <p v-if="couponAccepted">Coupon applied! 20% discount</p>
      <p v-else>Invalid coupon.</p>

    </div>
    <br />

    <button @click="navigateToCheckout()" class="call-to-action">
      Checkout
    </button>
    <button @click="emptyCart()">Empty Cart</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
      billingCoupon: false,
      coupon: "",
      couponAccepted: false
    };
  },
  methods: {
    navigateToCheckout: function() {
      this.$router.push({ path: `/checkout` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    },
    emptyCart: function() {
      const myStorage = window.localStorage;
      localStorage.removeItem("cartContent");
      this.cartItems = [];
    },
    fetchItems: function() {
      const myStorage = window.localStorage;
      const cartContentJson = myStorage.getItem("cartContent");
      this.cartItems = JSON.parse(cartContentJson);
    },
    sumPrices: function() {
      let total = 0;
      this.cartItems.forEach(element => {
        total += parseFloat(element.price)
      });
      this.totalPrice = total.toFixed(2);
    },
    applyCoupon: function() {
      if (this.coupon === 'COUPON2020') {
        this.couponAccepted = true
        this.totalPrice = this.totalPrice * 0.8
      }
    }
  },
  mounted() {
    this.fetchItems();
    this.sumPrices();
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
#total-price {
  display: inline-block
}
</style>
