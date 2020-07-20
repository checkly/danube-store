<template>
  <div class="sidebar">
    <div class="category-title-wrapper">
      <h2>Books</h2>
    </div>
    <ul>
      <li>Fiction
        <ul class="sidebar-list">
          <li @click="navigateToCategory"><a name="crime">Crime & Thrillers</a></li>
          <li @click="navigateToCategory"><a name="novel">Novels & Stories</a></li>
          <li @click="navigateToCategory"><a name="erotic">Erotic Novels</a></li>
          <li @click="navigateToCategory"><a name="scifi">Sci-Fi</a></li>
          <li @click="navigateToCategory"><a name="fantasy">Fantasy</a></li>
          <li @click="navigateToCategory"><a name="horror">Horror</a></li>
        </ul>
      </li>
      <li>Non-Fiction
        <ul class="sidebar-list">
          <li @click="navigateToCategory"><a name="history">History</a></li>
          <li @click="navigateToCategory"><a name="psychology">Psychology</a></li>
          <li @click="navigateToCategory"><a name="philosophy">Philosophy</a></li>
          <li @click="navigateToCategory"><a name="cooking">Cooking</a></li>
          <li @click="navigateToCategory"><a name="economics">Economics</a></li>
          <li @click="navigateToCategory"><a name="mathematics">Mathematics</a></li>
          <li @click="navigateToCategory"><a name="business">Business</a></li>
          <li @click="navigateToCategory"><a name="finance">Finance</a></li>
        </ul>   
      </li>
    </ul>
    <div class="category-title-wrapper">
      <h2>DVDs</h2>
    </div>
    <ul>
      <li>Fiction
        <ul class="sidebar-list">
          <li>Crime & Thrillers</li>
          <li>Documentaries</li>
          <li>TV</li>
          <li>Sci-Fi</li>
          <li>Fantasy</li>
          <li>Horror</li>
          <li>Cartoons</li>
        </ul>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    navigateToCategory(event) {
      this.$router.push({ path: `/category`, query: { string: event.target.name } }).catch(err => {
        this.$router.push({ path: "/" });
      })
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 180pt;
  border-radius: 4pt;
  border: 2px solid #a8dadc;
  background: #D3EDEE;
  position: fixed;
  font-size: 0.85em;
  padding: 5pt 10pt;
  margin-top: 10pt;
}
h1, h2 {
  font-weight: normal;
  padding: 0 5pt;
  margin-block-start: 0.25em;
  margin-block-end: 0.5em;
}
.category-title-wrapper {
  border-radius: 4pt 4pt 0 0;
  background: #fff;
  overflow:hidden;
  width:60pt;
  padding: 0;
  margin-top: 5pt;
}
ul {
  background: #fff;
  list-style-type: none;
  border-radius: 0 4pt 4pt 4pt;
  padding: 5pt;
  margin-block-start: -1em;
}
li {
  padding: 3pt;
  cursor: pointer;
}
a {
  color: #457b9d
}
ul.sidebar-list {
  margin-top: 3pt;
}
</style>
