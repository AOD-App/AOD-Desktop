"use client"

import { useState } from "react"
import Layout from "../components/layout"

interface ToggleProps {
  label: string
  enabled: boolean
  onChange: () => void
}

function Toggle({ label, enabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <button
        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
          enabled ? "bg-blue-600" : "bg-gray-200"
        }`}
        onClick={onChange}
      >
        <span
          className={`inline-block w-4 h-4 transform transition ease-in-out duration-200 bg-white rounded-full ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  )
}

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    autoConnect: false,
    darkMode: false,
    soundAlerts: true,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <div className="space-y-6">
          <Toggle
            label="Enable Notifications"
            enabled={settings.notifications}
            onChange={() => toggleSetting("notifications")}
          />
          <Toggle
            label="Auto-connect on Start"
            enabled={settings.autoConnect}
            onChange={() => toggleSetting("autoConnect")}
          />
          <Toggle label="Dark Mode" enabled={settings.darkMode} onChange={() => toggleSetting("darkMode")} />
          <Toggle label="Sound Alerts" enabled={settings.soundAlerts} onChange={() => toggleSetting("soundAlerts")} />
        </div>
      </div>
    </Layout>
  )
}

