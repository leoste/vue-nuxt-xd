<template>
  <div class="game">
    <garage>

    </garage>
  </div>
</template>

<script>
  import Garage from "./Garage";
  export default {
    components: {Garage},
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
