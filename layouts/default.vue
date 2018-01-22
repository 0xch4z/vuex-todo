<template>
  <main id="app">
    <x-header id="header" />
    <nuxt id="main" />
    <x-footer id="footer" />
  </main>
</template>

<script>
import { Header, Footer } from '@/components'

export default {
  components: {
    'x-header': Header,
    'x-footer': Footer,
  }
}
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex-grow: 1;
}

#header, #main, #footer {
  width: 100%;
}
</style>
