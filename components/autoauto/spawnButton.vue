<template>
  <div class="spawnButton" v-on:click="spawnCar(carId)">
    <car v-for="car in cars" :Left="car.left" :Bottom="car.bottom" :Car="car.car"></car>
  </div>
</template>

<script>
  import Car from "./Car";
  export default {
    components: {Car},
    name: "spawnButton",
    props: [ "score", "left", "top", "carId", "cost", "carSpawnLeft", "carSpawnBottom" ],
    data() {
      return {
        cars: [],
      }
    },
    methods: {
      spawnCar(carId)
      {
        if (this.score < this.cost) return;

        this.cars.push({
          left: this.carSpawnLeft - this.left,
          bottom: this.carSpawnBottom - this.top,
          car: carId
        });

        this.$emit("updateScore", -this.cost);
      }
    },
    mounted() {
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.top + "px";
      this.$el.style.backgroundImage = "url(/autoauto/spawnbutton" + this.carId + ".png)";
    }
  }
</script>

<style scoped>
  .spawnButton {
    position:absolute;
    width:64px;
    height:100px;
  }
</style>
