import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserActivities from "./pages/UserActivities/UserActivities";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";
import UserLayout from "./components/UserLayout/UserLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [activeUserId, setActiveUserId] = useState<number>(0);

  return (
    <>
      <ToastContainer/>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <UserLayout activeUserId={activeUserId}>
                  <Dashboard />
                </UserLayout>
              }
            />
            <Route
              path="/users/:id"
              element={
                <UserLayout activeUserId={activeUserId}>
                  <UserProfile setActiveUserId={setActiveUserId} />
                </UserLayout>
              }
            />
            <Route path="/users/:id/activity" element={<UserActivities />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
