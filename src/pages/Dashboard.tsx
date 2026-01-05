import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import UploadSection from "@/components/dashboard/UploadSection";
import VisualizationArea from "@/components/dashboard/VisualizationArea";
import PreviousDatabases from "@/components/dashboard/PreviousDatabases";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [hasUploadedData, setHasUploadedData] = useState(false);

  const handleFileUpload = (file: File) => {
    console.log("File uploaded:", file.name);
    setHasUploadedData(true);
  };

  const getPageTitle = () => {
    switch (activeItem) {
      case "home":
        return "Dashboard";
      case "kai":
        return "KAI - AI Assistant";
      case "about":
        return "About Us";
      case "help":
        return "Help & Support";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header title={getPageTitle()} />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {activeItem === "home" && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-full animate-fade-in">
              {/* Left Column - Upload + Visualization */}
              <div className="xl:col-span-8 space-y-6">
                <UploadSection onFileUpload={handleFileUpload} />
                <VisualizationArea hasData={hasUploadedData} />
              </div>

              {/* Right Column - Previous Databases */}
              <div className="xl:col-span-4">
                <PreviousDatabases />
              </div>
            </div>
          )}

          {activeItem === "kai" && (
            <div className="auxora-card animate-fade-in">
              <div className="text-center py-16">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-primary">
                  <span className="text-3xl font-bold text-primary-foreground">K</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Meet KAI
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Your AI-powered Q&A assistant. Upload a database and ask KAI anything about your data.
                </p>
                <div className="max-w-lg mx-auto">
                  <input
                    type="text"
                    placeholder="Ask KAI a question about your data..."
                    className="auxora-input text-center"
                  />
                </div>
              </div>
            </div>
          )}

          {activeItem === "about" && (
            <div className="auxora-card animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About AuxoraAI
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AuxoraAI is a cutting-edge AI platform designed to help you analyze and understand your data. 
                Our flagship AI agent, KAI, can answer questions about any database you upload, providing 
                insights and visualizations to help you make data-driven decisions.
              </p>
            </div>
          )}

          {activeItem === "help" && (
            <div className="auxora-card animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Help & Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Need assistance? We're here to help you get the most out of AuxoraAI.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Getting Started</h3>
                  <p className="text-sm text-muted-foreground">Learn how to upload your first database and start querying with KAI.</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
                  <p className="text-sm text-muted-foreground">Reach out to our support team for personalized assistance.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
