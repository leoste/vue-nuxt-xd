<template>
  <div class="spawnButton" v-on:click="spawnCar()">
    <car @carDie="carDie"
         v-for="car in cars" :key="car.uid" :uid="car.uid" :Speed="speed" :Left="car.left" :Bottom="car.bottom" :Car="carId">
    </car>
  </div>
</template>

<script>
  import Car from "./Car";

  export default {
    components: {Car},
    name: "spawnButton",
    props: ["score", "left", "top", "carId", "speed", "cost", "carSpawnLeft", "carSpawnBottom"],
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
          left: this.carSpawnLeft - this.left,
          bottom: this.carSpawnBottom - this.top,
          uid: this.uidCount++
        });

        this.$emit("updateScore", -this.cost);
      },
      carDie(uid) {
        console.log(this.cars.length + "; " + uid);

        this.updateScore(Math.ceil(this.cost * 1.3));
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
      this.$el.style.backgroundImage = "url(/autoauto/spawnbutton" + this.carId + ".png)";
    }
  }
</script>

<style scoped>
  .spawnButton {
    position: absolute;
    width: 64px;
    height: 100px;
  }
</style>
