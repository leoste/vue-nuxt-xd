<template>
    <div class="car" :style="'top:' + (top - 60) + 'px; left:' + left + 'px;'">

    </div>
</template>

<script>
  import Game from "./game";
  export default {
    components: {Game},
    name: "car",
    props: ["Car", "Left", "Top" ],
    data() {
      return {
        left: 0,
        top: 0
      }
    },
    mounted() {
      this.$el.style.backgroundImage = "url(/autoauto/car" + this.Car + ".png)";
      this.left = this.Left;
      this.top = this.Top;

      setInterval(this.timerUpdate, 50);
    },
    methods: {
      timerUpdate()
      {
        this.left += 5;
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
