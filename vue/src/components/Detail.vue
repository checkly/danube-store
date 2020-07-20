<template>
  <div class="detail">
      <div class="detail-wrapper">
        <div class="detail-content">
          <div class="detail-text-content">
            <h2>{{ bookTitle }}</h2>
            <p class="book-rating">{{ bookRating }}</p>
            <p>by {{bookAuthor}}</p>
            <p>Genre: {{ bookGenre }}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Price: ${{ bookPrice }}</p>
            <p>Left in stock: {{ bookStock }}</p>
          </div>
          <div class="detail-image-container">
            <img src="/static/generic-book.jpg" />
            <div class="centered">
              <p class="title">{{bookTitle}}</p>
              <p>{{bookAuthor}}</p>
            </div>
          </div>
        </div>      
        <button class="call-to-action" v-if="book" @click="addToCart()">Add to cart</button>  
      </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      book: '',
      bookTitle: '',
      bookAuthor: '',
      bookGenre: '',
      bookPrice: '',
      bookStock: '',
      bookRating: '',
      bookId: this.$route.params.id
    };
  },
  beforeMount() {
    this.pullDetails();
  },
  methods: {
    pullDetails: function() {
      axios.get(`/api/books/${this.bookId}`, { headers: { "Accept": "application/json" }}).then(response => {
        this.book = response.data
        this.bookTitle = this.book.title
        this.bookAuthor = this.book.author
        this.bookPrice = this.book.price
        this.bookStock = this.book.stock
        this.bookGenre = this.book.genre
        this.bookRating = this.book.rating
      }, error => {
        console.log(error)
      })
    },
    addToCart: function() {
      const myStorage = window.localStorage
      let cartContentJson = myStorage.getItem('cartContent') ? myStorage.getItem('cartContent') : '[]'
      const cartContent = JSON.parse(cartContentJson)
      cartContent.push(this.book)
      cartContentJson = JSON.stringify(cartContent)
      myStorage.setItem('cartContent', cartContentJson)
      this.$router.push({ path: `/cart` }).catch(err => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>
<style scoped>
.detail {
  flex-grow: 1;
  margin-left: 220pt;
}
.detail-wrapper { 
  margin-right: 10pt;
  border-radius: 4pt;
  border: 2px solid #a8dadc;
  background: #D3EDEE;
  padding: 0 10pt;
  margin-top: 10pt;
}
.detail-content {
  margin: 0 10pt;
  display: flex;
}
.detail-text-content {
  margin-right:30pt;
}
img {
  margin-top: 30pt;
  width: 160pt;
  height: 225pt;
}
.detail-image-container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-weight: bold;
}
.call-to-action {
  padding: 10pt;
  margin: 0 0 10pt 10pt;
}
.book-rating {
  text-shadow: 1px 0 0 #888, 0 -1px 0 #888, 0 1px 0 #888, -1px 0 0 #888;
  color:#FFD700;
}
</style>
