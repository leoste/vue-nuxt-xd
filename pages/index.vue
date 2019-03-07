<template>
  <div class="section">
    <tabs>
      <tab title="Home" :active="true">
        Cool home page
      </tab>
      <tab title="About">
        Cool about page
      </tab>
      <tab title="Contact">
        Cool contact page
      </tab>
      <tab title="Works">
        Cool works page
      </tab>
    </tabs>
  </div>
</template>

<script>

  import Card from "../components/card";
  import Tabs from "../components/tabs";
  import Tab from "../components/tab";
  export default {
    components: {Tab, Tabs, Card},
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
