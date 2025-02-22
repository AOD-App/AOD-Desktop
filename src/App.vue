<template>
  <div class="app-container">
    <TopBar />
    <ConnectionStatus />
    <FeatureCards />
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import ConnectionStatus from "./components/ConnectionStatus.vue";
import FeatureCards from "./components/FeatureCards.vue";
</script>

<style>
body {
  font-family: "Poppins", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}

.app-container {
  text-align: center;
  padding: 20px;
}
</style>
