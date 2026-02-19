import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiClipboard,
  FiBell,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const tabs = [
  { name: "Dashboard", icon: FiHome },
  { name: "Profile", icon: FiUser },
  { name: "Tasks", icon: FiClipboard },
  { name: "Announcements", icon: FiBell },
];

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Employee Dashboard ";
  }, []);

  const renderScreen = () => {
    const motionProps = {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
    };

    switch (activeTab) {
      case "Dashboard":
        return (
          <motion.div
            {...motionProps}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {[
              { label: "Tasks Assigned", value: 12 },
              { label: "Pending Reviews", value: 3 },
              { label: "Announcements", value: 5 },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl glow-edge tm-glass tm-noise p-6 shadow-xl"
              >
                <h3 className="text-white text-base font-medium mb-2">
                  {card.label}
                </h3>
                <p className="text-white text-2xl font-bold">{card.value}</p>
              </div>
            ))}
          </motion.div>
        );

      case "Profile":
        return (
          <motion.div
            {...motionProps}
            className="rounded-2xl glow-edge tm-glass tm-noise p-6 shadow-xl max-w-xl"
          >
            <h3 className="text-white text-lg font-semibold mb-4">
              Profile Info
            </h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>Name: John Doe</p>
              <p>Employee ID: EMP1234</p>
              <p>Department: IT</p>
              <p>Role: Developer</p>
            </div>
          </motion.div>
        );

      case "Tasks":
        return (
          <motion.div
            {...motionProps}
            className="rounded-2xl glow-edge tm-glass tm-noise p-6 shadow-xl max-w-xl"
          >
            <h3 className="text-white text-lg font-semibold mb-4">
              Recent Tasks
            </h3>
            <ul className="list-disc pl-5 text-white/70 space-y-1 text-sm">
              <li>Fix login bug</li>
              <li>Update project documentation</li>
              <li>Prepare team meeting</li>
            </ul>
          </motion.div>
        );

      case "Announcements":
        return (
          <motion.div
            {...motionProps}
            className="rounded-2xl glow-edge tm-glass tm-noise p-6 shadow-xl max-w-xl"
          >
            <h3 className="text-white text-lg font-semibold mb-4">
              Announcements
            </h3>
            <ul className="list-disc pl-5 text-white/70 space-y-1 text-sm">
              <li>All hands meeting on Friday</li>
              <li>New project assigned to IT team</li>
              <li>Update your timesheets</li>
            </ul>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px),
            radial-gradient(circle 800px at 0% 200px, rgba(95,153,196,0.35), transparent 0%)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      {/* Mobile Header */}
      <header className="relative z-20 flex items-center justify-between p-4 lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white"
        >
          <FiMenu size={22} />
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 bg-cyan-500px-3 py-1.5 rounded-lg text-sm font-medium"
        >
          <FiHome /> Home
        </Link>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-blue-400">Employee</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FiX className="text-white" />
              </button>
            </div>

            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => {
                    setActiveTab(tab.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg text-left ${
                    activeTab === tab.name
                      ? "bg-cyan-500 text-white"
                      : "text-white hover:bg-cyan-500"
                  }`}
                >
                  <Icon size={18} />
                  {tab.name}
                </button>
              );
            })}

            <Link
              to="/"
              className="mt-auto flex items-center gap-3 p-3 rounded-lg text-white hover:bg-red-500"
            >
              <FiLogOut /> Logout
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Layout */}
      <div className="relative z-10 hidden lg:flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 p-6 flex flex-col gap-6 bg-gray-800/30 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-blue-400">Employee</h2>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-3 p-3 rounded-lg text-left ${
                  activeTab === tab.name
                    ? "bg-cyan-500 text-white"
                    : "text-white hover:bg-cyan-500"
                }`}
              >
                <Icon size={18} />
                {tab.name}
              </button>
            );
          })}

          <Link
            to="/"
            className="mt-auto flex items-center gap-3 p-3 rounded-lg text-white hover:bg-red-500"
          >
            <FiLogOut /> Logout
          </Link>
        </aside>

     
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-400">{activeTab}</h1>
            <Link
              to="/"
              className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg font-medium"
            >
              <FiHome /> Home
            </Link>
          </div>

          {renderScreen()}
        </main>
      </div>

      {/* Mobile Content */}
      <main className="relative z-10 p-4 lg:hidden">{renderScreen()}</main>
    </div>
  );
};

export default EmployeeDashboard;
