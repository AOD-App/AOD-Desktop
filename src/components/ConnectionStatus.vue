<template>
    <div :class="['status-box', isConnected ? 'connected' : 'disconnected']">
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
    padding: 10px;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    width: 200px;
    margin: 20px auto;
  }
  
  .connected {
    background-color: green;
  }
  
  .disconnected {
    background-color: red;
  }
  </style>
  