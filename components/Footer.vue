<template>
  <footer>
    <p id="footer-top">made with ❤️</p>
    <p id="footer-bottom">&copy; {{ year }} Charles Kenney</p>
  </footer>
</template>

<script>
export default {
  name: 'x-footer',
  data () {
    return {
      year: (new Date()).getFullYear(),
    }
  }
}
</script>

<style scoped>
* { font-size: 300; }

#footer-top {
  margin-bottom: 5px;
}

#footer-bottom {
  margin-top: 5px;
}
</style>