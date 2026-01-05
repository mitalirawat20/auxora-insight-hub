import { FileSpreadsheet, Database, FileCode, Clock, ChevronRight } from "lucide-react";

interface DatabaseFile {
  id: string;
  name: string;
  type: "csv" | "db" | "sql";
  size: string;
  uploadedAt: string;
}

const PreviousDatabases = () => {
  const previousFiles: DatabaseFile[] = [
    {
      id: "1",
      name: "sales_data_2024.csv",
      type: "csv",
      size: "2.4 MB",
      uploadedAt: "2 hours ago",
    },
    {
      id: "2",
      name: "customer_db.db",
      type: "db",
      size: "15.2 MB",
      uploadedAt: "Yesterday",
    },
    {
      id: "3",
      name: "inventory.sql",
      type: "sql",
      size: "890 KB",
      uploadedAt: "3 days ago",
    },
    {
      id: "4",
      name: "analytics_q4.csv",
      type: "csv",
      size: "5.1 MB",
      uploadedAt: "1 week ago",
    },
    {
      id: "5",
      name: "users_backup.db",
      type: "db",
      size: "8.7 MB",
      uploadedAt: "2 weeks ago",
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
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

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "csv":
        return "bg-success/10 text-success";
      case "db":
        return "bg-primary/10 text-primary";
      case "sql":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="auxora-card h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Previously Used Databases
        </h2>
        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
          {previousFiles.length} files
        </span>
      </div>

      <div className="space-y-2">
        {previousFiles.map((file) => (
          <button
            key={file.id}
            className="w-full p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {getFileIcon(file.type)}
              <div className="text-left">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate max-w-[140px]">
                  {file.name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-xs px-1.5 py-0.5 rounded uppercase font-medium ${getTypeBadgeColor(file.type)}`}>
                    {file.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {file.size}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{file.uploadedAt}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* View All Link */}
      <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors">
        View all databases →
      </button>
    </div>
  );
};

export default PreviousDatabases;
