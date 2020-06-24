<template>
  <div class="shop">
    <div class="special-offer">

    </div>
    <div class="shop-content">
      <h2>Top sellers</h2>
      <ul>
        <li
          class="preview"
          v-for="item in items"
          v-bind:key="item.TITLE"
          v-on:click="navigateToMessage(item.id)"
        >
          <div class="preview-title">{{ item.title }}</div>
          <div class="preview-author">by {{ item.author }}</div>
          <p>★★★★☆</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      items: [
        { id: 1, title: "This book", author: "this author" },
        { id: 2, title: "That book", author: "that author" }
      ],
      id: "books"
    };
  },
  mounted() {
    this.pullItems();
  },
  methods: {
    pullItems: function() {
      // pull from server
      this.$http.get('/api/books').then(response => {
        this.items = response.body
      }, error => {
        console.log(error)
      })
    },
    navigateToMessage: function(id) {
      this.$router.push({ path: `/books/${id}` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<style scoped>
.shop-content {
  margin-right: 10pt;
  border: 2px solid #a8dadc;
  border-radius: 4pt;
  background: #D3EDEE; /*ebf9ff;*/
  padding: 0 10pt;
  margin-top: 10pt;
}
.preview-title {
  font-weight: bold;
  margin: auto;
  text-align: center;
  overflow-wrap: break-word;
}
.preview-author {
  text-align: center;
}
.preview {
  border: 1px solid #fff;
  background: #fff;
  padding: 4px;
}
li {
  display: inline-block;
  width: 200px;
  height: 110px;
  overflow: hidden;
  margin: 5px;
}
h3 {
  text-align: center;

}
.shop {
  flex-grow: 1;
  margin-left: 220pt;
}
p {
    text-align: center;
}
</style>
