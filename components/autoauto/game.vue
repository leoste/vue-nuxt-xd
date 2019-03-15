<template>
  <div class="game">
    <div class="counter">
      Money: {{this.$store.state.score}}
    </div>

    <garage
      :left="0" :bottom="300">
    </garage>

    <spawnMenu
      :left="0" :bottom="400" :carSpawnLeft="100" :carSpawnBottom="300">
    </spawnMenu>

    <wall
      :right="640" :bottom="300">
    </wall>

    <car
      v-for="car in $store.state.cars"
      :key="car.uid" :carUid="car.uid" :carId="car.id">
    </car>
  </div>
</template>

<script>
  import Garage from "./Garage";
  import Wall from "./Wall";
  import SpawnMenu from "./spawnMenu"
  import Car from "./Car";
  export default {
    components: {Garage, Wall, SpawnMenu, Car},
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
  .counter {
    position:absolute;
    left: 0;
    top: 0;
  }
</style>
