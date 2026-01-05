import { User, Bell } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-3 px-3 py-2 hover:bg-secondary rounded-lg transition-all">
          <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-foreground">User</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
