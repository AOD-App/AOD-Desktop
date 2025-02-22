<!-- src/pages/SettingsPage.vue -->
<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <p class="custom-text">Customize your preferences here.</p>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
};
</script>

<style scoped>

.settings-container {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start; /* Spreads content evenly */
  min-height: 100vh; /* Ensures full-screen coverage */
  padding-top: 8%;
  --s: 7px; /* control the size */

  --c: #0000, #282828 0.5deg 119.5deg, #0000 120deg;
  --g1: conic-gradient(from 60deg at 56.25% calc(425% / 6), var(--c));
  --g2: conic-gradient(from 180deg at 43.75% calc(425% / 6), var(--c));
  --g3: conic-gradient(from -60deg at 50% calc(175% / 12), var(--c));
  background: var(--g1), var(--g1) var(--s) calc(1.73 * var(--s)), var(--g2),
    var(--g2) var(--s) calc(1.73 * var(--s)), var(--g3) var(--s) 0,
    var(--g3) 0 calc(1.73 * var(--s)) #1e1e1e;
  background-size: calc(2 * var(--s)) calc(3.46 * var(--s));
}

.custom-text {
  color:rgb(255, 255, 255); /* Change to any color */
  font-weight: bold; /* Optional */
  font-size: 18px;
}
h1 {
  color:rgb(255, 255, 255); /* Change to your preferred color */
  font-size: 24px; /* Adjust the font size if needed */
  font-weight: bold; /* Optional */
}
</style>
