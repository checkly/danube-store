<template>
  <div class="detail">
      <div class="detail-wrapper">
        <div class="detail-content">
          <div class="detail-text-content">
            <h2>{{bookName}}</h2>
            <p>by {{bookAuthor}}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Price: {{ bookPrice }}</p>
            <p>Left in stock: {{ bookStock }}</p>
          </div>
          <div class="detail-image-container">
            <img src="/static/generic-book.jpg" />
            <div class="centered">
              <p class="title">{{bookName}}</p>
              <p>{{bookAuthor}}</p>
            </div>
          </div>
        </div>      
        <button class="call-to-action">Add to cart</button>  
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookName: 'placeholder name',
      bookAuthor: 'placeholder name',
      bookPrice: '$14.95',
      bookStock: '3',
      bookId: this.$route.params.id,
      details: ''
    };
  },
  mounted() {
    this.pullDetails();
  },
  methods: {
    pullDetails: function() {
      // pull from server
      this.$http.get(`/api/books/${this.bookId}`).then(response => {
        this.bookName = response.body.title
        this.bookAuthor = response.body.author
      }, error => {
        console.log(error)
      })
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
  border: 2px solid #ebf5ff;
  border-radius: 10pt;
  background: #D3EDEE;
  padding: 0 10pt;
  margin-top: 10pt;
}
.detail-content {
  margin: 0 10pt;
  display: flex;
  /* max-width: 50%; */
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
</style>
