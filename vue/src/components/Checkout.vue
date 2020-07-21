<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <h2>buy those books already...</h2>
    <p>Shipping:</p>
    <form autocomplete="false">
      <div class="autocomplete-fix">
        <input disabled type="password" />
      </div>
      <input
        id="s-name"
        class="textfield-modal"
        v-model="shippingName"
        type="text"
        placeholder="Name"
      />
      <input
        id="s-surname"
        class="textfield-modal"
        v-model="shippingSurname"
        type="text"
        placeholder="Surname"
      />
      <input
        id="s-address"
        class="textfield-modal"
        v-model="shippingAddress"
        type="text"
        placeholder="Address"
      />
      <input
        id="s-zipcode"
        type="text"
        v-model="shippingZipcode"
        placeholder="Zipcode"
        class="textfield-modal"
      />
      <input
        id="s-city"
        type="text"
        v-model="shippingCity"
        placeholder="City"
        class="textfield-modal"
      />
      <input
        id="s-company"
        type="text"
        v-model="shippingCompany"
        placeholder="Company (optional)"
        class="textfield-modal"
      />
      <br />
      <label id="account-usage">I would like the items to be shipped</label>
      <br />
      <input type="radio" id="asap" name="user-type" value="asap" />
      <label for="asap">as soon as possible</label><br />
      <input type="radio" id="single" name="user-type" value="single" />
      <label for="single">in a single package</label><br />
      <br />
      <input
        type="checkbox"
        id="billing-different"
        v-model="separateBilling"
        name="billing-different"
      />
      <label for="billing-different"
        >Billing address is different from shipping</label
      ><br />
    </form>
    <div id="billing-block" v-if="separateBilling">
      <p>Billing:</p>
      <form autocomplete="false">
        <div class="autocomplete-fix">
          <input disabled type="password" />
        </div>
        <input
          id="b-name"
          class="textfield-modal"
          v-model="billingName"
          type="text"
          placeholder="Name"
        />
        <input
          id="b-surname"
          class="textfield-modal"
          v-model="billingSurname"
          type="text"
          placeholder="Surname"
        />
        <input
          id="b-address"
          class="textfield-modal"
          v-model="billingAddress"
          type="text"
          placeholder="Address"
        />
        <input
          id="b-zipcode"
          type="text"
          v-model="billingZipcode"
          placeholder="Zipcode"
          class="textfield-modal"
        />
        <input
          id="b-city"
          type="text"
          v-model="billingCity"
          placeholder="City"
          class="textfield-modal"
        />
        <input
          id="b-company"
          type="text"
          v-model="billingCompany"
          placeholder="Company (optional)"
          class="textfield-modal"
        />
        <br />
      </form>
    </div>
    <p id="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <button class="call-to-action" @click="navigateToRecap()">Buy</button>
  </div>
</template>
<script>
import { uuid } from "uuidv4";
export default {
  data() {
    return {
      shippingName: "",
      shippingSurname: "",
      shippingAddress: "",
      shippingZipcode: "",
      shippingCity: "",
      shippingCompany: "",
      billingName: "",
      billingSurname: "",
      billingAddress: "",
      billingZipcode: "",
      billingCity: "",
      billingCompany: "",
      errorMessage: "",
      separateBilling: false
    };
  },
  methods: {
    navigateToRecap: function() {
      // TODO completely refactor
      if (
        !this.shippingName ||
        !this.shippingSurname ||
        !this.shippingAddress ||
        !this.shippingZipcode ||
        !this.shippingCity ||
        !this.shippingCompany
      ) {
        this.errorMessage = "Please fill in all fields.";
      } else {
        const myStorage = window.localStorage;
        const cartContentJson = myStorage.getItem("cartContent");
        const cartItems = JSON.parse(cartContentJson);
        let ordersJson = myStorage.getItem("orders");
        let orders;
        if (!ordersJson) {
          orders = [];
        } else {
          orders = JSON.parse(ordersJson);
        }

        let ts = Date.now();
        let dateOb = new Date(ts);

        let date = dateOb.getDate();
        let month = dateOb.getMonth() + 1;
        let year = dateOb.getFullYear();

        const newOrder = {
          id: uuid(),
          date: date + "-" + month + "-" + year,
          cartItems
        };
        orders.push(newOrder);
        myStorage.setItem("orders", JSON.stringify(orders));

        localStorage.removeItem("cartContent");
        this.$router.push({ path: `/recap` }).catch(err => {});
      }
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
.partition {
  width: 100%;
  height: 100%;
}
.partition-form {
  padding: 0 20px;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.partition-title {
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
}
.textfield-modal {
  display: block;
  box-sizing: border-box;
  margin-bottom: 4px;
  width: 30%;
  font-size: 12px;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #dddedf;
  padding: 4px 8px;
  font-family: inherit;
  transition: 0.5s all;
}
.autocomplete-fix {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
}
</style>
