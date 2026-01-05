import { useState, useRef } from "react";
import { Upload, FileSpreadsheet, Database, FileCode, X } from "lucide-react";

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
}

const UploadSection = ({ onFileUpload }: UploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "csv":
        return <FileSpreadsheet className="w-5 h-5 text-success" />;
      case "db":
        return <Database className="w-5 h-5 text-primary" />;
      case "sql":
        return <FileCode className="w-5 h-5 text-warning" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="auxora-card">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Upload Database
      </h2>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept=".csv,.db,.sql"
        className="hidden"
      />

      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-muted-foreground"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center glow-primary-sm">
            <Upload className="w-8 h-8 text-primary-foreground" />
          </div>

          <div>
            <p className="text-foreground font-medium mb-1">
              Drag and drop your database file
            </p>
            <p className="text-sm text-muted-foreground">
              Supports CSV, DB, and SQL formats
            </p>
          </div>

          <button onClick={handleUploadClick} className="auxora-button-primary">
            Browse Files
          </button>
        </div>
      </div>

      {/* Selected File */}
      {selectedFile && (
        <div className="mt-4 flex items-center justify-between p-3 bg-secondary rounded-lg animate-fade-in">
          <div className="flex items-center gap-3">
            {getFileIcon(selectedFile.name)}
            <div>
              <p className="text-sm font-medium text-foreground">
                {selectedFile.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <button
            onClick={clearFile}
            className="p-1 text-muted-foreground hover:text-destructive transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Supported Formats */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileSpreadsheet className="w-4 h-4 text-success" />
          <span className="text-xs">.csv</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Database className="w-4 h-4 text-primary" />
          <span className="text-xs">.db</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileCode className="w-4 h-4 text-warning" />
          <span className="text-xs">.sql</span>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
