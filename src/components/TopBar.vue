<template>
  <header>
    <span class="settings-icon" @click="$router.push('/settings')">⚙️</span>
    <h1>Android On Desktop</h1>
  </header>
</template>

<style scoped>
header {
  background: #222;
  color: white;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px; /* Ensures consistent height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: bold;
  z-index: 1000;
}

.settings-icon {
  position: absolute;
  left: 20px;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.3s ease;
}

.settings-icon:hover {
  transform: rotate(90deg);
}
</style>
