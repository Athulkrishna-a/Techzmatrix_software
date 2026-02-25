import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiUsers,
  FiFileText,
  FiLogOut,
  FiPlus,
  FiClipboard,
  FiTrash2,
  FiMenu,
  FiX,
  FiHome,
} from "react-icons/fi";


const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${
      active
        ? "bg-cyan-500 text-white"
        : "text-white/80 hover:bg-cyan-400/30"
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);


const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer", dept: "IT", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Designer", dept: "UI/UX", status: "Inactive" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    dept: "",
    status: "Active",
  });

  const [taskData, setTaskData] = useState({ empId: "", task: "" });

  useEffect(() => {
    document.title = "Admin Dashboard ";
  }, []);


  const addEmployee = () => {
    if (!newEmployee.name || !newEmployee.role || !newEmployee.dept) {
      alert("Fill all fields");
      return;
    }
    setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
    setNewEmployee({ name: "", role: "", dept: "", status: "Active" });
    setShowAddForm(false);
  };

  const assignTask = () => {
    if (!taskData.empId || !taskData.task) {
      alert("Fill all fields");
      return;
    }
    const emp = employees.find(e => e.id === Number(taskData.empId));
    alert(`Task "${taskData.task}" assigned to ${emp?.name}`);
    setTaskData({ empId: "", task: "" });
    setShowTaskForm(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

 
  const renderContent = () => {
    if (activeTab === "Overview") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard icon={FiUsers} title="Total Employees" value={employees.length} />
          <StatCard
            icon={FiUser}
            title="Active Users"
            value={employees.filter(e => e.status === "Active").length}
          />
          <StatCard icon={FiFileText} title="Tasks Assigned" value={45} />
        </div>
      );
    }

    if (activeTab === "Employees") {
      return (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Employees</h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <ActionBtn icon={FiPlus} label="Add Employee" onClick={() => setShowAddForm(true)} />
              <ActionBtn icon={FiClipboard} label="Assign Task" onClick={() => setShowTaskForm(true)} />
            </div>
          </div>


          <div className="overflow-x-auto rounded-xl bg-cyan-500/80">
            <table className="min-w-[700px] w-full text-left">
              <thead className="bg-gray-800 ">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-b border-gray-700 hover:bg-gray-700  text-black  hover:text-white">
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3">{emp.role}</td>
                    <td className="p-3">{emp.dept}</td>
                    <td className="p-3">{emp.status}</td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="flex items-center gap-1 bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                      >
                        <FiTrash2 /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === "Tasks") {
      return (
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Tasks</h2>
          <div className="bg-gray-800/60 p-4 rounded-xl">
            Task management (mock)
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative flex h-screen overflow-hidden text-white">
   
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(355,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px),
            radial-gradient(circle 800px at 0% 200px, rgba(95,153,196,0.35), transparent 0%)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <FiMenu size={22} />
          </button>
          <h1 className="font-bold text-lg">Admin Dashboard</h1>
        </div>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400"
        >
          <FiHome size={18} />
          <span className="hidden sm:inline">Home</span>
        </button>
      </header>

    
      <aside
        className={`fixed lg:static z-30 top-0 left-0 h-full w-64 bg-gray-800/90 backdrop-blur p-5
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-bold">Admin</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        <SidebarItem icon={FiUser} label="Overview" active={activeTab === "Overview"} onClick={() => { setActiveTab("Overview"); setSidebarOpen(false); }} />
        <SidebarItem icon={FiUsers} label="Employees" active={activeTab === "Employees"} onClick={() => { setActiveTab("Employees"); setSidebarOpen(false); }} />
        <SidebarItem icon={FiFileText} label="Tasks" active={activeTab === "Tasks"} onClick={() => { setActiveTab("Tasks"); setSidebarOpen(false); }} />

        <div className="mt-auto pt-6">
          <SidebarItem icon={FiLogOut} label="Logout" onClick={() => alert("Logging out")} />
        </div>
      </aside>

      
      <main className="relative z-10 flex-1 overflow-y-auto pt-20 lg:pt-24 p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>

      
      {showAddForm && (
        <Modal onClose={() => setShowAddForm(false)}>
          <h2 className="text-xl font-bold mb-3">Add Employee</h2>
          <Input placeholder="Name" value={newEmployee.name} onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })} />
          <Input placeholder="Role" value={newEmployee.role} onChange={e => setNewEmployee({ ...newEmployee, role: e.target.value })} />
          <Input placeholder="Department" value={newEmployee.dept} onChange={e => setNewEmployee({ ...newEmployee, dept: e.target.value })} />
          <ModalActions onCancel={() => setShowAddForm(false)} onSubmit={addEmployee} submitText="Add" />
        </Modal>
      )}

      {showTaskForm && (
        <Modal onClose={() => setShowTaskForm(false)}>
          <h2 className="text-xl font-bold mb-3">Assign Task</h2>
          <select
            className="w-full p-2 mb-2 rounded bg-white/10"
            value={taskData.empId}
            onChange={e => setTaskData({ ...taskData, empId: e.target.value })}
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.id}>{emp.name}</option>
            ))}
          </select>
          <Input placeholder="Task" value={taskData.task} onChange={e => setTaskData({ ...taskData, task: e.target.value })} />
          <ModalActions onCancel={() => setShowTaskForm(false)} onSubmit={assignTask} submitText="Assign" />
        </Modal>
      )}
    </section>
  );
};


const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-gray-800/60 p-5 rounded-xl">
    <Icon size={28} className="text-cyan-400 mb-2" />
    <p className="text-white/70">{title}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

const ActionBtn = ({ icon: Icon, label, onClick }) => (
  <button onClick={onClick} className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-lg">
    <Icon /> {label}
  </button>
);

const Input = (props) => (
  <input
    {...props}
    className="w-full p-2 mb-2 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
  />
);

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
    <div className="relative bg-gray-800 w-full h-full sm:h-auto sm:max-w-md p-5 sm:rounded-2xl overflow-y-auto">
      <button onClick={onClose} className="absolute top-4 right-4 sm:hidden">✕</button>
      {children}
    </div>
  </div>
);

const ModalActions = ({ onCancel, onSubmit, submitText }) => (
  <div className="flex justify-end gap-2 mt-3">
    <button onClick={onCancel} className="px-4 py-2 bg-gray-600 rounded">Cancel</button>
    <button onClick={onSubmit} className="px-4 py-2 bg-cyan-500 rounded">{submitText}</button>
  </div>
);

export default AdminDashboard;
