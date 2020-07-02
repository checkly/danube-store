<template>
  <div class="sidebar">
    <div class="category-title-wrapper">
      <h2>Books</h2>
    </div>
    <ul>
      <li>Fiction
        <ul class="sidebar-list">
          <li><a href="">Crime & Thrillers</a></li>
          <li><a href="">Novels & Stories</a></li>
          <li><a href="">Erotic Novels</a></li>
          <li><a href="">Sci-Fi</a></li>
          <li><a href="">Fantasy</a></li>
          <li><a href="">Horror</a></li>
        </ul>
      </li>
      <li>Non-Fiction
        <ul class="sidebar-list">
          <li><a href="">History</a></li>
          <li><a href="">Psychology</a></li>
          <li><a href="">Philosophy</a></li>
          <li><a href="">Cooking</a></li>
          <li><a href="">Economics</a></li>
          <li><a href="">Mathematics</a></li>
          <li><a href="">Business</a></li>
          <li><a href="">Finance</a></li>
        </ul>   
      </li>
    </ul>
    <div class="category-title-wrapper">
      <h2>DVDs</h2>
    </div>
    <ul>
      <li>Fiction
        <ul class="sidebar-list">
          <li><a href="">Crime & Thrillers</a></li>
          <li><a href="">Documentaries</a></li>
          <li><a href="">TV</a></li>
          <li><a href="">Sci-Fi</a></li>
          <li><a href="">Fantasy</a></li>
          <li><a href="">Horror</a></li>
          <li><a href="">Cartoons</a></li>
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
  /* border: 2px solid #e5f0fd; */
  list-style-type: none;
  border-radius: 0 4pt 4pt 4pt;
  padding: 5pt;
  margin-block-start: -1em;
}
li {
  padding: 3pt;
}
a {
  color: #457b9d/*42b983;*/
}
ul.sidebar-list {
  margin-top: 3pt;
}
</style>
