<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>
    <p>Your shopping cart is empty. Go buy some books!</p>
  </div>
</template>
<script>
export default {};
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
.category-title-wrapper {
  border-radius: 4pt 4pt 0 0;
  /* border: 2px solid #ebf5ff; */
  background: #fff;
  overflow: hidden;
  width: 60pt;
  /* margin-bottom: -12pt; */
  /* height:20pt; */
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
  color: #457b9d; /*42b983;*/
}
ul.sidebar-list {
  margin-top: 3pt;
}
</style>
