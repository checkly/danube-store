<template>
    <div class="account">
        <div class="account-content">
            <h2>Account</h2>
            <div id="user-details">
                <h3>User Details</h3>
                <div>E-Mail address: user@email.com</div>
                <div>
                    Profile picture: <input type="file" ref="file" @change="onSelect()" />
                    <br />
                    <button @click="submit()">Upload</button>
                    <div id="upload-message-succcess" v-if="uploadSuccess">Upload successful.</div>
                    <div id="upload-message-failure" v-if="uploadFailure">Upload failed: unsupported file format.</div>
                </div>
            </div>
            <div id="billing">
                <h3>Billing Information</h3>
                <form autocomplete="false">
                    <div class="autocomplete-fix">
                        <input disabled type="password" />
                    </div>
                    <input
                        id="s-name"
                        v-model="billingName"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        id="s-surname"
                        v-model="billingSurname"
                        type="text"
                        placeholder="Surname"
                    />
                    <input
                        id="s-address"
                        v-model="billingAddress"
                        type="text"
                        placeholder="Address"
                    />
                    <input
                        id="s-zipcode"
                        type="text"
                        v-model="billingZipcode"
                        placeholder="Zipcode"
                    />
                    <input
                        id="s-city"
                        type="text"
                        v-model="billingCity"
                        placeholder="City"
                    />
                    <input
                        id="s-company"
                        type="text"
                        v-model="billingCompany"
                        placeholder="Company (optional)"
                    />
                    <button type="button">Update</button>
                </form>
            </div>
            <div id="orders">
                <h3>Previous Orders</h3>
                <ul>
                    <li>Order C0E11D0A-7378-446A-BE77-2FA07A576CFA - <a href="/static/invoice-20-07-02.pdf" download>Invoice</a></li>
                    <!-- <li v-for="order in orders" v-bind:key="order.date">
                        Order {{order.id}} - <a href="/static/invoice-20-07-02.pdf" download>Invoice</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            billingName: '',
            billingSurname: '',
            billingAddress: '',
            billingZipcode: '',
            billingCity: '',
            billingCompany: '',
            errorMessage: '',
            file: '',
            uploadSuccess: false,
            uploadFailure: false,
            orders: []
        }
    },
    beforeMount() {
        const myStorage = window.localStorage;
        const ordersJson = myStorage.getItem("orders");
        this.orders = JSON.parse(ordersJson);
    },
    methods: {
        onSelect() {
            const file = this.$refs.file.files[0]
            this.file = file
            console.log(this.file.type)
        },
        submit() {
            if (this.file) {
                if (this.file.type === 'image/png' ||
                    this.file.type === 'image/jpg' ||
                    this.file.type === 'image/jpeg') {
                    this.uploadSuccess = true
                } else {
                    this.uploadFailure = true
                }
            }
        }
    }
}
</script>
<style scoped>
.account {
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
form > input {
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
h3 {
    color: black;
    text-align: left;
    margin: 5pt 0;
}
#upload-message-succcess {
    color:green;
    display: inline-block;
}
#upload-message-failure {
    color: red;
    display: inline-block;
}

</style>