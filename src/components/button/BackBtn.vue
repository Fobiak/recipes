<script setup>

import {Back} from "@element-plus/icons-vue";
import router from "@/router";
</script>

<template>
  <template>
    <div
        @click="router.back()"
    >
      <el-icon><Back /></el-icon>
    </div>
  </template>
</template>
