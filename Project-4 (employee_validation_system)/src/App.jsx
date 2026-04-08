import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // 'admin' or 'employee'
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext); // array of employees

  // On mount, check if a user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed.role || null);

      if (parsed.role === "employee") {
        setLoggedInUserData(parsed.data);
      }
    }
  }, []);

  // Handle login for admin or employee
  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // Employee login
    if (authData && Array.isArray(authData)) {
      const employee = authData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    // Invalid login
    alert("Invalid Credentials");
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {/* Show login if no user */}
      {!user && <Login handleLogin={handleLogin} />}

      {/* Show dashboards based on role */}
      {user === "admin" && (
        <AdminDashboard changeUser={handleLogout} />
      )}
      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          changeUser={handleLogout}
          data={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;