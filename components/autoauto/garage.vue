<template>
  <div class="garage" v-on:click="spawnCar(1)">
    <car v-for="car in cars" :Left="car.left" :Bottom="car.bottom" :Car="car.car"></car>
  </div>
</template>

<script>

  import Game from "./game";
  import Car from "./Car";
  export default {
    components: {Game, Car},
    name: "garage",
    props: [ "left", "bottom" ],
    data() {
      return {
        cars: []
      }
    },
    methods: {
      spawnCar(carId)
      {
          this.cars.push({
            left: 80,
            bottom: 100,
            car: carId
          })
      }
    },
    mounted() {
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.bottom - 100 + "px";
    }
  }
</script>

<style scoped>
  .garage {
    position:absolute;
    width:80px;
    height:100px;
    background-image:url("../../static/autoauto/garage.png");
  }
</style>
