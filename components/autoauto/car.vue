<template>
    <div class="car" :style="'top:' + top + 'px; left:' + left + 'px;'">
      <div class="overlay"></div>
    </div>
</template>

<script>
  export default {
    name: "car",
    props: ["carId", "carUid"],
    data() {
      return {
        id: 0,
        uid: 0,
        left: 0,
        top: 0,
        timerHandle: null,
        overlay: null,
      }
    },
    mounted() {
      this.id = this.carId;
      this.uid = this.carUid;

      this.$el.style.backgroundImage = "url(/autoauto/car" + this.id + ".png)";
      this.left = this.$store.state.carSpawnPoint.left;
      this.top = this.$store.state.carSpawnPoint.bottom - 60;

      this.overlay = this.$el.getElementsByClassName("overlay")[0];
      this.timerHandle = setInterval(this.timerUpdate, 50);
    },
    methods: {
      timerUpdate()
      {
        this.left += this.$store.state.carData[this.id].speed;

        for (let i = 0; i < this.$store.state.walls.length; i += 1)
        {
          if (this.left + 120 >= this.$store.state.walls[i].left)
          {
            this.boom();
            break;
          }
        }
      },
      boom()
      {
        clearInterval(this.timerHandle);
        this.overlay.style.backgroundImage = "url(/autoauto/fire.gif)";
        this.timerHandle = setInterval(this.kill, 800);
      },
      kill()
      {
        clearInterval(this.timerHandle);
        this.$store.commit("updateScore", this.$store.state.carData[this.id].value);
        this.$store.commit("deleteCar", this.uid);
      }
    }
  }
</script>

<style scoped>
  .car {
    position:absolute;
    width:120px;
    height:60px;
  }
  .overlay {
    position:relative;
    width: 100%;
    height: 100%;
  }
</style>
