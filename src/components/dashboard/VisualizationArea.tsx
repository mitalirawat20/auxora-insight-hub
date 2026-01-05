import { BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface VisualizationAreaProps {
  hasData: boolean;
}

const VisualizationArea = ({ hasData }: VisualizationAreaProps) => {
  // Sample data for visualization
  const areaData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
  ];

  const barData = [
    { name: "A", value: 65 },
    { name: "B", value: 45 },
    { name: "C", value: 85 },
    { name: "D", value: 55 },
    { name: "E", value: 75 },
  ];

  if (!hasData) {
    return (
      <div className="auxora-card h-full flex flex-col items-center justify-center text-center py-16">
        <div className="grid grid-cols-2 gap-4 mb-6 opacity-30">
          <div className="p-4 bg-secondary rounded-lg">
            <BarChart3 className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <PieChart className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <LineChart className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <TrendingUp className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No Data to Visualize
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Upload a database file to see analytical charts and insights powered by KAI
        </p>
      </div>
    );
  }

  return (
    <div className="auxora-card h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">
          Data Visualization
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-success">Live Analysis</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart */}
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Trend Analysis
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 8%)",
                    border: "1px solid hsl(222, 30%, 18%)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(187, 85%, 53%)"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Category Distribution
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 8%)",
                    border: "1px solid hsl(222, 30%, 18%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="hsl(187, 85%, 53%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-secondary/50 rounded-xl text-center">
          <p className="text-2xl font-bold text-gradient">1,234</p>
          <p className="text-xs text-muted-foreground mt-1">Total Records</p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-xl text-center">
          <p className="text-2xl font-bold text-gradient">89%</p>
          <p className="text-xs text-muted-foreground mt-1">Data Quality</p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-xl text-center">
          <p className="text-2xl font-bold text-gradient">12</p>
          <p className="text-xs text-muted-foreground mt-1">Columns</p>
        </div>
      </div>
    </div>
  );
};

export default VisualizationArea;
