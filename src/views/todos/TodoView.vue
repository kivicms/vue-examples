<script setup lang="ts">
import { ref } from 'vue'

interface IToDo {
  checked: boolean
  name: string
}

const todos = ref<IToDo[]>([])
const handleAdd = () => {
  todos.value.push({ checked: false, name: 'Новая задачка' })
}
const handleDelete = (index: number) => {
  if (confirm('Удалить тудушку?')) {
    todos.value.splice(index, 1)
  }
}
</script>

<template>
  <Card>
    <template #title>
      <div class="flex flex-row justify-between">
        <div class="text-3xl">Мои тудушки для Кирюшки</div>
        <Button icon="pi pi-plus" size="small" @click="handleAdd" />
      </div>
    </template>
    <template #content>
      <ul>
        <li v-for="(todo, index) in todos" :key="index" class="my-2">
          <div class="flex flex-row gap-4 justify-between items-center">
            <InputGroup>
              <InputGroupAddon>
                <Checkbox
                  v-model="todo.checked"
                  :binary="true"
                  class="mx-2"
                />
              </InputGroupAddon>
              <InputText
                placeholder="Добавьте описание"
                v-model="todo.name"
              />
            </InputGroup>
            <Button
              icon="pi pi-trash"
              size="small"
              @click="handleDelete(index)"
            />
          </div>
        </li>
      </ul>
    </template>
  </Card>
</template>

<style scoped></style>
