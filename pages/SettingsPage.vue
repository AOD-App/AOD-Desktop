<template>
  <div class="settings-container">
    <h1>Settings</h1>

    <div class="username-container">
      <div class="container">
        <input required="" type="text" name="text" class="input" v-model="userName">
        <label class="label">Port</label>
      </div>
    </div>

    <p>Android and Desktop</p>

    <div class="setting" v-for="(setting, index) in settingsList" :key="index">
      <span>{{ setting.label }}</span>
      <label>
        <div class="toggleSwitch" :class="{ 'active': setting.value }" @click="toggleSetting(setting)">
          <div class="toggle-circle"></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "SettingsPage",
  setup() {
    const settingsList = ref([
      { id: 'allowCommandExecution', label: 'Allow Command Execution', value: false },
      { id: 'forwardNotifications', label: 'Forward Notifications', value: false }
    ]);
    const userName = ref('');

    const loadSettings = async () => {
      // Load settings logic...
    };

    const saveSettings = async () => {
      // Save settings logic...
    };

    const toggleSetting = (setting) => {
      setting.value = !setting.value;
      saveSettings();
    };

    onMounted(loadSettings);

    return { settingsList, userName, toggleSetting, saveSettings };
  },
};
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 40px;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 10px 0;
}

/* Toggle Switch Styling */
.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align circle to the start */
  position: relative;
  width: 60px;
  height: 30px;
  background-color: rgb(199, 199, 199);
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 1s;
  padding: 3px; /* Add padding to contain the circle */
  box-sizing: border-box; /* Include padding in width/height */
}

.toggleSwitch.active {
  justify-content: flex-end; /* Align circle to the end when active */
  background-color: rgb(153, 197, 151);
}

.toggle-circle {
  height: 24px;
  width: 24px;
  background: conic-gradient(rgb(104, 104, 104), white, rgb(104, 104, 104), white, rgb(104, 104, 104));
  border-radius: 50%;
  transition-duration: 0.3s;
  box-shadow: 2px 1px 3px rgba(255, 255, 255, 0.31);
}

/* New styles for username input */
.username-container {
  margin: 20px 0;
  width: 200px; /*added width*/
}

.container {
  display: flex;
  flex-direction: column;
  gap: 11px;
  position: relative;
  color: white;
}

.container .label {
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 10px;
  transition: 0.3s;
  pointer-events: none;
  background-color: transparent; /*set label background to transparent*/
}

.input {
  width: 100%; /*input width 100% of container*/
  height: 45px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 6px;
  color: black;
  font-size: 15px;
  background-color: white;
  box-shadow: 3px 3px 10px rgb(0, 0, 0), -1px -1px 6px rgba(255, 255, 255, 0.4);
  box-sizing: border-box; /* Include padding in width/height */
}

.input:focus {
  border: 2px solid transparent;
  color: black;
  box-shadow: 3px 3px 10px rgb(0, 0, 0), -1px -1px 6px rgba(255, 255, 255, 0.4),
    inset 3px 3px 10px rgb(0, 0, 0), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container .input:valid ~ .label,
.container .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translateY(-35px);
}

.container .input:valid,
.container .input:focus {
  box-shadow: 3px 3px 10px rgb(0, 0, 0), -1px -1px 6px rgba(255, 255, 255, 0.4),
    inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}
</style>
