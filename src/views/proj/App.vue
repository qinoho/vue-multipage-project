<template>
  <div>
    <h1 class="divd">test</h1>
    <MyContent />
    <HelloWorld />
  </div>
</template>

<script setup>
import MyContent from './cpns/contnet.vue'
// import HelloWorld from '../../components/HelloWorld.vue.js'
import HelloWorld from '@/components/HelloWorld.vue'
// console.log('123312312312============')
</script>

<style lang="scss" scoped>
.divd {
  transform: rotate(30deg);
  display: block;
}
</style>
