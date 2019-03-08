<template>
  <div class="game">
    <garage :left="0" :top="400">

    </garage>
  </div>
</template>

<script>
  import Garage from "./Garage";
  import Car from "./Car";
  export default {
    components: {Garage, Car},
    name: "Game"
  }
</script>

<style scoped>
  .game {
    width:640px;
    height:400px;
    border:1px solid red;
  }
</style>
