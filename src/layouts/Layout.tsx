import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Layout(props: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.pathname);

  // keep active tab in sync when user navigates (e.g., via links)
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Sticky / fixed-on-scroll header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md">
        <div className="max-w-screen-md mx-auto px-4 py-3 text-center">
          <h1 className="text-2xl font-bold text-base-content">My App</h1>
        </div>
      </header>

      {/* Main content with bottom padding so the dock doesn't cover content */}
      <main className="flex-1 max-w-screen-md mx-auto w-full px-3 py-2 pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
        {props.children}
      </main>

      {/* Fixed bottom dock (navbar) */}
      <footer className="fixed inset-x-0 bottom-0 z-40 bg-base-100/95 backdrop-blur border-t border-base-300">
        <div className="dock dock-md max-w-screen-md mx-auto px-2 pt-1 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          <button
            onClick={() => handleNavigate("/")}
            className={activeTab === "/" ? "dock-active" : ""}
            aria-current={activeTab === "/" ? "page" : undefined}
            aria-label="Home"
          >
            <HomeOutlinedIcon className="size-[1.2em]" />
            <span className="dock-label">Home</span>
          </button>

          <button
            onClick={() => handleNavigate("/myreserve")}
            className={activeTab === "/myreserve" ? "dock-active" : ""}
            aria-current={activeTab === "/myreserve" ? "page" : undefined}
            aria-label="My Reservation"
          >
            <InboxOutlinedIcon className="size-[1.2em]" />
            <span className="dock-label">My Reservation</span>
          </button>

          <button
            onClick={() => handleNavigate("/settings")}
            className={activeTab === "/settings" ? "dock-active" : ""}
            aria-current={activeTab === "/settings" ? "page" : undefined}
            aria-label="Settings"
          >
            <SettingsOutlinedIcon className="size-[1.2em]" />
            <span className="dock-label">Settings</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
