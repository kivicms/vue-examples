<script setup lang="ts">
import { ref } from 'vue'

interface IRoutes {
  url: string,
  name: string
}
// Тут описываем роуты для наших страничек, список ссылок мы показываем ниже в цикле в строке 27-29
const routes = ref<IRoutes[]>([
  {
    url: '/todos',
    name: 'Тудушки для Кирюшки'
  },
  {
    url: '/example',
    name: 'Первый примерчик'
  },
])
</script>

<template>
  <div class="container">

    <div class="flex flex-row justify-center text-3xl">Проект для обучения VueJS</div>
    <div class="flex flex-row justify-center text-sm">Ниже будем писать ссылки на те новые странички которые сделаем</div>
    <div class="flex flex-row gap-4 mb-24">
      <div class="text-primary" v-for="(route, index) in routes" :key="index">
        <RouterLink :to="route.url">{{ route.name }}</RouterLink>
      </div>
    </div>
    <RouterView />
    <ConfirmDialog />
    <Toast />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 1440px;
}
</style>
