import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Layout(props: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleNavigate = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white text-black p-4 shadow-md text-center">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      <main>{props.children}</main>
      <footer className="dock dock-md">
        <button
          onClick={() => handleNavigate("/")}
          className={activeTab === "/" ? "dock-active" : ""}
        >
          <HomeOutlinedIcon className="size-[1.2em]" />
          <span className="dock-label">Home</span>
        </button>

        <button  onClick={() => handleNavigate('/myreserve')}
          className={activeTab === '/myreserve' ? "dock-active" : ""}>
          <InboxOutlinedIcon className="size-[1.2em]" />
          <span className="dock-label">My Reservation</span>
        </button>

        <button  onClick={() => handleNavigate('/settings')}
          className={activeTab === '/settings' ? "dock-active" : ""}>
          <SettingsOutlinedIcon className="size-[1.2em]" />
          <span className="dock-label">Settings</span>
        </button>
      </footer>
    </div>
  );
}
