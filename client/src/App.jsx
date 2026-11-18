import { Navigate, Route, Routes } from "react-router-dom";
import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Attendence from "./pages/Attendence";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Payslips from "./pages/Payslips";
import Settings from "./pages/Settings";
import PrintPayslips from "./pages/PrintPayslip";
import Leave from "./pages/Leave";
import Toaster from "react-hot-toast";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <>
      {/* <Toaster/> */}
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        // for login the employee and admin portal
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin-Portal"
              subtitle="Sign in to Manage The Orgnization"
            />
          }
        />
        <Route
          path="/login/employee"
          element={
            <LoginForm
              role="employee"
              title="Employee Portal"
              subtitle="Sign in to access your acount"
            />
          }
        />
        // this route is for a sidebar
        <Route element={<Layout />}>
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslips />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
