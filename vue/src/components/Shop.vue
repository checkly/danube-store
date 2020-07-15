<template>
  <div class="shop">
    <div class="special-offer"></div>
    <div class="shop-content">
      <h2>Top sellers</h2>
      <ul>
        <li
          class="preview"
          v-for="item in books"
          v-bind:key="item.TITLE"
          v-on:click="navigateToMessage(item.id)"
        >
          <div class="preview-title">{{ item.title }}</div>
          <div class="preview-author">{{ item.author }}</div>
          <div class="preview-details">
            <p>{{ item.rating }}</p>
            <p>${{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      books: [],
      id: "books",
      searchQuery: this.$route.query.string
    };
  },
  beforeMount() {
    if (this.$route.query.string) {
      this.pullSearchedBooks()
    } else {
      this.pullAllBooks()
    }
  },
  methods: {
    pullAllBooks: function() {
      this.$http.get('http://localhost:5000/api/books').then(
        response => {
          this.books = response.body;
        },
        error => {
          console.log(error);
        }
      );
    },
    pullSearchedBooks: function() {
      this.books = []
      console.log('called')
      const searchString = this.$route.query.string
        this.$http.get('/api/books').then(
        response => {
          response.body.forEach(element => {
            if (element.title.toUpperCase().includes(searchString.toUpperCase())
            || element.author.toUpperCase().includes(searchString.toUpperCase())) {
                this.books.push(element)
            }  
          });
        },
        error => {
          console.log(error);
        }
      );
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
  background: #d3edee;
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
  font-size: 10pt;
  text-align: center;
}
.preview {
  border-radius: 4pt;
  border: 1px solid #fff;
  background: #fff;
  padding: 4px;
}
li {
  display: inline-block;
  width: 200px;
  height: 120px;
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
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
</style>
