<template>
    <div class="topbar">
        <a href="/">
          <img src="static/logo-horizontal.png" />
        </a>
        <input type="text" name="fname" />
        <button id="button-search">Search</button>
        <div id="login-message" v-if="loggedIn">
          Welcome back, {{ username }}
        </div>
        <p id="clock">3:43pm 23/06/2002</p>
        <div class="account">
          <button id="login" v-if="!loggedIn" @click="show()">Log in</button>
          <button id="logout" v-else @click="signOut()">Log out</button>
          <button id="signup" @click="signUp()" class="call-to-action">Sign up</button>
        </div>
        <hr />
        <modal name="modal-login">
        <div class="box">
          <div class="box-part" id="bp-left">
            <div class="partition" id="partition-register">
              <div class="partition-title">LOG IN</div>
              <div class="partition-form">
                <form autocomplete="false">
                  <div class="autocomplete-fix">
                    <input disabled type="password" />
                  </div>

                  <input id="n-email" type="text" placeholder="Email" />
                  <input
                    id="n-username"
                    v-model="username"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    id="n-password2"
                    type="password"
                    placeholder="Password"
                  />
                </form>

                <div style="margin-top: 42px"></div>
                <div class="button-set">
                  <button id="goto-signin-btn" @click="signIn">Sign In</button>
                  <button id="register-btn">Register</button>
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

                  <input id="s-name" class="textfield-modal" type="text" placeholder="Name" />
                  <input id="s-surname" class="textfield-modal" type="text" placeholder="Surname" />
                  <input id="s-email" class="textfield-modal" type="text" placeholder="Email" />
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
                  <p>Would you like to receive promotional emails including product news, events and more?</p>
                  <div>
                    <input type="radio" id="radio-yes" name="radio-yes"
                          checked>
                    <label for="radio-yes">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="radio-no" name="radio-no">
                    <label for="radio-no">No</label>
                  </div>
                </form>

                <div style="margin-top: 42px"></div>
                <div class="button-set">
                  <button id="goto-signin-btn" @click="signIn">Sign In</button>
                  <button id="register-btn">Register</button>
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
        username: ""
        };
    },
    methods: {
        show() {
        this.$modal.show("modal-login");
        },
        signIn() {
        this.loggedIn = true;
        this.$modal.hide("modal-login");
        },
        signOut() {
        this.loggedIn = false;
        },
        signUp() {
        this.$modal.show("modal-signup");
        },
        submitSignUp() {
        this.$modal.show("modal-signup");
        }
  },
}
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
  margin-left: 5pt;
}
h3 {
  text-align: center;
  color: #fff;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
img {
  width: 180pt;
  height: 30pt;
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
/* modal */
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
  width: 50%;
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
}
</style>