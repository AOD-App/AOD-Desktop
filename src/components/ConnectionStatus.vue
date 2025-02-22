<template>
  <div class="connection-container">
    <!-- Status Box (Unclickable) -->
    <div class="status-box" :class="isConnected ? 'connected' : 'disconnected'">
      <p>
        <span v-if="isConnected">🟢 Connected</span>
        <span v-else>Disconnected</span>
      </p>
    </div>

    <!-- Toggle Button -->
    <button class="toggle-btn" @click="toggleConnection">
      {{ isConnected ? "Disconnect" : "Connect" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Default: Disconnected
const isConnected = ref(false);

// Function to toggle connection state
const toggleConnection = () => {
  isConnected.value = !isConnected.value;
};
</script>

<style scoped>
.connection-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-box {
  text-align: center;
  padding: 1px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  width: 200px;
  margin: 20px auto;
  transition: background 0.3s ease-in-out;
  user-select: none; /* Prevents text selection */
}

.connected {
  background-color: #28a745;
}

.disconnected {
  background-color: #dc3545;
}

/* Small toggle button */
.toggle-btn {
  margin-top: 2px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.toggle-btn:hover {
  background-color: #0056b3;
}
</style>
