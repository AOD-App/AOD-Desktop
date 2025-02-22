\<template>
  <div id="app">
    <TopBar />
    <router-view />  <!-- This will render HomePage OR SettingsPage -->
  </div>
</template>

<script setup>
import TopBar from "@/components/TopBar.vue";
</script>

<style>
body {
  font-family: "Poppins", Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f4f4f4;
}
</style>
