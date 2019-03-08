<template>
    <div class="car" :style="'top:' + top + 'px; left:' + left + 'px;'">

    </div>
</template>

<script>
  import Game from "./game";
  export default {
    components: {Game},
    name: "car",
    props: ["Car", "Left", "Bottom" ],
    data() {
      return {
        left: 0,
        top: 0,
        timerHandle: null
      }
    },
    mounted() {
      this.$el.style.backgroundImage = "url(/autoauto/car" + this.Car + ".png)";
      this.left = this.Left;
      this.top = this.Bottom - 60;

      this.timerHandle = setInterval(this.timerUpdate, 50);
    },
    methods: {
      timerUpdate()
      {
        this.left += 15;

        let wall = document.getElementsByClassName("wall")[0];

        if (this.left + 120 >= wall.offsetLeft)
        {
          clearInterval(this.timerHandle);
        }
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
</style>
