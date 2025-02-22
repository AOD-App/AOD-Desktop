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
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="flex items-center mb-4">
        <Settings className="cursor-pointer" onClick={() => navigate("/settings")} />
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
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>Back to Home</Button>
        </CardContent>
      </Card>
    </div>
  );
}
