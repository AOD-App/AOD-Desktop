<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <p class="custom-text">Customize your preferences here.</p>

    <div class="switch-button">
      <!-- From Uiverse.io by vinodjangid07 -->
      <input id="checkboxInput" type="checkbox" v-model="isChecked" />
      <label class="toggleSwitch" for="checkboxInput"></label>
    </div>

  </div>
</template>

<script>
export default {
  name: "SettingsPage",
  data() {
    return {
      isChecked: false, // Initial state of toggle switch
    };
  },
};
</script>

<style scoped>
.settings-container {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 8%;
  --s: 7px;

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
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 18px;
}

h1 {
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: bold;
}

/* From Uiverse.io by vinodjangid07 */
/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 40px;
  background-color: rgb(199, 199, 199);
  border-radius: 20px;
  cursor: pointer;
  transition-duration: .3s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 40px;
  left: 0px;
  background: conic-gradient(rgb(104, 104, 104), white, rgb(104, 104, 104), white, rgb(104, 104, 104));
  border-radius: 50%;
  transition-duration: .3s;
  box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.308);
}

#checkboxInput:checked + .toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: .3s;
}

/* Switch background change */
#checkboxInput:checked + .toggleSwitch {
  background-color: rgb(153, 197, 151);
  transition-duration: .3s;
}
</style>
