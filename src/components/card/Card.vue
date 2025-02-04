<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  cookingMinutes: {
    type: number,
    required: false,
    default: 0,
  }
}>();


</script>

<template>
  <el-card style="max-width: 350px">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <img :src="image" :alt="title" class="w-full h-40 object-cover rounded">
    <template #footer>
      <div class="">
        <span>Время приготовления {{cookingMinutes}} </span>
      </div>
    </template>
  </el-card>
</template>
