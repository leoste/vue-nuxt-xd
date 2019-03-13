<template>
  <div class="spawnMenu">
    <spawnButton @updateScore="updateScore" :score="score"
      :carId="1" :cost="30" :speed="8"
      :left="left + 8" :top="0"
      :carSpawnLeft="carSpawnLeft - left"
      :carSpawnBottom="carSpawnBottom - top">
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
        btnCount: 1,
        prices: [
          30, 40, 90, 120
        ],
        speeds: [
          8, 13, 17, 27
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
