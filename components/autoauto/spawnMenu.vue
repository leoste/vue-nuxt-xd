<template>
  <div class="spawnMenu">
    <spawnButton v-for="n in btnCount"
      @updateScore="updateScore" :score="score"
      :carId="n" :cost="prices[n - 1]" :speed="speeds[n - 1]" :value="values[n - 1]"
      :left="left + 8 + 80 * (n - 1)" :top="0"
      :carSpawnLeft="carSpawnLeft"
      :carSpawnBottom="carSpawnBottom - bottom">
    </spawnButton>
  </div>
</template>

<script>

  import Game from "./game";
  import SpawnButton from "./spawnButton";
  import Garage from "./Garage";
  export default {
    components: {Game, SpawnButton, Garage},
    name: "spawnMenu",
    props: [ "score", "left", "bottom", "carSpawnLeft", "carSpawnBottom" ],
    data() {
      return {
        top: 0,
        btnCount: 4,
        prices: [
          30, 40, 90, 120
        ],
        speeds: [
          12, 7, 17, 5
        ],
        values: [
          38, 60, 110, 160
        ]
      }
    },
    methods: {
      updateScore(e) {
        this.$emit("updateScore", e);
      }
    },
    mounted() {
      this.$el.style.left = this.left + "px";
      this.top = this.bottom - 100;
      this.$el.style.top = this.top + "px";
    }
  }
</script>

<style scoped>
  .spawnMenu {
    position:absolute;
    width:640px;
    height:100px;
    background-image:url("../../static/autoauto/spawnmenu.png");
  }
</style>
