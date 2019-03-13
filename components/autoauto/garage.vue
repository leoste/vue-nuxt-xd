<template>
  <div class="garage">

  </div>
</template>

<script>

  import Game from "./game";
  import Car from "./Car";
  export default {
    components: {Game, Car},
    name: "garage",
    props: [ "left", "bottom" ],
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
