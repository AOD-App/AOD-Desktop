<template>
  <header>
    <span class="settings-icon">⚙️</span>
    <h1>Android On Desktop</h1>
  </header>
</template>

<style scoped>
header {
  background: #222;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
}

.settings-icon {
  position: absolute;
  left: 20px;
  cursor: pointer;
  font-size: 22px;
  transition: transform 0.3s ease;
}

.settings-icon:hover {
  transform: rotate(90deg);
}
</style>
