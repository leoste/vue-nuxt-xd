<template>
  <div class="game">
    <div class="counter">Money: {{score}}</div>
    <garage :left="0" :bottom="300">

    </garage>
    <spawnMenu
      @updateScore="updateScore" :score="score"
      :left="0" :bottom="400" :carSpawnLeft="100" :carSpawnBottom="300">
    </spawnMenu>
    <wall :right="640" :bottom="300">

    </wall>
  </div>
</template>

<script>
  import Garage from "./Garage";
  import Wall from "./Wall";
  import SpawnMenu from "./spawnMenu"
  export default {
    components: {Garage, Wall, SpawnMenu},
    name: "Game",
    data() {
      return {
        score: 90
      }
    },
    methods: {
      updateScore(e) {
        this.score += e;
      }
    }
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
