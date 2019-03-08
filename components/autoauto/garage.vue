<template>
  <div class="garage" v-on:click="spawnCar(1)">
    <car v-for="car in cars" :left="car.left" :top="car.top" :car="car.car"></car>
  </div>
</template>

<script>
  import Game from "./game";
  import Car from "./Car";
  export default {
    components: {Game, Car},
    name: "garage",
    props: [ "left", "top" ],
    data() {
      return {
        cars: []
      }
    },
    methods: {
      spawnCar(carId)
      {
          this.cars.push({
            left: 1,
            top: 1,
            car: carId
          })
      }
    },
    mounted() {
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.top + "px";
    }
  }
</script>

<style scoped>
  .garage {
    position:relative;
    width:80px;
    height:100px;
    background-image:url("../../static/autoauto/garage.png");
  }
</style>
