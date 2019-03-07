<template>
  <div class="section">
    <input type="text" v-model="name">
    <input type="text" v-model="surname">
    <p>{{ fullname }}</p>
  </div>
</template>

<script>

  import Card from "../components/card";
  export default {
    components: {Card},
    data() {
      return {
        name: "",
        surname: ""
      }
    },
    methods: {

    },
    computed: {
      fullname(){
        return this.name + " " + this.surname;
      }
    }
  }
</script>
<style>
</style>
