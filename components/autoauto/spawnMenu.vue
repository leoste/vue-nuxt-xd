<template>
  <div class="spawnMenu">
    <spawnButton v-for="(car, i) in $store.state.carData"
      :carId="i"
      :left="left + 8 + 80 * (i - 1)"
      :top="0">
    </spawnButton>
  </div>
</template>

<script>
  import SpawnButton from "./spawnButton";
  export default {
    components: {SpawnButton},
    name: "spawnMenu",
    props: [ "left", "bottom", "carSpawnLeft", "carSpawnBottom" ],
    data() {
      return {
        top: 0,
      }
    },
    methods: {

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
