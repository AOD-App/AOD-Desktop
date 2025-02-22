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
  { title: "Screen Mirror", description: "Mirror your phone screen to your PC seamlessly." },
  { title: "Transfer Files", description: "Transfer files quickly between your phone and PC." },
  { title: "Remote Control", description: "Control your PC using your mobile device effortlessly." },
];
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  padding: 10px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
