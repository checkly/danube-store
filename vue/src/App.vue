<template>
  <div id="app">
    <div id="top-special-offer">
      <h3>SPECIAL OFFER: 20% OFF BOOKS WITH <i>WORDS</i> IN THEM!!! LIMITED TIME ONLY!</h3>
    </div>
    <hr />    
    <div class="topbar">
      <a href="/">
        <img src="static/logo-horizontal.png" />
      </a>
      <input type="text" name="fname" />
      <button id="button-search">Search</button>
      <div id="login-message" v-if="loggedIn">Welcome back, {{username}}</div>
      <p id="clock">3:43pm 23/06/2002</p>
      <div class="account">
        <button id="login" @click="show()">Log in</button>
        <button id="signup" class="call-to-action">Sign up</button>
      </div>
    </div>

    <hr />

    <modal name="hello-world">
      <div class="box">
        <div class="box-part" id="bp-left">
          <div class="partition" id="partition-register">
            <div class="partition-title">CREATE ACCOUNT</div>
            <div class="partition-form">
              <form autocomplete="false">

                <div class="autocomplete-fix">
                  <input disabled type="password">
                </div>

                <input id="n-email" type="text" placeholder="Email">
                <input id="n-username" v-model="username" type="text" placeholder="Username">
                <input id="n-password2" type="password" placeholder="Password">
              </form>

              <div style="margin-top: 42px">
              </div>

              <div class="button-set">
                <button id="goto-signin-btn" @click="signIn">Sign In</button>
                <button id="register-btn">Register</button>
              </div>

              <!-- <img id="logo-big" src="/static/logo-big.jpeg" /> -->
              <!-- <button class="large-btn github-btn">connect with <span>github</span></button>
              <button class="large-btn facebook-btn">connect with <span>facebook</span></button> -->
            </div>
          </div>
        </div>
        <div class="box-part" id="bp-right">
          <div class="box-messages">
          </div>
        </div>
    </div>
  </modal>
    <div class="main-container">
      <router-view name="componentShop"></router-view>
      <router-view name="componentDetail"></router-view>
      <router-view name="componentSidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Shop from "./components/Shop";
import Sidebar from "./components/Sidebar";
import Detail from "./components/Detail";

export default {
  name: "App",
  data: function() {
    return {
      loggedIn: false,
      username: ''
    };
  },
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    signIn () {
      this.loggedIn=true;
      this.$modal.hide('hello-world');
    }
  },
  components: {
    "component-sidebar": Sidebar,
    "component-Shop": Shop,
    "component-detail": Detail
  }
};
</script>

<style>
.main-container {
  display: flex;
}
.account {
  align-self: center;
  margin-left: 20pt;
  align-content: center;
}
.topbar {
  display: flex;
  height: 30pt;
}
input {
  margin-left: 40pt;
  font-size:12pt;
  flex-grow: 1;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
}
#top-special-offer{
  background-color: #1d3557;
  padding: 7pt 0;
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
#button-search {
  
}

/* modal */
.box {
background: white;
overflow: hidden;
width: 656px;
height: 400px;
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
#n-email,
#n-username,
#n-password2 {
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
