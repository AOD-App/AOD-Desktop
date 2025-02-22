<template>
  <div class="status-box" :class="isConnected ? 'connected' : 'disconnected'">
    <p>{{ isConnected ? "Connected" : "Disconnected" }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isConnected = ref(false); // Default: Disconnected
</script>

<style scoped>
.status-box {
  text-align: center;
  padding: 12px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  width: 250px;
  margin: 20px auto;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.connected {
  background-color: #28a745;
}

.disconnected {
  background-color: #dc3545;
}

</style>
