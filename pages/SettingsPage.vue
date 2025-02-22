<template>
  <div class="p-6 max-w-lg mx-auto">
    <div class="flex items-center mb-4">
      <Settings class="cursor-pointer" @click="$router.push('/settings')" />
      <h1 class="text-2xl font-semibold ml-2">Settings</h1>
    </div>
    <Card>
      <CardContent class="p-4 space-y-4">
        <div class="flex justify-between items-center">
          <span>Dark Mode</span>
          <Switch v-model="darkMode" />
        </div>
        <div class="flex justify-between items-center">
          <span>Enable Notifications</span>
          <Switch v-model="notifications" />
        </div>
        <div>
          <span class="block mb-2">Performance Mode</span>
          <Select v-model="performanceMode">
            <SelectItem value="balanced">Balanced</SelectItem>
            <SelectItem value="high-performance">High Performance</SelectItem>
            <SelectItem value="battery-saver">Battery Saver</SelectItem>
          </Select>
        </div>
        <Button variant="outline" class="w-full" @click="$router.push('/')">Back to Home</Button>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
/*import { Card, CardContent } from 'components/ui/card';
import { Button } from 'components/ui/button';
import { Switch } from 'components/ui/switch';
import { Select, SelectItem } from 'components/ui/select';
import { Settings } from 'lucide-react';*/


const darkMode = ref(false);
const notifications = ref(true);
const performanceMode = ref('balanced');
</script>

<style scoped>
/* Add any specific styles here */
</style>
