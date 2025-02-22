<template>
  <div class="cards-container">
    <div v-for="feature in features" :key="feature.title" class="card">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup>
const features = [
  { title: "Screen Mirror", description: "Mirror your phone screen to your PC" },
  { title: "Transfer Files", description: "Quickly transfer files between devices" },
  { title: "Remote Control", description: "Control your PC using your phone" },
];
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.card:hover {
  background: #f1f1f1;
}
</style>
