<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">Click Me</button>
  <br /> -->
  <p>Welcome ...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">Sign up now</a>
        <a href="">More info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>SALE ON ninja.uk</p>
    </Modal>
  </teleport>

  <div v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="">It's a PRANK!</a>
      </template>
      <h1>There is no Giveaway!</h1>
    </Modal>
  </div>

  <button @click.alt="toggleModal">Open modal (alt)</button>
  <br />
  <br />
  <button @click="toggleModalTwo">Open modal Two</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for the Giveaway",
      text: "Grab your ninja swag for half the price!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
