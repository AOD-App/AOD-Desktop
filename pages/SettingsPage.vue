<template>
  <div class="settings-container">
    <h1>Settings</h1>

    <!-- Toggle: Allow Command Execution -->
    <div class="setting">
      <span>Allow Command Execution</span>
      <label>
        <input id="checkboxInput" type="checkbox" v-model="settings.allowCommandExecution" @change="saveSettings">
        <div class="toggleSwitch"></div>
      </label>
    </div>

    <!-- Toggle: Forward Notifications -->
    <div class="setting">
      <span>Forward Notifications</span>
      <label>
        <input id="checkboxInput" type="checkbox" v-model="settings.forwardNotifications" @change="saveSettings">
        <div class="toggleSwitch"></div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "SettingsPage",
  setup() {
    const settings = ref({ allowCommandExecution: false, forwardNotifications: false });

    // Load settings from JSON file
    const loadSettings = async () => {
      try {
        const response = await fetch("/settings.json");
        const data = await response.json();
        settings.value = data;
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };

    // Save settings to JSON file
    const saveSettings = async () => {
      try {
        await fetch("/save-settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(settings.value),
        });
      } catch (error) {
        console.error("Failed to save settings:", error);
      }
    };

    onMounted(loadSettings);

    return { settings, saveSettings };
  },
};
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
  text-align: center;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 10px 0;
}

/* Hide the checkbox */
input[type="checkbox"] {
  display: none;
}

/* Toggle Switch Styling */
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

input:checked + .toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: .3s;
}

/* Switch background change */
input:checked + .toggleSwitch {
  background-color: rgb(153, 197, 151);
  transition-duration: .3s;
}
</style>
