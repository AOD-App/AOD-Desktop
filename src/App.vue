<template>
  <div class="app-container">
    <!-- Top Bar Component -->
    <TopBar />

    <!-- Connection Status -->
    <ConnectionStatus />

    <!-- Feature Cards -->
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
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.app-container {
  text-align: center;
}
</style>
