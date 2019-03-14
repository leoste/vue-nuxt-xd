<template>
    <div class="car" :style="'top:' + top + 'px; left:' + left + 'px;'">
      <div class="overlay"></div>
    </div>
</template>

<script>
  import Game from "./game";
  export default {
    components: {Game},
    name: "car",
    props: ["Car", "Left", "Bottom", "uid", "Speed", "OffsetX"],
    data() {
      return {
        left: 0,
        top: 0,
        speed: 0,
        timerHandle: null,
        wall: null,
        overlay: null,
        offsetX: 0
      }
    },
    mounted() {
      this.$el.style.backgroundImage = "url(/autoauto/car" + this.Car + ".png)";
      this.left = this.Left - this.OffsetX;
      this.offsetX = this.OffsetX;
      this.top = this.Bottom - 60;
      this.speed = this.Speed;

      this.overlay = this.$el.getElementsByClassName("overlay")[0];
      this.wall = document.getElementsByClassName("wall")[0];
      this.timerHandle = setInterval(this.timerUpdate, 50);
    },
    methods: {
      timerUpdate()
      {
        this.left += this.speed;

        if (this.left + 120 >= this.wall.offsetLeft - this.offsetX) this.boom();
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
        this.$emit("carDie", this.uid);
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
