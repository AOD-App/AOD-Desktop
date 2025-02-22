import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectItem } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [performanceMode, setPerformanceMode] = useState("balanced");
  const navigate = useNavigate(); // For navigation

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Settings Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <Settings className="cursor-pointer text-2xl hover:text-gray-300" onClick={() => navigate("/settings")} />
        <h1 className="text-2xl font-semibold ml-2">Settings</h1>
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div className="flex justify-between items-center">
            <span>Enable Notifications</span>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div>
            <span className="block mb-2">Performance Mode</span>
            <Select value={performanceMode} onValueChange={setPerformanceMode}>
              <SelectItem value="balanced">Balanced</SelectItem>
              <SelectItem value="high-performance">High Performance</SelectItem>
              <SelectItem value="battery-saver">Battery Saver</SelectItem>
            </Select>
          </div>
          {/* Button to go back to Home Page */}
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>Back to Home</Button>
        </CardContent>
      </Card>
    </div>
  );
}
