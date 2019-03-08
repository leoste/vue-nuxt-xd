<template>
    <div class="car">

    </div>
</template>

<script>
  import Game from "./game";
  export default {
    components: {Game},
    name: "car",
    props: ["car", "left", "top" ],
    mounted() {
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.top + "px";
      this.$el.style.backgroundImage = "url(/autoauto/car" + this.car + ".png)";
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
