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
    props: [ "left", "top", "width", "height", "wallUid" ],
    data() {
      return {
        uid: 0
      }
    },
    mounted() {
      this.uid = this.wallUid;
      this.$el.style.left = this.left + "px";
      this.$el.style.top = this.top + "px";
      this.$el.style.width = this.width + "px";
      this.$el.style.height = this.height + "px";
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
