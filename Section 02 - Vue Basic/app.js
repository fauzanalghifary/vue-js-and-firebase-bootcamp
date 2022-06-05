const app = Vue.createApp({
  // data, functions
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      showBook: true,
      title: "The Final Empire",
      author: "Brandon",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: true,
        },
      ],
      url: "http://www.thenetninja.co.uk",
    };
  },
  methods: {
    changeTitle(title) {
      //   this.title = "Word of Radiance";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
    handleEvent(e, num) {
      console.log(e.type);
      if (num) {
        console.log(num);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      // console.log(e.target);
      // if (e.target.className) {
      //   e.target.className = "";
      // } else {
      //   e.target.className = "fav";
      // }
      // this.books[0].isFav = !this.books[0].isFav;
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBook() {
      return this.books.filter((el) => el.isFav);
    },
  },
});

app.mount("#app");
