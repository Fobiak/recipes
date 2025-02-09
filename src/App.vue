<template>
  <div>
    <Header/>
    <router-view/>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import {onMounted, ref} from "vue";
const showFooter = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFooter.value = true;
  }, 8000); // 5 секунд
});
</script>