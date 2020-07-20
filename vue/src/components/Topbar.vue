<template>
  <div class="topbar">
    <a href="/">
      <img id="logo" src="static/logo-horizontal.svg" />
    </a>
    <input type="text" name="searchbar" v-model="searchQuery" />
    <button id="button-search" @click="navigateToSearch()">Search</button>
    <div id="login-message" v-if="loggedIn">Welcome back, {{ email }}</div>
    <p id="clock">3:43pm 23/06/2002</p>
    <div class="account-buttons">
      <button id="login" v-if="!loggedIn" @click="show()">Log in</button>
      <button id="logout" v-else @click="signOut()">Log out</button>
      <button id="signup" @click="signUp()" class="call-to-action">Sign up</button>
      <button id="cart" class="topbar-icon" @click="navigateToCart()"><i class="fas fa-shopping-cart"></i></button>
      <button id="account" class="topbar-icon" v-if="loggedIn" @click="navigateToAccount()"><i class="fas fa-user"></i></button>
    </div>
    <modal name="modal-login">
      <div class="box">
        <div class="box-part" id="bp-left">
          <div class="partition" id="partition-login">
            <div class="partition-title">LOG IN</div>
            <div class="partition-form">
              <form autocomplete="false">
                <div class="autocomplete-fix">
                  <input disabled type="password" />
                </div>
                <input
                  id="n-email"
                  class="textfield-modal"
                  v-model="email"
                  type="text"
                  placeholder="Email"
                />
                <input
                  id="n-password2"
                  class="textfield-modal"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                />
              </form>
              <div class="error-message" v-if="error">
                {{ error }}
              </div>
              <div style="margin-top: 42px"></div>
              <div class="button-set">
                <button id="goto-signin-btn" @click="signIn">Sign In</button>
              </div>
            </div>
          </div>
        </div>
        <div class="box-part" id="bp-right">
          <div class="box-messages"></div>
        </div>
      </div>
    </modal>
    <modal name="modal-signup" height="auto">
      <div class="box">
        <div class="box-part" id="bp-left">
          <div class="partition" id="partition-register">
            <div class="partition-title">SIGN UP</div>
            <div class="partition-form">
              <form autocomplete="false">
                <div class="autocomplete-fix">
                  <input disabled type="password" />
                </div>
                <input
                  id="s-name"
                  class="textfield-modal"
                  type="text"
                  placeholder="Name"
                />
                <input
                  id="s-surname"
                  class="textfield-modal"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  id="s-email"
                  class="textfield-modal"
                  v-model="email"
                  type="text"
                  placeholder="Email"
                />
                <input
                  id="s-password2"
                  type="password"
                  placeholder="Password"
                  class="textfield-modal"
                />
                <input
                  id="s-company"
                  type="text"
                  placeholder="Company (optional)"
                  class="textfield-modal"
                />
                <br />
                <label id="account-usage">I will be using my account for:</label
                ><br />
                <input
                  type="radio"
                  id="myself"
                  name="user-type"
                  value="myelf"
                />
                <label for="myself">Myself</label><br />
                <input
                  type="radio"
                  id="business"
                  name="user-type"
                  value="business"
                />
                <label for="business">My business</label><br />
                <br />
                <input
                  type="checkbox"
                  id="marketing-agreement"
                  name="marketing-agreement"
                />
                <label for="marketing-agreement"
                  >I would like to receive promotional emails</label
                ><br />
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacy-policy"
                />
                <label for="privacy-policy"
                  >I have read and accept the privacy policy</label
                ><br />
              </form>
              <div class="error-message" v-if="error">
                Please fill in all fields.
              </div>
              <div style="margin-top: 42px"></div>
              <div class="button-set">
                <button id="register-btn" @click="submitSignUp()">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="box-part" id="bp-right">
          <div class="box-messages"></div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      loggedIn: false,
      email: '',
      password: '',
      error: false,
      searchQuery: ''
    };
  },
  methods: {
    show() {
      this.$modal.show("modal-login");
    },
    signIn() {
      this.error = ''

      if (!this.email || !this.password) {
        this.error = 'Please fill in all fields.'
        return
      }
      
      if ((this.email === 'user@email.com') && (this.password === 'supersecure1')) {
        this.loggedIn = true;
        this.$modal.hide("modal-login");
      } else {
        this.error = 'The email and/or password you have provided is incorrect.'
      }
    },
    signOut() {
      this.loggedIn = false;
    },
    signUp() {
      this.$modal.show("modal-signup");
    },
    submitSignUp() {
      if (!this.email) {
        this.error = "error";
        console.log('no email found')
      } else {
        console.log('email found')
        this.loggedIn = true;
        this.$modal.hide("modal-signup");
      }
    },
    navigateToCart() {
      this.$router.push({ path: `/cart` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    },
    navigateToSearch() {
      this.$router.push({ path: `/search`, query: { string: this.searchQuery } }).catch(err => {
        this.$router.push({ path: "/" });
      });
    },
    navigateToAccount() {
      this.$router.push({ path: `/account` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>
<style scoped>
.topbar {
  display: flex;
  height: 30pt;
}
input {
  margin-left: 40pt;
  font-size: 12pt;
  flex-grow: 1;
}
#clock {
  align-self: center;
}
h3 {
  text-align: center;
  color: #fff;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
#logo {
  width: 180pt;
  height: 30pt;
  margin-left: 5pt
}
.call-to-action {
  background: #e63946;
}
modal[name="modal-login"] > .box {
  background: white;
  overflow: hidden;
  width: 656px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 0;
}
modal[name="modal-signup"] > .box {
  background: white;
  overflow: hidden;
  width: 656px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 0;
}
.box-part {
  display: inline-block;
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
  height: 100%;
  width: 80%;
}
.box-messages {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
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
  width: 100%;
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
.button-set {
  margin-left: 40pt;
}
#login-message {
  font-weight: bold;
  align-self: center;
  margin: 0 5pt;
}
label#account-usage {
  margin-left: 40pt;
}
.error-message {
  margin-left: 40pt;
  margin-top: 10pt;
  font-size: 8pt;
  color: red;
}
.account-buttons {
  display: flex;
  align-self:center;
}
.account-buttons > button {
  align-self: center;
}

.topbar-icon {
  font-size: 15pt;
  padding: 7pt 12pt;
}
#button-search {
  right: 5pt;
  position: relative;
}
</style>
