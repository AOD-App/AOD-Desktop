interface ConnectionStatusProps {
    isConnected: boolean
  }
  
  export default function ConnectionStatus({ isConnected }: ConnectionStatusProps) {
    return (
      <div className={`p-6 rounded-lg shadow-md ${isConnected ? "bg-green-500" : "bg-red-500"}`}>
        <h2 className="text-xl font-semibold text-white">
          {isConnected ? "Connected to Mobile Phone" : "Not Connected"}
        </h2>
      </div>
    )
  }
  
  