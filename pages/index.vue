<template>
</template>

<script>
import axios from 'axios'
export default {
    create() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => ("this.info = response"))
  },
}
</script>


<style>

</style>
