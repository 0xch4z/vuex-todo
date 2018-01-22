<template>
  <el-menu
    :default-active="null"
    class="nav"
    mode="horizontal"
  >
    <div class="nav-left">
      <h1 class="nav-title">Todo</h1>
    </div>
    <div class="nav-items">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
      <el-menu-item index="3">Contact</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'x-header',
  data () { return {} }
}
</script>

<style>
.nav {
  display: flex;
  align-items: center;
}

.nav-title {
  font-weight: 300;
  margin: 0 25px;
  padding: 0;
}

.nav-items {
  margin-left: auto;
}
</style>
