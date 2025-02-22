<template>
  <header>
    <span class="settings-icon" @click="$router.push('/settings')">⚙️</span>
    <h1>Android On Desktop</h1>
  </header>
  <div class="content">
    <!-- Your main content goes here -->
  </div>
</template>

<style scoped>
header {
  background: #222;
  color: white;
  padding: 20px 0; /* Increase padding for a taller header */
  position: fixed; /* Keep the header fixed at the top */
  top: 0;
  left: 0;
  width: 100vw; /* Ensure full viewport width */
  height: 70px; /* Increase height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: bold;
  z-index: 1000; /* Ensure it's above other elements */
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

/* Prevent content from being overlapped */
.content {
  margin-top: 80px; /* Push content below the fixed header */
}
</style>
