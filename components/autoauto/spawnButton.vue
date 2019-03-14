<template>
  <div class="spawnButton">
    <button class="clicker" v-on:click="spawnCar()">

    </button>
    <car @carDie="carDie" v-for="car in cars"
      :key="car.uid" :uid="car.uid" :Speed="speed" :Car="carId"
      :Left="car.left" :Bottom="car.bottom" :OffsetX="car.offsetX">
    </car>
    <div class="text price">{{cost}}</div>
    <div class="text value">{{value}}</div>
  </div>
</template>

<script>
  import Car from "./Car";

  export default {
    components: {Car},
    name: "spawnButton",
    props: ["score", "left", "top", "carId", "speed", "cost", "carSpawnLeft", "carSpawnBottom", "value"],
    data() {
      return {
        cars: [],
        uidCount: 0
      }
    },
    methods: {
      spawnCar() {
        if (this.score < this.cost) return;

        this.cars.push({
          left: this.carSpawnLeft,
          bottom: this.carSpawnBottom + 100,
          offsetX: this.left + 8,
          uid: this.uidCount++
        });

        this.$emit("updateScore", -this.cost);
      },
      carDie(uid) {
        console.log(this.cars.length + "; " + uid);

        this.updateScore(this.value);
        this.cars.shift();
        //this.cars.splice(0, 1);
        //this.cars.pop();
      },
      updateScore(e) {
        this.$emit("updateScore", e);
      }
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
