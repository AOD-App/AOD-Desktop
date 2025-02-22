"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import ConnectionStatus from "../components/connection-status";
import Tile from "../components/tile";
import { Settings } from "lucide-react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate(); // For navigation

  // Simulate connection toggle (replace with actual logic)
  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header with Settings Icon */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
          <h1 className="text-4xl font-bold text-center flex-grow text-center">Android to Desktop Integration</h1>
          <Settings
            className="cursor-pointer text-2xl hover:text-gray-300"
            onClick={() => navigate("/settings")}
          />
        </div>

        <div className="flex justify-center">
          <button onClick={toggleConnection} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Toggle Connection (Demo)
          </button>
        </div>

        <ConnectionStatus isConnected={isConnected} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Tile title="File Transfer" href="/file-transfer" />
          <Tile title="Notifications" href="/notifications" />
          <Tile title="Messages" href="/messages" />
          <Tile title="Apps" href="/apps" />
          <Tile title="Media Control" href="/media-control" />
          <Tile title="Screen Mirroring" href="/screen-mirroring" />
        </div>
      </div>
    </Layout>
  );
}
