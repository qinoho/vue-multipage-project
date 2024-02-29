<template>
  <div>
    <button @click="toHome">home</button>
    <button @click="toProfile">profile</button>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toHome = () => {
  router.push('/home')
}
const toProfile = () => {
  router.push('/profile')
}
</script>

<style lang="scss" scoped></style>
