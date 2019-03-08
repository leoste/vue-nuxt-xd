<template>
  <div class="game">
    <garage :left="0" :bottom="400">

    </garage>
    <wall :right="640" :bottom="400">

    </wall>
  </div>
</template>

<script>
  import Garage from "./Garage";
  import Wall from "./Wall";
  export default {
    components: {Garage, Wall},
    name: "Game"
  }
</script>

<style scoped>
  .game {
    position:relative;
    width:640px;
    height:400px;
    border:1px solid red;
  }
</style>
