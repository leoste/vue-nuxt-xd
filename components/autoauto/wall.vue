<template>
    <div class="wall">

    </div>
</template>

<script>
  import Game from "./game";
  import Car from "./Car";

  export default {
    components: {Game, Car},
    name: "wall",
    props: [ "right", "bottom" ],
    mounted() {
      this.$el.style.left = this.right - 80 + "px";
      this.$el.style.top = this.bottom - 300 + "px";
    }
  }
</script>

<style scoped>
  .wall {
    position:absolute;
    width:80px;
    height:300px;
    background-image:url("../../static/autoauto/wall.png");
  }
</style>
