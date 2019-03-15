<template>
  <div class="spawnButton">
    <button class="clicker" v-on:click="spawnCar()">

    </button>
    <div class="text price">{{$store.state.carData[carId].price}}</div>
    <div class="text value">{{$store.state.carData[carId].value}}</div>
  </div>
</template>

<script>
  import Car from "./Car";

  export default {
    components: {Car},
    name: "spawnButton",
    props: ["left", "top", "carId",],
    data() {
      return {
        cars: [],
        uidCount: 0
      }
    },
    methods: {
      spawnCar() {
        if (this.$store.state.score < this.$store.state.carData[this.carId].price) return;

        this.$store.commit("spawnCar", this.carId);

        this.$store.commit("updateScore", -this.$store.state.carData[this.carId].price);
      },
      carDie() {
        this.$store.commit("updateScore", this.$store.state.carData[this.carId].value);
        this.cars.shift();
      },
    },
    mounted() {
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.top + "px";
      this.$el.style.backgroundImage = "url(/autoauto/icon" + this.carId + ".png)";
    }
  }
</script>

<style scoped>
  .spawnButton {
    position: absolute;
    width: 64px;
    height: 100px;
  }
  .clicker {
    position: absolute;
    left:0px;
    top:28px;
    width:64px;
    height:64px;
  }
  .text {
    position:relative;
    left:35px;
    color: whitesmoke;
    font-size:10px;
    line-height:1.2em;
    font-weight: bold;
  }
</style>
