import { Home, Bot, Info, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuxoraLogo from "@/components/AuxoraLogo";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "kai", label: "KAI", icon: Bot },
    { id: "about", label: "About Us", icon: Info },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <AuxoraLogo size="md" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full ${isActive ? "auxora-sidebar-item-active" : "auxora-sidebar-item"}`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="auxora-sidebar-item w-full text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
